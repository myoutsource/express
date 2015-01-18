var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*Get Posts*/
router.get('/post',function(req,res){
	Post.find(function(err,posts){
	if(err){return next(err)}
	res.json(posts);
	});
});

/*save post*/
router.post('/post', function(req, res, next) {
console.log('in');
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
});

/*create Comments*/
router.post('/post/:post/comments',function(req,res){
var com= new Comment(req.body);
console.log(req.body);
com.post=req.params.post;
console.log(req.params.post);
com.save(function(err,com){
Post.findOne({_id:com.post},function(er,post){post.comments=com._id;post.save()});
if(err){ return next(err); }
res.json(com)
})
})
module.exports = router;