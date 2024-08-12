const Comments = require('../../models/comments')
const express = require('express')
const router = express.Router()
router.use(express.json())

router.get('/', async (req,res) => {
    const comments = await Comments.findAll()
    
    console.log('hey')
    res.status(200).json('hey')
})

module.exports = router