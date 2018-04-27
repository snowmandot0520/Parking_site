import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
  } from 'reactstrap';
 

class Header extends React.Component {

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

export default Header;