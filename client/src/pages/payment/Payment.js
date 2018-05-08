import React from 'react';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem } from 'reactstrap';
import { StripeProvider, Elements, CardElement, injectStripe } from 'react-stripe-elements';

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
                    <div className="col-xs-12 justify-content-center" id="pay-div">
                        <div className ="" id="spacer">
                            
                            <Card outline color="secondary">
                                <CardBody className="text-center">
                                    <CardTitle id="title-pay">Payment</CardTitle>
                                    {/* <StripeProvider apiKey="pk_test_ufNy5TYQGrm4rB4JyIr4fgaO"></StripeProvider> */}

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
