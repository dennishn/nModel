(function () {
	'use strict';

	angular
		.module('user')
		.factory('User', User);

	/* @ngInject */
	function User(DS) {

		// Lightes way possible to define a model
		return DS.defineResource('users');

	}

})();
