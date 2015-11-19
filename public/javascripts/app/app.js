window.app.conferenceApp.config(
	function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$urlRouterProvider.otherwise('/home');

		$stateProvider

			.state('home', {
				url: '/home',
				templateUrl: '/javascripts/app/home/home.html',
				controller: 'app.controller.home',
				controllerAs: 'vmHome'
			})

			.state('login', {
				url: '/login',
				templateUrl: '/javascripts/app/login/login.html',
				controller: 'app.controller.login',
				controllerAs: 'vmLogin'
			})

			.state('register', {
				url: '/register',
				templateUrl: '/javascripts/app/register/register.html',
				controller: 'app.controller.register',
				controllerAs: 'vmRegister'
			})

			.state('admin', {
				url: '/admin',
				templateUrl: '/javascripts/app/admin/admin.html',
				controller: 'app.controller.admin',
				controllerAs: 'vmAdmin',
				resolve: {
					loggedin: app.security.checkAdmin
				}
			});

		$httpProvider
			.interceptors
			.push(function ($q, $location) {
				return {
					response: function (response) {
						return response;
					},
					responseError: function (response) {
						if (response.status === 401)
							$location.url('/login');
						return $q.reject(response);
					}
				};
			});
	});





