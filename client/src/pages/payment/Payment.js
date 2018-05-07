import React from 'react';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem } from 'reactstrap';
import { Elements, CardElement, injectStripe } from 'react-stripe-elements';

import './Payment.css';

class Payment extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }    
    

    render() {
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
               <div className="row">
                    <div className="col-xs-12 justify-content-center" id="search-div">
                        <div className ="" id="spacer">
                            <Card outline color="secondary">
                                <CardBody className="text-center">
                                    <CardTitle>Rental Options</CardTitle>
                                    <CardSubtitle>---</CardSubtitle>
                                    <ListGroup className="text-left">
                                        <ListGroupItem></ListGroupItem>
                                        
                                        <ListGroupItem className="small"></ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                            <Card outline color="secondary">
                                <CardBody className="text-center">
                                    <CardTitle>Payment</CardTitle>
                                    <ListGroup className="text-left">
                                        <ListGroupItem>
                                            <Elements>
                                            <form onSubmit={this.handleSubmit}>
                                                
                                                <label>
                                                    Card details
                                                    <CardElement style={{base: {fontSize: '18px'}}} />
                                                </label>
                                                <button>Confirm order</button>
                                            </form>
                                            </Elements>    
                                        </ListGroupItem>
                                        
                                        <ListGroupItem className="small"></ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <Button outline color="primary" id="directions">Checkout</Button>
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

export default Payment;
