'use strict';

angular.module('chatterModels', []).
  factory('Tasks', [
  	'$meteorCollection', 
  	function($meteorCollection) {
      return $meteorCollection('tasks');
  }]).
  factory('Accounts', [
  	'$meteorCollection', 
  	'$meteor', 
  	function($meteorCollection, $meteor) {
      var Accounts = {};
      Accounts.users = $meteor.users;
      Accounts.userId = $meteor.UserId;
      Accounts.user = $meteor.user;
      Accounts.loginWithPassword = $meteor.loginWithPassword;
      Accounts.logout = $meteor.logout;
      Accounts.loginWithExternalServise = $meteor.loginWithExternalServise;
      return Accounts;
  }]);