import React from 'react';
import Header from './../../components/header/Header';
import Background from './../../components/background/Background';
import Footer from './../../components/footer/Footer';
import Title from './../../components/title/Title';
import { Button, UncontrolledAlert } from 'reactstrap';

import './Homepage.css';

class Homepage extends React.Component {

    constructor() {
      super();
      this.state = {
        loggedIn: false,
        user: null
      };
    }

    componentDidMount() {
      if(localStorage.getItem('jwtToken')) {
        this.setState({ loggedIn: true, user: 'Caglar' });
      }
      else {
        this.setState({ loggedIn: false, user: null });
        window.location.replace('/');
      }
    }

    render() {
        return(
            <div className="container" id="full-body">
                <Background backgroundImage="https://image.freepik.com/free-vector/city-background-design_1300-365.jpg">
                    <Header/>
                    <Title/>
                    <UncontrolledAlert color="info">
                        I am an alert and I can be dismissed!
                    </UncontrolledAlert>
                     <div className=" fixed-bottom park-btn-div">
                        <Button outline color="primary" className="park-btn">Find Parking Near Me</Button>
                        <Button outline color="primary" className="park-btn">Upload a New Parking Spot</Button>
                    </div>
                    <Footer/>
                </Background>
            </div>
        )
    }

}

export default Homepage;