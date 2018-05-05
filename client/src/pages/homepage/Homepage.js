import React from 'react';
import Header from './../../components/header/Header';
import Background from './../../components/background/Background';
import Footer from './../../components/footer/Footer';
import Title from './../../components/title/Title';
import { Button, UncontrolledAlert } from 'reactstrap';
import jwt_decode from 'jwt-decode'


import './Homepage.css';

class Homepage extends React.Component {

    constructor() {
      super();
      this.state = {
        loggedIn: false,
        user: null,
        userid: null
      };
    }

    componentDidMount() {
      if(localStorage.getItem('jwtToken')) {
        const token = localStorage.getItem('jwtToken')
        const decoded = jwt_decode(token)
        console.log(decoded)
        this.setState({ loggedIn: true, user: token.username, userid: token._id });
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
                    <br/>
                    <br/>
                    <br/>
                    <UncontrolledAlert color="light" >
                        Welcome to Landing Pad! Click an option below to get started. Happy parking!
                    </UncontrolledAlert>
                     <div className=" fixed-bottom park-btn-div">
                        <Button outline color="primary" className="park-btn" href="/findrental">Find Parking Near Me</Button>
                        <Button outline color="primary" className="park-btn" href="/newspot">Upload a New Parking Spot</Button>
                    </div>
                    <Footer/>
                </Background>
            </div>
        )
    }

}

export default Homepage;