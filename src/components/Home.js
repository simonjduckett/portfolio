import React, { Component } from 'react';
import IntroText from './IntroText';
import MiniNav from './MiniNav';

export class Home extends Component {

    move() {
        document.getElementById('hero-image').style.width = '50%';
        document.getElementById('hero-image').style.backgroundPosition = '0px 100px';
        
        document.getElementById('introtextcontainer').style.width = '50%';
        document.getElementById('intro-text').style.opacity = '1';
        document.getElementById('htext').style.opacity = '0';
    }

    render() {
        return (
            <div data-aos='fade-in'>
                <header id='header' onClick={this.move}>
                    <div id='hero-image'>
                        <div id='htext' className='hero-text'>
                            <h1>LOGO</h1>
                            <p>Click to enter.</p>
                        </div>
                        
                    </div>
                    <div id='introtextcontainer'>
                        <IntroText />
                        <MiniNav />
                    </div>
                </header>
            </div>
        );
    }
}