import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Activity from './pages/activity/Activity';
import Favorites from './pages/favorites/Favorites';
import FindParking from './pages/findParking/FindParking';
import FindRental from './pages/findRental/FindRental';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/LoginPage';
import NewSpot from './pages/newSpot/NewSpot';
import Payment from './pages/payment/Payment';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/activity' component={Activity}/>
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
