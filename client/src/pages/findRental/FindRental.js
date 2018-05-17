import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem } from 'reactstrap';
import spacesClient from './../../scripts/spacesClient'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import geocoder from './../../scripts/geocoder'

import './FindRental.css';

class FindRental extends React.Component {
    
    constructor(){
        super();
        this.state = {
            loggedIn: '',
            user: '',
            userId: '',
            destAdd: '',
            zip: '',
            spaces: [],
            toRent: [],
            rentID: '',
            cDate: '',
            tDate: '',
            rentedSpacesUser: [],
            userRentedDB: { },
            apiKey: 'AIzaSyDz9l4M_Hjs0BXevxJN93Ptep60_0XIVkI',
            isLoading: false,
            stripeToken: null
        }
        this.stripeHandler = window.StripeCheckout.configure({
        key: "pk_test_iwcqOHORnAsvbAhrEAYnyvjq",
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: this.onGetStripeToken.bind(this)
      });
    }

    componentDidMount = () => {
        
        console.log('comp mo')

        const getUData = id => {
            console.log('get data ran')
            axios.get(`/spaces/user/${id}`)
            .then(data => {
         //       console.log(data)
                this.setState({ userRentedDB:data.data})
            })
            .catch(err => console.log(err))
        }

        if(localStorage.getItem('jwtToken')){
            const token = localStorage.getItem('jwtToken')
            const decoded = jwt_decode(token)
     //       console.log(decoded)
            this.setState({
                loggedIn: true,
                user: decoded.username,
                userId: decoded._id
            }, getUData(decoded._id))
       //     console.log(this.state)
        } else {
            this.setState({ loggedIn: false, user: null })
            window.location.replace('/')
            console.log('jeb')
        }


        //console.log(this.state)
    }

    onGetStripeToken (token) {
        // Got Stripe token. This means user's card is valid!
        // We need to continue the payment process by sending this token to our own server.
        // More info: https://stripe.com/docs/charges
        this.setState({stripeToken: token});
    };

    onClickPay () {
        
        this.setState({isLoading: true});
    
        const onCheckoutOpened = () => {
          this.setState({isLoading: false})
        }
    
        // open Stripe Checkout
        this.stripeHandler.open({
          name: 'Landing Pad',
          description: 'Garage Rental',
          amount: 1000, // 10 USD -> 1000 cents
          currency: 'usd',
          opened: onCheckoutOpened.bind(this)
        });
    }

