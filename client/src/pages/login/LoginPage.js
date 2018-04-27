import React from 'react';
import Header from './../../components/header/Header';
import Background from './../../components/background/Background';

class Login extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="full-body">
                <Background backgroundImage="https://image.freepik.com/free-vector/city-background-design_1300-365.jpg">
                    <Header/>
                    <div className="row">
                    </div>
                        <button type="button" className="btn btn-lg btn-outline-primary home-buttons">Sign In</button>
                        <button type="button" className="btn btn-lg btn-outline-primary home-buttons">Sign Up</button>
                    
                    
            
                    <div className="row">
                        <nav className="navbar navbar-light fixed-bottom justify-content-center" id="footer">
                            <span id="footer-text">Ⓒ Copyright 2018</span>
                        </nav>
                    </div>
                </Background>
            </div>
        )
    }
}

export default Login;