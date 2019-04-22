import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PageStyle = styled.div`
    background: #ff1a1a;
    text-align: center;
    color: #000066;
    padding: 5px;
    border: 2px solid #ff1a1a;
`;
const ListStyle = styled.li`
    list-style-type: none;
`;

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
                <PageStyle>
                <h1>PupTopia</h1>
                <Link to="/dogs/new">Add A Dog</Link>
                <h3>Dogs List</h3>
                <ul>
                    {this.state.dogs.map((dog) => (
                        <li><ListStyle>
                            <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
                        </ListStyle></li>
                    ))}
                </ul>
                <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default HomePage;