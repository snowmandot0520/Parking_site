import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Container } from 'reactstrap';
import ListGroupCollapse from './ListGroupCollapse';

import './MySpots.css';

const spots = {
    spot1: {
        name: '3501 Cardinal Rd',
        distanceToHere: '1.02 mi',
        address: '3501 Cardinal Rd, Finel, KY 32043',
        spotType: 'Private Residence Parking',
        spotImg: 'https://odis.homeaway.com/odis/listing/4b9a574f-bef6-4790-97e6-2e3f5122b636.c6.jpg'
    },
    spot2: {
        name: 'Sunnyside Parking Garage',
        distanceToHere: '0.07 mi',
        address: '4200 Sunnyside Rd, Fies, KY 32034',
        spotType: 'Public Parking Deck',
        spotImg: 'http://medias.photodeck.com/23cc5642-f6f3-11e0-95c5-9d84cecc40fb/1981_1908412_xlarge.jpg'
    },
    spot3: {
        name: '29 Pine St, #38',
        distanceToHere: '0.89 mi',
        address: '29 Pine St, Mander, KY 32038',
        spotType: 'Private Residence Parking',
        spotImg: 'https://i2.wp.com/farm8.staticflickr.com/7100/13788431144_98f9631196_c.jpg?ssl=1'
    }
  }

class MySpots extends React.Component {
    
    constructor() {
        super();
        this.state = { 

        }
    }
    


    render() {
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
                
                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="activity-div">
                        <div className ="text-center" id="spacer">
                        <Container className="py-4">
                            <h4>My Rental Spots</h4>
                            {Object.keys(spots).map((key, index) =>
                            <ListGroupCollapse key={index} cat={spots[key]} />
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

export default MySpots;
