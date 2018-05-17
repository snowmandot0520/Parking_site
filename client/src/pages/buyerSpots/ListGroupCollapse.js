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
                            <CardImg className="rental-img" top width="100%" src={cat.availability[0].img} alt="Parking Image"/> 
                            <CardText className="text-left rent-details">
                                    <span className='timeTitle'>Address:</span> <small>{cat.address}</small> <br/>
                                    <span className='timeTitle'>Price per Hour:</span> <small>${cat.availability[0].price}.00</small><br/>
                                    <span className='timeTitle'>Spot Type:</span> <small>{cat.availability[0].type}</small><br/>
                                    <span className='timeTitle'>Spot Description:</span> <small>{cat.availability[0].desc}</small>
                                       
                                    <hr/>     
                                    {(
                                        cat.availability.map(e => {
                                            console.log(e.date)
                                            console.log(e.times)
                                            return(
                                                <div>
                                                    <div className='timeTitle'>{e.date.slice(0,10)}</div>
                                                    {e.times.map(t => {
                                                        return(<div className='parkingTimes'>{t}</div>)
                                                    })}
                                                </div>
                                            )
                                        })
                                    )}
                            </CardText>
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
