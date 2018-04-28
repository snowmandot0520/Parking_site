import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Popover, 
    PopoverHeader, PopoverBody } from 'reactstrap';

import './Favorites.css';

class Favorites extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          popoverOpen: false
        };
    }
    
    toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }

    render(){
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
                
                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="favorites-div">
                        <div className = "text-center" id="fav-spacer">
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>Meridian Ave Public Parking Lot</CardTitle>
                                    <CardLink href="#">Directions To Here</CardLink>                                    
                                    <p> </p>
                                    <Button id="Popover1" onClick={this.toggle}>View</Button>
                                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                        <PopoverBody>
                                            <CardImg top width="100%" src="https://www.3cdc.org/wp-content/blogs.dir/3/files/2016/10/FSQ-Garage-1-1024x636.jpg" />
                                        </PopoverBody>
                                    </Popover>
                                    <Button>Delete</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>3501 Cardinal Rd</CardTitle>
                                    <CardLink href="#">Directions To Here</CardLink>                                    
                                    <p> </p>
                                    <Button id="Popover1" onClick={this.toggle}>View</Button>
                                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                        <PopoverBody>
                                            <CardImg top width="100%" src="" />
                                        </PopoverBody>
                                    </Popover>
                                    <Button>Delete</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>Sandstone Parking Garage</CardTitle>
                                    <CardLink href="#">Directions To Here</CardLink>                                    
                                    <p> </p>
                                    <Button id="Popover1" onClick={this.toggle}>View</Button>
                                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                        <PopoverBody>
                                            <CardImg top width="100%" src="" />
                                        </PopoverBody>
                                    </Popover>  
                                    <Button>Delete</Button>                              
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle>29 Pine St, #38</CardTitle>
                                    <CardLink href="#">Directions To Here</CardLink>                                    
                                    <p> </p>
                                    <Button id="Popover1" onClick={this.toggle}>View</Button>
                                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                        <PopoverBody>
                                            <CardImg top width="100%" src="" />
                                        </PopoverBody>
                                    </Popover>     
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
