import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import Payment from './../../components/payment/Payment';
import { Button, Modal, 
    ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import geocoder from './../../scripts/geocoder'


import './FindParking.css';


class FindParking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        //   apiKey: 'AIzaSyDz9l4M_Hjs0BXevxJN93Ptep60_0XIVkI'
        }
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render(){
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
                            <input type="text" className="form-control" id="search-bar" placeholder="Search by Location" aria-label="Location Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" id="search-button">Search</button>
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
                            <img src="https://image.shutterstock.com/z/stock-photo-map-with-pins-markers-simple-flat-illustration-city-plan-with-streets-raster-version-633021710.jpg" alt="sample map" id="map" />
                        </div>
                        </div>

                        <div className=" fixed-bottom new-btn-div text-center">
                        <Button outline color="primary" className="new-btn" onClick={this.toggle}>New Search</Button>

                  
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <Payment/>
                                </Modal>


                    </div>
                    <Footer/>
                </div>
                
            </div>
            
        
        )
    }
}

export default FindParking;


const prevBody = `
`