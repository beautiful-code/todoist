'use strict';

app = angular.module('todoApp');

app.controller('TodoCtrl', ['$scope','$http','$cookieStore', function ($scope,$http,$cookieStore) {







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

    $scope.clearCompletedTodos = function () {
        $http.put('/api/v1/todos/archive_completed.json').success(function () {
            $scope.getTodos()
        })
    }

    //Initialization code
    $scope.getTodos();

}]);
