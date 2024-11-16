const express = require('express');
const {createUser, checkExisting} = require('../../controllers/userController.js');

const router = express.Router()

router.post('/', createUser)
router.post('/verify', checkExisting)

module.exports = router