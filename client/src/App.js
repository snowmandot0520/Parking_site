import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {StripeProvider} from 'react-stripe-elements';
// Pages
import Recent from './pages/recent/Recent';
import Favorites from './pages/favorites/Favorites';
import FindParking from './pages/findParking/FindParking';
import FindRental from './pages/findRental/FindRental';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/LoginPage';
import Signup from './pages/login/SignupPage';
import NewSpot from './pages/newSpot/NewSpot';
import MySpots from './pages/mySpots/MySpots';
import MyAccount from './pages/myAccount/MyAccount';

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
          <Route exact path='/mySpots' component={MySpots}/>
          <Route exact path='/myAccount' component={MyAccount}/>
        </div>
      </Router>     
    );
  }
}

export default App;
