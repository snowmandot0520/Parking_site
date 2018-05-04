import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    logout = () => {
      localStorage.removeItem('jwtToken');
      window.location.replace('/');
    }

    render(){
        return(
            <div>
                <div className="row" id="top-line">
                    <div className="text-center" id="options">

                        <a className="navbar-brand activity" href="/findparking">Find</a>
                        <a className="navbar-brand activity" href="/findrental">Rent</a>
                        <a className="navbar-brand activity" href="/newspot">Add</a>
                        
                        
                            {localStorage.getItem('jwtToken') &&
                                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                            }
                        
                    </div>
                    <a href="/homepage"><i className="material-icons home-icon">settings_applications</i></a>
                    <a href="/homepage"><i className="material-icons home-icon">account_box</i></a>
                </div>                   
            </div>
        )
    }

}

export default Header;