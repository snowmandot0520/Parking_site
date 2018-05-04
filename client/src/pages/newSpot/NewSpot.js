import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import Title from './../../components/title/Title';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import spacesApi from './../../scripts/spacesClient'


import './NewSpot.css';

class NewSpot extends React.Component {
    
    constructor(){
        super();
        this.state = {
            userId: '',
            address: '',
            coord: '',
            img: '',
            price: '',
            availability: [],
            startDate: '',
            endDate: '',
            sun: '',
            mon: '',
            tues: '',
            wed: '',
            thr: '',
            fri: '',
            sat: '',
            sun: '',
            startTime: '',
            endTime: ''
        }
    }

    getCoord = (address) => {

    }

    updateState = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log('jeb')
    }

    compileTime = () => {
        // Empty array to hold time availablity objects 
        const timeArr = []

        // Constructor function for availablitily object
        // respresents a single day with an array of objects.
        // the addTime method will add the time/ availability to the array
        function DateObj(day){
            this.day = day;
            this.times = []
            this.addTime = (time) => {
                this.times.push(time)
            }
        }

        // Loops through the range of dates 
        // creates a date object for each date
        //console.log(new Date(this.state.startDate))
        for(var d = new Date(this.state.startDate); d <= new Date(this.state.endDate); new Date(d.setDate(d.getDate() + 1))){
            console.log('date loop ran')
            var e = new DateObj(d)
            
            // Loops through the selected times
            // ToDo: add dates that aren't selected as unavailable
            // current loop only looks at selected dates
            //console.log(e)
            for(var f = parseInt(this.state.startTime); f <= parseInt(this.state.endTime); f++){
                // Calls the addTime method of the new object 
                // and adds an objec to the times array
                var newTime = f
                const time = {
                    time: newTime
                }
                e.times.push(time)
                //console.log('time loop ran')
            }
            // pushes the new object to the temporary array
            timeArr.push(e)
            console.log(timeArr)
            this.setState({availability:timeArr})
        }
        // sets the value for the availability state equal to the new array
        // adds data to db
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
