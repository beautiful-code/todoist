'use strict';

app = angular.module('project1App')

app.controller('SignupCtrl', [ '$scope','$http','$location','$cookieStore' ,function ($scope,$http,$location,$cookieStore) {




    $scope.signup = function(){

        $http.post('/api/v1/users',{'user':{'email': $scope.user.email,'password': $scope.user.password,'password_confirmation': $scope.user.password_confirmation}})
            .success(function(data){
                console.log(data.authentication_token);
                $cookieStore.put('authentication_token',data.authentication_token);
                $cookieStore.put('email',data.email);
                $cookieStore.put('anon',false);
                $location.path('/');
            })

    }

    $scope.login = function(){

        $http.post('/api/v1/users/sign_in',{'user':{'email': $scope.user.email,'password': $scope.user.password}})
            .success(function(data){
                console.log(data.authentication_token);
                $cookieStore.put('authentication_token',data.authentication_token);
                $cookieStore.put('email',data.email);
                $cookieStore.put('anon',false);
                $location.path('/');

            })

    }

}]);

