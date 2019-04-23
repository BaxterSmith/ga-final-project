import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PageStyle = styled.div`
    background: #ff1a1a;
    text-align: center;
    color: #000066;
    padding: 5px;
`;

class NewDogForm extends Component {
    state = {
        formData: {
            name: '',
            age: '',
            gender: '',
            breed: '',
            coatColor: '',
            imgLink: '',
            store: ''
        },
        redirectToHome: false
    };
    handleChange = (evt) => {
        const clonedFormData = {...this.state.formData}
        clonedFormData[evt.target.name] = evt.target.value
        this.setState({formData: clonedFormData});
    }
    handleSubmit = async (evt) => {
        evt.preventDefault();
        await axios.post('/api/v1/dogs/', this.state.formData);
        this.setState({redirectToHome: true});
    }
    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to="/dogs"/>);
        }
        return (
            <div>
                <PageStyle>
                <h1>PupTopia</h1>
                <h2>Add A New Dog</h2>
                <form action="/dogs" method="POST" onSubmit={this.handleSubmit}>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for="age">Age</label>
                        <input type="text" name="age" id="age" onChange={this.handleChange}/>
                   </div>
                   <div>
                        <label for="gender">Gender</label>
                        <input type="text" name="gender" id="gender" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for="breed">Breed</label>
                        <input type="text" name="breed" id="breed" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for="coatColor">Coat Color</label>
                        <input type="text" name="coatColor" id="coatColor" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for="weight">Weight</label>
                        <input type="number" name="weight" id="weight" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for="imgLink">Image Link</label>
                        <input type="text" name="imgLink" id="imgLink" onChange={this.handleChange}/>
                    </div>
                   <input type="submit" value="Add Dog"/>
                </form>
                <Link to="/dogs">Back to Home</Link>
                <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default NewDogForm;