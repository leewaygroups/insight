var normaliseReqParam = function (req, res, next) {
	res.send(req.body);
	next();
};

var signup = function (app, passport) {

	app.post('/signup', passport.authenticate('local-signup'), function (req, res) {

		
		
	});

};

module.exports = signup;
