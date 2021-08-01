import React from 'react';
import Logo from './Capture.JPG';
import './styles.scss'

export default function Header() {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    
                </div>
               
            </div>
        </header>
    )
}
