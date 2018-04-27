import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
          <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjQ32KwIwFZbXQxXJkQXuzuhf8Bo_rIiGog3hCq9S61INMZoPnA" type="image/x-icon"/>
          <link href="https://fonts.googleapis.com/css?family=Comfortaa|Dawning+of+a+New+Day|Poiret+One" rel="stylesheet"/>
          <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'/>
          <link href='http://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css'/>

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    
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
