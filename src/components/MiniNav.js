import React from 'react';
import { Link } from 'react-router-dom';

const MiniNav = () => {
    return (
        <div id='mini-nav'>
            <Link
                className='mini-nav-link'
                to={'/projects/web'}
                >Web
            </Link>
            <Link
                className='mini-nav-link'
                to={'/projects/music'}
            >Music
            </Link>
        </div>
    )
}

export default MiniNav;