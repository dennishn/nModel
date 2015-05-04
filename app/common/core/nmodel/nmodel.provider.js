(function () {
	'use strict';

	angular
		.module('nModel')
		.provider('BaseModel', bModel);

	function bModel() {

		var defaults = {
			apiEndpoint: '',
			apiPrefix: 'api',
			apiVersion: 'v1'
		};

		this.configure = function(config) {
			angular.extend(defaults, config);
		};

		/* @ngInject */
		this.$get = function(nModelUtils, nModelCache, $q, $http) {

			var BaseModel = function (data, options) {
				// Init funktion kaldes
				//this.options = options || {};
				this.initialize.apply(this, arguments);
			};

			BaseModel.prototype.initialize = function () {
				// Init skal
				// calc url
			};

			BaseModel.prototype.computeUrl = function(path, parameters) {
			//	///api/{objects}/{slug}
				console.log(this, this.options, parameters, path);
			//
				if(defaults.apiEndpoint.length <= 0) {
					throw new Error('Du skal sq sætte endpoint (medmindre du sætter url)');
				}
			//
				if(!path) {
					throw new Error('Du skal sq sætte collection');
				}
			//
				var newPath = [];
				for(var prop in this.options) {
					if(this.options.hasOwnProperty(prop)) {
						newPath.push(this.options[prop]);
					}
				}
			//
			//	if (parameters !== undefined && typeof parameters === 'object') {
			//		for (var key in parameters) {
			//			//console.log(path, key, parameters[key])
			//			newPath.push(path.replace(':'+key, parameters[key]));
			//			//console.log(path);
			//		}
			//	}
				console.log(newPath, newPath.join('/'));
				return path;
			};

			BaseModel.prototype.parse = function (httpResponse, options) {
				// Pase skal
				// transform til uppercase
				// gøre data/meta pæn
				// lave datestrings til dates
				//console.log('Parse is ok');
			};
			//BaseModel.prototype.getOption = function (key) {
			//	return this.options[key];
			//};
			//BaseModel.prototype.setOption = function (key, value) {
			//	this.options[key] = value;
			//};

			BaseModel.prototype.beforeSave = function (object) {
				// Console.log(this, object);
				// noget i den stil (man skriver Post.beforeSave = function() {console.log(this)};
			};
			// afterSave etc.

			BaseModel.prototype.get = function (options) {
				return this.async('GET', undefined, options);
			};
			//BaseModel.prototype.save = function (options) {
			//	return this.sync('POST', this.prepare(this.attributes), options);
			//};
			//BaseModel.prototype.destroy = functio	n (options) {
			//	return this.sync('DELETE', undefined, options);
			//};
			BaseModel.prototype._resolve = function (field) {
				return nModelUtils.resolveValue(this, field);
			};

			BaseModel.prototype.async = function (method, data, options) {
				console.log('async')
				console.log(this._resolve('url'));
				//options = angular.extend({
				//	method: method,
				//	url: this._resolve('url'),
				//	data: data,
				//	headers: {
				//		Accept: 'application/vnd.nodes.v1+json'
				//	}
				//}, options);
				//
				//if (options.method === 'GET' && options.data !== undefined) {
				//	options.url += options.url.indexOf('?') === -1 ? '?' : '&';
				//	options.url += $.param(options.data);
				//}
				//
				//var abortDeferred;
				//if (options.timeout === undefined) {
				//	abortDeferred = $q.defer();
				//	options.timeout = abortDeferred.promise;
				//}
				//
				//var self = this,
				//	promise = $http(options).then(function (httpResponse) {
				//		var model = self.parse(httpResponse, options);
				//		self.set(model);
				//
				//		return self;
				//	});
				//
				//if (abortDeferred !== undefined) {
				//	promise.abort = function () {
				//		if (abortDeferred) {
				//			promise.aborted = true;
				//			abortDeferred.resolve();
				//		}
				//	};
				//
				//	promise['finally'](function () {
				//		abortDeferred = null;
				//	});
				//}
				//
				//return promise;
			};

			BaseModel.extend = nModelUtils.extendModel;

			return BaseModel;

		};
	}

})();
