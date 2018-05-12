import React from 'react';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, ListGroup, 
    ListGroupItem } from 'reactstrap';
import spacesClient from './../../scripts/spacesClient'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import './FindRental.css';

class FindRental extends React.Component {
    
    constructor(){
        super();
        this.state = {
            loggedIn: '',
            user: '',
            userId: '',
            zip: '',
            spaces: [],
            toRent: [],
            rentID: '',
            cDate: '',
            tDate: '',
            rentedSpacesUser: [],
            userRentedDB: { }
        }
    }

    componentDidMount = () => {

        console.log('comp mo')

        const getUData = id => {
            console.log('get data ran')
            axios.get(`/spaces/user/${id}`)
            .then(data => {
                console.log(data)
                this.setState({ userRentedDB:data.data})
            })
            .catch(err => console.log(err))
        }

        if(localStorage.getItem('jwtToken')){
            const token = localStorage.getItem('jwtToken')
            const decoded = jwt_decode(token)
            console.log(decoded)
            this.setState({
                loggedIn: true,
                user: decoded.username,
                userId: decoded._id
            }, getUData(decoded._id))
            console.log(this.state)
        } else {
            this.setState({ loggedIn: false, user: null })
            window.location.replace('/')
            console.log('jeb')
        }



        

        console.log(this.state)
    }

    setToRent = () => {


        const tempArr = this.state.toRent;

        tempArr.availability.forEach(date => {
            date.times.forEach(time => {
                // console.log(time)
                time.classn === 'temp' && (time.available = 'false', time.classn = 'false')
            })
        })

        this.setState({ toRent:tempArr })

        axios.post(`/spaces/update/${this.state.rentID}`, this.state.toRent)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    addToUserAcct = (date, time, img, address, price) => {
        
        let tempUserArr = this.state.userRentedDB
        let userAv = this.state.rentedSpacesUser

        this.state.userRentedDB.rentedSpaces.length > 0 && (userAv = this.state.userRentedDB.rentedSpaces)
        
        const newDate = () => {
            const uDateObj = {
                date: date,
                rentId:this.state.rentID,
                img:img,
                address:address,
                price:price,
                times: [time]
            }

            console.log('new date ran')
            userAv.push(uDateObj)
        }

        var addDate = true
        userAv.forEach(e => {
            console.log(date === e.date)
            console.log(e.date)
            if(e.date === date){
                if(e.times.indexOf(time) === -1){
                    e.times.push(time)
                    console.log('time not clicked')
                } else {
                    console.log(e.times.indexOf(time))
                    e.times.splice(e.times.indexOf(time), 1)
                }
                addDate = false
            console.log(this.state)
            }
            console.log(addDate)
            
        })
        addDate && newDate()

//        console.log()
        userAv.length < 1 && newDate()
        
        tempUserArr.rentedSpaces = userAv;
        console.log(userAv)
        this.setState({ rentedSpacesUser:userAv, userRentedDB:tempUserArr })
   //     console.log(this.state)
    }

    concatSpaces = (index, indexDate, indexTime, id, date, time, img, address, price, event) => {
        // console.log(index)

        this.addToUserAcct(date, time, img, address, price)

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
        console.log(this.state)

    }

    getSpaces = () => {
        //spacesClient.getSpaces(this.state.zip)
        axios
            .get(`/spaces/filter/${this.state.zip}`)
            .then(data => {
                // console.log(data)
                // console.log(this.state)  
                this.setState({ spaces:data.data })
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    updateState = event => {
        if(event.target.name === 'cDate'){
            // console.log(event.target.value)
            let newObj = new Date(event.target.value)
            // console.log(newObj)
            this.setState({ tDate:newObj, cDate:event.target.value })
        } else {
            this.setState({ [event.target.name]:event.target.value })
            // console.log(this.state)
        }
        
    }

    render(){
        return(
            <div className="container" id="solid-bckg">
               <div className="grn-hdr"><Header/></div> 
            
                <div className="row text-center" id="second-line">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            name='zip'
                            value={this.state.zip}
                            onChange={this.updateState}
                            className="form-control" 
                            id="search-bar" 
                            placeholder="Search by Location" 
                            aria-label="Location Search" 
                            aria-describedby="basic-addon2" />
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
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Button type="button" className="btn btn-outline-primary home-buttons">Nearby</Button>
                        <Button type="button" className="btn btn-outline-primary home-buttons">Recent</Button>
                        <Button type="button" className="btn btn-outline-primary home-buttons" href="/favorites">Favorites</Button>
                    </div>
                </div>

                <input 
                    name='cDate'
                    value={this.state.cDate}
                    id='cDate'
                    onChange={this.updateState}
                    type='date'
                />

                <div className="row">
                    <div className="col-xs-12 justify-content-center" id="search-div">
                        <div className ="" id="spacer">
                            {(
                                this.state.spaces.length > 1 && this.state.spaces.map((e, index) => {
                                    return (
                                        <Card outline color="secondary">
                                            <CardImg top width="100%" src={e.img} alt="Parking Spot Image" />
                                            <CardBody className="text-center">
                                                <CardTitle>{e.address}</CardTitle>
                                                <CardSubtitle>TO DO: DISTANCE</CardSubtitle>
                                                <ListGroup className="text-left">
                                                    <ListGroupItem>{e.address}</ListGroupItem>
                                                    <ListGroupItem>Price Per Hour: ${e.price}.00</ListGroupItem>
                                                    <ListGroupItem className="small">TO DO: SHORT DESC</ListGroupItem>
                                                    <ListGroupItem className="small">TO DO: LONG DESC</ListGroupItem>
                                                    <ListGroupItem className="small">
                                                        {(
                                                            e.availability.map((f, indexDate) => {
                                                                return(
                                                                    
                                                                    <div>
                                                                        <div>tdate {this.state.tDate.toString()}</div>
                                                                        <div>{f.day}</div>
                                                                        {(
                                                                            //this.state.tDate == f.day && 
                                                                            <div>
                                                                            <div></div>
                                                                            {(
                                                                                f.times.map((g, indexTime) => {
                                                                                    let dispClass = g.classn
                                                                                    
                                                                                    return(
                                                                                    <div 
                                                                                        className={dispClass}
                                                                                        onClick={() => this.concatSpaces(index, indexDate, indexTime, e._id, f.day, g.time, e.img, e.address, e.price)}>
                                                                                        {g.time}
                                                                                    </div>
                                                                                ) 
                                                                                })
                                                                            )}
                                                                        </div>)}
                                                                    </div>
                                                                ) 
                                                            })
                                                        )}
                                                    </ListGroupItem>
                                                </ListGroup>
                                                <br/>
                                                <Button size="sm" color="info">Add To Favorites</Button>{" "}
                                                <Button 
                                                    size="sm" 
                                                    color="info"
                                                    onClick={() => this.setToRent()}>Rent</Button>
                                            </CardBody>
                                        </Card>
                                    )
                                })
                            )}
                        </div>
                    </div>
                </div>
            
                <div className=" fixed-bottom new-btn-div text-center">
                    <Button outline color="primary" className="new-btn">View in Map</Button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default FindRental;