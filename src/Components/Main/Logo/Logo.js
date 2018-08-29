import React, { Component } from 'react';
import { logoAnimation } from './LogoAnimation';

class Logo extends Component {
   componentDidMount() {
      logoAnimation();
    }

  render() {
    return (
        <div>
            <canvas id="canvasOne" width="100" height="80" ></canvas>
        </div>
    );
  }
}

export default Logo;
