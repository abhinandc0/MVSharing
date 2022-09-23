var express = require('express');
var router = express.Router();
var blogModel = require('../models/blog-model')

/* GET home page. */
router.get('/', function(req, res, next) {
  blogModel.getPost().then((posts)=>{
    console.log(posts);
    res.render('users/index', {posts});
  
  })
});

module.exports = router;
