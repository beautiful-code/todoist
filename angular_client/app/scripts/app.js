'use strict';

var app = angular.module('todoApp', [
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

app
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('requestInterceptor');
  });
