import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem } from 'reactstrap';
import spacesClient from './../../scripts/spacesClient'
import axios from 'axios'
import './FindRental.css';

class FindRental extends React.Component {
    
    constructor(){
        super();
        this.state = {
            zip: '',
            spaces: []
        }
    }

    getSpaces = () => {
        //spacesClient.getSpaces(this.state.zip)
        axios
            .get(`/spaces/filter/${this.state.zip}`)
            .then(data => {
                this.setState({ spaces:data.data })
                console.log(this.state)  
            })
            .catch(err => console.log(err))
    }

    updateState = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(this.state)
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
                        <Button type="button" className="btn btn-outline-primary home-buttons">Nearby</Button>
                        <Button type="button" className="btn btn-outline-primary home-buttons">Recent</Button>
                        <Button type="button" className="btn btn-outline-primary home-buttons">Favorites</Button>
                    </div>
                </div>

                <input 
                    name='zip'
                    value={this.state.zip}
                    id='zip'
                    onChange={this.updateState}
                />
                <button onClick={() => this.getSpaces()}>
                    Search for Spaces
                </button>

                {(
                    this.state.spaces.map(e => {
                        return (
                            <Card outline color="secondary">
                                <CardImg top width="100%" src={e.img} alt="Parking Spot Image" />
                                <CardBody className="text-center">
                                    <CardTitle>{e.address}</CardTitle>
                                    <CardSubtitle>TO DO: DISTANCE</CardSubtitle>
                                    <ListGroup className="text-left">
                                        <ListGroupItem>TO DO: AVAILABILITY
                                            <br/>
                                            8:00 AM - 6:00PM
                                        </ListGroupItem>
                                        <ListGroupItem>{e.address}</ListGroupItem>
                                        <ListGroupItem>Price Per Hour: ${e.price}.00</ListGroupItem>
                                        <ListGroupItem className="small">TO DO: SHORT DESC</ListGroupItem>
                                        <ListGroupItem className="small">TO DO: LONG DESC</ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <Button size="sm" color="info">Add To Favorites</Button>{" "}
                                    <Button size="sm" color="info">Rent</Button>
                                </CardBody>
                            </Card>
                        )
                    })
                )}

                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="search-div">
                        <div className ="" id="spacer">
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="https://image.shutterstock.com/image-photo/modest-residential-house-red-car-260nw-624348332.jpg" alt="Parking Spot Image" />
                                <CardBody className="text-center">
                                    <CardTitle>48 Greener Avenue</CardTitle>
                                    <CardSubtitle>0.04 mi away</CardSubtitle>
                                    <ListGroup className="text-left">
                                        <ListGroupItem>Available 04/20/2018 - 06/03/2018
                                            <br/>
                                            8:00 AM - 6:00PM
                                        </ListGroupItem>
                                        <ListGroupItem>48 Greener Avenue, Fisher, KY 44206</ListGroupItem>
                                        <ListGroupItem>Price Per Hour: $15.00</ListGroupItem>
                                        <ListGroupItem className="small">Private Residence Driveway</ListGroupItem>
                                        <ListGroupItem className="small">Description: Just park on the driveway. No cars should be there.</ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <Button size="sm" color="info">Add To Favorites</Button>{" "}
                                    <Button size="sm" color="info">Rent</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="https://dmtyylqvwgyxw.cloudfront.net/instances/5020/uploads/images/photo/image/35531/space_listing_276244c9-2b41-410b-abec-d98d0daff8a1.jpg?v=1510517508" />
                                <CardBody className="text-center">
                                    <CardTitle>397 Martin Luther King Jr Blvd</CardTitle>
                                    <CardSubtitle>1.09 mi away</CardSubtitle>
                                    <ListGroup className="text-left">
                                        <ListGroupItem>Available 04/28/2018 - 08/01/2018
                                            <br/>
                                            12:00 AM - 12:00 AM
                                        </ListGroupItem>
                                        <ListGroupItem>397 Martin Luther King Jr Blvd, Fisher, KY 44203</ListGroupItem>
                                        <ListGroupItem>Price Per Hour: $12.00</ListGroupItem>
                                        <ListGroupItem className="small">Private Building Parking Spot #18</ListGroupItem>
                                        <ListGroupItem className="small">Description: Building parking lot. Park in spot #18, close to big tree in back.</ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <Button size="sm" color="info">Add To Favorites</Button>{" "}
                                    <Button size="sm" color="info">Rent</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="http://sightline.wpengine.netdna-cdn.com/wp-content/uploads/2013/06/1-Alans-garage-photo-by-Alan-Durning-563x372.jpg" />
                                <CardBody className="text-center">
                                    <CardTitle>70 Pine St</CardTitle>
                                    <CardSubtitle>2.45 mi away</CardSubtitle>
                                    <ListGroup className="text-left">
                                        <ListGroupItem>Available 06/01/2018 - 09/30/2018
                                            <br/>
                                            9:00 AM - 10:00 PM
                                        </ListGroupItem>
                                        <ListGroupItem>70 Pine St, Mandale, KY 44235</ListGroupItem>
                                        <ListGroupItem>Price Per Hour: $11.00</ListGroupItem>
                                        <ListGroupItem className="small">Private Residence Curbside Spot</ListGroupItem>
                                        <ListGroupItem className="small">Description: Park in on-street spot directly infront of house.</ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <Button size="sm" color="info">Add To Favorites</Button>{" "}
                                    <Button size="sm" color="info">Rent</Button>
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
