import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
    
            let e = { day: d, times: [] }
            
            for(var i = 1; i <= 24; i++){
                const key = i 
                const timeObj = { [i]:'false' }
                console.log()
                if(this.state.times.indexOf(i) > -1){ timeObj[i] = 'true' }
                
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
                    <input 
                        name='address'
                        value={this.state.address}
                        placeholder='address'
                        id='address'
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
                    <div>
                        <input 
                            type='date'
                            id='start'
                            name='startDate'
                            value={this.state.startDate}
                            onChange={this.updateState}
                        />
                        <input 
                            type='date'
                            name='endDate'
                            value={this.state.endDate}
                            id='end'
                            onChange={this.updateState}
                        />
                        <input 
                            type='checkbox'
                            name='sun'
                            value={this.state.sun}
                            id='sun'
                            onChange={this.updateState}
                        />Sunday
                        <input 
                            type='checkbox'
                            name='mon'
                            value={this.state.mon}
                            id='mon'
                            onChange={this.updateState}
                        />Monday
                        <input 
                            type='checkbox'
                            name='tues'
                            value={this.state.tues}
                            id='tues'
                            onChange={this.updateState}
                        />
                        <input 
                            type='text'
                            name='startTime'
                            value={this.state.startTime}
                            id='startTime'
                            onChange={this.updateState}
                        />
                        <input 
                            type='text'
                            name='endTime'
                            value={this.state.endTime}
                            id='endTime'
                            onChange={this.updateState}
                        />
                    </div>
                
                <button id='submit-button' onClick={() => this.compileTime()}>
                    Submit
                </button>
                <Footer/>
            </div>
        )
    }
}

export default NewSpot;
