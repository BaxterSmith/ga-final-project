import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class HomePage extends Component {
    state = {
        dogs: [{}]
    };
    componentDidMount = () => {
        axios.get(`/dogs`)
            .then(res => {
                this.setState({
                    dogs: res.data
                });
            });
    }
    render() {
        return (
            <div>
                <h1>PupTopia</h1>
                <Link to="/dogs/new">Add A Dog</Link>
                <ul>
                    {this.state.dogs.map((dog) => (
                        <li>
                            <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default HomePage;