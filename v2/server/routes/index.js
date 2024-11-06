const express = require('express');
const userRoutes  = require('./api/userRoutes.js')
const postRoutes = require('./api/postRoutes.js')
const router = express.Router()

router.use('/user', userRoutes)
router.use('/post', postRoutes)

router.use(express.json());
router.use(express.urlencoded({extended: true}))

module.exports = router

