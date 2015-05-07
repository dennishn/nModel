(function () {
	'use strict';

	angular
		.module('category')
		.factory('Category', Category);

	/* @ngInject */
	function Category(DS) {

		return DS.defineResource({
			name: 'category',
			endpoint: 'categories'
		});

	}

})();
