const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SpaceSchema = new Schema({
  userid: String,
  address: String,
  address: String,
  coord: String,
  img: String,
  price: String,
  availability: Array
})

module.exports = mongoose.model('spaces', SpaceSchema)