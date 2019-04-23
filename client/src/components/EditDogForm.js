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

class EditDogForm extends Component {
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
        dog: {},
        redirectToDog: false
    };
    componentDidMount = () => {
        axios.get(`/api/v1/dogs/${this.props.match.params.dogId}/`)
        .then(res => {
            this.setState({
                formData: res.data
            });
        });
    }
    handleChange = (evt) => {
        const clonedFormData = {...this.state.formData}
        clonedFormData[evt.target.name] = evt.target.value
        this.setState({formData: clonedFormData});
    }
    handleSubmit = async (evt) => {
        evt.preventDefault();
        await axios.put(`/api/v1/dogs/${this.state.formData._id}/`, this.state.formData);
        this.setState({redirectToDog: true});
    }
    render() {
        if (this.state.redirectToDog) {
            return (<Redirect to={`/dogs/${this.state.formData._id}`}/>)
        }
        return (
            <div>
                <PageStyle>
                    <h1>PupTopia</h1>
                    <h2>Edit Dog</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" value={this.state.formData.name} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="age">Age</label>
                            <input type="text" name="age" id="age" value={this.state.formData.age} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="gender">Gender</label>
                            <input type="text" name="gender" id="gender" value={this.state.formData.gender} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="breed">Breed</label>
                            <input type="text" name="breed" id="breed" value={this.state.formData.breed} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="coatColor">Coat Color</label>
                            <input type="text" name="coatColor" id="coatColor" value={this.state.formData.coatColor} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="imgLink">Image Link</label>
                            <input type="text" name="imgLink" id="imgLink" value={this.state.formData.imgLink} onChange={this.handleChange}/>
                        </div>
                        <input type="submit" value="Update Dog"/>
                    </form>
                    <Link to="/dogs">Back to Home</Link>
                    <p>Copyright 2019 Baxter Smith</p>
                </PageStyle> 
            </div>
        );
    }
}

export default EditDogForm;