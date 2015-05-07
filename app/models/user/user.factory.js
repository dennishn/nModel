(function () {
	'use strict';

	angular
		.module('user')
		.factory('User', User);

	/* @ngInject */
	function User(DS) {

		return DS.defineResource({
			name: 'users'
		});

	}

})();
