const express = require('express');
const {createUser, checkExisting, getUser} = require('../../controllers/userController.js');

const router = express.Router()

router.post('/', createUser)
router.post('/verify', checkExisting)
router.get('/:username', getUser)

module.exports = router