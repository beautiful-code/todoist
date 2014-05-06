'use strict';

angular.module('todoApp')
  .factory('tgUser',['$cookieStore', function ($cookieStore) {

     return {
       isAnon : function() {
         return $cookieStore.get('anon');
       },

       email: function() {
         return $cookieStore.get('email');
       },

       authentication_token: function() {
         return $cookieStore.get('authentication_token');
       }
     };

  }]);
