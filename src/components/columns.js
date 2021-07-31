import { SelectColumnFilter } from './Filter';

export const COLUMNS = [
    {
        Header : 'Planet Name',
        Footer:'Planet Name',
        accessor: 'PlanetIdentifier',
        disableFilters: true
    },
    {
        Header: 'Stellar System Type',
        Footer:'Stellar System',
        accessor: 'TypeFlag',
        Filter: SelectColumnFilter,
    },
    {
        Header: 'Planet Size',
        Footer:'Size',
        accessor: 'RadiusJpt',
        disableFilters: true
    },
    {
        Header: 'Host Star Temperature',
        Footer:'Temperature',
        accessor:'HostStarTempK',
        disableFilters: true
    },
    {
        Header:'Discovered In',
        Footer:'Year',
        accessor:'DiscoveryYear',
        
    }

]