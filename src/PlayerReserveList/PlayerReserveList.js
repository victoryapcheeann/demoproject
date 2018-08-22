import React, { Component } from 'react';
import './PlayerReserveList.css';

class PlayerReserveList extends Component {
  render() {
    return (
        <div className = "playerContainer">
          <div className= "rowStyle">
            <img src="./player1.jpg" className="playerImage"/>
            <div className = "playerDescriptionContainer">
              <div className="rowStyle">
                <span>ronaldo</span>
                <img src="./country1.jpg" className="countryImage"/>
              </div>
              <div className="horizontalLine"></div>
              <div>striker</div>
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
