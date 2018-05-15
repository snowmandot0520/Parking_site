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
                            <CardText className="text-left">
                                    {cat.address} <br/>
                                    Price per Hour: ${cat.price}.00<br/>
                                    Spot Description: {cat.spotDescription}        
                            </CardText> 
                            
                            <CardImg className="imgToggle" top width="100%" src={cat.img} alt="Parking Image"/> 
                            <br/>
                            {cat.times.forEach(t => {
                                <div>times: {t}</div>
                            })}
                            <Button size="sm" color="info" id="deleteRental">Edit</Button>{" "}
                            <Button size="sm" color="info" id="deleteRental">Delete </Button>
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
