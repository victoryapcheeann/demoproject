import React, {Component} from 'react'
import { ResponsiveChord } from '@nivo/chord'
import data from './chordData.json'

class Chord extends Component {
    render() {
      return (
        <ResponsiveChord
        matrix={data}
        keys={[
            "John",
            "Raoul",
            "Jane",
            "Marcel",
            "Ibrahim"
        ]}
        margin={{
            "top": 60,
            "right": 60,
            "bottom": 90,
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
        colors="nivo"
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
                "anchor": "bottom",
                "direction": "row",
                "translateY": 70,
                "itemWidth": 80,
                "itemHeight": 14,
                "symbolSize": 14,
                "symbolShape": "circle"
            }
        ]}
    />
    )
    }
}

export default Chord