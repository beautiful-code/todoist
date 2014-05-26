'use strict';

angular.module('todoApp')
    .factory('todo',['$cookieStore','$http', function ($cookieStore,$http) {
        var factory = {}

        factory.getTodos = function () {
            return $http.get('/api/v1/todos.json')
                .success(function (data, status, headers, config) {
                    $cookieStore.put('authentication_token',data.user.authentication_token);
                    $cookieStore.put('email',data.user.email);
                    $cookieStore.put('anon',data.user.anonymous);
                    return data;
                })
        }

        return factory;
    }]);