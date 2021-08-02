import { Table } from "react-bootstrap";
import { useTable,useSortBy,useFilters, usePagination } from "react-table";
//import { useTable } from "react-table"
import { Filter, DefaultColumnFilter } from './Filter'
import {  Row, Col, Button, Input, CustomInput } from "reactstrap";
import ButtonJsx from '../SortButtons';
import PaginationButton from '../PagniationButton';
import './styles.scss';

const ZTableContainer = ({ columns, data }) => {
    // you can get the react table functions by using the hook useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
    },
    useFilters,
    useSortBy,
    usePagination
  );
  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? <ButtonJsx className="btn-tutorial" sorted='Desc' /> : <ButtonJsx sorted='Asc' />) : <ButtonJsx sorted='inActive' />;
  };
  const onChangeInSelect = event => {
  setPageSize(Number(event.target.value))
}

const onChangeInInput = event => {
  const page = event.target.value ? Number(event.target.value) - 1 : 0
  gotoPage(page)
}

  return (
    <Table data-test="table" bordered {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
             
              return (
                <th {...column.getHeaderProps()}>
                <div className="btn-tutorial" {...column.getSortByToggleProps()}>
                  {column.render("Header")}
                  {generateSortingIndicator(column)}
                </div>
                <Filter column={column} />
              </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody  {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <Row style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
     <div className="pagination-table">
    <Col md={3}>
     
    
    </Col>
    <Col md={2} style={{ marginTop: 7 }}>
      Page{" "}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>
    </Col>
    <Col md={2}>
      <Input
        type="number"
        min={1}
        style={{ width: 70 }}
        max={pageOptions.length}
        defaultValue={pageIndex + 1}
        onChange={onChangeInInput}
      />
    </Col>
    <Col md={2}>
      <CustomInput className="select-drop" type="select" value={pageSize} onChange={onChangeInSelect}>
        >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option  className="option-drop" key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </CustomInput>
    </Col>
    <Col md={3}>
     
    </Col>
    </div>
  </Row>
    </Table>
  );
}

export default ZTableContainer;
