const router = require('express').Router()
const controller = require('./../controllers/spaces-controller')
const userControll = require('./../controllers/uController')

router.route('/')
    .get(controller.findAll)
    .post(controller.addSpace)

router.route('/filter/:zip')
    .get(controller.filter)    


router.route('/update/:id')
    .post(controller.updateSpace)

router.route('/user/:id')
    .get(userControll.getUserDate)

module.exports = router

