// config/passport.js
var LocalStrategy = require('passport-local').Strategy;
var User = require('../business/users/user');

var passportConfig = function (passport) {

	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});


	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, localSignUp));


    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, localLogIn));

};

var localSignUp = function (req, email, password, done) {
	//fire only if data is sent back
	process.nextTick(function () {
		User.findOne({ 'local.email': email }, function (err, user) {

			console.log("Got to signup2!");

			if (err) {
				return done(err);
			}
				 
			//check if a user with this email already exist
			if (user) {
				return done(null, false, req.flash('signupMessage', 'email is already taken, enter another email'));
			} else {
					 
				//email is available
				var newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.generateHash(password);
					 
				//save new user
				newUser.save(function (err) {
					if (err) {
						throw err;
					}

					return done(null, newUser);
				});
			}
		});
	});

	return done(null, "done");
}

var localLogIn = function (req, email, password, done) {
	User.findOne({ 'local.email': email }, function (err, user) {

		if (err) {
			return done(err);
		}

		if (!user) {
			return done(null, false, req.flash('loginMessage', 'No user found.'));
		}

		if (!user.validPassword(password)) {
			return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
		}

		return done(null, user);
	});

}

module.exports = passportConfig;