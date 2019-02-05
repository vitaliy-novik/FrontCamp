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
            message: 'Created!',
            data: news
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

exports.update = function (req, res) {
    News.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, news) {
        if (err)
            res.send(err);
        res.json({
            message: "Updated!"
        });
    });
};

exports.delete = function (req, res) {
    News.findByIdAndRemove(req.params.id, function (err) {
        if (err)
            res.send(err);
        res.send('Deleted!');
    })
};
