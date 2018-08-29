import React, { Component } from 'react';
import './ParticleScroll.css';
import ParticleEffect from 'react-particle-effect-button'

class ParticleScroll extends Component {
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
          this.props.passedFunction()
        }

  render() {
    const { hidden } = this.state;

    return (
    <div onClick={this.expandToggle }>  
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
    </div>
    );
  }
}

export default ParticleScroll;
