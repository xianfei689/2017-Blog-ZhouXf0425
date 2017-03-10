var express = require('express');
var router = express.Router();

var PostModel = require('../models/posts');
var CommentModel = require('../models/comments');
var checkLogin = require('../middlewares/check').checkLogin;

//   导航页面
//get  刚进入页面的时候  homepage展示
router.get('/', function(req, res, next) {
      res.render('resume',null);
});

module.exports = router;
