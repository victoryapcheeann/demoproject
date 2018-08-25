import React, { Component } from 'react';
import './GIFButton.css';

class GIFButton extends Component {
  render() {
    return (
        <div>
            <div class="Project">
            <img src={this.props.GIF} alt="" class="imgMasked" />
            <div class="Project-hail"></div>
            <div class="Project-hail2"></div>
            <p class="Project-name">Special Move: <br/>{this.props.SpecialMove}</p>
            </div>
        </div>
    );
  }
}

export default GIFButton;
