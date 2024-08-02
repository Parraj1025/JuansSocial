const express = require('express')
const Post = require('../../models/posts')
const UserPosts = require('../../models/userposts')
const User = require('../../models/index')
const router = express.Router()

router.use(express.json())

router.get('/', async (req,res) => {
    const check = await Post.findAll()
    res.status(200).json(check)
})

router.post('/', async (req,res) => {
    const user_id = await Post.create({

    })


   
})

module.exports = router