import React from 'react';
import { Card, CardImg, CardText,
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
                        Price per Hour: {cat.price} <br/>
                        Spot Description: {cat.spotDescription}
                </CardText> 
                <CardImg className="imgToggle" top width="100%" src={cat.img} alt="Parking Image"/> 
                <br/>
                <Button size="sm" color="info" id="deleteRental">Edit</Button>{" "}
                <Button size="sm" color="info" id="deleteRental">Delete </Button>
                    <br/>
                </div>
            </Card>
            <br/>
        </div>
    );
  }
}

export default ListGroupCollapse;