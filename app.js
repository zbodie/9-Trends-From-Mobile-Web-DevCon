/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , request = require('request')
  , partials = require('express-partials')
  , favicon = require('express-favicon')
  , bodyParser = require('body-parser')
  , logger = require('morgan')
  , port = process.argv[2] || process.env.PORT || 3003;
  
var app = express();

  app.set('port', port);
  app.set('views', __dirname + '/views');
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, 'bower_components')));
  app.set('view engine', 'ejs');
  //app.use(favicon(__dirname + '/public/images/favicon.ico'));

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  //app.use(express.cookieParser('your secret here'));
  app.use(partials());

var slides = [{name: 'slides/slide1', title: 'First Slide'},
			  {name: 'slides/slide2', title: 'Second Slide'}
			 ];

app.use(function(req, res, next) {
    res.locals.slideNumber = -1;
	res.locals.showContextMenu = false;
	res.locals.centerContent = true;
	next();
});

app.get('/', function(req, res) {
	res.render('index', {slideTitle: '', showContextMenu: true});
});

app.get('/slide/:id', function(req, res) {
	var slideId = req.params.id - 1;
	
	if(slideId < 0) {
		res.redirect('/slide/1');
	} else if(slideId >= slides.length) {
		res.redirect('/slide/' + slides.length);
	} else {
		res.render(slides[slideId].name, {slideTitle: slides[slideId].title, slideNumber: slideId+1});
	}
});


http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});