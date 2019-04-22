import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PageStyle = styled.div`
    background: #ff1a1a;
    text-align: center;
    color: #000066;
    padding: 5px;
`;
const TitleStyle = styled.h1`
    color: #66ccff;
`;

class SingleDog extends Component {
    state = {
        dog: {}
    };
    componentDidMount = () => {
        axios.get(`/dogs/${this.props.match.params.dogId}`)
            .then(res => {
                this.setState({
                    dog: res.data
                });
            });
    };
    render() {
        return (
            <div>
                <PageStyle>
                <h1><TitleStyle>PupTopia</TitleStyle></h1>
                <img src={this.state.dog.imgLink} alt="dog"/>
                <p>Name: {this.state.dog.name}</p>
                <p>Age: {this.state.dog.age}</p>
                <p>Gender: {this.state.dog.gender}</p>
                <p>Breed: {this.state.dog.breed}</p>
                <p>Coat Color: {this.state.dog.coatColor}</p>
                <p>Store: {this.state.dog.store}</p>
                <Link to={`/${this.state.dog._id}/edit`}>Edit Dog</Link>
                <form action={`/${this.state.dog._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete Dog"/>
                </form>
                <Link to="/dogs">Back to Home</Link>
                <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default SingleDog;