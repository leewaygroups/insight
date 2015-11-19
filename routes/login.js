var loginRoute = function (app, passport) {

	app.post('/login', passport.authenticate('local-login', {
		// successRedirect: '/profile',
		// failureRedirect: '/login',
		// failureFlash: true
	}), function(req, res){
		console.log(req.user)
	});

};

module.exports = loginRoute;

