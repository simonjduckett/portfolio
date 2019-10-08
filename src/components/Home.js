import React, { Component } from 'react';
import IntroText from './IntroText';

export class Home extends Component {

    
    constructor(props) {
        super(props);

        this.move = this.move.bind(this)
    }

    componentDidMount() {
        if(this.props.firstload == false) {
            this.move();
        }
        else {
            document.getElementById('topbar').style.opacity = '0';
            document.getElementById('topbar').style.visibility = 'hidden';
        }
    }
    
    move() {
        this.props.logfirstload()
        if(this.props.x.matches){
            console.log('match')
            document.getElementById('hero-image').style.float = 'none';
            document.getElementById('hero-image').style.height = '200px';
            document.getElementById('introtextcontainer').style.width = '100%';
            document.getElementById('hero-image').style.width = '100%';
        }
        else {
            document.getElementById('introtextcontainer').style.width = '50%';
            document.getElementById('hero-image').style.width = '50%';
        }
        document.getElementById('hero-image').style.backgroundPosition = '0px 100px';
        document.getElementById('intro-text').style.opacity = '1';
        document.getElementById('mini-nav').style.opacity = '1';
        document.getElementById('htext').style.opacity = '0';
        document.getElementById('topbar').style.visibility = 'visible';
        document.getElementById('topbar').style.opacity = '1';
        
    }

    render() {
        return (
            <div data-aos='fade-in'>
                <header id='header' onClick={this.move}>
                    <div id='hero-image'>
                        <div id='htext' className='hero-text'>
                            <h1>Hi, I'm Simon</h1>
                            <p>Click to enter.</p>
                        </div>
                        
                    </div>
                    <div id='introtextcontainer'>
                        <IntroText />
                    </div>
                </header>
            </div>
        );
    }
}