import React, { Component } from 'react';
import { Project } from '../components/project';

export class Work extends Component {
    render() {
        return (
            
            <section id='work'>
                <div className='container'>
                    <h2>WORK</h2>
                    <p>lorehenderit ad in velit labore fugiat sunt id ipsum labore tempor sit. Ipsum proident in commodo ipsum sit et ipsum in non est sit quis aliqua. Proident culpa quis esse officia labore est magna. Sint irure magna et sit qui voluptate eiusmod excepteur fugiat eu officia adipisicing mollit. In proident irure in veniam dolore.</p>

                    <div id='featuredProjects' className='row'>
                        <Project />
                        <Project />
                        <Project />
                    </div>

                </div>
                
            </section>
        );
    }
}