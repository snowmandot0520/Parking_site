import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './NewSpot.css';

class NewSpot extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
            
                <div className="row text-center" id="btn-line">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-primary home-buttons">Add Spot</button>
                        <button type="button" className="btn btn-outline-primary home-buttons">Your Spots</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="form-div">
                        <div id="n-s-form">  
                            <Form>
                                <FormGroup>
                                    <Input type="name" name="spotName" id="spotName" placeholder="Parking Spot Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="address" name="spotAddress" id="spotAddress" placeholder="Address" />
                                    <Input type="address" name="spotCity" id="spotCity" placeholder="City" />
                                    <Input type="select" name="spotState" id="spotState" placeholder="State" >
                                        <option>State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </Input>                                    
                                    <Input type="address" name="spotZip" id="spotZip" placeholder="Zip Code" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" name="spotDescription" id="spotDescription" placeholder="Parking Spot Description" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDate">Price Per Hour</Label>
                                    <Input type="price" name="spotPrice" id="spotPrice" placeholder="$" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDate">Start Date</Label>
                                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                                    <Label for="exampleDate">End Date</Label>
                                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleTime">Start Time</Label>
                                    <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                                    <Label for="exampleTime">End Time</Label>
                                    <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="spotImage">Upload Spot Picture</Label>
                                    <Input type="file" name="spotImage" id="spotImage" />
                                    <FormText color="muted">
                                        Image must clearly show parking spot area.
                                    </FormText>
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <legend>About Parking Spot</legend>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Private Residence
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Private Parking Garage
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Private Street Parking
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Other -- Describe Above
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </div>    
                    </div>
                </div>
                <div className="new-btn-div text-center">
                    <Button outline color="primary" id="submit-btn">Submit</Button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default NewSpot;
