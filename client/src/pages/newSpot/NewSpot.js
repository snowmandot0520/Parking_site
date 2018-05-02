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
            userId: '',
            address: '',
            coord: '',
            img: '',
            price: '',
            availability: []
        }
    }

    getCoord = (address) => {

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
                    />
                    <input 
                        name='img'
                        value={this.state.img}
                        placeholder='Image URL'
                        id='img'
                    />    
                
               
                <Footer/>
            </div>
        )
    }
}

export default NewSpot;
