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

class SingleDog extends Component {
    state = {
        dog: {
            name: '',
            age: '',
            gender: '',
            breed: '',
            coatColor: '',
            weight: '',
            imgLink: '',
            store: {
                name: '',
                address: '',
                phoneNumber: '',
                email: ''
            }
        },
        dogPicture: ''
    };
    componentDidMount = () => {
        axios.get(`/api/v1/dogs/${this.props.match.params.dogId}/`)
            .then(res => {
                this.setState({
                    dog: res.data
                });
            }).then(() => {
                this.dogImage()
            })
    };
    dogImage = () => {
        axios.get(`${this.state.dog.imgLink}`)
        .then(res => {
            this.setState({
                dogPicture: res.data.message
            })
        })
    }
    deleteDog = () => {
        axios.delete(`/api/v1/dogs/${this.state.dog._id}`).then(()=>{
            this.props.history.goBack()
        })
    }
    render() {
        return (
            <div>
                <PageStyle>
                <h1>PupTopia</h1>
                <img src={this.state.dogPicture} alt="dog"/>
                <p>Name: {this.state.dog.name}</p>
                <p>Age: {this.state.dog.age}</p>
                <p>Gender: {this.state.dog.gender}</p>
                <p>Breed: {this.state.dog.breed}</p>
                <p>Coat Color: {this.state.dog.coatColor}</p>
                <p>Weight: {this.state.dog.weight}</p>
                <p>Store: {this.state.dog.store.name}
                    <br/>{this.state.dog.store.address}
                    <br/>{this.state.dog.store.phoneNumber}
                    <br/>{this.state.dog.store.email}</p>
                <Link to={`/dogs/${this.state.dog._id}/edit`}>Edit Dog</Link>
                {/* <form action={`/api/v1/dogs/${this.state.dog._id}/?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete Dog"/>
                </form> */}
                <button onClick={this.deleteDog}> Delete Dog</button>
                <Link to="/dogs">Back to Home</Link>
                <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default SingleDog;