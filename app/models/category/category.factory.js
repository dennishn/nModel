(function () {
	'use strict';

	angular
		.module('category')
		.factory('Category', Category);

	/* @ngInject */
	function Category(DS) {

		// This model has a plural endpoint, but we treat them singular
		return DS.defineResource({
			name: 'category',
			endpoint: 'categories'
		});

	}

})();
