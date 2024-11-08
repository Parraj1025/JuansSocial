const express = require('express');
const userRoutes  = require('./api/userRoutes.js')
const postRoutes = require('./api/postRoutes.js')
const authRoutes = require('./api/authRoute.js')
const router = express.Router()

router.use('/user', userRoutes)
router.use('/post', postRoutes)
router.use('/signin', authRoutes)

router.use(express.json());
router.use(express.urlencoded({extended: true}))

module.exports = router

