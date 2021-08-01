import React from 'react';
import Logo from './Capture.PNG';
import './styles.scss'

export default function Header() {
    return (
        <header className="HeaderComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="imageHeader" src={Logo} alt="logo" />
                    
                </div>
               
            </div>
        </header>
    )
}
