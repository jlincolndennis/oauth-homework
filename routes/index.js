var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tumblr and OAuth!'});
});

router.get('/login', function(req, res, next){
  res.render('login')
})

router.get('/logout', function(req, res, next){
  req.session = null;
  res.redirect('/')
})

module.exports = router;
