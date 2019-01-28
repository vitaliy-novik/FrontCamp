var express = require('express');
var fs = require('fs');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var news = JSON.parse(fs.readFileSync('../news.json', 'utf8'));
  res.json(news);
});

router.get('/:id', function(req, res, next) {
  res.json({ id: req.params.id});
});

router.post('/', function(req, res, next) {
  res.json({ requestBody: req.body});
});

router.put('/:id', function(req, res, next) {
  res.json({ id: req.params.id, requestBody: req.body});
});

module.exports = router;
