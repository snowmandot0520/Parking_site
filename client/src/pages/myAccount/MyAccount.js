import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Card, CardText, CardBody,
    CardTitle, Container, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem, Input } from 'reactstrap';

import './MyAccount.css';

class MyAccount extends React.Component {
    
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
            <div id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
                <div className="row justify-content-center">
                    <div className="col-xs-12 justify-content-center" id="account-div">
                        <div className ="text-center" id="spacer">
                        <Container className="py-4">
                            <h4>My Account</h4>
                            <Card id="outer-card">
                                <CardBody className="text-center">
                                    <CardTitle>Username</CardTitle>
                                    <ListGroup className="text-left" id="user-card">
                                        <ListGroupItem>
                                            User Info: <br/> 
                                                <p className="tiny-text">
                                                    Username: username <br/>
                                                    Password: ****** <br/>
                                                    Phone Number: 000-000-000
                                                </p>
                                            <Button color="secondary" size="sm" className="tiny-text sm-btn">Edit</Button>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Payment Info: <br/> 
                                            <p className="tiny-text">
                                                Card Number: 0000 0000 0000 0000 <br/>
                                                Expiration Date: 00/00 <br/>
                                                 CVV: 000
                                            </p>
                                            <Button color="secondary" size="sm" className="tiny-text sm-btn">Edit</Button>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Billing Info: <br/> 
                                            <p className="tiny-text">
                                                Name: John Doe <br/>
                                                Address: 000 Miscellaneous Dr., Some City, ST 00000</p>
                                            <Button color="secondary" size="sm" className="tiny-text sm-btn">Edit</Button>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Notifications: 
                                            <label class="switch">
                                                <input type="checkbox" />
                                                <span class="slider round"></span>
                                            </label>    
                                        </ListGroupItem>
                                    </ListGroup>
                                    <div className="delete-btn-div text-center">
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
