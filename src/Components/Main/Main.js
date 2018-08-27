import React, { Component } from 'react';
import Logo from './Logo/Logo';
import './Main.css';
import './Scroll.css';
import './MainAnimation';
import scrollToComponent from 'react-scroll-to-component';
import ParticleEffect from 'react-particle-effect-button'
import PlayerCard from '../Card/PlayerCard/PlayerCard';
import TeamCard from '../Card/TeamCard/TeamCard';
import Stats from '../Chart/Chart';
import Fade from 'react-reveal/Fade';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            hidden: false,
            animating: false
        };
      }

      expandToggle = () => {
        if (this.state.animating) return
    
         this.setState({
           expanded: !this.state.expanded,
           hidden: !this.state.hidden,
           animating: true
         })
       }
    
      _onAnimationComplete = () => {
          this.setState({
            animating: false
          })
          scrollToComponent(this.Start, { offset: 0, align: 'top', duration: 500})
        }

  render() {
    const { hidden } = this.state;

    return (
    <div>
        <div>
            <div>
            <Fade duration={10000}>
               <canvas id = "canvasTwo" width="0" height="0" className="particleContainer backgroundImage">
                    Your browser does not support this feature.
               </canvas>
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
                    </Fade>
                        <div onClick={this.expandToggle }>                     
                    <Fade bottom duration={2000}>       
                        <ParticleEffect                    
                            hidden={hidden}
                            onComplete={this._onAnimationComplete}
                            style={'fill'}
                            color={'white'}
                            type={'circle'}
                            duration={500}
                            direction={'top'}
                            particlesAmountCoefficient={7}
                            oscillationCoefficient={30}>
                            <div>
                            <div className="scrolldown-container">
                            <div className="scrolldown-btn">
                                <svg version="1.1" id="Слой_1" x="0px" y="0px" width="50px" height="80px">
                                <path className="first-path" fill="#00000"d="M0 10 L10 21 L20 10"></path>
                                <path className="second-path" fill="#00000"d="M0 20 L10 31 L20 20"></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        </ParticleEffect>
                    </Fade>
                        </div> 
                    </div> 
                </div>
            </div>
            <div>
                <div className="mainContainer2 columnStyle">
                    <div className="sectionContainer playerSectionContainer playerScroll" ref={(section) => { this.Start = section; }}>
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
    </div>
    );
  }
}

export default Main;
