const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spacesSchema = new Schema({
    coord: {
        type: String,
        required: true
    },
    
})