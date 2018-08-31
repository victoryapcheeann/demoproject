import React, { Component } from 'react';
import './PlayerCard.css';
import { connect } from "react-redux";
import { addPlayer } from '../../../actions';
import GIFButton from '../GIFButton/GIFButton';
import FlipMove from 'react-flip-move';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimateOnChange from 'react-animate-on-change';
import SearchInput, {createFilter} from 'react-search-input'
import { FaInfoCircle } from "react-icons/fa";

const KEYS_TO_FILTERS = ['Name', 'Team', 'Role', 'SpecialMove']

class PlayerCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  addPlayer(player) {
    if (this.props.teamPlayers.length < 11) {
      this.props.addPlayer(player);
    }
    else {
      toast.info('🦄 Your team is full !!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'toastStyle'
      });
    }
  }

  render() {
    const filteredPlayers = this.props.players.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <div className="mainTitleStyle mainTitleContainer">
        <span>Step 1: Choose your player      
          <AnimateOnChange
            baseClassName="length" 
            animationClassName="length-changed" 
            animate={this.props.teamPlayers.length != 0}>
            <span> {this.props.teamPlayers.length}</span>
          </AnimateOnChange>
          <span>/11</span>
        </span>
        <div className="rowStyle">
        <div className="tooltip">
          <FaInfoCircle/>
          <span class="tooltiptext">You can search via player name, <br/> team, position and special move</span>
        </div>
          <SearchInput className="search-input" onChange={this.searchUpdated} placeholder="Search"/>
        </div>
      </div>
      <FlipMove enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal" className="rowStyle">
        {
        filteredPlayers.map((player) => {
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
                    <GIFButton GIF={player.GIF} SpecialMove={player.SpecialMove} textStyle={"playerSpecialMoveText"}/>
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
                      <button className="playerAddButton" onClick={()=>(this.addPlayer(player))}>
                          <span>Add player</span>
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
    players: state.players,
    teamPlayers: state.team
  };
}

const mapDispatchToProps = {
  addPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
