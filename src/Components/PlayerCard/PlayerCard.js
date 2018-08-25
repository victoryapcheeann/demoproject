import React, { Component } from 'react';
import './PlayerCard.css';
import { connect } from "react-redux";
import GIFButton from '../GIFButton/GIFButton'
import { addPlayer } from '../../actions';
import FlipMove from 'react-flip-move';
import ClickBurst from '../ClickBurst/ClickBurst'

class PlayerCard extends Component {
  addPlayer(player) {
    this.props.addPlayer(player);
  }

  render() {
    return (
      <FlipMove enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal" className="rowStyle">
        {
        this.props.players.map((player) => {
            return ( 
                <div key={player.ID} className = "playerContainer columnStyle">
                  <div className= "playerSubContainer columnStyle">
                    <img src={player.Photo} alt="player" className="playerImage"/>
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
                        <GIFButton GIF={player.GIF} SpecialMove={player.SpecialMove}/>
                        <div className="playerSpecialMoveText">Special Move</div>            
                      </div>
                    <ClickBurst color="#FF0066">
                      <button className="playerAddButton" onClick={()=>this.addPlayer(player)}>
                          <span>Add player</span>
                      </button>
                    </ClickBurst>
                  </div>
                </div>         
            );
        })
      }
      </FlipMove>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

const mapDispatchToProps = {
  addPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
