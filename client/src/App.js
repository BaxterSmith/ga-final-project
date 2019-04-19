import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/dogs" component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
