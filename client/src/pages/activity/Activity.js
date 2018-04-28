import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import './Activity.css';

class Activity extends React.Component {
    
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
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="http://planphilly.com/uploads/media_items/tesla-plugged-in-at-the-ev-only-zone-on-delancey-street.0.440.3264.1566.860.413.c.jpg" alt="Parking Spot Image" />
                                <CardBody>
                                    <CardTitle>Amherst Avenue Parking Spot # 112</CardTitle>
                                    <CardSubtitle>December 27, 2017</CardSubtitle>
                                    <CardText>10:00 AM - 4:00 PM    --    $60.00
                                    </CardText>
                                    <Button>Add To Favorites</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="https://odis.homeaway.com/odis/listing/4b9a574f-bef6-4790-97e6-2e3f5122b636.c6.jpg" alt="Parking Spot Image" />
                                <CardBody>
                                    <CardTitle>3501 Cardinal Rd</CardTitle>
                                    <CardSubtitle>November 7, 2017</CardSubtitle>
                                    <CardText>1:00 PM - 10:00 PM    --    $99.00
                                    </CardText>
                                    <Button>Add To Favorites</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cdh2TfezOmr3pfTWM-GeCNgJ7W8atMJzwupO1suo8aZx4ixr" alt="Parking Spot Image" />
                                <CardBody>
                                    <CardTitle>2201 Market St, Spot #06</CardTitle>
                                    <CardSubtitle>September 26, 2017</CardSubtitle>
                                    <CardText>12:00 PM - 1:00 PM    --    $12.00
                                    </CardText>
                                    <Button>Add To Favorites</Button>
                                </CardBody>
                            </Card>
                            <p> </p>
                            <Card outline color="secondary">
                                <CardImg top width="100%" src="https://i2.wp.com/farm8.staticflickr.com/7100/13788431144_98f9631196_c.jpg?ssl=1" alt="Parking Spot Image" />
                                <CardBody>
                                    <CardTitle>29 Pine St, #38</CardTitle>
                                    <CardSubtitle>September 1, 2017</CardSubtitle>
                                    <CardText>9:00 AM - 2:00 PM    --    $55.00
                                    </CardText>
                                    <Button>Add To Favorites</Button>
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

export default Activity;
