var loginRoute = function (app, config) {

	app
		.get('/login', function (req, res) {
			//vanila get for login page 
		})

		.post('/login', function (req, res) {
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
