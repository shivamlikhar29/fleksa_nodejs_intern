const express = require('express');

const router = express.Router();

const { createPost, updatePost, deletePost,getPost } = require('../controllers/post')

router.get('/',getPost)
router.post('/',createPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)

module.exports = router