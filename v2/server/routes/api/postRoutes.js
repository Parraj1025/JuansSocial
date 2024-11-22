const express = require('express')
const {createPost, loadPosts, userPosts, deletePost, upvotes} = require('../../controllers/postController')
const router = express.Router()

router.post('/:postId/upvote', upvotes)
router.post('/', createPost)
router.get('/', loadPosts)
router.get('/:username', userPosts)
router.delete('/:postId', deletePost)

module.exports = router
