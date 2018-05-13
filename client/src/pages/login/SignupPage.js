import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Title from './../../components/title/Title';
import Background from './../../components/background/Background';
import Footer from './../../components/footer/Footer';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input, Alert } from 'reactstrap';

import './SignupPage.css';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            t1: false,
            modal1: false,
            modal2: true,
            username: '',
            password: '',
            signedUp: false
        };
    
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            t1: !this.state.t1
        });
    }
    closeModal(tabId) {
        this.setState({
            [tabId]: false
        });
    }
    showModal(modal) {
        this.setState({
            [modal]: true
        });
        console.log(this.state);
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

      notification = () => {
          alert("signed up!")
      }
    
    onSubmit = (e) => {
        e.preventDefault();

        const { username, password} = this.state;

        axios.post('/api/auth/signup', { username, password})
            .then((result) => {
                this.setState({signedUp: true});
                //this.props.history.push("/")
                this.closeModal("modal2");
            });
    }
    

    render(){
        const { username, password, signedUp } = this.state;
        return(
            <div className="container" id="full-body">
                <Background backgroundImage="https://image.freepik.com/free-vector/city-background-design_1300-365.jpg">
                    <Title/>
                    <p className="title-description">A parking rental app</p>
                    {
                        signedUp && (
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <Alert className="new-user-alert">Hello {username}.<br/>You successfully signed up. Now, please sign in!</Alert>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        )
                    }
                    <div className=" fixed-bottom" id="sign-in">
                       <Link to="/"><Button outline color="primary" className="simple-btn" onClick={this.showModal.bind(this, "modal1")}>Sign In</Button></Link>
                    </div>
                    <div className=" fixed-bottom" id="sign-up">
                        <Button outline color="primary" className="simple-btn" onClick={this.showModal.bind(this, "modal2")}>Sign Up</Button>
                        <Modal isOpen={this.state.modal2} toggle={this.closeModal.bind(this, "modal2")} className={this.props.className} id="enter-modal">
                            <ModalHeader toggle={this.closeModal.bind(this, "modal2")} className="mod-title">Sign Up</ModalHeader>
                            <ModalBody className="mod-body">
                                <FormGroup row>
                                    <Label for="exampleUsername" sm={2}>Username</Label>
                                    <Col sm={10}>
                                        <Input 
                                        type="email" 
                                        name="username" 
                                        id="username" 
                                        placeholder="username" 
                                        value={username} 
                                        onChange={this.onChange} required/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input 
                                        type="password" 
                                        name="password" 
                                        id="examplePassword" 
                                        placeholder="password" 
                                        value={password} 
                                        onChange={this.onChange} required/>
                                    </Col>
                                </FormGroup>                       
                            </ModalBody>
                            <ModalFooter className="mod-foot">
                                <Button color="primary" onClick={this.onSubmit}>Submit</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <Footer/>
                </Background>
            </div>
        )
    }
}

export default Login;