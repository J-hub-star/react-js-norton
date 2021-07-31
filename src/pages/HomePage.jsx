import React,{useState,useEffect,useContext} from 'react'
import axios from "axios";
import Table from '../components/Table'
import {COLUMNS} from '../components/columns';
import './styles.css';
import Tour from 'reactour'
import getTopN from '../components/FindMax';
import getMax from '../components/WayTwo';
import Popup from '../components/Popup';

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
    const [reload,setReload] = useState(0);
    const [isTourOpen, setIsTourOpen] = useState(true);
    const [popup,setPopup] = useState(false);
    const [hotPlanet,setHotPlanet] = useState({});
    const [orphan,setOrphan] = useState({});
    
    function getData()
    {
        const url = "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets";
        axios.get(url).then((response) => setPlanets(response.data));
        
    }

    function newHotPlanet()
    {
        var maxPpg = getMax(planets, "HostStarTempK");
        setHotPlanet(maxPpg);
    }
    useEffect(()=>
    {
        getData();
        newHotPlanet();
        console.log(hotPlanet)
    },[reload])
    useEffect(()=>
    {
        getData();
        console.log(planets)
        newHotPlanet();
    },[])
    function handleReload(e)
    {
        getData();
        setReload(reload+1)
    }
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setPopup(!popup);
    }
    function handlePopup(e)
    {
        e.preventDefault();
        getData();
        var maxPpg = getMax(planets, "HostStarTempK");
        setHotPlanet(maxPpg);
        console.log(hotPlanet);
        setPopup(true);
    }
    function handleOrphanPlanets(e)
    {
        e.preventDefault();
        var orphans = planets.filter(function(el) 
        {
            return el.["TypeFlag"] == 3;
        });
        //console.log(orphans)
        setOrphan(orphans)
    }
    function checker(StateArg)
    {
        if(StateArg !== undefined)
        {
            return StateArg;
        }
        else
        {
            return "try again";
        }
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
            <button onClick={togglePopup} className="sol3"> Click to Display Hottest Planet</button>
            
            {popup && <Popup
                boilerPlate='The Hottest Planet is : '
                content={(hotPlanet)}
                handleClose={togglePopup}
                />}
            <Table className="table-component" data={planets} columns={COLUMNS}></Table>
            
        </div>
    )
}
