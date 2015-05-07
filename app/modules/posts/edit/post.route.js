(function() {
	'use strict';

	angular.module('posts')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Post = {
				name: 'application.posts.edit',
				url: '/posts/:id/edit',
				views: {
					'posts': {
						templateUrl: 'modules/posts/edit/post.template.html',
						controller: 'PostEdit',
						controllerAs: 'post',
						resolve: {
							post: function(Post, $stateParams) {
								return Post.find($stateParams.id);
							}
						}
					}
				}
			};

			$stateProvider.state(Post);
		});
})();
