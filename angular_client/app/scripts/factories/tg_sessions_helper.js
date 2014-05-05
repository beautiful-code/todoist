'use strict';

angular.module('todoApp')
    .factory('tgSessionsHelper', ['$cookieStore', function ($cookieStore) {
        var factory = {}
        factory.logout = function () {
            $cookieStore.put('anon', true);
            $cookieStore.put('authentication_token', null);
            $cookieStore.put('email', null);
        }
        return factory;

    }]);
