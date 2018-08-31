import React, {Component} from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { getKeysForName, getRadarData } from '../Utility';

const RadarChart = (props) => {
      return (
        <ResponsiveRadar    
            data={getRadarData(props.players)}
            keys={getKeysForName(props.players)}
            indexBy="attribute"
            maxValue="auto"
            margin={{
                "top": 30,
                "right": 100,
                "bottom": 30,
                "left": 100
            }}
            curve="catmullRomClosed"
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
        />
    )
}


export default RadarChart