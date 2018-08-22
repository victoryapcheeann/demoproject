import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Background.css';
import './BackgroundAnimation';

class App extends Component {
  render() {
    return (
    <div>
        <div class="rowStyle">
            <Logo />
            <div class = "moon-text">Victor Yap<br/>
                <span class = "nep-highlight">FIFA FANTASY</span>
            </div>
        </div>
        <canvas id = "canvasTwo"></canvas>
    </div>
    );
  }
}

export default App;
