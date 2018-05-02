import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import Recent from './pages/recent/Recent';
import Favorites from './pages/favorites/Favorites';
import FindParking from './pages/findParking/FindParking';
import FindRental from './pages/findRental/FindRental';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/LoginPage';
import Signup from './pages/login/SignupPage';
import NewSpot from './pages/newSpot/NewSpot';
import Payment from './pages/payment/Payment';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/homepage' component={Homepage}/>
          <Route exact path='/' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/recent' component={Recent}/>
          <Route exact path='/favorites' component={Favorites}/>
          <Route exact path='/newSpot' component={NewSpot}/>
          <Route exact path='/findParking' component={FindParking}/>
          <Route exact path='/findRental' component={FindRental}/>
          <Route exact path='/payment' component={Payment}/>
        </div>
      </Router>     
    );
  }
}

export default App;
