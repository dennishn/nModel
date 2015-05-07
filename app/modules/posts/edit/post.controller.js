(function () {
	'use strict';

	angular
		.module('posts')
		.controller('PostEdit', PostEdit);

	/* @ngInject */
	function PostEdit(Post, post, $scope, $state) {
		/*jshint validthis: true */
		var vm = this;

		vm.save		= save;

		activate();

		function activate() {
			Post.bindOne(post.id, $scope, 'post.post');
		}

		function save() {
			Post.update(post.id, vm.post).then(function() {
				$state.go('application.posts.index');
			});
		}
	}

})();
