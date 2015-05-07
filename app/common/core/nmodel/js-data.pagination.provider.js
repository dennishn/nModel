(function () {
	'use strict';

	angular
		.module('nModel.pagination')
		.provider('nModelPagination', nModelPagination);

	/* @ngInject */
	function nModelPagination() {
		/*jshint validthis: true */
		var pagination = {};

		this.setPagination = function(data) {
			pagination = data;
		};

		this.$get = function() {
			return {
				get: function() {
					return pagination;
				},
				set: function(data) {
					pagination = data;
				}
			}
		};

	}

})();
