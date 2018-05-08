const router = require('express').Router()
const controller = require('./../controllers/spaces-controller')

router.route('/')
    .get(controller.findAll)
    .post(controller.addSpace)

router.route('/filter/:zip')
    .get(controller.filter)    

module.exports = router

