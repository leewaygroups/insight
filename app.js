var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/index')(app, config);

var port = process.env.PORT || 3000 ;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);

function onListening() {
	console.log("app started and listening on port " + " : " + port);
}
