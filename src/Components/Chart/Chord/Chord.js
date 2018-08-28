import React, {Component} from 'react'
import { ResponsiveChord } from '@nivo/chord'
import { getKeysForName, getChordData } from '../Utility';

class Chord extends Component {
    render() {
      return (
        <ResponsiveChord
        matrix={getChordData(this.props.players)}
        keys={getKeysForName(this.props.players)}
        margin={{
            "top": 160,
            "right": 160,
            "bottom": 160,
            "left": 220
        }}
        padAngle={0.02}
        innerRadiusRatio={0.90}
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
                anchor: "top-left",
                direction: "column",
                translateX: -220,
                translateY: -100,
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

export default Chord