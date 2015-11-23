var normaliseReqParam = function (req, res, next) {
	res.send(req.body);
	next();
};

var signup = function (app, passport) {

	app.post('/signup', passport.authenticate('local-signup'), function (req, res) {
				
		res.sendStatus(200);	
			
	});

};

module.exports = signup;
