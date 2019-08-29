import React, { Component } from 'react';
import { Project } from '../components/project';
var moment = require('moment');

let time = moment('2019, 02, 19, 21:00');

export class Blog extends Component {
    render() {
        return (

            <section id='blog'>
                <div>
                    {time.add(35, 'm').format('HHmm')}
                </div>
            </section>
        );
    }
}