(function() {
	'use strict';

	angular.module('posts')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Posts = {
				name: 'application.posts.index',
				url: '/posts',
				views: {
					'posts': {
						templateUrl: 'modules/posts/index/posts.template.html',
						controller: 'PostsIndex',
						controllerAs: 'posts',
						resolve: {
							posts: function(Post, Category) {
								return Post.findAll();
							}
						}
					}
				}
			};

			$stateProvider.state(Posts);
		});
})();
