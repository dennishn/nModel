(function () {
	'use strict';

	angular
		.module('Post')
		.factory('Post', Post);

	/* @ngInject */
	function Post(nModel) {

		var Model = nModel.extend({
			collection: 'posts/',
			identifierKey: 'hest'
		});

		//Model.prototype.parse = function() {
		//	console.log('yolo')
		//}

		return Model;
	}

})();
