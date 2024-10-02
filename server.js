require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Track = require('./models/track')
const trackRouter = require('./controllers/tracks')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('connected', () => {
    console.log('connected to Mongo')
})

mongoose.connection.on('error', () => {
    console.error(error)
})

app.use(cors())
app.use(express.json())

app.use('/', trackRouter)

app.listen(3000, () => {
    console.log('app running on 3000')
})