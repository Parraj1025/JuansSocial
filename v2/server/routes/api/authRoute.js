const express = require('express')
const router = express.Router()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {signIn, authenticate} = require('../../controllers/authController')



router.use(cookieParser())


router.post('/', signIn)
router.post('/check', authenticate)

module.exports = router