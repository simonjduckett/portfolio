import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Topbar extends Component {

    render() {
        return (
            <div className={this.props.color}>
                <div className='container'>
                    <span className='brand'><Link className='light' to={'/'}>Name</Link></span>
                    <div className='menu'>
                        <span id='ham' onClick={this.props.toggleMenu}>
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                            <div className='bar3'></div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}