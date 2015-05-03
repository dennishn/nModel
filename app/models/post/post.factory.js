(function () {
	'use strict';

	angular
		.module('Post')
		.factory('Post', Post);

	/* @ngInject */
	function Post(nModel) {

		return nModel.extend({
			baseUrl:'/api/posts/:id'
		});
	}

})();
