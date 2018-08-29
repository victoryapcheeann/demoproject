import React, { Component } from 'react';
import './Main.css';
import scrollToComponent from 'react-scroll-to-component';
import Fade from 'react-reveal/Fade';

import Logo from './Logo/Logo';
import Background from './Background/Background';
import ParticleScroll from './ParticleScroll/ParticleScroll';
import PlayerCard from '../Card/PlayerCard/PlayerCard';
import TeamCard from '../Card/TeamCard/TeamCard';
import Stats from '../Chart/Chart';


class Main extends Component {
     scrollFunction =  () => {
        scrollToComponent(this.Start, { offset: 0, align: 'top', duration: 500})
     }

  render() {
    return (
    <div>
        <div>
            <div>
            <Fade duration={10000}>
                <Background />
            </Fade>
                <div className="mainContainer columnStyle">
                    <div className="headerStyle rowStyle">
                        <Fade bottom duration={4000}>
                         <Logo />
                        </Fade>
                        <Fade top duration={2000}>
                            <div className = "headertext">Victor Yap<br/>
                                <span className = "nep-highlight">FIFA FANTASY</span>
                            </div>
                        </Fade>
                    </div>                   
                    <div className="introContainer mainTitleStyle">   
                      <Fade top duration={2000}>                 
                            <span>Your dream team</span>
                                <br/>
                                <br/>
                            <span>3 simple steps</span>
                                <br/>
                                <br/>
                            <span>Let's begin</span>  
                            <ParticleScroll passedFunction={this.scrollFunction}/>
                      </Fade>
                        </div> 
                    </div> 
                </div>
            </div>
            <div>
                <div className="mainContainer2 columnStyle">
                    <div className="sectionContainer playerSectionContainer" ref={(section) => { this.Start = section; }}>
                        <div className="rowStyle">
                        <PlayerCard/> 
                        </div>
                    </div>
                 <div className="sectionContainer teamSectionContainer">
                    <div className="rowStyle">
                        <TeamCard/>
                    </div>
                 </div>
                 <div className="sectionContainer statisticsSectionContainer">
                     <Stats/>
                 </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Main;
