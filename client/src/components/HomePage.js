import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class HomePage extends Component {
    state = {
        dogs: [{}]
    };
    componentDidMount = () => {
        axios.get(`/api/v1/dogs/`)
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
                <h3>Dogs List</h3>
                <ul>
                    {this.state.dogs.map((dog) => (
                        <li>
                            <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
                        </li>
                    ))}
                </ul>
                <p>Copyright 2019 Baxter Smith</p>
            </div>
        );
    }
}

export default HomePage;