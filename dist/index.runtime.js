(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VueUniversalModal = factory(global.Vue));
}(this, (function (vue) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  (function () { return this; })() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global$1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global$1, key, value);
	  } catch (error) {
	    global$1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global$1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store;

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global$1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.8.2',
	  mode:  'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global$1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;
	  set = function (it, metadata) {
	    metadata.facade = it;
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(String).split('String');

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var state;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) {
	      createNonEnumerableProperty(value, 'name', key);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
	    }
	  }
	  if (O === global$1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});
	});

	var path = global$1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global$1[namespace])
	    : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$1;
	  } else if (STATIC) {
	    target = global$1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var useSymbolAsUid = nativeSymbol
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global$1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global$1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, forced: FORCED }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var aFunction$1 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_OUT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push.call(target, value); // filterOut
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6),
	  // `Array.prototype.filterOut` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterOut: createMethod$1(7)
	};

	var defineProperty = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	var arrayMethodUsesToLength = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !descriptors) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};

	var $filter = arrayIteration.filter;



	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
	// Edge 14- issue
	var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;



	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH$1 = arrayMethodUsesToLength('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH$1) ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	var nativeJoin = [].join;

	var ES3_STRINGS = indexedObject != Object;
	var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');

	// `Array.prototype.join` method
	// https://tc39.es/ecma262/#sec-array.prototype.join
	_export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
	  join: function join(separator) {
	    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
	  }
	});

	var $map = arrayIteration.map;



	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');
	// FF49- issue
	var USES_TO_LENGTH$2 = arrayMethodUsesToLength('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$2 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$2 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction$1(callbackfn);
	    var O = toObject(that);
	    var self = indexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
	  left: createMethod$2(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$2(true)
	};

	var engineIsNode = classofRaw(global$1.process) == 'process';

	var $reduce = arrayReduce.left;





	var STRICT_METHOD$2 = arrayMethodIsStrict('reduce');
	var USES_TO_LENGTH$3 = arrayMethodUsesToLength('reduce', { 1: 0 });
	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$2 || !USES_TO_LENGTH$3 || CHROME_BUG }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');
	var USES_TO_LENGTH$4 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

	var SPECIES$2 = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$4 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES$2];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    objectSetPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    typeof (NewTarget = dummy.constructor) == 'function' &&
	    NewTarget !== Wrapper &&
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) objectSetPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
	};

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
	// so we use an intermediate function.
	function RE(s, f) {
	  return RegExp(s, f);
	}

	var UNSUPPORTED_Y = fails(function () {
	  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	  var re = RE('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	var BROKEN_CARET = fails(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = RE('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	var regexpStickyHelpers = {
		UNSUPPORTED_Y: UNSUPPORTED_Y,
		BROKEN_CARET: BROKEN_CARET
	};

	var SPECIES$3 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
	    defineProperty(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var defineProperty$1 = objectDefineProperty.f;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;





	var setInternalState = internalState.set;



	var MATCH$1 = wellKnownSymbol('match');
	var NativeRegExp = global$1.RegExp;
	var RegExpPrototype = NativeRegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;

	// "new" should create a new object, old webkit bug
	var CORRECT_NEW = new NativeRegExp(re1) !== re1;

	var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;

	var FORCED$1 = descriptors && isForced_1('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y$1 || fails(function () {
	  re2[MATCH$1] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
	})));

	// `RegExp` constructor
	// https://tc39.es/ecma262/#sec-regexp-constructor
	if (FORCED$1) {
	  var RegExpWrapper = function RegExp(pattern, flags) {
	    var thisIsRegExp = this instanceof RegExpWrapper;
	    var patternIsRegExp = isRegexp(pattern);
	    var flagsAreUndefined = flags === undefined;
	    var sticky;

	    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
	      return pattern;
	    }

	    if (CORRECT_NEW) {
	      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
	    } else if (pattern instanceof RegExpWrapper) {
	      if (flagsAreUndefined) flags = regexpFlags.call(pattern);
	      pattern = pattern.source;
	    }

	    if (UNSUPPORTED_Y$1) {
	      sticky = !!flags && flags.indexOf('y') > -1;
	      if (sticky) flags = flags.replace(/y/g, '');
	    }

	    var result = inheritIfRequired(
	      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
	      thisIsRegExp ? this : RegExpPrototype,
	      RegExpWrapper
	    );

	    if (UNSUPPORTED_Y$1 && sticky) setInternalState(result, { sticky: sticky });

	    return result;
	  };
	  var proxy = function (key) {
	    key in RegExpWrapper || defineProperty$1(RegExpWrapper, key, {
	      configurable: true,
	      get: function () { return NativeRegExp[key]; },
	      set: function (it) { NativeRegExp[key] = it; }
	    });
	  };
	  var keys$1 = getOwnPropertyNames(NativeRegExp);
	  var index = 0;
	  while (keys$1.length > index) proxy(keys$1[index++]);
	  RegExpPrototype.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype;
	  redefine(global$1, 'RegExp', RegExpWrapper);
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies('RegExp');

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;
	    var sticky = UNSUPPORTED_Y$2 && re.sticky;
	    var flags = regexpFlags.call(re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = flags.replace('y', '');
	      if (flags.indexOf('g') === -1) {
	        flags += 'g';
	      }

	      strCopy = String(str).slice(re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = match.input.slice(charsAdded);
	        match[0] = match[0].slice(charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var regexpExec = patchedExec;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
	  exec: regexpExec
	});

	var TO_STRING = 'toString';
	var RegExpPrototype$1 = RegExp.prototype;
	var nativeToString = RegExpPrototype$1[TO_STRING];

	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = nativeToString.name != TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine(RegExp.prototype, TO_STRING, function toString() {
	    var R = anObject(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$1) ? regexpFlags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, { unsafe: true });
	}

	// TODO: Remove from `core-js@4` since it's moved to entry points







	var SPECIES$4 = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	var REPLACE = wellKnownSymbol('replace');
	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }
	  return false;
	})();

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$4] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !(
	      REPLACE_SUPPORTS_NAMED_GROUPS &&
	      REPLACE_KEEPS_$0 &&
	      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    )) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    }, {
	      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
	      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	  }

	  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
	};

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$3(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$3(true)
	};

	var charAt = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classofRaw(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};

	// @@match logic
	fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.es/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible(this);
	      var matcher = regexp == undefined ? undefined : regexp[MATCH];
	      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative(nativeMatch, regexp, this);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      if (!rx.global) return regexpExecAbstract(rx, S);

	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regexpExecAbstract(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var floor$1 = Math.floor;
	var replace = ''.replace;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	// https://tc39.es/ecma262/#sec-getsubstitution
	var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
	  var tailPos = position + matched.length;
	  var m = captures.length;
	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	  if (namedCaptures !== undefined) {
	    namedCaptures = toObject(namedCaptures);
	    symbols = SUBSTITUTION_SYMBOLS;
	  }
	  return replace.call(replacement, symbols, function (match, ch) {
	    var capture;
	    switch (ch.charAt(0)) {
	      case '$': return '$';
	      case '&': return matched;
	      case '`': return str.slice(0, position);
	      case "'": return str.slice(tailPos);
	      case '<':
	        capture = namedCaptures[ch.slice(1, -1)];
	        break;
	      default: // \d\d?
	        var n = +ch;
	        if (n === 0) return match;
	        if (n > m) {
	          var f = floor$1(n / 10);
	          if (f === 0) return match;
	          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	          return match;
	        }
	        capture = captures[n - 1];
	    }
	    return capture === undefined ? '' : capture;
	  });
	};

	var max$2 = Math.max;
	var min$2 = Math.min;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
	  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
	  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.es/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      if (
	        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
	        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
	      ) {
	        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	        if (res.done) return res.value;
	      }

	      var rx = anObject(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regexpExecAbstract(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max$2(min$2(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];
	});

	var SPECIES$5 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$5]) == undefined ? defaultConstructor : aFunction$1(S);
	};

	var arrayPush = [].push;
	var min$3 = Math.min;
	var MAX_UINT32 = 0xFFFFFFFF;

	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

	// @@split logic
	fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(requireObjectCoercible(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegexp(separator)) {
	        return nativeSplit.call(string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output.length > lim ? output.slice(0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.es/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	}, !SUPPORTS_Y);

	var notARegexp = function (it) {
	  if (isRegexp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};

	var MATCH$2 = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH$2] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;






	var nativeStartsWith = ''.startsWith;
	var min$4 = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.startswith
	_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = String(requireObjectCoercible(this));
	    notARegexp(searchString);
	    var index = toLength(min$4(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return nativeStartsWith
	      ? nativeStartsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global$1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
	    createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
	  } catch (error) {
	    CollectionPrototype.forEach = arrayForEach;
	  }
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys$1(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys$1(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys$1(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function Diff() {}
	Diff.prototype = {
	  diff: function diff(oldString, newString) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var callback = options.callback;

	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }

	    this.options = options;
	    var self = this;

	    function done(value) {
	      if (callback) {
	        setTimeout(function () {
	          callback(undefined, value);
	        }, 0);
	        return true;
	      } else {
	        return value;
	      }
	    } // Allow subclasses to massage the input prior to running


	    oldString = this.castInput(oldString);
	    newString = this.castInput(newString);
	    oldString = this.removeEmpty(this.tokenize(oldString));
	    newString = this.removeEmpty(this.tokenize(newString));
	    var newLen = newString.length,
	        oldLen = oldString.length;
	    var editLength = 1;
	    var maxEditLength = newLen + oldLen;
	    var bestPath = [{
	      newPos: -1,
	      components: []
	    }]; // Seed editLength = 0, i.e. the content starts with the same values

	    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

	    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
	      // Identity per the equality and tokenizer
	      return done([{
	        value: this.join(newString),
	        count: newString.length
	      }]);
	    } // Main worker method. checks all permutations of a given edit length for acceptance.


	    function execEditLength() {
	      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
	        var basePath = void 0;

	        var addPath = bestPath[diagonalPath - 1],
	            removePath = bestPath[diagonalPath + 1],
	            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

	        if (addPath) {
	          // No one else is going to attempt to use this value, clear it
	          bestPath[diagonalPath - 1] = undefined;
	        }

	        var canAdd = addPath && addPath.newPos + 1 < newLen,
	            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

	        if (!canAdd && !canRemove) {
	          // If this path is a terminal then prune
	          bestPath[diagonalPath] = undefined;
	          continue;
	        } // Select the diagonal that we want to branch from. We select the prior
	        // path whose position in the new string is the farthest from the origin
	        // and does not pass the bounds of the diff graph


	        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
	          basePath = clonePath(removePath);
	          self.pushComponent(basePath.components, undefined, true);
	        } else {
	          basePath = addPath; // No need to clone, we've pulled it from the list

	          basePath.newPos++;
	          self.pushComponent(basePath.components, true, undefined);
	        }

	        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

	        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
	          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
	        } else {
	          // Otherwise track this path as a potential candidate and continue.
	          bestPath[diagonalPath] = basePath;
	        }
	      }

	      editLength++;
	    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
	    // sync and async mode which is never fun. Loops over execEditLength until a value
	    // is produced.


	    if (callback) {
	      (function exec() {
	        setTimeout(function () {
	          // This should not happen, but we want to be safe.

	          /* istanbul ignore next */
	          if (editLength > maxEditLength) {
	            return callback();
	          }

	          if (!execEditLength()) {
	            exec();
	          }
	        }, 0);
	      })();
	    } else {
	      while (editLength <= maxEditLength) {
	        var ret = execEditLength();

	        if (ret) {
	          return ret;
	        }
	      }
	    }
	  },
	  pushComponent: function pushComponent(components, added, removed) {
	    var last = components[components.length - 1];

	    if (last && last.added === added && last.removed === removed) {
	      // We need to clone here as the component clone operation is just
	      // as shallow array clone
	      components[components.length - 1] = {
	        count: last.count + 1,
	        added: added,
	        removed: removed
	      };
	    } else {
	      components.push({
	        count: 1,
	        added: added,
	        removed: removed
	      });
	    }
	  },
	  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
	    var newLen = newString.length,
	        oldLen = oldString.length,
	        newPos = basePath.newPos,
	        oldPos = newPos - diagonalPath,
	        commonCount = 0;

	    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
	      newPos++;
	      oldPos++;
	      commonCount++;
	    }

	    if (commonCount) {
	      basePath.components.push({
	        count: commonCount
	      });
	    }

	    basePath.newPos = newPos;
	    return oldPos;
	  },
	  equals: function equals(left, right) {
	    if (this.options.comparator) {
	      return this.options.comparator(left, right);
	    } else {
	      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
	    }
	  },
	  removeEmpty: function removeEmpty(array) {
	    var ret = [];

	    for (var i = 0; i < array.length; i++) {
	      if (array[i]) {
	        ret.push(array[i]);
	      }
	    }

	    return ret;
	  },
	  castInput: function castInput(value) {
	    return value;
	  },
	  tokenize: function tokenize(value) {
	    return value.split('');
	  },
	  join: function join(chars) {
	    return chars.join('');
	  }
	};

	function buildValues(diff, components, newString, oldString, useLongestToken) {
	  var componentPos = 0,
	      componentLen = components.length,
	      newPos = 0,
	      oldPos = 0;

	  for (; componentPos < componentLen; componentPos++) {
	    var component = components[componentPos];

	    if (!component.removed) {
	      if (!component.added && useLongestToken) {
	        var value = newString.slice(newPos, newPos + component.count);
	        value = value.map(function (value, i) {
	          var oldValue = oldString[oldPos + i];
	          return oldValue.length > value.length ? oldValue : value;
	        });
	        component.value = diff.join(value);
	      } else {
	        component.value = diff.join(newString.slice(newPos, newPos + component.count));
	      }

	      newPos += component.count; // Common case

	      if (!component.added) {
	        oldPos += component.count;
	      }
	    } else {
	      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
	      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
	      // The diffing algorithm is tied to add then remove output and this is the simplest
	      // route to get the desired output with minimal overhead.

	      if (componentPos && components[componentPos - 1].added) {
	        var tmp = components[componentPos - 1];
	        components[componentPos - 1] = components[componentPos];
	        components[componentPos] = tmp;
	      }
	    }
	  } // Special case handle for when one terminal is ignored (i.e. whitespace).
	  // For this case we merge the terminal into the prior string and drop the change.
	  // This is only available for string mode.


	  var lastComponent = components[componentLen - 1];

	  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
	    components[componentLen - 2].value += lastComponent.value;
	    components.pop();
	  }

	  return components;
	}

	function clonePath(path) {
	  return {
	    newPos: path.newPos,
	    components: path.components.slice(0)
	  };
	}

	function generateOptions(options, defaults) {
	  if (typeof options === 'function') {
	    defaults.callback = options;
	  } else if (options) {
	    for (var name in options) {
	      /* istanbul ignore else */
	      if (options.hasOwnProperty(name)) {
	        defaults[name] = options[name];
	      }
	    }
	  }

	  return defaults;
	}

	//
	// Ranges and exceptions:
	// Latin-1 Supplement, 0080–00FF
	//  - U+00D7  × Multiplication sign
	//  - U+00F7  ÷ Division sign
	// Latin Extended-A, 0100–017F
	// Latin Extended-B, 0180–024F
	// IPA Extensions, 0250–02AF
	// Spacing Modifier Letters, 02B0–02FF
	//  - U+02C7  ˇ &#711;  Caron
	//  - U+02D8  ˘ &#728;  Breve
	//  - U+02D9  ˙ &#729;  Dot Above
	//  - U+02DA  ˚ &#730;  Ring Above
	//  - U+02DB  ˛ &#731;  Ogonek
	//  - U+02DC  ˜ &#732;  Small Tilde
	//  - U+02DD  ˝ &#733;  Double Acute Accent
	// Latin Extended Additional, 1E00–1EFF

	var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
	var reWhitespace = /\S/;
	var wordDiff = new Diff();

	wordDiff.equals = function (left, right) {
	  if (this.options.ignoreCase) {
	    left = left.toLowerCase();
	    right = right.toLowerCase();
	  }

	  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
	};

	wordDiff.tokenize = function (value) {
	  // All whitespace symbols except newline group into one token, each newline - in separate token
	  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

	  for (var i = 0; i < tokens.length - 1; i++) {
	    // If we have an empty string in the next field and we have only word chars before and after, merge
	    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
	      tokens[i] += tokens[i + 2];
	      tokens.splice(i + 1, 2);
	      i--;
	    }
	  }

	  return tokens;
	};

	function diffWords(oldStr, newStr, options) {
	  options = generateOptions(options, {
	    ignoreWhitespace: true
	  });
	  return wordDiff.diff(oldStr, newStr, options);
	}

	var lineDiff = new Diff();

	lineDiff.tokenize = function (value) {
	  var retLines = [],
	      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

	  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
	    linesAndNewlines.pop();
	  } // Merge the content and line separators into single tokens


	  for (var i = 0; i < linesAndNewlines.length; i++) {
	    var line = linesAndNewlines[i];

	    if (i % 2 && !this.options.newlineIsToken) {
	      retLines[retLines.length - 1] += line;
	    } else {
	      if (this.options.ignoreWhitespace) {
	        line = line.trim();
	      }

	      retLines.push(line);
	    }
	  }

	  return retLines;
	};

	function diffLines(oldStr, newStr, callback) {
	  return lineDiff.diff(oldStr, newStr, callback);
	}

	var sentenceDiff = new Diff();

	sentenceDiff.tokenize = function (value) {
	  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
	};

	var cssDiff = new Diff();

	cssDiff.tokenize = function (value) {
	  return value.split(/([{}:;,]|\s+)/);
	};

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	var objectPrototypeToString = Object.prototype.toString;
	var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
	// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

	jsonDiff.useLongestToken = true;
	jsonDiff.tokenize = lineDiff.tokenize;

	jsonDiff.castInput = function (value) {
	  var _this$options = this.options,
	      undefinedReplacement = _this$options.undefinedReplacement,
	      _this$options$stringi = _this$options.stringifyReplacer,
	      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
	    return typeof v === 'undefined' ? undefinedReplacement : v;
	  } : _this$options$stringi;
	  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
	};

	jsonDiff.equals = function (left, right) {
	  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
	};
	// object that is already on the "stack" of items being processed. Accepts an optional replacer

	function canonicalize(obj, stack, replacementStack, replacer, key) {
	  stack = stack || [];
	  replacementStack = replacementStack || [];

	  if (replacer) {
	    obj = replacer(key, obj);
	  }

	  var i;

	  for (i = 0; i < stack.length; i += 1) {
	    if (stack[i] === obj) {
	      return replacementStack[i];
	    }
	  }

	  var canonicalizedObj;

	  if ('[object Array]' === objectPrototypeToString.call(obj)) {
	    stack.push(obj);
	    canonicalizedObj = new Array(obj.length);
	    replacementStack.push(canonicalizedObj);

	    for (i = 0; i < obj.length; i += 1) {
	      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
	    }

	    stack.pop();
	    replacementStack.pop();
	    return canonicalizedObj;
	  }

	  if (obj && obj.toJSON) {
	    obj = obj.toJSON();
	  }

	  if (_typeof(obj) === 'object' && obj !== null) {
	    stack.push(obj);
	    canonicalizedObj = {};
	    replacementStack.push(canonicalizedObj);

	    var sortedKeys = [],
	        _key;

	    for (_key in obj) {
	      /* istanbul ignore else */
	      if (obj.hasOwnProperty(_key)) {
	        sortedKeys.push(_key);
	      }
	    }

	    sortedKeys.sort();

	    for (i = 0; i < sortedKeys.length; i += 1) {
	      _key = sortedKeys[i];
	      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
	    }

	    stack.pop();
	    replacementStack.pop();
	  } else {
	    canonicalizedObj = obj;
	  }

	  return canonicalizedObj;
	}

	var arrayDiff = new Diff();

	arrayDiff.tokenize = function (value) {
	  return value.slice();
	};

	arrayDiff.join = arrayDiff.removeEmpty = function (value) {
	  return value;
	};

	function deepFreeze(obj) {
	    if (obj instanceof Map) {
	        obj.clear = obj.delete = obj.set = function () {
	            throw new Error('map is read-only');
	        };
	    } else if (obj instanceof Set) {
	        obj.add = obj.clear = obj.delete = function () {
	            throw new Error('set is read-only');
	        };
	    }

	    // Freeze self
	    Object.freeze(obj);

	    Object.getOwnPropertyNames(obj).forEach(function (name) {
	        var prop = obj[name];

	        // Freeze prop if it is an object
	        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
	            deepFreeze(prop);
	        }
	    });

	    return obj;
	}

	var deepFreezeEs6 = deepFreeze;
	var _default = deepFreeze;
	deepFreezeEs6.default = _default;

	class Response {
	  /**
	   * @param {CompiledMode} mode
	   */
	  constructor(mode) {
	    // eslint-disable-next-line no-undefined
	    if (mode.data === undefined) mode.data = {};

	    this.data = mode.data;
	  }

	  ignoreMatch() {
	    this.ignore = true;
	  }
	}

	/**
	 * @param {string} value
	 * @returns {string}
	 */
	function escapeHTML(value) {
	  return value
	    .replace(/&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#x27;');
	}

	/**
	 * performs a shallow merge of multiple objects into one
	 *
	 * @template T
	 * @param {T} original
	 * @param {Record<string,any>[]} objects
	 * @returns {T} a single new object
	 */
	function inherit(original, ...objects) {
	  /** @type Record<string,any> */
	  const result = Object.create(null);

	  for (const key in original) {
	    result[key] = original[key];
	  }
	  objects.forEach(function(obj) {
	    for (const key in obj) {
	      result[key] = obj[key];
	    }
	  });
	  return /** @type {T} */ (result);
	}

	/**
	 * @typedef {object} Renderer
	 * @property {(text: string) => void} addText
	 * @property {(node: Node) => void} openNode
	 * @property {(node: Node) => void} closeNode
	 * @property {() => string} value
	 */

	/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
	/** @typedef {{walk: (r: Renderer) => void}} Tree */
	/** */

	const SPAN_CLOSE = '</span>';

	/**
	 * Determines if a node needs to be wrapped in <span>
	 *
	 * @param {Node} node */
	const emitsWrappingTags = (node) => {
	  return !!node.kind;
	};

	/** @type {Renderer} */
	class HTMLRenderer {
	  /**
	   * Creates a new HTMLRenderer
	   *
	   * @param {Tree} parseTree - the parse tree (must support `walk` API)
	   * @param {{classPrefix: string}} options
	   */
	  constructor(parseTree, options) {
	    this.buffer = "";
	    this.classPrefix = options.classPrefix;
	    parseTree.walk(this);
	  }

	  /**
	   * Adds texts to the output stream
	   *
	   * @param {string} text */
	  addText(text) {
	    this.buffer += escapeHTML(text);
	  }

	  /**
	   * Adds a node open to the output stream (if needed)
	   *
	   * @param {Node} node */
	  openNode(node) {
	    if (!emitsWrappingTags(node)) return;

	    let className = node.kind;
	    if (!node.sublanguage) {
	      className = `${this.classPrefix}${className}`;
	    }
	    this.span(className);
	  }

	  /**
	   * Adds a node close to the output stream (if needed)
	   *
	   * @param {Node} node */
	  closeNode(node) {
	    if (!emitsWrappingTags(node)) return;

	    this.buffer += SPAN_CLOSE;
	  }

	  /**
	   * returns the accumulated buffer
	  */
	  value() {
	    return this.buffer;
	  }

	  // helpers

	  /**
	   * Builds a span element
	   *
	   * @param {string} className */
	  span(className) {
	    this.buffer += `<span class="${className}">`;
	  }
	}

	/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
	/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
	/**  */

	class TokenTree {
	  constructor() {
	    /** @type DataNode */
	    this.rootNode = { children: [] };
	    this.stack = [this.rootNode];
	  }

	  get top() {
	    return this.stack[this.stack.length - 1];
	  }

	  get root() { return this.rootNode; }

	  /** @param {Node} node */
	  add(node) {
	    this.top.children.push(node);
	  }

	  /** @param {string} kind */
	  openNode(kind) {
	    /** @type Node */
	    const node = { kind, children: [] };
	    this.add(node);
	    this.stack.push(node);
	  }

	  closeNode() {
	    if (this.stack.length > 1) {
	      return this.stack.pop();
	    }
	    // eslint-disable-next-line no-undefined
	    return undefined;
	  }

	  closeAllNodes() {
	    while (this.closeNode());
	  }

	  toJSON() {
	    return JSON.stringify(this.rootNode, null, 4);
	  }

	  /**
	   * @typedef { import("./html_renderer").Renderer } Renderer
	   * @param {Renderer} builder
	   */
	  walk(builder) {
	    // this does not
	    return this.constructor._walk(builder, this.rootNode);
	    // this works
	    // return TokenTree._walk(builder, this.rootNode);
	  }

	  /**
	   * @param {Renderer} builder
	   * @param {Node} node
	   */
	  static _walk(builder, node) {
	    if (typeof node === "string") {
	      builder.addText(node);
	    } else if (node.children) {
	      builder.openNode(node);
	      node.children.forEach((child) => this._walk(builder, child));
	      builder.closeNode(node);
	    }
	    return builder;
	  }

	  /**
	   * @param {Node} node
	   */
	  static _collapse(node) {
	    if (typeof node === "string") return;
	    if (!node.children) return;

	    if (node.children.every(el => typeof el === "string")) {
	      // node.text = node.children.join("");
	      // delete node.children;
	      node.children = [node.children.join("")];
	    } else {
	      node.children.forEach((child) => {
	        TokenTree._collapse(child);
	      });
	    }
	  }
	}

	/**
	  Currently this is all private API, but this is the minimal API necessary
	  that an Emitter must implement to fully support the parser.

	  Minimal interface:

	  - addKeyword(text, kind)
	  - addText(text)
	  - addSublanguage(emitter, subLanguageName)
	  - finalize()
	  - openNode(kind)
	  - closeNode()
	  - closeAllNodes()
	  - toHTML()

	*/

	/**
	 * @implements {Emitter}
	 */
	class TokenTreeEmitter extends TokenTree {
	  /**
	   * @param {*} options
	   */
	  constructor(options) {
	    super();
	    this.options = options;
	  }

	  /**
	   * @param {string} text
	   * @param {string} kind
	   */
	  addKeyword(text, kind) {
	    if (text === "") { return; }

	    this.openNode(kind);
	    this.addText(text);
	    this.closeNode();
	  }

	  /**
	   * @param {string} text
	   */
	  addText(text) {
	    if (text === "") { return; }

	    this.add(text);
	  }

	  /**
	   * @param {Emitter & {root: DataNode}} emitter
	   * @param {string} name
	   */
	  addSublanguage(emitter, name) {
	    /** @type DataNode */
	    const node = emitter.root;
	    node.kind = name;
	    node.sublanguage = true;
	    this.add(node);
	  }

	  toHTML() {
	    const renderer = new HTMLRenderer(this, this.options);
	    return renderer.value();
	  }

	  finalize() {
	    return true;
	  }
	}

	/**
	 * @param {string} value
	 * @returns {RegExp}
	 * */
	function escape(value) {
	  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
	}

	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function source(re) {
	  if (!re) return null;
	  if (typeof re === "string") return re;

	  return re.source;
	}

	/**
	 * @param {...(RegExp | string) } args
	 * @returns {string}
	 */
	function concat(...args) {
	  const joined = args.map((x) => source(x)).join("");
	  return joined;
	}

	/**
	 * Any of the passed expresssions may match
	 *
	 * Creates a huge this | this | that | that match
	 * @param {(RegExp | string)[] } args
	 * @returns {string}
	 */
	function either(...args) {
	  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
	  return joined;
	}

	/**
	 * @param {RegExp} re
	 * @returns {number}
	 */
	function countMatchGroups(re) {
	  return (new RegExp(re.toString() + '|')).exec('').length - 1;
	}

	/**
	 * Does lexeme start with a regular expression match at the beginning
	 * @param {RegExp} re
	 * @param {string} lexeme
	 */
	function startsWith(re, lexeme) {
	  const match = re && re.exec(lexeme);
	  return match && match.index === 0;
	}

	// join logically computes regexps.join(separator), but fixes the
	// backreferences so they continue to match.
	// it also places each individual regular expression into it's own
	// match group, keeping track of the sequencing of those match groups
	// is currently an exercise for the caller. :-)
	/**
	 * @param {(string | RegExp)[]} regexps
	 * @param {string} separator
	 * @returns {string}
	 */
	function join(regexps, separator = "|") {
	  // backreferenceRe matches an open parenthesis or backreference. To avoid
	  // an incorrect parse, it additionally matches the following:
	  // - [...] elements, where the meaning of parentheses and escapes change
	  // - other escape sequences, so we do not misparse escape sequences as
	  //   interesting elements
	  // - non-matching or lookahead parentheses, which do not capture. These
	  //   follow the '(' with a '?'.
	  const backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
	  let numCaptures = 0;
	  let ret = '';
	  for (let i = 0; i < regexps.length; i++) {
	    numCaptures += 1;
	    const offset = numCaptures;
	    let re = source(regexps[i]);
	    if (i > 0) {
	      ret += separator;
	    }
	    ret += "(";
	    while (re.length > 0) {
	      const match = backreferenceRe.exec(re);
	      if (match == null) {
	        ret += re;
	        break;
	      }
	      ret += re.substring(0, match.index);
	      re = re.substring(match.index + match[0].length);
	      if (match[0][0] === '\\' && match[1]) {
	        // Adjust the backreference.
	        ret += '\\' + String(Number(match[1]) + offset);
	      } else {
	        ret += match[0];
	        if (match[0] === '(') {
	          numCaptures++;
	        }
	      }
	    }
	    ret += ")";
	  }
	  return ret;
	}

	// Common regexps
	const IDENT_RE = '[a-zA-Z]\\w*';
	const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

	/**
	* @param { Partial<Mode> & {binary?: string | RegExp} } opts
	*/
	const SHEBANG = (opts = {}) => {
	  const beginShebang = /^#![ ]*\//;
	  if (opts.binary) {
	    opts.begin = concat(
	      beginShebang,
	      /.*\b/,
	      opts.binary,
	      /\b.*/);
	  }
	  return inherit({
	    className: 'meta',
	    begin: beginShebang,
	    end: /$/,
	    relevance: 0,
	    /** @type {ModeCallback} */
	    "on:begin": (m, resp) => {
	      if (m.index !== 0) resp.ignoreMatch();
	    }
	  }, opts);
	};

	// Common modes
	const BACKSLASH_ESCAPE = {
	  begin: '\\\\[\\s\\S]', relevance: 0
	};
	const APOS_STRING_MODE = {
	  className: 'string',
	  begin: '\'',
	  end: '\'',
	  illegal: '\\n',
	  contains: [BACKSLASH_ESCAPE]
	};
	const QUOTE_STRING_MODE = {
	  className: 'string',
	  begin: '"',
	  end: '"',
	  illegal: '\\n',
	  contains: [BACKSLASH_ESCAPE]
	};
	const PHRASAL_WORDS_MODE = {
	  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
	};
	/**
	 * Creates a comment mode
	 *
	 * @param {string | RegExp} begin
	 * @param {string | RegExp} end
	 * @param {Mode | {}} [modeOptions]
	 * @returns {Partial<Mode>}
	 */
	const COMMENT = function(begin, end, modeOptions = {}) {
	  const mode = inherit(
	    {
	      className: 'comment',
	      begin,
	      end,
	      contains: []
	    },
	    modeOptions
	  );
	  mode.contains.push(PHRASAL_WORDS_MODE);
	  mode.contains.push({
	    className: 'doctag',
	    begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
	    relevance: 0
	  });
	  return mode;
	};
	const C_LINE_COMMENT_MODE = COMMENT('//', '$');
	const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
	const HASH_COMMENT_MODE = COMMENT('#', '$');
	const NUMBER_MODE = {
	  className: 'number',
	  begin: NUMBER_RE,
	  relevance: 0
	};
	const C_NUMBER_MODE = {
	  className: 'number',
	  begin: C_NUMBER_RE,
	  relevance: 0
	};
	const BINARY_NUMBER_MODE = {
	  className: 'number',
	  begin: BINARY_NUMBER_RE,
	  relevance: 0
	};
	const CSS_NUMBER_MODE = {
	  className: 'number',
	  begin: NUMBER_RE + '(' +
	    '%|em|ex|ch|rem' +
	    '|vw|vh|vmin|vmax' +
	    '|cm|mm|in|pt|pc|px' +
	    '|deg|grad|rad|turn' +
	    '|s|ms' +
	    '|Hz|kHz' +
	    '|dpi|dpcm|dppx' +
	    ')?',
	  relevance: 0
	};
	const REGEXP_MODE = {
	  // this outer rule makes sure we actually have a WHOLE regex and not simply
	  // an expression such as:
	  //
	  //     3 / something
	  //
	  // (which will then blow up when regex's `illegal` sees the newline)
	  begin: /(?=\/[^/\n]*\/)/,
	  contains: [{
	    className: 'regexp',
	    begin: /\//,
	    end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [
	      BACKSLASH_ESCAPE,
	      {
	        begin: /\[/,
	        end: /\]/,
	        relevance: 0,
	        contains: [BACKSLASH_ESCAPE]
	      }
	    ]
	  }]
	};
	const TITLE_MODE = {
	  className: 'title',
	  begin: IDENT_RE,
	  relevance: 0
	};
	const UNDERSCORE_TITLE_MODE = {
	  className: 'title',
	  begin: UNDERSCORE_IDENT_RE,
	  relevance: 0
	};
	const METHOD_GUARD = {
	  // excludes method names from keyword processing
	  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
	  relevance: 0
	};

	/**
	 * Adds end same as begin mechanics to a mode
	 *
	 * Your mode must include at least a single () match group as that first match
	 * group is what is used for comparison
	 * @param {Partial<Mode>} mode
	 */
	const END_SAME_AS_BEGIN = function(mode) {
	  return Object.assign(mode,
	    {
	      /** @type {ModeCallback} */
	      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
	      /** @type {ModeCallback} */
	      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
	    });
	};

	var MODES = /*#__PURE__*/Object.freeze({
	    __proto__: null,
	    IDENT_RE: IDENT_RE,
	    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
	    NUMBER_RE: NUMBER_RE,
	    C_NUMBER_RE: C_NUMBER_RE,
	    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
	    RE_STARTERS_RE: RE_STARTERS_RE,
	    SHEBANG: SHEBANG,
	    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
	    APOS_STRING_MODE: APOS_STRING_MODE,
	    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
	    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
	    COMMENT: COMMENT,
	    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
	    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
	    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
	    NUMBER_MODE: NUMBER_MODE,
	    C_NUMBER_MODE: C_NUMBER_MODE,
	    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
	    CSS_NUMBER_MODE: CSS_NUMBER_MODE,
	    REGEXP_MODE: REGEXP_MODE,
	    TITLE_MODE: TITLE_MODE,
	    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
	    METHOD_GUARD: METHOD_GUARD,
	    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
	});

	// Grammar extensions / plugins
	// See: https://github.com/highlightjs/highlight.js/issues/2833

	// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
	// without requiring any underlying changes to the compiler internals.

	// `compileMatch` being the perfect small example of now allowing a grammar
	// author to write `match` when they desire to match a single expression rather
	// than being forced to use `begin`.  The extension then just moves `match` into
	// `begin` when it runs.  Ie, no features have been added, but we've just made
	// the experience of writing (and reading grammars) a little bit nicer.

	// ------

	// TODO: We need negative look-behind support to do this properly
	/**
	 * Skip a match if it has a preceding dot
	 *
	 * This is used for `beginKeywords` to prevent matching expressions such as
	 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
	 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
	 * @param {RegExpMatchArray} match
	 * @param {CallbackResponse} response
	 */
	function skipIfhasPrecedingDot(match, response) {
	  const before = match.input[match.index - 1];
	  if (before === ".") {
	    response.ignoreMatch();
	  }
	}


	/**
	 * `beginKeywords` syntactic sugar
	 * @type {CompilerExt}
	 */
	function beginKeywords(mode, parent) {
	  if (!parent) return;
	  if (!mode.beginKeywords) return;

	  // for languages with keywords that include non-word characters checking for
	  // a word boundary is not sufficient, so instead we check for a word boundary
	  // or whitespace - this does no harm in any case since our keyword engine
	  // doesn't allow spaces in keywords anyways and we still check for the boundary
	  // first
	  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
	  mode.__beforeBegin = skipIfhasPrecedingDot;
	  mode.keywords = mode.keywords || mode.beginKeywords;
	  delete mode.beginKeywords;
	}

	/**
	 * Allow `illegal` to contain an array of illegal values
	 * @type {CompilerExt}
	 */
	function compileIllegal(mode, _parent) {
	  if (!Array.isArray(mode.illegal)) return;

	  mode.illegal = either(...mode.illegal);
	}

	/**
	 * `match` to match a single expression for readability
	 * @type {CompilerExt}
	 */
	function compileMatch(mode, _parent) {
	  if (!mode.match) return;
	  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

	  mode.begin = mode.match;
	  delete mode.match;
	}

	/**
	 * provides the default 1 relevance to all modes
	 * @type {CompilerExt}
	 */
	function compileRelevance(mode, _parent) {
	  // eslint-disable-next-line no-undefined
	  if (mode.relevance === undefined) mode.relevance = 1;
	}

	// keywords that should have no default relevance value
	const COMMON_KEYWORDS = [
	  'of',
	  'and',
	  'for',
	  'in',
	  'not',
	  'or',
	  'if',
	  'then',
	  'parent', // common variable name
	  'list', // common variable name
	  'value' // common variable name
	];

	/**
	 * Given raw keywords from a language definition, compile them.
	 *
	 * @param {string | Record<string,string>} rawKeywords
	 * @param {boolean} caseInsensitive
	 */
	function compileKeywords(rawKeywords, caseInsensitive) {
	  /** @type KeywordDict */
	  const compiledKeywords = {};

	  if (typeof rawKeywords === 'string') { // string
	    splitAndCompile('keyword', rawKeywords);
	  } else {
	    Object.keys(rawKeywords).forEach(function(className) {
	      splitAndCompile(className, rawKeywords[className]);
	    });
	  }
	  return compiledKeywords;

	  // ---

	  /**
	   * Compiles an individual list of keywords
	   *
	   * Ex: "for if when while|5"
	   *
	   * @param {string} className
	   * @param {string} keywordList
	   */
	  function splitAndCompile(className, keywordList) {
	    if (caseInsensitive) {
	      keywordList = keywordList.toLowerCase();
	    }
	    keywordList.split(' ').forEach(function(keyword) {
	      const pair = keyword.split('|');
	      compiledKeywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
	    });
	  }
	}

	/**
	 * Returns the proper score for a given keyword
	 *
	 * Also takes into account comment keywords, which will be scored 0 UNLESS
	 * another score has been manually assigned.
	 * @param {string} keyword
	 * @param {string} [providedScore]
	 */
	function scoreForKeyword(keyword, providedScore) {
	  // manual scores always win over common keywords
	  // so you can force a score of 1 if you really insist
	  if (providedScore) {
	    return Number(providedScore);
	  }

	  return commonKeyword(keyword) ? 0 : 1;
	}

	/**
	 * Determines if a given keyword is common or not
	 *
	 * @param {string} keyword */
	function commonKeyword(keyword) {
	  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
	}

	// compilation

	/**
	 * Compiles a language definition result
	 *
	 * Given the raw result of a language definition (Language), compiles this so
	 * that it is ready for highlighting code.
	 * @param {Language} language
	 * @param {{plugins: HLJSPlugin[]}} opts
	 * @returns {CompiledLanguage}
	 */
	function compileLanguage(language, { plugins }) {
	  /**
	   * Builds a regex with the case sensativility of the current language
	   *
	   * @param {RegExp | string} value
	   * @param {boolean} [global]
	   */
	  function langRe(value, global) {
	    return new RegExp(
	      source(value),
	      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	    );
	  }

	  /**
	    Stores multiple regular expressions and allows you to quickly search for
	    them all in a string simultaneously - returning the first match.  It does
	    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
	    and joined by `|` - using match groups to track position.  When a match is
	    found checking which position in the array has content allows us to figure
	    out which of the original regexes / match groups triggered the match.

	    The match object itself (the result of `Regex.exec`) is returned but also
	    enhanced by merging in any meta-data that was registered with the regex.
	    This is how we keep track of which mode matched, and what type of rule
	    (`illegal`, `begin`, end, etc).
	  */
	  class MultiRegex {
	    constructor() {
	      this.matchIndexes = {};
	      // @ts-ignore
	      this.regexes = [];
	      this.matchAt = 1;
	      this.position = 0;
	    }

	    // @ts-ignore
	    addRule(re, opts) {
	      opts.position = this.position++;
	      // @ts-ignore
	      this.matchIndexes[this.matchAt] = opts;
	      this.regexes.push([opts, re]);
	      this.matchAt += countMatchGroups(re) + 1;
	    }

	    compile() {
	      if (this.regexes.length === 0) {
	        // avoids the need to check length every time exec is called
	        // @ts-ignore
	        this.exec = () => null;
	      }
	      const terminators = this.regexes.map(el => el[1]);
	      this.matcherRe = langRe(join(terminators), true);
	      this.lastIndex = 0;
	    }

	    /** @param {string} s */
	    exec(s) {
	      this.matcherRe.lastIndex = this.lastIndex;
	      const match = this.matcherRe.exec(s);
	      if (!match) { return null; }

	      // eslint-disable-next-line no-undefined
	      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
	      // @ts-ignore
	      const matchData = this.matchIndexes[i];
	      // trim off any earlier non-relevant match groups (ie, the other regex
	      // match groups that make up the multi-matcher)
	      match.splice(0, i);

	      return Object.assign(match, matchData);
	    }
	  }

	  /*
	    Created to solve the key deficiently with MultiRegex - there is no way to
	    test for multiple matches at a single location.  Why would we need to do
	    that?  In the future a more dynamic engine will allow certain matches to be
	    ignored.  An example: if we matched say the 3rd regex in a large group but
	    decided to ignore it - we'd need to started testing again at the 4th
	    regex... but MultiRegex itself gives us no real way to do that.

	    So what this class creates MultiRegexs on the fly for whatever search
	    position they are needed.

	    NOTE: These additional MultiRegex objects are created dynamically.  For most
	    grammars most of the time we will never actually need anything more than the
	    first MultiRegex - so this shouldn't have too much overhead.

	    Say this is our search group, and we match regex3, but wish to ignore it.

	      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

	    What we need is a new MultiRegex that only includes the remaining
	    possibilities:

	      regex4 | regex5                               ' ie, startAt = 3

	    This class wraps all that complexity up in a simple API... `startAt` decides
	    where in the array of expressions to start doing the matching. It
	    auto-increments, so if a match is found at position 2, then startAt will be
	    set to 3.  If the end is reached startAt will return to 0.

	    MOST of the time the parser will be setting startAt manually to 0.
	  */
	  class ResumableMultiRegex {
	    constructor() {
	      // @ts-ignore
	      this.rules = [];
	      // @ts-ignore
	      this.multiRegexes = [];
	      this.count = 0;

	      this.lastIndex = 0;
	      this.regexIndex = 0;
	    }

	    // @ts-ignore
	    getMatcher(index) {
	      if (this.multiRegexes[index]) return this.multiRegexes[index];

	      const matcher = new MultiRegex();
	      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
	      matcher.compile();
	      this.multiRegexes[index] = matcher;
	      return matcher;
	    }

	    resumingScanAtSamePosition() {
	      return this.regexIndex !== 0;
	    }

	    considerAll() {
	      this.regexIndex = 0;
	    }

	    // @ts-ignore
	    addRule(re, opts) {
	      this.rules.push([re, opts]);
	      if (opts.type === "begin") this.count++;
	    }

	    /** @param {string} s */
	    exec(s) {
	      const m = this.getMatcher(this.regexIndex);
	      m.lastIndex = this.lastIndex;
	      let result = m.exec(s);

	      // The following is because we have no easy way to say "resume scanning at the
	      // existing position but also skip the current rule ONLY". What happens is
	      // all prior rules are also skipped which can result in matching the wrong
	      // thing. Example of matching "booger":

	      // our matcher is [string, "booger", number]
	      //
	      // ....booger....

	      // if "booger" is ignored then we'd really need a regex to scan from the
	      // SAME position for only: [string, number] but ignoring "booger" (if it
	      // was the first match), a simple resume would scan ahead who knows how
	      // far looking only for "number", ignoring potential string matches (or
	      // future "booger" matches that might be valid.)

	      // So what we do: We execute two matchers, one resuming at the same
	      // position, but the second full matcher starting at the position after:

	      //     /--- resume first regex match here (for [number])
	      //     |/---- full match here for [string, "booger", number]
	      //     vv
	      // ....booger....

	      // Which ever results in a match first is then used. So this 3-4 step
	      // process essentially allows us to say "match at this position, excluding
	      // a prior rule that was ignored".
	      //
	      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
	      // 2. Resume matching for [number]
	      // 3. Match at index + 1 for [string, "booger", number]
	      // 4. If #2 and #3 result in matches, which came first?
	      if (this.resumingScanAtSamePosition()) {
	        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
	          const m2 = this.getMatcher(0);
	          m2.lastIndex = this.lastIndex + 1;
	          result = m2.exec(s);
	        }
	      }

	      if (result) {
	        this.regexIndex += result.position + 1;
	        if (this.regexIndex === this.count) {
	          // wrap-around to considering all matches again
	          this.considerAll();
	        }
	      }

	      return result;
	    }
	  }

	  /**
	   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
	   * the content and find matches.
	   *
	   * @param {CompiledMode} mode
	   * @returns {ResumableMultiRegex}
	   */
	  function buildModeRegex(mode) {
	    const mm = new ResumableMultiRegex();

	    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

	    if (mode.terminatorEnd) {
	      mm.addRule(mode.terminatorEnd, { type: "end" });
	    }
	    if (mode.illegal) {
	      mm.addRule(mode.illegal, { type: "illegal" });
	    }

	    return mm;
	  }

	  /** skip vs abort vs ignore
	   *
	   * @skip   - The mode is still entered and exited normally (and contains rules apply),
	   *           but all content is held and added to the parent buffer rather than being
	   *           output when the mode ends.  Mostly used with `sublanguage` to build up
	   *           a single large buffer than can be parsed by sublanguage.
	   *
	   *             - The mode begin ands ends normally.
	   *             - Content matched is added to the parent mode buffer.
	   *             - The parser cursor is moved forward normally.
	   *
	   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
	   *           never matched) but DOES NOT continue to match subsequent `contains`
	   *           modes.  Abort is bad/suboptimal because it can result in modes
	   *           farther down not getting applied because an earlier rule eats the
	   *           content but then aborts.
	   *
	   *             - The mode does not begin.
	   *             - Content matched by `begin` is added to the mode buffer.
	   *             - The parser cursor is moved forward accordingly.
	   *
	   * @ignore - Ignores the mode (as if it never matched) and continues to match any
	   *           subsequent `contains` modes.  Ignore isn't technically possible with
	   *           the current parser implementation.
	   *
	   *             - The mode does not begin.
	   *             - Content matched by `begin` is ignored.
	   *             - The parser cursor is not moved forward.
	   */

	  /**
	   * Compiles an individual mode
	   *
	   * This can raise an error if the mode contains certain detectable known logic
	   * issues.
	   * @param {Mode} mode
	   * @param {CompiledMode | null} [parent]
	   * @returns {CompiledMode | never}
	   */
	  function compileMode(mode, parent) {
	    const cmode = /** @type CompiledMode */ (mode);
	    if (mode.compiled) return cmode;

	    [
	      // do this early so compiler extensions generally don't have to worry about
	      // the distinction between match/begin
	      compileMatch
	    ].forEach(ext => ext(mode, parent));

	    language.compilerExtensions.forEach(ext => ext(mode, parent));

	    // __beforeBegin is considered private API, internal use only
	    mode.__beforeBegin = null;

	    [
	      beginKeywords,
	      // do this later so compiler extensions that come earlier have access to the
	      // raw array if they wanted to perhaps manipulate it, etc.
	      compileIllegal,
	      // default to 1 relevance if not specified
	      compileRelevance
	    ].forEach(ext => ext(mode, parent));

	    mode.compiled = true;

	    let keywordPattern = null;
	    if (typeof mode.keywords === "object") {
	      keywordPattern = mode.keywords.$pattern;
	      delete mode.keywords.$pattern;
	    }

	    if (mode.keywords) {
	      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
	    }

	    // both are not allowed
	    if (mode.lexemes && keywordPattern) {
	      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
	    }

	    // `mode.lexemes` was the old standard before we added and now recommend
	    // using `keywords.$pattern` to pass the keyword pattern
	    keywordPattern = keywordPattern || mode.lexemes || /\w+/;
	    cmode.keywordPatternRe = langRe(keywordPattern, true);

	    if (parent) {
	      if (!mode.begin) mode.begin = /\B|\b/;
	      cmode.beginRe = langRe(mode.begin);
	      if (mode.endSameAsBegin) mode.end = mode.begin;
	      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
	      if (mode.end) cmode.endRe = langRe(mode.end);
	      cmode.terminatorEnd = source(mode.end) || '';
	      if (mode.endsWithParent && parent.terminatorEnd) {
	        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
	      }
	    }
	    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
	    if (!mode.contains) mode.contains = [];

	    mode.contains = [].concat(...mode.contains.map(function(c) {
	      return expandOrCloneMode(c === 'self' ? mode : c);
	    }));
	    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

	    if (mode.starts) {
	      compileMode(mode.starts, parent);
	    }

	    cmode.matcher = buildModeRegex(cmode);
	    return cmode;
	  }

	  if (!language.compilerExtensions) language.compilerExtensions = [];

	  // self is not valid at the top-level
	  if (language.contains && language.contains.includes('self')) {
	    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
	  }

	  // we need a null object, which inherit will guarantee
	  language.classNameAliases = inherit(language.classNameAliases || {});

	  return compileMode(/** @type Mode */ (language));
	}

	/**
	 * Determines if a mode has a dependency on it's parent or not
	 *
	 * If a mode does have a parent dependency then often we need to clone it if
	 * it's used in multiple places so that each copy points to the correct parent,
	 * where-as modes without a parent can often safely be re-used at the bottom of
	 * a mode chain.
	 *
	 * @param {Mode | null} mode
	 * @returns {boolean} - is there a dependency on the parent?
	 * */
	function dependencyOnParent(mode) {
	  if (!mode) return false;

	  return mode.endsWithParent || dependencyOnParent(mode.starts);
	}

	/**
	 * Expands a mode or clones it if necessary
	 *
	 * This is necessary for modes with parental dependenceis (see notes on
	 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
	 * exploded into their own individual modes at compile time.
	 *
	 * @param {Mode} mode
	 * @returns {Mode | Mode[]}
	 * */
	function expandOrCloneMode(mode) {
	  if (mode.variants && !mode.cachedVariants) {
	    mode.cachedVariants = mode.variants.map(function(variant) {
	      return inherit(mode, { variants: null }, variant);
	    });
	  }

	  // EXPAND
	  // if we have variants then essentially "replace" the mode with the variants
	  // this happens in compileMode, where this function is called from
	  if (mode.cachedVariants) {
	    return mode.cachedVariants;
	  }

	  // CLONE
	  // if we have dependencies on parents then we need a unique
	  // instance of ourselves, so we can be reused with many
	  // different parents without issue
	  if (dependencyOnParent(mode)) {
	    return inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null });
	  }

	  if (Object.isFrozen(mode)) {
	    return inherit(mode);
	  }

	  // no special dependency issues, just return ourselves
	  return mode;
	}

	var version$1 = "10.5.0";

	// @ts-nocheck

	function hasValueOrEmptyAttribute(value) {
	  return Boolean(value || value === "");
	}

	function BuildVuePlugin(hljs) {
	  const Component = {
	    props: ["language", "code", "autodetect"],
	    data: function() {
	      return {
	        detectedLanguage: "",
	        unknownLanguage: false
	      };
	    },
	    computed: {
	      className() {
	        if (this.unknownLanguage) return "";

	        return "hljs " + this.detectedLanguage;
	      },
	      highlighted() {
	        // no idea what language to use, return raw code
	        if (!this.autoDetect && !hljs.getLanguage(this.language)) {
	          console.warn(`The language "${this.language}" you specified could not be found.`);
	          this.unknownLanguage = true;
	          return escapeHTML(this.code);
	        }

	        let result = {};
	        if (this.autoDetect) {
	          result = hljs.highlightAuto(this.code);
	          this.detectedLanguage = result.language;
	        } else {
	          result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
	          this.detectedLanguage = this.language;
	        }
	        return result.value;
	      },
	      autoDetect() {
	        return !this.language || hasValueOrEmptyAttribute(this.autodetect);
	      },
	      ignoreIllegals() {
	        return true;
	      }
	    },
	    // this avoids needing to use a whole Vue compilation pipeline just
	    // to build Highlight.js
	    render(createElement) {
	      return createElement("pre", {}, [
	        createElement("code", {
	          class: this.className,
	          domProps: { innerHTML: this.highlighted }
	        })
	      ]);
	    }
	    // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`
	  };

	  const VuePlugin = {
	    install(Vue) {
	      Vue.component('highlightjs', Component);
	    }
	  };

	  return { Component, VuePlugin };
	}

	/* plugin itself */

	/** @type {HLJSPlugin} */
	const mergeHTMLPlugin = {
	  "after:highlightBlock": ({ block, result, text }) => {
	    const originalStream = nodeStream(block);
	    if (!originalStream.length) return;

	    const resultNode = document.createElement('div');
	    resultNode.innerHTML = result.value;
	    result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	  }
	};

	/* Stream merging support functions */

	/**
	 * @typedef Event
	 * @property {'start'|'stop'} event
	 * @property {number} offset
	 * @property {Node} node
	 */

	/**
	 * @param {Node} node
	 */
	function tag(node) {
	  return node.nodeName.toLowerCase();
	}

	/**
	 * @param {Node} node
	 */
	function nodeStream(node) {
	  /** @type Event[] */
	  const result = [];
	  (function _nodeStream(node, offset) {
	    for (let child = node.firstChild; child; child = child.nextSibling) {
	      if (child.nodeType === 3) {
	        offset += child.nodeValue.length;
	      } else if (child.nodeType === 1) {
	        result.push({
	          event: 'start',
	          offset: offset,
	          node: child
	        });
	        offset = _nodeStream(child, offset);
	        // Prevent void elements from having an end tag that would actually
	        // double them in the output. There are more void elements in HTML
	        // but we list only those realistically expected in code display.
	        if (!tag(child).match(/br|hr|img|input/)) {
	          result.push({
	            event: 'stop',
	            offset: offset,
	            node: child
	          });
	        }
	      }
	    }
	    return offset;
	  })(node, 0);
	  return result;
	}

	/**
	 * @param {any} original - the original stream
	 * @param {any} highlighted - stream of the highlighted source
	 * @param {string} value - the original source itself
	 */
	function mergeStreams(original, highlighted, value) {
	  let processed = 0;
	  let result = '';
	  const nodeStack = [];

	  function selectStream() {
	    if (!original.length || !highlighted.length) {
	      return original.length ? original : highlighted;
	    }
	    if (original[0].offset !== highlighted[0].offset) {
	      return (original[0].offset < highlighted[0].offset) ? original : highlighted;
	    }

	    /*
	    To avoid starting the stream just before it should stop the order is
	    ensured that original always starts first and closes last:

	    if (event1 == 'start' && event2 == 'start')
	      return original;
	    if (event1 == 'start' && event2 == 'stop')
	      return highlighted;
	    if (event1 == 'stop' && event2 == 'start')
	      return original;
	    if (event1 == 'stop' && event2 == 'stop')
	      return highlighted;

	    ... which is collapsed to:
	    */
	    return highlighted[0].event === 'start' ? original : highlighted;
	  }

	  /**
	   * @param {Node} node
	   */
	  function open(node) {
	    /** @param {Attr} attr */
	    function attributeString(attr) {
	      return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
	    }
	    // @ts-ignore
	    result += '<' + tag(node) + [].map.call(node.attributes, attributeString).join('') + '>';
	  }

	  /**
	   * @param {Node} node
	   */
	  function close(node) {
	    result += '</' + tag(node) + '>';
	  }

	  /**
	   * @param {Event} event
	   */
	  function render(event) {
	    (event.event === 'start' ? open : close)(event.node);
	  }

	  while (original.length || highlighted.length) {
	    let stream = selectStream();
	    result += escapeHTML(value.substring(processed, stream[0].offset));
	    processed = stream[0].offset;
	    if (stream === original) {
	      /*
	      On any opening or closing tag of the original markup we first close
	      the entire highlighted node stack, then render the original tag along
	      with all the following original tags at the same offset and then
	      reopen all the tags on the highlighted stack.
	      */
	      nodeStack.reverse().forEach(close);
	      do {
	        render(stream.splice(0, 1)[0]);
	        stream = selectStream();
	      } while (stream === original && stream.length && stream[0].offset === processed);
	      nodeStack.reverse().forEach(open);
	    } else {
	      if (stream[0].event === 'start') {
	        nodeStack.push(stream[0].node);
	      } else {
	        nodeStack.pop();
	      }
	      render(stream.splice(0, 1)[0]);
	    }
	  }
	  return result + escapeHTML(value.substr(processed));
	}

	/*

	For the reasoning behind this please see:
	https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

	*/

	/**
	 * @param {string} message
	 */
	const error = (message) => {
	  console.error(message);
	};

	/**
	 * @param {string} message
	 * @param {any} args
	 */
	const warn = (message, ...args) => {
	  console.log(`WARN: ${message}`, ...args);
	};

	/**
	 * @param {string} version
	 * @param {string} message
	 */
	const deprecated = (version, message) => {
	  console.log(`Deprecated as of ${version}. ${message}`);
	};

	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/

	const escape$1 = escapeHTML;
	const inherit$1 = inherit;
	const NO_MATCH = Symbol("nomatch");

	/**
	 * @param {any} hljs - object that is extended (legacy)
	 * @returns {HLJSApi}
	 */
	const HLJS = function(hljs) {
	  // Global internal variables used within the highlight.js library.
	  /** @type {Record<string, Language>} */
	  const languages = Object.create(null);
	  /** @type {Record<string, string>} */
	  const aliases = Object.create(null);
	  /** @type {HLJSPlugin[]} */
	  const plugins = [];

	  // safe/production mode - swallows more errors, tries to keep running
	  // even if a single syntax or parse hits a fatal error
	  let SAFE_MODE = true;
	  const fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
	  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
	  /** @type {Language} */
	  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

	  // Global options used when within external APIs. This is modified when
	  // calling the `hljs.configure` function.
	  /** @type HLJSOptions */
	  let options = {
	    noHighlightRe: /^(no-?highlight)$/i,
	    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: null,
	    // beta configuration options, subject to change, welcome to discuss
	    // https://github.com/highlightjs/highlight.js/issues/1086
	    __emitter: TokenTreeEmitter
	  };

	  /* Utility functions */

	  /**
	   * Tests a language name to see if highlighting should be skipped
	   * @param {string} languageName
	   */
	  function shouldNotHighlight(languageName) {
	    return options.noHighlightRe.test(languageName);
	  }

	  /**
	   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
	   */
	  function blockLanguage(block) {
	    let classes = block.className + ' ';

	    classes += block.parentNode ? block.parentNode.className : '';

	    // language-* takes precedence over non-prefixed class names.
	    const match = options.languageDetectRe.exec(classes);
	    if (match) {
	      const language = getLanguage(match[1]);
	      if (!language) {
	        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
	        warn("Falling back to no-highlight mode for this block.", block);
	      }
	      return language ? match[1] : 'no-highlight';
	    }

	    return classes
	      .split(/\s+/)
	      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
	  }

	  /**
	   * Core highlighting function.
	   *
	   * @param {string} languageName - the language to use for highlighting
	   * @param {string} code - the code to highlight
	   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
	   * @param {CompiledMode} [continuation] - current continuation mode, if any
	   *
	   * @returns {HighlightResult} Result - an object that represents the result
	   * @property {string} language - the language name
	   * @property {number} relevance - the relevance score
	   * @property {string} value - the highlighted HTML code
	   * @property {string} code - the original raw code
	   * @property {CompiledMode} top - top of the current mode stack
	   * @property {boolean} illegal - indicates whether any illegal matches were found
	  */
	  function highlight(languageName, code, ignoreIllegals, continuation) {
	    /** @type {BeforeHighlightContext} */
	    const context = {
	      code,
	      language: languageName
	    };
	    // the plugin can change the desired language or the code to be highlighted
	    // just be changing the object it was passed
	    fire("before:highlight", context);

	    // a before plugin can usurp the result completely by providing it's own
	    // in which case we don't even need to call highlight
	    const result = context.result ?
	      context.result :
	      _highlight(context.language, context.code, ignoreIllegals, continuation);

	    result.code = context.code;
	    // the plugin can change anything in result to suite it
	    fire("after:highlight", result);

	    return result;
	  }

	  /**
	   * private highlight that's used internally and does not fire callbacks
	   *
	   * @param {string} languageName - the language to use for highlighting
	   * @param {string} code - the code to highlight
	   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
	   * @param {CompiledMode} [continuation] - current continuation mode, if any
	   * @returns {HighlightResult} - result of the highlight operation
	  */
	  function _highlight(languageName, code, ignoreIllegals, continuation) {
	    const codeToHighlight = code;

	    /**
	     * Return keyword data if a match is a keyword
	     * @param {CompiledMode} mode - current mode
	     * @param {RegExpMatchArray} match - regexp match data
	     * @returns {KeywordData | false}
	     */
	    function keywordData(mode, match) {
	      const matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
	    }

	    function processKeywords() {
	      if (!top.keywords) {
	        emitter.addText(modeBuffer);
	        return;
	      }

	      let lastIndex = 0;
	      top.keywordPatternRe.lastIndex = 0;
	      let match = top.keywordPatternRe.exec(modeBuffer);
	      let buf = "";

	      while (match) {
	        buf += modeBuffer.substring(lastIndex, match.index);
	        const data = keywordData(top, match);
	        if (data) {
	          const [kind, keywordRelevance] = data;
	          emitter.addText(buf);
	          buf = "";

	          relevance += keywordRelevance;
	          const cssClass = language.classNameAliases[kind] || kind;
	          emitter.addKeyword(match[0], cssClass);
	        } else {
	          buf += match[0];
	        }
	        lastIndex = top.keywordPatternRe.lastIndex;
	        match = top.keywordPatternRe.exec(modeBuffer);
	      }
	      buf += modeBuffer.substr(lastIndex);
	      emitter.addText(buf);
	    }

	    function processSubLanguage() {
	      if (modeBuffer === "") return;
	      /** @type HighlightResult */
	      let result = null;

	      if (typeof top.subLanguage === 'string') {
	        if (!languages[top.subLanguage]) {
	          emitter.addText(modeBuffer);
	          return;
	        }
	        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
	        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result.top);
	      } else {
	        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
	      }

	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Use case in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      emitter.addSublanguage(result.emitter, result.language);
	    }

	    function processBuffer() {
	      if (top.subLanguage != null) {
	        processSubLanguage();
	      } else {
	        processKeywords();
	      }
	      modeBuffer = '';
	    }

	    /**
	     * @param {Mode} mode - new mode to start
	     */
	    function startNewMode(mode) {
	      if (mode.className) {
	        emitter.openNode(language.classNameAliases[mode.className] || mode.className);
	      }
	      top = Object.create(mode, { parent: { value: top } });
	      return top;
	    }

	    /**
	     * @param {CompiledMode } mode - the mode to potentially end
	     * @param {RegExpMatchArray} match - the latest match
	     * @param {string} matchPlusRemainder - match plus remainder of content
	     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
	     */
	    function endOfMode(mode, match, matchPlusRemainder) {
	      let matched = startsWith(mode.endRe, matchPlusRemainder);

	      if (matched) {
	        if (mode["on:end"]) {
	          const resp = new Response(mode);
	          mode["on:end"](match, resp);
	          if (resp.ignore) matched = false;
	        }

	        if (matched) {
	          while (mode.endsParent && mode.parent) {
	            mode = mode.parent;
	          }
	          return mode;
	        }
	      }
	      // even if on:end fires an `ignore` it's still possible
	      // that we might trigger the end node because of a parent mode
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, match, matchPlusRemainder);
	      }
	    }

	    /**
	     * Handle matching but then ignoring a sequence of text
	     *
	     * @param {string} lexeme - string containing full match text
	     */
	    function doIgnore(lexeme) {
	      if (top.matcher.regexIndex === 0) {
	        // no more regexs to potentially match here, so we move the cursor forward one
	        // space
	        modeBuffer += lexeme[0];
	        return 1;
	      } else {
	        // no need to move the cursor, we still have additional regexes to try and
	        // match at this very spot
	        resumeScanAtSamePosition = true;
	        return 0;
	      }
	    }

	    /**
	     * Handle the start of a new potential mode match
	     *
	     * @param {EnhancedMatch} match - the current match
	     * @returns {number} how far to advance the parse cursor
	     */
	    function doBeginMatch(match) {
	      const lexeme = match[0];
	      const newMode = match.rule;

	      const resp = new Response(newMode);
	      // first internal before callbacks, then the public ones
	      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
	      for (const cb of beforeCallbacks) {
	        if (!cb) continue;
	        cb(match, resp);
	        if (resp.ignore) return doIgnore(lexeme);
	      }

	      if (newMode && newMode.endSameAsBegin) {
	        newMode.endRe = escape(lexeme);
	      }

	      if (newMode.skip) {
	        modeBuffer += lexeme;
	      } else {
	        if (newMode.excludeBegin) {
	          modeBuffer += lexeme;
	        }
	        processBuffer();
	        if (!newMode.returnBegin && !newMode.excludeBegin) {
	          modeBuffer = lexeme;
	        }
	      }
	      startNewMode(newMode);
	      // if (mode["after:begin"]) {
	      //   let resp = new Response(mode);
	      //   mode["after:begin"](match, resp);
	      // }
	      return newMode.returnBegin ? 0 : lexeme.length;
	    }

	    /**
	     * Handle the potential end of mode
	     *
	     * @param {RegExpMatchArray} match - the current match
	     */
	    function doEndMatch(match) {
	      const lexeme = match[0];
	      const matchPlusRemainder = codeToHighlight.substr(match.index);

	      const endMode = endOfMode(top, match, matchPlusRemainder);
	      if (!endMode) { return NO_MATCH; }

	      const origin = top;
	      if (origin.skip) {
	        modeBuffer += lexeme;
	      } else {
	        if (!(origin.returnEnd || origin.excludeEnd)) {
	          modeBuffer += lexeme;
	        }
	        processBuffer();
	        if (origin.excludeEnd) {
	          modeBuffer = lexeme;
	        }
	      }
	      do {
	        if (top.className) {
	          emitter.closeNode();
	        }
	        if (!top.skip && !top.subLanguage) {
	          relevance += top.relevance;
	        }
	        top = top.parent;
	      } while (top !== endMode.parent);
	      if (endMode.starts) {
	        if (endMode.endSameAsBegin) {
	          endMode.starts.endRe = endMode.endRe;
	        }
	        startNewMode(endMode.starts);
	      }
	      return origin.returnEnd ? 0 : lexeme.length;
	    }

	    function processContinuations() {
	      const list = [];
	      for (let current = top; current !== language; current = current.parent) {
	        if (current.className) {
	          list.unshift(current.className);
	        }
	      }
	      list.forEach(item => emitter.openNode(item));
	    }

	    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
	    let lastMatch = {};

	    /**
	     *  Process an individual match
	     *
	     * @param {string} textBeforeMatch - text preceeding the match (since the last match)
	     * @param {EnhancedMatch} [match] - the match itself
	     */
	    function processLexeme(textBeforeMatch, match) {
	      const lexeme = match && match[0];

	      // add non-matched text to the current mode buffer
	      modeBuffer += textBeforeMatch;

	      if (lexeme == null) {
	        processBuffer();
	        return 0;
	      }

	      // we've found a 0 width match and we're stuck, so we need to advance
	      // this happens when we have badly behaved rules that have optional matchers to the degree that
	      // sometimes they can end up matching nothing at all
	      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
	      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
	        // spit the "skipped" character that our regex choked on back into the output sequence
	        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
	        if (!SAFE_MODE) {
	          /** @type {AnnotatedError} */
	          const err = new Error('0 width match regex');
	          err.languageName = languageName;
	          err.badRule = lastMatch.rule;
	          throw err;
	        }
	        return 1;
	      }
	      lastMatch = match;

	      if (match.type === "begin") {
	        return doBeginMatch(match);
	      } else if (match.type === "illegal" && !ignoreIllegals) {
	        // illegal match, we do not continue processing
	        /** @type {AnnotatedError} */
	        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
	        err.mode = top;
	        throw err;
	      } else if (match.type === "end") {
	        const processed = doEndMatch(match);
	        if (processed !== NO_MATCH) {
	          return processed;
	        }
	      }

	      // edge case for when illegal matches $ (end of line) which is technically
	      // a 0 width match but not a begin/end match so it's not caught by the
	      // first handler (when ignoreIllegals is true)
	      if (match.type === "illegal" && lexeme === "") {
	        // advance so we aren't stuck in an infinite loop
	        return 1;
	      }

	      // infinite loops are BAD, this is a last ditch catch all. if we have a
	      // decent number of iterations yet our index (cursor position in our
	      // parsing) still 3x behind our index then something is very wrong
	      // so we bail
	      if (iterations > 100000 && iterations > match.index * 3) {
	        const err = new Error('potential infinite loop, way more iterations than matches');
	        throw err;
	      }

	      /*
	      Why might be find ourselves here?  Only one occasion now.  An end match that was
	      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
	      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
	      being used to scan the text isn't recompiled that means that any match that LOOKS like
	      the end (but is not, because it is not an exact match to the beginning) will
	      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
	      the end rule and fails to match, we wind up here, and just silently ignore the end.

	      This causes no real harm other than stopping a few times too many.
	      */

	      modeBuffer += lexeme;
	      return lexeme.length;
	    }

	    const language = getLanguage(languageName);
	    if (!language) {
	      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
	      throw new Error('Unknown language: "' + languageName + '"');
	    }

	    const md = compileLanguage(language, { plugins });
	    let result = '';
	    /** @type {CompiledMode} */
	    let top = continuation || md;
	    /** @type Record<string,CompiledMode> */
	    const continuations = {}; // keep continuations for sub-languages
	    const emitter = new options.__emitter(options);
	    processContinuations();
	    let modeBuffer = '';
	    let relevance = 0;
	    let index = 0;
	    let iterations = 0;
	    let resumeScanAtSamePosition = false;

	    try {
	      top.matcher.considerAll();

	      for (;;) {
	        iterations++;
	        if (resumeScanAtSamePosition) {
	          // only regexes not matched previously will now be
	          // considered for a potential match
	          resumeScanAtSamePosition = false;
	        } else {
	          top.matcher.considerAll();
	        }
	        top.matcher.lastIndex = index;

	        const match = top.matcher.exec(codeToHighlight);
	        // console.log("match", match[0], match.rule && match.rule.begin)

	        if (!match) break;

	        const beforeMatch = codeToHighlight.substring(index, match.index);
	        const processedCount = processLexeme(beforeMatch, match);
	        index = match.index + processedCount;
	      }
	      processLexeme(codeToHighlight.substr(index));
	      emitter.closeAllNodes();
	      emitter.finalize();
	      result = emitter.toHTML();

	      return {
	        relevance: relevance,
	        value: result,
	        language: languageName,
	        illegal: false,
	        emitter: emitter,
	        top: top
	      };
	    } catch (err) {
	      if (err.message && err.message.includes('Illegal')) {
	        return {
	          illegal: true,
	          illegalBy: {
	            msg: err.message,
	            context: codeToHighlight.slice(index - 100, index + 100),
	            mode: err.mode
	          },
	          sofar: result,
	          relevance: 0,
	          value: escape$1(codeToHighlight),
	          emitter: emitter
	        };
	      } else if (SAFE_MODE) {
	        return {
	          illegal: false,
	          relevance: 0,
	          value: escape$1(codeToHighlight),
	          emitter: emitter,
	          language: languageName,
	          top: top,
	          errorRaised: err
	        };
	      } else {
	        throw err;
	      }
	    }
	  }

	  /**
	   * returns a valid highlight result, without actually doing any actual work,
	   * auto highlight starts with this and it's possible for small snippets that
	   * auto-detection may not find a better match
	   * @param {string} code
	   * @returns {HighlightResult}
	   */
	  function justTextHighlightResult(code) {
	    const result = {
	      relevance: 0,
	      emitter: new options.__emitter(options),
	      value: escape$1(code),
	      illegal: false,
	      top: PLAINTEXT_LANGUAGE
	    };
	    result.emitter.addText(code);
	    return result;
	  }

	  /**
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:

	  - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)

	    @param {string} code
	    @param {Array<string>} [languageSubset]
	    @returns {AutoHighlightResult}
	  */
	  function highlightAuto(code, languageSubset) {
	    languageSubset = languageSubset || options.languages || Object.keys(languages);
	    const plaintext = justTextHighlightResult(code);

	    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
	      _highlight(name, code, false)
	    );
	    results.unshift(plaintext); // plaintext is always an option

	    const sorted = results.sort((a, b) => {
	      // sort base on relevance
	      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

	      // always award the tie to the base language
	      // ie if C++ and Arduino are tied, it's more likely to be C++
	      if (a.language && b.language) {
	        if (getLanguage(a.language).supersetOf === b.language) {
	          return 1;
	        } else if (getLanguage(b.language).supersetOf === a.language) {
	          return -1;
	        }
	      }

	      // otherwise say they are equal, which has the effect of sorting on
	      // relevance while preserving the original ordering - which is how ties
	      // have historically been settled, ie the language that comes first always
	      // wins in the case of a tie
	      return 0;
	    });

	    const [best, secondBest] = sorted;

	    /** @type {AutoHighlightResult} */
	    const result = best;
	    result.second_best = secondBest;

	    return result;
	  }

	  /**
	  Post-processing of the highlighted markup:

	  - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers

	    @param {string} html
	    @returns {string}
	  */
	  function fixMarkup(html) {
	    if (!(options.tabReplace || options.useBR)) {
	      return html;
	    }

	    return html.replace(fixMarkupRe, match => {
	      if (match === '\n') {
	        return options.useBR ? '<br>' : match;
	      } else if (options.tabReplace) {
	        return match.replace(/\t/g, options.tabReplace);
	      }
	      return match;
	    });
	  }

	  /**
	   * Builds new class name for block given the language name
	   *
	   * @param {HTMLElement} element
	   * @param {string} [currentLang]
	   * @param {string} [resultLang]
	   */
	  function updateClassName(element, currentLang, resultLang) {
	    const language = currentLang ? aliases[currentLang] : resultLang;

	    element.classList.add("hljs");
	    if (language) element.classList.add(language);
	  }

	  /** @type {HLJSPlugin} */
	  const brPlugin = {
	    "before:highlightBlock": ({ block }) => {
	      if (options.useBR) {
	        block.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
	      }
	    },
	    "after:highlightBlock": ({ result }) => {
	      if (options.useBR) {
	        result.value = result.value.replace(/\n/g, "<br>");
	      }
	    }
	  };

	  const TAB_REPLACE_RE = /^(<[^>]+>|\t)+/gm;
	  /** @type {HLJSPlugin} */
	  const tabReplacePlugin = {
	    "after:highlightBlock": ({ result }) => {
	      if (options.tabReplace) {
	        result.value = result.value.replace(TAB_REPLACE_RE, (m) =>
	          m.replace(/\t/g, options.tabReplace)
	        );
	      }
	    }
	  };

	  /**
	   * Applies highlighting to a DOM node containing code. Accepts a DOM node and
	   * two optional parameters for fixMarkup.
	   *
	   * @param {HighlightedHTMLElement} element - the HTML element to highlight
	  */
	  function highlightBlock(element) {
	    /** @type HTMLElement */
	    let node = null;
	    const language = blockLanguage(element);

	    if (shouldNotHighlight(language)) return;

	    fire("before:highlightBlock",
	      { block: element, language: language });

	    node = element;
	    const text = node.textContent;
	    const result = language ? highlight(language, text, true) : highlightAuto(text);

	    fire("after:highlightBlock", { block: element, result, text });

	    element.innerHTML = result.value;
	    updateClassName(element, language, result.language);
	    element.result = {
	      language: result.language,
	      // TODO: remove with version 11.0
	      re: result.relevance,
	      relavance: result.relevance
	    };
	    if (result.second_best) {
	      element.second_best = {
	        language: result.second_best.language,
	        // TODO: remove with version 11.0
	        re: result.second_best.relevance,
	        relavance: result.second_best.relevance
	      };
	    }
	  }

	  /**
	   * Updates highlight.js global options with the passed options
	   *
	   * @param {Partial<HLJSOptions>} userOptions
	   */
	  function configure(userOptions) {
	    if (userOptions.useBR) {
	      deprecated("10.3.0", "'useBR' will be removed entirely in v11.0");
	      deprecated("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
	    }
	    options = inherit$1(options, userOptions);
	  }

	  /**
	   * Highlights to all <pre><code> blocks on a page
	   *
	   * @type {Function & {called?: boolean}}
	   */
	  const initHighlighting = () => {
	    if (initHighlighting.called) return;
	    initHighlighting.called = true;

	    const blocks = document.querySelectorAll('pre code');
	    blocks.forEach(highlightBlock);
	  };

	  // Higlights all when DOMContentLoaded fires
	  function initHighlightingOnLoad() {
	    // @ts-ignore
	    window.addEventListener('DOMContentLoaded', initHighlighting, false);
	  }

	  /**
	   * Register a language grammar module
	   *
	   * @param {string} languageName
	   * @param {LanguageFn} languageDefinition
	   */
	  function registerLanguage(languageName, languageDefinition) {
	    let lang = null;
	    try {
	      lang = languageDefinition(hljs);
	    } catch (error$1) {
	      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
	      // hard or soft error
	      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
	      // languages that have serious errors are replaced with essentially a
	      // "plaintext" stand-in so that the code blocks will still get normal
	      // css classes applied to them - and one bad language won't break the
	      // entire highlighter
	      lang = PLAINTEXT_LANGUAGE;
	    }
	    // give it a temporary name if it doesn't have one in the meta-data
	    if (!lang.name) lang.name = languageName;
	    languages[languageName] = lang;
	    lang.rawDefinition = languageDefinition.bind(null, hljs);

	    if (lang.aliases) {
	      registerAliases(lang.aliases, { languageName });
	    }
	  }

	  /**
	   * @returns {string[]} List of language internal names
	   */
	  function listLanguages() {
	    return Object.keys(languages);
	  }

	  /**
	    intended usage: When one language truly requires another

	    Unlike `getLanguage`, this will throw when the requested language
	    is not available.

	    @param {string} name - name of the language to fetch/require
	    @returns {Language | never}
	  */
	  function requireLanguage(name) {
	    deprecated("10.4.0", "requireLanguage will be removed entirely in v11.");
	    deprecated("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");

	    const lang = getLanguage(name);
	    if (lang) { return lang; }

	    const err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
	    throw err;
	  }

	  /**
	   * @param {string} name - name of the language to retrieve
	   * @returns {Language | undefined}
	   */
	  function getLanguage(name) {
	    name = (name || '').toLowerCase();
	    return languages[name] || languages[aliases[name]];
	  }

	  /**
	   *
	   * @param {string|string[]} aliasList - single alias or list of aliases
	   * @param {{languageName: string}} opts
	   */
	  function registerAliases(aliasList, { languageName }) {
	    if (typeof aliasList === 'string') {
	      aliasList = [aliasList];
	    }
	    aliasList.forEach(alias => { aliases[alias] = languageName; });
	  }

	  /**
	   * Determines if a given language has auto-detection enabled
	   * @param {string} name - name of the language
	   */
	  function autoDetection(name) {
	    const lang = getLanguage(name);
	    return lang && !lang.disableAutodetect;
	  }

	  /**
	   * @param {HLJSPlugin} plugin
	   */
	  function addPlugin(plugin) {
	    plugins.push(plugin);
	  }

	  /**
	   *
	   * @param {PluginEvent} event
	   * @param {any} args
	   */
	  function fire(event, args) {
	    const cb = event;
	    plugins.forEach(function(plugin) {
	      if (plugin[cb]) {
	        plugin[cb](args);
	      }
	    });
	  }

	  /**
	  Note: fixMarkup is deprecated and will be removed entirely in v11

	  @param {string} arg
	  @returns {string}
	  */
	  function deprecateFixMarkup(arg) {
	    deprecated("10.2.0", "fixMarkup will be removed entirely in v11.0");
	    deprecated("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534");

	    return fixMarkup(arg);
	  }

	  /* Interface definition */
	  Object.assign(hljs, {
	    highlight,
	    highlightAuto,
	    fixMarkup: deprecateFixMarkup,
	    highlightBlock,
	    configure,
	    initHighlighting,
	    initHighlightingOnLoad,
	    registerLanguage,
	    listLanguages,
	    getLanguage,
	    registerAliases,
	    requireLanguage,
	    autoDetection,
	    inherit: inherit$1,
	    addPlugin,
	    // plugins for frameworks
	    vuePlugin: BuildVuePlugin(hljs).VuePlugin
	  });

	  hljs.debugMode = function() { SAFE_MODE = false; };
	  hljs.safeMode = function() { SAFE_MODE = true; };
	  hljs.versionString = version$1;

	  for (const key in MODES) {
	    // @ts-ignore
	    if (typeof MODES[key] === "object") {
	      // @ts-ignore
	      deepFreezeEs6(MODES[key]);
	    }
	  }

	  // merge all the modes/regexs into our main object
	  Object.assign(hljs, MODES);

	  // built-in plugins, likely to be moved out of core in the future
	  hljs.addPlugin(brPlugin); // slated to be removed in v11
	  hljs.addPlugin(mergeHTMLPlugin);
	  hljs.addPlugin(tabReplacePlugin);
	  return hljs;
	};

	// export an "instance" of the highlighter
	var highlight = HLJS({});

	var core = highlight;

	/*
	Language: CSS
	Category: common, css
	Website: https://developer.mozilla.org/en-US/docs/Web/CSS
	*/
	/** @type LanguageFn */
	function css(hljs) {
	  var FUNCTION_LIKE = {
	    begin: /[\w-]+\(/, returnBegin: true,
	    contains: [
	      {
	        className: 'built_in',
	        begin: /[\w-]+/
	      },
	      {
	        begin: /\(/, end: /\)/,
	        contains: [
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.CSS_NUMBER_MODE,
	        ]
	      }
	    ]
	  };
	  var ATTRIBUTE = {
	    className: 'attribute',
	    begin: /\S/, end: ':', excludeEnd: true,
	    starts: {
	      endsWithParent: true, excludeEnd: true,
	      contains: [
	        FUNCTION_LIKE,
	        hljs.CSS_NUMBER_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.APOS_STRING_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        {
	          className: 'number', begin: '#[0-9A-Fa-f]+'
	        },
	        {
	          className: 'meta', begin: '!important'
	        }
	      ]
	    }
	  };
	  var AT_IDENTIFIER = '@[a-z-]+'; // @font-face
	  var AT_MODIFIERS = "and or not only";
	  var AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var RULE = {
	    begin: /([*]\s?)?(?:[A-Z_.\-\\]+|--[a-zA-Z0-9_-]+)\s*(\/\*\*\/)?:/, returnBegin: true, end: ';', endsWithParent: true,
	    contains: [
	      ATTRIBUTE
	    ]
	  };

	  return {
	    name: 'CSS',
	    case_insensitive: true,
	    illegal: /[=|'\$]/,
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
	      },
	      {
	        className: 'selector-class', begin: '\\.' + IDENT_RE
	      },
	      {
	        className: 'selector-attr',
	        begin: /\[/, end: /\]/,
	        illegal: '$',
	        contains: [
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	        ]
	      },
	      {
	        className: 'selector-pseudo',
	        begin: /:(:)?[a-zA-Z0-9_+()"'.-]+/
	      },
	      // matching these here allows us to treat them more like regular CSS
	      // rules so everything between the {} gets regular rule highlighting,
	      // which is what we want for page and font-face
	      {
	        begin: '@(page|font-face)',
	        lexemes: AT_IDENTIFIER,
	        keywords: '@page @font-face'
	      },
	      {
	        begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
	                                 // because it doesn’t let it to be parsed as
	                                 // a rule set but instead drops parser into
	                                 // the default mode which is how it should be.
	        illegal: /:/, // break on Less variables @var: ...
	        returnBegin: true,
	        contains: [
	          {
	            className: 'keyword',
	            begin: AT_PROPERTY_RE
	          },
	          {
	            begin: /\s/, endsWithParent: true, excludeEnd: true,
	            relevance: 0,
	            keywords: AT_MODIFIERS,
	            contains: [
	              {
	                begin: /[a-z-]+:/,
	                className:"attribute"
	              },
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.CSS_NUMBER_MODE
	            ]
	          }
	        ]
	      },
	      {
	        className: 'selector-tag', begin: IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: /\{/, end: /\}/,
	        illegal: /\S/,
	        contains: [
	          hljs.C_BLOCK_COMMENT_MODE,
	          { begin: /;/ }, // empty ; rule
	          RULE,
	        ]
	      }
	    ]
	  };
	}

	var css_1 = css;

	/**
	 * @param {string} value
	 * @returns {RegExp}
	 * */
	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function source$1(re) {
	  if (!re) return null;
	  if (typeof re === "string") return re;

	  return re.source;
	}

	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function lookahead(re) {
	  return concat$1('(?=', re, ')');
	}

	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function optional(re) {
	  return concat$1('(', re, ')?');
	}

	/**
	 * @param {...(RegExp | string) } args
	 * @returns {string}
	 */
	function concat$1(...args) {
	  const joined = args.map((x) => source$1(x)).join("");
	  return joined;
	}

	/**
	 * Any of the passed expresssions may match
	 *
	 * Creates a huge this | this | that | that match
	 * @param {(RegExp | string)[] } args
	 * @returns {string}
	 */
	function either$1(...args) {
	  const joined = '(' + args.map((x) => source$1(x)).join("|") + ")";
	  return joined;
	}

	/*
	Language: HTML, XML
	Website: https://www.w3.org/XML/
	Category: common
	Audit: 2020
	*/

	/** @type LanguageFn */
	function xml(hljs) {
	  // Element names can contain letters, digits, hyphens, underscores, and periods
	  const TAG_NAME_RE = concat$1(/[A-Z_]/, optional(/[A-Z0-9_.-]+:/), /[A-Z0-9_.-]*/);
	  const XML_IDENT_RE = /[A-Za-z0-9._:-]+/;
	  const XML_ENTITIES = {
	    className: 'symbol',
	    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
	  };
	  const XML_META_KEYWORDS = {
	    begin: /\s/,
	    contains: [
	      {
	        className: 'meta-keyword',
	        begin: /#?[a-z_][a-z1-9_-]+/,
	        illegal: /\n/
	      }
	    ]
	  };
	  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
	    begin: /\(/,
	    end: /\)/
	  });
	  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
	    className: 'meta-string'
	  });
	  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
	    className: 'meta-string'
	  });
	  const TAG_INTERNALS = {
	    endsWithParent: true,
	    illegal: /</,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr',
	        begin: XML_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: /=\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'string',
	            endsParent: true,
	            variants: [
	              {
	                begin: /"/,
	                end: /"/,
	                contains: [ XML_ENTITIES ]
	              },
	              {
	                begin: /'/,
	                end: /'/,
	                contains: [ XML_ENTITIES ]
	              },
	              {
	                begin: /[^\s"'=<>`]+/
	              }
	            ]
	          }
	        ]
	      }
	    ]
	  };
	  return {
	    name: 'HTML, XML',
	    aliases: [
	      'html',
	      'xhtml',
	      'rss',
	      'atom',
	      'xjb',
	      'xsd',
	      'xsl',
	      'plist',
	      'wsf',
	      'svg'
	    ],
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'meta',
	        begin: /<![a-z]/,
	        end: />/,
	        relevance: 10,
	        contains: [
	          XML_META_KEYWORDS,
	          QUOTE_META_STRING_MODE,
	          APOS_META_STRING_MODE,
	          XML_META_PAR_KEYWORDS,
	          {
	            begin: /\[/,
	            end: /\]/,
	            contains: [
	              {
	                className: 'meta',
	                begin: /<![a-z]/,
	                end: />/,
	                contains: [
	                  XML_META_KEYWORDS,
	                  XML_META_PAR_KEYWORDS,
	                  QUOTE_META_STRING_MODE,
	                  APOS_META_STRING_MODE
	                ]
	              }
	            ]
	          }
	        ]
	      },
	      hljs.COMMENT(
	        /<!--/,
	        /-->/,
	        {
	          relevance: 10
	        }
	      ),
	      {
	        begin: /<!\[CDATA\[/,
	        end: /\]\]>/,
	        relevance: 10
	      },
	      XML_ENTITIES,
	      {
	        className: 'meta',
	        begin: /<\?xml/,
	        end: /\?>/,
	        relevance: 10
	      },
	      {
	        className: 'tag',
	        /*
	        The lookahead pattern (?=...) ensures that 'begin' only matches
	        '<style' as a single word, followed by a whitespace or an
	        ending braket. The '$' is needed for the lexeme to be recognized
	        by hljs.subMode() that tests lexemes outside the stream.
	        */
	        begin: /<style(?=\s|>)/,
	        end: />/,
	        keywords: {
	          name: 'style'
	        },
	        contains: [ TAG_INTERNALS ],
	        starts: {
	          end: /<\/style>/,
	          returnEnd: true,
	          subLanguage: [
	            'css',
	            'xml'
	          ]
	        }
	      },
	      {
	        className: 'tag',
	        // See the comment in the <style tag about the lookahead pattern
	        begin: /<script(?=\s|>)/,
	        end: />/,
	        keywords: {
	          name: 'script'
	        },
	        contains: [ TAG_INTERNALS ],
	        starts: {
	          end: /<\/script>/,
	          returnEnd: true,
	          subLanguage: [
	            'javascript',
	            'handlebars',
	            'xml'
	          ]
	        }
	      },
	      // we need this for now for jSX
	      {
	        className: 'tag',
	        begin: /<>|<\/>/
	      },
	      // open tag
	      {
	        className: 'tag',
	        begin: concat$1(
	          /</,
	          lookahead(concat$1(
	            TAG_NAME_RE,
	            // <tag/>
	            // <tag>
	            // <tag ...
	            either$1(/\/>/, />/, /\s/)
	          ))
	        ),
	        end: /\/?>/,
	        contains: [
	          {
	            className: 'name',
	            begin: TAG_NAME_RE,
	            relevance: 0,
	            starts: TAG_INTERNALS
	          }
	        ]
	      },
	      // close tag
	      {
	        className: 'tag',
	        begin: concat$1(
	          /<\//,
	          lookahead(concat$1(
	            TAG_NAME_RE, />/
	          ))
	        ),
	        contains: [
	          {
	            className: 'name',
	            begin: TAG_NAME_RE,
	            relevance: 0
	          },
	          {
	            begin: />/,
	            relevance: 0
	          }
	        ]
	      }
	    ]
	  };
	}

	var xml_1 = xml;

	/**
	 * @param {string} value
	 * @returns {RegExp}
	 * */
	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function source$2(re) {
	  if (!re) return null;
	  if (typeof re === "string") return re;

	  return re.source;
	}

	/**
	 * @param {...(RegExp | string) } args
	 * @returns {string}
	 */
	function concat$2(...args) {
	  const joined = args.map((x) => source$2(x)).join("");
	  return joined;
	}

	/*
	Language: Markdown
	Requires: xml.js
	Author: John Crepezzi <john.crepezzi@gmail.com>
	Website: https://daringfireball.net/projects/markdown/
	Category: common, markup
	*/

	function markdown(hljs) {
	  const INLINE_HTML = {
	    begin: /<\/?[A-Za-z_]/,
	    end: '>',
	    subLanguage: 'xml',
	    relevance: 0
	  };
	  const HORIZONTAL_RULE = {
	    begin: '^[-\\*]{3,}',
	    end: '$'
	  };
	  const CODE = {
	    className: 'code',
	    variants: [
	      // TODO: fix to allow these to work with sublanguage also
	      {
	        begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*'
	      },
	      {
	        begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*'
	      },
	      // needed to allow markdown as a sublanguage to work
	      {
	        begin: '```',
	        end: '```+[ ]*$'
	      },
	      {
	        begin: '~~~',
	        end: '~~~+[ ]*$'
	      },
	      {
	        begin: '`.+?`'
	      },
	      {
	        begin: '(?=^( {4}|\\t))',
	        // use contains to gobble up multiple lines to allow the block to be whatever size
	        // but only have a single open/close tag vs one per line
	        contains: [
	          {
	            begin: '^( {4}|\\t)',
	            end: '(\\n)$'
	          }
	        ],
	        relevance: 0
	      }
	    ]
	  };
	  const LIST = {
	    className: 'bullet',
	    begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
	    end: '\\s+',
	    excludeEnd: true
	  };
	  const LINK_REFERENCE = {
	    begin: /^\[[^\n]+\]:/,
	    returnBegin: true,
	    contains: [
	      {
	        className: 'symbol',
	        begin: /\[/,
	        end: /\]/,
	        excludeBegin: true,
	        excludeEnd: true
	      },
	      {
	        className: 'link',
	        begin: /:\s*/,
	        end: /$/,
	        excludeBegin: true
	      }
	    ]
	  };
	  const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
	  const LINK = {
	    variants: [
	      // too much like nested array access in so many languages
	      // to have any real relevance
	      {
	        begin: /\[.+?\]\[.*?\]/,
	        relevance: 0
	      },
	      // popular internet URLs
	      {
	        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
	        relevance: 2
	      },
	      {
	        begin: concat$2(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
	        relevance: 2
	      },
	      // relative urls
	      {
	        begin: /\[.+?\]\([./?&#].*?\)/,
	        relevance: 1
	      },
	      // whatever else, lower relevance (might not be a link at all)
	      {
	        begin: /\[.+?\]\(.*?\)/,
	        relevance: 0
	      }
	    ],
	    returnBegin: true,
	    contains: [
	      {
	        className: 'string',
	        relevance: 0,
	        begin: '\\[',
	        end: '\\]',
	        excludeBegin: true,
	        returnEnd: true
	      },
	      {
	        className: 'link',
	        relevance: 0,
	        begin: '\\]\\(',
	        end: '\\)',
	        excludeBegin: true,
	        excludeEnd: true
	      },
	      {
	        className: 'symbol',
	        relevance: 0,
	        begin: '\\]\\[',
	        end: '\\]',
	        excludeBegin: true,
	        excludeEnd: true
	      }
	    ]
	  };
	  const BOLD = {
	    className: 'strong',
	    contains: [],
	    variants: [
	      {
	        begin: /_{2}/,
	        end: /_{2}/
	      },
	      {
	        begin: /\*{2}/,
	        end: /\*{2}/
	      }
	    ]
	  };
	  const ITALIC = {
	    className: 'emphasis',
	    contains: [],
	    variants: [
	      {
	        begin: /\*(?!\*)/,
	        end: /\*/
	      },
	      {
	        begin: /_(?!_)/,
	        end: /_/,
	        relevance: 0
	      }
	    ]
	  };
	  BOLD.contains.push(ITALIC);
	  ITALIC.contains.push(BOLD);

	  let CONTAINABLE = [
	    INLINE_HTML,
	    LINK
	  ];

	  BOLD.contains = BOLD.contains.concat(CONTAINABLE);
	  ITALIC.contains = ITALIC.contains.concat(CONTAINABLE);

	  CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);

	  const HEADER = {
	    className: 'section',
	    variants: [
	      {
	        begin: '^#{1,6}',
	        end: '$',
	        contains: CONTAINABLE
	      },
	      {
	        begin: '(?=^.+?\\n[=-]{2,}$)',
	        contains: [
	          {
	            begin: '^[=-]*$'
	          },
	          {
	            begin: '^',
	            end: "\\n",
	            contains: CONTAINABLE
	          }
	        ]
	      }
	    ]
	  };

	  const BLOCKQUOTE = {
	    className: 'quote',
	    begin: '^>\\s+',
	    contains: CONTAINABLE,
	    end: '$'
	  };

	  return {
	    name: 'Markdown',
	    aliases: [
	      'md',
	      'mkdown',
	      'mkd'
	    ],
	    contains: [
	      HEADER,
	      INLINE_HTML,
	      LIST,
	      BOLD,
	      ITALIC,
	      BLOCKQUOTE,
	      CODE,
	      HORIZONTAL_RULE,
	      LINK,
	      LINK_REFERENCE
	    ]
	  };
	}

	var markdown_1 = markdown;

	const IDENT_RE$1 = '[A-Za-z$_][0-9A-Za-z$_]*';
	const KEYWORDS = [
	  "as", // for exports
	  "in",
	  "of",
	  "if",
	  "for",
	  "while",
	  "finally",
	  "var",
	  "new",
	  "function",
	  "do",
	  "return",
	  "void",
	  "else",
	  "break",
	  "catch",
	  "instanceof",
	  "with",
	  "throw",
	  "case",
	  "default",
	  "try",
	  "switch",
	  "continue",
	  "typeof",
	  "delete",
	  "let",
	  "yield",
	  "const",
	  "class",
	  // JS handles these with a special rule
	  // "get",
	  // "set",
	  "debugger",
	  "async",
	  "await",
	  "static",
	  "import",
	  "from",
	  "export",
	  "extends"
	];
	const LITERALS = [
	  "true",
	  "false",
	  "null",
	  "undefined",
	  "NaN",
	  "Infinity"
	];

	const TYPES = [
	  "Intl",
	  "DataView",
	  "Number",
	  "Math",
	  "Date",
	  "String",
	  "RegExp",
	  "Object",
	  "Function",
	  "Boolean",
	  "Error",
	  "Symbol",
	  "Set",
	  "Map",
	  "WeakSet",
	  "WeakMap",
	  "Proxy",
	  "Reflect",
	  "JSON",
	  "Promise",
	  "Float64Array",
	  "Int16Array",
	  "Int32Array",
	  "Int8Array",
	  "Uint16Array",
	  "Uint32Array",
	  "Float32Array",
	  "Array",
	  "Uint8Array",
	  "Uint8ClampedArray",
	  "ArrayBuffer"
	];

	const ERROR_TYPES = [
	  "EvalError",
	  "InternalError",
	  "RangeError",
	  "ReferenceError",
	  "SyntaxError",
	  "TypeError",
	  "URIError"
	];

	const BUILT_IN_GLOBALS = [
	  "setInterval",
	  "setTimeout",
	  "clearInterval",
	  "clearTimeout",

	  "require",
	  "exports",

	  "eval",
	  "isFinite",
	  "isNaN",
	  "parseFloat",
	  "parseInt",
	  "decodeURI",
	  "decodeURIComponent",
	  "encodeURI",
	  "encodeURIComponent",
	  "escape",
	  "unescape"
	];

	const BUILT_IN_VARIABLES = [
	  "arguments",
	  "this",
	  "super",
	  "console",
	  "window",
	  "document",
	  "localStorage",
	  "module",
	  "global" // Node.js
	];

	const BUILT_INS = [].concat(
	  BUILT_IN_GLOBALS,
	  BUILT_IN_VARIABLES,
	  TYPES,
	  ERROR_TYPES
	);

	/**
	 * @param {string} value
	 * @returns {RegExp}
	 * */

	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function source$3(re) {
	  if (!re) return null;
	  if (typeof re === "string") return re;

	  return re.source;
	}

	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function lookahead$1(re) {
	  return concat$3('(?=', re, ')');
	}

	/**
	 * @param {...(RegExp | string) } args
	 * @returns {string}
	 */
	function concat$3(...args) {
	  const joined = args.map((x) => source$3(x)).join("");
	  return joined;
	}

	/*
	Language: JavaScript
	Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
	Category: common, scripting
	Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
	*/

	/** @type LanguageFn */
	function javascript(hljs) {
	  /**
	   * Takes a string like "<Booger" and checks to see
	   * if we can find a matching "</Booger" later in the
	   * content.
	   * @param {RegExpMatchArray} match
	   * @param {{after:number}} param1
	   */
	  const hasClosingTag = (match, { after }) => {
	    const tag = "</" + match[0].slice(1);
	    const pos = match.input.indexOf(tag, after);
	    return pos !== -1;
	  };

	  const IDENT_RE$1$1 = IDENT_RE$1;
	  const FRAGMENT = {
	    begin: '<>',
	    end: '</>'
	  };
	  const XML_TAG = {
	    begin: /<[A-Za-z0-9\\._:-]+/,
	    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
	    /**
	     * @param {RegExpMatchArray} match
	     * @param {CallbackResponse} response
	     */
	    isTrulyOpeningTag: (match, response) => {
	      const afterMatchIndex = match[0].length + match.index;
	      const nextChar = match.input[afterMatchIndex];
	      // nested type?
	      // HTML should not include another raw `<` inside a tag
	      // But a type might: `<Array<Array<number>>`, etc.
	      if (nextChar === "<") {
	        response.ignoreMatch();
	        return;
	      }
	      // <something>
	      // This is now either a tag or a type.
	      if (nextChar === ">") {
	        // if we cannot find a matching closing tag, then we
	        // will ignore it
	        if (!hasClosingTag(match, { after: afterMatchIndex })) {
	          response.ignoreMatch();
	        }
	      }
	    }
	  };
	  const KEYWORDS$1 = {
	    $pattern: IDENT_RE$1,
	    keyword: KEYWORDS.join(" "),
	    literal: LITERALS.join(" "),
	    built_in: BUILT_INS.join(" ")
	  };

	  // https://tc39.es/ecma262/#sec-literals-numeric-literals
	  const decimalDigits = '[0-9](_?[0-9])*';
	  const frac = `\\.(${decimalDigits})`;
	  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
	  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
	  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
	  const NUMBER = {
	    className: 'number',
	    variants: [
	      // DecimalLiteral
	      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
	        `[eE][+-]?(${decimalDigits})\\b` },
	      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

	      // DecimalBigIntegerLiteral
	      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

	      // NonDecimalIntegerLiteral
	      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
	      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
	      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

	      // LegacyOctalIntegerLiteral (does not include underscore separators)
	      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
	      { begin: "\\b0[0-7]+n?\\b" },
	    ],
	    relevance: 0
	  };

	  const SUBST = {
	    className: 'subst',
	    begin: '\\$\\{',
	    end: '\\}',
	    keywords: KEYWORDS$1,
	    contains: [] // defined later
	  };
	  const HTML_TEMPLATE = {
	    begin: 'html`',
	    end: '',
	    starts: {
	      end: '`',
	      returnEnd: false,
	      contains: [
	        hljs.BACKSLASH_ESCAPE,
	        SUBST
	      ],
	      subLanguage: 'xml'
	    }
	  };
	  const CSS_TEMPLATE = {
	    begin: 'css`',
	    end: '',
	    starts: {
	      end: '`',
	      returnEnd: false,
	      contains: [
	        hljs.BACKSLASH_ESCAPE,
	        SUBST
	      ],
	      subLanguage: 'css'
	    }
	  };
	  const TEMPLATE_STRING = {
	    className: 'string',
	    begin: '`',
	    end: '`',
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      SUBST
	    ]
	  };
	  const JSDOC_COMMENT = hljs.COMMENT(
	    /\/\*\*(?!\/)/,
	    '\\*/',
	    {
	      relevance: 0,
	      contains: [
	        {
	          className: 'doctag',
	          begin: '@[A-Za-z]+',
	          contains: [
	            {
	              className: 'type',
	              begin: '\\{',
	              end: '\\}',
	              relevance: 0
	            },
	            {
	              className: 'variable',
	              begin: IDENT_RE$1$1 + '(?=\\s*(-)|$)',
	              endsParent: true,
	              relevance: 0
	            },
	            // eat spaces (not newlines) so we can find
	            // types or variables
	            {
	              begin: /(?=[^\n])\s/,
	              relevance: 0
	            }
	          ]
	        }
	      ]
	    }
	  );
	  const COMMENT = {
	    className: "comment",
	    variants: [
	      JSDOC_COMMENT,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_LINE_COMMENT_MODE
	    ]
	  };
	  const SUBST_INTERNALS = [
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE,
	    HTML_TEMPLATE,
	    CSS_TEMPLATE,
	    TEMPLATE_STRING,
	    NUMBER,
	    hljs.REGEXP_MODE
	  ];
	  SUBST.contains = SUBST_INTERNALS
	    .concat({
	      // we need to pair up {} inside our subst to prevent
	      // it from ending too early by matching another }
	      begin: /\{/,
	      end: /\}/,
	      keywords: KEYWORDS$1,
	      contains: [
	        "self"
	      ].concat(SUBST_INTERNALS)
	    });
	  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
	  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
	    // eat recursive parens in sub expressions
	    {
	      begin: /\(/,
	      end: /\)/,
	      keywords: KEYWORDS$1,
	      contains: ["self"].concat(SUBST_AND_COMMENTS)
	    }
	  ]);
	  const PARAMS = {
	    className: 'params',
	    begin: /\(/,
	    end: /\)/,
	    excludeBegin: true,
	    excludeEnd: true,
	    keywords: KEYWORDS$1,
	    contains: PARAMS_CONTAINS
	  };

	  return {
	    name: 'Javascript',
	    aliases: ['js', 'jsx', 'mjs', 'cjs'],
	    keywords: KEYWORDS$1,
	    // this will be extended by TypeScript
	    exports: { PARAMS_CONTAINS },
	    illegal: /#(?![$_A-z])/,
	    contains: [
	      hljs.SHEBANG({
	        label: "shebang",
	        binary: "node",
	        relevance: 5
	      }),
	      {
	        label: "use_strict",
	        className: 'meta',
	        relevance: 10,
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      HTML_TEMPLATE,
	      CSS_TEMPLATE,
	      TEMPLATE_STRING,
	      COMMENT,
	      NUMBER,
	      { // object attr container
	        begin: concat$3(/[{,\n]\s*/,
	          // we need to look ahead to make sure that we actually have an
	          // attribute coming up so we don't steal a comma from a potential
	          // "value" container
	          //
	          // NOTE: this might not work how you think.  We don't actually always
	          // enter this mode and stay.  Instead it might merely match `,
	          // <comments up next>` and then immediately end after the , because it
	          // fails to find any actual attrs. But this still does the job because
	          // it prevents the value contain rule from grabbing this instead and
	          // prevening this rule from firing when we actually DO have keys.
	          lookahead$1(concat$3(
	            // we also need to allow for multiple possible comments inbetween
	            // the first key:value pairing
	            /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
	            IDENT_RE$1$1 + '\\s*:'))),
	        relevance: 0,
	        contains: [
	          {
	            className: 'attr',
	            begin: IDENT_RE$1$1 + lookahead$1('\\s*:'),
	            relevance: 0
	          }
	        ]
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          COMMENT,
	          hljs.REGEXP_MODE,
	          {
	            className: 'function',
	            // we have to count the parens to make sure we actually have the
	            // correct bounding ( ) before the =>.  There could be any number of
	            // sub-expressions inside also surrounded by parens.
	            begin: '(\\(' +
	            '[^()]*(\\(' +
	            '[^()]*(\\(' +
	            '[^()]*' +
	            '\\)[^()]*)*' +
	            '\\)[^()]*)*' +
	            '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
	            returnBegin: true,
	            end: '\\s*=>',
	            contains: [
	              {
	                className: 'params',
	                variants: [
	                  {
	                    begin: hljs.UNDERSCORE_IDENT_RE,
	                    relevance: 0
	                  },
	                  {
	                    className: null,
	                    begin: /\(\s*\)/,
	                    skip: true
	                  },
	                  {
	                    begin: /\(/,
	                    end: /\)/,
	                    excludeBegin: true,
	                    excludeEnd: true,
	                    keywords: KEYWORDS$1,
	                    contains: PARAMS_CONTAINS
	                  }
	                ]
	              }
	            ]
	          },
	          { // could be a comma delimited list of params to a function call
	            begin: /,/, relevance: 0
	          },
	          {
	            className: '',
	            begin: /\s/,
	            end: /\s*/,
	            skip: true
	          },
	          { // JSX
	            variants: [
	              { begin: FRAGMENT.begin, end: FRAGMENT.end },
	              {
	                begin: XML_TAG.begin,
	                // we carefully check the opening tag to see if it truly
	                // is a tag and not a false positive
	                'on:begin': XML_TAG.isTrulyOpeningTag,
	                end: XML_TAG.end
	              }
	            ],
	            subLanguage: 'xml',
	            contains: [
	              {
	                begin: XML_TAG.begin,
	                end: XML_TAG.end,
	                skip: true,
	                contains: ['self']
	              }
	            ]
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function',
	        end: /[{;]/,
	        excludeEnd: true,
	        keywords: KEYWORDS$1,
	        contains: [
	          'self',
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1 }),
	          PARAMS
	        ],
	        illegal: /%/
	      },
	      {
	        // prevent this from getting swallowed up by function
	        // since they appear "function like"
	        beginKeywords: "while if switch catch for"
	      },
	      {
	        className: 'function',
	        // we have to count the parens to make sure we actually have the correct
	        // bounding ( ).  There could be any number of sub-expressions inside
	        // also surrounded by parens.
	        begin: hljs.UNDERSCORE_IDENT_RE +
	          '\\(' + // first parens
	          '[^()]*(\\(' +
	            '[^()]*(\\(' +
	              '[^()]*' +
	            '\\)[^()]*)*' +
	          '\\)[^()]*)*' +
	          '\\)\\s*\\{', // end parens
	        returnBegin:true,
	        contains: [
	          PARAMS,
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1 }),
	        ]
	      },
	      // hack: prevents detection of keywords in some circumstances
	      // .keyword()
	      // $keyword = x
	      {
	        variants: [
	          { begin: '\\.' + IDENT_RE$1$1 },
	          { begin: '\\$' + IDENT_RE$1$1 }
	        ],
	        relevance: 0
	      },
	      { // ES6 class
	        className: 'class',
	        beginKeywords: 'class',
	        end: /[{;=]/,
	        excludeEnd: true,
	        illegal: /[:"[\]]/,
	        contains: [
	          { beginKeywords: 'extends' },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        begin: /\b(?=constructor)/,
	        end: /[{;]/,
	        excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1 }),
	          'self',
	          PARAMS
	        ]
	      },
	      {
	        begin: '(get|set)\\s+(?=' + IDENT_RE$1$1 + '\\()',
	        end: /\{/,
	        keywords: "get set",
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1 }),
	          { begin: /\(\)/ }, // eat to avoid empty params
	          PARAMS
	        ]
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      }
	    ]
	  };
	}

	var javascript_1 = javascript;

	/*
	Language: JSON
	Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
	Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
	Website: http://www.json.org
	Category: common, protocols
	*/
	function json(hljs) {
	  const LITERALS = {
	    literal: 'true false null'
	  };
	  const ALLOWED_COMMENTS = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE
	  ];
	  const TYPES = [
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	  ];
	  const VALUE_CONTAINER = {
	    end: ',',
	    endsWithParent: true,
	    excludeEnd: true,
	    contains: TYPES,
	    keywords: LITERALS
	  };
	  const OBJECT = {
	    begin: /\{/,
	    end: /\}/,
	    contains: [
	      {
	        className: 'attr',
	        begin: /"/,
	        end: /"/,
	        contains: [hljs.BACKSLASH_ESCAPE],
	        illegal: '\\n'
	      },
	      hljs.inherit(VALUE_CONTAINER, {
	        begin: /:/
	      })
	    ].concat(ALLOWED_COMMENTS),
	    illegal: '\\S'
	  };
	  const ARRAY = {
	    begin: '\\[',
	    end: '\\]',
	    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
	    illegal: '\\S'
	  };
	  TYPES.push(OBJECT, ARRAY);
	  ALLOWED_COMMENTS.forEach(function(rule) {
	    TYPES.push(rule);
	  });
	  return {
	    name: 'JSON',
	    contains: TYPES,
	    keywords: LITERALS,
	    illegal: '\\S'
	  };
	}

	var json_1 = json;

	/*
	Language: Plain text
	Author: Egor Rogov (e.rogov@postgrespro.ru)
	Description: Plain text without any highlighting.
	Category: common
	*/
	function plaintext(hljs) {
	  return {
	    name: 'Plain text',
	    aliases: [
	      'text',
	      'txt'
	    ],
	    disableAutodetect: true
	  };
	}

	var plaintext_1 = plaintext;

	const IDENT_RE$2 = '[A-Za-z$_][0-9A-Za-z$_]*';
	const KEYWORDS$1 = [
	  "as", // for exports
	  "in",
	  "of",
	  "if",
	  "for",
	  "while",
	  "finally",
	  "var",
	  "new",
	  "function",
	  "do",
	  "return",
	  "void",
	  "else",
	  "break",
	  "catch",
	  "instanceof",
	  "with",
	  "throw",
	  "case",
	  "default",
	  "try",
	  "switch",
	  "continue",
	  "typeof",
	  "delete",
	  "let",
	  "yield",
	  "const",
	  "class",
	  // JS handles these with a special rule
	  // "get",
	  // "set",
	  "debugger",
	  "async",
	  "await",
	  "static",
	  "import",
	  "from",
	  "export",
	  "extends"
	];
	const LITERALS$1 = [
	  "true",
	  "false",
	  "null",
	  "undefined",
	  "NaN",
	  "Infinity"
	];

	const TYPES$1 = [
	  "Intl",
	  "DataView",
	  "Number",
	  "Math",
	  "Date",
	  "String",
	  "RegExp",
	  "Object",
	  "Function",
	  "Boolean",
	  "Error",
	  "Symbol",
	  "Set",
	  "Map",
	  "WeakSet",
	  "WeakMap",
	  "Proxy",
	  "Reflect",
	  "JSON",
	  "Promise",
	  "Float64Array",
	  "Int16Array",
	  "Int32Array",
	  "Int8Array",
	  "Uint16Array",
	  "Uint32Array",
	  "Float32Array",
	  "Array",
	  "Uint8Array",
	  "Uint8ClampedArray",
	  "ArrayBuffer"
	];

	const ERROR_TYPES$1 = [
	  "EvalError",
	  "InternalError",
	  "RangeError",
	  "ReferenceError",
	  "SyntaxError",
	  "TypeError",
	  "URIError"
	];

	const BUILT_IN_GLOBALS$1 = [
	  "setInterval",
	  "setTimeout",
	  "clearInterval",
	  "clearTimeout",

	  "require",
	  "exports",

	  "eval",
	  "isFinite",
	  "isNaN",
	  "parseFloat",
	  "parseInt",
	  "decodeURI",
	  "decodeURIComponent",
	  "encodeURI",
	  "encodeURIComponent",
	  "escape",
	  "unescape"
	];

	const BUILT_IN_VARIABLES$1 = [
	  "arguments",
	  "this",
	  "super",
	  "console",
	  "window",
	  "document",
	  "localStorage",
	  "module",
	  "global" // Node.js
	];

	const BUILT_INS$1 = [].concat(
	  BUILT_IN_GLOBALS$1,
	  BUILT_IN_VARIABLES$1,
	  TYPES$1,
	  ERROR_TYPES$1
	);

	/**
	 * @param {string} value
	 * @returns {RegExp}
	 * */

	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function source$4(re) {
	  if (!re) return null;
	  if (typeof re === "string") return re;

	  return re.source;
	}

	/**
	 * @param {RegExp | string } re
	 * @returns {string}
	 */
	function lookahead$2(re) {
	  return concat$4('(?=', re, ')');
	}

	/**
	 * @param {...(RegExp | string) } args
	 * @returns {string}
	 */
	function concat$4(...args) {
	  const joined = args.map((x) => source$4(x)).join("");
	  return joined;
	}

	/*
	Language: JavaScript
	Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
	Category: common, scripting
	Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
	*/

	/** @type LanguageFn */
	function javascript$1(hljs) {
	  /**
	   * Takes a string like "<Booger" and checks to see
	   * if we can find a matching "</Booger" later in the
	   * content.
	   * @param {RegExpMatchArray} match
	   * @param {{after:number}} param1
	   */
	  const hasClosingTag = (match, { after }) => {
	    const tag = "</" + match[0].slice(1);
	    const pos = match.input.indexOf(tag, after);
	    return pos !== -1;
	  };

	  const IDENT_RE$1 = IDENT_RE$2;
	  const FRAGMENT = {
	    begin: '<>',
	    end: '</>'
	  };
	  const XML_TAG = {
	    begin: /<[A-Za-z0-9\\._:-]+/,
	    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
	    /**
	     * @param {RegExpMatchArray} match
	     * @param {CallbackResponse} response
	     */
	    isTrulyOpeningTag: (match, response) => {
	      const afterMatchIndex = match[0].length + match.index;
	      const nextChar = match.input[afterMatchIndex];
	      // nested type?
	      // HTML should not include another raw `<` inside a tag
	      // But a type might: `<Array<Array<number>>`, etc.
	      if (nextChar === "<") {
	        response.ignoreMatch();
	        return;
	      }
	      // <something>
	      // This is now either a tag or a type.
	      if (nextChar === ">") {
	        // if we cannot find a matching closing tag, then we
	        // will ignore it
	        if (!hasClosingTag(match, { after: afterMatchIndex })) {
	          response.ignoreMatch();
	        }
	      }
	    }
	  };
	  const KEYWORDS$1$1 = {
	    $pattern: IDENT_RE$2,
	    keyword: KEYWORDS$1.join(" "),
	    literal: LITERALS$1.join(" "),
	    built_in: BUILT_INS$1.join(" ")
	  };

	  // https://tc39.es/ecma262/#sec-literals-numeric-literals
	  const decimalDigits = '[0-9](_?[0-9])*';
	  const frac = `\\.(${decimalDigits})`;
	  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
	  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
	  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
	  const NUMBER = {
	    className: 'number',
	    variants: [
	      // DecimalLiteral
	      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
	        `[eE][+-]?(${decimalDigits})\\b` },
	      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

	      // DecimalBigIntegerLiteral
	      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

	      // NonDecimalIntegerLiteral
	      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
	      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
	      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

	      // LegacyOctalIntegerLiteral (does not include underscore separators)
	      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
	      { begin: "\\b0[0-7]+n?\\b" },
	    ],
	    relevance: 0
	  };

	  const SUBST = {
	    className: 'subst',
	    begin: '\\$\\{',
	    end: '\\}',
	    keywords: KEYWORDS$1$1,
	    contains: [] // defined later
	  };
	  const HTML_TEMPLATE = {
	    begin: 'html`',
	    end: '',
	    starts: {
	      end: '`',
	      returnEnd: false,
	      contains: [
	        hljs.BACKSLASH_ESCAPE,
	        SUBST
	      ],
	      subLanguage: 'xml'
	    }
	  };
	  const CSS_TEMPLATE = {
	    begin: 'css`',
	    end: '',
	    starts: {
	      end: '`',
	      returnEnd: false,
	      contains: [
	        hljs.BACKSLASH_ESCAPE,
	        SUBST
	      ],
	      subLanguage: 'css'
	    }
	  };
	  const TEMPLATE_STRING = {
	    className: 'string',
	    begin: '`',
	    end: '`',
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      SUBST
	    ]
	  };
	  const JSDOC_COMMENT = hljs.COMMENT(
	    /\/\*\*(?!\/)/,
	    '\\*/',
	    {
	      relevance: 0,
	      contains: [
	        {
	          className: 'doctag',
	          begin: '@[A-Za-z]+',
	          contains: [
	            {
	              className: 'type',
	              begin: '\\{',
	              end: '\\}',
	              relevance: 0
	            },
	            {
	              className: 'variable',
	              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
	              endsParent: true,
	              relevance: 0
	            },
	            // eat spaces (not newlines) so we can find
	            // types or variables
	            {
	              begin: /(?=[^\n])\s/,
	              relevance: 0
	            }
	          ]
	        }
	      ]
	    }
	  );
	  const COMMENT = {
	    className: "comment",
	    variants: [
	      JSDOC_COMMENT,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_LINE_COMMENT_MODE
	    ]
	  };
	  const SUBST_INTERNALS = [
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE,
	    HTML_TEMPLATE,
	    CSS_TEMPLATE,
	    TEMPLATE_STRING,
	    NUMBER,
	    hljs.REGEXP_MODE
	  ];
	  SUBST.contains = SUBST_INTERNALS
	    .concat({
	      // we need to pair up {} inside our subst to prevent
	      // it from ending too early by matching another }
	      begin: /\{/,
	      end: /\}/,
	      keywords: KEYWORDS$1$1,
	      contains: [
	        "self"
	      ].concat(SUBST_INTERNALS)
	    });
	  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
	  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
	    // eat recursive parens in sub expressions
	    {
	      begin: /\(/,
	      end: /\)/,
	      keywords: KEYWORDS$1$1,
	      contains: ["self"].concat(SUBST_AND_COMMENTS)
	    }
	  ]);
	  const PARAMS = {
	    className: 'params',
	    begin: /\(/,
	    end: /\)/,
	    excludeBegin: true,
	    excludeEnd: true,
	    keywords: KEYWORDS$1$1,
	    contains: PARAMS_CONTAINS
	  };

	  return {
	    name: 'Javascript',
	    aliases: ['js', 'jsx', 'mjs', 'cjs'],
	    keywords: KEYWORDS$1$1,
	    // this will be extended by TypeScript
	    exports: { PARAMS_CONTAINS },
	    illegal: /#(?![$_A-z])/,
	    contains: [
	      hljs.SHEBANG({
	        label: "shebang",
	        binary: "node",
	        relevance: 5
	      }),
	      {
	        label: "use_strict",
	        className: 'meta',
	        relevance: 10,
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      HTML_TEMPLATE,
	      CSS_TEMPLATE,
	      TEMPLATE_STRING,
	      COMMENT,
	      NUMBER,
	      { // object attr container
	        begin: concat$4(/[{,\n]\s*/,
	          // we need to look ahead to make sure that we actually have an
	          // attribute coming up so we don't steal a comma from a potential
	          // "value" container
	          //
	          // NOTE: this might not work how you think.  We don't actually always
	          // enter this mode and stay.  Instead it might merely match `,
	          // <comments up next>` and then immediately end after the , because it
	          // fails to find any actual attrs. But this still does the job because
	          // it prevents the value contain rule from grabbing this instead and
	          // prevening this rule from firing when we actually DO have keys.
	          lookahead$2(concat$4(
	            // we also need to allow for multiple possible comments inbetween
	            // the first key:value pairing
	            /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
	            IDENT_RE$1 + '\\s*:'))),
	        relevance: 0,
	        contains: [
	          {
	            className: 'attr',
	            begin: IDENT_RE$1 + lookahead$2('\\s*:'),
	            relevance: 0
	          }
	        ]
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          COMMENT,
	          hljs.REGEXP_MODE,
	          {
	            className: 'function',
	            // we have to count the parens to make sure we actually have the
	            // correct bounding ( ) before the =>.  There could be any number of
	            // sub-expressions inside also surrounded by parens.
	            begin: '(\\(' +
	            '[^()]*(\\(' +
	            '[^()]*(\\(' +
	            '[^()]*' +
	            '\\)[^()]*)*' +
	            '\\)[^()]*)*' +
	            '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
	            returnBegin: true,
	            end: '\\s*=>',
	            contains: [
	              {
	                className: 'params',
	                variants: [
	                  {
	                    begin: hljs.UNDERSCORE_IDENT_RE,
	                    relevance: 0
	                  },
	                  {
	                    className: null,
	                    begin: /\(\s*\)/,
	                    skip: true
	                  },
	                  {
	                    begin: /\(/,
	                    end: /\)/,
	                    excludeBegin: true,
	                    excludeEnd: true,
	                    keywords: KEYWORDS$1$1,
	                    contains: PARAMS_CONTAINS
	                  }
	                ]
	              }
	            ]
	          },
	          { // could be a comma delimited list of params to a function call
	            begin: /,/, relevance: 0
	          },
	          {
	            className: '',
	            begin: /\s/,
	            end: /\s*/,
	            skip: true
	          },
	          { // JSX
	            variants: [
	              { begin: FRAGMENT.begin, end: FRAGMENT.end },
	              {
	                begin: XML_TAG.begin,
	                // we carefully check the opening tag to see if it truly
	                // is a tag and not a false positive
	                'on:begin': XML_TAG.isTrulyOpeningTag,
	                end: XML_TAG.end
	              }
	            ],
	            subLanguage: 'xml',
	            contains: [
	              {
	                begin: XML_TAG.begin,
	                end: XML_TAG.end,
	                skip: true,
	                contains: ['self']
	              }
	            ]
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function',
	        end: /[{;]/,
	        excludeEnd: true,
	        keywords: KEYWORDS$1$1,
	        contains: [
	          'self',
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
	          PARAMS
	        ],
	        illegal: /%/
	      },
	      {
	        // prevent this from getting swallowed up by function
	        // since they appear "function like"
	        beginKeywords: "while if switch catch for"
	      },
	      {
	        className: 'function',
	        // we have to count the parens to make sure we actually have the correct
	        // bounding ( ).  There could be any number of sub-expressions inside
	        // also surrounded by parens.
	        begin: hljs.UNDERSCORE_IDENT_RE +
	          '\\(' + // first parens
	          '[^()]*(\\(' +
	            '[^()]*(\\(' +
	              '[^()]*' +
	            '\\)[^()]*)*' +
	          '\\)[^()]*)*' +
	          '\\)\\s*\\{', // end parens
	        returnBegin:true,
	        contains: [
	          PARAMS,
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
	        ]
	      },
	      // hack: prevents detection of keywords in some circumstances
	      // .keyword()
	      // $keyword = x
	      {
	        variants: [
	          { begin: '\\.' + IDENT_RE$1 },
	          { begin: '\\$' + IDENT_RE$1 }
	        ],
	        relevance: 0
	      },
	      { // ES6 class
	        className: 'class',
	        beginKeywords: 'class',
	        end: /[{;=]/,
	        excludeEnd: true,
	        illegal: /[:"[\]]/,
	        contains: [
	          { beginKeywords: 'extends' },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        begin: /\b(?=constructor)/,
	        end: /[{;]/,
	        excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
	          'self',
	          PARAMS
	        ]
	      },
	      {
	        begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
	        end: /\{/,
	        keywords: "get set",
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
	          { begin: /\(\)/ }, // eat to avoid empty params
	          PARAMS
	        ]
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      }
	    ]
	  };
	}

	/*
	Language: TypeScript
	Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
	Contributors: Ike Ku <dempfi@yahoo.com>
	Description: TypeScript is a strict superset of JavaScript
	Website: https://www.typescriptlang.org
	Category: common, scripting
	*/

	/** @type LanguageFn */
	function typescript(hljs) {
	  const IDENT_RE$1 = IDENT_RE$2;
	  const NAMESPACE = {
	    beginKeywords: 'namespace', end: /\{/, excludeEnd: true
	  };
	  const INTERFACE = {
	    beginKeywords: 'interface', end: /\{/, excludeEnd: true,
	    keywords: 'interface extends'
	  };
	  const USE_STRICT = {
	    className: 'meta',
	    relevance: 10,
	    begin: /^\s*['"]use strict['"]/
	  };
	  const TYPES = [
	    "any",
	    "void",
	    "number",
	    "boolean",
	    "string",
	    "object",
	    "never",
	    "enum"
	  ];
	  const TS_SPECIFIC_KEYWORDS = [
	    "type",
	    "namespace",
	    "typedef",
	    "interface",
	    "public",
	    "private",
	    "protected",
	    "implements",
	    "declare",
	    "abstract",
	    "readonly"
	  ];
	  const KEYWORDS$1$1 = {
	    $pattern: IDENT_RE$2,
	    keyword: KEYWORDS$1.concat(TS_SPECIFIC_KEYWORDS).join(" "),
	    literal: LITERALS$1.join(" "),
	    built_in: BUILT_INS$1.concat(TYPES).join(" ")
	  };
	  const DECORATOR = {
	    className: 'meta',
	    begin: '@' + IDENT_RE$1,
	  };

	  const swapMode = (mode, label, replacement) => {
	    const indx = mode.contains.findIndex(m => m.label === label);
	    if (indx === -1) { throw new Error("can not find mode to replace"); }
	    mode.contains.splice(indx, 1, replacement);
	  };

	  const tsLanguage = javascript$1(hljs);

	  // this should update anywhere keywords is used since
	  // it will be the same actual JS object
	  Object.assign(tsLanguage.keywords, KEYWORDS$1$1);

	  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
	  tsLanguage.contains = tsLanguage.contains.concat([
	    DECORATOR,
	    NAMESPACE,
	    INTERFACE,
	  ]);

	  // TS gets a simpler shebang rule than JS
	  swapMode(tsLanguage, "shebang", hljs.SHEBANG());
	  // JS use strict rule purposely excludes `asm` which makes no sense
	  swapMode(tsLanguage, "use_strict", USE_STRICT);

	  const functionDeclaration = tsLanguage.contains.find(m => m.className === "function");
	  functionDeclaration.relevance = 0; // () => {} is more typical in TypeScript

	  Object.assign(tsLanguage, {
	    name: 'TypeScript',
	    aliases: ['ts']
	  });

	  return tsLanguage;
	}

	var typescript_1 = typescript;

	core.registerLanguage('css', css_1);
	core.registerLanguage('xml', xml_1);
	core.registerLanguage('markdown', markdown_1);
	core.registerLanguage('javascript', javascript_1);
	core.registerLanguage('json', json_1);
	core.registerLanguage('plaintext', plaintext_1);
	core.registerLanguage('typescript', typescript_1);

	var MODIFIED_START_TAG = '<vue-diff-modified>';
	var MODIFIED_CLOSE_TAG = '</vue-diff-modified>';
	/**
	 * Get diff type
	 * @param diff
	 */

	var getDiffType = function getDiffType(diff) {
	  if (!diff.count) return 'disabled';
	  return diff.added ? 'added' : diff.removed ? 'removed' : 'equal';
	};
	/**
	 * Get lines object on the split mode
	 * @param diffsMap
	 */


	var getSplitLines = function getSplitLines(diffsMap) {
	  var result = []; // Array(0): prev, Array(1): current

	  var lineNum = {
	    prev: 0,
	    current: 0
	  };
	  diffsMap.map(function (diffs) {
	    var prevLines = diffs[0].value.replace(/\n$/, '').split('\n');
	    var currentLines = diffs[1].value.replace(/\n$/, '').split('\n');
	    var loopCount = Math.max(prevLines.length, currentLines.length);

	    for (var i = 0; i < loopCount; i++) {
	      var hasPrevLine = getDiffType(diffs[0]) !== 'disabled';
	      var hasCurrentLine = getDiffType(diffs[1]) !== 'disabled';
	      if (hasPrevLine) lineNum.prev = lineNum.prev + 1;
	      if (hasCurrentLine) lineNum.current = lineNum.current + 1;
	      var chkWords = Boolean(diffs[0].count === diffs[1].count && getDiffType(diffs[0]).match(/added|removed/) && getDiffType(diffs[1]).match(/added|removed/));
	      result.push([{
	        type: getDiffType(diffs[0]),
	        lineNum: hasPrevLine ? lineNum.prev : undefined,
	        value: hasPrevLine ? prevLines[i] : undefined,
	        chkWords: chkWords
	      }, {
	        type: getDiffType(diffs[1]),
	        lineNum: hasCurrentLine ? lineNum.current : undefined,
	        value: hasCurrentLine ? currentLines[i] : undefined,
	        chkWords: chkWords
	      }]);
	    }
	  });
	  return result;
	};
	/**
	 * Get lines object on the unified mode
	 * @param diffsMap
	 */


	var getUnifiedLines = function getUnifiedLines(diffsMap) {
	  var result = []; // Array(0)

	  var lineNum = 0;
	  diffsMap.map(function (diffs) {
	    var prevLines = diffs[0].value.replace(/\n$/, '').split('\n');
	    var currentLines = diffs[1].value.replace(/\n$/, '').split('\n');
	    prevLines.map(function (value) {
	      var type = getDiffType(diffs[0]);
	      if (type !== 'removed') return;
	      result.push([{
	        type: getDiffType(diffs[0]),
	        lineNum: undefined,
	        value: value
	      }]);
	    });
	    currentLines.map(function (value) {
	      var type = getDiffType(diffs[1]);
	      if (type === 'disabled') return;
	      lineNum = lineNum + 1;
	      result.push([{
	        type: getDiffType(diffs[1]),
	        lineNum: lineNum,
	        value: value
	      }]);
	    });
	  });
	  return result;
	};
	/**
	 * Render of objects separated by lines
	 * @param mode
	 * @param prev
	 * @param current
	 */


	var renderLines = function renderLines(mode, prev, current) {
	  /**
	   * stacked prev, current data
	   */
	  var diffsMap = diffLines(prev, current).reduce(function (acc, curr) {
	    var type = getDiffType(curr);

	    if (type === 'equal') {
	      acc.push([curr]); // Push index 0
	    }

	    if (type === 'removed') {
	      acc.push([curr]); // Push index 0
	    }

	    if (type === 'added') {
	      if (acc.length && acc[acc.length - 1][0] && acc[acc.length - 1][0].removed) {
	        acc[acc.length - 1].push(curr); // Push index 1 if index 0 has removed data in last array
	      } else {
	        acc.push([curr]); // Push index 0
	      }
	    }

	    return acc;
	  }, []);
	  /**
	   * Set index 1 in stacked data
	   */

	  diffsMap.map(function (diffs) {
	    if (diffs.length > 1) return; // Return if has index 0, 1

	    var type = getDiffType(diffs[0]);

	    if (type === 'added') {
	      diffs.unshift({
	        value: ''
	      }); // Set empty data
	    } else if (type === 'removed') {
	      diffs.push({
	        value: ''
	      }); // Set empty data
	    } else if (type === 'equal') {
	      diffs.push(_objectSpread2({}, diffs[0])); // Set same data
	    }
	  });
	  /**
	   * Get lines object on the mode
	   */

	  if (mode === 'split') {
	    return getSplitLines(diffsMap);
	  } else if (mode === 'unified') {
	    return getUnifiedLines(diffsMap);
	  } else {
	    return [];
	  }
	};
	/**
	 * Render with modified tags
	 * @param prev
	 * @param current
	 */


	var renderWords = function renderWords(prev, current) {
	  /**
	   * Set modified tags in changed words (removed -> added)
	   */
	  return diffWords(prev, current).filter(function (word) {
	    return getDiffType(word) !== 'removed';
	  }).map(function (word) {
	    return getDiffType(word) === 'added' ? "".concat(MODIFIED_START_TAG).concat(word.value).concat(MODIFIED_CLOSE_TAG) : word.value;
	  }).join('');
	};
	/**
	 * Set hightlight code
	 * This function must calling at client only (use DOM)
	 */


	var setHighlightCode = function setHighlightCode(_ref) {
	  var highlightCode = _ref.highlightCode,
	      language = _ref.language,
	      code = _ref.code;
	  var hasModifiedTags = code.match(new RegExp("(".concat(MODIFIED_START_TAG, "|").concat(MODIFIED_CLOSE_TAG, ")"), 'g'));

	  if (!hasModifiedTags) {
	    highlightCode.value = core.highlight(language, code).value;
	    return;
	  }
	  /**
	   * Explore highlight DOM extracted from pure code and compare the text with the original code code to generate the highlight code
	   */


	  var originalCode = code; // original code with modified tags

	  var pureCode = code.replace(new RegExp("(".concat(MODIFIED_START_TAG, "|").concat(MODIFIED_CLOSE_TAG, ")"), 'g'), ''); // Without modified tags

	  var pureElement = document.createElement('div');
	  pureElement.innerHTML = core.highlight(language, pureCode).value; // Highlight DOM without modified tags

	  var diffElements = function diffElements(node) {
	    node.childNodes.forEach(function (child) {
	      if (child.nodeType === 1) {
	        diffElements(child);
	      } // Compare text nodes and check changed text


	      if (child.nodeType === 3) {
	        if (!child.textContent) return;
	        var oldContent = child.textContent;
	        var newContent = '';

	        while (oldContent.length) {
	          if (originalCode.startsWith(MODIFIED_START_TAG)) {
	            // Add modified start tag
	            originalCode = originalCode.slice(MODIFIED_START_TAG.length);
	            newContent = newContent + MODIFIED_START_TAG;
	            continue;
	          }

	          if (originalCode.startsWith(MODIFIED_CLOSE_TAG)) {
	            // Add modified close tag
	            originalCode = originalCode.slice(MODIFIED_CLOSE_TAG.length);
	            newContent = newContent + MODIFIED_CLOSE_TAG;
	            continue;
	          } // Add words before modified tag


	          var hasModifiedTag = originalCode.match(new RegExp("(".concat(MODIFIED_START_TAG, "|").concat(MODIFIED_CLOSE_TAG, ")")));
	          var originalCodeDiffLength = hasModifiedTag && hasModifiedTag.index ? hasModifiedTag.index : originalCode.length;
	          var nextDiffsLength = Math.min(originalCodeDiffLength, oldContent.length);
	          newContent = newContent + originalCode.substring(0, nextDiffsLength);
	          originalCode = originalCode.slice(nextDiffsLength);
	          oldContent = oldContent.slice(nextDiffsLength);
	        }

	        child.textContent = newContent; // put as entity code because change textContent
	      }
	    });
	  };

	  diffElements(pureElement);
	  var startEntity = MODIFIED_START_TAG.replace('<', '&lt;').replace('>', '&gt;');
	  var closeEntity = MODIFIED_CLOSE_TAG.replace('<', '&lt;').replace('>', '&gt;');
	  highlightCode.value = pureElement.innerHTML.replace(new RegExp(startEntity, 'g'), '<span class="modified">').replace(new RegExp(closeEntity, 'g'), '</span>'); // @ts-ignore

	  pureElement = null;
	};

	var script = vue.defineComponent({
	  props: {
	    language: {
	      type: String,
	      required: true
	    },
	    code: {
	      type: String,
	      required: true
	    }
	  },
	  setup: function setup(props) {
	    var highlightCode = vue.ref('');
	    vue.onMounted(function () {
	      vue.watch(function () {
	        return props.code;
	      }, function () {
	        setHighlightCode({
	          highlightCode: highlightCode,
	          language: props.language,
	          code: props.code
	        });
	      }, {
	        immediate: true
	      });
	    });
	    return {
	      highlightCode: highlightCode
	    };
	  }
	});

	function render(_ctx, _cache, $props, $setup, $data, $options) {
	  return vue.openBlock(), vue.createBlock("pre", null, [vue.createVNode("code", {
	    class: "hljs",
	    innerHTML: _ctx.highlightCode
	  }, null, 8
	  /* PROPS */
	  , ["innerHTML"])]);
	}

	script.render = render;
	script.__file = "src/Code.vue";

	var script$1 = vue.defineComponent({
	  components: {
	    Code: script
	  },
	  props: {
	    mode: {
	      type: String,
	      required: true
	    },
	    language: {
	      type: String,
	      required: true
	    },
	    data: {
	      type: Object,
	      required: true
	    }
	  },
	  setup: function setup() {
	    var setCode = function setCode(line, data, index) {
	      if (!line.value) return '\n'; // Compare lines when data, index properties exist and has chkWords value in line property

	      if (typeof data === 'undefined' || typeof index === 'undefined' || !line.chkWords) {
	        return line.value;
	      }

	      var differ = data[index === 0 ? 1 : 0];
	      if (!differ.value) return line.value;
	      return renderWords(differ.value, line.value); // render with modified tags
	    };

	    return {
	      setCode: setCode
	    };
	  }
	});

	function render$1(_ctx, _cache, $props, $setup, $data, $options) {
	  var _component_Code = vue.resolveComponent("Code");

	  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createCommentVNode(" split view "), _ctx.mode === 'split' ? (vue.openBlock(), vue.createBlock("tr", {
	    key: 0,
	    class: "vue-diff-row-".concat(_ctx.mode)
	  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.data, function (line, index) {
	    return vue.openBlock(), vue.createBlock(vue.Fragment, {
	      key: index
	    }, [vue.createVNode("td", {
	      class: ["lineNum", "vue-diff-cell-".concat(line.type)]
	    }, vue.toDisplayString(line.lineNum), 3
	    /* TEXT, CLASS */
	    ), vue.createVNode("td", {
	      class: ["code", "vue-diff-cell-".concat(line.type)]
	    }, [vue.createVNode(_component_Code, {
	      language: _ctx.language,
	      code: _ctx.setCode(line, _ctx.data, index)
	    }, null, 8
	    /* PROPS */
	    , ["language", "code"])], 2
	    /* CLASS */
	    )], 64
	    /* STABLE_FRAGMENT */
	    );
	  }), 128
	  /* KEYED_FRAGMENT */
	  ))], 2
	  /* CLASS */
	  )) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" // split view "), vue.createCommentVNode(" unified view "), _ctx.mode === 'unified' ? (vue.openBlock(), vue.createBlock("tr", {
	    key: 1,
	    class: "vue-diff-row-".concat(_ctx.mode)
	  }, [vue.createVNode("td", {
	    class: ["lineNum", "vue-diff-cell-".concat(_ctx.data[0].type)]
	  }, vue.toDisplayString(_ctx.data[0].lineNum), 3
	  /* TEXT, CLASS */
	  ), vue.createVNode("td", {
	    class: ["code", "vue-diff-cell-".concat(_ctx.data[0].type)]
	  }, [vue.createVNode(_component_Code, {
	    language: _ctx.language,
	    code: _ctx.setCode(_ctx.data[0])
	  }, null, 8
	  /* PROPS */
	  , ["language", "code"])], 2
	  /* CLASS */
	  )], 2
	  /* CLASS */
	  )) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" // unified view ")], 64
	  /* STABLE_FRAGMENT */
	  );
	}

	script$1.render = render$1;
	script$1.__file = "src/Line.vue";

	var script$2 = vue.defineComponent({
	  components: {
	    Line: script$1
	  },
	  props: {
	    mode: {
	      type: String,
	      default: 'split'
	    },
	    theme: {
	      type: String,
	      default: 'dark'
	    },
	    language: {
	      type: String,
	      default: 'plaintext'
	    },
	    prev: {
	      type: String,
	      default: ''
	    },
	    current: {
	      type: String,
	      default: ''
	    }
	  },
	  setup: function setup(props) {
	    var lines = vue.ref([]);
	    vue.watch([function () {
	      return props.mode;
	    }, function () {
	      return props.prev;
	    }, function () {
	      return props.current;
	    }], function () {
	      lines.value = renderLines(props.mode, props.prev, props.current);
	    }, {
	      immediate: true
	    });
	    return {
	      lines: lines
	    };
	  }
	});

	var _hoisted_1 = {
	  ref: "viewer",
	  class: "vue-diff-viewer"
	};
	function render$2(_ctx, _cache, $props, $setup, $data, $options) {
	  var _component_Line = vue.resolveComponent("Line");

	  return vue.openBlock(), vue.createBlock("div", {
	    class: ["vue-diff-wrapper", "vue-diff-mode-".concat(_ctx.mode, " vue-diff-theme-").concat(_ctx.theme)]
	  }, [vue.createVNode("div", _hoisted_1, [vue.createVNode("table", null, [vue.createVNode("tbody", null, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.lines, function (data, index) {
	    return vue.openBlock(), vue.createBlock(_component_Line, {
	      key: index,
	      mode: _ctx.mode,
	      language: _ctx.language,
	      data: data
	    }, null, 8
	    /* PROPS */
	    , ["mode", "language", "data"]);
	  }), 128
	  /* KEYED_FRAGMENT */
	  ))])])], 512
	  /* NEED_PATCH */
	  )], 2
	  /* CLASS */
	  );
	}

	script$2.render = render$2;
	script$2.__file = "src/Diff.vue";

	var VueDiff = {
	  install: function install(app) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$componentNam = options.componentName,
	        componentName = _options$componentNam === void 0 ? 'Diff' : _options$componentNam;
	    app.component(componentName, script$2);
	  },
	  hljs: core
	};

	return VueDiff;

})));
