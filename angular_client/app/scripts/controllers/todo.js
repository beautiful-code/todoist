'use strict';

app = angular.module('todoApp');

app.controller('TodoCtrl', ['$scope','$http','$cookieStore', function ($scope,$http,$cookieStore) {

    $scope.todos = {
      completed: [],
      incomplete: []
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


    $scope.updateTodo = function () {
        console.log(this);
        $http.put('/api/v1/todos/' + this.todo.id + '.json', {'completed': this.todo.completed, 'title': this.todo.title}).success(function () {
            $scope.getTodos();
        })
    }

    $scope.deleteTodo = function () {
        $http.delete('/api/v1/todos/' + this.todo.id + '.json').success(function () {
           $scope.getTodos()
        })
    }


    $scope.addTodo = function () {

        $http.post('/api/v1/todos.json', {'title': $scope.todo.title})
            .success(function (data) {

                $scope.todos.incomplete.push(data)
                $scope.todo = null

            })

    }

    //Initialization code
    $scope.getTodos();

}]);
