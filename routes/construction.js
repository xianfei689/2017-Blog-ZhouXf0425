var express = require('express');
var router = express.Router();

//   导航页面
//get  刚进入页面的时候  homepage展示
router.get('/', function(req, res, next) {
      res.render('construction',null);
});

module.exports = router;
