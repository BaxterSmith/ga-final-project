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
        return (
            <div>
                
            </div>
        );
    }
}

export default NewDogForm;