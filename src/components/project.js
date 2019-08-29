import React, { Component } from 'react';
import hack from '../videos/hack.mp4';

export class Project extends Component {
    
    render() {
        let loopon = true;
        return (

            <div className='col'>
                <div className='project'>
                    <video width='200' autoPlay muted loop={loopon}>
                        <source src={hack} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }
}