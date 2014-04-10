'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/login/newRegister', {
      templateUrl: '/partials/register.html',
      controller: 'LoginCtrl'
    }).
    when('/login', {
      templateUrl: '/partials/login.html',
      controller: 'LoginCtrl'
    }).
    when('/view2', {
      templateUrl: '/partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/', {
      templateUrl: '/partials/index.html',
      controller: 'AppCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
