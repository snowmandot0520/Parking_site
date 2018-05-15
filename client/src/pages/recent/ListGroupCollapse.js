import React from 'react';
import { Col, Container, Row, Card, CardImg, CardText,
    CardTitle, CardSubtitle, Button, Collapse } from 'reactstrap';

import './ListGroupCollapse.css';

class ListGroupCollapse extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    const cat = this.props.cat;
    return (
        <div>
            <Container fluid className="full-height" id="card-block">
                <Row className="h-100 justify-content-center full-height align-items-center">
                    <Col q className="p-0">
                        <Card className="border">
                            <div>
                            <CardTitle>
                                <strong>{cat.spotName}</strong>
                            </CardTitle>
                            <CardSubtitle>
                                Used on {cat.dateUsed}
                            </CardSubtitle>
                            <CardImg className="rental-img" top width="100%" src={cat.spotImg} alt="Parking Spot Image" />
                            <Button color="secondary" size="sm" className="dtls-btn" onClick={this.toggle}>Click for Details</Button>
                            <Collapse isOpen={this.state.collapse}>
                                <CardText className="text-left rent-details">
                                    Time Used: <small>{cat.timesUsed}</small> <br/>
                                    Amount Paid: <small>{cat.pricePaid}</small> <br/>
                                    Address: <small>{cat.address}</small>
                                </CardText> 
                                <Button size="sm" color="info" className="add-btn">Add To Favorites</Button>
                            </Collapse>  
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>        
            <br/>
        </div>
    );
  }
}

export default ListGroupCollapse;