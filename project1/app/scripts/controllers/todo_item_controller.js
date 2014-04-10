'use strict';

app = angular.module('project1App')

app.controller('TodoItemController', function ($scope,$http) {


	$scope.actions = {

		showEdit: false
	}


$scope.toggleEdit = function(){
	$scope.actions.showEdit =  !$scope.actions.showEdit
	// Putting $scope instead of 'this' is wrong...because $scope is the parent scope of all the new scopes created by ng-repeat..so it toggles all the li elements	
}















})
