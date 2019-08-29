import React, { Component } from 'react';

export class Techstack extends Component {

    constructor(){
        super();

        this.state = {
            tableData: {
                frontend: ['React.js', 'Bootstrap', 'jQuery', 'Sass'],
                serverside: ['php', 'mySQL', 'wordpress', 'asp'],
                tools: ['gulp', 'Sass', 'npm'],
                learnlist: [
                    'C# app w/vcode', 
                    'Angular', 
                    'google map api', 
                    'React-native', 
                    'better understand connections between back and front-end',
                    'your own vscode theme',
                    'typescript',
                    'push to github from terminal',
                    'build a blog timeline', 
                    'implement a backend cms for site',
                    'async-await & synchronious',
                    'next.js',
                ]
            }
        }
    }
    render() {
        let tableData = this.state.tableData;
        return (

            <section id='techstack'>
                <div className='container'>
                    <h2>Tech Stack</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Front end</th>
                                <th>Server side</th>
                                <th>Tools</th>
                                <th>Learn list</th>
                            </tr>
                            <tr>
                                <td>
                                    <ul>
                                        {tableData.frontend.map((tech, i) => {
                                            return (
                                                <li key={i}>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {tableData.serverside.map((tech, i) => {
                                            return (
                                                <li key={i}>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {tableData.tools.map((tech, i) => {
                                            return (
                                                <li key={i}>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {tableData.learnlist.map((tech, i) => {
                                            return (
                                                <li key={i}>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </td>
                                
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}