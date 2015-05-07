(function() {
	'use strict';

	angular.module('posts')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Post = {
				name: 'application.posts.single',
				url: '/posts/:id',
				views: {
					'posts': {
						templateUrl: 'modules/posts/single/post.template.html',
						controller: 'PostSingle',
						controllerAs: 'post',
						resolve: {
							post: function(Post, Category, $stateParams) {
								return Post.find($stateParams.id);
							}
						}
					}
				}
			};

			$stateProvider.state(Post);
		});
})();
