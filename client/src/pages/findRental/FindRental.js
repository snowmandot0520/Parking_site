import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, 
    ListGroupItem, Badge } from 'reactstrap';

import './FindRental.css';

class FindRental extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
            
                <div className="row text-center" id="second-line">
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
                    <div className="col-xs-12 justify-content-center" id="search-div">
                        <div className ="" id="spacer">
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="https://image.shutterstock.com/image-photo/modest-residential-house-red-car-260nw-624348332.jpg" alt="Parking Spot Image" />
                                <CardBody>
                                    <CardTitle>48 Greener Avenue</CardTitle>
                                    <CardSubtitle>0.04 mi away</CardSubtitle>
                                    <ListGroup>
                                        <ListGroupItem>Available 04/20/2018 - 06/03/2018</ListGroupItem>
                                        <ListGroupItem>48 Greener Avenue, Fisher, KY 44206</ListGroupItem>
                                        <ListGroupItem>Price Per Hour: $15.00</ListGroupItem>
                                        <ListGroupItem>Private Residence Driveway</ListGroupItem>
                                        <ListGroupItem>Description: --------</ListGroupItem>
                                    </ListGroup>
                                    <Button>Add To Favorites</Button>
                                    <Button>Rent</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            
                        </div>
                    </div>
                </div>
            
                <div className=" fixed-bottom new-btn-div text-center">
                    <Button outline color="primary" className="new-btn">View in Map</Button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default FindRental;
