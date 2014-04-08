'use strict';

/* Controllers */

angular.module('myModule', ['ui.bootstrap']);

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
    }

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
  })
  .controller('LoginCtrl', function($scope, $http) {
    $scope.register = function (user) {

      $http({
        method: 'POST',
        url: '/login/newRegister',
        data: user
      }).
      success(function (data, status, headers, config) {
        console.log(data);
      }).
      error(function (data, status, headers, config) {
        $scope.name = 'Error!!!';
      });
    };
    $scope.login = function (user) {
      
    }
  })
  .controller('ProgressCtrl', function($scope) {
    $scope.max = 200;
    
    $scope.random = function() {
      var value = 150,
        type;

    if (value < 75) {
      type = 'heating up!';
    } else if (value < 150) {
      type = 'the herdsman!';
    } else if (value < 190) {
      type = 'almost there!';
    } else {
      type = 'Goats Away!';
    }

    $scope.showWarning = (type === 'Goats Away!' || type === 'almost there!');

    $scope.dynamic = value;
    $scope.type = type;
  },

  $scope.randomStacked = function() {
    $scope.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for ( var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
      var index = Math.floor((Math.random() * 4));
      $scope.stacked.push({
        value: Math.floor((Math.random() * 30) + 1),
        type: types[index]
      });
    }
  };
  $scope.randomStacked();
});


