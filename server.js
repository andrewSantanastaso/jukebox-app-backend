require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('connected', () => {
    console.log('connected to Mongo')
})

mongoose.connection.on('error', () => {
    console.error(error)
})

app.listen(3000, () => {
    console.log('app running on 3000')
})