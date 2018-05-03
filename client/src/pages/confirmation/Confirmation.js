import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem } from 'reactstrap';

import './Confirmation.css';

class Confirmation extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
            
            
                <div className=" fixed-bottom new-btn-div text-center">
                    <Button outline color="primary" id="directions">Directions To Spot</Button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Confirmation;

