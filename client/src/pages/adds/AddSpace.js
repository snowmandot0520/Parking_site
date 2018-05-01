import React from 'react'
import axios from 'axios'

class AddSpace extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    updateSpace(event) {
        this.setState(
            { [event.name]:event.value }
        )
    }

    sendSpace() {
        axios
            .post('/', this.state)
            .then(data => console.log(data))
            .then(err => console.log(err))
    }

    render() {
        return(
            <div>
                <input  />
            </div>
        )
    }

}