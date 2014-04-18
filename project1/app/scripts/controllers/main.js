'use strict';

app = angular.module('project1App')

app.controller('MainCtrl', function ($scope,$location,logincheck,$cookieStore) {

    console.log('logincheck() is '+logincheck());

    $scope.user = {
        email: $cookieStore.get('email')
    }

    $scope.checklogin = function(){
        return logincheck();
    }

//    Watch for route changes anywhere and redirect to login if not logged in
    $scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){
        if (!logincheck()  && newValue != '/signup'){
            console.log('Going to redirect to login');
            $location.path('/login');
        }
    })

  });


