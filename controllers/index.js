const router = require('express').Router()
const express = require('express')
const path = require('path')
const apiRoutes = require('./api');
const Post = require('../models/posts');
const User = require('../models');

router.use('/api', apiRoutes);
router.use(express.json())
router.use(express.static(path.join(__dirname,'../public')))


// home route
router.get('/', async (req,res) => {
  try {
    const allPost = await Post.findAll({include:[{model:User}]})
  res.render('all',{ allPost })
  }
  catch(err){
    console.log(err)
  }
})

//signin route
router.get('/signup', async(req,res) => {
  res.render('signup')
})

router.get('/login', async(req,res) => {
  res.render('login')
})

//selected post route
router.get('/posts/:id', async (req,res) => {
  try{
  let postData = await Post.findByPk(req.params.id, {
    include: [{model:User}]
  })
  postData.get({plain:true})
  console.log(postData)

  res.render('posts', postData.dataValues)
  }
  catch(err) {
    console.log(err)
  }
})


router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router