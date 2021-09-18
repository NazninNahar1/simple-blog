const express = require('express');
const router = express.Router();
const postcontroller = require('../posts/posts.controller');

/* GET home page. */
router.get('/', postcontroller.helloworld);

module.exports = router;
