import React, { Component } from 'react';
import './PlayerCard.css';
import GIFButton from '../GIFButton/GIFButton'

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
              <div className="playerHorizontalLine"></div>
              <span className = "playerDescriptionSubContainer">
                <span className="playerDescriptionTitle">Team</span>
                <span className="playerDescriptionDetails">Juventus</span>
              </span>
              <div className="playerHorizontalLine"></div>
                <span className = "playerDescriptionSubContainer">
                 <span className="playerDescriptionTitle">Fantasy Role</span>
                 <span className="playerDescriptionDetails">striker</span>
                </span>
              <div className="playerHorizontalLine"></div>
            </div>     
            <div className="playerAttributeContainer rowStyle">
                <div className="columnStyle playerAttributeTitle">
                  <span>Strength</span>
                  <span>Agility</span>
                  <span>Intelligence</span>
                  <span>Strategy</span>
                  <span>Popularity</span>
                </div>
                <div className="columnStyle playerAttributeScore">
                  <span>10</span>
                  <span>9</span>
                  <span>9</span>
                  <span>5</span>
                  <span>10</span>
                </div>
            </div>
            <div className="playerGifContainer">
                <div className="playerSpecialMoveText">Special Move</div>
                <GIFButton/>
              </div>
            <button className="playerAddButton">
                <span>Add player</span>
            </button>
            
          </div>
        </div>
    );
  }
}

export default PlayerCard;
