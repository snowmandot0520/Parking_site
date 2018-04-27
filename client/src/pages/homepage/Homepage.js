import React from 'react';
import Nav from './../../components/nav/Nav';

class Homepage extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Nav />
                <div>This is the homepage!</div>
            </div>
        )
    }

}

export default Homepage;