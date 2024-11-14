const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes  = require('./api/userRoutes.js')
const postRoutes = require('./api/postRoutes.js')
const authRoutes = require('./api/authRoute.js')
const router = express.Router()

router.use('/user', userRoutes)
router.use('/post', postRoutes)
router.use('/authenticate', authRoutes)

router.use(bodyParser.json())
router.use(express.json());
router.use(express.urlencoded({extended: true}))

const corsOptions = {
    origin: 'http://localhost:5173/',
    credentials: true
}

router.use(cors(corsOptions))





module.exports = router

