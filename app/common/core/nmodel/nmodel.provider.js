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

			console.log('Construction new model using these options: ', defaults);

			var BaseModel = function (data, options) {
				this.options = options || {};

				this.initialize.apply(this, arguments);
			};

			BaseModel.prototype.initialize = function () {
				if (this.options.baseUrl) {
					this.baseUrl = this.options.baseUrl;
				} else if (this.options.url) {
					this.url = this.options.url;
				}
			};

			BaseModel.prototype.computeUrl = function(path, parameters) {
				if (parameters !== undefined && typeof parameters === 'object') {
					for (var key in parameters) {
						path = path.replace('{'+key+'}', parameters[key]);
					}
				}

				return path;
			};

			BaseModel.prototype.parse = function (httpResponse, options) {
				return httpResponse.data;
			};
			BaseModel.prototype.getOption = function (key) {
				return this.options[key];
			};
			BaseModel.prototype.setOption = function (key, value) {
				this.options[key] = value;
			};

			BaseModel.prototype.prepare = function (object) {
				return object;
			};
			BaseModel.prototype.fetch = function (options) {
				return this.sync('GET', undefined, options);
			};
			BaseModel.prototype.save = function (options) {
				return this.sync('POST', this.prepare(this.attributes), options);
			};
			BaseModel.prototype.destroy = function (options) {
				return this.sync('DELETE', undefined, options);
			};
			BaseModel.prototype._resolve = function (field) {
				return nModelUtils.resolveValue(this, field);
			};

			BaseModel.prototype.sync = function (method, data, options) {
				options = angular.extend({
					method: method,
					url: this._resolve('url'),
					data: data,
					headers: {
						Accept: 'application/vnd.nodes.v1+json'
					}
				}, options);

				console.log('fetch', this._resolve('url'));

				if (options.method === 'GET' && options.data !== undefined) {
					options.url += options.url.indexOf('?') === -1 ? '?' : '&';
					options.url += $.param(options.data);
				}

				var abortDeferred;
				if (options.timeout === undefined) {
					abortDeferred = $q.defer();
					options.timeout = abortDeferred.promise;
				}

				var self = this,
					promise = $http(options).then(function (httpResponse) {
						var model = self.parse(httpResponse, options);
						self.set(model);

						return self;
					});

				if (abortDeferred !== undefined) {
					promise.abort = function () {
						if (abortDeferred) {
							promise.aborted = true;
							abortDeferred.resolve();
						}
					};

					promise['finally'](function () {
						abortDeferred = null;
					});
				}

				return promise;
			};

			BaseModel.extend = nModelUtils.extendModel;

			return BaseModel;

		};
	}

})();