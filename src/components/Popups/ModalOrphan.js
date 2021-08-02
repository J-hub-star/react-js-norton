import React from 'react'
import './styles.css'

export default function ModalOrphan({planets,handleClose}) {
    return (
        <div className="popup-box">
        <div className="box">
            <h4> The Oprhan Planets are: </h4>
            {console.log( planets.TypeFlag)}
            <span className="close-icon" onClick={handleClose}>x</span>
            {planets.map((planet)=> (
                <div>
                    {console.log(planet)}
                    {planet.PlanetIdentifier}
                </div>
            ))}
            </div>
        </div>
    )
}
