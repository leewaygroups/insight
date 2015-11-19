window.app = {};
window.app.security = function($q, $timeout, $http, $location, $rootScope) {

    this.checkLoggedin = function () {
        
        var deferred = $q.defer();

        $http.get('/loggedin').success(function (user) {
            $rootScope.errorMessage = null;
            
            // User is Authenticated
            if (user !== '0') {
                deferred.resolve();
            }
                            
            // User is Not Authenticated
            else {
                $rootScope.errorMessage = 'Login to continue';
                deferred.reject();
                $location.url('/login');
            }
        });

        return deferred.promise;
    };

    this.checkAdmin = function () {

        var deferred = $q.defer();

        $http.get('/loggedin').success(function (user) {
            
            $rootScope.errorMessage = null;
            
            // User is Authenticated
            if (user !== '0' && user.roles.indexOf('admin') != -1) {
                $rootScope.currentUser = user;
                deferred.resolve();
            }
        });

        return deferred.promise;
    };

};