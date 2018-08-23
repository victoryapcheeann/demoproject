import React, { Component } from 'react';
import './PlayerReserveList.css';

class PlayerReserveList extends Component {
  render() {
    return (
        <div className = "playerContainer">
          <div className= "columnStyle">
            <img src="./player1.jpg" className="playerImage"/>
            <div className = "playerDescriptionContainer">
              <span className = "playerTitleContainer">
                <span>ronaldo</span>
                <span>Juventus</span>
              </span>
              <div className="horizontalLine"></div>
              <span>Fantasy Role</span>
              <span>striker</span>
            </div>
          </div>
          <button className="addButton">
               <span>Add team</span>
          </button>
        </div>
    );
  }
}

export default PlayerReserveList;
