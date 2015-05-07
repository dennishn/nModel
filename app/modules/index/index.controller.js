(function () {
	'use strict';

	/**
	 * js-data eksempler
	 */

	angular
		.module('index')
		.controller('Index', Index);

	/* @ngInject */
	function Index(Post, $scope, DS, $timeout) {
		/*jshint validthis: true */
		var vm = this;

		Post.bindAll({}, $scope, 'index.posts');

		//Post.findAll().then(function(posts) {
		//	vm.posts = posts;
		//});
		//
		//vm.loadPost = function(id) {
		//
		//	var findOptions = {
		//		bypassCache: true
		//	};
		//
		//	Post.find(id).then(function(post) {
		//		vm.singlePost = post;
		//	});
		//
		//};
		//
		//vm.closePost = function() {
		//	delete vm.singlePost;
		//};
		//
		//vm.createPost = function() {
		//	delete vm.singlePost;
		//
		//	vm.creatingPost = true;
		//};
		//
		//vm.submitPost = function() {
		//
		//	Post.create(vm.newPost).then(function(newPost) {
		//		console.log('new post created', Post.get(newPost.id));
		//	});
		//
		//}

	}

})();
