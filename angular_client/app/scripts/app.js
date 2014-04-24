'use strict';

var app = angular.module('project1App', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider

  .when('/',{

  	templateUrl: 'views/todo_home.html',
  	controller: 'TodoCtrl'
  })

  .when('/signup',{
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
  })
  .when('/login',{
      templateUrl: 'views/login.html',
      controller: 'SignupCtrl'
  })
  .otherwise({redirectTo: '/'});


}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(function ($q, $rootScope,$cookieStore) {
        return {
            request: function (config) {

                    if (config.params==null) {
                        config.params = {};
                    }
                    config.params.authentication_token = $cookieStore.get('authentication_token');
                return config;
            }
        };
    });

}]);
