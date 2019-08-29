import React from 'react';
import { Topbar } from './topbar';

export const PageNotFound = () => {
    return (
        <div className='padding-top'>
            <Topbar color={'topbar topbar__dark'} />
            <div id='page-not-found' className='min-height'>
                <h2>Oh no.. page not found. 404</h2>
            </div>
        </div>
    )
}