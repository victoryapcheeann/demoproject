import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Main.css';
import './MainAnimation';
import PlayerReserveList from '../PlayerReserveList/PlayerReserveList';

class Main extends Component {
  render() {
    return (
    <div>
        <canvas id = "canvasTwo" class="particleContainer"></canvas>
        <div className="rowStyle">
            <Logo />
            <div className = "moon-text">Victor Yap<br/>
                <span className = "nep-highlight">FIFA FANTASY</span>
            </div>
        </div>
        <PlayerReserveList /> 
    </div>
    );
  }
}

export default Main;
