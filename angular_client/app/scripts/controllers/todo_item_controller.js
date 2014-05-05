'use strict';

app = angular.module('todoApp')

app.controller('TodoItemController', ['$scope', function ($scope) {


	$scope.actions = {
		showEdit: false
	}


$scope.toggleEdit = function(){
	$scope.actions.showEdit =  !$scope.actions.showEdit
	// Putting $scope instead of 'this' is wrong...because $scope is the parent scope of all the new scopes created by ng-repeat..so it toggles all the li elements	
}

}]);
