import React from 'react';
import Logo from './Capture.PNG';
import './styles.scss'

export default function Header() {
    return (
        <header data-test="HeaderComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="imageHeader" src={Logo} alt="logo" />
                    
                </div>
               
            </div>
        </header>
    )
}
