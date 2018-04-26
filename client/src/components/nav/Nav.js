import React from 'react';
import Button from 'material-ui/Button'

class Nav extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Button variant="raised" color="primary">This is a Button</Button>
            </div>
        )
    }

}

export default Nav;