import React from 'react';

 
  import './Header.css';

class Header extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div class="row" id="top-line">
                    <div className="text-center" id="options">
                        <a className="navbar-brand activity" href="#">Activity</a>
                        <a className="navbar-brand activity" href="#">Parking</a>
                        <a className="navbar-brand activity" href="#">FAQs</a>
                    </div>
                    <i className="material-icons home-icon">settings_applications</i>
                    <i className="material-icons home-icon">account_box</i>
                </div>
            </div>
        )
    }

}

export default Header;