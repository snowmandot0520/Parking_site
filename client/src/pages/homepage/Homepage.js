import React from 'react';
import Header from './../../components/header/Header';
import Background from './../../components/background/Background';

class Homepage extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="full-body">
                <Background backgroundImage="https://image.freepik.com/free-vector/city-background-design_1300-365.jpg">

                    <div className="row" id="top-line">
                        <div className="text-center" id="options">
                            <a className="navbar-brand activity" href="#">Activity</a>
                            <a className="navbar-brand activity" href="#">Parking</a>
                            <a className="navbar-brand activity" href="#">FAQs</a>
                        </div>
                        <i className="material-icons home-icon">settings_applications</i>
                        <i className="material-icons home-icon">account_box</i>
                    </div>
                    <div className="row">
                        <nav className="navbar navbar-light d-flex justify-content-center" id="home-nav">
                            <a className="navbar-brand text-center" id="home-title" href="#">
                            Landing Pad
                            </a>
                        </nav>

                    </div>
                        <button type="button" className="btn btn-lg btn-outline-primary" id="park-button">Find Parking Near Me</button>
                        <button type="button" className="btn btn-lg btn-outline-primary" id="rent-button">Upload A New Parking Spot</button>


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

export default Homepage;