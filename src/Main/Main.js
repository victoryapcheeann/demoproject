import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Main.css';
import './MainAnimation';
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
                    <div className="introContainer mainTitleStyle">
                        <span>Your dream team</span>
                        <br/>
                        <br/>
                        <span>3 simple steps</span>
                        <br/>
                        <br/>
                        <span>Let's begin</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="mainContainer2 columnStyle">
                 <div className="sectionContainer">
                    <span className="mainTitleStyle">Step 1: Choose your player</span>
                    <PlayerCard/> 
                 </div>
                 <div className="sectionContainer">
                    <span className="mainTitleStyle">Step 2: Your team</span>
                    <PlayerTeamCard/>
                 </div>
                 <div className="sectionContainer">
                     <span className="mainTitleStyle">Step 3: statistics</span>
                 </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Main;
