'use strict';

var app = angular.module('project1App', [
  'ngCookies',
  'ngSanitize',
  'ngRoute'
]);

app.config(function($routeProvider){

  $routeProvider

  .when('/',{

  	templateUrl: 'views/main.html',
  	controller: 'MainCtrl'
  })

  .otherwise({redirectTo: '/'});


});