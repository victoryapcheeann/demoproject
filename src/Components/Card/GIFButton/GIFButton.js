import React from 'react';
import './GIFButton.css';

const GIFButton = (props) => {
    return (
        <div className="playerGifContainer">
            <div className="Project">
              <img src={props.GIF} alt="" className="imgMasked" />
              <div className="Project-hail"></div>
              <div className="Project-hail2"></div>
              <p className="Project-name">Special Move: <br/>{props.SpecialMove}</p>
            </div>
            <div className={props.textStyle}>Special Move</div>            
        </div> 
    );
  }

export default GIFButton;
