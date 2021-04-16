const businessControllers = require('../controllers/businessControllers')
const express = require('express')

const businessRouters = express.Router()

businessRouters.get('/all', businessControllers.getAllBusinesses)
businessRouters.post('/', businessControllers.getOneBusiness)
businessRouters.post('/new', businessControllers.createBusiness)
businessRouters.post('/reviews', businessControllers.getReviews)



module.exports = businessRouters