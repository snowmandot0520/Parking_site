import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/homepage/Homepage';
import Login from './pages/login/LoginPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
        </div>
      </Router>      
    );
  }
}

export default App;
