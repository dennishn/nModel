/*
	Global Method (usable in config phase, without a provider constructor)
 */
function nToCamelCase(str) {
	'use strict';

	if(typeof str !== 'string') {
		throw new Error('toCamelCase requires a string.');
	}

	str = str.trim();

	if (str.length === 1 || !(/[_.\- ]+/).test(str) ) {
		return str;
	}

	return str
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
			return p1.toUpperCase();
		});
}

(function () {
	'use strict';

	angular
		.module('nModel.caseConverter')
		.factory('nModelCaseConverter', JsDataCaseconverter);

	/* @ngInject */
	function JsDataCaseconverter() {

		var service = {
			toCamelCase: toCamelCase
		};

		return service;

		function toCamelCase(string) {
			return nToCamelCase(string);
		}
	}

})();
