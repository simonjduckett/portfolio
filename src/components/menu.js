import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = (props) => {
    return (
        <div id='menu' className='padding-top'>
            <div className='min-height container'>
                <div className='row text-left'>
                    <div className='col-md-6'>
                        <p>
                            <Link 
                                className='menu-link' 
                                to={'/'} 
                                onClick={props.toggleMenu}>Home
                            </Link>
                            <br />
                            <Link 
                                className='menu-link' 
                                to={'/projects/web'}
                                onClick={props.toggleMenu}>Projects
                            </Link>
                        </p>
                    </div>
                    <div className='col-md'>
                        <span>Phone</span><br />
                        <p>+44 7794 445214</p>
                    </div>
                    <div className='col-md'>
                        <span>Email</span><br />
                        <p>simon@simonduckett.com</p>
                    </div>
                
                </div>
            </div>
        </div>
    )
}