import React from 'react';
import { Link } from 'react-router-dom';

const MiniNav = () => {
    return (
        <div id='mini-nav'>
            <Link
                className=''
                to={'/projects/web'}
                >Projects
            </Link>
        </div>
    )
}

export default MiniNav;