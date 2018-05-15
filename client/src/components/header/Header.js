import React from 'react';
import { Tooltip, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import jwt_decode from 'jwt-decode'
import './Header.css';


class Header extends React.Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          tooltipOpen: false,
          dropdownOpen: false,
          user:""
        };
    }

    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen,
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.replace('/');
    }

    componentDidMount() {
        const token = localStorage.getItem('jwtToken')
        const decoded = jwt_decode(token)
        console.log(decoded)
        this.setState({ user: decoded.username});
    }
    
    render() {
        return(
            <div>
                <div className="row" id="top-line">
                    <div className="text-center" id="options">
                        <a className="navbar-brand activity" href="/findParking">Find</a>
                        <a className="navbar-brand activity" href="/findRental">Rent</a>
                        <a className="navbar-brand activity" href="/newSpot">Add</a>
                    </div>
                    <a href="/">
                        <i className="material-icons home-icon" id="DisabledAutoHideExample" onClick={this.logout}>close</i>
                            {/* {localStorage.getItem('jwtToken')} */}
                    </a>       
                    <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
                        Sign Out
                    </Tooltip>             
                    
                    <ButtonDropdown direction="down" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }} id="user-btn">
                        <DropdownToggle color="transparent" size="sm" id="btn-back">
                        <i className="material-icons home-icon">account_box</i>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/homepage">{this.state.user}</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><a href="/myAccount">Account</a></DropdownItem>
                            <DropdownItem><a href="/sellerSpots">Seller Spots</a></DropdownItem>
                            <DropdownItem><a href="/buyerSpots">Buyer Spots</a></DropdownItem>
                            <DropdownItem>FAQs</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>                   
            </div>
        )
    }

}

export default Header;