(function() {
	'use strict';

	angular.module('index')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.index',
				url: '/',
				views: {
					'application@': {
						templateUrl: 'modules/index/index.template.html',
						controller: 'Index',
						controllerAs: 'index',
						resolve: {
							posts: function(Post) {
								return Post.findAll({limit: 100});
							}
						}
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
