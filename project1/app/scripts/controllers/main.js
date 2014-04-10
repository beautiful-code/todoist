'use strict';

app = angular.module('project1App')

app.controller('MainCtrl', function ($scope,$http) {
    

$scope.todos = {
 
 completed: [],
 
 incomplete: []
}

$scope.getTodos = function(){

 $http.get('/api/v1/todos.json')
   .success(function(data,status,headers,config){
      $scope.todos = data;
      window.data = data;
   })
}

$scope.getTodos();

$scope.updateTodo = function(){
	alert('clicked id is '+$scope.todo.id);
}



$scope.addTodo = function(){

    $http.post('/api/v1/todos.json',{'title': $scope.todo.title})
    .success(function(data){

    	$scope.todos.incomplete.push(data)

    })

}

  });


