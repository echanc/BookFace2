var express = require('express');
var router = express.Router();

router.get('/authors', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageAuthors = data.authors;

  data.authors.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.books);
  });

  res.render('authors', {
    pageTitle: 'Authors',
    books: pagePhotos,
    authors: pageAuthors,
    pageID: 'authorsList'
  });
});

router.get('/authors/:authorsid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageAuthors = [];

  data.authors.forEach(function(item) {
    if (item.shortname == req.params.authorsid) {
      pageAuthors.push(item);
      pagePhotos = pagePhotos.concat(item.books);
    }
  });

  res.render('authors', {
    pageTitle: 'Authors Info',
    books: pagePhotos,
    authors: pageAuthors,
    pageID: 'authorsDetail'
  });
});

module.exports = router;
