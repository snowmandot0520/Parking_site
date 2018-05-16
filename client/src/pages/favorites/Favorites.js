import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Container, Button } from 'reactstrap';
import ListGroupCollapse from './ListGroupCollapse';

import './Favorites.css';

const favorites = {
    favorite1: {
        name: '3501 Cardinal Rd',
        distanceToHere: '1.02 mi',
        address: '3501 Cardinal Rd, Finel, KY 32043',
        spotType: 'Private Residence Parking',
        spotImg: 'https://odis.homeaway.com/odis/listing/4b9a574f-bef6-4790-97e6-2e3f5122b636.c6.jpg'
    },
    favorite2: {
        name: 'Sunnyside Parking Garage',
        distanceToHere: '0.07 mi',
        address: '4200 Sunnyside Rd, Fies, KY 32034',
        spotType: 'Public Parking Deck',
        spotImg: 'http://medias.photodeck.com/23cc5642-f6f3-11e0-95c5-9d84cecc40fb/1981_1908412_xlarge.jpg'
    },
    favorite3: {
        name: '29 Pine St, #38',
        distanceToHere: '0.89 mi',
        address: '29 Pine St, Mander, KY 32038',
        spotType: 'Private Residence Parking',
        spotImg: 'https://i2.wp.com/farm8.staticflickr.com/7100/13788431144_98f9631196_c.jpg?ssl=1'
    },
    favorite4: {
        name: 'Amherst Avenue Parking Spot # 112',
        distanceToHere: '0.02 mi',
        address: '45 Amherst Ave, Rondell, KY 32012',
        spotType: 'Private Residence Parking',
        spotImg: 'http://planphilly.com/uploads/media_items/tesla-plugged-in-at-the-ev-only-zone-on-delancey-street.0.440.3264.1566.860.413.c.jpg'
    },
    favorite5: {
        name: 'Meridian Ave Public Parking Lot',
        distanceToHere: '2.41 mi',
        address: '47 Meridian Ave, Finel, KY 32011',
        spotType: 'Public Parking Lot',
        spotImg: 'https://i.pinimg.com/originals/0f/1b/e2/0f1be2c19812f3abe5735955ac31f65a.jpg'
    }
  }

class Favorites extends React.Component {
    
    constructor() {
        super();
        this.state = { 
        }
    }

    render() {
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
               <div className="btn-group three-btns" role="group" aria-label="Basic example">
                    <Button type="button" className="btn btn-outline-primary hm-buttons" href="/findParking">Nearby</Button>
                    <Button type="button" className="btn btn-outline-primary hm-buttons" href="/recent">Recent</Button>
                    <Button type="button" className="btn btn-outline-primary hm-buttons" href="/favorites">Favorites</Button>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 justify-content-center" id="activity-div">
                        <div className ="text-center" id="spacer">
                        <Container className="py-4">
                            <h4>Favorites</h4>
                            {Object.keys(favorites).map((key, index) =>
                            <ListGroupCollapse key={index} cat={favorites[key]} />
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

export default Favorites;
