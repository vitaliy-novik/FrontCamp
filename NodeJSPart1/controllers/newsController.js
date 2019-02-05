News = require('../models/News');

exports.index = function (req, res) {
    News.get(function (err, news) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            data: news
        });
    });
};

exports.new = function (req, res) {
    var news = new News();
    news.source = req.body.source;
    news.author = req.body.author;
    news.title = req.body.title;
    news.description = req.body.description;
    news.url = req.body.url;
    news.urlToImage = req.body.urlToImage;
    news.publishedAt = req.body.publishedAt;
    news.content = req.body.content;
    news.save(function (err) {
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

exports.view = function (req, res) {
    News.findById(req.params.id, function (err, news) {
        if (err)
            res.send(err);
        res.json({
            data: news
        });
    });
};
