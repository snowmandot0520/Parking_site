import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Button } from 'reactstrap';
import geocoder from './../../scripts/geocoder'


import './FindParking.css';


class FindParking extends React.Component {
    
    constructor(){
        super();
        this.state = {
            apiKey: 'AIzaSyDz9l4M_Hjs0BXevxJN93Ptep60_0XIVkI'
        }
    }



    render(){
        return(
            <div>
                <div className="container" id="solid-bckg">
                    <div className="grn-hdr">
                        <Header/>
                    </div> 
                </div>
                <button id='jeb' onClick={geocoder.getCoordFromAddress}>Geocoder</button>
                <button id='jeb2' onClick={geocoder.distanceMatrix}>Distance Matrix</button>
            </div>
            
        
        )
    }
}

export default FindParking;


const prevBody = `<div className="row text-center" id="second-line">
<div className="input-group mb-3">
    <input type="text" className="form-control" id="search-bar" placeholder="Search by Location" aria-label="Location Search" aria-describedby="basic-addon2" />
    <div className="input-group-append">
        <button className="btn btn-outline-primary" type="button" id="search-button">Search</button>
    </div>
</div>
<div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-outline-primary home-buttons">Nearby</button>
    <button type="button" className="btn btn-outline-primary home-buttons">Recent</button>
    <button type="button" className="btn btn-outline-primary home-buttons">Favorites</button>
</div>
</div>

<div className="row">
<div className="col-xs-12 justify-content-center" id="map-div">
    <img src="https://image.shutterstock.com/z/stock-photo-map-with-pins-markers-simple-flat-illustration-city-plan-with-streets-raster-version-633021710.jpg" alt="sample map" id="map" />
</div>
</div>

<div className=" fixed-bottom new-btn-div text-center">
<Button outline color="primary" className="new-btn">New Search</Button>
</div>
`