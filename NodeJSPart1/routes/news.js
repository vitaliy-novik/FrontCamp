var router = require('express').Router();
var newsController = require('../controllers/newsController');

router.route('/')
    .get(newsController.index)
    .post(newsController.new);

router.route('/:id')
    .get(newsController.view)
    .put(newsController.update)
    .delete(newsController.delete);

module.exports = router;
