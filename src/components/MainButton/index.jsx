import React from 'react'
import './styles.css';
import {Link} from 'react-router-dom';


export default function MainButton() {
    return (
        <div className="center-div">
            <div className="child">
                <Link to='/Solutions'>  <button className='btn-main'> Navigate to solution</button></Link>
               
            </div>
            
        </div>
    )
}
