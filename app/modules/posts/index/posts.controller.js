(function () {
	'use strict';

	angular
		.module('posts')
		.controller('PostsIndex', PostsIndex);

	/* @ngInject */
	function PostsIndex(Post, posts, $scope, nModelPagination) {
		/*jshint validthis: true */
		var vm = this;

		/*
			View methods
		 */
		vm.loadPage = loadPage;
		vm.likePost = likePost;
		vm.unlikePost = unlikePost;

		/*
			Initialize
		 */
		activate();
		function activate() {
			// Bind posts to viewModel
			vm.posts = posts;
			// Bind pagination to viewModel
			vm.pagination = nModelPagination.get();
		}

		/*
			Pagination

			loads a page, and updates the pagination data
		 */
		function loadPage(page) {
			Post.findAll({
				page: page
			}).then(function(posts) {
				vm.posts = posts;

				vm.pagination = nModelPagination.get();
			});
		}

		/*
			Like/Dislike

			Adds or removes a like, updates the like count and the available action in the view
		 */
		function likePost(post) {
			Post.like(post.id).then(function() {
				post.liked = true;
				post.likes++;
			});
		}
		function unlikePost(post) {
			Post.unlike(post.id).then(function() {
				post.liked = false;
				post.likes--;
			});
		}
	}

})();
