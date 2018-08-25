import React, {Component} from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import data from './radarData.json'

class RadarChart extends Component {
    render() {
      return (
        <ResponsiveRadar    
            data={data}
            keys={[
                "chardonay",
                "carmenere",
                "syrah"
            ]}
            indexBy="taste"
            maxValue="auto"
            margin={{
                "top": 70,
                "right": 80,
                "bottom": 40,
                "left": 80
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
                    translateX: -50,
                    translateY: -40,
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