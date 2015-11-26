// REQUIRE
var login = require('./login');
var signup = require('./signup');
var profile = require('./profile');
var logout = require('./logout');

// app/routes.js
var router = function (app, config) {

	
	// HOME PAGE (with login links) 
	app.get('/', function (req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});
	
	// LOGIN
	login(app, config);
	
	// SIGNOUT
	signup(app);
	
	// PROFILE
	profile(app, config);
	
	// LOGOUT
	logout(app);
};

module.exports = router;
