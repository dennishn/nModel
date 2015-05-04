(function () {
	'use strict';

	angular
		.module('index')
		.controller('Index', Index);

	/* @ngInject */
	function Index(Post) {
		/*jshint validthis: true */
		var vm = this;

		var id = '55467187b73ad9980695e26a';
		var comment = 'hest';

		var post = new Post({
			id: id,
			comment: comment,
			herp: 'derp'
		});
		console.log('local model: ', post, post.parse());
		//console.log('Index Controller, A Post: ', post);

		post.get()
			//.then(function(post) {
			//	console.log('got post: ', post);
			//})
			//.catch(function(error) {
			//	//console.warn('got error: ', error);
			//})
			//.finally(function() {
			//	//console.info('finally callback');
			//});

		activate();

		function activate() {

		};
	};

})();
