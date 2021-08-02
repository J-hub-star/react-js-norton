import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './styles.css'
import ZTableContainer from '../../components/Table/TableContainer';
import {COLUMNS} from '../../components/Table/columns';
import Popup from '../../components/Popups/ModelHot';
//import ModalOrphan from '../../components/Popups/ModalOrphan';
import newHotPlanet from '../../components/Utils/hottestHost';
import filterDataOprhanPlanets from '../../components/Utils/filterData';
import {Link} from 'react-router-dom';

function ModalOrphan({planets,handleClose}) {
    return (
        <div className="popup-box">
        <div className="box">
            <h4> The Oprhan Planets are: </h4>
            <span className="close-icon" onClick={handleClose}>x</span>
            {planets.map((planet)=> (
                <div>
                    {planet.PlanetIdentifier}
                </div>
            ))}
            </div>
        </div>
    )
}

export default function SolutionPage() 
{
    //storing the planet state 
    const [planet,setPlanet] = useState([]);

    const [oplanets,SetOrPlanets] = useState([])

    //making a state to handle reloads
    const[reload,setReload] = useState(0);

    //Making state to handle hottest star
     const [hot,setHot] = useState({});

    //state to handle popup
    const [popup,setPopup] = useState(false);

    //state to handle orphan planets
    const [orphan,setOprhan] = useState(false)

    //making a function that fetches the data
    function getData()
    {
        const url = "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets";
        axios.get(url).then((response) => setPlanet(response.data));
        //console.log(planet)
    }

    const togglePopup = () => {
        setPopup(!popup);
    }

    const togglePopupO = () => {
        //SetOrPlanets(oplanets);
        setOprhan(!orphan);
        
    }

    useEffect(()=>{
        getData();
        setHot(newHotPlanet(planet));
        var data = filterDataOprhanPlanets(planet)
        SetOrPlanets(data);
    },[reload])

    

    //return jsx
    return (
        <div className="styling">
            <div className="three-btns">
            <button className="btn-m" onClick={()=>{setReload(reload+1)}}>Click to load data</button>
            <button className="btn-m" onClick={togglePopupO}> Click to see oprphan planets</button>
            <button className="btn-m" onClick={togglePopup}> Click to Display Hottest Planet</button>
            <Link to='TimeLine'><button className="btn-m"> To TimeLine</button></Link>
            </div>
            {popup && <Popup
                boilerPlate='The Hottest Planet is : '
                content={(hot)}
                handleClose={togglePopup}
                />}

            {orphan &&<ModalOrphan planets={oplanets}
                                  handleClose={togglePopupO}  />}

            <ZTableContainer columns={COLUMNS} data={planet} />
        </div>
    )
}
