import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Card, CardText } from 'reactstrap';
import spacesApi from './../../scripts/spacesClient'
import jwt_decode from 'jwt-decode'

import './NewSpot.css';

class NewSpot extends React.Component {
    
    componentDidMount() {
        if(localStorage.getItem('jwtToken')){
            const token = localStorage.getItem('jwtToken')
            const decoded = jwt_decode(token)
            this.setState({
                loggedIn: true,
                username: decoded.username,
                userId: decoded._id
            })
        } else {
            this.setState({ loggedIn: false, user: null })
            window.location.replace('/')

        }
    }

    constructor(){
        super();
        this.state = {
            loggedIn: false,
            user: null,
            userId: '',
            address: '',
            coord: '',
            zip: '',
            img: '',
            price: '',
            availability: [],
            startDate: '',
            endDate: '',
            days: [
                { monday: '' },
                { tuesday: '' },
                { wednesday: '' },
                { thursday: '' },
                { friday: '' },
                { saturday: '' },
                { sunday: '' }
            ],
            startTime: '',
            endTime: '',
            times: []
        }
    }

    getCoord = (address) => {

    }

    updateTimes = () => {
        const startT = parseInt(this.state.startTime)
        const endT = parseInt(this.state.endTime)
        
        for(var i = startT; i <= endT; i++){ this.state.times.push(i) }
    }

    updateState = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log('jeb')
    }

    compileTime = () => {
    
        this.updateTimes()

        const tempStart = new Date(this.state.startDate)
        const tempEnd = new Date(this.state.endDate)

        for(let d = tempStart; d <= tempEnd; new Date(d.setDate(d.getDate() + 1))){
            let date = d.toString()
            // date = date//.slice(0,10)
            let newDate = new Date(date) 
            let e = { day: newDate, times: [] }
            
            for(var i = 1; i <= 24; i++){
                const key = i 
                const timeObj = { time:i, available:'false', classn:'false' }
                console.log()
                if(this.state.times.indexOf(i) > -1){ timeObj.available = 'true'; timeObj.classn = 'true' }
                
                e.times.push(timeObj)
            }            
        
            this.setState({ availability:this.state.availability.push(e)})
        }

        spacesApi.createSpace(this.state)
    }

    
    render(){
        return(
            <div className="container" id="solid-bckg">
                <div className="grn-hdr"><Header/></div> 
                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="form-div">
                        <div className ="text-center" id="spacer">
                            <Container className="py-4">
                                <h4>New Spot</h4>
                            <Card>
                                <input 
                                    name='address'
                                    value={this.state.address}
                                    placeholder='Address'
                                    id='address'
                                    onChange={this.updateState}
                                />
                                <input 
                                    type='string'
                                    name='zip'
                                    id='zip'
                                    placeholder='Zip Code'
                                    value={this.state.zip}
                                    onChange={this.updateState}
                                />
                                <input 
                                    name='img'
                                    value={this.state.img}
                                    placeholder='Image URL'
                                    id='img'
                                    onChange={this.updateState}
                                />
                                <input 
                                    name='price'
                                    value={this.state.price}
                                    placeholder='Price per Hour'
                                    id='price'
                                    onChange={this.updateState}
                                />
                                <Input type="select" name="spotType" id="spotType" placeholder='Spot Type'>
                                    <option>Select Spot Type</option>
                                    <option>Residential Driveway</option>
                                    <option>Curb-side Spot</option>
                                    <option>Private Parking Spot</option>
                                    <option>Private Garage</option>
                                    <option>Other</option>
                                </Input>
                                <input 
                                    type="textarea"
                                    name='description'
                                    value={this.state.descriptioin}
                                    placeholder='Spot Description'
                                    id='description'
                                    onChange={this.updateState}
                                />
                                <hr/>
                                <div id="availability" className="text-center">  
                                    <p id="small-title" className="text-center">Availability</p>
                                    Start Date
                                    <input 
                                        type='date'
                                        id='start'
                                        name='startDate'
                                        value={this.state.startDate}
                                        onChange={this.updateState}
                                    />
                                    <br/>
                                    End Date
                                    <input 
                                        type='date'
                                        name='endDate'
                                        value={this.state.endDate}
                                        id='end'
                                        onChange={this.updateState}
                                    />
                                    <br/>
                                    Sun
                                    <input 
                                        type='checkbox'
                                        name='sun'
                                        value={this.state.sun}
                                        id='sun'
                                        onChange={this.updateState}
                                    />
                                    Mon
                                    <input 
                                        type='checkbox'
                                        name='mon'
                                        value={this.state.mon}
                                        id='mon'
                                        onChange={this.updateState}
                                    />
                                    Tues
                                    <input 
                                        type='checkbox'
                                        name='tues'
                                        value={this.state.tues}
                                        id='tues'
                                        onChange={this.updateState}
                                    />
                                    Wed
                                    <input 
                                        type='checkbox'
                                        name='wed'
                                        value={this.state.wed}
                                        id='wed'
                                        onChange={this.updateState}
                                    />
                                    <br/>
                                    Thurs
                                    <input 
                                        type='checkbox'
                                        name='thurs'
                                        value={this.state.thurs}
                                        id='thurs'
                                        onChange={this.updateState}
                                    />
                                    Fri
                                    <input 
                                        type='checkbox'
                                        name='fri'
                                        value={this.state.fri}
                                        id='fri'
                                        onChange={this.updateState}
                                    />
                                    Sat
                                    <input 
                                        type='checkbox'
                                        name='sat'
                                        value={this.state.sat}
                                        id='sat'
                                        onChange={this.updateState}
                                    />
                                    <br/>
                                    Start Time
                                    <input 
                                        type='text'
                                        name='startTime'
                                        placeholder='1-24'
                                        value={this.state.startTime}
                                        id='startTime'
                                        onChange={this.updateState}
                                    />
                                    <br/>
                                    End Time
                                    <input 
                                        type='text'
                                        name='endTime'
                                        placeholder='1-24'
                                        value={this.state.endTime}
                                        id='endTime'
                                        onChange={this.updateState}
                                    />
                                </div>
                                <button id='submit-button' onClick={() => this.compileTime()}>Submit</button>
                            </Card>
                            </Container>  
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default NewSpot;
