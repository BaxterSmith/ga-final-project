import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage.js';
import NewDogForm from './components/NewDogForm.js';
import EditDogForm from './components/EditDogForm.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/dogs" component={HomePage}/>
          <Route path="/dogs/new" component={NewDogForm} />
          <Route path="/dogs/:dogId/edit" component={EditDogForm} />
          <Route />
        </Switch>
      </Router>
    );
  }
}

export default App;
