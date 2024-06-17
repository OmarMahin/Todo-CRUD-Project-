const express = require('express')
const routes = express.Router()
const apiRoutes = require('./api')

require('dotenv').config()

routes.use(`${process.env.BASE_URL}`, apiRoutes)

module.exports = routes