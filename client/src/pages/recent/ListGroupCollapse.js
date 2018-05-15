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
                                {cat.dateUsed}
                            </CardSubtitle>
                            <CardImg className="imgToggle" top width="100%" src={cat.spotImg} alt="Parking Spot Image" />
                            <Button color="secondary" size="sm" className="tiny-text" onClick={this.toggle}>Click for Details</Button>
                            <Collapse isOpen={this.state.collapse}>
                                <CardText>
                                    {cat.timesUsed} <br/>
                                    {cat.pricePaid} <br/>
                                    {cat.address}
                                </CardText> 
                                <Button size="sm" color="info">Add To Favorites</Button>
                                <br/>
                                <br/>
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