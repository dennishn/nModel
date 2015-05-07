(function () {
	'use strict';

	angular
		.module('posts')
		.controller('PostCreate', PostCreate);

	/* @ngInject */
	function PostCreate(Post, users, categories, $state) {
		/*jshint validthis: true */
		var vm = this;
		vm.save = save;

		activate();

		vm.post = {
			title: 'pre',
			body: 'fill',
			author: users[0],
			category: categories[0],
			tags: '1,2,3, a, 4'
		};

		function activate() {
			vm.users = users;
			vm.categories = categories;
		}

		function save() {
			Post.create(vm.post).then(function() {
				$state.go('application.posts.index');
			});
		}
	}

})();
