var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('top_stories', { title: 'NYT Top Stories - index page' });
});


router.get('/top_stories', function(req, res, next) {
  unirest.get('http://api.nytimes.com/svc/topstories/v1/world.json?api-key=' + process.env.NYT_TOP_STORIES_API_KEY)
    .end(function (response) {
      var data = JSON.parse(response.body);
      console.log(data.results[0].title);
      res.render('index', {title: 'NYT Top Stories for today', allStories: data.results})
    })    
})


module.exports = router;
