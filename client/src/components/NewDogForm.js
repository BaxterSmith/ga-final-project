import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class NewDogForm extends Component {
    state = {
        formData: {
            name: '',
            age: '',
            gender: '',
            breed: '',
            coatColor: '',
            imgLink: ''
        },
        redirectToHome: false
    };
    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to="/dogs"/>);
        }
        return (
            <div>
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
                        <label for="imgLink">Image Link</label>
                        <input type="text" name="imgLink" id="imgLink" onChange={this.handleChange}/>
                    </div>
                   <input type="submit" value="Add Dog"/>
                </form>
                <Link to="/dogs">Back to Home</Link>
                <p>Copyright 2019 Baxter Smith</p>
            </div>
        );
    }
}

export default NewDogForm;