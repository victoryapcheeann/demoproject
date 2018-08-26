import React, {Component} from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import _ from 'lodash';

class RadarChart extends Component {
    getKeys() {    
        let keys = this.props.players.map(function(value){
            return value.Name
        });
        
        return(keys);
    };

    getRadarData() {
        if (this.props.players.length > 0) {
            let radarDataContainer = [];

                let strengthArray = this.props.players.map(function(value){
                    return {key: value.Name, value: value.Strength}
                });            
                let strengthData = _.chain(strengthArray).keyBy('key').mapValues('value').value();
                let strengthHeader = {"attribute": "strength"}
                let strengthCombined = _.merge(strengthHeader, strengthData);
                radarDataContainer.push(strengthCombined);

                let agilityArray = this.props.players.map(function(value){
                    return {key: value.Name, value: value.Agility}
                });            
                let agilityData = _.chain(agilityArray).keyBy('key').mapValues('value').value();
                let agilityHeader = {"attribute": "agility"}
                let agilityCombined = _.merge(agilityHeader, agilityData);
                radarDataContainer.push(agilityCombined);

                let intelligenceArray = this.props.players.map(function(value){
                    return {key: value.Name, value: value.Intelligence}
                });            
                let intelligenceData = _.chain(intelligenceArray).keyBy('key').mapValues('value').value();
                let intelligenceHeader = {"attribute": "intelligence"}
                let intelligenceCombined = _.merge(intelligenceHeader, intelligenceData);
                radarDataContainer.push(intelligenceCombined);
                
                let strategyArray = this.props.players.map(function(value){
                    return {key: value.Name, value: value.Strategy}
                });            
                let strategyData = _.chain(strategyArray).keyBy('key').mapValues('value').value();
                let strategyHeader = {"attribute": "strategy"}
                let strategyCombined = _.merge(strategyHeader, strategyData);
                radarDataContainer.push(strategyCombined);

                let popularityArray = this.props.players.map(function(value){
                    return {key: value.Name, value: value.Popularity}
                });            
                let popularityData = _.chain(popularityArray).keyBy('key').mapValues('value').value();
                let popularityHeader = {"attribute": "popularity"}
                let popularityCombined = _.merge(popularityHeader, popularityData);
                radarDataContainer.push(popularityCombined);
                return(radarDataContainer);
        }
        else {
            return([])
        }
    }

    render() {
      return (
        <ResponsiveRadar    
            data={this.getRadarData()}
            keys={this.getKeys()}
            indexBy="attribute"
            maxValue="auto"
            margin={{
                "top": 70,
                "right": 80,
                "bottom": 40,
                "left": 220
            }}
            curve="catmullRomClosed"
            colors="inherit"
            borderWidth={2}
            borderColor="inherit"
            gridLevels={2}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={8}
            dotColor="inherit"
            dotBorderWidth={0}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors="paired"
            colorBy="key"
            fillOpacity={0.1}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={[
                {
                    anchor: "top-left",
                    direction: "column",
                    translateX: -220,
                    translateY: 0,
                    itemWidth: 80,
                    itemHeight: 20,
                    symbolSize: 12,
                    symbolShape: "circle"
                }
            ]}
        />
    )
    }
}

export default RadarChart