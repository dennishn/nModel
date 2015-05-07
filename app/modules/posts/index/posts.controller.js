(function () {
	'use strict';

	angular
		.module('posts')
		.controller('PostsIndex', PostsIndex);

	/* @ngInject */
	function PostsIndex(Post, posts, $scope, nModelPagination) {
		/*jshint validthis: true */
		var vm = this;

		vm.loadPage = loadPage;

		activate();

		function activate() {
			vm.posts = posts;

			vm.pagination = nModelPagination.get();
		}

		function loadPage(page) {
			Post.findAll({
				page: page
			}).then(function(posts) {
				vm.posts = posts;

				vm.pagination = nModelPagination.get();
			});
		}
	}

})();
