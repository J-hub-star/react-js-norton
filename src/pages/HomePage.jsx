import React,{useState,useEffect,useContext} from 'react'
import axios from "axios";
import Table from '../components/Table'
import {COLUMNS} from '../components/columns';
import './styles.css';
import Tour from 'reactour'

const steps = [
  {
    selector: '.Welcome',
    content: 'This is my solution to take home assignment',
  },
  {
      selector: '.reload-btn',
      content: ' This buttons reloads the data if need be'
  },
  {
      selector: '.btn-tutorial',
      content: 'These buttons right next to table heading help sort the data. If the button is white it is unsorted, if the button in red then it is sorted in descending order. If it is green it is sorted in ascending order'
  },
  {
      selector: '.sol1',
      content: 'To find out about orphan planets Go to the dropdown next to Stellar Formation column and select 3'
  },
  {
      selector: '.sol2',
      content: 'To group the planets by the year they where discovered please type in the input box next to " Discovered In"'
  },
  {
      selector: '.sol3',
      content: 'To Find the Hottest star Press the dot button next to Host Temperature column'
  }
];



export default function HomePage() {
    const [planets,setPlanets] = useState([]);
    const [reload,setReload] = useState(true);
    const [isTourOpen, setIsTourOpen] = useState(true);
    
    function getData()
    {
        const url = "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets";
        axios.get(url).then((response) => setPlanets(response.data));
        console.log("working");
        
    }
    useEffect(()=>
    {
        getData();
        
        
    },[reload])
    function handleReload(e)
    {
        getData();
    }
    return (
        <div>
            
            <h1 className = "Welcome">Planet Portal</h1>
            <Tour
                steps={steps}
                isOpen={isTourOpen}
                onRequestClose={() => setIsTourOpen(false)}
            />
            <button className="reload-btn" onClick={handleReload}> Reload Data</button>
            <Table className="table-component" data={planets} columns={COLUMNS}></Table>
            
        </div>
    )
}
