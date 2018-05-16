import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText,
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
    const cat = this.props.space;
    return (
        <div>
            <Container fluid className="full-height" id="card-block">
                <Row className="h-100 justify-content-center full-height align-items-center">
                    <Col q className="p-0">            
                        <Card className="border">
                            <div>
                            <CardTitle>
                                <strong>{cat.name}</strong>
                            </CardTitle>
                            <CardSubtitle>
                                {cat.spotType}  
                            </CardSubtitle>
                            <CardText className="text-left rent-details">
                                    {cat.address} <br/>
                                    Price per Hour: ${cat.availability[0].price}.00<br/>
                                    Spot Description: {cat.spotDescription}   
                                    <hr/>     
                                    Dates Rented:<br/>
                                    Times Rented:<br/>
                                    Total Cost:
                            </CardText> 
                            <CardImg className="rental-img" top width="100%" src={cat.availability[0].img} alt="Parking Image"/> 
                            <br/>
                            
                            <Button size="sm" color="info" className="rental-btns" id="edit-btn">Edit Reservation</Button>{" "}
                            <Button size="sm" color="info" className="rental-btns">Delete Reservation</Button>
                            <br/>
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
