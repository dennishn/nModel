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

		function run(Translate, $state, $rootScope, $localStorage) {
			var didRunTranslate = false;

			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

				if(!didRunTranslate) {


					if(!$localStorage.translate) {
						event.preventDefault();
						Translate.init().then(function() {
							$state.go(toState.name, toParams);
						});
					} else {
						event.preventDefault();
						Translate.init().then(function() {
							$state.go(toState.name, toParams);
						});
					}

					didRunTranslate = true;
				}
			});
		}
})();
