import React from 'react'
import './styles.button.css'

export default function ButtonJsx(sorted) {
    
    let sortedColor = sorted["sorted"];
    return (
        
        <div className={`sol3 btn ${sortedColor}`} >
            
        </div>
        
    )
}
