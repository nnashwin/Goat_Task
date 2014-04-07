'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function($scope, $http) {
    $scope.tasks = [];

    //list tasks directive
    $http.get('/tasks').
    success(function (data, status, headers, config) {
      $scope.tasks = data;
    }).
    error(function (data, status, headers, config) {
      $scope.tasks = [
      {
        body: data,
      }]
    });

    $scope.save = function(task) {
      $http({
        method: 'POST',
        url: '/tasks',
        data: task
      }).
      success(function (data, status, headers, config) {
        console.log(data);
      }).
      error(function (data, status, headers, config) {
        $scope.name = 'ERROR!!!';
      });
    };

    // $http({
    //   method: 'GET',
    //   url: '/api/name'
    // }).
    // success(function (data, status, headers, config) {
    //   $scope.name = data.name;
    // }).
    // error(function (data, status, headers, config) {
    //   $scope.name = 'Error!';
    // });

  });