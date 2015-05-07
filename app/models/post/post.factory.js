(function () {
	'use strict';

	angular
		.module('Post')
		.factory('Post', PostModel);

	/* @ngInject */
	function PostModel(DS, nModelDateparser) {
		/*jshint camelcase: false */

		/*
			Model definition
		 */
		return DS.defineResource({
			// Endpoint
			name: 'posts',
			// Model Methods
			methods: {
				fullName: function() {
					return this.author.first_name + ' ' + this.author.last_name;
				}
			},
			// Computed Properties
			computed: {
				createdDate: ['created', function(created) {
					// Add a Date Object computed field to the posts
					return nModelDateparser.parseDate(created);
				}]
			},
			// Lifecycle hooks
			beforeCreate: function(resource, data, cb) {

				if(data.hasOwnProperty('tags')) {
					data.tags = _splitTags(data.tags);
				}

				cb(null, data);
			},
			// API actions
			actions: {
				like: {
					method: 'POST'
				},
				unlike: {
					method: 'DELETE',
					pathname: 'like'
				}
			}
		});

		/*
			Private methods
		 */
		function _splitTags(string) {
			return string.split(',');
		}

	}

})();
