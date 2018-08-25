import React, { Component } from 'react';
import './PlayerTeamCard.css';
import GIFButton from '../GIFButton/GIFButton'

class PlayerTeamCard extends Component {
  render() {
    return (
        <div className = "playerTeamContainer columnStyle">
          <div className= "playerTeamSubContainer columnStyle">
            <img src="./player1.jpg" alt="player" className="playerTeamImage"/>
            <div className = "playerTeamDescriptionContainer">
              <span className = "playerTeamDescriptionSubContainer">
                <span className="playerTeamDescriptionTitle">Player</span>
                <span className="playerTeamDescriptionDetails">ronaldo</span>
              </span>
              <div className="playerTeamHorizontalLine"></div>
              <span className = "playerTeamDescriptionSubContainer">
                <span className="playerTeamDescriptionTitle">Team</span>
                <span className="playerTeamDescriptionDetails">Juventus</span>
              </span>
              <div className="playerTeamHorizontalLine"></div>
                <span className = "playerTeamDescriptionSubContainer">
                 <span className="playerTeamDescriptionTitle">Fantasy Role</span>
                 <span className="playerTeamDescriptionDetails">striker</span>
                </span>
              <div className="playerTeamHorizontalLine"></div>
            </div>     
            <div className="playerTeamAttributeContainer rowStyle">
                <div className="columnStyle playerTeamAttributeTitle">
                  <span>Strength</span>
                  <span>Agility</span>
                  <span>Intelligence</span>
                  <span>Strategy</span>
                  <span>Popularity</span>
                </div>
                <div className="columnStyle playerTeamAttributeScore">
                  <span>10</span>
                  <span>9</span>
                  <span>9</span>
                  <span>5</span>
                  <span>10</span>
                </div>
            </div>
            <div className="playerTeamGifContainer">
                <div className="playerTeamSpecialMoveText">Special Move</div>
                <GIFButton/>
              </div>
            <button className="playerTeamRemoveButton">
                <span>Remove Player</span>
            </button>
            
          </div>
        </div>
    );
  }
}

export default PlayerTeamCard;
