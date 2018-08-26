import React, {Component} from 'react'
import { ResponsiveChord } from '@nivo/chord'
import data from './chordData.json'
import _ from 'lodash';

class Chord extends Component {
    getKeys() {    
        let keys = this.props.players.map(function(value){
            return value.Name
        });
        return(keys);
    };

    getChordData() {
        if (this.props.players.length > 0) {
            let teamArray = this.props.players.map(function(value){
                return value.ID
            });  

            let chemistryArray = this.props.players.map(function(value){
                return _(value.Chemistry).keyBy('ID').at(teamArray).value();
            });  

            let chordData = chemistryArray.map(function(value){
                return value.map(function(nested){
                    return nested.ChemistryPoint
                })
            }); 
            return(chordData)
        }
        else {
            return([])
        }
    }

    render() {
      return (
        <ResponsiveChord
        matrix={this.getChordData()}
        keys={this.getKeys()}
        margin={{
            "top": 120,
            "right": 60,
            "bottom": 120,
            "left": 60
        }}
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        arcOpacity={1}
        arcBorderWidth={1}
        arcBorderColor="inherit:darker(0.4)"
        ribbonOpacity={0.5}
        ribbonBorderWidth={1}
        ribbonBorderColor="inherit:darker(0.4)"
        enableLabel={true}
        label="id"
        labelOffset={12}
        labelRotation={-90}
        labelTextColor="inherit:darker(1)"
        colors="paired"
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        legends={[
            {
                "anchor": "top-left",
                "direction": "column",
                "translateY": -100,
                "translateX": -60,
                "itemWidth": 80,
                "itemHeight": 20,
                "symbolSize": 14,
                "symbolShape": "circle"
            }
        ]}
    />
    )
    }
}

export default Chord