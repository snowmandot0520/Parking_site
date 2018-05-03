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
        const timeArr = []
        function DateObj(day){
            this.day = day;
            this.times = []
            this.addTime = (time) => {
                this.times.push(time)
            }
        }
        var datee = new Date(this.state.startDate)

        console.log(new Date(datee.setDate(datee.getDate() + 1)))
        for(var d = new Date(this.state.startDate); d <= new Date(this.state.endDate); new Date(d.setDate(d.getDate() + 1))){
            var e = new DateObj(d)
            for(var f = parseInt(this.state.startTime); f <= parseInt(this.state.endTime); f++){
                e.addTime({[f]:'available'})
            }
            timeArr.push(e)
        }
        this.setState({ availability:timeArr })
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
