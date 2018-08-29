import React, { Component } from 'react';
import { backgroundAnimation } from './BackgroundAnimation';

class Background extends Component {
   componentDidMount() {
        backgroundAnimation();
    }
    
  render() {
    return (
        <canvas id = "canvasTwo" width="0" height="0" className="particleContainer backgroundImage">
        Your browser does not support this feature.
       </canvas>
    );
  }
}

export default Background;
