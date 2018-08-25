import React, { Component } from 'react';
import './Stats.css';
import { connect } from "react-redux";
import RadarChart from "./RadarChart/RadarChart";
import BarChart from "./BarChart/BarChart";
import LineChart from "./LineChart/LineChart";
import Chord from "./Chord/Chord";

class Stats extends Component {
  render() {
    return (
      <div>
        <div className="mainChartContainer rowStyle">
            <div className="chartContainer containerShadow">
                <span className="chartHeader">Team Stats</span>
                <RadarChart players={this.props.players}/>
            </div>
            <div className="chartContainer containerShadow">
                <span className="chartHeader">Team Position</span>
                <BarChart players={this.props.players}/>
            </div>
        </div>
        <div className="mainChartContainer rowStyle">
            <div className="chartContainer2 containerShadow">
                <span className="chartHeader">Team Chemistry</span>
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

