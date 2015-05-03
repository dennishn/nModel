(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name app
	 * @description
	 * # app
	 *
	 * Main module of the application.
	 */
	angular
		.module('app', [

    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ngRoute',
    'ui.router',
    'config',
    'DEBUG_ENV',
    'API_ENDPOINTS',
    'core.exception',
    'core.logger',
    'angular-loading-bar',
    'cgBusy',
    'angulartics',
    'angulartics.google.analytics',
    'mm.foundation',
    'ngLodash',
    'application',
    'index',
			/* ---> Do not delete this comment (ngImports) <--- */
	]);
})();
