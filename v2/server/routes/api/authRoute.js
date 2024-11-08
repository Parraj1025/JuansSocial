const router = require('express').Router()
const signIn = require('../../controllers/authController')

router.post('/', signIn)

module.exports = router