import React, { Component } from 'react';
import './TeamCard.css';
import { connect } from "react-redux";
import GIFButton from '../GIFButton/GIFButton'
import { removePlayer } from '../../../actions';
import FlipMove from 'react-flip-move';

class TeamCard extends Component {
  removePlayer(player) {this.props.removePlayer(player);}

  render() {
    return (
      <div>
      <span className="mainTitleStyle">Step 2: Your team</span>
      <FlipMove enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal" className="rowStyle">
      {
      this.props.players.map((player) => {
       return (
        <div key={player.ID} className = "playerTeamContainer columnStyle">
          <div className= "playerTeamSubContainer columnStyle">
            <img src={player.Photo} alt="player" className="playerTeamImage"/>
            <div className = "playerTeamDescriptionContainer">
              <span className = "playerTeamDescriptionSubContainer">
                <span className="playerTeamDescriptionTitle">Player</span>
                <span className="playerTeamDescriptionDetails">{player.Name}</span>
              </span>
              <div className="playerTeamHorizontalLine"></div>
              <span className = "playerTeamDescriptionSubContainer">
                <span className="playerTeamDescriptionTitle">Team</span>
                <span className="playerTeamDescriptionDetails">{player.Team}</span>
              </span>
              <div className="playerTeamHorizontalLine"></div>
                <span className = "playerTeamDescriptionSubContainer">
                 <span className="playerTeamDescriptionTitle">Fantasy Role</span>
                 <span className="playerTeamDescriptionDetails">{player.Role}</span>
                </span>
              <div className="playerTeamHorizontalLine"></div>
            </div>     
            <GIFButton GIF={player.GIF} SpecialMove={player.SpecialMove} textStyle={"playerTeamSpecialMoveText"}/>
            <div className="playerTeamAttributeContainer rowStyle">
                <div className="columnStyle playerTeamAttributeTitle">
                  <span>Strength</span>
                  <span>Agility</span>
                  <span>Intelligence</span>
                  <span>Strategy</span>
                  <span>Popularity</span>
                </div>
                <div className="columnStyle playerTeamAttributeScore">
                    <span>{player.Strength}</span>
                    <span>{player.Agility}</span>
                    <span>{player.Intelligence}</span>
                    <span>{player.Strategy}</span>
                    <span>{player.Popularity}</span>
                </div>
            </div>
                
              <button className="playerTeamRemoveButton" onClick={()=>this.removePlayer(player)}>
                  <span>Remove Player</span>
              </button>
          </div>
        </div>
        );
      })
     }
    </FlipMove>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.team
  };
}

const mapDispatchToProps = {
  removePlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamCard);

