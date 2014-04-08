'use strict';

/* Controllers */


angular.module('myApp.controllers', ['ui.bootstrap']).
  controller('AppCtrl', function($scope, $http) {
      $scope.tasks = [];

      //list tasks directive
      $http.get('/tasks').
      success(function (data, status, headers, config) {
        $scope.tasks = data;
        console.log($scope.tasks);
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

    $scope.deleteAdd = function(taskid) {
      console.log($scope.tasks);
      $http({
        method: 'DELETE',
        url: '/tasks/' + taskid
      }).
      success(function (data, status, headers, config) {
            console.log(data);
            console.log(taskid);
            console.log(status);
            console.log(headers);
            console.log(config);
            var delete_index = $scope.tasks.indexOf(taskid);
            $scope.tasks.splice(delete_index, 1);
          return $scope.tasks;
        }).
      error(function (data, status, headers,config) {
        $scope.name ="Error!!";
      });


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
    }
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
  }
});


