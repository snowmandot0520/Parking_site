import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Collapse } from 'reactstrap';

import './Favorites.css';

class Favorites extends React.Component {
    
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
                
                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="favorites-div">
                        <div className = "text-center" id="fav-spacer">
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>Meridian Ave Public Parking Lot</CardTitle>
                                    <CardSubtitle>0.02 mi away</CardSubtitle>
                                    <Button id="view1" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View</Button>
                                    <Collapse isOpen={this.state.collapse}>
                                        <CardImg top width="100%" src="https://www.3cdc.org/wp-content/blogs.dir/3/files/2016/10/FSQ-Garage-1-1024x636.jpg" />   
                                        <CardLink href="#">Directions To Here</CardLink>                                    
                                        <p> </p>
                                        <Button>Delete</Button>
                                    </Collapse>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>3501 Cardinal Rd</CardTitle>
                                    <CardSubtitle>1.04 mi away</CardSubtitle>
                                    <Button id="view2" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View</Button>
                                    <Collapse isOpen={this.state.collapse}>
                                        <CardImg top width="100%" src="https://www.3cdc.org/wp-content/blogs.dir/3/files/2016/10/FSQ-Garage-1-1024x636.jpg" />   
                                        <CardText>3501 Cardinal Rd, Renser, TN 28100</CardText>
                                        <CardLink href="#">Directions To Here</CardLink>                                    
                                        <p> </p>
                                        <Button>Delete</Button>
                                    </Collapse>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>29 Pine St, #38</CardTitle>
                                    <CardSubtitle>Private Rental from @rRrR47rR</CardSubtitle>
                                    <CardLink href="#">Directions To Here</CardLink>                                    
                                    <p> </p>
                                    <Button id="Popover1" onClick={this.toggle}>View</Button>
                                    
                                            <CardImg top width="100%" src="" />
                                        
                                       
                                    <Button>Delete</Button>                           
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>Sandstone Parking Garage</CardTitle>
                                    <CardSubtitle>Public Parking</CardSubtitle>
                                    <CardLink href="#">Directions To Here</CardLink>                                    
                                    <p> </p>
                                    <Button id="Popover1" onClick={this.toggle}>View</Button>{" "}
                                   
                                            <CardImg top width="100%" src="" />
                                        
                                    <Button>Delete</Button>                              
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            
                <Footer/>
            </div>
        )
    }
}

export default Favorites;
