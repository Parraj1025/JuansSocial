const express = require('express');
const {createUser, checkExisting, getUserID} = require('../../controllers/userController.js');

const router = express.Router()

router.post('/', createUser)
router.post('/verify', checkExisting)
router.get('/:username', getUserID)

module.exports = router