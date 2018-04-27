import React from 'react';
import Title from './../../components/title/Title';
import Background from './../../components/background/Background';
import Footer from './../../components/footer/Footer';
import { Button } from 'reactstrap';

import './LoginPage.css';

class Login extends React.Component {
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" id="full-body">
                <Background backgroundImage="https://image.freepik.com/free-vector/city-background-design_1300-365.jpg">
                    <Title/>
                    <p id="description">A parking rental app</p>
                    <div className="row">
                    </div>
                    <div className=" fixed-bottom btn-div">
                        <Button outline color="primary" className="simple-btn">Sign In</Button>
                        <Button outline color="primary" className="simple-btn">Sign Up</Button>
                    </div>
                    <Footer/>
                </Background>
            </div>
        )
    }
}

export default Login;