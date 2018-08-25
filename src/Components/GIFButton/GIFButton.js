import React, { Component } from 'react';
import './GIFButton.css';

class GIFButton extends Component {
  render() {
    return (
        <div>
            <div className="Project">
              <img src={this.props.GIF} alt="" className="imgMasked" />
              <div className="Project-hail"></div>
              <div className="Project-hail2"></div>
              <p className="Project-name">Special Move: <br/>{this.props.SpecialMove}</p>
            </div>
        </div>
    );
  }
}

export default GIFButton;
