(function () {
	'use strict';

	angular
		.module('nModel.dateParser')
		.service('nModelDateparser', JsDataDateparser);

	/* @ngInject */
	function JsDataDateparser() {

		var service = {
			parseDate: parseDate
		};

		return service;

		function parseDate(string) {
			return new Date(string);
		}
	}

})();
