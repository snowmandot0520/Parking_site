const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spacesSchema = new Schema({
    coord: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    availability: {
        type: Array
    }
    
})

const Space = mongoose.model('Space', spacesSchema)

module.exports = Space