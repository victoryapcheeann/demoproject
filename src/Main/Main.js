import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Main.css';
import './MainAnimation';
import './MainAnimation2';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerTeamCard from '../PlayerTeamCard/PlayerTeamCard';

class Main extends Component {
  render() {
    return (
    <div>
        <div>
            <div>
               <canvas id = "canvasTwo" class="particleContainer"></canvas>
                <div className="mainContainer columnStyle">
                    <div className="headerStyle rowStyle">
                        <Logo />
                        <div className = "headertext">Victor Yap<br/>
                            <span className = "nep-highlight">FIFA FANTASY</span>
                        </div>
                    </div>
                    <div className="rowStyle">
                        <PlayerCard/> 
                        <PlayerTeamCard/>
                    </div>
                </div>
            </div>
            <div>
                <canvas id = "canvasThree" class="particleContainer2"></canvas>
                <div className="mainContainer2 rowStyle">
                 <PlayerCard/> 
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Main;
