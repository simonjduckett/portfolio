import React, { Component } from 'react';
import { Topbar } from './topbar';

export class Home extends Component {
    render() {
        return (
            <div>
                <Topbar color={'topbar topbar__light'} />
                <header>
                    <div className='container'>
                        <div className='hero-text rellax' data-rellax-speed="4">
                            <h1>WEB<br />DEVELOPER</h1>
                            <p>Click to enter.</p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}