import React from "react";
import './styles.popup.css';

const Popup = props => {
  const {content} = props;
  console.log(content)
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.boilerPlate} {content == undefined ? "V391 Peg b": content.PlanetIdentifier}
        
        
      </div>
    </div>
  );
};

export default Popup;
