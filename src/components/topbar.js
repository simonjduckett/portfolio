import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

export class Topbar extends Component {
    render() {
        return (
            <div className={this.props.color}>
                <div className='container'>
                    <span className='brand'>Portfolio</span>
                    <div className='menu'>
                        <Link to={{ pathname: '/menu' }}>
                            <FontAwesome name='bars' />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}