// REQUIRE ===============================
var login = require('./login');
var signup = require('./signup');
var profile = require('./profile');
var logout = require('./logout');

// app/routes.js
var router = function (app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function (req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});
	
	// LOGIN ===============================
	login(app, passport);
	
	// SIGNOUT =============================
	signup(app, passport);
	
	// PROFILE =============================
	profile(app, passport);
	
	// LOGOUT ==============================
	logout(app);
};

module.exports = router;
