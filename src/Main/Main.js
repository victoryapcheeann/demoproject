import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Main.css';
import './MainAnimation';
import PlayerReserveList from '../PlayerCard/PlayerCard';

class Main extends Component {
  render() {
    return (
    <div>
        <canvas id = "canvasTwo" class="particleContainer"></canvas>
        <div className="mainContainer columnStyle">
            <div className="headerStyle rowStyle">
                <Logo />
                <div className = "headertext">Victor Yap<br/>
                    <span className = "nep-highlight">FIFA FANTASY</span>
                </div>
            </div>
            <PlayerReserveList/> 
        </div>
        
    </div>
    );
  }
}

export default Main;
