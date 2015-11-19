window.app.conferenceApp.controller("app.controller.login", ["$scope", "$rootScope", "$http", loginCtrl]);

function loginCtrl($scope, $rootScope, $http) {

        this.user = {};

        this.login = function (user) {

                // $http.post('/login', {user}).success(function (user) {
                //         $rootScope.errorMessage = null;
                //         // User is Authenticated
                //         if (user !== '0' && user.roles.indexOf('admin') != -1) {
                //                 $rootScope.currentUser = user;
                //                 deferred.resolve();
                //         }
                // });

        }
}
