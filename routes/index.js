var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NYT Top Stories - index page' });
});


router.get('/top_stories', function(req, res, next) {
  unirest.get('http://api.nytimes.com/svc/topstories/v1/world.json?api-key=' + process.env.NYT_TOP_STORIES_API_KEY)
    .end(function (response) {
      console.log(response.body);
      res.render('index', {title: 'List?'})
    })    
})


module.exports = router;
