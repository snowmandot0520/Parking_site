import React from "react";
import "./Footer.css";


class Footer extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-light fixed-bottom justify-content-center" id="footer">
                    <span id="footer-text">Ⓒ Copyright 2018</span>
                </nav>
            </div>
        )
    }
    
}

export default Footer;