(function () {
	'use strict';

	angular
		.module('nModel')
		.service('nModel', Model);

	/* @ngInject */
	function Model(BaseModel) {

		var BModel = BaseModel.extend({
			// TODO: DOC - Konfigurertbart pr model man laver :-)
			identifierKey: 'id',

			constructor: function (attributes, options) {
				BaseModel.prototype.constructor.apply(this, arguments);

				this.attributes = attributes;
			},
			//get: function (key) {
			//	return this.attributes[key];
			//},
			//set: function (key, value) {
			//	if (typeof key === 'string') {
			//		this.attributes[key] = value;
			//	} else if (typeof key === 'object') {
			//		for (var k in key) {
			//			this.set(k, key[k]);
			//		}
			//	}
			//},
			//has: function (key) {
			//	return key in this.attributes;
			//},
			//save: function (attributes, options) {
			//	this.set(attributes);
			//
			//	return BaseModel.prototype.save.call(this, options);
			//},
			url: function () {
				//console.log(this.attributes);
				//return this.computeUrl(this._resolve('baseUrl'), this.attributes);
				return this.computeUrl(this._resolve('collection'), this.attributes);
			},
			//getIdentifier: function () {
			//	return this.get(this.identifierKey);
			//}
		});

		return BModel;



	}

})();
