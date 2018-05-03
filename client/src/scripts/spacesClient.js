import axios from 'axios'

export default {
    createSpace: data => {
        axios
            .post('/spaces', data)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        console.log('axios post ran')
    
        }
}