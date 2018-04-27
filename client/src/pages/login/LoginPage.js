import React from 'react';
import Header from './../../components/header/Header';

class Login extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="full-body">
        
                <div className="row">
                    <Header/>
                </div>
                
                <button type="button" className="btn btn-lg btn-outline-primary home-buttons">Sign In</button>
                <button type="button" className="btn btn-lg btn-outline-primary home-buttons">Sign Up</button>
            
        
                <div className="row">
                    <nav className="navbar navbar-light fixed-bottom justify-content-center" id="footer">
                        <span id="footer-text">Ⓒ Copyright 2018</span>
                    </nav>
                </div>
    
            </div>
        )
    }
}

export default Login;