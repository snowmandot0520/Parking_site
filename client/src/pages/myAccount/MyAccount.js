import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Card, CardText, CardBody,
    CardTitle, Container, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem } from 'reactstrap';

import './MyAccount.css';

class MyAccount extends React.Component {
    
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="search-div">
                        <div className ="text-center" id="spacer">
                        <Container className="py-4">
                            <h4>My Account</h4>
                            <Card outline color="secondary">
                                <CardBody className="text-center">
                                    <CardTitle>Username</CardTitle>
                                    <ListGroup className="text-left">
                                        <ListGroupItem>
                                            Username: username 
                                            <Button color="secondary" size="sm" className="tiny-text">Edit</Button>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            blah blah blah
                                            <Button color="secondary" size="sm" className="tiny-text">Edit</Button>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            blah blah blah
                                            <Button color="secondary" size="sm" className="tiny-text">Edit</Button>
                                        </ListGroupItem>
                                        <ListGroupItem className="small">
                                            blah blah blah
                                            <Button color="secondary" size="sm" className="tiny-text">Edit</Button>
                                        </ListGroupItem>
                                        <ListGroupItem className="small">
                                            blah blah blah
                                            <Button color="secondary" size="sm" className="tiny-text">Edit</Button>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <div className="new-btn-div text-center">
                                        <Button outline color="danger" className="delete-btn">Delete Account</Button>
                                    </div>
                                </CardBody>
                            </Card>
                            </Container>
                        </div>
                        </div>
                    </div>
               
              
            
                
                <Footer/>
            </div>
        )
    }
}

export default MyAccount;