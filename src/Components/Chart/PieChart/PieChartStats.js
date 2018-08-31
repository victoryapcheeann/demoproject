import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { getPieData } from '../Utility';

const PieChartStats = (props) => {
      let pieData = getPieData(props.players)

      return (
        <ResponsivePie
        data={pieData[0]}
        margin={{
            "top": 30,
            "right": 100,
            "bottom": 80,
            "left": 100
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors="nivo"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.2)"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={{
            "tooltip": {
                "container": {
                    "fontSize": "10px"
                }
            },
            "labels": {
                "textColor": "#555"
            }
        }}
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "strength"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "intelligence"
                },
                "id": "lines"
            }
        ]}
    />
    )
}


export default PieChartStats