const express = require('express')
const router = express.Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js')


router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes)




module.exports = router;