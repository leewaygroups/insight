window.app.conferenceApp.controller("app.controller.register", ["$scope", "$rootScope", "$http", registerCtrl]);

function registerCtrl($scope, $rootScope, $http, $location, $state) {

	var validateEmail = function (email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	};

	var validatePassword = function (password) {
		var re = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
		return re.test(password);
	};

	this.user = {};

	this.validEntry = validateEmail(this.user.email) && validatePassword(this.user.password);

	this.register = function (user) {

		$http.post('/signup', { email: user.email, password: user.password })
			.then(
				function (response) {
					window.currentUser = response;
				},
				function (error) {
					console.log(error.status + " : " + error.data);
				}
				);

	};
}