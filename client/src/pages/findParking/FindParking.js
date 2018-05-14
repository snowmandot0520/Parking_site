import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import Payment from './../../components/payment/Payment';
import { Button, Modal, 
    ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import geocoder from './../../scripts/geocoder'


import './FindParking.css';
import API from '../../utils/API';


class FindParking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            address:'',
            lat:'',
            long:'',
            googleKey:'AIzaSyD0CbzacbBZXUg0C2cftLGr-p4GHFP0cAc',
            result:{}
            // parkwhizKey:'&api_key=4206ee6642163fb508fb9b94ba7b04481e07ddf8',
            // isLoading: false,
            // stripeToken: null
        }
        this.toggle = this.toggle.bind(this);
          // configure Stripe Checkout
    //     this.stripeHandler = window.StripeCheckout.configure({
    //     key: "pk_test_iwcqOHORnAsvbAhrEAYnyvjq",
    //     image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    //     locale: 'auto',
    //     token: this.onGetStripeToken.bind(this)
    //   });
    };
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    };

    searchMap = address => {

        if(this.state.address){
            API.searchMap(address)
            .then(mapData => {
                API.searchParking(lat,long)
                .then(parkingData => this.setState({result:mapData.data, parkingData:parkingData.data}))
            })
            .catch(err => console.log(err))
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = (event) =>{
        event.preventDefault();
        this.searchMap(this.state.address);
    }
    // onGetStripeToken (token) {
    //     // Got Stripe token. This means user's card is valid!
    //     // We need to continue the payment process by sending this token to our own server.
    //     // More info: https://stripe.com/docs/charges
    //     this.setState({stripeToken: token});
    // };

    // onClickPay (e) {
    //     e.preventDefault()
    //     this.setState({isLoading: true});
    
    //     const onCheckoutOpened = () => {
    //       this.setState({isLoading: false})
    //     }
    
    //     // open Stripe Checkout
    //     this.stripeHandler.open({
    //       name: 'Landing Pad',
    //       description: 'Garage Rental',
    //       amount: 1000, // 10 USD -> 1000 cents
    //       currency: 'usd',
    //       opened: onCheckoutOpened.bind(this)
    //     });
    // }

    render(){
    
        // var buttonText = this.state.isLoading ? "Please wait ..." : "Pay $10"
        // var buttonClassName = "Pay-Now" + (this.state.isLoading ? " Pay-Now-Disabled" : "")
        // if (this.state.stripeToken) {
        // buttonText = "Your payment was processed"
        // buttonClassName = "Pay-Now Pay-Now-Disabled"
        // }
        return(
            <div>
                <div className="container" id="solid-bckg">
                    <div className="grn-hdr">
                        <Header/>
                    </div> 
                    <button id='jeb' onClick={geocoder.getCoordFromAddress}>Geocoder</button>
                    <button id='jeb2' onClick={geocoder.distanceMatrix}>Distance Matrix</button>

                    <div className="row text-center" id="second-line">
                        <div className="input-group mb-3">
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
                                    id="search-button"
                                    onClick={this.handleFormSubmit}
                                    disabled={!(this.state.address)}>Search</button>
                            </div>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Button type="button" className="btn btn-outline-primary home-buttons">Nearby</Button>
                            <Button type="button" className="btn btn-outline-primary home-buttons">Recent</Button>
                            <Button type="button" className="btn btn-outline-primary home-buttons">Favorites</Button>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-xs-12 justify-content-center" id="map-div">
                            {/* <img src="https://image.shutterstock.com/z/stock-photo-map-with-pins-markers-simple-flat-illustration-city-plan-with-streets-raster-version-633021710.jpg" alt="sample map" id="map" /> */}
                            <iframe
                                width="325"
                                height="250"
                                frameBorder="0"
                                src={`https://www.google.com/maps/embed/v1/place?key=${this.state.googleKey}
                                    &q=${this.state.address}`} allowFullScreen>
                            </iframe>
                        </div>
                        </div>

                        <div className=" fixed-bottom new-btn-div text-center">
                        <Button outline color="primary" className="new-btn" onClick={this.toggle}>New Search</Button>

                       
                        {/* <a className={buttonClassName} href="#" onClick={this.onClickPay.bind(this)}>{buttonText}</a> */}
                        

                    </div>
                    <Footer/> 
                </div>
                
            </div>
            
        
        )
    }
}

export default FindParking;