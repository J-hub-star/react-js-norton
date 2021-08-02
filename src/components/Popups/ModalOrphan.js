import React from 'react'
import './styles.css'

export default function ModalOrphan({planets,handleClose}) {
    return (
        <div className="popup-box">
        <div className="box">
            <h4> The Oprhan Planets are: </h4>
            <span className="close-icon" onClick={handleClose}>x</span>
            {planets.map(planet=><p key={planet.PlanetIdentifier}> {planet.PlanetIdentifier}</p>)}
            </div>
        </div>
    )
}
