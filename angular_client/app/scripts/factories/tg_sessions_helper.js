'use strict';

angular.module('todoApp')
    .factory('tgSessionsHelper', ['$cookieStore','$http', function ($cookieStore,$http) {
        var factory = {}
        factory.logout = function () {
            return $http.delete('/api/v1/users/sign_out.json').success(function(data){
                $cookieStore.put('anon', true);
                $cookieStore.remove('authentication_token');
                $cookieStore.remove('email');
            })
        }
        return factory;
    }])
    .factory('anonCheck', ['$cookieStore', function ($cookieStore) {
        return function () {
            return $cookieStore.get('anon')
        };
    }]);
