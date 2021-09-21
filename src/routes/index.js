const express = require('express');
const router = express.Router();
const postcontroller = require('../posts/posts.controller');

/* GET home page. */
router.post('/posts', postcontroller.createblog);
router.get('/posts', postcontroller.getBlogs);
router.get('/posts/:id', postcontroller.getBlogById);
router.put('/posts/:id', postcontroller.updateBlogById);
router.delete('/posts/:id', postcontroller.deleteBlogById);

module.exports = router;
