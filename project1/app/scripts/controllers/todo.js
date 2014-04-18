'use strict';

app = angular.module('project1App');

app.controller('TodoCtrl', function ($scope,$http) {

    $scope.todos = {

        completed: [],

        incomplete: []
    }


    $scope.getTodos = function () {

       return $http.get('/api/v1/todos.json')
            .success(function (data, status, headers, config) {
                $scope.todos = data;
                window.data = data;
            })
    }


    $scope.updateTodo = function () {
        $http.put('/api/v1/todos/' + this.todo.id + '.json', {'completed': this.todo.completed, 'title': this.todo.title}).success(function () {
            $scope.getTodos();
        }).success(function(data, status, headers, config) {

            $scope.getTodos().success(function(){

//                $scope.toggleEdit();
            })
        })


    }

    $scope.deleteTodo = function () {

        $http.delete('/api/v1/todos/' + this.todo.id + '.json')
            .success(function () {
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

});