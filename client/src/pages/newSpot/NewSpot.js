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
            sun: ''
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
                            onChang={this.updateState}
                        />
                    </div>
                
                <button id='submit-button' onClick={() => spacesApi.createSpace(this.state)}>
                    Submit
                </button>
                <Footer/>
            </div>
        )
    }
}

export default NewSpot;
