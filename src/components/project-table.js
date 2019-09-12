import React, { Component } from 'react';

export class Projecttable extends Component {

    render() {
        return (
            <div className='' data-aos="fade-up">
                <table className='project-table'>
                    <tbody>
                        {this.props.data.map((project, i) => {
                            return (
                                <tr key={i} data-aos='fade-up'>
                                    <td>
                                        <img alt='project-img' width='350' height='175' src={project.img}/>
                                    </td>
                                    <td>
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