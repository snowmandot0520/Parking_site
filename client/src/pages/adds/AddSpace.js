import React from 'react'
import axios from 'axios'

class AddSpace extends React.Component {

    constructor() {
        super()
        this.state = {
            coord: '',
            userId: '',
            availability: []
        }
    }

    updateSpace = event => {
        this.setState(
            { [event.target.name]:event.target.value }
        )
        console.log(this.state)
    }

    sendSpace = () => {
        axios
            .post('/spaces', this.state)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <input  
                    id='coord'
                    name='coord'
                    value={this.state.coord}
                    onChange={this.updateSpace}
                />
                <input 
                    id='uid'
                    name='userId'
                    value={this.state.userId}
                    onChange={this.updateSpace}
                />
                <button onClick={this.sendSpace}>Submit</button>
            </div>
        )
    }

}

export default AddSpace