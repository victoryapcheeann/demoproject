import React, { Component } from 'react';
import './GIFButton.css';

class GIFButton extends Component {
  render() {
    return (
        <div>
            <div class="Project">
            <img src="https://media.giphy.com/media/5haLplsVsUT7i/giphy.gif" alt="" class="imgMasked" />
            <div class="Project-hail"></div>
            <div class="Project-hail2"></div>
            <p class="Project-name">Special Move: <br/>Team Hug</p>
            </div>
        </div>
    );
  }
}

export default GIFButton;
