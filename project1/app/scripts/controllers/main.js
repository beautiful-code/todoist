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


$scope.updateTodo = function(){
   $http.put('/api/v1/todos/'+this.todo.id+'.json', {'completed': this.todo.completed, 'title': this.todo.title}).success(function(){
   $scope.getTodos();	
   })


}

$scope.deleteTodo = function(){

  $http.delete('/api/v1/todos/'+this.todo.id+'.json')
    .success(function(){
       $scope.getTodos()		

    })
}




$scope.addTodo = function(){

    $http.post('/api/v1/todos.json',{'title': $scope.todo.title})
    .success(function(data){

    	$scope.todos.incomplete.push(data)
    	$scope.todo = null

    })

}

//Initialization code
$scope.getTodos();


  });


