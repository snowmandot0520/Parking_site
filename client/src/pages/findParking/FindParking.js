import React from 'react';

class FindParking extends React.Component {
    
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
                        <a className="navbar-brand activity" href="#">Activity</a>
                        <a className="navbar-brand activity" id="selected" href="#">Parking</a>
                        <a className="navbar-brand activity" href="#">FAQs</a>
                    </div>
                    <i className="material-icons home-icon">settings_applications</i>
                    <i className="material-icons home-icon">account_box</i>
                </div>

                <div className="row" id="second-line">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" id="search-bar" placeholder="Search by Location" aria-label="Location Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" id="search-button">Search</button>
                        </div>
                    </div>
                </div>

               
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-primary home-buttons">Nearby Spots</button>
                    <button type="button" className="btn btn-outline-primary home-buttons">Recent</button>
                    <button type="button" className="btn btn-outline-primary home-buttons">Favorites</button>
                </div>
            

                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="map-div">
                        <img src="images/map.jpeg" alt="sample map" id="map" />
                    </div>
                </div>
            
                <button type="button" className="btn btn-lg btn-outline-primary" id="park-button">Start a new search</button>
                
            
                <div className="row">
                    <nav className="navbar navbar-light fixed-bottom justify-content-center" id="footer">
                        <span id="footer-text">Ⓒ Copyright 2018</span>
                    </nav>
                </div>
            </div>
        
        )
    }
}

export default FindParking;
