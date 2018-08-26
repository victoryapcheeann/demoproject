import React, { Component } from 'react';
import './Stats.css';
import { connect } from "react-redux";
import RadarChart from "./RadarChart/RadarChart";
import Chord from "./Chord/Chord";
import _ from 'lodash';

class Stats extends Component {
    getChemistryScore() {
      let chemistryScore = 0;

      if (this.props.players.length > 0) {
          let currentTeam = this.props.players.map(function(value){
              return value.ID
          });  

          let chemistryList = this.props.players.map(function(value){
              return _(value.Chemistry).keyBy('ID').at(currentTeam).value();
          });  

          chemistryList.map(function(value){
              return value.map(function(nested){
                  chemistryScore = chemistryScore + nested.ChemistryPoint
              })
          }); 
          return(chemistryScore)
      }
      else {
          return("Add Player Please")
      }
  }

  render() {
    return (
      <div>
        <div className="mainChartContainer rowStyle">
            <div className="chartContainer2 containerShadow">
                <span className="chartHeader">Team Stats</span>
                <RadarChart players={this.props.players}/>
            </div>
        </div>
        <div className="mainChartContainer rowStyle">
            <div className="chartContainer2 containerShadow">
                <div className="columnStyle">
                  <span className="chartHeader">Team Chemistry</span>
                  <br/>
                  <span className="chartHeader">Score: {this.getChemistryScore()}</span>
                </div>
                <Chord players={this.props.players}/>
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.team
  };
}

export default connect(mapStateToProps, null)(Stats);

