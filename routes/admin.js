var express = require('express');
var router = express.Router();
var blogModel = require('../models/blog-model');
var userModel = require('../models/user-model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  blogModel.getPost().then((posts)=>{
    console.log(posts);
    res.render('admin/posts', {admin:false, posts})
  })
});

router.get('/add-post',(req,res)=>{
  res.render('admin/add-post');
});

router.post('/add-post',(req,res)=>{
  
  blogModel.addPost(req.body,(result)=>{
    let image = req.files.image;
    image.mv('./public/images/posts/'+result.insertedId+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-post')
      }else{
        console.log(err);
      }
    });
  });
 
});

router.get('/edit-post',(req,res)=>{
  res.render('admin/edit-post');
});


router.get('/signup', (req,res)=>{
  res.render('admin/signup');
});

router.post('/signup',(req,res)=>{
  userModel.doSignup(req.body).then((response)=>{
    console.log(response)
  })
})

module.exports = router;
