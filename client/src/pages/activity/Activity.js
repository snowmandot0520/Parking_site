import React from 'react';
import Footer from './../../components/footer/Footer';

import './Activity.css';

class Activity extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="full-body">

                <div className="row" id="top-line">
                    <div className="text-center" id="options">
                        <a className="navbar-brand activity" id="selected" href="#">Activity</a>
                        <a className="navbar-brand activity" href="#">Parking</a>
                        <a className="navbar-brand activity" href="#">FAQs</a>
                    </div>
                    <i className="material-icons home-icons">settings_applications</i>
                    <i className="material-icons home-icons">account_box</i>
                </div>

               

                 <button type="button" className="btn btn-outline-primary home-buttons">Delete</button>


                <div className="row">
                        <nav className="navbar navbar-light fixed-bottom justify-content-center" id="footer">
                            <span id="footer-text">Ⓒ Copyright 2018</span>
                        </nav>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Activity;
