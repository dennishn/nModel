(function () {
	'use strict';

	angular
		.module('nModel')
		.service('nModelUtils', Utilities);

	/* @ngInject */
	function Utilities() {

		var service = {
			each: each,
			has: has,
			extend: extend,
			extendModel: extendModel,
			resolveValue: resolveValue
		};

		/**
		 * For each loop of array.
		 *
		 * @type {Function}
		 */
		var nativeForEach = Array.prototype.forEach;

		function each(obj, iterator, context) {
			if (obj != null) {
				if (nativeForEach && obj.forEach === nativeForEach) {
					obj.forEach(iterator, context);
				}
			}
		}

		/**
		 * Is this object has that key.
		 *
		 * @param obj
		 * @param key
		 * @returns {boolean}
		 */
		function has(obj, key) {
			return Object.prototype.hasOwnProperty.call(obj, key);
		}

		/**
		 * Extend an object.
		 *
		 * @type {Function}
		 */
		function extend(obj) {
			each(Array.prototype.slice.call(arguments, 1), function(source) {
				if (source) {
					for (var prop in source) {
						obj[prop] = source[prop];
					}
				}
			});

			return obj;
		}

		/**
		 * Helper function to correctly set up the prototype chain, for subclasses.
		 * Similar to `goog.inherits`, but uses a hash of prototype properties and
		 * class properties to be extended.
		 *
		 * @param protoProps
		 * @param staticProps
		 * @returns {*}
		 */
		function extendModel(protoProps, staticProps) {
			/*jshint validthis:true */
			var parent = this;
			var child;

			// The constructor function for the new subclass is either defined by you
			// (the "constructor" property in your `extend` definition), or defaulted
			// by us to simply call the parent's constructor.
			if (protoProps && has(protoProps, 'constructor')) {
				child = protoProps.constructor;
			} else {
				child = function(){ return parent.apply(this, arguments); };
			}

			// Add static properties to the constructor function, if supplied.
			extend(child, parent, staticProps);

			// Set the prototype chain to inherit from `parent`, without calling
			// `parent`'s constructor function.
			var Surrogate = function(){ this.constructor = child; };
			Surrogate.prototype = parent.prototype;
			child.prototype = new Surrogate();

			// Add prototype properties (instance properties) to the subclass,
			// if supplied.
			if (protoProps) {
				extend(child.prototype, protoProps);
			}

			// Set a convenience property in case the parent's prototype is needed
			// later.
			child.__super__ = parent.prototype;

			return child;
		}

		/**
		 * Resolve an object attribute. If that attribute is a function, call it.
		 *
		 * @param object
		 * @param attribute
		 * @returns {*}
		 */
		function resolveValue(object, attribute) {
			if (object == null) {
				return void 0;
			}
			var value = object[attribute];
			return typeof value === 'function' ? value.call(object) : value;
		}

		return service;
	}

})();
