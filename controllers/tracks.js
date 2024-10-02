const express = require('express')
const router = express.Router()
const Track = require('../models/track')

router.post('/tracks', async (req, res) => {
    try {
        const newTrack = await Track.create({
            title: req.body.title,
            artist: req.body.artist
        })
        res.status(201).json({ newTrack })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/tracks', async (req, res) => {
    try {
        const allTracks = await Track.find({})
        res.status(200).json({ allTracks })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/tracks/:id', async (req, res) => {
    try {
        const foundTrack = await Track.findOne(req.body.params)
        res.status(200).json({ foundTrack })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = router