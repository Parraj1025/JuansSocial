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
    if(req.session.loggedIn == true){
    const allPost = await Post.findAll({include:[{model:User}]})
  res.render('all',{ allPost, countvisit: req.session.count, username: `youre logged in as ${req.session.username}`, loggedIn:req.session.loggedIn, showLogOut: true, showLogIn: false, showSignUp: false, dashboard: true})
  }
  else{
    res.render('all', {username: 'Please sign in', showLogIn: true, showSignUp: true}, )
  }}
  catch(err){
    console.log(err)
  }
})


//signin route
router.get('/signup', async(req,res) => {
  if (req.session.loggedIn == false ){
  res.render('signup', {showLogIn: true, signuperror: true})
  }
  else{
    res.render('signup', {showLogIn: true})
  }
})

router.get('/login', async(req,res) => {
  res.render('login')
})



//selected post route
router.get('/dashboard', async (req,res) => {
  try{
  let postData = await Post.findAll({where:{user_id: req.session.userId}})
  const readyData = await postData
  const username = req.session.username
  const loggedIn = req.session.loggedIn
  
  console.log(username)

  res.render('posts', {postData,username,loggedIn})
  }
  catch(err) {
    console.log(err)
  }
})


router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router