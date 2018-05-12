const db = require("./../models/user")

module.exports = {
    addSpace: (req, res) => {
        db
            .findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    getUserDate: (req, res) => {
        db
            .findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}