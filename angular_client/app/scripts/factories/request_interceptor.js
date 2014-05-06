'use strict';

angular.module('todoApp')
  .factory('requestInterceptor', ['tgUser', function (tgUser) {
    return {
        request: function (config) {
          if (config.params==null) {
              config.params = {};
          }
          config.params.authentication_token = tgUser.authentication_token();
          return config;
        }
    };
  }]);
