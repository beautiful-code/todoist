'use strict';

app = angular.module('todoApp')

app.controller('MainCtrl', ['$scope','$location','tgSessionsHelper','tgUser','$cookieStore',function ($scope,$location,tgSessionsHelper,tgUser,$cookieStore) {

    // TODO: User tgUser
    $scope.user = {
        email: $cookieStore.get('email')
    }

    // Logout has some bugs left
    $scope.logout = function(){
        tgSessionsHelper.logout();
        $location.path('/');
    }

    $scope.tgUser = tgUser;

    console.log($scope.tgUser.isAnon());

    $scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){
        if (newValue== '/login'){
            console.log('Going to log out of existing session');
            tgSessionsHelper.logout();
            $location.path('/login');
        }
    })

  }]);
