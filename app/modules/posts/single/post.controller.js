(function () {
	'use strict';

	angular
		.module('posts')
		.controller('PostSingle', PostSingle);

	/* @ngInject */
	function PostSingle(Post, post, $scope) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {
			Post.bindOne(post.id, $scope, 'post.post');
		}
	}

})();
