import React from 'react';
import Footer from './../../components/footer/Footer';

import './NewSpot.css';

class NewSpot extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>This is the newSpot page!
                <Footer />
            </div>
        )
    }
}

export default NewSpot;
