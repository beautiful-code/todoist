'use strict';

var app = angular.module('todoApp')

app.directive("todoItem", [ 'Todo', function (Todo) {
    return {
        restrict: "EA",
        template: "<div> Wassap bros</div>",
        scope: {},
        controller: function ($scope, $element, $attrs, $location) {

            $scope.deleteTodo = function(){
                console.log($attrs)
            }


        }
    }
}])

