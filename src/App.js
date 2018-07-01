import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Bootcamp from './Bootcamp';
import Contact from './Contact';
import Events from './Events';
import Strength from './Strength';
import Vertamax from './Vertamax';
import Yoga from './Yoga';

import logo from './logo.svg';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/vertamax" component={Vertamax} />
          <Route exact path="/strength" component={Strength} />
          <Route exact path="/yoga" component={Yoga} />
          <Route exact path="/bootcamp" component={Bootcamp} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default App;
