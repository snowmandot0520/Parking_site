import React from 'react';
import Title from './../../components/title/Title';
import Background from './../../components/background/Background';
import Footer from './../../components/footer/Footer';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input } from 'reactstrap';

import './LoginPage.css';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modal: false
    };

    this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    

    render(){
        return(
            <div className="container" id="full-body">
                <Background backgroundImage="https://image.freepik.com/free-vector/city-background-design_1300-365.jpg">
                    <Title/>
                    <p id="description">A parking rental app</p>
                    <div className="row">
                    </div>

                    <div className=" fixed-bottom" id="sign-in">
                        <Button outline color="primary" className="simple-btn" onClick={this.toggle}>Sign In</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="exampleUsername" sm={2}>Username</Label>
                                <Col sm={10}>
                                    <Input type="username" name="username" id="username" placeholder="username" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password" />
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                        </Modal>
                    </div>
                    <div className=" fixed-bottom" id="sign-up">
                        <Button outline color="primary" className="simple-btn" onClick={this.toggle}>Sign Up</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="exampleUsername" sm={2}>Username</Label>
                                <Col sm={10}>
                                    <Input type="username" name="username" id="username" placeholder="username" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleConfPassword" sm={2}>Confirm Password</Label>
                                <Col sm={10}>
                                    <Input type="confPassword" name="confPassword" id="confPassword" placeholder="password" />
                                </Col>
                            </FormGroup>                                    
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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