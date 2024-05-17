const express = require('express')
const routes = express.Router()
const apiRoutes = require('./api')

routes.use('/api', apiRoutes)

module.exports = routes