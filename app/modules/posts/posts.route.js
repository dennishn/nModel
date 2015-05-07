(function() {
	'use strict';

	angular.module('posts')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Posts = {
				name: 'application.posts',
				abstract: true,
				views: {
					'application@': {
						templateUrl: 'modules/posts/posts.template.html',
						controller: 'Posts',
						controllerAs: 'posts'
					}
				}
			};

			$stateProvider.state(Posts);
		});
})();
