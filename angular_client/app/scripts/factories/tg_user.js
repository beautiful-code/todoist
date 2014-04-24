'use strict';

angular.module('project1App')
  .factory('tgUser',['$cookieStore', function ($cookieStore) {
     var factory = {}
     factory.isAnon = function() {
         return $cookieStore.get('anon');
     }
     factory.email = $cookieStore.get('email');

        return factory;
  }]);
