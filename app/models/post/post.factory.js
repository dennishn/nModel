(function () {
	'use strict';

	angular
		.module('Post')
		.factory('Post', PostModel);

	/* @ngInject */
	function PostModel(DS) {

		return DS.defineResource({
			name: 'posts',
			relations: {
				hasOne: {
					category: {
						localKey: 'category',
						localField: 'hest'
					}
				}
			},
			methods: {
				fullName: function() {
					return this.author.first_name + ' ' + this.author.last_name;
				}
			},
			beforeCreate: function(resource, data, cb) {

				if(data.hasOwnProperty('tags')) {
					data.tags = _splitTags(data.tags);
				}

				cb(null, data);
			}
		});

		function _splitTags(string) {
			return string.split(',');
		}

	}

})();
