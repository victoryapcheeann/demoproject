import React, { Component } from 'react';
import './PlayerCard.css';
import PlayerRadarChart from '../PlayerRadarChart/PlayerRadarChart';

class PlayerCard extends Component {
  render() {
    return (
        <div className = "playerContainer columnStyle">
          <div className= "playerSubContainer columnStyle">
            <img src="./player1.jpg" className="playerImage"/>
            <div className = "playerDescriptionContainer">
              <span className = "playerDescriptionSubContainer">
                <span className="playerDescriptionTitle">Player</span>
                <span className="playerDescriptionDetails">ronaldo</span>
              </span>
              <div className="horizontalLine"></div>
              <span className = "playerDescriptionSubContainer">
                <span className="playerDescriptionTitle">Team</span>
                <span className="playerDescriptionDetails">Juventus</span>
              </span>
              <div className="horizontalLine"></div>
                <span className = "playerDescriptionSubContainer">
                 <span className="playerDescriptionTitle">Fantasy Role</span>
                 <span className="playerDescriptionDetails">striker</span>
                </span>
              <div className="horizontalLine"></div>
            </div>      
            <PlayerRadarChart />
            <button className="addButton">
                <span>Add player</span>
            </button>
          </div>
        </div>
    );
  }
}

export default PlayerCard;
