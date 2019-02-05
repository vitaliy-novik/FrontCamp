var mongoose = require("mongoose");

var newsSchema = mongoose.Schema({
    source: {
      id: String,
      name: String
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    content: String
  });

var News = module.exports = mongoose.model('news', newsSchema);

module.exports.get = function (callback, limit) {
    News.find(callback).limit(limit);
}