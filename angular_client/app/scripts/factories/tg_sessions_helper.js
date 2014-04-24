'use strict';

angular.module('project1App')
    .factory('tgSessionsHelper', ['$cookieStore', function ($cookieStore) {
        var factory = {}
        factory.logout = function () {
            $cookieStore.put('anon', true);
            $cookieStore.put('authentication_token', null);
            $cookieStore.put('email', null);
        }
        return factory;

    }]).
    factory('anonCheck', ['$cookieStore', function ($cookieStore) {
        return function () {
            return $cookieStore.get('anon')
        };
    }]);
