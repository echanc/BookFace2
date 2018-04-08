var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageAuthors = data.authors;

  data.authors.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.books);
  });

  res.render('index', {
    pageTitle: 'Home',
    books: pagePhotos,
    authors: pageAuthors,
    pageID: 'home'
  });

});

module.exports = router;
