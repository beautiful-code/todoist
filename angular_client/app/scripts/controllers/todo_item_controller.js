'use strict';

app = angular.module('project1App')

app.controller('TodoItemController', ['$scope','$http','tgSessionsHelper','$location', function ($scope,$http,tgSessionsHelper,$location) {


	$scope.actions = {

		showEdit: false
	}


$scope.toggleEdit = function(){
	$scope.actions.showEdit =  !$scope.actions.showEdit
	// Putting $scope instead of 'this' is wrong...because $scope is the parent scope of all the new scopes created by ng-repeat..so it toggles all the li elements	
}


/*
//Kind of like a Rails before_filter :authenticate_user! ....but not a good idea
// Shuld control authentication at global route level by watching for routeChange
$scope.auth_user = function(){
    console.log('Authing user');
    if (logincheck() == false){

        $location.path('/signup');

    }
}

//Calling it here
$scope.auth_user();
*/



}]);
