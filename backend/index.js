const express = require('express')
const cors = require('cors')
const dbConnect = require('./databaseConfig/databseConnectionString')
const app = express()
const routes = require('./routes')
const port = process.env.PORT || 4000

app.use(cors())

dbConnect()

app.use(express.json())

app.use('/', routes)

app.use('/', (req,res)=>{
    res.send({erro: 'No api found'})
})

app.listen(port, ()=>{
    console.log('Server running on port 3000.')
})