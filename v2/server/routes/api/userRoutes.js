const express = require('express');
const createUser = require('../../controllers/userController.js');

const router = express.Router()

router.post('/', createUser)

module.exports = router