    justSendIt = () => {
        axios.post(`/spaces/update/${this.state.rentID}`, this.state.toRent)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        console.log(this.state.userRentedDB)    
        axios.post(`/spaces/user/${this.state.userId}`, this.state.userRentedDB)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    setToRent = () => {

        this.onClickPay()

        const tempArr = this.state.toRent;

        tempArr.availability.forEach(date => {
            date.times.forEach(time => {
                // console.log(time)
                time.classn === 'temp' && (time.available = 'false', time.classn = 'false')
            })
        })

        this.setState({ toRent:tempArr }, this.justSendIt())

    }

    addToUserAcct = (date, time, img, address, price, type, desc, event) => {

        
        let tempUserArr = this.state.userRentedDB
        let userAv = this.state.rentedSpacesUser

        this.state.userRentedDB.rentedSpaces.length > 0 && (console.log('short ran'), userAv = this.state.userRentedDB.rentedSpaces)
        console.log(this.state.rentedSpacesUser)
        console.log(userAv)
        console.log(tempUserArr)
        // console.log(this.state.spaces)

        const newDate = (specAdd) => {
            const uDateObj = {
                date: date,
                rentId:this.state.rentID,
                img:img,
                address:address,
                price:price,
                times: [time],
                type: type,
                desc: desc
            }

            //console.log('new date ran')
            specAdd.push(uDateObj)
        }

        const createAddress = () => {
            const add = {
                address: address,
                availability: []
            }
            userAv.push(add)
            //console.log(userAv[0])
            dateLoop(userAv[0].availability)
        }

        const dateLoop = (specAdd) => {
            var addDate = true
            specAdd.forEach(e => {   
            if(e.date === date){
                // console.log('dates equal')
                // console.log(e.times.indexOf(time))
                // console.log(e.times)
                if(e.times.indexOf(time) === -1){
                    e.times.push(time)
                    // console.log('time added to times array')
                    // console.log(e.times)
                } else {
                    // console.log(e.times.indexOf(time))
                    // console.log('time removed')      
                    e.times.splice(e.times.indexOf(time), 1)
                    // console.log(e.times)
                }
                addDate = false
                //console.log(this.state)
                }
            
            })
            addDate && newDate(specAdd)
//          console.log()
            userAv.length < 1 && newDate(specAdd)
        }

        let newAdd = true;
        userAv.forEach(s => {
            if(s.address === address){
                newAdd = false
                console.log(s)
                dateLoop(s.availability)     
            } 
        })
        newAdd && createAddress()

        
        tempUserArr.rentedSpaces = userAv;
        //console.log('tempuserarr')
        console.log(tempUserArr)
        // console.log('end user arr')
        this.setState({ rentedSpacesUser:userAv, userRentedDB:tempUserArr })
   //     console.log(this.state)
    }

    concatSpaces = (index, indexDate, indexTime, id, date, time, img, address, price, type, desc, event) => {
        // console.log(index)

        this.addToUserAcct(date, time, img, address, price, type, desc)

        let tempArr; 
        this.state.toRent.length > 1 ? tempArr = this.state.toRent : tempArr = this.state.spaces[index]
        // console.log(tempArr)

        let spaceCl = tempArr.availability[indexDate].times[indexTime].classn
        let spaceAv = tempArr.availability[indexDate].times[indexTime].available
        // console.log(`spaceAv: ${spaceCl}`)

        switch(spaceCl){
            case 'true':
                spaceCl = 'temp'
                spaceAv = 'false'
                break;
            case 'temp':
                spaceCl = 'true'
                spaceAv = 'true'
                break;
            case 'false':
                break
        }
        // console.log(spaceCl)

        tempArr.availability[indexDate].times[indexTime].classn = spaceCl
        tempArr.availability[indexDate].times[indexDate].available = spaceAv
        // tempArr.availability[indexDate].times[indexTime].available = 'false'
        // console.log(tempArr.availability[indexDate].times[indexTime])
        // console.log(tempArr)

        this.setState({
            toRent:tempArr,
            rentID:id
        })

//        console.log(this.state)

    }

    getSpaces = () => {
        //spacesClient.getSpaces(this.state.zip)
        axios
            .get(`/spaces/filter/${this.state.zip}`)
            .then(data => {
                // console.log(data)
                // console.log(this.state)  
                var addressArray = data.data
                //console.log(addressArray)
                addressArray.forEach(e => {
                  //  console.log(e.address, this.state.destAdd)
                    axios
                        .get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${e.address}&destinations=${this.state.destAdd}&mode=driving&language=en-EN&key=${this.state.apiKey}`)
                        .then(data => {
                           // console.log(data.data.rows[0].elements[0].distance.text)
                            e.coord = data.data.rows[0].elements[0].distance.text
                        })
                        .catch(err => console.log(err))
                })
                this.setState({ spaces:addressArray })
            })
            .catch(err => console.log(err))
    }

    updateState = event => {
        if(event.target.name === 'cDate'){
            // console.log(event.target.value)
            let newObj = new Date(event.target.value)
            newObj.setDate(newObj.getDate() + 1)
            // console.log(newObj)
            this.setState({ tDate:newObj, cDate:event.target.value })
        } else {
            this.setState({ [event.target.name]:event.target.value })
            // console.log(this.state)
        }
    }

    render(){
        var buttonText = this.state.isLoading ? "Please wait ..." : "Pay $10"
        var buttonClassName = "Pay-Now" + (this.state.isLoading ? " Pay-Now-Disabled" : "")
        if (this.state.stripeToken) {
        buttonText = "Your payment was processed"
        buttonClassName = "Pay-Now Pay-Now-Disabled"
        }
        return(
            <div className="container" id="solid-bckg">
            <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&v=3&libraries=geometry"></script>
               <div className="grn-hdr"><Header/></div> 
                <div className="row" id="second-line">
                    <div className="input-group mb-3 search-group">
                        <input 
                            name='destAdd'
                            value={this.state.destAdd}
                            id='search-add'
                            onChange={this.updateState}
                            className='form-control'
                            placeholder='Address, State'
                        />
                        <input 
                            type="text" 
                            name='zip'
                            value={this.state.zip}
                            onChange={this.updateState}
                            className="form-control" 
                            id="search-zip" 
                            placeholder="ZIP Code" 
                            aria-label="Location Search" 
                            aria-describedby="basic-addon2" 
                        />    
                        <input 
                            name='cDate'
                            value={this.state.cDate}
                            id='cDate'
                            onChange={this.updateState}
                            type='date'
                            className='form-control'
                            
                        /> 
                        <div className="input-group-append">
                        <button 
                            className="btn btn-outline-primary" 
                            type="button" 
                            id="search-button"
                            onClick={() => this.getSpaces()}>
                            Search
                        </button>
                        </div>
                    
                </div>
                <div className="row" id="third-line">
                    
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 justify-content-center" id="search-div">
                        <div className ="text-center" id="spacer">
                            <Container className="py-4 full-height justify-content-center">
                                <h4>Available Rentals</h4>
                                {this.state.spaces.length === 0 && <Card id="error-card">
                                    <strong>No Data</strong>
                                    Try searching for a different location!
                                    <CardImg top width="60%" className="error-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaQMdCfgZdRK8dYJC8EE7vrEGTrL9KMupwr9bRzsIBluYEdOg" alt="Error image" />
                                </Card>}
                                {(
                                    this.state.spaces.length > 1 && this.state.spaces.map((e, index) => {
                                        return (
                                            <Row className="h-100 justify-content-center full-height align-items-center">
                                                <Col q className="p-0">
                                                    <Card className="rent-border">
                                                        <CardImg top width="100%" className="rent-img" src={e.img} alt="Parking Spot Image" />
                                                        <CardBody className="text-center crd-bdy">
                                                            
                                                            <ListGroup className="text-left list-block">
                                                                <ListGroupItem className="dtls">Address: <small>{e.address}</small></ListGroupItem>
                                                                <ListGroupItem className="dtls">Distance: <small>{e.coord}</small></ListGroupItem>
                                                                <ListGroupItem className="dtls">Price Per Hour: <small>${e.price}.00</small></ListGroupItem>
                                                                <ListGroupItem className="dtls">Spot Type: <small>{e.shortDesc}</small></ListGroupItem>
                                                                <ListGroupItem className="dtls">Description: <small>{e.longDesc}</small></ListGroupItem>
                                                                <ListGroupItem className="text-center scheduling">
                                                                    <strong>AVAILABILITY</strong>
                                                                    <br/>
                                                                    <small>Select the times you would like to reserve</small>
                                                                    <hr/>
                                                                    {(
                                                                        e.availability.map((f, indexDate) => {
                                                                            return(
                                                                                <div className="text-left availability">
                                                                                    
                                                                                    {console.log(this.state.tDate.setDate(this.state.tDate.getDate()))}
                                                                                    
                                                                                    {console.log('f.day')}
                                                                                    {console.log(new Date(f.day).setDate(new Date(f.day).getDate() + 1))}
                                                                                    {(
                                                                                        this.state.tDate.setDate(this.state.tDate.getDate()).toString() === new Date(f.day).setDate(new Date(f.day).getDate() + 1).toString() &&
                                                                                        <div>
                                                                                        <div className='dateTitle'>{f.day.slice(0,10)}</div>
                                                                                            {(
                                                                                                f.times.map((g, indexTime) => {
                                                                                                    let dispClass = g.classn
                                                                                                    
                                                                                                    return(
                                                                                                    <div 
                                                                                                        className={dispClass}
                                                                                                        onClick={() => this.concatSpaces(index, indexDate, indexTime, e._id, f.day, g.time, e.img, e.address, e.price, e.shortDesc, e.longDesc)}>
                                                                                                        {g.time}
                                                                                                    </div>
                                                                                                ) 
                                                                                                })
                                                                                            )}
                                                                                        </div>
                                                                                
                                                                                    )}
                                                                                </div>
                                                                            ) 
                                                                        })
                                                                    )}
                                                                </ListGroupItem>
                                                            </ListGroup>
                                                            <Button className="rnt-btns" size="sm" color="info">Add To Favorites</Button>{" "}
                                                            <Button 
                                                                className="rnt-btns"
                                                                size="sm" 
                                                                color="info"
                                                                onClick={() => this.setToRent()}>Rent</Button>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row> 
                                        )
                                    })
                                )}
                            </Container>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default FindRental;