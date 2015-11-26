// PROFILE SECTION 
var profile= function(app){

	app.get('/profile', function (req, res) {
		res.render('profile.ejs', {
			user: req.user 
		});
	});
	
};

module.exports = profile;

	