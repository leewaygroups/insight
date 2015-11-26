var User = require('../business/user');

var signup = function (app) {

	app.post('/signup', function (req, res) {

		User.findOne({ 'local.email': req.body.email }, function (err, user) {

			if (err) {
				throw err;;
			}

			var email = req.body.email;
			var password = req.body.password;
			
			//check if a user with this email already exist
			if (user) {
				res.json({ success: false, message: 'email is already taken, enter another email' });
			} else {
					 
				//email is available
				var newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.generateHash(password);
					 
				//save new user
				newUser.save(function (err, user) {
					if (err) {
						res.json({ success: false, message: 'Oops!, Registration not successful, try again' });
					}

					res.status(200).json({ success: true, message: 'registered successfully' });
				});
			}
		});
	});
};

module.exports = signup;
