import React from 'react';
import FontAwesome from 'react-fontawesome';

export const Social = () => {
    return (
        <div id='social'>
            <a target='_blank' href='https://soundcloud.com/simon-duckett'><FontAwesome name='soundcloud' /></a>
            <a target='_blank' href='https://github.com/simonjduckett'><FontAwesome name='github' /></a>
            <a target='_blank' href='https://www.youtube.com/channel/UCNVM5x5uQ8hBM6wN_xLlomA'><FontAwesome name='youtube' /></a>
            <a target='_blank' href='https://www.linkedin.com/in/simon-duckett/'><FontAwesome name='linkedin' /></a>
        </div>
    )
}