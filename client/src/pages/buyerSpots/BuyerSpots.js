import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Container } from 'reactstrap';
import ListGroupCollapse from './ListGroupCollapse';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import './BuyerSpots.css';

const spots = {
    spot1: {
        name: '3501 Cardinal Rd',
        address: '3501 Cardinal Rd, Finel, KY 32043',
        spotType: 'Private Residence Parking',
        spotImg: 'https://odis.homeaway.com/odis/listing/4b9a574f-bef6-4790-97e6-2e3f5122b636.c6.jpg', 
        price: '$13',
        spotDescription: 'Some description here...'
    },
    spot2: {
        name: 'Amherst Avenue Parking Spot # 112',
        address: '45 Amherst Ave, Rondell, KY 32012',
        spotType: 'Private Residence Parking',
        spotImg: 'http://planphilly.com/uploads/media_items/tesla-plugged-in-at-the-ev-only-zone-on-delancey-street.0.440.3264.1566.860.413.c.jpg', 
        price: '$16',
        spotDescription: 'Some description here...'
    },
    spot3: {
        name: '29 Pine St, #38',
        address: '29 Pine St, Mander, KY 32038',
        spotType: 'Private Residence Parking',
        spotImg: 'https://i2.wp.com/farm8.staticflickr.com/7100/13788431144_98f9631196_c.jpg?ssl=1', 
        price: '$11',
        spotDescription: 'Some description here...'
    }
  }

class BuyerSpots extends React.Component {
    
    constructor() {
        super();
        this.state = { 
            loggedIn: null,
            user: '',
            userId: '',
            spaces: []
        }
    }

    componentDidMount() {

        const getUData = id => {
            axios.get(`/spaces/user/${id}`)
            .then(data => {
                console.log(data)
                this.setState({ spaces:data.data.rentedSpaces })
            })
            .catch(err => console.log(err))
        }

        if(localStorage.getItem('jwtToken')){
            const token = localStorage.getItem('jwtToken')
            const decoded = jwt_decode(token)
            console.log(decoded)
            this.setState({
                loggedIn: true,
                user: decoded.username,
                userId: decoded._id
            }, getUData(decoded._id))
        } else {
            this.setState({ loggedIn: false, user: null })
            window.location.replace('/')
            console.log('jeb')
        };
    }

    render() {
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
                
                <div className="row justify-content-center">
                    <div className="col-xs-12 justify-content-center" id="spots-div">
                        <div className ="text-center" id="spacer">
                        <Container className="py-4">
                            <h4>Buyer Spots</h4>
                            {this.state.spaces.map((e, index) =>
                                    <ListGroupCollapse space={e}  />
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

export default BuyerSpots;
