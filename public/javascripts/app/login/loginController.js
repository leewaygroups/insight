window.app.conferenceApp.controller("app.controller.login", ["$scope", "$rootScope", "$http", "$state", loginCtrl]);

function loginCtrl($scope, $rootScope, $http, $state) {

        this.user = {};

        this.login = function (user) {

                $http.post('/login', user).then(function (response) {
                        console.log(response);
                        if (response.status === 200) {

                                var user = response.data;
                                $rootScope.currentUser = user;

                                if (user) {
                                        if (user.role.indexOf('admin') !== -1) {
                                                $state.go('admin');
                                        } else {
                                                $state.go('user')
                                        }
                                }

                        }
                },
                function (err) {
                        //TODO: handle error here!!
                        console.log(err);
                });

        };
}
