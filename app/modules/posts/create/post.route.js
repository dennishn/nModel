(function() {
	'use strict';

	angular.module('posts')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Post = {
				name: 'application.posts.create',
				url: '/posts',
				views: {
					'posts': {
						templateUrl: 'modules/posts/create/post.template.html',
						controller: 'PostCreate',
						controllerAs: 'post',
						resolve: {
							users: function(User) {
								return User.findAll();
							},
							categories: function(Category) {
								return Category.findAll();
							}
						}
					}
				}
			};

			$stateProvider.state(Post);
		});
})();
