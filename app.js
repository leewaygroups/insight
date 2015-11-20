var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var multer = require('multer'); 
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
// var configDB = require('./config/database');

// configuration ======================
require('./config/passport')(passport);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport
app.use(session({ secret: 'lovingjaites' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes/index')(app, passport);

var port = process.env.PORT || 3000 ;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
// server.on('error', onError);
server.on('listening', onListening);

function onListening() {
	console.log("app started and listening on port " + " : " + port);
}

// module.exports = app;
