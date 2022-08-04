const express = require('express')

const router = express.Router()

const {getAllPosts,getPost, createPost, editPost, deletePost } = require('../controllers/post')

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').get(getPost).patch(editPost).delete(deletePost);


module.exports = router