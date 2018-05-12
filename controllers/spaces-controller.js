const db = require('./../models/spaces')
const users = require('./../models/user')

module.exports = {
    findAll: (req, res) => {
        db
            .find()
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    addSpace: (req, res) => {
        db
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(data))
        console.log('request recieved')
    },
    filter: (req, res) => {
        db
            .find({'zip': req.params.zip})
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    updateSpace: (req, res) => {
        db
            .findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }

}