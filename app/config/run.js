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
		.module('app')
		.run(run);

		function run(Translate, $state, $rootScope, $localStorage, Post, Category, User) {

			var didRunTranslate = false;

			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
				console.log('route change started: ', toState);
			});
			$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
				console.log('route change success: ', toState);
			});
			$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
				console.log('route change error: ', error, toState);
			});

			//$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			//
			//	if(!didRunTranslate) {
			//
			//
			//		if(!$localStorage.translate) {
			//			event.preventDefault();
			//			Translate.init().then(function() {
			//				$state.go(toState.name, toParams);
			//			});
			//		} else {
			//			event.preventDefault();
			//			Translate.init().then(function() {
			//				$state.go(toState.name, toParams);
			//			});
			//		}
			//
			//		didRunTranslate = true;
			//	}
			//});
		}
})();
