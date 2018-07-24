var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.send('[WHY WERENT YOU WORKING M8?]')
});

router.get('/test', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('TEST')
 });

module.exports = router;
