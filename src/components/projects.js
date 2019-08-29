import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { Topbar } from './topbar';
import { Web } from './web';
import { Music } from './music';

export class Projects extends Component {
    render() {
        return (
            <div className='padding-top'>
                <Topbar color={'topbar topbar__dark'} />
                    <div className='container'>
                        <h1>Projects</h1>
                        <Link to={'/projects/web'}>Web</Link>
                        <Link to={'/projects/music'}>Music</Link>
                        <hr />
                        <Route path='/projects/web' render={() => { return <Web /> }} />
                        <Route path='/projects/music' render={() => { return <Music /> }} />

                    </div>

                
            </div>
        );
    }
}