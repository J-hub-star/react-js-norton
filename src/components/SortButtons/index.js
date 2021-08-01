import React from 'react'
import './styles.css';

export default function ButtonJsx(sorted) {
    
    let sortedColor = sorted["sorted"];
    return (
        
        <div className={` btn ${sortedColor}`} >
            
        </div>
        
    )
}