import React, { Component } from 'react';
import {Cell, Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';


const data = [
    { attribute: 'Math', score: 10, fullscore: 100, domain: [0,100]},
    { attribute: 'Chinese', score: 18, fullscore: 100, domain: [0,100]},
    { attribute: 'English', score: 16, fullscore: 100, domain: [0,100]},
    { attribute: 'Geography', score: 19, fullscore: 100, domain: [0,100]},
    { attribute: 'Physics', score: 10, fullscore: 100, domain: [0,100]}
];

class PlayerRadarChart extends Component {
  render() {
    return (
    	<RadarChart cx={70} cy={50} outerRadius={30} width={150} height={90} data={data}>
          <PolarGrid stroke="#D3D3D3"/>
          <PolarAngleAxis domain={[0, 1000]} dataKey="attribute" tick={{ fill: 'orange', fontSize: 7 }}/>
          <Radar name="Mike" dataKey="score" stroke="white" fill="orange" fillOpacity={0.6}>
             {
                data.map((entry, index) => (
                <Cell domain={[0, entry.fullscore]} key={`cell-${index}`}/>
                ))
            }
          </Radar>
        </RadarChart>
    );
  }
}

export default PlayerRadarChart;
