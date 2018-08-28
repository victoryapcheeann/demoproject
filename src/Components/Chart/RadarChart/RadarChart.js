import React, {Component} from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { getKeysForName, getRadarData } from '../Utility';

class RadarChart extends Component {
    render() {
      return (
        <ResponsiveRadar    
            data={getRadarData(this.props.players)}
            keys={getKeysForName(this.props.players)}
            indexBy="attribute"
            maxValue="auto"
            margin={{
                "top": 70,
                "right": 80,
                "bottom": 40,
                "left": 220
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