const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');

//var users = require('./routes/users');
//var app = express();

//var express = require('express')
//var cors = require('cors')
var app = express();



const options = {
  index: "index.html"
};

if (app.get('env') !== 'production') {

  options.index = "index.dev.html";

  // expose node_modules to client app
  app.use(express.static(__dirname + "/node_modules"));
}

app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'), options));
app.use(express.static(path.join(__dirname, 'app')));
//app.use(express.static(__dirname + '/public'));

//app.user(bodyParser.json());
//after the code that uses bodyParser and other cool stuff
//var originsWhitelist = [
//'http://localhost:3000/',      //this is my front-end url for development
//'https://stvstr.herokuapp.com'
//];
//var corsOptions = {
//origin: function(origin, callback){
//    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//    callback(null, isWhitelisted);
//},
//credentials:true
//}
////here is the magic
//app.use(cors(corsOptions));


//app.get('/api/krk2', cors(), function(req, res){
//	  res.json({
//	    text: 'Simple CORS requests are working. [GET]'
//	  });
//	});
//	app.head('/api/krk2', cors(), function(req, res){
//	  res.send(204);
//	});
//	app.post('/api/krk2', cors(), function(req, res){
//	  res.json({
//	    text: 'Simple CORS requests are working. [POST]'
//	  });
//	});
//
//	var issue2options = {
//			  origin: true,
//			  methods: ['POST'],
//			  credentials: true,
//			  maxAge: 3600
//			};
//			app.options('/issue-2', cors(issue2options));
//			app.post('/issue-2', cors(issue2options), function(req, res){
//			  res.json({
//			    text: 'Issue #2 is fixed.'
//			  });
//			});
//
//			if(!module.parent){
//			  app.listen(port, function(){
//			    console.log('Express server listening on port ' + port + '.');
//			  });
//			}	
//	
//	
//var corsOptions = {
//  origin: 'https://stvstr.herokuapp.com',
//  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//}
//
//app.get('/api/krk2', cors(corsOptions), function (req, res, next) {
//  res.json({msg: 'This is CORS-enabled for only example.com.'})
//})
//
//app.listen(80, function () {
//  console.log('CORS-enabled web server listening on port 80')
//})


//app.all('/*', function(req, res, next) {
//	  res.header("Access-Control-Allow-Origin", "*");
//	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//	  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
//	  next();
//
//	});

	



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;