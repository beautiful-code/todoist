'use strict';

app = angular.module('todoApp')

app.controller('MainCtrl', ['$scope','$location','tgSessionsHelper','tgUser','todo','$cookieStore','$http',function ($scope,$location,tgSessionsHelper,tgUser,todo,$cookieStore,$http) {

    // TODO: User tgUser
    $scope.user = {
        email: $cookieStore.get('email')
    }

    $scope.todos = {
        completed: [],
        incomplete: []
    }

    // Logout has some bugs left
    $scope.logout = function(){

        tgSessionsHelper.logout().success(function(){
            $scope.getTodos()
        })

    }

    $scope.getTodos = function () {
        return $http.get('/api/v1/todos.json')
            .success(function (data, status, headers, config) {
                $scope.todos = data;

                $cookieStore.put('authentication_token',data.user.authentication_token);
                $cookieStore.put('email',data.user.email);
                $cookieStore.put('anon',data.user.anonymous);
            })
    }

    $scope.tgUser = tgUser;

    console.log($scope.tgUser.isAnon());

    $scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){
        if (newValue== '/login'){
            console.log('Going to log out of existing session');
            $location.path('/login');
        }
    })

  }]);
