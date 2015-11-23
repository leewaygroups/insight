var loginRoute = function (app, passport) {

	app
		.get('/login', function (req, res) {
			//vanila get for login page 
		})

		.post('/login', passport.authenticate('local-login'), function (req, res) {
			req.logIn(req.user, function (err) {

				if (err) {
					res.status(401);
				} else {
					res.status(200).json(req.user);
				}
			});
		});
};

module.exports = loginRoute;
