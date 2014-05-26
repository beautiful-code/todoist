'use strict';

angular.module('todoApp')
    .factory('tgSessionsHelper', ['$cookieStore','$location','$http', function ($cookieStore,$http,$location) {
        var factory = {}
        factory.logout = function () {
            $http.delete('/api/v1/users/sign_out.json').success(function(data){
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
