import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import Payment from './../../components/payment/Payment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
     Input, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import API from '../../utils/API';

import './FindParking.css';

class FindParking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            address:'',
            googleKey:'AIzaSyD0CbzacbBZXUg0C2cftLGr-p4GHFP0cAc',
            parkingAddress:'',
            parkingName:'',
            parkingPrice:'',
         
        }
        this.toggle = this.toggle.bind(this);
   
    };
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    };

    searchParkingSpot = address => {

        API.searchMap(address)
        .then(mapData => {

            console.log(mapData);
            const lat = (mapData.data.results[0].geometry.location.lat).toString();
            const lng = (mapData.data.results[0].geometry.location.lng).toString().slice(0,-1);
            console.log(lat,lng);

            API.searchParking(lat, lng)
            .then(parkingData => {
                    console.log(parkingData);
                    
                    for(let i = 0; i < parkingData.data.length; i++){
                        
                        const parkingAddress = parkingData.data[i]._embedded["pw:location"].address1;
                        const parkingName = parkingData.data[i]._embedded["pw:location"].name;
                        let parkingPrice = '';
                        
                        if(parkingData.data[i].purchase_options[0]){
                            parkingPrice = parkingData.data[i].purchase_options[0].price.USD;
                        }
                        else {
                            parkingPrice = "Price data is not available."
                        }

                        console.log(parkingAddress, parkingName);
                        
                        this.setState({parkingAddress:parkingAddress, parkingName: parkingName, parkingPrice:parkingPrice})
                    }  
                }
            )
        })
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = (event) =>{
        event.preventDefault();
        
        this.searchParkingSpot(this.state.address);
    }

    findParking = (event) => {
        event.preventDefault();
        this.state.address = this.state.parkingAddress +" " + this.state.parkingName;
        this.searchParkingSpot(this.state.parkingAddress, this.state.parkingName)
    }
    

    render(){
       
        return(
            <div className="container" id="solid-bckg">
                <div className="grn-hdr"><Header/></div> 
    
                <div className="row text-center" id="second-line">
                    <div className="input-group mb-3 location-group">
                        <Input 
                            type="text" 
                            className="form-control" 
                            id="search-bar" 
                            placeholder="Search by Location" 
                            aria-label="Location Search" 
                            aria-describedby="basic-addon2" 
                            name = "address"
                            value = {this.state.address}
                            onChange={this.handleInputChange}
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-primary" 
                                type="button" 
                                id="search-btn"
                                onClick={this.handleFormSubmit}
                                disabled={!(this.state.address)}>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="btn-group three-btns" role="group" aria-label="Basic example">
                        <Button type="button" className="btn btn-outline-primary h-butns" href="/findParking">Nearby</Button>
                        <Button type="button" className="btn btn-outline-primary h-butns" href="/recent">Recent</Button>
                        <Button type="button" className="btn btn-outline-primary h-butns" href="/favorites">Favorites</Button>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-lg-12 col-md-12 justify-content-center text-center" id="map-div">
                            <iframe
                                className="map"
                                // width="320"
                                // height="200"
                                frameBorder="0"
                                src={`https://www.google.com/maps/embed/v1/place?q=${this.state.address}
                                &key=${this.state.googleKey}`} allowFullScreen>
                            </iframe>
                        </div>
                        <div className="parking-cards text-center">
                            <h4>Nearby Parking</h4>
                        {this.state.parkingAddress !=="" && 
                            <div>
                                <Card className="individual-cards">
                                    <CardBody>
                                        <CardTitle>{this.state.parkingName}</CardTitle>
                                        <CardText className="text-left">Address: <small>{this.state.parkingAddress}</small></CardText>
                                        <CardText className="text-left">Price: $<small>{this.state.parkingPrice}</small></CardText>
                                        <Button onClick={this.findParking} id="near-park">Find Nearest Parking</Button>
                                    </CardBody>
                                </Card>
                            </div>
                                || this.state.parkingAddress == "" &&

                                <h3 id="instructions">Please, search for a parking location.</h3>
                        }
                        </div>
                    </div>
    
                <Footer/> 
            </div>
        )
    }
}

export default FindParking;