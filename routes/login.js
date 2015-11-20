var loginRoute = function (app, passport) {

	app
		.get('/login', function (req, res) {
			//TODO: 
		})

		.post('/login', passport.authenticate('local-login', {
			//TODO
		}), function (req, res) {
			console.log(req.user)
		});

};

module.exports = loginRoute;

