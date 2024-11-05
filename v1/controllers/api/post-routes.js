const express = require('express')
const Post = require('../../models/posts')
const UserPosts = require('../../models/comments')
const User = require('../../models/index')
const router = express.Router()

router.use(express.json())

router.get('/', async (req,res) => {
    const check = await Post.findAll()
    res.status(200).json(check)
})

router.post('/', async (req,res) => {
    const user_id = req.session.userId
    const body = req.body.body
    let postdata = await Post.create({
        user_id:user_id,
        body: body
    })
   postdata = await postdata.get()

   if (postdata){
    req.session.newpost = postdata
    res.status(200).render('all')
   }
   console.log(postdata)
})

   

module.exports = router