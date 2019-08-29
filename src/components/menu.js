import React from 'react';
import { Link } from 'react-router-dom';
import { Topbar } from './topbar';

export const Menu = () => {
    return (
        <div className='padding-top'>
            <Topbar color={'topbar topbar__dark'} />
            <div id='page-not-found' className='min-height'>
                <h2>Menu</h2>
                <p>
                    <Link to={'/'}>Home</Link><br />
                    <Link to={'/projects'}>Projects</Link>
                </p>
            </div>
        </div>
    )
}