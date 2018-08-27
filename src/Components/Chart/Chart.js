import React, { Component } from 'react';
import './Chart.css';
import { connect } from "react-redux";
import RadarChart from "./RadarChart/RadarChart";
import Chord from "./Chord/Chord";
import _ from 'lodash';
import { getChemistryScore } from './Utility.js';

class Chart extends Component {
  render() {
    return (
      <div>
        <span className="mainTitleStyle">Step 3: statistics</span>
        <div className="mainChartContainer rowStyle">
            <div className="chartContainer containerShadow">
                <span className="chartHeader">Team Stats</span>
                <RadarChart players={this.props.players}/>
            </div>
        </div>
        <div className="mainChartContainer rowStyle">
            <div className="chartContainer2 containerShadow">
                <div className="columnStyle">
                  <span className="chartHeader">Team Chemistry</span>
                  <br/>
                  <span className="scoreHeader">Score: {getChemistryScore(this.props.players)}</span>
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

export default connect(mapStateToProps, null)(Chart);

