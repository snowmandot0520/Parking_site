import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

class Header extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
            
    //     }
    // }

    logout = () => {
      localStorage.removeItem('jwtToken');
      window.location.replace('/');
    }

    render(){
        return(
            <div>
                <div className="row" id="top-line">
                    <div className="text-center" id="options">
                        <a className="navbar-brand activity" href="#">Find</a>
                        <a className="navbar-brand activity" href="#">Rent</a>
                        <a className="navbar-brand activity" href="#">Add</a>
                    </div>
                    <i className="material-icons home-icon">settings_applications</i>
                    <i className="material-icons home-icon">account_box</i>
                    
                    {localStorage.getItem('jwtToken') &&
                        <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                    }
                    
                </div>
            </div>
        )
    }

}

export default Header;