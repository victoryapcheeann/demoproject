import React from 'react';
import mojs from 'mo-js';

class ClickBurst extends React.Component {
  state = {
    numBurstsToGenerate: 5,
    bursts: [],
  }

  rand = ({ min = 0, max = 1, int = true }) => {
    if (int) {
      return Math.floor(Math.random() * (max - min) + min)
    } else {
      return Math.random() * (max - min) + min
    }
  }

  generateBursts = (numBursts = this.state.numBurstsToGenerate) => {
    this.setState({
      bursts: [],
    })

    while (this.state.bursts.length < this.state.numBurstsToGenerate) {
      this.state.bursts.push(
        new mojs.Burst({
          left: 0,
          top: 0,
					count: 5,
					radius: 	{10:50},
					angle: 		{ 0: 140, easing: mojs.easing.bezier(0.1, 1, 0.8, 1) },
          children: {
            shape: 'polygon',
            radius: {3: 0},
            scale: 1,
            stroke: `${this.props.color}`,
            strokeWidth: 3,
            angle: 30,
            delay: 3,
            speed: 1.2,
            easing: mojs.easing.bezier(0.1, 1, 0.8 ,1),
            duration: 500
          },
          onStart() {
            this.el.style.zIndex = `9999`
          },
          onComplete() {
            this.el.style.zIndex = `-6666` 
          },
        })
      )
    }
  }

  componentDidMount() {
    if (this.state.bursts.length !== this.state.numBurstsToGenerate) {
      this.generateBursts()
    }
  }

  kaboom = (e, child) => {
    e.stopPropagation()

    if (this.state.bursts.length !== this.state.numBurstsToGenerate) {
      this.generateBursts()
    }

    this.state.bursts[this.rand({ max: this.state.bursts.length })]
      .tune({ x: e.pageX, y: e.pageY })
      .replay()

    if (child.props.onClick) {
      child.props.onClick()
    }
  }

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: e => this.kaboom(e, child),
        style: {
          cursor: `pointer`,
          userSelect: `none`,
        },
      })
    })
  }
}

export default ClickBurst;
