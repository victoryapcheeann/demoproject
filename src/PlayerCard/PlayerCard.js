import React, { Component } from 'react';
import './PlayerCard.css';
import { connect } from "react-redux";
import GIFButton from '../GIFButton/GIFButton'

class PlayerCard extends Component {
  render() {
    console.log(this.props.players);

    return (
      this.props.players.map(player => {
          return ( 
              <div className = "playerContainer columnStyle">
                <div className= "playerSubContainer columnStyle">
                  <img src={player.Photo} className="playerImage"/>
                  <div className = "playerDescriptionContainer">
                    <span className = "playerDescriptionSubContainer">
                      <span className="playerDescriptionTitle">Player</span>
                      <span className="playerDescriptionDetails">{player.Name}</span>
                    </span>
                    <div className="playerHorizontalLine"></div>
                    <span className = "playerDescriptionSubContainer">
                      <span className="playerDescriptionTitle">Team</span>
                      <span className="playerDescriptionDetails">{player.Team}</span>
                    </span>
                    <div className="playerHorizontalLine"></div>
                      <span className = "playerDescriptionSubContainer">
                      <span className="playerDescriptionTitle">Fantasy Role</span>
                      <span className="playerDescriptionDetails">{player.Role}</span>
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
                        <span>{player.Strength}</span>
                        <span>{player.Agility}</span>
                        <span>{player.Intelligence}</span>
                        <span>{player.Strategy}</span>
                        <span>{player.Popularity}</span>
                      </div>
                  </div>
                  <div className="playerGifContainer">
                      <div className="playerSpecialMoveText">Special Move</div>
                      <GIFButton GIF={player.GIF} SpecialMove={player.SpecialMove}/>
                    </div>
                  <button className="playerAddButton">
                      <span>Add player</span>
                  </button>
                  
                </div>
              </div>
          );
      })
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps, null)(PlayerCard);
