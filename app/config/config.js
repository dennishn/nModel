(function () {
	'use strict';

	var core = angular.module('config', ['DEBUG_ENV', 'core.translate', 'core.exception', 'core.logger', 'angular-loading-bar', 'cgBusy', 'js-data', 'nHttpInterceptor', 'nModel.pagination']);

	var config = {
		appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator,
		appTitle: 'Title'
	};

	core.value('config', config);

	core.constant('toastr', toastr);

	core.value('cgBusyDefaults', {
		message:'Loading Stuff',
		backdrop: true,
		templateUrl: '../common/core/loadingindicator/loadingindicator.template.html'
	});

	core.config(configure);

	/* @ngInject */
	function configure(nModelPaginationProvider, DEBUG_ENV, $logProvider, $httpProvider, exceptionHandlerProvider, $stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider, translateProvider, DSHttpAdapterProvider, DSProvider, nHttpInterceptorProvider) {

		if($logProvider.debugEnabled && DEBUG_ENV) {
			$logProvider.debugEnabled(true);
		} else {
			$logProvider.debugEnabled(false);
		}

		DSHttpAdapterProvider.defaults.httpConfig = {
			headers: {
				'Accept': 'application/vnd.nodes.v1+json'
			}
		};
		DSHttpAdapterProvider.defaults.deserialize = function(resource, data) {

			if(data.data.meta && data.data.meta.pagination) {
				nModelPaginationProvider.setPagination(data.data.meta.pagination);
			}

			return data.data.data;
		};

		DSHttpAdapterProvider.defaults.log = false;
		DSHttpAdapterProvider.defaults.error = false;


		DSProvider.defaults.basePath = 'http://localhost/api';
		DSProvider.defaults.bypassCache = true;

		nHttpInterceptorProvider.configure({
			error440: 'Totalt skod header...'
		});
		$httpProvider.interceptors.push(function($q, nHttpInterceptorFactory) {
			return {
				responseError: function(res) {

					nHttpInterceptorFactory.errorHandle(res.status);

					return $q.reject(res);
				}
			};
		});

		//Translate
		//translateProvider.configure({
		//	root: '//mobilev2.like.st/',
		//	endpoint: 'api/translation',
		//	projectId: 180, //Ex 180
		//	platformId: 179, // Ex 179
		//	languageId: 'da-DK' // Ex 'da-DK'
		//});

		exceptionHandlerProvider.configure(config.appErrorPrefix);

		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 600;

		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('application.notfound', {
				url: '/404',
				views: {
					'application@': {
						templateUrl: '404.html'
					}
				}
			})
			.state('error', {
				url: '/503',
				views: {
					'application@': {
						templateUrl: '503.html'
					}
				}
			});
	}

})();
