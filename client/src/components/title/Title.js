import React from 'react';

import './Title.css';
 

class Title extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-light d-flex justify-content-center" id="home-nav">
                    <a className="navbar-brand text-center" id="home-title" href="#">Landing Pad</a>
                    
                </nav>
                
            </div>
        )
    }

}

export default Title;