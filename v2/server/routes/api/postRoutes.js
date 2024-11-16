const express = require('express')
const {createPost, loadPosts} = require('../../controllers/postController')
const router = express.Router()

router.post('/', createPost)
router.get('/', loadPosts)

module.exports = router
