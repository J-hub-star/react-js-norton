import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ZTableContainer from '../../components/Table/TableContainer';
import {COLUMNS} from '../../components/Table/columns';

export default function SolutionPage() 
{
    //storing the planet state 
    const [planet,setPlanet] = useState([]);

    //making a state to handle reloads
    const[reload,setReload] = useState(0);

    //making a function that fetches the data
    function getData()
    {
        const url = "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets";
        axios.get(url).then((response) => setPlanet(response.data));
        console.log(planet)
    }

    useEffect(()=>{
        getData();
    },[reload])

    

    //return jsx
    return (
        <div>
            <button onClick={()=>{setReload(reload+1)}}>Click to load data</button>
            <button> Click to see oprphan planets</button>
            <button> Click to see plaent with hottest host star</button>

            <ZTableContainer columns={COLUMNS} data={planet} />
        </div>
    )
}
