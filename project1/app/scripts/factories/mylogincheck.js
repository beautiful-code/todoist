'use strict';

var login = angular.module('myLoginCheck',[]).
    factory('logincheck', function($cookieStore){
        return function(){
            //Perform logical user loging check either by looking at cookies or make a call to server
            var token = $cookieStore.get('authentication_token')
            if(token !=null && token != '') return true;
            return false;
        };
    });