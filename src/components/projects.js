import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Projecttable } from './project-table';
import data from '../data.json';

export class Projects extends Component {

    componentDidMount() {
        document.getElementById('topbar').style.visibility = 'visible';
        document.getElementById('topbar').style.opacity = '1';
    }

    render() {
        let web = data.projects[0].web.length
        let music = data.projects[0].music.length
        return (
            <div id='projects' className='padding-top'>
                    <div className='container-fluid'>
                        <h1>Projects</h1>
                        <div id='subnav'>
                        <NavLink 
                            activeClassName='activeNavLink' 
                            className='proj-menu-link' 
                            to={'/projects/web'}>Web ({web})
                        </NavLink>
                        <NavLink 
                            activeClassName='activeNavLink' 
                            className='proj-menu-link' 
                            to={'/projects/music'}>Music ({music})
                        </NavLink>
                            <hr />
                            <Route path='/projects/web' render={() => { return <Projecttable data={data.projects[0].web} /> }} />
                            <Route path='/projects/music' render={() => { return <Projecttable data={data.projects[0].music} /> }} />
                        </div>
                    </div>
            </div>
        );
    }
}