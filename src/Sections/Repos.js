import React, { Component } from 'react';

export class Repos extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {

        const Base_URL = "https://api.github.com/users/simonjduckett/repos";

        fetch(Base_URL)
            .then(res => res.json())
            .then(result => {
                this.setState({ data: result });
                console.log(this.state.data);
            });
    }

    render() {
        return (
            <div data-aos="fade-up" data-aos-duration='400' id='repos' className='container'>
                <h2>Repos</h2>
                <table id='repo-table'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Language</th>
                            <th>Link</th>
                        </tr>
                        {this.state.data.map((repo,i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <p>{repo.name}</p>
                                    </td>
                                    <td>
                                        <p>{repo.description}</p>
                                    </td>
                                    <td>{repo.language}</td>
                                    <td>
                                        <a 
                                        href={repo.html_url} target="_blank"
                                        >
                                            View
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
