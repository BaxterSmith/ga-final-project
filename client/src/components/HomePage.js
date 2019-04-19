import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class HomePage extends Component {
    state = {
        dogs: [{}]
    };
    render() {
        return (
            <div>
                <h1>PupTopia</h1>
                <p></p>
            </div>
        );
    }
}

export default HomePage;