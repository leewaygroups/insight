var normaliseReqParam = function(req, res, next){	
	next();
};

var signup = function (app, passport) {
	
	app.post('/signup', normaliseReqParam, passport.authenticate('local-signup'), function(req, res){
		console.log("Got here paddy!!");
	});

};

module.exports = signup;
