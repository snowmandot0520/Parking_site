import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import ListGroupCollapse from './ListGroupCollapse';

import './Recent.css';

const recents = {
    recent1: {
        dateUsed: 'Used on 2018-03-01',
        spotName: 'Amherst Avenue Parking Spot # 112',
        timesUsed: 'TIme Used: 10:00 AM - 4:00 PM',
        pricePaid: 'Amount Paid: $60.00',
        address: '45 Amherst Ave, Rondell, KY 32012',
        spotImg: 'http://planphilly.com/uploads/media_items/tesla-plugged-in-at-the-ev-only-zone-on-delancey-street.0.440.3264.1566.860.413.c.jpg'
    },
    recent2: {
        dateUsed: 'Used on 2017-11-07',
        spotName: '3501 Cardinal Rd',
        timesUsed: 'Time Used: 1:00 PM - 10:00 PM',
        pricePaid: 'Amount Paid: $99.00',
        address: '3501 Cardinal Rd, Finel, KY 32043',
        spotImg: 'https://odis.homeaway.com/odis/listing/4b9a574f-bef6-4790-97e6-2e3f5122b636.c6.jpg'
    },
    recent3: {
        dateUsed: 'Used on 2017-09-01',
        spotName: '29 Pine St, #38',
        timesUsed: 'Time Used: 9:00 AM - 2:00 PM',
        pricePaid: 'Amount Paid: $55.00',
        address: '29 Pine St, Mander, KY 32038',
        spotImg: 'https://i2.wp.com/farm8.staticflickr.com/7100/13788431144_98f9631196_c.jpg?ssl=1'
    }
  }

class Recent extends React.Component {
    
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
                    <div className="col-xs-12 justify-content-center" id="activity-div">
                        <div className ="text-center" id="spacer">
                        <Container className="py-4">
                            <h4>Recent Rentals</h4>
                            {Object.keys(recents).map((key, index) =>
                            <ListGroupCollapse key={index} cat={recents[key]} />
                            )}
                        </Container>
                        </div>
                    </div>
                </div>
            
                <Footer/>
            </div>
        )
    }
}

export default Recent;
