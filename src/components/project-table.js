import React, { Component } from 'react';

export class Projecttable extends Component {

    link(x){
        window.location = x;
    }

    render() {
        return (
            <div className='' data-aos="fade-up">
                <table className='project-table'>
                    <tbody>
                        {this.props.data.map((project, i) => {
                            return (
                                <tr className='project-row' key={i} data-aos='fade-up' onClick={() => window.open(project.link)}>
                                    <td >
                                        <div className='project-img'>
                                            <img alt='project-img' src={project.img} />
                                        </div>
                                        
                                    </td>
                                    <td className='project-text'>
                                        <h2><strong>{project.name}</strong></h2>
                                        <span>{project.tech}</span>
                                    </td>
                                    <td>
                                        <strong>{project.type}</strong>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}