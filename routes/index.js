var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET others page. */
router.get('/others', function(req, res, next) {
  res.render('others', { title: 'Others' });
});

module.exports = router;
