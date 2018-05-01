const router = require('express').Router()
const controller = require('./../controllers/spaces-controller')

router.route('/')
    .get(controller.findAll)
    .post(controller.addSpace)
    
module.exports = router

