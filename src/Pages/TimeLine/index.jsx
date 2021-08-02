import React,{useState,useEffect} from 'react';
import axios from 'axios';
import newHotPlanet from '../../components/Utils/JsonGroupBy';

import './styles.css';

export default function TimeLine() {

    const [data,setData] = useState([]);

    const [reload,setReload] = useState(0);

    const [uniqueYear,setUniqueYear] = useState([]);

    const [yearData,setYearData]  = useState([]);

    function getData()
    {
        const url = "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets";
        axios.get(url).then((response) => setData(response.data));
        //console.log(data);
    }

    function getUnique()
    {
        const arr = data.map(item=>item.DiscoveryYear)
        const un = new Set(arr)
        setUniqueYear(un)
        //console.log(uniqueYear)
        //console.log(un)
    }

    function getFinalOutput(){
        let array = Array.from(uniqueYear)
        //console.log(array)
        //lets sort the data on discovery year
        data.sort((a,b)=>b.DiscoveryYear-a.DiscoveryYear)
        //console.log(data)
        let finalOutput = []
        array.sort((a,b)=>b-a)
        
        let yearR = 0
        let year = array[yearR]
        for(let i =0; i< array.length;i++)
        {
            finalOutput.push({"Year":array[yearR],"Small":0,"Meduim":0,"Large":0})
            for(let j=0;j<data.length;j++)
            {
                if(data[j].DiscoveryYear == array[yearR] && data[j].RadiusJpt < 1)
                {finalOutput[i]["Small"] = finalOutput[i]["Small"]+1;}
                else if(data[j].DiscoveryYear == array[yearR] && data[j].RadiusJpt >2 )
                {finalOutput[i]["Large"] = finalOutput[i]["Large"]+1;}
                else if(data[j].DiscoveryYear == array[yearR] && data[j].RadiusJpt < 2 && data[j].RadiusJpt > 1)
                {finalOutput[i]["Meduim"] = finalOutput[i]["Meduim"]+1;}
            }
            yearR = yearR+1;
        }
        
        setYearData(finalOutput)
        
        console.log(  reload )
    }

    useEffect(()=>{
        getData();
        getFinalOutput()
        getUnique()
    },[reload])

    function reloadPage(){
        setReload(reload+1);
    }

    return (
        <div>
            <h1></h1>
            <button className="btn-main" onClick={reloadPage}>Load TimeLine(Click Twice)</button>
           
           <div className="timeline-container">
            {yearData.map((data)=>{return<div className="timeline-item">
            <div className="timeline-item-content">
               Year: {data.Year} Small: {data.Small } Meduim: {data.Meduim} Large: { data.Large}
                </div>
                <span className="circle" ></span>
                </div>})}
           </div>
        </div>
    )
}
