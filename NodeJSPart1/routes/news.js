var router = require('express').Router();
var newsController = require('../controllers/newsController');

router.get('/', function(req, res, next) {
  // var news = JSON.parse(fs.readFileSync('../news.json', 'utf8'));
  // res.json(news);
});

router.route('/news')
    .get(newsController.index)
    .post(newsController.new);

router.put('/:id', function(req, res, next) {
  res.json({ id: req.params.id, requestBody: req.body});
});

module.exports = router;
