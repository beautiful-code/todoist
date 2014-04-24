'use strict';

app = angular.module('project1App')

app.controller('MainCtrl', ['$scope','$location','tgSessionsHelper','tgUser','$cookieStore',function ($scope,$location,tgSessionsHelper,tgUser,$cookieStore) {


    $scope.user = {
        email: $cookieStore.get('email')
    }

    $scope.tgUser = tgUser;

    console.log($scope.tgUser.isAnon());

//    Watch for route changes anywhere and redirect to login if not logged in
    $scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){
        if (newValue == '/signup' || newValue== '/login'){
            console.log('Going to redirect to login and log out of existing session');
            tgSessionsHelper.logout();
            $location.path('/login');
        }
    })

  }]);
