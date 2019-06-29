(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("iview"));
	else if(typeof define === 'function' && define.amd)
		define(["iview"], factory);
	else if(typeof exports === 'object')
		exports["vuecoms2"] = factory(require("iview"));
	else
		root["vuecoms2"] = factory(root["iview"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__3955__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  __webpack_require__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "05d5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0676":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1098":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("17ed");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("f893");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "11b0":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "17ed":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("d8d6"), __esModule: true };

/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2143":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("c74a");

/***/ }),

/***/ "2160":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f52f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2236":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "2512":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "253f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4d37");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2aad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2c21":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2ca2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "3156":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9523");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "31e8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "36c6":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "3955":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3955__;

/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3c96":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "3f6b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("51b6"), __esModule: true };

/***/ }),

/***/ "408c":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "41b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("3f6b");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "448a":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("2236");

var iterableToArray = __webpack_require__("11b0");

var nonIterableSpread = __webpack_require__("0676");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4a4b":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "4d37":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "53fe":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else {}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScrolls = [],
		scrolling = false,

		awaitingDragStarted = false,
		ignoreNextClick = false,
		sortables = [],

		pointerElemChangedInterval,
		lastPointerElemX,
		lastPointerElemY,

		tapEvt,
		touchEvt,

		moved,


		lastTarget,
		lastDirection,
		pastFirstInvertThresh = false,
		isCircumstantialInvert = false,
		lastMode, // 'swap' or 'insert'

		targetMoveDistance,


		forRepaintDummy,
		realDragElRect, // dragEl rect after current animation

		/** @const */
		R_SPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = {
			capture: false,
			passive: false
		},

		IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
		Edge = !!navigator.userAgent.match(/Edge/i),
		// FireFox = !!navigator.userAgent.match(/firefox/i),

		CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',

		// This will not pass for IE9, because IE9 DnD only works on anchors
		supportDraggable = ('draggable' in document.createElement('div')),

		supportCssPointerEvents = (function() {
			// false when <= IE11
			if (IE11OrLess) {
				return false;
			}
			var el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,
		_alignedSilent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],

		_detectDirection = function(el, options) {
			var elCSS = _css(el),
				elWidth = parseInt(elCSS.width),
				child1 = _getChild(el, 0, options),
				child2 = _getChild(el, 1, options),
				firstChildCSS = child1 && _css(child1),
				secondChildCSS = child2 && _css(child2),
				firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
				secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;
			if (elCSS.display === 'flex') {
				return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse'
				? 'vertical' : 'horizontal';
			}
			if (child1 && firstChildCSS.float !== 'none') {
				var touchingSideChild2 = firstChildCSS.float === 'left' ? 'left' : 'right';

				return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ?
					'vertical' : 'horizontal';
			}
			return (child1 &&
				(
					firstChildCSS.display === 'block' ||
					firstChildCSS.display === 'flex' ||
					firstChildCSS.display === 'table' ||
					firstChildCSS.display === 'grid' ||
					firstChildWidth >= elWidth &&
					elCSS[CSSFloatProperty] === 'none' ||
					child2 &&
					elCSS[CSSFloatProperty] === 'none' &&
					firstChildWidth + secondChildWidth > elWidth
				) ?
				'vertical' : 'horizontal'
			);
		},

		/**
		 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
		 * @param  {Number} x      X position
		 * @param  {Number} y      Y position
		 * @return {HTMLElement}   Element of the first found nearest Sortable
		 */
		_detectNearestEmptySortable = function(x, y) {
			for (var i = 0; i < sortables.length; i++) {
				if (sortables[i].children.length) continue;

				var rect = _getRect(sortables[i]),
					threshold = sortables[i][expando].options.emptyInsertThreshold,
					insideHorizontally = x >= (rect.left - threshold) && x <= (rect.right + threshold),
					insideVertically = y >= (rect.top - threshold) && y <= (rect.bottom + threshold);

				if (insideHorizontally && insideVertically) {
					return sortables[i];
				}
			}
		},

		_isClientInRowColumn = function(x, y, el, axis, options) {
			var targetRect = _getRect(el),
				targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
				targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
				mouseOnOppAxis = axis === 'vertical' ? x : y;

			return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
		},

		_isElInRowColumn = function(el1, el2, axis) {
			var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
				el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
				el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
				el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
				el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
				el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
				el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
				el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

			return (
				el1S1Opp === el2S1Opp ||
				el1S2Opp === el2S2Opp ||
				(el1S1Opp + el1OppLength / 2) === (el2S1Opp + el2OppLength / 2)
			);
		},

		_getParentAutoScrollElement = function(el, includeSelf) {
			// skip to window
			if (!el || !el.getBoundingClientRect) return win;

			var elem = el;
			var gotSelf = false;
			do {
				// we don't need to get elem css if it isn't even overflowing in the first place (performance)
				if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
					var elemCSS = _css(elem);
					if (
						elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
						elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
					) {
						if (!elem || !elem.getBoundingClientRect || elem === document.body) return win;

						if (gotSelf || includeSelf) return elem;
						gotSelf = true;
					}
				}
			/* jshint boss:true */
			} while (elem = elem.parentNode);

			return win;
		},

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (options.scroll) {
				var _this = rootEl ? rootEl[expando] : window,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					scrollThisInstance = false;

				// Detect scrollEl
				if (scrollParentEl !== rootEl) {
					_clearAutoScrolls();

					scrollEl = options.scroll;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = _getParentAutoScrollElement(rootEl, true);
						scrollParentEl = scrollEl;
					}
				}


				var layersOut = 0;
				var currentParent = scrollEl;
				do {
					var	el = currentParent,
						rect = _getRect(el),

						top = rect.top,
						bottom = rect.bottom,
						left = rect.left,
						right = rect.right,

						width = rect.width,
						height = rect.height,

						scrollWidth,
						scrollHeight,

						css,

						vx,
						vy,

						canScrollX,
						canScrollY,

						scrollPosX,
						scrollPosY;


					if (el !== win) {
						scrollWidth = el.scrollWidth;
						scrollHeight = el.scrollHeight;

						css = _css(el);

						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');

						scrollPosX = el.scrollLeft;
						scrollPosY = el.scrollTop;
					} else {
						scrollWidth = document.documentElement.scrollWidth;
						scrollHeight = document.documentElement.scrollHeight;

						css = _css(document.documentElement);

						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');

						scrollPosX = document.documentElement.scrollLeft;
						scrollPosY = document.documentElement.scrollTop;
					}

					vx = canScrollX && (abs(right - x) <= sens && (scrollPosX + width) < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);

					vy = canScrollY && (abs(bottom - y) <= sens && (scrollPosY + height) < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);


					if (!autoScrolls[layersOut]) {
						for (var i = 0; i <= layersOut; i++) {
							if (!autoScrolls[i]) {
								autoScrolls[i] = {};
							}
						}
					}

					if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
						autoScrolls[layersOut].el = el;
						autoScrolls[layersOut].vx = vx;
						autoScrolls[layersOut].vy = vy;

						clearInterval(autoScrolls[layersOut].pid);

						if (el && (vx != 0 || vy != 0)) {
							scrollThisInstance = true;
							/* jshint loopfunc:true */
							autoScrolls[layersOut].pid = setInterval((function () {
								// emulate drag over during autoscroll (fallback), emulating native DnD behaviour
								if (isFallback && this.layer === 0) {
									Sortable.active._emulateDragOver(true);
								}
								var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
								var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

								if ('function' === typeof(scrollCustomFn)) {
									if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
										return;
									}
								}
								if (autoScrolls[this.layer].el === win) {
									win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
								} else {
									autoScrolls[this.layer].el.scrollTop += scrollOffsetY;
									autoScrolls[this.layer].el.scrollLeft += scrollOffsetX;
								}
							}).bind({layer: layersOut}), 24);
						}
					}
					layersOut++;
				} while (options.bubbleScroll && currentParent !== win && (currentParent = _getParentAutoScrollElement(currentParent, false)));
				scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
			}
		}, 30),

		_clearAutoScrolls = function () {
			autoScrolls.forEach(function(autoScroll) {
				clearInterval(autoScroll.pid);
			});
			autoScrolls = [];
		},

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				return function(to, from, dragEl, evt) {
					var sameGroup = to.options.group.name &&
									from.options.group.name &&
									to.options.group.name === from.options.group.name;

					if (value == null && (pull || sameGroup)) {
						// Default pull value
						// Default pull and put value if same group
						return true;
					} else if (value == null || value === false) {
						return false;
					} else if (pull && value === 'clone') {
						return value;
					} else if (typeof value === 'function') {
						return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
					} else {
						var otherGroup = (pull ? to : from).options.group.name;

						return (value === true ||
						(typeof value === 'string' && value === otherGroup) ||
						(value.join && value.indexOf(otherGroup) > -1));
					}
				};
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		},

		_checkAlignment = function(evt) {
			if (!dragEl || !dragEl.parentNode) return;
			dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
		},

		_isTrueParentSortable = function(el, target) {
			var trueParent = target;
			while (!trueParent[expando]) {
				trueParent = trueParent.parentNode;
			}

			return el === trueParent;
		},

		_artificalBubble = function(sortable, originalEvt, method) {
			// Artificial IE bubbling
			var nextParent = sortable.parentNode;
			while (nextParent && !nextParent[expando]) {
				nextParent = nextParent.parentNode;
			}

			if (nextParent) {
				nextParent[expando][method](_extend(originalEvt, {
					artificialBubble: true
				}));
			}
		},

		_hideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', 'none');
			}
		},

		_unhideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', '');
			}
		};


	// #1184 fix - Prevent click event on fallback if dragged but item not changed position
	document.addEventListener('click', function(evt) {
		if (ignoreNextClick) {
			evt.preventDefault();
			evt.stopPropagation && evt.stopPropagation();
			evt.stopImmediatePropagation && evt.stopImmediatePropagation();
			ignoreNextClick = false;
			return false;
		}
	}, true);

	var nearestEmptyInsertDetectEvent = function(evt) {
		evt = evt.touches ? evt.touches[0] : evt;
		if (dragEl) {
			var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

			if (nearest) {
				nearest[expando]._onDragOver({
					clientX: evt.clientX,
					clientY: evt.clientY,
					target: nearest,
					rootEl: nearest
				});
			}
		}
	};
	// We do not want this to be triggered if completed (bubbling canceled), so only define it here
	_on(document, 'dragover', nearestEmptyInsertDetectEvent);
	_on(document, 'mousemove', nearestEmptyInsertDetectEvent);
	_on(document, 'touchmove', nearestEmptyInsertDetectEvent);

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: null,
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true,
			draggable: /[uo]l/i.test(el.nodeName) ? '>li' : '>*',
			swapThreshold: 1, // percentage; 0 <= x <= 1
			invertSwap: false, // invert always
			invertedSwapThreshold: null, // will be set to same as swapThreshold if default
			removeCloneOnHide: true,
			direction: function() {
				return _detectDirection(el, this.options);
			},
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			easing: null,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false && (
				('PointerEvent' in window) ||
				window.navigator && ('msPointerEnabled' in window.navigator) // microsoft
			),
			emptyInsertThreshold: 5
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		if (options.supportPointer) {
			_on(el, 'pointerdown', this._onTapStart);
		} else {
			_on(el, 'mousedown', this._onTapStart);
			_on(el, 'touchstart', this._onTapStart);
		}

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		sortables.push(this.el);

		// Restore sorting
		options.store && options.store.get && this.sort(options.store.get(this) || []);
	}

	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_computeIsAligned: function(evt) {
			var target;

			if (ghostEl && !supportCssPointerEvents) {
				_hideGhostForTarget();
				target = document.elementFromPoint(evt.clientX, evt.clientY);
				_unhideGhostForTarget();
			} else {
				target = evt.target;
			}

			target = _closest(target, this.options.draggable, this.el, false);
			if (_alignedSilent) return;
			if (!dragEl || dragEl.parentNode !== this.el) return;

			var children = this.el.children;
			for (var i = 0; i < children.length; i++) {
				// Don't change for target in case it is changed to aligned before onDragOver is fired
				if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
					children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
				}
			}
			// Used for nulling last target when not in element, nothing to do with checking if aligned
			if (!_closest(target, this.options.draggable, this.el, true)) {
				lastTarget = null;
			}

			_alignedSilent = true;
			setTimeout(function() {
				_alignedSilent = false;
			}, 30);

		},

		_getDirection: function(evt, target) {
			return (typeof this.options.direction === 'function') ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},

		_onTapStart: function (/** Event|TouchEvent */evt) {
			if (!evt.cancelable) return;
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && ((evt.path && evt.path[0]) || (evt.composedPath && evt.composedPath()[0])) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// IE: Calls events in capture mode if event element is nested. This ensures only correct element's _onTapStart goes through.
			// This process is also done in _onDragOver
			if (IE11OrLess && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button and enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el, false);

			if (!target) {
				if (IE11OrLess) {
					_artificalBubble(el, evt, '_onTapStart');
				}
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el, false);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},


		_handleAutoScroll: function(evt, fallback) {
			if (!dragEl || !this.options.scroll) return;
			var x = evt.clientX,
				y = evt.clientY,

				elem = document.elementFromPoint(x, y),
				_this = this;

			// IE does not seem to have native autoscroll,
			// Edge's autoscroll seems too conditional,
			// Firefox and Chrome are good
			if (fallback || Edge || IE11OrLess) {
				_autoScroll(evt, _this.options, elem, fallback);

				// Listener for pointer element change
				var ogElemScroller = _getParentAutoScrollElement(elem, true);
				if (
					scrolling &&
					(
						!pointerElemChangedInterval ||
						x !== lastPointerElemX ||
						y !== lastPointerElemY
					)
				) {

					pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
					// Detect for pointer elem change, emulating native DnD behaviour
					pointerElemChangedInterval = setInterval(function() {
						if (!dragEl) return;
						// could also check if scroll direction on newElem changes due to parent autoscrolling
						var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							_clearAutoScrolls();
							_autoScroll(evt, _this.options, ogElemScroller, fallback);
						}
					}, 10);
					lastPointerElemX = x;
					lastPointerElemY = y;
				}

			} else {
				// if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
				if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === window) {
					_clearAutoScrolls();
					return;
				}
				_autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
			}
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				tapEvt = {
					target: dragEl,
					clientX: (touch || evt).clientX,
					clientY: (touch || evt).clientY
				};

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';
				// undo animation if needed
				dragEl.style.transition = '';
				dragEl.style.transform = '';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				if (options.supportPointer) {
					_on(ownerDocument, 'pointerup', _this._onDrop);
				} else {
					_on(ownerDocument, 'mouseup', _this._onDrop);
					_on(ownerDocument, 'touchend', _this._onDrop);
					_on(ownerDocument, 'touchcancel', _this._onDrop);
				}

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
					_on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_delayedDragTouchMoveHandler: function (/** TouchEvent|PointerEvent **/e) {
			var touch = e.touches ? e.touches[0] : e;
			if (min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY))
					>= this.options.touchStartThreshold
			) {
				this._disableDelayedDrag();
			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (!this.nativeDraggable || touch) {
				if (this.options.supportPointer) {
					_on(document, 'pointermove', this._onTouchMove);
				} else if (touch) {
					_on(document, 'touchmove', this._onTouchMove);
				} else {
					_on(document, 'mousemove', this._onTouchMove);
				}
			} else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function (fallback) {
			awaitingDragStarted = false;
			if (rootEl && dragEl) {
				if (this.nativeDraggable) {
					_on(document, 'dragover', this._handleAutoScroll);
					_on(document, 'dragover', _checkAlignment);
				}
				var options = this.options;

				// Apply effect
				!fallback && _toggleClass(dragEl, options.dragClass, false);
				_toggleClass(dragEl, options.ghostClass, true);

				// In case dragging an animated element
				_css(dragEl, 'transform', '');

				Sortable.active = this;

				fallback && this._appendGhost();

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function (bypassLastTouchCheck) {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !bypassLastTouchCheck) {
					return;
				}
				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				_hideGhostForTarget();

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;

				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							var inserted;

							inserted = parent[expando]._onDragOver({
								clientX: touchEvt.clientX,
								clientY: touchEvt.clientY,
								target: target,
								rootEl: parent
							});

							if (inserted && !this.options.dragoverBubble) {
								break;
							}
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}
				dragEl.parentNode[expando]._computeIsAligned(touchEvt);

				_unhideGhostForTarget();
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					matrix = ghostEl && _matrix(ghostEl),
					scaleX = ghostEl && matrix && matrix.a,
					scaleY = ghostEl && matrix && matrix.d,
					dx = ((touch.clientX - tapEvt.clientX) + fallbackOffset.x) / (scaleX ? scaleX : 1),
					dy = ((touch.clientY - tapEvt.clientY) + fallbackOffset.y) / (scaleY ? scaleY : 1),
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';


				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active && !awaitingDragStarted) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}
					this._onDragStart(evt, true);
				}

				this._handleAutoScroll(touch, true);


				moved = true;
				touchEvt = touch;


				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.cancelable && evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = _getRect(dragEl, this.options.fallbackOnBody ? document.body : rootEl, true),
					css = _css(dragEl),
					options = this.options;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'box-sizing', 'border-box');
				_css(ghostEl, 'margin', 0);
				_css(ghostEl, 'top', rect.top);
				_css(ghostEl, 'left', rect.left);
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/fallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			// Setup clone
			cloneEl = _clone(dragEl);

			cloneEl.draggable = false;
			cloneEl.style['will-change'] = '';

			this._hideClone();

			_toggleClass(cloneEl, _this.options.chosenClass, false);


			// #1143: IFrame support workaround
			_this._cloneId = _nextTick(function () {
				if (!_this.options.removeCloneOnHide) {
					rootEl.insertBefore(cloneEl, dragEl);
				}
				_dispatchEvent(_this, rootEl, 'clone', dragEl);
			});


			!fallback && _toggleClass(dragEl, options.dragClass, true);

			// Set proper drop events
			if (fallback) {
				ignoreNextClick = true;
				_this._loopId = setInterval(_this._emulateDragOver, 50);
			} else {
				// Undo what was set in _prepareDragStart before drag started
				_off(document, 'mouseup', _this._onDrop);
				_off(document, 'touchend', _this._onDrop);
				_off(document, 'touchcancel', _this._onDrop);

				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1276 fix:
				_css(dragEl, 'transform', 'translateZ(0)');
			}

			awaitingDragStarted = true;

			_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback));
			_on(document, 'selectstart', _this);
		},

		// Returns true - if no further action is needed (either inserted or another condition)
		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target = evt.target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				canSort = options.sort,
				_this = this;

			if (_silent) return;

			// IE event order fix
			if (IE11OrLess && !evt.rootEl && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Return invocation when no further action is needed in another sortable
			function completed() {
				if (activeSortable) {
					// Set ghost class to new sortable's ghost class
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
					_toggleClass(dragEl, options.ghostClass, true);
				}

				if (putSortable !== _this && _this !== Sortable.active) {
					putSortable = _this;
				} else if (_this === Sortable.active) {
					putSortable = null;
				}


				// Null lastTarget if it is not inside a previously swapped element
				if ((target === dragEl && !dragEl.animated) || (target === el && !target.animated)) {
					lastTarget = null;
				}
				// no bubbling and not fallback
				if (!options.dragoverBubble && !evt.rootEl && target !== document) {
					_this._handleAutoScroll(evt);
					dragEl.parentNode[expando]._computeIsAligned(evt);
				}

				!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();

				return true;
			}

			// Call when dragEl has been inserted
			function changed() {
				_dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl, options.draggable), evt);
			}


			if (evt.preventDefault !== void 0) {
				evt.cancelable && evt.preventDefault();
			}


			moved = true;

			target = _closest(target, options.draggable, el, true);

			// target is dragEl or target is animated
			if (!!_closest(evt.target, null, dragEl, true) || target.animated) {
				return completed();
			}

			if (target !== dragEl) {
				ignoreNextClick = false;
			}

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				)
			) {
				var axis = this._getDirection(evt, target);

				dragRect = _getRect(dragEl);

				if (revert) {
					this._hideClone();
					parentEl = rootEl; // actualization

					if (nextEl) {
						rootEl.insertBefore(dragEl, nextEl);
					} else {
						rootEl.appendChild(dragEl);
					}

					return completed();
				}

				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					_ghostIsLast(evt, axis, el) && !dragEl.animated
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = _lastChild(el);
					}

					if (target) {
						targetRect = _getRect(target);
					}

					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(this);
					}

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						el.appendChild(dragEl);
						parentEl = el; // actualization
						realDragElRect = null;

						changed();
						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
						return completed();
					}
				}
				else if (target && target !== dragEl && target.parentNode === el) {
					var direction = 0,
						targetBeforeFirstSwap,
						aligned = target.sortableMouseAligned,
						differentLevel = dragEl.parentNode !== el,
						scrolledPastTop = _isScrolledPast(target, axis === 'vertical' ? 'top' : 'left');

					if (lastTarget !== target) {
						lastMode = null;
						targetBeforeFirstSwap = _getRect(target)[axis === 'vertical' ? 'top' : 'left'];
						pastFirstInvertThresh = false;
					}

					// Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0
					if (
						_isElInRowColumn(dragEl, target, axis) && aligned ||
						differentLevel ||
						scrolledPastTop ||
						options.invertSwap ||
						lastMode === 'insert' ||
						// Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
						// and lastMode will change to 'insert', but we must swap
						lastMode === 'swap'
					) {
						// New target that we will be inside
						if (lastMode !== 'swap') {
							isCircumstantialInvert = options.invertSwap || differentLevel || scrolling || scrolledPastTop;
						}

						direction = _getSwapDirection(evt, target, axis,
							options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold,
							isCircumstantialInvert,
							lastTarget === target);
						lastMode = 'swap';
					} else {
						// Insert at position
						direction = _getInsertDirection(target, options);
						lastMode = 'insert';
					}
					if (direction === 0) return completed();

					realDragElRect = null;
					lastTarget = target;

					lastDirection = direction;

					targetRect = _getRect(target);

					var nextSibling = target.nextElementSibling,
						after = false;

					after = direction === 1;

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						if (isOwner) {
							activeSortable._hideClone();
						} else {
							activeSortable._showClone(this);
						}

						if (after && !nextSibling) {
							el.appendChild(dragEl);
						} else {
							target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
						}

						parentEl = dragEl.parentNode; // actualization

						// must be done before animation
						if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
							targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[axis === 'vertical' ? 'top' : 'left']);
						}
						changed();
						!differentLevel && this._animate(targetRect, target);
						this._animate(dragRect, dragEl);

						return completed();
					}
				}

				if (el.contains(dragEl)) {
					return completed();
				}
			}

			if (IE11OrLess && !evt.rootEl) {
				_artificalBubble(el, evt, '_onDragOver');
			}

			return false;
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = _getRect(target);

				if (target === dragEl) {
					realDragElRect = currentRect;
				}

				if (prevRect.nodeType === 1) {
					prevRect = _getRect(prevRect);
				}

				// Check if actually moving position
				if ((prevRect.left + prevRect.width / 2) !== (currentRect.left + currentRect.width / 2)
					|| (prevRect.top + prevRect.height / 2) !== (currentRect.top + currentRect.height / 2)
				) {
					var matrix = _matrix(this.el),
						scaleX = matrix && matrix.a,
						scaleY = matrix && matrix.d;

					_css(target, 'transition', 'none');
					_css(target, 'transform', 'translate3d('
						+ (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,'
						+ (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)'
					);

					forRepaintDummy = target.offsetWidth; // repaint
					_css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
					_css(target, 'transform', 'translate3d(0,0,0)');
				}

				(typeof target.animated === 'number') && clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(document, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;
			awaitingDragStarted = false;
			scrolling = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;

			clearInterval(this._loopId);

			clearInterval(pointerElemChangedInterval);
			_clearAutoScrolls();
			_cancelThrottle();

			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);


			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
				_off(document, 'dragover', this._handleAutoScroll);
				_off(document, 'dragover', _checkAlignment);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || (putSortable && putSortable.lastPutMode !== 'clone')) {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, evt);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
						}

						putSortable && putSortable.save();
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

						// Save sorting
						this.save();
					}
				}

			}
			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =
			autoScrolls.length =

			pointerElemChangedInterval =
			lastPointerElemX =
			lastPointerElemY =

			tapEvt =
			touchEvt =

			moved =
			newIndex =
			oldIndex =

			lastTarget =
			lastDirection =

			forRepaintDummy =
			realDragElRect =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});

			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragenter':
				case 'dragover':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el, false)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl, false)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el, false);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}
			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			this._onDrop();

			sortables.splice(sortables.indexOf(this.el), 1);

			this.el = el = null;
		},

		_hideClone: function() {
			if (!cloneEl.cloneHidden) {
				_css(cloneEl, 'display', 'none');
				cloneEl.cloneHidden = true;
				if (cloneEl.parentNode && this.options.removeCloneOnHide) {
					cloneEl.parentNode.removeChild(cloneEl);
				}
			}
		},

		_showClone: function(putSortable) {
			if (putSortable.lastPutMode !== 'clone') {
				this._hideClone();
				return;
			}

			if (cloneEl.cloneHidden) {
				// show clone at dragEl or original position
				if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
					rootEl.insertBefore(cloneEl, dragEl);
				} else if (nextEl) {
					rootEl.insertBefore(cloneEl, nextEl);
				} else {
					rootEl.appendChild(cloneEl);
				}

				if (this.options.group.revertClone) {
					this._animate(dragEl, cloneEl);
				}
				_css(cloneEl, 'display', '');
				cloneEl.cloneHidden = false;
			}
		}
	};

	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
		if (el) {
			ctx = ctx || document;

			do {
				if (
					selector != null &&
					(
						selector[0] === '>' && el.parentNode === ctx && _matches(el, selector.substring(1)) ||
						_matches(el, selector)
					) ||
					includeCTX && el === ctx
				) {
					return el;
				}

				if (el === ctx) break;
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		return (el.host && el !== document && el.host.nodeType)
			? el.host
			: el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.cancelable && evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el && name) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style) && prop.indexOf('webkit') === -1) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}

	function _matrix(el) {
		var appliedTransforms = '';
		do {
			var transform = _css(el, 'transform');

			if (transform && transform !== 'none') {
				appliedTransforms = transform + ' ' + appliedTransforms;
			}
			/* jshint boss:true */
		} while (el = el.parentNode);

		if (window.DOMMatrix) {
			return new DOMMatrix(appliedTransforms);
		} else if (window.WebKitCSSMatrix) {
			return new WebKitCSSMatrix(appliedTransforms);
		} else if (window.CSSMatrix) {
			return new CSSMatrix(appliedTransforms);
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, originalEvt) {
		sortable = (sortable || rootEl[expando]);
		var evt,
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent(name, {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent(name, true, true);
		}

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		evt.originalEvent = originalEvt;

		if (rootEl) {
			rootEl.dispatchEvent(evt);
	        }

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent('move', {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent('move', true, true);
		}

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || _getRect(toEl);
		evt.willInsertAfter = willInsertAfter;

		evt.originalEvent = originalEvt;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}

	function _disableDraggable(el) {
		el.draggable = false;
	}

	function _unsilent() {
		_silent = false;
	}

	/**
	 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
	 * and non-draggable elements
	 * @param  {HTMLElement} el       The parent element
	 * @param  {Number} childNum      The index of the child
	 * @param  {Object} options       Parent Sortable's options
	 * @return {HTMLElement}          The child at index childNum, or null if not found
	 */
	function _getChild(el, childNum, options) {
		var currentChild = 0,
			i = 0,
			children = el.children;

		while (i < children.length) {
			if (
				children[i].style.display !== 'none' &&
				children[i] !== ghostEl &&
				children[i] !== dragEl &&
				_closest(children[i], options.draggable, el, false)
			) {
				if (currentChild === childNum) {
					return children[i];
				}
				currentChild++;
			}

			i++;
		}
		return null;
	}

	/**
	 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
	 * @param  {HTMLElement} el       Parent element
	 * @return {HTMLElement}          The last child, ignoring ghostEl
	 */
	function _lastChild(el) {
		var last = el.lastElementChild;

		while (last === ghostEl || last.style.display === 'none') {
			last = last.previousElementSibling;

			if (!last) break;
		}

		return last || null;
	}

	function _ghostIsLast(evt, axis, el) {
		var elRect = _getRect(_lastChild(el)),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
			targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
			targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
			targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom,
			spacer = 10;

		return (
			axis === 'vertical' ?
				(mouseOnOppAxis > targetS2Opp + spacer || mouseOnOppAxis <= targetS2Opp && mouseOnAxis > targetS2 && mouseOnOppAxis >= targetS1Opp) :
				(mouseOnAxis > targetS2 && mouseOnOppAxis > targetS1Opp || mouseOnAxis <= targetS2 && mouseOnOppAxis > targetS2Opp + spacer)
		);
	}

	function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
		var targetRect = _getRect(target),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
			targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
			targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
			dragRect = _getRect(dragEl),
			invert = false;


		if (!invertSwap) {
			// Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
			if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) { // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
				// check if past first invert threshold on side opposite of lastDirection
				if (!pastFirstInvertThresh &&
					(lastDirection === 1 ?
						(
							mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2
						) :
						(
							mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2
						)
					)
				)
				{
					// past first invert threshold, do not restrict inverted threshold to dragEl shadow
					pastFirstInvertThresh = true;
				}

				if (!pastFirstInvertThresh) {
					var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
						dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right;
					// dragEl shadow (target move distance shadow)
					if (
						lastDirection === 1 ?
						(
							mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
						) :
						(
							mouseOnAxis > targetS2 - targetMoveDistance
						)
					)
					{
						return lastDirection * -1;
					}
				} else {
					invert = true;
				}
			} else {
				// Regular
				if (
					mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
					mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
				) {
					return ((mouseOnAxis > targetS1 + targetLength / 2) ? -1 : 1);
				}
			}
		}

		invert = invert || invertSwap;

		if (invert) {
			// Invert of regular
			if (
				mouseOnAxis < targetS1 + (targetLength * invertedSwapThreshold / 2) ||
				mouseOnAxis > targetS2 - (targetLength * invertedSwapThreshold / 2)
			)
			{
				return ((mouseOnAxis > targetS1 + targetLength / 2) ? 1 : -1);
			}
		}

		return 0;
	}

	/**
	 * Gets the direction dragEl must be swapped relative to target in order to make it
	 * seem that dragEl has been "inserted" into that element's position
	 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
	 * @param  {Object} options           options of the parent sortable
	 * @return {Number}                   Direction dragEl must be swapped
	 */
	function _getInsertDirection(target, options) {
		var dragElIndex = _index(dragEl, options.draggable),
			targetIndex = _index(target, options.draggable);

		if (dragElIndex < targetIndex) {
			return 1;
		} else {
			return -1;
		}
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && el !== cloneEl) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			try {
				if (el.matches) {
					return el.matches(selector);
				} else if (el.msMatchesSelector) {
					return el.msMatchesSelector(selector);
				} else if (el.webkitMatchesSelector) {
					return el.webkitMatchesSelector(selector);
				}
			} catch(_) {
				return false;
			}
		}

		return false;
	}

	var _throttleTimeout;
	function _throttle(callback, ms) {
		return function () {
			if (!_throttleTimeout) {
				var args = arguments,
					_this = this;

				_throttleTimeout = setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					_throttleTimeout = void 0;
				}, ms);
			}
		};
	}

	function _cancelThrottle() {
		clearTimeout(_throttleTimeout);
		_throttleTimeout = void 0;
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		savedInputChecked.length = 0;

		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}


	/**
	 * Returns the "bounding client rect" of given element
	 * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
	 * @param  {[HTMLElement]} container       the parent the element will be placed in
	 * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
	 * (used for fixed positioning on el)
	 * @return {Object}                        The boundingClientRect of el
	 */
	function _getRect(el, container, adjustForTransform) {
		if (!el.getBoundingClientRect && el !== win) return;

		var elRect,
			top,
			left,
			bottom,
			right,
			height,
			width;

		if (el !== win) {
			elRect = el.getBoundingClientRect();
			top = elRect.top;
			left = elRect.left;
			bottom = elRect.bottom;
			right = elRect.right;
			height = elRect.height;
			width = elRect.width;
		} else {
			top = 0;
			left = 0;
			bottom = window.innerHeight;
			right = window.innerWidth;
			height = window.innerHeight;
			width = window.innerWidth;
		}

		if (adjustForTransform && el !== win) {
			// Adjust for translate()
			container = container || el.parentNode;

			// solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
			// Not needed on <= IE11
			if (!IE11OrLess) {
				do {
					if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
						var containerRect = container.getBoundingClientRect();

						// Set relative to edges of padding box of container
						top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
						left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
						bottom = top + elRect.height;
						right = left + elRect.width;

						break;
					}
					/* jshint boss:true */
				} while (container = container.parentNode);
			}

			// Adjust for scale()
			var matrix = _matrix(el),
				scaleX = matrix && matrix.a,
				scaleY = matrix && matrix.d;

			if (matrix) {
				top /= scaleY;
				left /= scaleX;

				width /= scaleX;
				height /= scaleY;

				bottom = top + height;
				right = left + width;
			}
		}

		return {
			top: top,
			left: left,
			bottom: bottom,
			right: right,
			width: width,
			height: height
		};
	}


	/**
	 * Checks if a side of an element is scrolled past a side of it's parents
	 * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
	 * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
	 * @return {Boolean}               Whether the element is overflowing the viewport on the given side of it's parent
	 */
	function _isScrolledPast(el, side) {
		var parent = _getParentAutoScrollElement(parent, true),
			elSide = _getRect(el)[side];

		/* jshint boss:true */
		while (parent) {
			var parentSide = _getRect(parent)[side],
				visible;

			if (side === 'top' || side === 'left') {
				visible = elSide >= parentSide;
			} else {
				visible = elSide <= parentSide;
			}

			if (!visible) return true;

			if (parent === win) break;

			parent = _getParentAutoScrollElement(parent, false);
		}

		return false;
	}

	// Fixed #973:
	_on(document, 'touchmove', function(evt) {
		if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
			evt.preventDefault();
		}
	});


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el, false);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild: _getChild
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.8.3';
	return Sortable;
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "58c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticField_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2512");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticField_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticField_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticField_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5bc3":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6902":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee6d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UGrid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b58":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("7037");

var assertThisInitialized = __webpack_require__("3c96");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6edf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7037":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "8bc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UHeaderCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c7ce");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UHeaderCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UHeaderCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UHeaderCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8d9f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UButtons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8fc6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UButtons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UButtons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UButtons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "8fc6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "9523":
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "970b":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "a038":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("05d5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a561":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_USort_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("31e8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_USort_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_USort_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_USort_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a88d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "af09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb35");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UCell_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "afe8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ca2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b047":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    now = __webpack_require__("408c"),
    toNumber = __webpack_require__("b4b0");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b4b0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c74a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-upload-component/FileUpload.vue?vue&type=template&id=72782c52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.className},[_vm._t("default"),_c('label',{attrs:{"for":_vm.inputId || _vm.name}}),_c('input-file',{ref:"file"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-upload-component/FileUpload.vue?vue&type=template&id=72782c52&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("448a");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("7037");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/components/vue-upload-component/utils/request.js
/**
 * Creates a XHR request
 *
 * @param {Object} options
 */
var createRequest = function createRequest(options) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.method || 'GET', options.url);
  xhr.responseType = 'json';

  if (options.headers) {
    Object.keys(options.headers).forEach(function (key) {
      xhr.setRequestHeader(key, options.headers[key]);
    });
  }

  return xhr;
};
/**
 * Sends a XHR request with certain body
 *
 * @param {XMLHttpRequest} xhr
 * @param {Object} body
 */

var sendRequest = function sendRequest(xhr, body) {
  return new Promise(function (resolve, reject) {
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var response;

        try {
          response = JSON.parse(xhr.response);
        } catch (err) {
          response = xhr.response;
        }

        resolve(response);
      } else {
        reject(xhr.response);
      }
    };

    xhr.onerror = function () {
      return reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
};
/**
 * Sends a XHR request with certain form data
 *
 * @param {XMLHttpRequest} xhr
 * @param {Object} data
 */

var sendFormRequest = function sendFormRequest(xhr, data) {
  var body = new FormData();

  for (var name in data) {
    body.append(name, data[name]);
  }

  return new Promise(function (resolve, reject) {
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var response;

        try {
          response = JSON.parse(xhr.response);
        } catch (err) {
          response = xhr.response;
        }

        resolve(response);
      } else {
        reject(xhr.response);
      }
    };

    xhr.onerror = function () {
      return reject(xhr.response);
    };

    xhr.send(body);
  });
};
/**
 * Creates and sends XHR request
 *
 * @param {Object} options
 *
 * @returns Promise
 */

/* harmony default export */ var request = (function (options) {
  var xhr = createRequest(options);
  return sendRequest(xhr, options.body);
});
// CONCATENATED MODULE: ./src/components/vue-upload-component/chunk/ChunkUploadHandler.js




var ChunkUploadHandler_ChunkUploadHandler =
/*#__PURE__*/
function () {
  /**
   * Constructor
   *
   * @param {File} file
   * @param {Object} options
   */
  function ChunkUploadHandler(file, options) {
    classCallCheck_default()(this, ChunkUploadHandler);

    this.file = file;
    this.options = options;
  }
  /**
   * Gets the max retries from options
   */


  createClass_default()(ChunkUploadHandler, [{
    key: "createChunks",

    /**
     * Creates all the chunks in the initial state
     */
    value: function createChunks() {
      this.chunks = [];
      var start = 0;
      var end = this.chunkSize;

      while (start < this.fileSize) {
        this.chunks.push({
          blob: this.file.file.slice(start, end),
          startOffset: start,
          active: false,
          retries: this.maxRetries
        });
        start = end;
        end = start + this.chunkSize;
      }
    }
    /**
     * Updates the progress of the file with the handler's progress
     */

  }, {
    key: "updateFileProgress",
    value: function updateFileProgress() {
      this.file.progress = this.progress;
    }
    /**
     * Paues the upload process
     * - Stops all active requests
     * - Sets the file not active
     */

  }, {
    key: "pause",
    value: function pause() {
      this.file.active = false;
      this.stopChunks();
    }
    /**
     * Stops all the current chunks
     */

  }, {
    key: "stopChunks",
    value: function stopChunks() {
      this.chunksUploading.forEach(function (chunk) {
        chunk.xhr.abort();
        chunk.active = false;
      });
    }
    /**
     * Resumes the file upload
     * - Sets the file active
     * - Starts the following chunks
     */

  }, {
    key: "resume",
    value: function resume() {
      this.file.active = true;
      this.startChunking();
    }
    /**
     * Starts the file upload
     *
     * @returns Promise
     * - resolve  The file was uploaded
     * - reject   The file upload failed
     */

  }, {
    key: "upload",
    value: function upload() {
      var _this = this;

      this.promise = new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
      this.start();
      return this.promise;
    }
    /**
     * Start phase
     * Sends a request to the backend to initialise the chunks
     */

  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      request({
        method: 'POST',
        headers: Object.assign({}, this.headers, {
          'Content-Type': 'application/json'
        }),
        url: this.action,
        body: Object.assign(this.startBody, {
          phase: 'start',
          mime_type: this.fileType,
          size: this.fileSize,
          name: this.fileName
        })
      }).then(function (res) {
        if (res.status !== 'success') {
          _this2.file.response = res;
          return _this2.reject('server');
        }

        _this2.sessionId = res.data.session_id;
        _this2.chunkSize = res.data.end_offset;

        _this2.createChunks();

        _this2.startChunking();
      }).catch(function (res) {
        _this2.file.response = res;

        _this2.reject('server');
      });
    }
    /**
     * Starts to upload chunks
     */

  }, {
    key: "startChunking",
    value: function startChunking() {
      for (var i = 0; i < this.maxActiveChunks; i++) {
        this.uploadNextChunk();
      }
    }
    /**
     * Uploads the next chunk
     * - Won't do anything if the process is paused
     * - Will start finish phase if there are no more chunks to upload
     */

  }, {
    key: "uploadNextChunk",
    value: function uploadNextChunk() {
      if (this.file.active) {
        if (this.hasChunksToUpload) {
          return this.uploadChunk(this.chunksToUpload[0]);
        }

        if (this.chunksUploading.length === 0) {
          return this.finish();
        }
      }
    }
    /**
     * Uploads a chunk
     * - Sends the chunk to the backend
     * - Sets the chunk as uploaded if everything went well
     * - Decreases the number of retries if anything went wrong
     * - Fails if there are no more retries
     *
     * @param {Object} chunk
     */

  }, {
    key: "uploadChunk",
    value: function uploadChunk(chunk) {
      var _this3 = this;

      chunk.progress = 0;
      chunk.active = true;
      this.updateFileProgress();
      chunk.xhr = createRequest({
        method: 'POST',
        headers: this.headers,
        url: this.action
      });
      chunk.xhr.upload.addEventListener('progress', function (evt) {
        if (evt.lengthComputable) {
          chunk.progress = Math.round(evt.loaded / evt.total * 100);
        }
      }, false);
      sendFormRequest(chunk.xhr, Object.assign(this.uploadBody, {
        phase: 'upload',
        session_id: this.sessionId,
        start_offset: chunk.startOffset,
        chunk: chunk.blob
      })).then(function (res) {
        chunk.active = false;

        if (res.status === 'success') {
          chunk.uploaded = true;
        } else {
          if (chunk.retries-- <= 0) {
            _this3.stopChunks();

            return _this3.reject('upload');
          }
        }

        _this3.uploadNextChunk();
      }).catch(function () {
        chunk.active = false;

        if (chunk.retries-- <= 0) {
          _this3.stopChunks();

          return _this3.reject('upload');
        }

        _this3.uploadNextChunk();
      });
    }
    /**
     * Finish phase
     * Sends a request to the backend to finish the process
     */

  }, {
    key: "finish",
    value: function finish() {
      var _this4 = this;

      this.updateFileProgress();
      request({
        method: 'POST',
        headers: Object.assign({}, this.headers, {
          'Content-Type': 'application/json'
        }),
        url: this.action,
        body: Object.assign(this.finishBody, {
          phase: 'finish',
          session_id: this.sessionId
        })
      }).then(function (res) {
        _this4.file.response = res;

        if (res.status !== 'success') {
          return _this4.reject('server');
        }

        _this4.resolve(res);
      }).catch(function (res) {
        _this4.file.response = res;

        _this4.reject('server');
      });
    }
  }, {
    key: "maxRetries",
    get: function get() {
      return parseInt(this.options.maxRetries);
    }
    /**
     * Gets the max number of active chunks being uploaded at once from options
     */

  }, {
    key: "maxActiveChunks",
    get: function get() {
      return parseInt(this.options.maxActive);
    }
    /**
     * Gets the file type
     */

  }, {
    key: "fileType",
    get: function get() {
      return this.file.type;
    }
    /**
     * Gets the file size
     */

  }, {
    key: "fileSize",
    get: function get() {
      return this.file.size;
    }
    /**
     * Gets the file size
     */

  }, {
    key: "fileName",
    get: function get() {
      return this.file.name;
    }
    /**
     * Gets action (url) to upload the file
     */

  }, {
    key: "action",
    get: function get() {
      return this.options.action || null;
    }
    /**
     * Gets the body to be merged when sending the request in start phase
     */

  }, {
    key: "startBody",
    get: function get() {
      return this.options.startBody || {};
    }
    /**
     * Gets the body to be merged when sending the request in upload phase
     */

  }, {
    key: "uploadBody",
    get: function get() {
      return this.options.uploadBody || {};
    }
    /**
     * Gets the body to be merged when sending the request in finish phase
     */

  }, {
    key: "finishBody",
    get: function get() {
      return this.options.finishBody || {};
    }
    /**
     * Gets the headers of the requests from options
     */

  }, {
    key: "headers",
    get: function get() {
      return this.options.headers || {};
    }
    /**
     * Whether it's ready to upload files or not
     */

  }, {
    key: "readyToUpload",
    get: function get() {
      return !!this.chunks;
    }
    /**
     * Gets the progress of the chunk upload
     * - Gets all the completed chunks
     * - Gets the progress of all the chunks that are being uploaded
     */

  }, {
    key: "progress",
    get: function get() {
      var _this5 = this;

      var completedProgress = this.chunksUploaded.length / this.chunks.length * 100;
      var uploadingProgress = this.chunksUploading.reduce(function (progress, chunk) {
        return progress + (chunk.progress | 0) / _this5.chunks.length;
      }, 0);
      return Math.min(completedProgress + uploadingProgress, 100);
    }
    /**
     * Gets all the chunks that are pending to be uploaded
     */

  }, {
    key: "chunksToUpload",
    get: function get() {
      return this.chunks.filter(function (chunk) {
        return !chunk.active && !chunk.uploaded;
      });
    }
    /**
     * Whether there are chunks to upload or not
     */

  }, {
    key: "hasChunksToUpload",
    get: function get() {
      return this.chunksToUpload.length > 0;
    }
    /**
     * Gets all the chunks that are uploading
     */

  }, {
    key: "chunksUploading",
    get: function get() {
      return this.chunks.filter(function (chunk) {
        return !!chunk.xhr && !!chunk.active;
      });
    }
    /**
     * Gets all the chunks that have finished uploading
     */

  }, {
    key: "chunksUploaded",
    get: function get() {
      return this.chunks.filter(function (chunk) {
        return !!chunk.uploaded;
      });
    }
  }]);

  return ChunkUploadHandler;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-upload-component/InputFile.vue?vue&type=template&id=a9ef5e68&
var InputFilevue_type_template_id_a9ef5e68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"file","name":_vm.$parent.name,"id":_vm.$parent.inputId || _vm.$parent.name,"accept":_vm.$parent.accept,"capture":_vm.$parent.capture,"webkitdirectory":_vm.$parent.directory && _vm.$parent.features.directory,"directory":_vm.$parent.directory && _vm.$parent.features.directory,"multiple":_vm.$parent.multiple && _vm.$parent.features.html5},on:{"change":_vm.change}})}
var InputFilevue_type_template_id_a9ef5e68_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-upload-component/InputFile.vue?vue&type=template&id=a9ef5e68&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-upload-component/InputFile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputFilevue_type_script_lang_js_ = ({
  methods: {
    change: function change(e) {
      this.$parent.addInputFile(e.target);
      e.target.value = '';

      if (!e.target.files || e.target.files.length === 0) {
        // ie9 fix #219
        this.$destroy(); // eslint-disable-next-line

        new this.constructor({
          parent: this.$parent,
          el: this.$el
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-upload-component/InputFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_upload_component_InputFilevue_type_script_lang_js_ = (InputFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/vue-upload-component/InputFile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  vue_upload_component_InputFilevue_type_script_lang_js_,
  InputFilevue_type_template_id_a9ef5e68_render,
  InputFilevue_type_template_id_a9ef5e68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputFile = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-upload-component/FileUpload.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var CHUNK_DEFAULT_OPTIONS = {
  headers: {},
  action: '',
  minSize: 1048576,
  maxActive: 3,
  maxRetries: 5,
  handler: ChunkUploadHandler_ChunkUploadHandler
};
/* harmony default export */ var FileUploadvue_type_script_lang_js_ = ({
  components: {
    InputFile: InputFile
  },
  props: {
    inputId: {
      type: String
    },
    name: {
      type: String,
      default: 'file'
    },
    accept: {
      type: String
    },
    capture: {},
    multiple: {
      type: Boolean
    },
    maximum: {
      type: Number,
      default: function _default() {
        return this.multiple ? 0 : 1;
      }
    },
    addIndex: {
      type: [Boolean, Number]
    },
    directory: {
      type: Boolean
    },
    postAction: {
      type: String
    },
    putAction: {
      type: String
    },
    customAction: {
      type: Function
    },
    headers: {
      type: Object,
      default: Object
    },
    data: {
      type: Object,
      default: Object
    },
    timeout: {
      type: Number,
      default: 0
    },
    drop: {
      default: false
    },
    dropDirectory: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 0
    },
    extensions: {
      default: Array
    },
    value: {
      type: Array,
      default: Array
    },
    thread: {
      type: Number,
      default: 1
    },
    // Chunk upload enabled
    chunkEnabled: {
      type: Boolean,
      default: false
    },
    // Chunk upload properties
    chunk: {
      type: Object,
      default: function _default() {
        return CHUNK_DEFAULT_OPTIONS;
      }
    }
  },
  data: function data() {
    return {
      files: this.value,
      features: {
        html5: true,
        directory: false,
        drag: false
      },
      active: false,
      dropActive: false,
      uploading: 0,
      destroy: false
    };
  },

  /**
   * mounted
   * @return {[type]} [description]
   */
  mounted: function mounted() {
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = true; // html5 特征

    if (window.FormData && input.files) {
      // 上传目录特征
      if (typeof input.webkitdirectory === 'boolean' || typeof input.directory === 'boolean') {
        this.features.directory = true;
      } // 拖拽特征


      if (this.features.html5 && typeof input.ondrop !== 'undefined') {
        this.features.drop = true;
      }
    } else {
      this.features.html5 = false;
    } // files 定位缓存


    this.maps = {};

    if (this.files) {
      for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        this.maps[file.id] = file;
      }
    }

    this.$nextTick(function () {
      // 更新下父级
      if (this.$parent) {
        this.$parent.$forceUpdate();
      } // 拖拽渲染


      this.watchDrop(this.drop);
    });
  },

  /**
   * beforeDestroy
   * @return {[type]} [description]
   */
  beforeDestroy: function beforeDestroy() {
    // 已销毁
    this.destroy = true; // 设置成不激活

    this.active = false;
  },
  computed: {
    /**
     * uploading 正在上传的线程
     * @return {[type]} [description]
     */

    /**
     * uploaded 文件列表是否全部已上传
     * @return {[type]} [description]
     */
    uploaded: function uploaded() {
      var file;

      for (var i = 0; i < this.files.length; i++) {
        file = this.files[i];

        if (file.fileObject && !file.error && !file.success) {
          return false;
        }
      }

      return true;
    },
    chunkOptions: function chunkOptions() {
      return Object.assign(CHUNK_DEFAULT_OPTIONS, this.chunk);
    },
    className: function className() {
      return ['file-uploads', this.features.html5 ? 'file-uploads-html5' : 'file-uploads-html4', this.features.directory && this.directory ? 'file-uploads-directory' : undefined, this.features.drop && this.drop ? 'file-uploads-drop' : undefined];
    }
  },
  watch: {
    active: function active(_active) {
      this.watchActive(_active);
    },
    dropActive: function dropActive() {
      if (this.$parent) {
        this.$parent.$forceUpdate();
      }
    },
    drop: function drop(value) {
      this.watchDrop(value);
    },
    value: function value(files) {
      if (this.files === files) {
        return;
      }

      this.files = files;
      var oldMaps = this.maps; // 重写 maps 缓存

      this.maps = {};

      for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        this.maps[file.id] = file;
      } // add, update


      for (var key in this.maps) {
        var newFile = this.maps[key];
        var oldFile = oldMaps[key];

        if (newFile !== oldFile) {
          this.emitFile(newFile, oldFile);
        }
      } // delete


      for (var _key in oldMaps) {
        if (!this.maps[_key]) {
          this.emitFile(undefined, oldMaps[_key]);
        }
      }
    }
  },
  methods: {
    // 清空
    clear: function clear() {
      if (this.files.length) {
        var files = this.files;
        this.files = []; // 清除input value

        this.$refs.file.$el.value = ''; // 定位

        this.maps = {}; // 事件

        this.emitInput();

        for (var i = 0; i < files.length; i++) {
          this.emitFile(undefined, files[i]);
        }
      }

      return true;
    },
    // 选择
    get: function get(id) {
      if (!id) {
        return false;
      }

      if (typeof_default()(id) === 'object') {
        return this.maps[id.id] || false;
      }

      return this.maps[id] || false;
    },
    // 添加
    add: function add(_files) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.addIndex;
      var files = _files;
      var isArray = files instanceof Array; // 不是数组整理成数组

      if (!isArray) {
        files = [files];
      } // 遍历规范对象


      var addFiles = [];

      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (this.features.html5 && file instanceof Blob) {
          file = {
            file: file,
            size: file.size,
            name: file.webkitRelativePath || file.relativePath || file.name || 'unknown',
            type: file.type
          };
        }

        var fileObject = false;

        if (file.fileObject === false) {// false
        } else if (file.fileObject) {
          fileObject = true;
        } else if (typeof Element !== 'undefined' && file.el instanceof Element) {
          fileObject = true;
        } else if (typeof Blob !== 'undefined' && file.file instanceof Blob) {
          fileObject = true;
        }

        if (fileObject) {
          file = objectSpread_default()({
            fileObject: true,
            size: -1,
            name: 'Filename',
            type: '',
            active: false,
            error: '',
            success: false,
            putAction: this.putAction,
            postAction: this.postAction,
            timeout: this.timeout
          }, file, {
            response: {},
            progress: '0.00',
            // 只读
            speed: 0 // 只读
            // xhr: false,                // 只读
            // iframe: false,             // 只读

          });
          file.data = objectSpread_default()({}, this.data, file.data ? file.data : {});
          file.headers = objectSpread_default()({}, this.headers, file.headers ? file.headers : {});
        } // 必须包含 id


        if (!file.id) {
          file.id = Math.random().toString(36).substr(2);
        }

        if (this.emitFilter(file, undefined)) {
          continue;
        } // 最大数量限制


        if (this.maximum > 1 && addFiles.length + this.files.length >= this.maximum) {
          break;
        }

        addFiles.push(file); // 最大数量限制

        if (this.maximum === 1) {
          break;
        }
      } // 没有文件


      if (!addFiles.length) {
        return false;
      } // 如果是 1 清空


      if (this.maximum === 1) {
        this.clear();
      } // 添加进去 files


      var newFiles;

      if (index === true || index === 0) {
        newFiles = addFiles.concat(this.files);
      } else if (index) {
        var _newFiles;

        newFiles = this.files.concat([]);

        (_newFiles = newFiles).splice.apply(_newFiles, [index, 0].concat(addFiles));
      } else {
        newFiles = this.files.concat(addFiles);
      }

      this.files = newFiles; // 定位

      for (var _i = 0; _i < addFiles.length; _i++) {
        var _file2 = addFiles[_i];
        this.maps[_file2.id] = _file2;
      } // 事件


      this.emitInput();

      for (var _i2 = 0; _i2 < addFiles.length; _i2++) {
        this.emitFile(addFiles[_i2], undefined);
      }

      return isArray ? addFiles : addFiles[0];
    },
    // 添加表单文件
    addInputFile: function addInputFile(el) {
      var files = [];

      if (el.files) {
        for (var i = 0; i < el.files.length; i++) {
          var file = el.files[i];
          files.push({
            size: file.size,
            name: file.webkitRelativePath || file.relativePath || file.name,
            type: file.type,
            file: file
          });
        }
      } else {
        var names = el.value.replace(/\\/g, '/').split('/');
        delete el.__vuex__;
        files.push({
          name: names[names.length - 1],
          el: el
        });
      }

      return this.add(files);
    },
    // 添加 DataTransfer
    addDataTransfer: function addDataTransfer(dataTransfer) {
      var _this = this;

      var files = [];

      if (dataTransfer.items && dataTransfer.items.length) {
        var items = [];

        for (var i = 0; i < dataTransfer.items.length; i++) {
          var item = dataTransfer.items[i];

          if (item.getAsEntry) {
            item = item.getAsEntry() || item.getAsFile();
          } else if (item.webkitGetAsEntry) {
            item = item.webkitGetAsEntry() || item.getAsFile();
          } else {
            item = item.getAsFile();
          }

          if (item) {
            items.push(item);
          }
        }

        return new Promise(function (resolve, reject) {
          var forEach = function forEach(i) {
            var item = items[i]; // 结束 文件数量大于 最大数量

            if (!item || _this.maximum > 0 && files.length >= _this.maximum) {
              return resolve(_this.add(files));
            }

            _this.getEntry(item).then(function (results) {
              files.push.apply(files, toConsumableArray_default()(results));
              forEach(i + 1);
            });
          };

          forEach(0);
        });
      }

      if (dataTransfer.files.length) {
        for (var _i3 = 0; _i3 < dataTransfer.files.length; _i3++) {
          files.push(dataTransfer.files[_i3]);

          if (this.maximum > 0 && files.length >= this.maximum) {
            break;
          }
        }

        return Promise.resolve(this.add(files));
      }

      return Promise.resolve([]);
    },
    // 获得 entry
    getEntry: function getEntry(entry) {
      var _this2 = this;

      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Promise(function (resolve, reject) {
        if (entry.isFile) {
          entry.file(function (file) {
            resolve([{
              size: file.size,
              name: path + file.name,
              type: file.type,
              file: file
            }]);
          });
        } else if (entry.isDirectory && _this2.dropDirectory) {
          var files = [];
          var dirReader = entry.createReader();

          var readEntries = function readEntries() {
            dirReader.readEntries(function (entries) {
              var forEach = function forEach(i) {
                if (!entries[i] && i === 0 || _this2.maximum > 0 && files.length >= _this2.maximum) {
                  return resolve(files);
                }

                if (!entries[i]) {
                  return readEntries();
                }

                _this2.getEntry(entries[i], path + entry.name + '/').then(function (results) {
                  files.push.apply(files, toConsumableArray_default()(results));
                  forEach(i + 1);
                });
              };

              forEach(0);
            });
          };

          readEntries();
        } else {
          resolve([]);
        }
      });
    },
    replace: function replace(id1, id2) {
      var file1 = this.get(id1);
      var file2 = this.get(id2);

      if (!file1 || !file2 || file1 === file2) {
        return false;
      }

      var files = this.files.concat([]);
      var index1 = files.indexOf(file1);
      var index2 = files.indexOf(file2);

      if (index1 === -1 || index2 === -1) {
        return false;
      }

      files[index1] = file2;
      files[index2] = file1;
      this.files = files;
      this.emitInput();
      return true;
    },
    // 移除
    remove: function remove(id) {
      var file = this.get(id);

      if (file) {
        if (this.emitFilter(undefined, file)) {
          return false;
        }

        var files = this.files.concat([]);
        var index = files.indexOf(file);

        if (index === -1) {
          console.error('remove', file);
          return false;
        }

        files.splice(index, 1);
        this.files = files; // 定位

        delete this.maps[file.id]; // 事件

        this.emitInput();
        this.emitFile(undefined, file);
      }

      return file;
    },
    // 更新
    update: function update(id, data) {
      var file = this.get(id);

      if (file) {
        var newFile = objectSpread_default()({}, file, data); // 停用必须加上错误


        if (file.fileObject && file.active && !newFile.active && !newFile.error && !newFile.success) {
          newFile.error = 'abort';
        }

        if (this.emitFilter(newFile, file)) {
          return false;
        }

        var files = this.files.concat([]);
        var index = files.indexOf(file);

        if (index === -1) {
          console.error('update', file);
          return false;
        }

        files.splice(index, 1, newFile);
        this.files = files; // 删除  旧定位 写入 新定位 （已便支持修改id)

        delete this.maps[file.id];
        this.maps[newFile.id] = newFile; // 事件

        this.emitInput();
        this.emitFile(newFile, file);
        return newFile;
      }

      return false;
    },
    // 预处理 事件 过滤器
    emitFilter: function emitFilter(newFile, oldFile) {
      var isPrevent = false;
      this.$emit('input-filter', newFile, oldFile, function () {
        isPrevent = true;
        return isPrevent;
      });
      return isPrevent;
    },
    // 处理后 事件 分发
    emitFile: function emitFile(newFile, oldFile) {
      this.$emit('input-file', newFile, oldFile);

      if (newFile && newFile.fileObject && newFile.active && (!oldFile || !oldFile.active)) {
        this.uploading++; // 激活

        this.$nextTick(function () {
          var _this3 = this;

          setTimeout(function () {
            _this3.upload(newFile).then(function () {
              // eslint-disable-next-line
              newFile = _this3.get(newFile);

              if (newFile && newFile.fileObject) {
                _this3.update(newFile, {
                  active: false,
                  success: !newFile.error
                });
              }
            }).catch(function (e) {
              _this3.update(newFile, {
                active: false,
                success: false,
                error: e.code || e.error || e.message || e
              });
            });
          }, parseInt(Math.random() * 50 + 50, 10));
        });
      } else if ((!newFile || !newFile.fileObject || !newFile.active) && oldFile && oldFile.fileObject && oldFile.active) {
        // 停止
        this.uploading--;
      } // 自动延续激活


      if (this.active && (Boolean(newFile) !== Boolean(oldFile) || newFile.active !== oldFile.active)) {
        this.watchActive(true);
      }
    },
    emitInput: function emitInput() {
      var files = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var f = _step.value;
          var d = Object.assign({}, f);
          delete d.el;
          files.push(d);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$emit('input', files);
    },
    // 上传
    upload: function upload(id) {
      var file = this.get(id); // 被删除

      if (!file) {
        return Promise.reject('not_exists');
      } // 不是文件对象


      if (!file.fileObject) {
        return Promise.reject('file_object');
      } // 有错误直接响应


      if (file.error) {
        return Promise.reject(file.error);
      } // 已完成直接响应


      if (file.success) {
        return Promise.resolve(file);
      } // 后缀


      var extensions = this.extensions;

      if (extensions && (extensions.length || typeof extensions.length === 'undefined')) {
        if (typeof_default()(extensions) !== 'object' || !(extensions instanceof RegExp)) {
          if (typeof extensions === 'string') {
            extensions = extensions.split(',').map(function (value) {
              return value.trim();
            }).filter(function (value) {
              return value;
            });
          }

          extensions = new RegExp('\\.(' + extensions.join('|').replace(/\./g, '\\.') + ')$', 'i');
        }

        if (file.name.search(extensions) === -1) {
          return Promise.reject('extension');
        }
      } // 大小


      if (this.size > 0 && file.size >= 0 && file.size > this.size) {
        return Promise.reject('size');
      }

      if (this.customAction) {
        return this.customAction(file, this);
      }

      if (this.features.html5) {
        if (this.shouldUseChunkUpload(file)) {
          return this.uploadChunk(file);
        }

        if (this.putAction) {
          return this.uploadPut(file);
        }

        if (this.postAction) {
          return this.uploadHtml5(file);
        }
      }

      if (this.postAction) {
        return this.uploadHtml4(file);
      }

      return Promise.reject('No action configured');
    },

    /**
     * Whether this file should be uploaded using chunk upload or not
     *
     * @param Object file
     */
    shouldUseChunkUpload: function shouldUseChunkUpload(file) {
      return this.chunkEnabled && !!this.chunkOptions.handler && file.size > this.chunkOptions.minSize;
    },

    /**
     * Upload a file using Chunk method
     *
     * @param File file
     */
    uploadChunk: function uploadChunk(file) {
      var HandlerClass = this.chunkOptions.handler;
      file.chunk = new HandlerClass(file, this.chunkOptions);
      return file.chunk.upload();
    },
    uploadPut: function uploadPut(file) {
      var querys = [];
      var value;

      for (var key in file.data) {
        value = file.data[key];

        if (value !== null && value !== undefined) {
          querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
      }

      var queryString = querys.length ? (file.putAction.indexOf('?') === -1 ? '?' : '&') + querys.join('&') : '';
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', file.putAction + queryString);
      return this.uploadXhr(xhr, file, file.file);
    },
    uploadHtml5: function uploadHtml5(file) {
      var form = new window.FormData();
      var value;

      for (var key in file.data) {
        value = file.data[key];

        if (value && typeof_default()(value) === 'object' && typeof value.toString !== 'function') {
          if (value instanceof File) {
            form.append(key, value, value.name);
          } else {
            form.append(key, JSON.stringify(value));
          }
        } else if (value !== null && value !== undefined) {
          form.append(key, value);
        }
      }

      form.append(this.name, file.file, file.file.filename || file.name);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', this.postAction);
      return this.uploadXhr(xhr, file, form);
    },
    uploadXhr: function uploadXhr(xhr, _file, body) {
      var _this4 = this;

      var file = _file;
      var speedTime = 0;
      var speedLoaded = 0; // 进度条

      xhr.upload.onprogress = function (e) {
        // 还未开始上传 已删除 未激活
        file = _this4.get(file);

        if (!e.lengthComputable || !file || !file.fileObject || !file.active) {
          return;
        } // 进度 速度 每秒更新一次


        var speedTime2 = Math.round(Date.now() / 1000);

        if (speedTime2 === speedTime) {
          return;
        }

        speedTime = speedTime2;
        file = _this4.update(file, {
          progress: (e.loaded / e.total * 100).toFixed(2),
          speed: e.loaded - speedLoaded
        });
        speedLoaded = e.loaded;
      }; // 检查激活状态


      var interval = setInterval(function () {
        file = _this4.get(file);

        if (file && file.fileObject && !file.success && !file.error && file.active) {
          return;
        }

        if (interval) {
          clearInterval(interval);
          interval = false;
        }

        try {
          xhr.abort();
          xhr.timeout = 1;
        } catch (e) {}
      }, 100);
      return new Promise(function (resolve, reject) {
        var complete;

        var fn = function fn(e) {
          // 已经处理过了
          if (complete) {
            return;
          }

          complete = true;

          if (interval) {
            clearInterval(interval);
            interval = false;
          }

          file = _this4.get(file); // 不存在直接响应

          if (!file) {
            return reject('not_exists');
          } // 不是文件对象


          if (!file.fileObject) {
            return reject('file_object');
          } // 有错误自动响应


          if (file.error) {
            return reject(file.error);
          } // 未激活


          if (!file.active) {
            return reject('abort');
          } // 已完成 直接相应


          if (file.success) {
            return resolve(file);
          }

          var data = {};

          switch (e.type) {
            case 'timeout':
            case 'abort':
              data.error = e.type;
              break;

            case 'error':
              if (!xhr.status) {
                data.error = 'network';
              } else if (xhr.status >= 500) {
                data.error = 'server';
              } else if (xhr.status >= 400) {
                data.error = 'denied';
              }

              break;

            default:
              if (xhr.status >= 500) {
                data.error = 'server';
              } else if (xhr.status >= 400) {
                data.error = 'denied';
              } else {
                data.progress = '100.00';
              }

          }

          if (xhr.responseText) {
            var contentType = xhr.getResponseHeader('Content-Type');

            if (contentType && contentType.indexOf('/json') !== -1) {
              data.response = JSON.parse(xhr.responseText);
            } else {
              data.response = xhr.responseText;
            }
          } // 更新


          file = _this4.update(file, data); // 相应错误

          if (file.error) {
            return reject(file.error);
          } // 响应


          return resolve(file);
        }; // 事件


        xhr.onload = fn;
        xhr.onerror = fn;
        xhr.onabort = fn;
        xhr.ontimeout = fn; // 超时

        if (file.timeout) {
          xhr.timeout = file.timeout;
        } // headers


        for (var key in _this4.headers) {
          xhr.setRequestHeader(key, _this4.headers[key]);
        } // 更新 xhr


        file = _this4.update(file, {
          xhr: xhr
        }); // 开始上传

        xhr.send(body);
      });
    },
    uploadHtml4: function uploadHtml4(_file) {
      var _this5 = this;

      var file = _file;

      var onKeydown = function onKeydown(e) {
        if (e.keyCode === 27) {
          e.preventDefault();
        }
      };

      var iframe = document.createElement('iframe');
      iframe.id = 'upload-iframe-' + file.id;
      iframe.name = 'upload-iframe-' + file.id;
      iframe.src = 'about:blank';
      iframe.setAttribute('style', 'width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;');
      var form = document.createElement('form');
      form.action = this.postAction;
      form.name = 'upload-form-' + file.id;
      form.setAttribute('method', 'POST');
      form.setAttribute('target', 'upload-iframe-' + file.id);
      form.setAttribute('enctype', 'multipart/form-data');
      var value;
      var input;

      for (var key in file.data) {
        value = file.data[key];

        if (value && typeof_default()(value) === 'object' && typeof value.toString !== 'function') {
          value = JSON.stringify(value);
        }

        if (value !== null && value !== undefined) {
          input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          form.appendChild(input);
        }
      }

      form.appendChild(file.el);
      document.body.appendChild(iframe).appendChild(form);

      var getResponseData = function getResponseData() {
        var doc;

        try {
          if (iframe.contentWindow) {
            doc = iframe.contentWindow.document;
          }
        } catch (err) {}

        if (!doc) {
          try {
            doc = iframe.contentDocument ? iframe.contentDocument : iframe.document;
          } catch (err) {
            doc = iframe.document;
          }
        }

        if (doc && doc.body) {
          return doc.body.innerHTML;
        }

        return null;
      };

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          file = _this5.update(file, {
            iframe: iframe
          }); // 不存在

          if (!file) {
            return reject('not_exists');
          } // 定时检查


          var interval = setInterval(function () {
            file = _this5.get(file);

            if (file && file.fileObject && !file.success && !file.error && file.active) {
              return;
            }

            if (interval) {
              clearInterval(interval);
              interval = false;
            }

            iframe.onabort({
              type: file ? 'abort' : 'not_exists'
            });
          }, 100);
          var complete;

          var fn = function fn(e) {
            // 已经处理过了
            if (complete) {
              return;
            }

            complete = true;

            if (interval) {
              clearInterval(interval);
              interval = false;
            } // 关闭 esc 事件


            document.body.removeEventListener('keydown', onKeydown);
            file = _this5.get(file); // 不存在直接响应

            if (!file) {
              return reject('not_exists');
            } // 不是文件对象


            if (!file.fileObject) {
              return reject('file_object');
            } // 有错误自动响应


            if (file.error) {
              return reject(file.error);
            } // 未激活


            if (!file.active) {
              return reject('abort');
            } // 已完成 直接相应


            if (file.success) {
              return resolve(file);
            }

            var response = getResponseData();
            var data = {};

            switch (e.type) {
              case 'abort':
                data.error = 'abort';
                break;

              case 'error':
                if (file.error) {
                  data.error = file.error;
                } else if (response === null) {
                  data.error = 'network';
                } else {
                  data.error = 'denied';
                }

                break;

              default:
                if (file.error) {
                  data.error = file.error;
                } else if (data === null) {
                  data.error = 'network';
                } else {
                  data.progress = '100.00';
                }

            }

            if (response !== null) {
              if (response && response.substr(0, 1) === '{' && response.substr(response.length - 1, 1) === '}') {
                try {
                  response = JSON.parse(response);
                } catch (err) {}
              }

              data.response = response;
            } // 更新


            file = _this5.update(file, data);

            if (file.error) {
              return reject(file.error);
            } // 响应


            return resolve(file);
          }; // 添加事件


          iframe.onload = fn;
          iframe.onerror = fn;
          iframe.onabort = fn; // 禁止 esc 键

          document.body.addEventListener('keydown', onKeydown); // 提交

          form.submit();
        }, 50);
      }).then(function (res) {
        iframe.parentNode && iframe.parentNode.removeChild(iframe);
        return res;
      }).catch(function (res) {
        iframe.parentNode && iframe.parentNode.removeChild(iframe);
        return res;
      });
    },
    watchActive: function watchActive(active) {
      var file;
      var index = 0;

      while (file = this.files[index]) {
        index++;

        if (!file.fileObject) {// 不是文件对象
        } else if (active && !this.destroy) {
          if (this.uploading >= this.thread || this.uploading && !this.features.html5) {
            break;
          }

          if (!file.active && !file.error && !file.success) {
            this.update(file, {
              active: true
            });
          }
        } else {
          if (file.active) {
            this.update(file, {
              active: false
            });
          }
        }
      }

      if (this.uploading === 0) {
        this.active = false;
      }
    },
    watchDrop: function watchDrop(_el) {
      var el = _el;

      if (!this.features.drop) {
        return;
      } // 移除挂载


      if (this.dropElement) {
        try {
          document.removeEventListener('dragenter', this.onDragenter, false);
          document.removeEventListener('dragleave', this.onDragleave, false);
          document.removeEventListener('drop', this.onDocumentDrop, false);
          this.dropElement.removeEventListener('dragover', this.onDragover, false);
          this.dropElement.removeEventListener('drop', this.onDrop, false);
        } catch (e) {}
      }

      if (!el) {
        el = false;
      } else if (typeof el === 'string') {
        el = document.querySelector(el) || this.$root.$el.querySelector(el);
      } else if (el === true) {
        el = this.$parent.$el;
      }

      this.dropElement = el;

      if (this.dropElement) {
        document.addEventListener('dragenter', this.onDragenter, false);
        document.addEventListener('dragleave', this.onDragleave, false);
        document.addEventListener('drop', this.onDocumentDrop, false);
        this.dropElement.addEventListener('dragover', this.onDragover, false);
        this.dropElement.addEventListener('drop', this.onDrop, false);
      }
    },
    onDragenter: function onDragenter(e) {
      e.preventDefault();

      if (this.dropActive) {
        return;
      }

      if (!e.dataTransfer) {
        return;
      }

      var dt = e.dataTransfer;

      if (dt.files && dt.files.length) {
        this.dropActive = true;
      } else if (!dt.types) {
        this.dropActive = true;
      } else if (dt.types.indexOf && dt.types.indexOf('Files') !== -1) {
        this.dropActive = true;
      } else if (dt.types.contains && dt.types.contains('Files')) {
        this.dropActive = true;
      }
    },
    onDragleave: function onDragleave(e) {
      e.preventDefault();

      if (!this.dropActive) {
        return;
      }

      if (e.target.nodeName === 'HTML' || e.target === e.explicitOriginalTarget || !e.fromElement && (e.clientX <= 0 || e.clientY <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        this.dropActive = false;
      }
    },
    onDragover: function onDragover(e) {
      e.preventDefault();
    },
    onDocumentDrop: function onDocumentDrop() {
      this.dropActive = false;
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      this.addDataTransfer(e.dataTransfer);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-upload-component/FileUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_upload_component_FileUploadvue_type_script_lang_js_ = (FileUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-upload-component/FileUpload.vue?vue&type=style&index=0&lang=css&
var FileUploadvue_type_style_index_0_lang_css_ = __webpack_require__("2160");

// CONCATENATED MODULE: ./src/components/vue-upload-component/FileUpload.vue






/* normalize component */

var FileUpload_component = Object(componentNormalizer["a" /* default */])(
  vue_upload_component_FileUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FileUpload = __webpack_exports__["default"] = (FileUpload_component.exports);

/***/ }),

/***/ "c7ce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UTable_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6edf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UTable_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UTable_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UTable_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ed52":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2aad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ed6d":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("4a4b");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "ee6d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f52f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f893":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("f921"), __esModule: true };

/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("3156");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Box.vue?vue&type=template&id=515e5f5e&
var Boxvue_type_template_id_515e5f5e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.removed)?_c('div',{staticClass:"box",class:[_vm.boxType, _vm.headerStyle, _vm.boxTheme]},[(_vm.title)?_c('div',{staticClass:"box-header",class:{'with-border':_vm.withBorder}},[_c('div',{staticClass:"box-title",style:({'text-align':_vm.headerAlign})},[_vm._t("title",[_c('p',[(_vm.icon)?_c('Icon',{attrs:{"type":_vm.icon}}):_vm._e(),_vm._v(_vm._s(_vm.title))],1)])],2),_c('div',{staticClass:"box-tools pull-right"},[_vm._t("tools"),(_vm.collapse)?_c('button',{staticClass:"box-tool",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();return _vm.toggle($event)}}},[(_vm.open)?_c('Icon',{staticClass:"box-icon",attrs:{"type":"ios-remove"}}):_c('Icon',{staticClass:"box-icon",attrs:{"type":"ios-add"}})],1):_vm._e(),(_vm.removable)?_c('button',{staticClass:"box-tool",attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();_vm.removed=true}}},[_c('Icon',{staticClass:"box-icon",attrs:{"type":"ios-close"}})],1):_vm._e()],2)]):_vm._e(),_c('transition',{attrs:{"name":"collapse"},on:{"enter":_vm.enter,"after-enter":_vm.afterEnter,"before-leave":_vm.beforeLeave}},[(_vm.open)?_c('div',{staticClass:"box-body",style:(_vm.bodyStyle)},[_vm._t("default")],2):_vm._e()]),(_vm.$slots.footer)?_c('div',{staticClass:"box-footer",class:{'with-footer-border':_vm.withFooterBorder},style:({'text-align':_vm.footerAlign})},[_vm._t("footer")],2):_vm._e()],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Box.vue?vue&type=template&id=515e5f5e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Box.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Boxvue_type_script_lang_js_ = ({
  name: 'box',
  data: function data() {
    return {
      open: true,
      removed: false
    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    headerAlign: {
      type: String,
      default: 'left'
    },
    footerAlign: {
      type: String,
      default: 'left'
    },
    withBorder: {
      type: Boolean,
      default: true
    },
    withFooterBorder: {
      type: Boolean,
      default: true
    },
    headerClass: {
      type: String,
      default: ''
    },
    collapse: {
      type: Boolean,
      default: true
    },
    removable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    height: {},
    theme: {
      type: String,
      default: '' // 目前只支持 card 和 ''

    }
  },
  computed: {
    headerStyle: function headerStyle() {
      if (this.headerClass) return "box-".concat(this.headerClass);else return '';
    },
    bodyStyle: function bodyStyle() {
      if (this.height) {
        if (typeof this.height === 'number') {
          return {
            height: "".concat(this.height, "px"),
            overflow: 'auto'
          };
        } else {
          return {
            height: this.height,
            overflow: 'auto'
          };
        }
      }
    },
    boxTheme: function boxTheme() {
      if (this.theme === 'default') return;

      if (this.theme) {
        return "box-theme-".concat(this.theme);
      }
    }
  },
  methods: {
    toggle: function toggle() {
      this.open = !this.open;
    },
    enter: function enter(el) {
      el.style.height = 'auto';
      var endWidth = getComputedStyle(el).height;
      el.style.height = '0px';
      el.offsetHeight; // force repaint

      el.style.height = endWidth;
    },
    afterEnter: function afterEnter(el) {
      el.style.height = 'auto';
    },
    beforeLeave: function beforeLeave(el) {
      el.style.height = getComputedStyle(el).height;
      el.offsetHeight; // force repaint

      el.style.height = '0px';
    }
  }
});
// CONCATENATED MODULE: ./src/components/Box.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Boxvue_type_script_lang_js_ = (Boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Box.vue?vue&type=style&index=0&lang=css&
var Boxvue_type_style_index_0_lang_css_ = __webpack_require__("ed52");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Box.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Boxvue_type_script_lang_js_,
  Boxvue_type_template_id_515e5f5e_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Box = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UGrid.vue?vue&type=template&id=93af0c74&
var UGridvue_type_template_id_93af0c74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-grid-wrapper",class:_vm.themeClass},[_vm._t("beforeQuery"),(_vm.query)?_c('Query',_vm._b({ref:"query",on:{"input":_vm.handleQuerySubmit,"on-query-change":_vm.handleQueryChange}},'Query',_vm.query,false)):_vm._e(),_vm._t("afterQuery"),(_vm.buttons.length>0 || _vm.rightButtons.length>0)?_c('div',{staticClass:"u-grid-tools",attrs:{"slot":"tools"},slot:"tools"},[(_vm.buttons.length>0)?_c('div',{staticClass:"u-grid-tools-left"},[_c('Buttons',{ref:"buttons",attrs:{"buttons":_vm.buttons,"data":_vm.store,"target":this}})],1):_vm._e(),(_vm.rightButtons.length>0)?_c('div',{staticClass:"u-grid-tools-right"},[_c('Buttons',{ref:"rightButtons",attrs:{"buttons":_vm.rightButtons,"data":_vm.store,"target":this}})],1):_vm._e()]):_vm._e(),_vm._t("beforeTable"),_c('div',{staticClass:"u-grid"},[(_vm.leftWidth)?_c('u-table',{ref:"left",attrs:{"store":_vm.store,"width":_vm.leftWidth,"table-width":_vm.tableWidth,"table-class":_vm.leftTableClass,"fixed":"left"}}):_vm._e(),_c('u-table',{ref:"table",attrs:{"store":_vm.store,"width":_vm.gridWidth,"table-width":_vm.tableWidth,"table-class":"u-grid-body"},on:{"scroll":_vm.handleScroll}}),_c('u-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.rightWidth && _vm.xscroll && !_vm.isScrollRight),expression:"rightWidth && xscroll && !isScrollRight"}],ref:"right",attrs:{"store":_vm.store,"width":_vm.rightWidth,"table-width":_vm.tableWidth,"table-class":_vm.rightTableClass,"fixed":"right"}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.columnResizing),expression:"columnResizing"}],staticClass:"column-dragger-guide",style:(_vm.columnDraggerStyles)}),(_vm.loadingText)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],ref:"loading",staticClass:"loading",domProps:{"innerHTML":_vm._s(_vm.loadingText)}}):_vm._e()],1),(_vm.pagination && _vm.store.states.data.length > 0)?_c('Pagination',{ref:"pagination",attrs:{"store":_vm.store.states},on:{"on-page":_vm.handlePage,"on-page-size":_vm.handlePageSize}},[_c('Buttons',{ref:"bottomButtons",attrs:{"buttons":_vm.bottomButtons,"target":this,"data":_vm.store}})],1):_vm._e(),_vm._t("afterTable")],2)}
var UGridvue_type_template_id_93af0c74_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/UGrid.vue?vue&type=template&id=93af0c74&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UTable.vue?vue&type=template&id=0cdbef22&
var UTablevue_type_template_id_0cdbef22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-table",class:[_vm.tableClass, _vm.height==='auto' ? 'auto-height' : ''],style:(_vm.wrapStyles)},[(_vm.headerShow)?_c('div',{staticClass:"u-table-header-wrapper"},[_c('div',{ref:"header",staticClass:"u-table-header-scroll",style:(_vm.headerScrollStyles),on:{"scroll":_vm.handleHeaderScroll}},[_c('table',{staticClass:"u-table-header",style:(_vm.tableStyles),attrs:{"cellspaceing":"0","cellpadding":"0","border":"0"}},[_c('colgroup',_vm._l((_vm.columns),function(column,index){return _c('col',{style:(_vm.getColumnStyle(column))})}),0),_c('thead',_vm._l((_vm.drawColumns),function(cols){return _c('tr',{style:(_vm.headerTrStyle)},_vm._l((cols),function(column,index){return _c('th',{style:(_vm.thStyles(column)),attrs:{"rowspan":column.rowspan,"colspan":column.colspan}},[_c('HeaderCell',{attrs:{"store":_vm.store,"column":column}})],1)}),0)}),0)])])]):_vm._e(),_c('div',{ref:"body",staticClass:"u-table-body-scroll",style:(_vm.bodyStyles),on:{"scroll":_vm.handleBodyScroll}},[(_vm.data.length===0 && !_vm.fixed)?_c('div',{staticClass:"u-table-no-data",style:(_vm.noDataStyles)},[_vm._v(_vm._s(_vm.noData))]):_vm._e(),_c('table',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.length>0),expression:"data.length>0"}],ref:"content",style:(_vm.tableStyles),attrs:{"cellspaceing":"0","cellpadding":"0","border":"0"}},[_c('colgroup',_vm._l((_vm.columns),function(column){return _c('col',{style:(_vm.getColumnStyle(column))})}),0),_c('tbody',{ref:"table_body"},_vm._l((_vm.rows),function(row,row_index){
var _obj;
return (!row.row._hidden)?_c('tr',{key:row._rowKey,ref:"rows",refInFor:true,class:( _obj = {}, _obj[_vm.store.states.selectedRowClass] = _vm.store.states.selectedRowClass && _vm.store.selected(row.row), _obj.hover = _vm.hoverShow && _vm.hoverRowKey && row._rowKey==_vm.hoverRowKey, _obj ),style:(_vm.bodyTrStyle),on:{"mouseenter":function($event){return _vm.handleTrMouseEnter(row.row)},"mouseleave":function($event){return _vm.handleTrMouseLeave(row.row)}}},_vm._l((row.columns),function(col,col_index){return _c('td',{style:(_vm.cellStyles(col.column)),attrs:{"rowspan":col.rowspan,"colspan":col.colspan},on:{"click":function($event){return _vm.handleClick(col.row)}}},[_c('Cell',{attrs:{"store":_vm.store,"col":col,"row_index":row_index,"fixed":_vm.fixed}})],1)}),0):_vm._e()}),0)])])])}
var UTablevue_type_template_id_0cdbef22_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/UTable.vue?vue&type=template&id=0cdbef22&

// EXTERNAL MODULE: external "iview"
var external_iview_ = __webpack_require__("3955");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("7037");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/components/utils/utils.js

var scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};
var scrollbarWidth;
var measureScrollbar = function measureScrollbar() {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 0; // 如果 document 不在，则证明不在浏览器环境，直接返回，兼容 node server render。
  }

  if (scrollbarWidth) {
    return scrollbarWidth; // 滚动条在固定的环境下宽度不会改变，因此只做一次探测即可，优化性能。
  }

  var scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
    if (Object.prototype.hasOwnProperty.call(scrollbarMeasure, scrollProp)) {
      scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }
  }); // 创造一个远离人世的带滚动条的 div 用于探测，用户对于此无感知。

  document.body.appendChild(scrollDiv);
  var width = scrollDiv.offsetWidth - scrollDiv.clientWidth; // 获取滚动条的宽度，offsetWidth 和 clientWidth 的区别，你能说清楚吗？

  document.body.removeChild(scrollDiv); // 探测完成，销毁测试元素，减少对页面的影响。

  scrollbarWidth = width; // 缓存结果，优化性能

  return scrollbarWidth;
};
var clickoutside = {
  bind: function bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }

      if (binding.expression) {
        binding.value(e);
      }
    }

    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  update: function update() {},
  unbind: function unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};
var mapState = function mapState() {
  var r = {};

  for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  var _loop = function _loop() {
    var name = names[_i];
    r[name] = {
      get: function get() {
        return this.store.states[name];
      },
      set: function set(value) {
        this.store.grid.$set(this.store.states, name, value);
      }
    };
  };

  for (var _i = 0; _i < names.length; _i++) {
    _loop();
  }

  return r;
};
var mapMethod = function mapMethod() {
  var r = {};

  for (var _len2 = arguments.length, names = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    names[_key2] = arguments[_key2];
  }

  var _loop2 = function _loop2() {
    var name = names[_i2];

    r[name] = function mappedMethod() {
      var _this$store;

      return (_this$store = this.store)[name].apply(_this$store, arguments);
    };
  };

  for (var _i2 = 0; _i2 < names.length; _i2++) {
    _loop2();
  }

  return r;
};
var getOffset = function getOffset(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var val = el.offsetParent;

  while (val) {
    top += val.offsetTop;
    left += val.offsetLeft;
    val = val.offsetParent;
  }

  return {
    top: top,
    left: left
  };
};
var copyDataRow = function copyDataRow(s, o) {
  for (var name in o) {
    if (name[0] !== '_') {
      s[name] = o[name];
    }
  }
};
var isDate = function isDate(str) {
  if (!str) return false;
  var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
  if (r == null) return false;
  var d = new Date(r[1], r[3] - 1, r[4]);
  return d.getFullYear() == r[1] && d.getMonth() + 1 == r[3] && d.getDate() == r[4];
};
var isDateTime = function isDateTime(str) {
  if (!str) return false;
  var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
  var r = str.match(reg);
  if (r == null) return false;
  var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
  return d.getFullYear() == r[1] && d.getMonth() + 1 == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7];
};
var text2html = function text2html(text) {
  if (!text) return ''; // 1: Plain Text Search

  text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/  /g, "&nbsp;&nbsp;"); // 2: Line Breaks

  text = text.replace(/\r\n?|\n/g, "<br>"); // 3: Paragraphs

  text = text.replace(/<br>\s*<br>/g, "</p><p>"); // 4: Wrap in Paragraph Tags

  text = "<p>" + text + "</p>";
  return text;
};
var QueryURL = function QueryURL(url) {
  this.urlParams = {};
  this.load(url);
};
QueryURL.prototype = {
  load: function load(param) {
    this.urlParams = {};
    this.url = param;

    var e,
        k,
        v,
        i,
        a = /\+/g,
        // Regex for replacing addition symbol with a space
    r = /([^&=]+)=?([^&]*)/g,
        d = function d(s) {
      return decodeURIComponent(s.replace(a, " "));
    };

    if (!param) {
      param = window.location.search;
    }

    if (param.charAt(0) == '?') {
      param = param.substring(1);
      this.url = '';
    } else {
      i = param.indexOf('?');

      if (i > -1) {
        this.url = param.substring(0, i);
        param = param.substring(i + 1);
      } else param = '';
    }

    while (e = r.exec(param)) {
      k = d(e[1]);
      v = d(e[2]);
      this.set(k, v, false);
    }

    return this;
  },
  toString: function toString(options) {
    var settings = {
      'hash': false,
      'traditional': true
    };

    if (options) {
      $.extend(settings, options);
    }

    var old = jQuery.ajaxSettings.traditional;
    jQuery.ajaxSettings.traditional = settings.traditional;
    var result = '?' + $.param(this.urlParams);
    jQuery.ajaxSettings.traditional = old;
    if (settings.hash) result = result + window.location.hash;
    return result;
  },
  merge: function merge(data) {
    for (var k in data) {
      if (k[0] == '-') //first char is '-' means this key will be removed
        this.remove(k.substr(1));else {
        this.set(k, data[k], true);
      }
    }

    return this;
  },
  set: function set(k, v, replace) {
    replace = replace || false;
    if (replace) this.urlParams[k] = v;else {
      if (k in this.urlParams) {
        if (Array.isArray(this.urlParams[k])) {
          this.urlParams[k].push(v);
        } else {
          this.urlParams[k] = [this.urlParams[k], v];
        }
      } else this.urlParams[k] = v;
    }
    return this;
  },
  get: function get(k) {
    return this.urlParams[k];
  },
  remove: function remove(k) {
    if (k in this.urlParams) {
      delete this.urlParams[k];
    }

    return this;
  }
};
var uuid = function uuid() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}; // 格式化choices, 转对对象形式

var formatChoices = function formatChoices(choices) {
  var d;
  if (!choices || isEmpty(choices)) return [];
  if (!Array.isArray(choices)) choices = [choices];
  var r = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = choices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (Array.isArray(item)) {
        d = {
          value: item[0],
          label: item[1]
        };
      } else if (item instanceof Object && item.hasOwnProperty('label') && item.hasOwnProperty('value')) {
        d = item;
      } else {
        continue;
      }

      r.push(d);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return r;
}; // 从choices中找到与value匹配的值， 返回为数组，每项值为 {value: xxx, label: xxx}

var findChoices = function findChoices(choices, value) {
  var v = [];
  var v1 = value;
  choices = formatChoices(choices);
  if (!Array.isArray(value)) v1 = [value];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = v1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var x = _step2.value;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = choices[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var c = _step3.value;

          if (x instanceof Object && x.value === c.value || x === c.value) {
            v.push(c);
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return v;
};
var formatDate = function formatDate(d) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy/MM/dd';
  if (!d) return '';

  if (typeof d === 'string') {
    d = new Date(d);
  }

  var year = d.getFullYear() + '';
  var mon = d.getMonth() + 1 < 10 ? "0".concat(d.getMonth() + 1) : "".concat(d.getMonth() + 1);
  var day = d.getDate() < 10 ? "0".concat(d.getDate()) : "".concat(d.getDate());
  var hour = d.getHours() < 10 ? "0".concat(d.getHours()) : "".concat(d.getHours());
  var minute = d.getMinutes() < 10 ? "0".concat(d.getMinutes()) : "".concat(d.getMinutes());
  var second = d.getSeconds() < 10 ? "0".concat(d.getSeconds()) : "".concat(d.getSeconds());
  return fmt.replace('yyyy', year).replace('MM', mon).replace('dd', day).replace('hh', hour).replace('mm', minute).replace('ss', second);
}; // deepCopy

var deepCopy = function deepCopy(data) {
  var o;

  if (Array.isArray(data)) {
    o = [];
  } else if (data instanceof Object) {
    o = {};
  } else {
    return data;
  }

  if (Array.isArray(data)) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var c = _step4.value;
        o.push(deepCopy(c));
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  } else if (data instanceof Object) {
    for (var i in data) {
      o[i] = deepCopy(data[i]);
    }
  }

  return o;
}; // isEmpty

var isEmpty = function isEmpty(v) {
  if (Array.isArray(v)) {
    return v.length === 0;
  } else if (v instanceof Object) {
    for (var c in v) {
      return false;
    }

    return true;
  }

  return !v;
}; // merge 合并多个对象

var merge = function merge(object) {
  for (var _len3 = arguments.length, source = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    source[_key3 - 1] = arguments[_key3];
  }

  for (var _i3 = 0; _i3 < source.length; _i3++) {
    var c = source[_i3];

    for (var x in c) {
      object[x] = c[x];
    }
  }

  return object;
}; // clear 清除对象属性

var utils_reset = function reset(x) {
  var c = x;

  if (Array.isArray(x)) {
    c = [];
  } else if (x instanceof Object) {
    c = {};
  } else if (typeof x === 'number') {
    c = 0;
  } else if (typeof x === 'string') {
    c = '';
  } else if (typeof x === 'boolean') {
    c = false;
  }

  return c;
};
var findParent = function findParent(self, componentName) {
  var parent = self.$parent || self.$root;
  var name = parent.$options.name;
  if (!componentName) componentName = name;

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;

    if (parent) {
      name = parent.$options.name;
    }
  }

  if (parent) {
    return parent;
  }
};

function compare2Objects(x, y, leftChain, rightChain) {
  var p; // remember that NaN === NaN returns false
  // and isNaN(undefined) returns true

  if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
    return true;
  } // Compare primitives and functions.     
  // Check if both arguments link to the same object.
  // Especially useful on the step where we compare prototypes


  if (x === y) {
    return true;
  } // Works in case when functions are created in constructor.
  // Comparing dates is a common scenario. Another built-ins?
  // We can even handle functions passed across iframes


  if (typeof x === 'function' && typeof y === 'function' || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) {
    return x.toString() === y.toString();
  } // At last checking prototypes as good as we can


  if (!(x instanceof Object && y instanceof Object)) {
    return false;
  }

  if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
    return false;
  }

  if (x.constructor !== y.constructor) {
    return false;
  }

  if (x.prototype !== y.prototype) {
    return false;
  } // Check for infinitive linking loops


  if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
    return false;
  } // Quick checking of one object being a subset of another.
  // todo: cache the structure of arguments[0] for performance


  for (p in y) {
    if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
      return false;
    } else if (typeof_default()(y[p]) !== typeof_default()(x[p])) {
      return false;
    }
  }

  for (p in x) {
    if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
      return false;
    } else if (typeof_default()(y[p]) !== typeof_default()(x[p])) {
      return false;
    }

    switch (typeof_default()(x[p])) {
      case 'object':
      case 'function':
        leftChain.push(x);
        rightChain.push(y);

        if (!compare2Objects(x[p], y[p], leftChain, rightChain)) {
          return false;
        }

        leftChain.pop();
        rightChain.pop();
        break;

      default:
        if (x[p] !== y[p]) {
          return false;
        }

        break;
    }
  }

  return true;
} // 比较两个对象，以obj1为准，比较与obj2不同的值


var deepCompare = function deepCompare(x, y) {
  var returnValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var i,
      l,
      leftChain,
      rightChain,
      result = {};
  leftChain = [];
  rightChain = [];

  if (returnValue) {
    for (var k in x) {
      if (!compare2Objects(x[k], y[k], leftChain, rightChain)) {
        result[k] = {
          value: x[k],
          old_value: y[k]
        };
      }
    }

    return result;
  } else {
    return compare2Objects(x, y, [], []);
  }
}; // 设置 select choice值

var setChoice = function setChoice(vm, c, value) {
  if (!c.options) {
    vm.$set(c, 'options', {
      choices: value,
      type: 'select'
    });
  } else {
    vm.$set(c.options, 'choices', value);
  }
};
var walkTree = function walkTree(data, callback) {
  var childrenField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  if (!data || data.length === 0) return;

  var _f = function _f(d) {
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = d[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var c = _step5.value;
        var ret = callback(c);
        if (ret) return; // 如果返回 true 则结束递归

        if (c[childrenField] && c[childrenField].length > 0) {
          _f(c[childrenField]);
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  };

  return _f(data);
};
// CONCATENATED MODULE: ./src/components/mixins/emitter.js

/* This is comes from iview */

function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.name;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      // todo 如果 params 是空数组，接收到的会是 undefined
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

/* harmony default export */ var emitter = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = findParent(this, componentName);

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UCell.vue?vue&type=template&id=6d7dc468&
var UCellvue_type_template_id_6d7dc468_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-cell",class:_vm.classes},[_c('div',{staticClass:"u-cell-wrap",style:(_vm.cellWrapStyles)},[(_vm.tree && _vm.treeField===_vm.col.column.name && _vm.col.row[_vm.childrenField])?_c('span',{staticClass:"u-cell-tree-field-icon",style:(_vm.iconStyles),on:{"click":_vm.handleExpandClick}},[(!_vm.col.row._loading && _vm.col.row[_vm.expandField])?_c('i',{class:_vm.openedIcon,staticStyle:{"font-size":"18px"}}):_vm._e(),(!_vm.col.row._loading && !_vm.col.row[_vm.expandField])?_c('i',{class:_vm.closedIcon,staticStyle:{"font-size":"18px"}}):_vm._e(),(_vm.col.row._loading)?_c('i',{staticClass:"ivu-icon ivu-icon-ios-loading ivu-load-loop"}):_vm._e()]):_vm._e(),(_vm.columnType === 'render')?_c('CellRender',{attrs:{"row":_vm.col.row,"render":_vm.col.column.render,"column":_vm.col.column,"value":_vm.col.value}}):_vm._e(),(_vm.col.column.html && _vm.columnType === 'normal')?_c('div',{staticClass:"u-cell-text",class:{nowrap:_vm.nowrap},attrs:{"title":_vm.title},domProps:{"innerHTML":_vm._s(_vm.value)}}):_vm._e(),(!_vm.col.column.html && _vm.columnType === 'normal')?_c('div',{staticClass:"u-cell-text",class:{nowrap:_vm.nowrap},attrs:{"title":_vm.title}},[_vm._v(_vm._s(_vm.value))]):_vm._e(),(_vm.columnType === 'editor')?_c('GenericInput',_vm._b({attrs:{"name":_vm.col.column.name,"format":_vm.col.column.format,"value":_vm.savingRow || _vm.col.row,"static":_vm.checkCellStatic(_vm.col, _vm.savingRow || _vm.col.row),"show-title":_vm.col.column.showTitle,"classes":_vm.nowrap ? 'nowrap' : ''}},'GenericInput',_vm.col.column.editor,false)):_vm._e(),(_vm.columnType === 'check' && _vm.checkable)?_c('Checkbox',{attrs:{"value":Boolean(_vm.store.selected(_vm.col.row)),"indeterminate":_vm.col.row._indeterminate},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleCheckClick($event)}}}):_vm._e(),(_vm.columnType === 'index')?_c('span',{class:{nowrap:_vm.nowrap}},[_vm._v("\n      "+_vm._s(_vm.index)+"\n    ")]):_vm._e()],1),(_vm.comment)?_c('span',{staticClass:"u-cell-comment",class:_vm.comment.type,attrs:{"title":_vm.comment.content}}):_vm._e()])}
var UCellvue_type_template_id_6d7dc468_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/UCell.vue?vue&type=template&id=6d7dc468&

// CONCATENATED MODULE: ./src/components/Table/UCellRender.js

/* harmony default export */ var UCellRender = ({
  name: 'CellRender',
  functional: true,
  props: {
    value: {},
    row: Object,
    render: Function,
    column: {
      type: Object,
      default: null
    }
  },
  render: function render(h, ctx) {
    var grid = findParent(ctx.parent, 'Grid');
    var param = {
      value: ctx.props.value,
      column: ctx.props.column,
      row: ctx.props.row,
      grid: grid
    };
    return ctx.props.render(h, param);
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("970b");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("5bc3");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/components/Fields/Field.js




var Field_Field =
/*#__PURE__*/
function () {
  function Field(parent, options) {
    classCallCheck_default()(this, Field);

    this.parent = parent; //记录父结点

    this.component = options.type; //底层组件名,缺省使用type,后续定义的组件可以重定义这个值

    this.defaultOptions = {};
    this.value = options.value || {}; //组件值

    this.onChange = options.onChange;
    this.enableOnChange = options.enableOnChange;
    this.events = ['input']; //记录哪些事件要捕获，当捕获时，自动触发on-validate事件，通知数据进行校验

    this.name = options.name;
    this.label = options.label;
    this.static = options.static;
    this.labelField = options.labelField;
    this.options = options.options || {};
    this.on = options.on || {};
    this.multiple = options.multiple;
    this.format = options.format;
    this.from = options.from; //从value转为控件属性值的方法

    this.to = options.to; //从控件值转为value值的方法

    this.staticSuffix = options.staticSuffix;
    this.static_name = "".concat(this.name).concat(this.staticSuffix);
    this.root = options.root;

    if (options.placeholder) {
      this.options.placeholder = options.placeholder;
    }
  } //处理静态字段


  createClass_default()(Field, [{
    key: "getStaticValue",
    value: function getStaticValue(value) {
      var v = value === undefined || value === null ? '' : value + '';
      return v;
    }
  }, {
    key: "setStaticValue",
    value: function setStaticValue(value) {
      var direct = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var v;
      if (!direct) v = this.getStaticValue(value);else v = value;
      this.parent.$set(this.value, this.static_name, v);
      if (this.labelField) this.parent.$set(this.value, this.labelField, v);
    }
  }, {
    key: "setValue",
    value: function setValue(v) {
      this.parent.$set(this.value, this.name, v);
    }
  }, {
    key: "convert_value",
    value: function convert_value(value) {
      //如果是多选，但是value不是数据组，则进行转换
      if (this.multiple) {
        if (!Array.isArray(value)) return [];else return value.slice();
      }

      return value;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender(props) {}
  }, {
    key: "render",
    value: function render(h, ctx) {
      var _this = this;

      var self = ctx.props;
      var value = self.value[self.name]; // 增加options是函数时的处理

      var opts = this.options;

      if (typeof opts === 'function') {
        opts = opts(self.value[self.name], self.name, self.value);
      } // 处理select的labelField


      if (this.labelField) {
        value = {
          label: self.value[this.labelField],
          value: value
        };
      }

      var props = Object.assign({}, this.defaultOptions, {
        value: value
      }, opts);
      var events = {
        input: function input(x) {
          x = _this.convert_value(x); // 检查值是否发生变化

          var old_value = self.value[self.name];
          if (deepCompare(old_value, x)) return; // ctx.parent.$set(self.value, self.name, x)

          _this.setValue(x);

          _this.setStaticValue(x);

          ctx.parent.$nextTick(function () {
            // 当old_value不为undefined或因为点过校验，而有错误信息的情况下进行校验
            if (_this.events.indexOf('input') > -1 && (old_value !== undefined || ctx.parent.validateResult && ctx.parent.validateResult[self.name] && ctx.parent.validateResult[self.name].error)) {
              ctx.listeners['on-validate'] && ctx.listeners['on-validate']();
            } // 触发on-field-change事件


            var v = {
              name: self.name,
              old: self.value[self.name],
              value: x
            };
            var p = findParent(ctx.parent, self.root);
            if (p) p.$emit('on-field-change', v);
          }); // 增加对listenser的处理

          if (_this.enableOnChange && _this.onChange) {
            ctx.parent.$nextTick(function () {
              _this.onChange(x, self.value);
            });
          }
        },
        'on-error': function onError(x) {
          ctx.listeners['on-error'] && ctx.listeners['on-error'](x);
        },
        'on-clear-error': function onClearError(x) {
          ctx.listeners['on-clear-error'] && ctx.listeners['on-clear-error'](x);
        }
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var e_name = _step.value;
          if (e_name === 'input') continue;

          events[e_name] = function () {
            ctx.listeners['on-validate'] && ctx.listeners['on-validate']();
          };
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.beforeRender(props);
      return h(this.component, {
        props: props,
        on: Object.assign({}, this.on, events)
      });
    }
  }]);

  return Field;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("6b58");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("36c6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("ed6d");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// CONCATENATED MODULE: ./src/components/Fields/InputField.js






var InputField_InputField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(InputField, _Field);

  function InputField(parent, options) {
    var _this;

    classCallCheck_default()(this, InputField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(InputField).call(this, parent, options));
    _this.component = 'Input';
    _this.events = ['input', 'on-blur']; //记录哪些事件要抛出

    return _this;
  }

  return InputField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/SelectField.js








var SelectField_SelectField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(SelectField, _Field);

  function SelectField(parent, options) {
    var _this;

    classCallCheck_default()(this, SelectField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(SelectField).call(this, parent, options));
    _this.component = 'u-select';
    _this.selectedName = "".concat(_this.name, "_selected"); //用于存放selected值，供下次使用

    if (_this.multiple !== undefined) parent.$set(_this.options, 'multiple', _this.multiple);
    return _this;
  }

  createClass_default()(SelectField, [{
    key: "setValue",
    value: function setValue(v) {
      var value = v;

      if (!this.options.rich) {
        if (Array.isArray(v)) {
          value = v.map(function (x) {
            return x.value;
          });
        } else if (v instanceof Object) {
          value = v.value;
        } else {
          value = v;
        }
      }

      this.parent.$set(this.value, this.name, value);
    }
  }, {
    key: "beforeRender",
    value: function beforeRender(props) {
      props['rich'] = true;
    }
  }, {
    key: "getStaticValue",
    value: function getStaticValue(value) {
      var v, pv;

      if (Array.isArray(value)) {
        if (value.length == 0) return '';

        if (value[0] instanceof Object) {
          return value.map(function (x) {
            return x.label;
          }).join(', ');
        } // 继续处理


        pv = value;
      } else {
        if (!value) return '';
        if (value instanceof Object) return value.label;
        pv = [value];
      }

      v = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = formatChoices(this.options.choices)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          if (pv.indexOf(c.value) > -1) {
            v.push(c.label);
            if (!Array.isArray(value)) break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return v.join(', ');
    }
  }]);

  return SelectField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/DateField.js








var DateField_DateField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(DateField, _Field);

  function DateField(parent, options) {
    var _this;

    classCallCheck_default()(this, DateField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(DateField).call(this, parent, options));
    _this.component = 'DatePicker';
    _this.defaultOptions = {
      transfer: true
    };
    _this.events = ['input'];
    return _this;
  }

  createClass_default()(DateField, [{
    key: "convert_value",
    value: function convert_value(x) {
      if (this.options.convert === false) return x;

      if (x instanceof Date) {
        return formatDate(x, 'yyyy/MM/dd');
      }

      if (isDate(x)) {
        return x;
      }

      return '';
    }
  }]);

  return DateField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/DatetimeField.js








var DatetimeField_DatetimeField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(DatetimeField, _Field);

  function DatetimeField(parent, options) {
    var _this;

    classCallCheck_default()(this, DatetimeField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(DatetimeField).call(this, parent, options));
    _this.component = 'DatePicker';
    _this.defaultOptions = {
      transfer: true,
      type: 'datetime'
    };
    _this.events = ['input'];
    return _this;
  }

  createClass_default()(DatetimeField, [{
    key: "convert_value",
    value: function convert_value(x) {
      if (this.options.convert === false) return x;

      if (x instanceof Date) {
        return formatDate(x, 'yyyy/MM/dd hh:mm:ss');
      }

      if (isDate(x)) {
        return x;
      }

      return '';
    }
  }]);

  return DatetimeField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/DatepickerRangeField.js







var DatepickerRangeField_DatepickerRangeField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(DatepickerRangeField, _Field);

  function DatepickerRangeField(parent, options) {
    var _this;

    classCallCheck_default()(this, DatepickerRangeField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(DatepickerRangeField).call(this, parent, options));
    _this.component = 'datepicker-range';
    return _this;
  }

  createClass_default()(DatepickerRangeField, [{
    key: "getStaticValue",
    value: function getStaticValue(value) {
      return value.join(' - ');
    }
  }]);

  return DatepickerRangeField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/TextField.js








var TextField_TextField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(TextField, _Field);

  function TextField(parent, options) {
    var _this;

    classCallCheck_default()(this, TextField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(TextField).call(this, parent, options));
    _this.component = 'Input';
    _this.defaultOptions = {
      type: 'textarea',
      autosize: {
        minRows: 5
      }
    };
    _this.events = ['input', 'on-blur']; //记录哪些事件要抛出

    return _this;
  }

  createClass_default()(TextField, [{
    key: "getStaticValue",
    value: function getStaticValue(value, callback) {
      var v = text2html(value);
      return v;
    }
  }]);

  return TextField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/TreeSelectField.js








var TreeSelectField_TreeSelectField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(TreeSelectField, _Field);

  function TreeSelectField(parent, options) {
    var _this;

    classCallCheck_default()(this, TreeSelectField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(TreeSelectField).call(this, parent, options));
    _this.component = 'tree-select';
    if (_this.multiple !== undefined) parent.$set(_this.options, 'multiple', _this.multiple);
    _this.events = ['input', 'close'];
    _this.defaultOptions = {
      transfer: true
    };
    return _this;
  }

  createClass_default()(TreeSelectField, [{
    key: "getStaticValue",
    value: function getStaticValue(value) {
      var _this2 = this;

      if (!value) return '';
      if (this.multiple && value.length === 0) return '';

      var find = function find(choices, value, result, selected) {
        if (!choices || choices.length === 0) return;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = choices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            if (Array.isArray(value)) {
              if (value.indexOf(c.id) > -1) {
                result.push(c.title);
                selected.push({
                  label: c.title,
                  value: c.id
                });
                if (!_this2.multiple) break;
              }
            } else if (c.id == value) {
              result.push(c.title);
              selected.push({
                label: c.title,
                value: c.id
              });
              if (_this2.multiple) break;
            }

            if (c.children && c.children.length > 0) {
              find(c.children, value, result, selected);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      };

      var v = [];
      var selected = [];
      find(this.options.choices, value, v, selected);
      if (selected.length === 0) return ''; // 设置tree的初始值

      var child;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.parent.$children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          child = _step2.value;

          if (child.$options.name === 'TreeSelect') {
            if (this.multiple) {
              child.selectedMultiple = selected;
            } else {
              child.selectedSingle = selected[0].label;
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return v.join(', ');
    }
  }]);

  return TreeSelectField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/RadioField.js







var RadioField_RadioField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(RadioField, _Field);

  function RadioField(parent, options) {
    var _this;

    classCallCheck_default()(this, RadioField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(RadioField).call(this, parent, options));
    _this.component = 'u-radio-group';
    return _this;
  }

  createClass_default()(RadioField, [{
    key: "getStaticValue",
    value: function getStaticValue(value) {
      var v = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.options.choices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          if (c.value == value) {
            v = c.label;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return v;
    }
  }]);

  return RadioField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/CheckboxGroupField.js







var CheckboxGroupField_CheckboxGroupField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(CheckboxGroupField, _Field);

  function CheckboxGroupField(parent, options) {
    var _this;

    classCallCheck_default()(this, CheckboxGroupField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(CheckboxGroupField).call(this, parent, options));
    _this.component = 'u-checkbox-group';
    return _this;
  }

  createClass_default()(CheckboxGroupField, [{
    key: "getStaticValue",
    value: function getStaticValue(value) {
      var v = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.options.choices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          if (Array.isArray(value)) {
            if (value.indexOf(c.value) > -1) {
              v.push(c.label);
            }
          } else if (c.value == value) {
            v.push(c.label);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return v.join(', ');
    }
  }]);

  return CheckboxGroupField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/CheckboxField.js







var CheckboxField_CheckboxField =
/*#__PURE__*/
function (_Field) {
  inherits_default()(CheckboxField, _Field);

  function CheckboxField(parent, options) {
    var _this;

    classCallCheck_default()(this, CheckboxField);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(CheckboxField).call(this, parent, options));
    _this.component = 'checkbox';
    return _this;
  }

  createClass_default()(CheckboxField, [{
    key: "getStaticValue",
    value: function getStaticValue(value) {
      var v = '';

      if (value) {
        v = '<i class="ivu-icon ivu-icon-android-checkbox-outline"></i>';
      } else {
        v = '<i class="ivu-icon ivu-icon-android-checkbox-outline-blank"></i>';
      }

      return v;
    }
  }]);

  return CheckboxField;
}(Field_Field);


// CONCATENATED MODULE: ./src/components/Fields/fieldMapping.js











var fieldMapping = {
  str: InputField_InputField,
  string: InputField_InputField,
  select: SelectField_SelectField,
  date: DateField_DateField,
  datetime: DatetimeField_DatetimeField,
  datepickerrange: DatepickerRangeField_DatepickerRangeField,
  text: TextField_TextField,
  treeselect: TreeSelectField_TreeSelectField,
  radio: RadioField_RadioField,
  checkboxgroup: CheckboxGroupField_CheckboxGroupField,
  checkbox: CheckboxField_CheckboxField
};

var fieldMapping_getField = function getField(type) {
  var input = type ? fieldMapping[type] || Field_Field : InputField_InputField; //如果没找到假设type就是自定义的Field类

  return input;
};

/* harmony default export */ var Fields_fieldMapping = (fieldMapping_getField);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/StaticField.vue?vue&type=template&id=a332db32&
var StaticFieldvue_type_template_id_a332db32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showTitle)?_c('div',{staticClass:"u-generic-input-text",class:_vm.classes,attrs:{"title":_vm.display},domProps:{"innerHTML":_vm._s(_vm.display)}}):_c('div',{staticClass:"u-generic-input-text",domProps:{"innerHTML":_vm._s(_vm.display)}})}
var StaticFieldvue_type_template_id_a332db32_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Fields/StaticField.vue?vue&type=template&id=a332db32&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fields/StaticField.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var StaticFieldvue_type_script_lang_js_ = ({
  name: 'StaticField',
  props: ['value', 'format', 'name', 'staticSuffix', 'showTitle', 'classes'],
  computed: {
    display: function display() {
      var static_name = "".concat(this.name).concat(this.staticSuffix);
      var v = this.value[static_name];

      if (v !== undefined && v !== null) {
        if (this.format) {
          v = this.format(v, this.value[this.name], this.value);
        }
      } else {
        v = '';
      }

      return v;
    },
    title: function title() {
      var showTitle = this.showTitle;

      if (showTitle) {
        if (typeof showTitle === 'function') {
          //调用原始值及format值
          return showTitle(this.value, this.display);
        } else {
          return this.value;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Fields/StaticField.vue?vue&type=script&lang=js&
 /* harmony default export */ var Fields_StaticFieldvue_type_script_lang_js_ = (StaticFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Fields/StaticField.vue?vue&type=style&index=0&lang=less&
var StaticFieldvue_type_style_index_0_lang_less_ = __webpack_require__("58c8");

// CONCATENATED MODULE: ./src/components/Fields/StaticField.vue






/* normalize component */

var StaticField_component = Object(componentNormalizer["a" /* default */])(
  Fields_StaticFieldvue_type_script_lang_js_,
  StaticFieldvue_type_template_id_a332db32_render,
  StaticFieldvue_type_template_id_a332db32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StaticField = (StaticField_component.exports);
// CONCATENATED MODULE: ./src/components/Fields/GenericInput.js


/* harmony default export */ var GenericInput = ({
  name: 'GenericInput',
  functional: true,
  props: {
    name: {},
    type: {
      type: String,
      // editor类型
      default: 'str'
    },
    value: {},
    // 值
    static: {
      type: Boolean,
      default: false
    },
    //是否静态展示
    enableOnChange: {
      // 是否允许确发onChange事件。主要用在Build中，因为有触发，所以需要禁掉input时的确发
      type: Boolean,
      default: true
    },
    onChange: {},
    options: {},
    // 编辑控件选项
    on: {},
    // 事件回调
    multiple: {
      type: Boolean,
      default: false
    },
    format: {},
    //对静态内容进行转化处理
    placeholder: {},
    info: {},
    required: {
      type: Boolean,
      default: false
    },
    staticSuffix: {
      type: String,
      default: '_static'
    },
    root: String,
    // 用于change事件发送的父控件的名字,
    staticComponent: {
      default: function _default() {
        return StaticField;
      }
    },
    showTitle: {
      default: false
    },
    classes: {},
    labelField: {
      // 值字段，主要是指select类型
      type: String,
      deafult: ''
    }
  },
  render: function render(h, ctx) {
    var self = ctx.props;
    var static_name = "".concat(self.name).concat(self.staticSuffix);
    var InputClass = Fields_fieldMapping(self.type);
    var input = new InputClass(ctx.parent, ctx.props);

    if (self.value[self.name] !== undefined) {
      if (!self.labelField) input.setStaticValue(self.value[self.name]);else input.setStaticValue(self.value[self.labelField], true);
    } // 当存在静态组件时，使用静态组件来展示静态内容


    if (self.static && self.staticComponent) {
      return h(self.staticComponent, {
        props: ctx.props
      });
    }

    return input.render(h, ctx);
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/components/utils/list.js


/* harmony default export */ var utils_list = ({
  //更新list，如果不存在则插入，如果存在则替换，items可以是一个数组
  update: function update(list, items) {
    var idField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    var added = [],
        updated = [];

    if (!Array.isArray(items)) {
      items = [items];
    }

    for (var i = 0, _len = list.length; i < _len; i++) {
      if (items.length == 0) break;
      var item = list[i];

      for (var j = 0, _len_j = items.length; j < _len_j; j++) {
        if (item[idField] == items[j][idField]) {
          var row = Object.assign({}, item, items[j]);
          list.splice(i, 1, row);
          items.splice(j, 1);
          updated.push(row);
          break;
        }
      }
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _item = _step.value;
        list.push(_item);
        added.push(_item);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return {
      added: added,
      updated: updated
    };
  },
  index: function index(list, items) {
    var idField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

    var r = this._index(list, items, idField);

    return r >= 0 ? r : -1;
  },
  get: function get(list, items) {
    var idField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    return this._index(list, items, idField, false);
  },
  //查找对象的位置，item可以是数组
  //items可以是id值或数组，或对象
  //返回结果按照从小到大排列
  //index=true表示返回位置值，否则是对应的对象
  _index: function _index(list, items) {
    var idField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var pos = {},
        new_items = [],
        single = false;

    if (!Array.isArray(items)) {
      items = [items];
      single = true;
    }

    for (var i = 0, _len = items.length; i < _len; i++) {
      var item = items[i];
      if (item instanceof Object) new_items.push({
        id: i,
        value: item
      });else new_items.push({
        id: i,
        value: defineProperty_default()({}, idField, item)
      });
    }

    if (new_items.length > 0) {
      for (var _i = 0, _len2 = list.length; _i < _len2; _i++) {
        var itema = list[_i];

        for (var j = 0, _len_j = new_items.length; j < _len_j; j++) {
          var itemb = new_items[j];

          if (itema[idField] == itemb['value'][idField]) {
            if (index) pos[itemb['id']] = _i;else pos[itemb['id']] = list[_i];
            new_items.splice(j, 1); //删除不再处理

            break;
          }
        }

        if (new_items.length == 0) break;
      }
    }

    if (pos.length === 0) return null;
    if (single) return pos[0];else {
      var result = [];

      for (var k in pos) {
        result.push([k, pos[k]]);
      }

      var r = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = result.sort(function (i) {
          return i[0];
        })[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var x = _step2.value;
          r.push(x[1]);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return r; //pos.values() 不能用 // ES2015会按照key为数值时，按大小来返回
    }
  },
  //在指定位置插入数据
  //position可以是位置的序号或对象，当为对象时，首先要查找指定的位置
  insert: function insert(list, position, items) {
    var idField = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
    if (position >= list.length) this.add(list, items, position = -1);else {
      if (!Array.isArray(items)) {
        items = [items];
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = items.reverse()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;
          list.splice(position, 0, item);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  },
  //在指定位置或最后插入数据
  //position可以是位置的序号或对象，当为对象时，首先要查找指定的位置
  add: function add(list, items) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    if (!Array.isArray(items)) {
      items = [items];
    }

    if (position == -1 || position >= list.length - 1) position = -1;else position = position + 1;

    if (position == -1) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = items[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = _step4.value;
          list.push(item);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = items.reverse()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _item2 = _step5.value;
          list.splice(position, 0, _item2);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  },
  //删除位置元素或对象
  remove: function remove(list, items) {
    var idField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    var indexes;
    var removed = [];
    if (!Array.isArray(items)) items = [items];
    indexes = this.index(list, items, idField).sort().reverse();
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = indexes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var i = _step6.value;
        removed.push(list[i]);
        list.splice(i, 1);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    return removed;
  },
  //排序用的比较函数
  _by: function _by(name, desc, minor) {
    desc = desc || false;
    return function (o, p) {
      var a, b;

      if (o instanceof Object && p instanceof Object && o && p) {
        a = o[name];
        b = p[name];

        if (a === b) {
          return typeof minor === 'function' ? minor(o, p) : 0;
        }

        if (typeof_default()(a) === typeof_default()(b)) {
          if (desc) return a < b ? 1 : -1;else return a < b ? -1 : 1;
        }

        return 0;
      } else {
        throw "error";
      }
    };
  },
  mergesort: function mergesort(array,
  /* optional */
  cmp) {
    /*
        Merge sort.
        On average, two orders of magnitude faster than Array.prototype.sort() for
        large arrays, with potentially many equal elements.
        Note that the default comparison function does not coerce its arguments to strings.
    */
    if (cmp === undefined) {
      // Note: This is not the same as the default behavior for Array.prototype.sort(),
      // which coerces elements to strings before comparing them.
      cmp = function cmp(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
      };
    }

    function merge(begin, begin_right, end) {
      // Create a copy of the left and right halves.
      var left_size = begin_right - begin,
          right_size = end - begin_right;
      var left = array.slice(begin, begin_right),
          right = array.slice(begin_right, end); // Merge left and right halves back into original array.

      var i = begin,
          j = 0,
          k = 0;

      while (j < left_size && k < right_size) {
        if (cmp(left[j], right[k]) <= 0) array[i++] = left[j++];else array[i++] = right[k++];
      } // At this point, at least one of the two halves is finished.
      // Copy any remaining elements from left array back to original array.


      while (j < left_size) {
        array[i++] = left[j++];
      } // Copy any remaining elements from right array back to original array.


      while (k < right_size) {
        array[i++] = right[k++];
      }

      return;
    }

    function msort(begin, end) {
      var size = end - begin;

      if (size <= 8) {
        // By experimentation, the sort is fastest when using native sort for
        // arrays with a maximum size somewhere between 4 and 16.
        // This decreases the depth of the recursion for an array size where
        // O(n^2) sorting algorithms are acceptable.
        var sub_array = array.slice(begin, end);
        sub_array.sort(cmp); // Copy the sorted array back to the original array.

        for (var i = 0; i < size; ++i) {
          array[begin + i] = sub_array[i];
        }

        return;
      }

      var begin_right = begin + Math.floor(size / 2);
      msort(begin, begin_right);
      msort(begin_right, end);
      merge(begin, begin_right, end);
    }

    msort(0, array.length);
    return array;
  },
  //对数组进行排序
  // order 可以是字段名，如 'name'， 也可以是一个数组，如：['name', 'age']
  // 如果字段名前有 '-' 表示降序
  // order 也可以是一个函数
  sort: function sort(items, order) {
    if (typeof order == 'string' || Array.isArray(order)) {
      var arr;
      var key;
      var f,
          desc,
          last = null;
      if (typeof order == 'string') arr = [order];else arr = order;

      for (var i = arr.length - 1; i > -1; i--) {
        key = arr[i];

        if (key && key.charAt(0) === '-') {
          desc = true;
          key = key.substr(1);
        } else desc = false;

        if (last) f = this._by(key, desc, last);else f = this._by(key, desc);
        last = f;
      }

      return this.mergesort(items, f);
    } else if (typeof order === 'function') {
      // order by sort function
      return this.mergesort(items, order);
    } else {
      throw new TypeError('Order must be a function or a string');
    }
  },
  //分组处理
  //field为分组的字段，也可以是一个函数
  // (item)=>{return 分组键值}
  // 返回结构为 [{label:'group_key', items: []}, ...]
  group: function group(list, field) {
    var group_field_name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
    var children_field_name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'items';
    var result = [],
        result_pos = {},
        func;
    if (typeof field == 'string') func = function func(x) {
      return x[field];
    };else if (typeof field == 'function') func = field;else throw new TypeError("field should be string or functon");
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = list[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var item = _step7.value;
        var key = func(item);
        var items = result_pos[key];

        if (!items) {
          items = {};
          items[group_field_name] = key;
          items[children_field_name] = [];
          result.push(items);
          result_pos[key] = items;
        }

        items[children_field_name].push(item);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
          _iterator7.return();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    return result;
  },
  reorder: function reorder(list, pos, des, options) {
    var b = pos;
    var e = des;

    if (b > e) {
      b = des;
      e = pos;
    }

    var order = [];
    var ids = [];

    for (var i = b, len = e; i < e + 1 && i < list.length; i++) {
      ids.push(list[i][options.idField]);
      order.push(list[i][options.orderField]);
    }

    var r;

    if (pos > des) {
      // 向前移动
      r = ids.splice(ids.length - 1, 1);
      ids.splice(0, 0, r[0]);
    } else {
      r = ids.splice(0, 1);
      ids.push(r[0]);
    }

    var result = [];
    var d;

    for (var _i2 = 0, _len3 = ids.length; _i2 < _len3; _i2++) {
      d = {};
      d[options.idField] = ids[_i2];
      d[options.orderField] = order[_i2];
      result.push(d);
    }

    return result;
  }
});
/*
        console.log(this.users)
        let a = list
        console.log('1', a.index(this.users, {id:572160}))
        console.log('2', a.index(this.users, {id:577222}))
        console.log('3', a.update(this.users, {id:577222, nickname:'test'}))
        console.log('4', a.get(this.users, 577222))
        console.log('5', a.add(this.users, {id:99999, nickname:'99999'}))
        console.log('6', a.get(this.users, [99999, 577222]))
        console.log('7', a.remove(this.users, [99999]))
        console.log('8', a.get(this.users, 99999))
        console.log('9', a.insert(this.users, 1, {id:99999, nickname:'99999'}))
        console.log('9', a.add(this.users, [{id:8888, nickname:'8888'}, {id:8889, nickname:'8889'}], 1))
        console.log('10', a.update(this.users, [{id:572160, nickname:'111'}, {id:8889, nickname:'222'}]))
        console.log('11', a.remove(this.users, [{id:572160, nickname:'111'}, {id:8889, nickname:'222'}]))
        console.log(this.users)

*/
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UCell.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var UCellvue_type_script_lang_js_ = ({
  name: 'uCell',
  props: {
    col: Object,
    store: Object,
    row_index: Number,
    fixed: String // 记录是哪个面板

  },
  components: {
    CellRender: UCellRender,
    GenericInput: GenericInput
  },
  computed: objectSpread_default()({}, mapState('nowrap', 'start', 'editRow', 'editMode', 'onCheckable', 'cellTitle', 'tree', 'treeField', 'iconWidth', 'indentWidth', 'expandField', 'openedIcon', 'closedIcon', 'isParentField', 'defaultExpanded', 'onLoadData', 'url', 'selected', 'idField', 'static', 'childrenField', 'selected'), {
    value: function value() {
      var value = this.col.value;

      if (this.col.column.format) {
        value = this.col.column.format(value, this.col.column, this.col.row);
      }

      return value;
    },
    title: function title() {
      var showTitle = this.col.column.showTitle;

      if (showTitle) {
        if (typeof showTitle === 'function') {
          //调用原始值及format值
          return showTitle(this.col.value, this.value);
        } else {
          return this.value;
        }
      }
    },
    comment: function comment() {
      return this.getComment(this.col.row, this.col.column);
    },
    classes: function classes() {
      return this.getClass(this.col.row, this.col.column);
    },
    index: function index() {
      return this.start + this.row_index;
    },

    /*
     * 根据编辑模式不同，选择数据保存的row
     */
    savingRow: function savingRow() {
      if (this.editMode === 'row') return this.col.row._editRow;else return this.col.row;
    },
    columnType: function columnType() {
      var type = this.col.column.type;
      if (type === 'index') return 'index';
      if (type === 'check') return 'check';

      if (type === 'column') {
        if (this.col.column.render && (!this.col.row._editting || !this.col.column.editor)) return 'render';
        if (this.col.column.format && (!this.col.row._editting || !this.col.column.editor)) return 'normal';
        if (this.col.column.editor) return 'editor';
        return 'normal';
      }
    },
    checkable: function checkable() {
      var c = this.col.row._checkable === undefined ? true : this.col.row._checkable;

      if (this.onCheckable && !this.static) {
        c = this.onCheckable(this.col.row);
        this.$set(this.col.row, '_checkable', c);
      }

      return c;
    },
    iconStyles: function iconStyles() {
      var s = {};

      if (this.tree && this.treeField === this.col.column.name) {
        var level = this.col.row._level || 0;
        var left = 0;

        if (level) {
          left = level * this.indentWidth;
        }

        s.left = "".concat(left, "px");
        s.width = "".concat(this.iconWidth, "px");
      }

      return s;
    },
    // 计算tree单元格缩近宽度
    cellWrapStyles: function cellWrapStyles() {
      var s = {};

      if (this.tree && this.treeField === this.col.column.name) {
        var level = this.col.row._level || 0;
        var left = 0;

        if (level) {
          left = level * this.indentWidth;
        }

        s.paddingLeft = "".concat(left + this.iconWidth, "px");
      }

      return s;
    }
  }),
  methods: objectSpread_default()({}, mapMethod('getComment', 'getClass', 'setSelection', 'makeRows', 'checkSelectStatus'), {
    handleCheckClick: function handleCheckClick() {
      if (this.static) return;
      this.store.toggle(this.col.row);
    },
    handleExpandClick: function handleExpandClick() {
      var _this = this;

      var expand = !this.col.row[this.expandField];

      if (expand && this.col.row[this.childrenField]) {
        if (!this.col.row['_loaded']) {
          var callback = function callback(data, others) {
            //转换数据
            var rows = [];

            if (data) {
              rows = _this.makeRows(data, _this.col.row);

              _this.$set(_this.col.row, _this.childrenField, rows); //合并其它值


              if (others && others instanceof Object) {
                _this.store.mergeStates(others);
              }

              if (_this.afterLoadData) {
                _this.afterLoadData();

                _this.afterLoadData = null; // 清除
              }
            } //更新


            _this.$nextTick(function () {
              _this.$set(_this.col.row, '_loading', false);

              _this.$set(_this.col.row, '_loaded', true);

              _this.setSelection(_this.selected);

              _this.$set(_this.col.row, _this.expandField, expand);

              _this.checkSelectStatus(_this.col.row);

              _this.$emit('expanded', _this.col.row[_this.expandField], _this.col.row);
            });
          };

          if (this.onLoadData) {
            this.$set(this.col.row, '_loading', true);
            this.$nextTick(function () {
              _this.onLoadData(_this.url, {
                parent: _this.col.row[_this.idField],
                row: _this.col.row
              }, callback);
            });
            return;
          }
        }
      }

      this.$set(this.col.row, this.expandField, expand);
      this.$emit('expanded', this.col.row[this.expandField], this.col.row);
    },
    checkCellStatic: function checkCellStatic(col, row) {
      var static_flag = col.column.fixed !== this.fixed || col.column.editor.static || !col.row._editting;
      if (col.row._editting && col.column.editor && col.column.editor.onEnableEdit && !col.column.editor.onEnableEdit(row[col.name], col, row)) static_flag = true;
      return static_flag;
    }
  })
});
// CONCATENATED MODULE: ./src/components/Table/UCell.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_UCellvue_type_script_lang_js_ = (UCellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/UCell.vue?vue&type=style&index=0&lang=less&
var UCellvue_type_style_index_0_lang_less_ = __webpack_require__("af09");

// CONCATENATED MODULE: ./src/components/Table/UCell.vue






/* normalize component */

var UCell_component = Object(componentNormalizer["a" /* default */])(
  Table_UCellvue_type_script_lang_js_,
  UCellvue_type_template_id_6d7dc468_render,
  UCellvue_type_template_id_6d7dc468_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UCell = (UCell_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UHeaderCell.vue?vue&type=template&id=e3a1ee58&
var UHeaderCellvue_type_template_id_e3a1ee58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-header-cell"},[(_vm.column.type === 'column')?_c('div',{staticClass:"u-table-header-header-cell",style:(_vm.trStyles(_vm.column))},[_c('div',{staticClass:"u-table-header-cell-title",class:{nowrap:_vm.nowrap},domProps:{"innerHTML":_vm._s(_vm.column.title)}}),(_vm.column.sortable && _vm.column.leaf)?_c('Sort',{attrs:{"store":_vm.store,"column":_vm.column}}):_vm._e(),(_vm.resizable && _vm.column.resizable && _vm.column.leaf)?_c('div',{staticClass:"u-table-header-cell-resizer",on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleMouseDown(_vm.column, $event)}}}):_vm._e()],1):_vm._e(),(_vm.column.type === 'check')?_c('div',[(_vm.multiSelect)?_c('Checkbox',{attrs:{"value":_vm.checkAll,"indeterminate":_vm.indeterminate},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleCheckAll($event)}}}):_vm._e(),(_vm.column.title)?_c('span',[_vm._v(_vm._s(_vm.column.title))]):_vm._e()],1):_vm._e(),(_vm.column.type === 'index')?_c('div',[(_vm.column.title)?_c('span',[_vm._v(_vm._s(_vm.column.title))]):_vm._e()]):_vm._e()])}
var UHeaderCellvue_type_template_id_e3a1ee58_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/UHeaderCell.vue?vue&type=template&id=e3a1ee58&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/USort.vue?vue&type=template&id=29dec304&
var USortvue_type_template_id_29dec304_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-sort",class:{up:_vm.dir==='asc', down:_vm.dir==='desc'},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleSort($event)}}},[_c('i',{staticClass:"ivu-icon ivu-icon-md-arrow-dropup u-sort-up"}),_c('i',{staticClass:"ivu-icon ivu-icon-md-arrow-dropdown u-sort-down"})])}
var USortvue_type_template_id_29dec304_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/USort.vue?vue&type=template&id=29dec304&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/USort.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//

/* harmony default export */ var USortvue_type_script_lang_js_ = ({
  name: 'Sort',
  props: {
    store: Object,
    column: Object
  },
  computed: objectSpread_default()({}, mapState('param'), {
    dir: function dir() {
      if (this.param.sortField === this.column.name) {
        return this.param.sortDir;
      } else {
        return '';
      }
    }
  }),
  methods: {
    handleSort: function handleSort() {
      var sortField = this.column.name;
      var sortDir = '';

      if (this.dir == 'asc') {
        sortDir = 'desc';
      } else if (this.dir == 'desc') {
        sortDir = '';
      } else {
        sortDir = 'asc';
      }

      this.$set(this.store.states.param, 'sortField', sortField);
      this.$set(this.store.states.param, 'sortDir', sortDir);
      this.store.grid.loadData();
    }
  },
  mounted: function mounted() {
    this.top = (this.$parent.$el.clientHeight - this.$el.clientHeight) / 2;
  }
});
// CONCATENATED MODULE: ./src/components/Table/USort.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_USortvue_type_script_lang_js_ = (USortvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/USort.vue?vue&type=style&index=0&lang=less&
var USortvue_type_style_index_0_lang_less_ = __webpack_require__("a561");

// CONCATENATED MODULE: ./src/components/Table/USort.vue






/* normalize component */

var USort_component = Object(componentNormalizer["a" /* default */])(
  Table_USortvue_type_script_lang_js_,
  USortvue_type_template_id_29dec304_render,
  USortvue_type_template_id_29dec304_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var USort = (USort_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UHeaderCell.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UHeaderCellvue_type_script_lang_js_ = ({
  name: 'UHCell',
  props: {
    column: Object,
    store: Object
  },
  components: {
    Sort: USort
  },
  computed: objectSpread_default()({}, mapState('nowrap', 'resizable', 'multiSelect', 'checkAll', 'rowHeight', 'static', 'indeterminate')),
  methods: {
    handleCheckAll: function handleCheckAll() {
      if (this.static) return;
      var result;

      if (this.indeterminate) {
        this.store.selectAll();
        return;
      }

      this.checkAll = !this.checkAll;

      if (this.checkAll) {
        this.store.selectAll();
      } else {
        this.store.deselectAll();
      }
    },
    handleMouseDown: function handleMouseDown(column, e) {
      this.$parent.handleMouseDown(column.col, e);
    },
    trStyles: function trStyles(column) {
      if (!this.nowrap) {
        return {};
      } else {
        var h = "".concat(column.rowspan * this.rowHeight, "px");
        return {
          height: h,
          lineHeight: h
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Table/UHeaderCell.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_UHeaderCellvue_type_script_lang_js_ = (UHeaderCellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/UHeaderCell.vue?vue&type=style&index=0&lang=less&
var UHeaderCellvue_type_style_index_0_lang_less_ = __webpack_require__("8bc4");

// CONCATENATED MODULE: ./src/components/Table/UHeaderCell.vue






/* normalize component */

var UHeaderCell_component = Object(componentNormalizer["a" /* default */])(
  Table_UHeaderCellvue_type_script_lang_js_,
  UHeaderCellvue_type_template_id_e3a1ee58_render,
  UHeaderCellvue_type_template_id_e3a1ee58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UHeaderCell = (UHeaderCell_component.exports);
// EXTERNAL MODULE: ./node_modules/sortablejs/Sortable.js
var Sortable = __webpack_require__("53fe");
var Sortable_default = /*#__PURE__*/__webpack_require__.n(Sortable);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UTable.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // let rowKey = 1

var columnKey = 1;
/* harmony default export */ var UTablevue_type_script_lang_js_ = ({
  name: 'Table',
  data: function data() {
    return {
      columnDraggerLeft: 0,
      dragging: false,
      dragging_col_start_x: 0,
      dragging_col: null,
      dragging_col_width: 0
    };
  },
  mixins: [emitter],
  components: {
    Icon: external_iview_["Icon"],
    Cell: UCell,
    HeaderCell: UHeaderCell
  },
  props: {
    store: {
      required: true
    },
    width: {},
    tableClass: {
      type: String
    },
    tableWidth: {},
    // 传入指定的表头
    fixed: {
      type: String,
      default: ''
    }
  },
  computed: objectSpread_default()({}, mapState('data', 'nowrap', 'selected', 'idField', 'columns', 'hscroll', 'xscroll', 'rowHeight', 'height', 'columnResizing', 'clickSelect', 'checkAll', 'start', 'resizable', 'minColWidth', 'multiSelect', 'drawColumns', 'combineCols', 'draggable', 'leftWidth', 'rightWidth', 'tree', 'parentField', 'expandField', 'defaultExpanded', 'noData', 'noDataHeight', 'childrenField', 'hoverRowKey', 'headerShow', 'hoverShow'), {
    rows: function rows() {
      var _this = this;

      var rows = [];
      var item;

      var _col;

      var c;

      var _this$combineColsInde = this.combineColsIndex(),
          index = _this$combineColsInde.index,
          last_columns_set = _this$combineColsInde.last_columns_set;

      var parent, show, level;

      var processNode = function processNode(row, parent, rows) {
        var new_row = {
          row: row,
          columns: [],
          _rowKey: row._rowKey
        };
        row._parent = parent;
        rows.push(new_row);
        processRow(new_row);

        if (_this.tree) {
          //设置level
          if (parent) {
            level = parent._level + 1;
          } else {
            level = 0;
          }

          _this.$set(row, '_level', level);

          if (row[_this.childrenField]) {
            if (row[_this.childrenField].length > 0) {
              // 处理展开状态
              if (!row.hasOwnProperty(_this.expandField)) {
                _this.$set(row, _this.expandField, _this.defaultExpanded);
              }

              show = true; // 处理显示状态

              if (!row[_this.expandField]) {
                show = false;
              }

              if (show) {
                // 处理子节点
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = row[_this.childrenField][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _row = _step.value;
                    processNode(_row, row, rows);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              }
            } else {
              // 判断是否已经装载，如果已装载，则清除children字段
              if (row['_loaded']) {
                _this.$delete(row, _this.childrenField);
              }
            }
          }
        }
      };

      var processRow = function processRow(new_row) {
        _this.columns.forEach(function (col, j) {
          var item = {
            value: new_row.row[col.name],
            rowspan: 1,
            colspan: 1,
            column: col,
            row: new_row.row
            /*, _columnKey: ++columnKey*/
            // 不需要合并

          };

          if (!_this.combineCols) {
            new_row.columns.push(item);
          } else {
            // 非合并字段
            c = index[j];

            if (!c) {
              new_row.columns.push(item);
            } else {
              _col = c.last_columns[c.index];

              if (!_col) {
                new_row.columns.push(item);
                c.last_columns.push(item);
              } else {
                // 检查是否相同
                if (_col.value === item.value) {
                  _col.rowspan++;
                } else {
                  c.last_columns.splice(c.index);
                  new_row.columns.push(item);
                  c.last_columns.push(item);

                  if (c.first) {
                    for (var i = 1, len = last_columns_set.length; i < len; i++) {
                      last_columns_set[i].splice(0);
                    }
                  }
                }
              }
            }
          }
        });
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var row = _step2.value;
          processNode(row, null, rows);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return rows;
    },
    headerScrollStyles: function headerScrollStyles() {
      var style = {};
      var scrollbar = measureScrollbar();

      if (!this.fixed && this.hscroll) {
        style.marginRight = "".concat(scrollbar, "px");
        style.borderRight = '1px solid #ddd';
      } else {
        style.marginRight = '0';
        style.borderRight = 'none';
      }

      return style;
    },
    wrapStyles: function wrapStyles() {
      var s = {
        width: "".concat(this.width, "px")
      };
      var scrollbar = measureScrollbar();

      if (this.fixed === 'right') {
        // s.width = `${this.width + 2}px`
        if (this.hscroll) s.right = "".concat(scrollbar, "px");else s.right = '0px';
      }

      return s;
    },
    tableStyles: function tableStyles() {
      var s = {
        width: "".concat(this.tableWidth, "px")
      };

      if (this.fixed === 'right') {
        s.marginLeft = "".concat(this.width - this.tableWidth, "px");
      }

      return s;
    },
    bodyStyles: function bodyStyles() {
      var scrollbar = measureScrollbar();
      var h = this.height === 'auto' ? 'auto' : this.height + 'px';
      var width = this.width;

      if (!this.fixed) {
        if (this.hscroll) width = this.width - 3;else width = this.width - 2;
      }

      if (this.fixed && this.height !== 'auto' && this.xscroll) {
        h = this.height - scrollbar + 'px';
      } // if (!this.fixed && this.hscroll) {
      //   width = this.width-scrollbar
      // }


      var options = {
        height: h,
        width: width + 'px'
      };
      return options;
    },
    noDataStyles: function noDataStyles() {
      var scrollbar = measureScrollbar();
      var h = this.height === 'auto' ? this.noDataHeight : this.height;
      var options = {
        height: "".concat(h, "px"),
        width: "".concat(this.width - 2, "px"),
        line: "".concat(h, "px"),
        lineHeight: "".concat(h, "px")
      };
      return options;
    },
    bodyWrapperStyles: function bodyWrapperStyles() {
      var h = this.height === 'auto' ? 'auto' : this.height + 'px';
      return {
        height: h
      };
    },
    // 表头行样式
    headerTrStyle: function headerTrStyle() {
      return {
        height: "".concat(this.rowHeight, "px")
      };
    },
    // 表体行样式
    bodyTrStyle: function bodyTrStyle() {
      return {
        height: "".concat(this.rowHeight, "px")
      };
    },
    // 获得序号，根据states.start 作为开始
    index: function index() {
      this.store.states.start++;
      return this.store.states.start - 1;
    }
  }),
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.checkScroll();
    });
  },
  methods: {
    // 表示宽度拖拽鼠标按下事件
    handleMouseDown: function handleMouseDown(col, e) {
      this.store.states.columnResizing = true;
      this.dragging_col_start_x = e.clientX;
      this.dragging_col = col;
      this.dragging_col_width = col.width;
      this.dragging_col_new_width = col.width; // 计算拖动指示器的高度

      this.store.states.guiderHeight = this.$el.offsetHeight;
      document.documentElement.addEventListener('mousemove', this.handleMouseMove, true);
      document.documentElement.addEventListener('mouseup', this.handleMouseUp, true);
    },
    handleMouseMove: function handleMouseMove(e) {
      if (this.columnResizing) {
        var offset = getOffset(this.$el);
        var d = Math.max(this.dragging_col_width + e.clientX - this.dragging_col_start_x, this.minColWidth);
        this.dragging_col_new_width = d;
        this.store.states.columnPosition = e.clientX - offset.left + 5; // this.$emit('columnresizing', e.clientX)
      }
    },
    handleMouseUp: function handleMouseUp(e) {
      var _this3 = this;

      if (this.columnResizing) {
        this.store.states.columnResizing = false;
        var oldWidth = this.dragging_col.width;
        this.$set(this.dragging_col, 'width', this.dragging_col_new_width);
        document.documentElement.removeEventListener('mousemove', this.handleMouseMove, true);
        document.documentElement.removeEventListener('mouseup', this.handleMouseUp, true);
        this.$nextTick(function () {
          _this3.checkScroll();

          _this3.calWidth(_this3.dragging_col, _this3.dragging_col_new_width, oldWidth);
        });
      }
    },
    calWidth: function calWidth(col, newWidth, width) {
      switch (col.fixed) {
        case 'left':
          this.leftWidth += newWidth - width;
          break;

        case 'right':
          this.rightWidth += newWidth - width;
          break;
      }
    },
    // 合并字段的定义需要是一个二维数组，可以用于多组合并的定义
    combineColsIndex: function combineColsIndex() {
      var _this4 = this;

      var index = {};
      var i;
      var first = true;
      var last_columns_set = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop = function _loop() {
          var cc = _step3.value;
          var last_columns = [];
          last_columns_set.push(last_columns);
          i = 0;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            var _loop2 = function _loop2() {
              var c = _step4.value;

              _this4.columns.forEach(function (col, j) {
                if (col.name === c) {
                  index[j] = {
                    index: i,
                    last_columns: last_columns,
                    first: first
                  };
                  ++i;
                  first = false;
                }
              });
            };

            for (var _iterator4 = cc[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              _loop2();
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        };

        for (var _iterator3 = this.combineCols[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return {
        index: index,
        last_columns_set: last_columns_set
      };
    },
    thStyles: function thStyles(col) {
      // return {textAlign: col.align || 'left'}
      var s = {
        textAlign: 'center'
      };

      if (this.fixed === 'left') {
        if (col.fixed !== 'left') {
          s['visibility'] = 'hidden';
        }
      } else if (this.fixed === 'right') {
        if (col.fixed !== 'right') {
          s['visibility'] = 'hidden';
        }
      }

      return s;
    },
    handleHeaderScroll: function handleHeaderScroll(e) {// this.$refs.body.scrollLeft = this.$refs.header.scrollLeft
    },
    handleBodyScroll: function handleBodyScroll(e) {
      this.checkScroll();
      this.$emit('scroll', this.$refs.body.scrollLeft, this.$refs.body.scrollTop);
    },
    checkScroll: function checkScroll() {
      // 主内容才计算滚动条
      if (!this.fixed) {
        if (this.$refs.header) this.$refs.header.scrollLeft = this.$refs.body.scrollLeft;
        this.store.states.scrollLeft = this.$refs.body.scrollLeft;
        this.store.states.isScrollRight = !this.xscroll || this.$refs.body.scrollLeft && this.$refs.body.scrollLeft + this.$refs.body.clientWidth === this.$refs.content.clientWidth;

        if (this.$refs.body && this.$refs.content) {
          this.hscroll = this.$refs.body.scrollHeight > this.$refs.body.clientHeight;
          this.xscroll = this.$refs.body.scrollWidth > this.$refs.body.clientWidth;
        }
      }
    },
    // 单元格样式：
    //    文字对齐
    cellStyles: function cellStyles(col) {
      var s = {
        textAlign: col.align || 'center',
        height: "".concat(this.rowHeight, "px"),
        overflow: 'hidden'
      };

      if (this.fixed === 'left') {
        if (col.fixed !== 'left') {
          s['visibility'] = 'hidden';
        }
      } else if (this.fixed === 'right') {
        if (col.fixed !== 'right') {
          s['visibility'] = 'hidden';
        }
      }

      return s;
    },

    /*
     * 行点击处理，如果clickSelect为true，则当前行选中
     */
    handleClick: function handleClick(row) {
      if (this.clickSelect && !this.static) {
        this.store.toggle(row);
      }
    },
    handleTrMouseEnter: function handleTrMouseEnter(row) {
      this.hoverRowKey = row._rowKey;
    },
    handleTrMouseLeave: function handleTrMouseLeave(row) {
      this.hoverRowKey = null;
    },
    getRowId: function getRowId(row) {
      return row[this.idField];
    },
    // 返回列的样式
    getColumnStyle: function getColumnStyle(col) {
      if (typeof col.width === 'number') {
        if (col.width > 0) {
          return {
            width: "".concat(col.width, "px")
          };
        }

        return {
          width: '*'
        };
      } else {
        return {
          width: "".concat(col.width)
        };
      }
    },
    handleRowEnd: function handleRowEnd(el) {
      var row = this.store.states.data.splice(el.oldIndex, 1);
      this.store.states.data.splice(el.newIndex, 0, row[0]);
      this.dispatch('Grid', 'on-drag', {
        oldIndex: el.oldIndex,
        newIndex: el.newIndex
      });
    }
  },
  mounted: function mounted() {
    this.checkScroll();

    if (this.draggable) {
      var el = this.$refs.table_body;
      Sortable_default.a.create(el, {
        onEnd: this.handleRowEnd
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Table/UTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_UTablevue_type_script_lang_js_ = (UTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/UTable.vue?vue&type=style&index=0&lang=less&
var UTablevue_type_style_index_0_lang_less_ = __webpack_require__("e6ba");

// CONCATENATED MODULE: ./src/components/Table/UTable.vue






/* normalize component */

var UTable_component = Object(componentNormalizer["a" /* default */])(
  Table_UTablevue_type_script_lang_js_,
  UTablevue_type_template_id_0cdbef22_render,
  UTablevue_type_template_id_0cdbef22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UTable = (UTable_component.exports);
// CONCATENATED MODULE: ./src/components/Table/UGridStore.js






var rowKey = 1;

var UGridStore_Store =
/*#__PURE__*/
function () {
  function Store(grid, options, value) {
    classCallCheck_default()(this, Store);

    this.grid = grid;
    this.states = {
      columns: [],
      rowHeight: 34,
      minColWidth: 5,
      defaultColWidth: 100,
      nowrap: false,
      width: 'auto',
      height: 'auto',
      theme: 'default',
      // 表格theme
      gridWidth: 0,
      checkCol: false,
      checkColWidth: 30,
      checkColTitle: '',
      cellTitle: true,
      // 单元格显示title属性
      headerShow: true,
      // 是否显示表头，缺省为true
      hoverShow: true,
      // 是否显示hover效果
      multiHeaderSep: '/',
      // 多行表头分隔符
      idField: 'id',
      orderField: '',
      // 排序字段
      static: false,
      // 是否静态，如果true，则行编辑将禁止，不能进行行选择，可以执行setSelection()
      data: [],
      multiSelect: false,
      clickSelect: false,
      // 点击选中
      selectedRowClass: 'selected',
      // 选中行反显样式，可以设为指定类名
      resizable: true,
      // 是否表头列可以调整大小
      draggable: false,
      indexCol: false,
      // 是否显示序号列
      indexColTitle: '#',
      indexColWidth: 40,
      loadingText: '<i class="ivu-load-loop ivu-icon ivu-icon-ios-loading"></i> 正在装入...',
      // 正在装入时显示的文本
      autoLoad: true,
      // 是否自动装入数据
      parseUrl: true,
      // 是否从URL解析查询参数
      url: '',
      // 访问后台的URL
      param: {},
      // 访问后台的URL所带参数
      buttons: [],
      rightButtons: [],
      bottomButtons: [],
      comments: {},
      // 记录单元格的注释，形式为 {row_id: {col_name:comment}}
      classes: {},
      // 记录单元格的class
      combineCols: [],
      // 单元格合并列名
      editMode: 'row',
      // 编辑模式 'full' 全屏模式 'row' 行模式
      actionColumn: '',
      // 行编辑时，显示编辑按钮的列名,将缺省显示['编辑', '删除']
      deleteRowConfirm: true,
      // 删除前是否先确认
      query: null,
      // 查询条件对象
      noData: '暂无数据',
      //无数据时显示内容
      noDataHeight: 40,
      //无数据显示的高度
      // addAutoScrollTo: true, //行编辑在添加新行时，自动滚动到新加行
      detectParentResize: true,
      // tree 相关的参数
      tree: false,
      // 是否treegrid
      defaultExpanded: false,
      // 缺省折叠状态
      treeField: '',
      // 展示树结构的列名
      expandField: '_expand',
      // 标识折叠状态列名
      childrenField: 'children',
      // 子结点列名
      openedIcon: 'ivu-icon ivu-icon-md-arrow-dropdown',
      // 树结点展开的图标
      closedIcon: 'ivu-icon ivu-icon-md-arrow-dropright',
      indentWidth: 20,
      // 子结点缩近宽度
      iconWidth: 14,
      // icon所占宽度
      hoverRowKey: null,
      // hover时的rowKey
      checkStrictly: true,
      // 是否选中时联动选子结点
      // 回调
      onLoadData: null,
      // 装入数据回调函数，将传入 function (url, param, callback)，当树型结构时，会传入parent字段
      onSelect: null,
      // 在选择行前执行，返回为True，则允许选中
      onDeselect: null,
      // 在取消选择行前执行，返回为True，则允许取消选中
      onCheckable: null,
      // 是否显示checkbox
      onSaveRow: null,
      // 保存行时调用 function (row, callback), callback(flag, data)
      // flag 为 'ok'表示成功，data 为最后的数据 'error'表示有错误, data为出错信息
      onSaveCol: null,
      // 保存单元格时调用 function (value, callback), callback(flag, data)
      // flag 为 'ok'表示成功，data 为最后的数据 'error'表示有错误, data为出错信息
      onDeleteRow: null,
      // 删除行的确认 function (row, callback), callback(flag, data)
      onRowEditRender: null,
      // 判断某行编辑列重定义 function (h, row) 返回 null 表示使用缺省的编辑render，
      // 否则应返回一个自定义的render, h为create函数
      onMove: null,
      // 表格行移动时，如果需要与后台通讯，可以定义onMove，将需要修改的排序信息返回给后台，参数是 [{idfield: orderNo}]
      // 需要定义idField，返回为true，表示成功，否则不进行排序
      // 内部变量
      drawColumns: [],
      // 用于绘制的表头
      columnResizing: false,
      columnPosition: 0,
      checkAll: false,
      indeterminate: false,
      // 是否checkbox中间状态
      fixedColumns: [],
      leftWidth: 0,
      // 左侧固定列宽度
      rightWidth: 0,
      // 右侧固定列宽度
      hscroll: false,
      xscroll: false,
      scrollLeft: 0,
      // 记录横向滚动条偏移量，用于显示左侧固定列的特殊样式
      isScrollRight: false,
      guiderHeight: 0,
      // 拖动指示器的高度
      loading: false,
      // 是否显示loading信息
      selected: {},
      // 记录选中结果，可以跨页保存
      selectedRows: {},
      afterLoadData: null,
      // 在loadData之后的回调用于特殊场合，处理之后会清除，只会运行一次
      // 分页相关参数
      prev: '上一页',
      next: '下一页',
      first: '',
      last: '',
      start: 1,
      total: 0,
      // 总条数
      pageSizeOpts: [10, 20, 30, 40, 50],
      // 每页条数选项
      pagination: false,
      // 是否显示分页信息，缺省为 false
      page: 1,
      pageSize: 10
    };

    for (var name in options) {
      if (options.hasOwnProperty(name) && this.states.hasOwnProperty(name)) {
        this.states[name] = options[name];
      }
    }

    if (value && value.length > 0) {
      this.states['data'] = value;
    }

    this.setParam(options.param); // 初始化states.param

    this.states.param.page = this.states.page;
    this.states.param.pageSize = this.states.pageSize;

    if (!grid) {
      throw new Error('Grid object is Required.');
    }
  }

  createClass_default()(Store, [{
    key: "selected",
    value: function selected(row) {
      var id = row[this.states.idField] || row._rowKey;
      return this.states.selected[id + ''];
    }
  }, {
    key: "toggle",
    value: function toggle(row) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.selected(row)) this.deselect(row, force);else this.select(row, force);
    }
  }, {
    key: "_select",
    value: function _select(row) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var selectable = true;
      var checkable = true;

      if (!force && this.states.onSelect) {
        selectable = this.states.onSelect(row, true);
      }

      if (!force && this.states.onCheckable) {
        checkable = this.states.onCheckable(row, true);
      }

      if (selectable && checkable) {
        var id = row[this.states.idField] || row._rowKey;
        this.grid.$set(this.states.selected, id, id);
        this.grid.$set(this.states.selectedRows, id, row);
      }

      row._selectable = selectable && checkable;
      return selectable && checkable;
    }
  }, {
    key: "checkSelectStatus",
    value: function checkSelectStatus() {
      var _this = this;

      var _f = function _f(data) {
        // 检查父结点的选中状态
        var total = 0;
        var selected = 0;
        var result;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            if (c._selectable) {
              // 处理子结点
              if (c[_this.states.childrenField] && c[_this.states.childrenField].length > 0) {
                result = _f(c[_this.states.childrenField]);
                console.log(c, result);
                c._indeterminate = false;

                if (_this.states.checkStrictly) {
                  if (_this.selected(c)) selected++;
                } else {
                  if (result.total === result.selected && result.total > 0) {
                    c._checked = true;
                    if (!_this.states.checkStrictly) _this._select(c);
                    selected++;
                  } else {
                    c._checked = false; // 不销定check则取消选中

                    if (!_this.states.checkStrictly) _this._deselect(c);
                    if (result.selected) c._indeterminate = true;
                  }
                }

                total += result.total + 1;
                selected += result.selected;
              } else {
                if (_this.selected(c)) {
                  selected++;
                }

                total++;
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        result = {
          total: total,
          selected: selected
        };
        return result;
      };

      var result;
      result = _f(this.states.data);
      this.states.indeterminate = false;

      if (result.total === result.selected && result.total > 0) {
        this.states.checkAll = true;
      } else {
        this.states.checkAll = false;
        if (result.selected > 0) this.states.indeterminate = true;
      }
    }
  }, {
    key: "select",
    value: function select(row) {
      var _this2 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this._select(row, force)) {
        if (!this.states.multiSelect) {
          this.deselectAll();

          this._select(row, force);
        } else {
          if (!this.states.checkStrictly) {
            var data = row[this.states.childrenField];

            if (data && data.length > 0) {
              var rows = [];
              walkTree(data, function (r) {
                if (_this2._select(r, force)) {
                  rows.push(r);
                }
              }, this.states.childrenField);
            }
          }

          this.checkSelectStatus();
        }

        this.grid.$emit('on-selected', row);
      }
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var _this3 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var rows = [];
      walkTree(this.states.data, function (row) {
        if (_this3._select(row, force)) {
          rows.push(row);
        }
      }, this.states.childrenField);
      this.states.checkAll = true;
      this.states.indeterminate = false;
      this.grid.$emit('on-selected-all', rows);
    }
  }, {
    key: "_deselect",
    value: function _deselect(row) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var deselectable = true;

      if (!force && this.states.onDeselect) {
        deselectable = this.states.onDeselect(row);
      } else if (!force && this.states.onSelect) {
        deselectable = this.states.onSelect(row, false);
      }

      if (deselectable) {
        var id = row[this.states.idField] || row._rowKey;
        this.grid.$delete(this.states.selected, id);
        this.grid.$delete(this.states.selectedRows, id);
      }

      return deselectable;
    }
  }, {
    key: "deselect",
    value: function deselect(row) {
      var _this4 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this._deselect(row, force)) {
        if (!this.states.checkStrictly) {
          var data = row[this.states.childrenField];

          if (data && data.length > 0) {
            var rows = [];
            walkTree(data, function (r) {
              if (_this4._deselect(r, force)) {
                rows.push(r);
              }
            }, this.states.childrenField);
          }
        }

        this.checkSelectStatus();
        this.grid.$emit('on-deselected', row);
      }
    }
  }, {
    key: "deselectAll",
    value: function deselectAll() {
      var _this5 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var rows = [];

      var callback = function callback(row) {
        if (_this5._deselect(row)) {
          rows.push(row);
        }
      };

      walkTree(this.states.data, callback); // this.states.data.forEach(row => {
      //   if (!this._deselect(row)){
      //     rows.push(row)
      //   }
      // })
      // if (rows.length === 0) {
      //   this.states.selected = {}
      //   this.states.selectedRows = {}
      // }

      this.states.checkAll = false;
      this.states.indeterminate = false;
      this.grid.$emit('on-deselected-all', rows);
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      var s = [];

      for (var c in this.states.selected) {
        s.push(c);
      }

      return s;
    }
  }, {
    key: "getSelectedRows",
    value: function getSelectedRows() {
      return Object.values(this.states.selectedRows);
    }
  }, {
    key: "setSelection",
    value: function setSelection(selection) {
      var _this6 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // if (Array.isArray(selection)) {
      //   for(let c of selection) {
      //     this.grid.$set(this.states.selected, c, c)
      //   }  
      // } else {
      //   this.grid.$set(this.states, 'selected', selection)
      // }
      if (isEmpty(selection)) return;
      var index, s;

      if (Array.isArray(selection)) {
        s = selection.slice();
      } else if (selection instanceof Object) {
        s = [];

        for (var c in selection) {
          s.push(c);
        }
      } else {
        s = [selection];
      }

      var checkAll = true;
      var indeterminate = false;

      var callback = function callback(row) {
        if (s.length === 0) {
          checkAll = false;
          return true;
        }

        var id = row[_this6.states.idField];
        index = s.indexOf(id + '');

        if (index > -1) {
          if (_this6._select(row, force)) {
            indeterminate = true;
          }

          s.splice(index, 1);
        } else {
          checkAll = false;
        }
      };

      walkTree(this.states.data, callback); // 处理剩余数据

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _c = _step2.value;
          this.grid.$set(this.states.selected, _c, _c);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.states.checkAll = checkAll;

      if (!checkAll) {
        this.states.indeterminate = indeterminate;
      }
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.states.loading = loading;

      if (text) {
        this.states.loadingText = text;
      }
    } //编辑完成后， 发送事件

  }, {
    key: "sendInputEvent",
    value: function sendInputEvent() {
      this.grid.$emit('input', this.states.data);
    }
  }, {
    key: "removeRow",
    value: function removeRow(row) {
      var d;
      if (!row._parent) d = this.states.data;else d = row._parent[this.states.childrenField];
      var removed = utils_list.remove(d, row, this.getKeyField(row));
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = removed[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var i = _step3.value;
          this.deselect(i, true);
          this.states.total -= 1;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "getKey",
    value: function getKey(row, column) {
      var key, col;

      if (typeof_default()(row) === 'object') {
        key = row._rowKey;
      } else {
        key = row;
      }

      if (typeof_default()(column) === 'object') {
        col = column.name;
      } else {
        col = column;
      }

      return {
        key: key,
        col: col
      };
    }
  }, {
    key: "getComment",
    value: function getComment(row, column) {
      var _this$getKey = this.getKey(row, column),
          key = _this$getKey.key,
          col = _this$getKey.col;

      var r = this.states.comments[key];
      if (!r) return '';
      return r[col];
    }
  }, {
    key: "setComment",
    value: function setComment(row, column, content) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'info';

      var _this$getKey2 = this.getKey(row, column),
          key = _this$getKey2.key,
          col = _this$getKey2.col;

      var r = this.states.comments[key];

      if (!r) {
        r = this.grid.$set(this.states.comments, key, {});
      }

      this.grid.$set(r, col, {
        content: content,
        type: type
      });
    }
  }, {
    key: "removeComment",
    value: function removeComment(row, column) {
      var _this$getKey3 = this.getKey(row, column),
          key = _this$getKey3.key,
          col = _this$getKey3.col;

      var r = this.states.comments[key];

      if (r) {
        if (!col) {
          this.grid.$delete(this.states.comments, key);
        } else {
          this.grid.$delete(r, col);
        }
      }
    }
  }, {
    key: "getClass",
    value: function getClass(row, column) {
      var _this$getKey4 = this.getKey(row, column),
          key = _this$getKey4.key,
          col = _this$getKey4.col;

      var r = this.states.classes[key];
      if (!r) return '';
      return r[col];
    }
  }, {
    key: "setClass",
    value: function setClass(row, column, name) {
      var _this$getKey5 = this.getKey(row, column),
          key = _this$getKey5.key,
          col = _this$getKey5.col;

      var r = this.states.classes[key];

      if (!r) {
        r = this.grid.$set(this.states.classes, key, {});
      }

      this.grid.$set(r, col, name);
    }
  }, {
    key: "removeClass",
    value: function removeClass(row, column) {
      var _this$getKey6 = this.getKey(row, column),
          key = _this$getKey6.key,
          col = _this$getKey6.col;

      var r = this.states.classes[key];

      if (r) {
        if (!col) {
          this.grid.$delete(this.states.classes, key);
        } else {
          this.grid.$delete(r, col);
        }
      }
    }
  }, {
    key: "getKeyField",
    value: function getKeyField(row) {
      var key;

      if (row[this.states.idField]) {
        key = this.states.idField;
      } else if (row['_rowKey']) {
        key = '_rowKey';
      } else {
        throw Error('Row data has not defined idField or _rowKey');
      }

      return key;
    } // 更新行

  }, {
    key: "updateRow",
    value: function updateRow(row) {
      utils_list.update(this.states.data, row, this.getKeyField(row));
      return row;
    }
  }, {
    key: "getPosition",
    value: function getPosition(row, list) {
      if (!row || !list || list && list.length === 0) return -1;
      return utils_list.index(list, row, this.getKeyField(row));
    } // 新加记录有一个 _new 属性
    // parent 用于处理添加子结点
    // position = 'before', 'after'

  }, {
    key: "addRow",
    value: function addRow(row, item) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'after';
      var isChild = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var pos, data;

      if (!row || isEmpty(row)) {
        row = this.getDefaultRow();
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.states.columns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var c = _step4.value;
            var v = '';

            if (c.type === 'column') {
              row[c.name] = '';
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      } else {
        row = this.getDefaultRow(row);
      } // if (!row[this.states.idField]) {
      //   row[this.states.idField] = uuid()
      // }


      if (!item) {
        data = this.states.data;
        pos = -1;
      } else if (!isChild) {
        data = item._parent;

        if (data) {
          data = data[this.states.childrenField];
        } else {
          data = this.states.data;
        }

        pos = this.getPosition(item, data);
      } else {
        data = item[this.states.childrenField];

        if (!data) {
          this.grid.$set(item, this.states.childrenField, []);
          data = item[this.states.childrenField];
          this.grid.$set(item, '_loaded', true);
          this.grid.$set(item, '_expand', true);
          row._parent = item;
        } // 子结点，after为最后，before为最前


        if (position === 'after') pos = -1;else pos = 0;
      }

      if (position === 'after') utils_list.add(data, row, pos);else utils_list.insert(data, pos, row);
      this.states.total += 1;
      return row;
    }
  }, {
    key: "addChildRow",
    value: function addChildRow(row, parent, position) {
      return this.addRow(row, parent, position, true);
    }
    /* 生成新的可编辑行
     options 为滚动属性
    */

  }, {
    key: "addEditRow",
    value: function addEditRow(row, parent, position) {
      var isChild = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!row || isEmpty(row)) {
        row = {
          _new: true
        };
      } else {
        row['_new'] = true;
      }

      var n_row = this.addRow(row, parent, position, isChild);
      this.grid.$set(n_row, '_editRow', Object.assign({}, n_row));
      this.grid.$set(n_row, '_editting', true);
      return n_row;
    }
  }, {
    key: "addEditChildRow",
    value: function addEditChildRow(row, parent, position) {
      return this.addEditRow(row, parent, position, true);
    }
  }, {
    key: "mergeStates",
    value: function mergeStates(o) {
      for (var name in o) {
        if (this.states.hasOwnProperty(name)) {
          this.grid.$set(this.states, name, o[name]);
        }
      }
    } // 获得指定表头字段

  }, {
    key: "getColumn",
    value: function getColumn(name) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.states.columns[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var col = _step5.value;
          if (col.name === name) return col;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
    /* 设置查询相关的参数，分别回填到对应的 page, pageSize, query 中作为初始值 */

  }, {
    key: "setParam",
    value: function setParam(p) {
      if (!p) return;

      if (p.hasOwnProperty('page')) {
        this.states.page = p.page;
        delete p.page;
      }

      if (p.hasOwnProperty('pageSize')) {
        this.states.pageSize = p.pageSize;
        delete p.pageSize;
      }

      if (this.states.query) this.states.query.value = Object.assign({}, p);
    }
  }, {
    key: "getDefaultRow",
    value: function getDefaultRow() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var parent = arguments.length > 1 ? arguments[1] : undefined;
      return Object.assign({
        _hover: false,
        _selectable: true,
        // 可被选中
        _checkable: true,
        // 可显示checkbox
        _checked: false,
        // 是否选中状态
        _indeterminate: false,
        // 中间态状态
        _editting: false,
        _hidden: false,
        _level: 0,
        _rowKey: rowKey++,
        _parent: parent
      }, row);
    }
  }, {
    key: "makeRows",
    value: function makeRows(data, parent) {
      var _this7 = this;

      var rows = [];
      data.forEach(function (row) {
        var new_row = _this7.getDefaultRow(row, parent);

        if (new_row[_this7.states.childrenField] && new_row[_this7.states.childrenField].length > 0) {
          new_row['_loaded'] = true;
          new_row[_this7.states.childrenField] = _this7.makeRows(new_row[_this7.states.childrenField]);
        }

        rows.push(new_row);
      });
      return rows;
    }
  }, {
    key: "_callOnMove",
    value: function _callOnMove(order) {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        if (_this8.states.onMove) {
          var callback = function callback(result) {
            if (result) {
              resolve(true);
            } else {
              reject(false);
            }
          };

          _this8.states.onMove(order, callback);
        } else {
          resolve(true);
        }
      });
    }
  }, {
    key: "_move",
    value: function _move(data, pos, des, row) {
      var _this9 = this;

      var _id = this.states.idField;
      var _order = this.states.orderField;
      if (pos === des) return;
      var begin = pos;
      var end = des;

      if (pos > des) {
        begin = des;
        end = pos;
      }

      var new_order = utils_list.reorder(data, pos, des, {
        idField: _id,
        orderField: _order
      });

      this._callOnMove(new_order).then(function () {
        for (var i = begin, _len = end; i <= _len && i < data.length; i++) {
          for (var j = 0, _len_j = new_order.length; j < _len_j; j++) {
            if (new_order[j][_this9.states.idField] === data[i][_this9.states.idField]) {
              data[i][_order] = new_order[j][_order];
              break;
            }
          }
        }

        row = data.splice(pos, 1);
        data.splice(des, 0, row[0]);
      });
    } // 移动元素位置
    // position up, down, first, last

  }, {
    key: "moveRow",
    value: function moveRow(row, position) {
      var _this10 = this;

      var d, des; // 目标位置

      var _id = this.states.idField;
      var _order = this.states.orderField;
      if (!row._parent) d = this.states.data;else d = row._parent[this.states.childrenField];
      var pos = this.getPosition(row, d);
      row = this.states.data[pos];

      switch (position) {
        case 'up':
          des = pos - 1;

          if (des < 0 && !row._parent && this.states.page > 1) {
            this.states.afterLoadData = function () {
              var _new_order$push, _new_order$push2;

              var new_order = [];
              var last = _this10.states.data[_this10.states.data.length - 1];
              new_order.push((_new_order$push = {}, defineProperty_default()(_new_order$push, _id, row[_id]), defineProperty_default()(_new_order$push, _order, last[_order]), _new_order$push));
              new_order.push((_new_order$push2 = {}, defineProperty_default()(_new_order$push2, _id, last[_id]), defineProperty_default()(_new_order$push2, _order, row[_order]), _new_order$push2));

              _this10._callOnMove(new_order).then(function () {
                row[_order] = last[_order];

                _this10.states.data.splice(_this10.states.data.length - 1, 1, row);
              });
            };

            this.grid.go(this.states.page - 1);
            return;
          }

          break;

        case 'down':
          des = pos + 1;

          if (des >= this.states.data.length && !row._parent && this.states.page < this.grid.$refs.pagination.pages) {
            this.states.afterLoadData = function () {
              var _new_order$push3, _new_order$push4;

              var new_order = [];
              var last = _this10.states.data[0];
              new_order.push((_new_order$push3 = {}, defineProperty_default()(_new_order$push3, _id, row[_id]), defineProperty_default()(_new_order$push3, _order, last[_order]), _new_order$push3));
              new_order.push((_new_order$push4 = {}, defineProperty_default()(_new_order$push4, _id, last[_id]), defineProperty_default()(_new_order$push4, _order, row[_order]), _new_order$push4));

              _this10._callOnMove(new_order).then(function () {
                row[_order] = last[_order];

                _this10.states.data.splice(0, 1, row);
              });
            };

            this.grid.go(this.states.page + 1);
            return;
          }

          break;

        case 'first':
          des = 0;
          break;

        case 'last':
          des = d.length;
          break;
      }

      this._move(d, pos, des, row);
    }
  }]);

  return Store;
}();

/* harmony default export */ var UGridStore = (UGridStore_Store);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/pagination.vue?vue&type=template&id=b68c66a2&
var paginationvue_type_template_id_b68c66a2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pagination"},[_c('ul',[(_vm.store.first)?_c('li',{staticClass:"ivu-btn ivu-btn-default ivu-btn-small",class:{'disabled':!_vm.hasFirst},attrs:{"title":_vm.store.first}},[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.handlePageClick(1)}}},[_vm._v(_vm._s(_vm.store.first))])]):_vm._e(),(_vm.store.prev)?_c('li',{staticClass:"ivu-btn ivu-btn-default ivu-btn-small",class:{'disabled':!_vm.hasPrev},attrs:{"title":_vm.store.prev}},[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.handlePageClick(_vm.current-1)}}},[_vm._v(_vm._s(_vm.store.prev))])]):_vm._e(),(_vm.store.next)?_c('li',{staticClass:"ivu-btn ivu-btn-default ivu-btn-small",class:{'disabled':!_vm.hasNext},attrs:{"title":_vm.store.next}},[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.handlePageClick(_vm.current+1)}}},[_vm._v(_vm._s(_vm.store.next))])]):_vm._e(),(_vm.store.last)?_c('li',{staticClass:"ivu-btn ivu-btn-default ivu-btn-small",class:{'disabled':!_vm.hasLast},attrs:{"title":_vm.store.last}},[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.handlePageClick(_vm.pages)}}},[_vm._v(_vm._s(_vm.store.last))])]):_vm._e(),_c('Dropdown',{staticClass:"ivu-btn ivu-btn-default ivu-btn-small",attrs:{"transfer":""},on:{"on-click":_vm.handlePageSize}},[_c('a',[_vm._v("\n        "+_vm._s(_vm.limit)+"条/页\n        "),_c('Icon',{attrs:{"type":"ios-arrow-down"}})],1),_c('DropdownMenu',{attrs:{"slot":"list"},slot:"list"},_vm._l((_vm.store.pageSizeOpts),function(x){return _c('DropdownItem',{key:x,attrs:{"name":x}},[_vm._v(_vm._s(x)+"条/页")])}),1)],1),_c('li',{staticClass:"ivu-btn ivu-btn-text ivu-btn-small page-input"},[_vm._v("\n    跳至\n      "),_c('input',{ref:"page",attrs:{"type":"text","size":_vm.inputSize},domProps:{"value":_vm.current},on:{"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},"keyup":_vm.handleKeyUp,"input":_vm.handleInput}}),_vm._v("\n    页\n    ")])],1),_vm._t("default"),_c('span',{staticClass:"page-total"},[_vm._v("共 "+_vm._s(_vm.pages)+" 页/"+_vm._s(_vm.store.total)+" 条记录")])],2)}
var paginationvue_type_template_id_b68c66a2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/pagination.vue?vue&type=template&id=b68c66a2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  mixins: [emitter],
  data: function data() {
    return {
      current: this.store.page,
      limit: this.store.pageSize,
      inputSize: 3
    };
  },
  directives: {
    clickoutside: clickoutside
  },
  props: {
    store: Object
  },
  computed: {
    hasFirst: function hasFirst() {
      return this.current !== 1;
    },
    hasLast: function hasLast() {
      return this.current < this.pages;
    },
    hasPrev: function hasPrev() {
      return this.current > 1;
    },
    hasNext: function hasNext() {
      return this.current < this.pages;
    },
    pages: function pages() {
      return Math.ceil(this.store.total / this.limit);
    },
    dropdownStyles: function dropdownStyles() {
      if (this.showPageSize) {
        return {
          display: 'block',
          position: 'absolute',
          marginLeft: '-6px',
          marginTop: '2px'
        };
      } else {
        return {
          display: 'none'
        };
      }
    }
  },
  methods: {
    handlePageSize: function handlePageSize(size) {
      this.limit = size;
      this.$emit('on-page-size', size);
      this.current = 1;
      this.$emit('on-page', 1);
    },
    handlePageClick: function handlePageClick(page) {
      this.go(page);
    },
    handleEnter: function handleEnter() {
      var page = parseInt(this.$refs.page.value);
      if (!isNaN(page)) this.go(page);
    },
    go: function go(page) {
      if (page < 1 || page > this.pages) return;
      this.current = page;
      this.$emit('on-page', page);
    },
    handleClose: function handleClose() {
      this.showPageSize = false;
    },
    handleKeyUp: function handleKeyUp(event) {
      var n = parseInt(event.key);
      var keycode = event.which;

      if (!isNaN(n) || event.ctrlKey && (keycode == 88 || keycode == 89 || keycode == 90) || event.keyCode === 46 || event.keyCode === 8) {// this.handleInput(event)
      } else event.preventDefault();
    },
    handleInput: function handleInput(event) {
      var value = event.target.value;
      var val = parseInt(value);

      if (isNaN(val)) {
        value = '1';
        this.current = 1;
      } else {
        this.current = val;
      }

      this.inputSize = value.length + 2;
    }
  },
  watch: {
    'store.page': {
      immediate: true,
      handler: function handler(val) {
        if (!Number.isNaN(val)) {
          this.current = val;
        } else {
          this.current = 1;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Table/pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_paginationvue_type_script_lang_js_ = (paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/pagination.vue?vue&type=style&index=0&lang=less&
var paginationvue_type_style_index_0_lang_less_ = __webpack_require__("253f");

// CONCATENATED MODULE: ./src/components/Table/pagination.vue






/* normalize component */

var pagination_component = Object(componentNormalizer["a" /* default */])(
  Table_paginationvue_type_script_lang_js_,
  paginationvue_type_template_id_b68c66a2_render,
  paginationvue_type_template_id_b68c66a2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pagination = (pagination_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UButtons.vue?vue&type=template&id=652e1522&
var UButtonsvue_type_template_id_652e1522_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-buttons"},_vm._l((_vm.btngroups),function(btnGroup){return _c('ButtonGroup',{attrs:{"size":_vm.size}},[_vm._l((btnGroup),function(btn){return [(!btn.component || btn.component =='Button')?_c('Button',{attrs:{"type":btn.type || 'default',"ghost":btn.ghost || false,"disabled":btn.disabled || _vm.disabled,"shape":btn.shape,"size":btn.size,"long":btn.long,"loading":btn.loading,"icon":btn.icon},on:{"click":function($event){$event.preventDefault();return _vm.handleButtonClick(btn)}}},[_vm._v("\n          "+_vm._s(btn.label)+"\n      ")]):_c(btn.component,_vm._g(_vm._b({tag:"component"},'component',btn.props,false),btn.on))]})],2)}),1)}
var UButtonsvue_type_template_id_652e1522_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Table/UButtons.vue?vue&type=template&id=652e1522&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UButtons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UButtonsvue_type_script_lang_js_ = ({
  name: 'Buttons',
  components: {
    ButtonGroup: external_iview_["ButtonGroup"],
    Button: external_iview_["Button"],
    Icon: external_iview_["Icon"]
  },
  data: function data() {
    return {
      disabled: false,
      btns: {}
    };
  },
  props: {
    buttons: Array,
    data: {},
    target: {},
    size: {
      default: 'small'
    }
  },
  computed: {
    btngroups: function btngroups() {
      var v = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var bs = _step.value;
          var x = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = bs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var b = _step2.value;

              if (!b.hidden) {
                x.push(b);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (x.length > 0) v.push(x);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return v;
    }
  },
  methods: {
    handleButtonClick: function handleButtonClick(btn) {
      if (btn.onClick) {
        btn.onClick.call(this, this.target, this.data);
      }
    },
    collectButtons: function collectButtons() {
      var btns = {};
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.buttons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var bs = _step3.value;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = bs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var b = _step4.value;

              if (b.name) {
                btns[b.name] = b;
                this.$set(b, 'loading', b.loading || false);
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.btns = btns;
    }
  },
  mounted: function mounted() {
    this.collectButtons();
  },
  watch: {
    buttons: {
      handler: function handler() {
        this.collectButtons();
      }
    },
    deep: true
  }
});
// CONCATENATED MODULE: ./src/components/Table/UButtons.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_UButtonsvue_type_script_lang_js_ = (UButtonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/UButtons.vue?vue&type=style&index=0&lang=css&
var UButtonsvue_type_style_index_0_lang_css_ = __webpack_require__("8d9f");

// CONCATENATED MODULE: ./src/components/Table/UButtons.vue






/* normalize component */

var UButtons_component = Object(componentNormalizer["a" /* default */])(
  Table_UButtonsvue_type_script_lang_js_,
  UButtonsvue_type_template_id_652e1522_render,
  UButtonsvue_type_template_id_652e1522_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UButtons = (UButtons_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Query/Query.vue?vue&type=template&id=602708a0&
var Queryvue_type_template_id_602708a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-query"},[(_vm.showSelected && _vm.selected.length>0)?[_c('Row',{staticClass:"selectedRow"},[_c('Col',{attrs:{"span":"1"}},[_c('span',{staticClass:"selectedText"},[_vm._v("已选:")])]),_c('Col',{attrs:{"span":"22"}},_vm._l((_vm.selected),function(s){return _c('Tag',{key:s['name'],class:'selectedTag',attrs:{"type":"border","closable":"","name":s['name']},on:{"on-close":_vm.handleTagClose}},[_vm._v(_vm._s(s['label'])+": "+_vm._s(s['value'])+"\n        ")])}),1)],1),_c('div',{staticClass:"line"})]:_vm._e(),(!_vm.isShow && _vm.showLine === 1)?_c('Row',{staticClass:"u-layout-row"},[_vm._l((_vm.firstLayout),function(col){return _c('FormCell',{staticStyle:{"float":"left"},attrs:{"col":col,"value":_vm.current_value,"staticSuffix":_vm.staticSuffix,"field-style":col.style,"compact":true,"root":"Query"}})}),_vm._l((_vm.buttons),function(btn){return _c('Button',_vm._b({staticStyle:{"margin-right":"5px"},on:{"click":function($event){return _vm.handleClick(btn)}}},'Button',btn,false),[_vm._v(_vm._s(btn.label))])})],2):_vm._l((_vm.getRows(_vm.rows)),function(row,index){return _c('Row',{key:index,staticClass:"u-layout-row"},_vm._l((row),function(col){return _c('Col',{attrs:{"span":col.colspan}},[_c('FormCell',{attrs:{"col":col,"value":_vm.current_value,"staticSuffix":_vm.staticSuffix,"root":_vm.Query}})],1)}),1)}),(_vm.rows.length > 1 && _vm.showLine < _vm.rows.length)?_c('Row',{staticClass:"collapse-line"},[_c('span',{staticClass:"showMoreBtn",on:{"click":function($event){_vm.isShow = !_vm.isShow}}},[_vm._v("\n      "+_vm._s(_vm.isShow ? "隐藏" : "显示")+"\n      "),_c('Icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],attrs:{"type":"ios-arrow-up"}}),_c('Icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShow),expression:"!isShow"}],attrs:{"type":"ios-arrow-down"}})],1)]):_vm._e(),(_vm.isShow || !_vm.isShow && _vm.showLine>1)?_c('Row',[_c('Col',{staticStyle:{"margin":"5px","text-align":"center"},attrs:{"span":"24"}},_vm._l((_vm.buttons),function(btn){return _c('Button',_vm._b({staticStyle:{"margin-right":"5px"},on:{"click":function($event){return _vm.handleClick(btn)}}},'Button',btn,false),[_vm._v(_vm._s(btn.label))])}),1)],1):_vm._e()],2)}
var Queryvue_type_template_id_602708a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Query/Query.vue?vue&type=template&id=602708a0&

// CONCATENATED MODULE: ./src/components/mixins/dict.js

/* harmony default export */ var dict = ({
  methods: {
    merge_object: function merge_object(object) {
      for (var _len = arguments.length, source = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        source[_key - 1] = arguments[_key];
      }

      for (var _i = 0; _i < source.length; _i++) {
        var c = source[_i];

        for (var x in c) {
          this.$set(object, x, deepCopy(c[x]));
        }
      }
    },
    reset_object: function reset_object(object) {
      for (var c in object) {
        if (Array.isArray(object[c])) {
          this.$set(object, c, []);
        } else if (object[c] instanceof Date) {
          this.$set(object, c, '');
        } else if (object[c] instanceof Object) {
          this.reset_object(object[c]);
        } else if (typeof object[c] === 'number') {
          this.$set(object, c, 0);
        } else if (typeof object[c] === 'string') {
          this.$set(object, c, '');
        } else if (typeof object[c] === 'boolean') {
          this.$set(object, c, false);
        } else {
          this.$set(object, c, '');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Fields/index.js

/* harmony default export */ var Fields = (GenericInput);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Build/FormCell.vue?vue&type=template&id=1afc46de&
var FormCellvue_type_template_id_1afc46de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[(_vm.col.label)?_c('label',{staticClass:"u-layout-cell-label",style:(_vm.labelStyle)},[(_vm.col.info)?_c('i',{staticClass:"ivu-icon ivu-icon-ios-information-circle-outline",attrs:{"title":_vm.col.info}}):_vm._e(),_vm._v("\n    "+_vm._s(_vm.col.label)+"\n  ")]):_vm._e(),_c('div',{staticClass:"u-layout-cell-field",style:(_vm.fieldStyle)},[_c('GenericInput',_vm._b({attrs:{"value":_vm.value,"staticSuffix":_vm.staticSuffix,"root":_vm.root},on:{"on-validate":_vm.handleValidate,"on-error":_vm.handleError,"on-clear-error":_vm.handleClearError}},'GenericInput',_vm.col,false)),(_vm.col.help && !_vm.col.static)?_c('div',{staticClass:"u-layout-cell-help"},[_vm._v(_vm._s(_vm.col.help))]):_vm._e(),(_vm.error)?_c('div',{staticClass:"u-layout-cell-error"},[_vm._v(_vm._s(_vm.error))]):_vm._e()],1)])}
var FormCellvue_type_template_id_1afc46de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Build/FormCell.vue?vue&type=template&id=1afc46de&

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("41b2");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var babel_runtime_helpers_typeof = __webpack_require__("1098");
var helpers_typeof_default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof);

// CONCATENATED MODULE: ./node_modules/async-validator/es/util.js


var formatRegExp = /%[sdj%]/g;

var warning = function warning() {};

// don't print warning message when in production env or node runtime
if (false) {}

function util_format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === objArrLength) {
      callback(results);
    }
  };
  objArrKeys.forEach(function (key) {
    var arr = objArr[key];
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : helpers_typeof_default()(value)) === 'object' && helpers_typeof_default()(target[s]) === 'object') {
          target[s] = extends_default()({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/required.js


/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(util_format(options.messages.required, rule.fullField));
  }
}

/* harmony default export */ var rule_required = (required);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/whitespace.js


/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(util_format(options.messages.whitespace, rule.fullField));
  }
}

/* harmony default export */ var rule_whitespace = (whitespace);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/type.js




/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : helpers_typeof_default()(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type_type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    rule_required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(util_format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : helpers_typeof_default()(value)) !== rule.type) {
    errors.push(util_format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/* harmony default export */ var rule_type = (type_type);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/range.js


/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(util_format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(util_format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(util_format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(util_format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

/* harmony default export */ var rule_range = (range);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/enum.js

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(util_format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/* harmony default export */ var rule_enum = (enumerable);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/pattern.js


/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern_pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(util_format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(util_format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

/* harmony default export */ var rule_pattern = (pattern_pattern);
// CONCATENATED MODULE: ./node_modules/async-validator/es/rule/index.js







/* harmony default export */ var es_rule = ({
  required: rule_required,
  whitespace: rule_whitespace,
  type: rule_type,
  range: rule_range,
  'enum': rule_enum,
  pattern: rule_pattern
});
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/string.js



/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
      es_rule.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        es_rule.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_string = (string);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/method.js



/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_method = (method);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/number.js



/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_number = (number);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/boolean.js



/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean_boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_boolean = (boolean_boolean);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/regexp.js



/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_regexp = (regexp);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/integer.js



/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_integer = (integer);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/float.js



/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_float = (floatFn);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/array.js


/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_array = (array);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/object.js



/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object_object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_object = (object_object);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/enum.js


var enum_ENUM = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enum_enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value) {
      es_rule[enum_ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_enum = (enum_enumerable);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/pattern.js



/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function validator_pattern_pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      es_rule.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_pattern = (validator_pattern_pattern);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/date.js



function date_date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject = void 0;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      es_rule.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        es_rule.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_date = (date_date);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/required.js



function required_required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : helpers_typeof_default()(value);
  es_rule.required(rule, value, source, errors, options, type);
  callback(errors);
}

/* harmony default export */ var validator_required = (required_required);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/type.js



function validator_type_type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ var validator_type = (validator_type_type);
// CONCATENATED MODULE: ./node_modules/async-validator/es/validator/index.js















/* harmony default export */ var es_validator = ({
  string: validator_string,
  method: validator_method,
  number: validator_number,
  boolean: validator_boolean,
  regexp: validator_regexp,
  integer: validator_integer,
  float: validator_float,
  array: validator_array,
  object: validator_object,
  'enum': validator_enum,
  pattern: validator_pattern,
  date: validator_date,
  url: validator_type,
  hex: validator_type,
  email: validator_type,
  required: validator_required
});
// CONCATENATED MODULE: ./node_modules/async-validator/es/messages.js
function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages_messages = newMessages();
// CONCATENATED MODULE: ./node_modules/async-validator/es/index.js






/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages_messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : helpers_typeof_default()(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();
      if (messages === messages_messages) {
        messages = newMessages();
      }
      deepMerge(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = extends_default()({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = extends_default()({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (helpers_typeof_default()(rule.fields) === 'object' || helpers_typeof_default()(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return extends_default()({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, util_format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = extends_default()({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      var res = rule.validator(rule, data.value, cb, data.source, options);
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !es_validator.hasOwnProperty(rule.type)) {
      throw new Error(util_format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return es_validator.required;
    }
    return es_validator[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  es_validator[type] = validator;
};

Schema.warning = warning;

Schema.messages = messages_messages;

/* harmony default export */ var es = (Schema);
// CONCATENATED MODULE: ./src/components/locale/async-validator.js
/* harmony default export */ var async_validator = ({
  'default': '字段 %s 校验失败',
  required: '%s 必填',
  'enum': '%s 必需是 %s 其中之一',
  whitespace: '%s 不能为空',
  date: {
    format: '%s 日期 %s 对于格式 %s 无效',
    parse: '%s 日期不能被解析, %s 无效 ',
    invalid: '%s 日期 %s 无效'
  },
  types: {
    string: '%s 不是一个 %s',
    method: '%s 不是一个 %s (函数)',
    array: '%s 不是一个 %s',
    object: '%s 不是一个 %s',
    number: '%s 不是一个 %s',
    date: '%s 不是一个 %s',
    boolean: '%s 不是一个 %s',
    integer: '%s 不是一个 %s',
    float: '%s 不是一个 %s',
    regexp: '%s 不是一个有效的 %s',
    email: '%s 不是一个有效的 %s',
    url: '%s 不是一个有效的 %s',
    hex: '%s 不是一个有效的 %s'
  },
  string: {
    len: '%s 需要长度为 %s 个字符',
    min: '%s 需要至少 %s 个字符',
    max: '%s 不能超过 %s 个字符',
    range: '%s 必须在 %s 和 %s 个字符之间'
  },
  number: {
    len: '%s 必须等于 %s',
    min: '%s 不能小于 %s',
    max: '%s 不能大于 %s',
    range: '%s 必须在 %s 和 %s 之间'
  },
  array: {
    len: '%s 长度必须为 %s',
    min: '%s 长度不能小于 %s',
    max: '%s 长度不能大于 %s',
    range: '%s 长度必须在 %s 和 %s 之间'
  },
  pattern: {
    mismatch: '%s 值 %s 与模式 %s 不匹配'
  }
});
// CONCATENATED MODULE: ./src/components/Build/validateUtil.js



var validateUtil_validateRule = function validateRule(value, fieldname, validateResult) {
  var result = validateResult[fieldname];
  if (!result) return;

  if (result.rule.length > 0) {
    result.validateState = 'validating';
    var validator = new es(defineProperty_default()({}, fieldname, result.rule));
    validator.messages(async_validator);
    validator.validate(value, {
      firstFields: true
    }, function (errors, fields) {
      result.validateState = !errors ? 'success' : 'error';
      result.error = errors ? errors[0].message : '';
    });
    /* .then(() => {
    result.validateState = 'success'
    result.error = ''
    }).catch(({errors, fields}) => {
    result.validateState = 'error'
    result.error = errors[0].message
    }) */
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Build/FormCell.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var FormCellvue_type_script_lang_js_ = ({
  name: 'FormCell',
  mixins: {
    Emitter: emitter
  },
  components: {
    GenericInput: Fields
  },
  props: {
    col: {},
    value: {},
    fieldStyle: {},
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelDir: {
      type: String,
      default: 'horizontal'
    },
    validateResult: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    staticSuffix: {
      type: String,
      default: '_static'
    },
    compact: {
      type: Boolean,
      default: false
    },
    root: String
  },
  computed: {
    classes: function classes() {
      return {
        'u-layout-cell': true,
        'u-layout-required': this.col.required && !this.col.static,
        'u-layout-error': this.error,
        'u-layout-compact': this.compact
      };
    },
    labelStyle: function labelStyle() {
      if (this.compact) return {};
      var s = {
        minWidth: "".concat(this.col.labelWidth, "px")
      };

      switch (this.labelPosition) {
        case 'left':
          s['textAlign'] = 'left';
          break;

        case 'right':
          s['textAlign'] = 'right';
          break;

        case 'top':
          s['display'] = 'block';
          break;
      }

      if (this.labelDir == 'vertical') {
        s['textAlign'] = 'left';
        s['display'] = 'block';
      }

      return s;
    },
    error: {
      get: function get() {
        return this.validateResult[this.col.name] && this.validateResult[this.col.name].error || '';
      },
      set: function set(v) {
        this.$set(this.validateResult[this.col.name], 'error', v);
      }
    } // validateState: {
    //   get () {
    //     return this.validateResult[this.col.name].validateState
    //   },
    //
    //   set (v) {
    //     this.$set(this.validateResult[this.col.name], 'validateState', v)
    //   }
    // }

  },
  methods: {
    validate: function validate(type) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      if (!this.col.static) validateUtil_validateRule(this.value, this.col.name, this.validateResult);
    },
    handleValidate: function handleValidate() {
      this.validate();
    },
    // 错误为一个对象，可以包含多个字段
    // 如： {name: error_msg, name: error_msg}
    handleError: function handleError(error, $event) {
      var d = {
        error: error,
        validateState: 'error'
      };
      this.$set(this.validateResult, this.col.name, Object.assign(this.validateResult[this.col.name], d));
    },
    handleClearError: function handleClearError(error, $event) {
      var d = {
        error: '',
        validateState: ''
      };
      this.$set(this.validateResult, this.col.name, Object.assign(this.validateResult[this.col.name], d));
    }
  }
});
// CONCATENATED MODULE: ./src/components/Build/FormCell.vue?vue&type=script&lang=js&
 /* harmony default export */ var Build_FormCellvue_type_script_lang_js_ = (FormCellvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Build/FormCell.vue





/* normalize component */

var FormCell_component = Object(componentNormalizer["a" /* default */])(
  Build_FormCellvue_type_script_lang_js_,
  FormCellvue_type_template_id_1afc46de_render,
  FormCellvue_type_template_id_1afc46de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormCell = (FormCell_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Query/Query.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Queryvue_type_script_lang_js_ = ({
  name: 'Query',
  props: {
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    layout: {
      type: Array,
      requied: true
    },
    firstLineLayout: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    labelWidth: {
      type: Number,
      default: 80
    },
    defaultValue: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    showLine: {
      // 当条件为多行时，初始显示几行，缺省为1
      type: Number,
      default: 1
    },
    choices: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    showSelected: {
      type: Boolean,
      default: false
    },
    staticSuffix: {
      type: String,
      default: '_static'
    },
    submitText: {
      type: String,
      default: '查询'
    },
    resetText: {
      type: String,
      default: '重置'
    },
    parseUrl: {
      type: Boolean,
      default: true
    }
  },
  mixins: [emitter, dict],
  components: {
    Row: external_iview_["Row"],
    Col: external_iview_["Col"],
    FormCell: FormCell,
    Button: external_iview_["Button"],
    Tag: external_iview_["Tag"],
    Icon: external_iview_["Icon"],
    GenericInput: Fields
  },
  data: function data() {
    var buttons = [{
      label: this.submitText,
      type: 'primary',
      name: 'submit'
    }];

    if (this.resetText) {
      buttons.push({
        label: this.resetText,
        type: 'default',
        name: 'reset'
      });
    }

    return {
      f: {},
      // fields
      current_value: {},
      old_value: {},
      //保存上一次的值,用于数据比较
      isShow: false,
      // 是否显示隐藏内容
      buttons: buttons
    };
  },
  computed: {
    selected: function selected() {
      var v = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.layout[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var col = _step2.value;

              if (typeof_default()(col) === 'object') {
                name = col.name;
              } else {
                name = col;
              }

              var value = void 0;
              var field = this.f[name];
              var InputClass = Fields_fieldMapping(field.type);
              var options = Object.assign({}, field, {
                value: this.value,
                staticSuffix: this.staticSuffix
              });
              var input = new InputClass(this, options);

              if (!isEmpty(this.value[name])) {
                //判断是否有name_static值，如果有，则不再执行setStaticValue的方法
                input.setStaticValue(this.value[name]);
                v.push({
                  name: name,
                  label: field.label,
                  value: this.value["".concat(name).concat(this.staticSuffix)] || this.value[name]
                });
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return v;
    },
    // 获取第一行的布局，可以单独设置style，如宽度 width
    firstLayout: function firstLayout() {
      var fields = [],
          row;
      if (this.firstLineLayout.length > 0) row = this.firstLineLayout;else row = this.layout[0];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = row[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var f = _step3.value;
          var d = {};

          if (typeof f === 'string') {
            d.name = f;
          } else {
            d = f;
          }

          var col = this.f[d.name];

          if (!d.style) {
            d.style = {
              width: '200px'
            };
          }

          Object.assign(d, col);
          fields.push(d);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return fields;
    },
    rows: function rows() {
      var r = [],
          name;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.layout[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var row = _step4.value;
          var new_r = [];
          r.push(new_r);
          var span = 24 / row.length; //重新计算col

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = row[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var col = _step5.value;

              if (typeof_default()(col) === 'object') {
                name = col.name;
                span = col.colspan || span;
              } else {
                name = col;
              }

              var width = 100 / 24 * span;
              var f = this.f[name];
              if (!f) throw Error("Can't find field ".concat(name, " in fields, please check if the name is not correct between layout and fields"));
              var field = Object.assign({
                colspan: span,
                labelWidth: this.labelWidth,
                static: col.static || this.static
              }, f);
              new_r.push(field);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return r;
    }
  },
  watch: {
    defaultValue: {
      handler: function handler(v) {
        this.merge_object(this.current_value, v);
      },
      deep: true
    },
    current_value: {
      immediate: true,
      handler: function handler(v) {
        for (var c in this.value) {
          var _name = "".concat(c).concat(this.staticSuffix);

          if (this.value[c] === v[c] && this.f.hasOwnProperty(c) && this.value[_name] != v[_name]) {
            this.$set(this.value, _name, v[_name]);
          }
        } // 比较两个变量是否不同


        var result = {};
        this.merge_object(result, deepCompare(this.old_value, this.current_value, true));

        if (!isEmpty(result)) {
          this.$emit('on-query-change', result);
        }

        this.merge_object(this.old_value, this.current_value);
      },
      deep: true
    },
    // TODO 增加当value被清除时，对于defaultValue中有的值，应该置为初始值
    choices: {
      immediate: true,
      handler: function handler() {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this.fields[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var field = _step6.value;
            var choices = this.choices[field.name];

            if (choices) {
              if (!field.options) {
                this.$set(field, 'options', {
                  choices: choices
                });
              } else {
                this.$set(field.options, 'choices', choices);
              }
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      },
      deep: true
    }
  },
  created: function created() {
    var curValue = {};
    var query_url = new QueryURL();
    if (this.parseUrl) curValue = query_url.urlParams;
    this.merge_object(this.value, this.defaultValue);
    this.merge_object(this.value, curValue);
    this.merge_object(this.current_value, this.value);
    this.merge_object(this.old_value, this.current_value);
    this.makeFields();
  },
  methods: {
    makeFields: function makeFields() {
      var fields = {};
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.fields[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var f = _step7.value;
          fields[f.name] = f; //如果type是select，则初始化options

          if (f.type === 'select') {
            if (!f.options) {
              this.$set(f, 'options', {
                choices: []
              });
            } else if (!f.options.choices) {
              this.$set(f.options, 'choices', []);
            }
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      this.f = fields;
    },
    handleTagClose: function handleTagClose(e, name) {
      this.$set(this.current_value, name, utils_reset(this.current_value[name]));
      this.$set(this.current_value, "".concat(name).concat(this.staticSuffix), '');
      this.$set(this.value, name, utils_reset(this.value[name]));
      this.$set(this.value, "".concat(name).concat(this.staticSuffix), '');
    },
    reset: function reset() {
      this.reset_object(this.current_value);
      this.merge_object(this.current_value, this.defaultValue);
    },
    handleClick: function handleClick(btn) {
      if (btn.name === 'reset') {
        this.reset();
      }

      this.merge_object(this.value, this.current_value);
      this.$emit("input", this.value);
    },
    getRows: function getRows(rows) {
      if (this.isShow) return rows;else {
        return rows.slice(0, this.showLine);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Query/Query.vue?vue&type=script&lang=js&
 /* harmony default export */ var Query_Queryvue_type_script_lang_js_ = (Queryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Query/Query.vue?vue&type=style&index=0&lang=less&
var Queryvue_type_style_index_0_lang_less_ = __webpack_require__("a038");

// CONCATENATED MODULE: ./src/components/Query/Query.vue






/* normalize component */

var Query_component = Object(componentNormalizer["a" /* default */])(
  Query_Queryvue_type_script_lang_js_,
  Queryvue_type_template_id_602708a0_render,
  Queryvue_type_template_id_602708a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Query = (Query_component.exports);
// CONCATENATED MODULE: ./src/components/Query/index.js

/* harmony default export */ var components_Query = (Query);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__("b047");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./node_modules/resize-detector/esm/index.js
var raf = null;

function requestAnimationFrame(callback) {
  if (!raf) {
    raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      return setTimeout(callback, 16);
    }).bind(window);
  }

  return raf(callback);
}

var caf = null;

function cancelAnimationFrame(id) {
  if (!caf) {
    caf = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
      clearTimeout(id);
    }).bind(window);
  }

  caf(id);
}

function createStyles(styleText) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = styleText;
  } else {
    style.appendChild(document.createTextNode(styleText));
  }

  (document.querySelector('head') || document.body).appendChild(style);
  return style;
}

function createElement(tagName) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elem = document.createElement(tagName);
  Object.keys(props).forEach(function (key) {
    elem[key] = props[key];
  });
  return elem;
}

function esm_getComputedStyle(elem, prop, pseudo) {
  // for older versions of Firefox, `getComputedStyle` required
  // the second argument and may return `null` for some elements
  // when `display: none`
  var computedStyle = window.getComputedStyle(elem, pseudo || null) || {
    display: 'none'
  };
  return computedStyle[prop];
}

function getRenderInfo(elem) {
  if (!document.documentElement.contains(elem)) {
    return {
      detached: true,
      rendered: false
    };
  }

  var current = elem;

  while (current !== document) {
    if (esm_getComputedStyle(current, 'display') === 'none') {
      return {
        detached: false,
        rendered: false
      };
    }

    current = current.parentNode;
  }

  return {
    detached: false,
    rendered: true
  };
}

var css = ".resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}";
var total = 0;
var esm_style = null;

function addListener(elem, callback) {
  if (!elem.__resize_mutation_handler__) {
    elem.__resize_mutation_handler__ = handleMutation.bind(elem);
  }

  var listeners = elem.__resize_listeners__;

  if (!listeners) {
    elem.__resize_listeners__ = [];

    if (window.ResizeObserver) {
      var offsetWidth = elem.offsetWidth,
          offsetHeight = elem.offsetHeight;
      var ro = new ResizeObserver(function () {
        if (!elem.__resize_observer_triggered__) {
          elem.__resize_observer_triggered__ = true;

          if (elem.offsetWidth === offsetWidth && elem.offsetHeight === offsetHeight) {
            return;
          }
        }

        runCallbacks(elem);
      }); // initially display none won't trigger ResizeObserver callback

      var _getRenderInfo = getRenderInfo(elem),
          detached = _getRenderInfo.detached,
          rendered = _getRenderInfo.rendered;

      elem.__resize_observer_triggered__ = detached === false && rendered === false;
      elem.__resize_observer__ = ro;
      ro.observe(elem);
    } else if (elem.attachEvent && elem.addEventListener) {
      // targeting IE9/10
      elem.__resize_legacy_resize_handler__ = function handleLegacyResize() {
        runCallbacks(elem);
      };

      elem.attachEvent('onresize', elem.__resize_legacy_resize_handler__);
      document.addEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    } else {
      if (!total) {
        esm_style = createStyles(css);
      }

      initTriggers(elem);
      elem.__resize_rendered__ = getRenderInfo(elem).rendered;

      if (window.MutationObserver) {
        var mo = new MutationObserver(elem.__resize_mutation_handler__);
        mo.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
        elem.__resize_mutation_observer__ = mo;
      }
    }
  }

  elem.__resize_listeners__.push(callback);

  total++;
}

function removeListener(elem, callback) {
  var listeners = elem.__resize_listeners__;

  if (!listeners) {
    return;
  }

  if (callback) {
    listeners.splice(listeners.indexOf(callback), 1);
  } // no listeners exist, or removing all listeners


  if (!listeners.length || !callback) {
    // targeting IE9/10
    if (elem.detachEvent && elem.removeEventListener) {
      elem.detachEvent('onresize', elem.__resize_legacy_resize_handler__);
      document.removeEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
      return;
    }

    if (elem.__resize_observer__) {
      elem.__resize_observer__.unobserve(elem);

      elem.__resize_observer__.disconnect();

      elem.__resize_observer__ = null;
    } else {
      if (elem.__resize_mutation_observer__) {
        elem.__resize_mutation_observer__.disconnect();

        elem.__resize_mutation_observer__ = null;
      }

      elem.removeEventListener('scroll', handleScroll);
      elem.removeChild(elem.__resize_triggers__.triggers);
      elem.__resize_triggers__ = null;
    }

    elem.__resize_listeners__ = null;
  }

  if (! --total && esm_style) {
    esm_style.parentNode.removeChild(esm_style);
  }
}

function getUpdatedSize(elem) {
  var _elem$__resize_last__ = elem.__resize_last__,
      width = _elem$__resize_last__.width,
      height = _elem$__resize_last__.height;
  var offsetWidth = elem.offsetWidth,
      offsetHeight = elem.offsetHeight;

  if (offsetWidth !== width || offsetHeight !== height) {
    return {
      width: offsetWidth,
      height: offsetHeight
    };
  }

  return null;
}

function handleMutation() {
  // `this` denotes the scrolling element
  var _getRenderInfo2 = getRenderInfo(this),
      rendered = _getRenderInfo2.rendered,
      detached = _getRenderInfo2.detached;

  if (rendered !== this.__resize_rendered__) {
    if (!detached && this.__resize_triggers__) {
      resetTriggers(this);
      this.addEventListener('scroll', handleScroll, true);
    }

    this.__resize_rendered__ = rendered;
    runCallbacks(this);
  }
}

function handleScroll() {
  var _this = this;

  // `this` denotes the scrolling element
  resetTriggers(this);

  if (this.__resize_raf__) {
    cancelAnimationFrame(this.__resize_raf__);
  }

  this.__resize_raf__ = requestAnimationFrame(function () {
    var updated = getUpdatedSize(_this);

    if (updated) {
      _this.__resize_last__ = updated;
      runCallbacks(_this);
    }
  });
}

function runCallbacks(elem) {
  if (!elem || !elem.__resize_listeners__) {
    return;
  }

  elem.__resize_listeners__.forEach(function (callback) {
    callback.call(elem);
  });
}

function initTriggers(elem) {
  var position = esm_getComputedStyle(elem, 'position');

  if (!position || position === 'static') {
    elem.style.position = 'relative';
  }

  elem.__resize_old_position__ = position;
  elem.__resize_last__ = {};
  var triggers = createElement('div', {
    className: 'resize-triggers'
  });
  var expand = createElement('div', {
    className: 'resize-expand-trigger'
  });
  var expandChild = createElement('div');
  var contract = createElement('div', {
    className: 'resize-contract-trigger'
  });
  expand.appendChild(expandChild);
  triggers.appendChild(expand);
  triggers.appendChild(contract);
  elem.appendChild(triggers);
  elem.__resize_triggers__ = {
    triggers: triggers,
    expand: expand,
    expandChild: expandChild,
    contract: contract
  };
  resetTriggers(elem);
  elem.addEventListener('scroll', handleScroll, true);
  elem.__resize_last__ = {
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

function resetTriggers(elem) {
  var _elem$__resize_trigge = elem.__resize_triggers__,
      expand = _elem$__resize_trigge.expand,
      expandChild = _elem$__resize_trigge.expandChild,
      contract = _elem$__resize_trigge.contract; // batch read

  var csw = contract.scrollWidth,
      csh = contract.scrollHeight;
  var eow = expand.offsetWidth,
      eoh = expand.offsetHeight,
      esw = expand.scrollWidth,
      esh = expand.scrollHeight; // batch write

  contract.scrollLeft = csw;
  contract.scrollTop = csh;
  expandChild.style.width = eow + 1 + 'px';
  expandChild.style.height = eoh + 1 + 'px';
  expand.scrollLeft = esw;
  expand.scrollTop = esh;
}


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/UGrid.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var UGridvue_type_script_lang_js_ = ({
  name: 'Grid',
  mixins: [emitter],
  components: {
    UTable: UTable,
    Pagination: pagination,
    Buttons: UButtons,
    Query: components_Query
  },
  data: function data() {
    var store = new UGridStore(this, this.data, this.value);
    return {
      store: store,
      autoloaded: false
    };
  },
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 用于选择控件设置choices
    choices: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: objectSpread_default()({}, mapState('columns', 'columnResizing', 'checkCol', 'indexCol', 'gridWidth', 'width', 'height', 'resizable', 'columnPosition', 'guiderHeight', 'defaultColWidth', 'leftWidth', 'rightWidth', 'checkColTitle', 'checkColWidth', 'indexColWidth', 'indexColTitle', 'scrollLeft', 'total', 'pageSizeOpts', 'pagination', 'loading', 'loadingText', 'loadingTop', 'loadingLeft', 'autoLoad', 'url', 'param', 'buttons', 'rightButtons', 'bottomButtons', 'selected', 'editMode', 'actionColumn', 'deleteRowConfirm', 'onSaveRow', 'onDeleteRow', 'onLoadData', 'query', 'theme', 'cellTitle', 'isScrollRight', 'page', 'start', 'pageSize', 'nowrap', 'addAutoScrollTo', 'onRowEditRender', 'static', 'xscroll', 'afterLoadData', 'multiHeaderSep'), {
    columnDraggerStyles: function columnDraggerStyles() {
      return {
        left: this.columnPosition - 7 + 'px',
        height: this.guiderHeight + 'px'
      };
    },
    themeClass: function themeClass() {
      return "theme-".concat(this.theme);
    },
    tableWidth: function tableWidth() {
      var w = 0;
      this.columns.forEach(function (col) {
        w = col.hidden ? w : w + col.width;
      });
      return w;
    },
    leftTableClass: function leftTableClass() {
      var cls = 'u-grid-body u-table-left';

      if (this.scrollLeft) {
        cls += ' dark';
      }

      return cls;
    },
    rightTableClass: function rightTableClass() {
      var cls = 'u-grid-body u-table-right';

      if (!this.isScrollRight) {
        cls += ' dark';
      }

      return cls;
    }
  }),
  methods: objectSpread_default()({}, mapMethod('getSelection', 'showLoading', 'setSelection', 'removeRow', 'setComment', 'removeComment', 'getSelectedRows', 'getColumn', 'getDefaultRow', 'makeRows', 'sendInputEvent', 'deselectAll', 'selectAll', 'select', 'deselect', 'toggle', 'getComment', 'getClass', 'removeClass', 'setClass', 'addRow', 'addEditRow'), {
    resize: function resize(width, height) {
      if (width) this.width = width;

      if (this.width === 'auto') {
        this.store.states.gridWidth = this.$el.clientWidth === 0 ? this.$parent.$el.clientWidth : this.$el.clientWidth;
      } else {
        this.store.states.gridWidth = this.width;
      }

      if (height) this.height = height; // if (!this.resizable) return
      // let parentWidth = this.$el.clientWidth

      var cols = [];
      var w = this.gridWidth - 2;
      var hasLeftFixed = false;
      var hasRightFixed = false;
      var max_level = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _col = _step.value;
          _col.subs = _col.title.split(this.multiHeaderSep);
          max_level = Math.max(max_level, _col.subs.length);

          if (_col.width) {
            w -= _col.width;
          } else {
            cols.push(_col);
          }

          switch (_col.fixed) {
            case 'left':
              hasLeftFixed = true;
              break;

            case 'right':
              hasRightFixed = true;
              break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (cols.length > 0 && this.gridWidth) {
        var len = cols.length; // 当总宽度小于实际宽度，未设宽度的列使用缺省最小宽度

        var stepW = w / len;
        var lastW = w - (len - 1) * stepW;

        for (var i = 0; i < len; i++) {
          if (w > 0) {
            if (i === len - 1) {
              cols[i].width = Math.max(lastW, this.defaultColWidth);
            } else {
              cols[i].width = Math.max(stepW, this.defaultColWidth);
            }
          } else {
            cols[i].width = this.defaultColWidth;
          }
        }
      } // 处理左侧固定列


      if (hasLeftFixed || hasRightFixed) {
        var leftCols = [];
        var rightCols = [];
        var restCols = [];
        this.store.states.leftWidth = 0;
        this.store.states.rightWidth = 0;

        for (var _i = 0, _len = this.columns.length; _i < _len; _i++) {
          var col = this.columns[_i];

          if (col.fixed === 'left' || hasLeftFixed && (col.name === '__check_col__' || col.name === '__index_col__')) {
            col.fixed = 'left';
            leftCols.push(col);
            this.store.states.leftWidth += col.width;
          } else if (col.fixed === 'right') {
            rightCols.push(col);
            this.store.states.rightWidth += col.width;
          } else {
            restCols.push(col);
          }
        }

        this.store.states.columns = leftCols.concat(restCols).concat(rightCols);
      }

      this.store.states.drawColumns = this.parse_header(this.columns, max_level);
    },
    parse_header: function parse_header(cols, max_level) {
      var columns = [],
          //保存每行的最后有效列
      columns_width = {},
          //保存每行最右坐标
      i,
          len,
          j,
          jj,
          col,
          jl,
          subs_len,
          path,
          rowspan,
          //每行平均层数，max_level/sub_len，如最大4层，当前总层数为2,则每行占两层
      colspan,
          parent,
          //上一层的结点为下一层的父结点
      new_col,
          //记录显示用的表头单元
      left; //某层最左结点

      if (!cols || cols.length === 0) return []; //初始化表头层

      for (i = 0; i < max_level; i++) {
        columns[i] = [];
        columns_width[i] = 0;
      } //处理多级表头


      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = cols[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _col2 = _step2.value;
          subs_len = _col2.subs.length;
          rowspan = 1; //Math.floor(max_level / subs_len)

          for (j = 0; j < subs_len; j++) {
            path = _col2.subs[j];
            new_col = Object.assign({}, _col2);
            new_col.title = path.replace('%%', '/');
            new_col.level = j;
            new_col.colspan = 1;
            new_col.col = _col2;

            if (j == subs_len - 1) {
              //如果是最后一层，则rowspan为最大值减其余层
              new_col.rowspan = max_level - (subs_len - 1) * rowspan;
              new_col.leaf = true;
            } else {
              new_col.rowspan = rowspan;
            } //查找同层最左边的结点，判断是否title和rowspan一致
            //如果一致，进行合并，即colspan +1
            //如果不一致，则插入新的结点
            //对于一层以下的结点，还要看上一层是否同一个结点，如果是才合并，否则插入


            if (columns[j].length > 0) left = columns[j][columns[j].length - 1];else {
              left = null;
            } //进行合并的判断，当left不为null，并且标题，层级，并且位置小于当前位置

            if (left && left.title === new_col.title && left.level === new_col.level) {
              left.colspan++;
              left.width += new_col.width;
              columns_width[j] += new_col.width; // left.leaf = false
            } else {
              //当new_col占多行时，将下层结点清空
              columns[j].push(new_col);
              new_col.left = columns_width[j];
              columns_width[j] += new_col.width;

              for (jl = 1; jl < new_col.rowspan; jl++) {
                columns_width[j + jl] += new_col.width;
              }
            }

            _col2.left = new_col.left;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return columns;
    },
    getDefaultColumn: function getDefaultColumn(options) {
      // 如果column设置了showTitle，则使用column的值，否则使用全局的cellTitle属性
      var show;

      if (this.cellTitle === undefined) {
        show = true;
      } else {
        show = this.cellTitle;
      }

      if (options.showTitle !== undefined) {
        show = options.showTitle;
      }

      return Object.assign({
        name: 'title',
        width: 0,
        sortable: false,
        align: 'center',
        hidden: false,
        fixed: '',
        resizable: true,
        type: 'column',
        editorOptions: {},
        showTitle: show,
        html: true
      }, options || {});
    },
    makeCols: function makeCols() {
      var _this = this;

      var cols = [];
      var check_column;
      var index_column; // 生成checkbox列

      if (this.checkCol) {
        check_column = this.getDefaultColumn({
          name: '__check_col__',
          type: 'check',
          resizable: false,
          width: this.checkColWidth,
          title: this.checkColTitle,
          align: 'center',
          fixed: ''
        });
        cols.push(check_column);
      } // 生成序号列


      if (this.indexCol) {
        index_column = this.getDefaultColumn({
          name: '__index_col__',
          type: 'index',
          resizable: false,
          width: this.indexColWidth,
          title: this.indexColTitle,
          align: 'center',
          fixed: ''
        });
        cols.push(index_column);
      }

      this.data.columns.forEach(function (col) {
        if (!col.hidden) {
          if (col.name === '__check_col__') {
            Object.assign(check_column, col);
          } else if (col.name === '__index_col__') {
            Object.assign(index_column, col);
          } else {
            var d = _this.getDefaultColumn(col); // 增加行编辑操作列的render函数


            if (_this.editMode === 'row' && col.name === _this.actionColumn) {
              d.render = col.render || _this.editActionRender;
            }

            if (!d.title) d.title = d.name; // 静态模式下，隐藏操作列

            if (!_this.static && col.name === _this.actionColumn || col.name !== _this.actionColumn) cols.push(d); // 处理format回调，如果是一个字符串，则转为函数

            if (typeof col.format === 'string') {
              var func_str = 'return ' + '`' + col.format + '`';
              var func = new Function('value', 'column', 'row', func_str);
              col._format = col.format;
              col.format = func;
            }
          }
        }
      });
      return cols;
    },
    handleResize: function handleResize() {
      this.store.states.columns = this.makeCols();
      this.resize();
    },
    handleScroll: function handleScroll(left, top) {
      if (this.leftWidth) {
        this.$refs.left.$refs.body.scrollTop = top;
      }

      if (this.rightWidth) {
        this.$refs.right.$refs.body.scrollTop = top;
      }
    },
    handlePage: function handlePage(page) {
      this.go(page);
    },
    handlePageSize: function handlePageSize(size) {
      this.go(1, {
        pageSize: size
      });
    },
    handleQueryChange: function handleQueryChange(change) {
      this.$emit('on-query-change', change);
    },
    // 生成缺省的行编辑按钮
    editActionRender: function editActionRender(h, param) {
      if (this.onRowEditRender) {
        var render = this.onRowEditRender(h, param.row);
        if (render) return render;
      }

      var cls = 'u-cell-text';
      if (this.nowrap) cls += ' nowrap';
      return h('div', {
        'class': cls
      }, [this.defaultEditRender(h, param.row), this.defaultDeleteRender(h, param.row)]);
    },
    defaultEditRender: function defaultEditRender(h, row) {
      var _this2 = this;

      return h('Button', {
        props: {
          type: 'primary',
          size: 'small',
          loading: row._saving
        },
        style: {
          margin: '0 5px'
        },
        on: {
          click: function click() {
            if (!row._editting) {
              _this2.$set(row, '_editRow', Object.assign({}, row));

              _this2.$set(row, '_editting', true);
            } else {
              _this2.$set(row, '_saving', true);

              if (_this2.onSaveRow) {
                var callback = function callback(flag, data) {
                  if (flag === 'ok') {
                    copyDataRow(row, row._editRow);

                    _this2.removeComment(row);

                    _this2.$set(row, '_editting', !row._editting);

                    _this2.$set(row, '_new', false); //保存之后，将_new置为false


                    delete row._editRow;

                    _this2.sendInputEvent();
                  } else {
                    for (var key in data) {
                      var v = data[key];

                      _this2.setComment(row, key, v, 'error');
                    }
                  }

                  _this2.$set(row, '_saving', false);
                };

                _this2.onSaveRow.call(_this2, row._editRow, callback, row);
              } else {
                copyDataRow(row, row._editRow);
                delete row._editRow;

                _this2.$set(row, '_editting', false);

                _this2.$set(row, '_saving', false);

                _this2.sendInputEvent();
              }
            }
          }
        }
      }, row._editting ? '保存' : '编辑');
    },
    defaultDeleteRender: function defaultDeleteRender(h, row) {
      var _this3 = this;

      var defaultDeleteFunc = function defaultDeleteFunc() {
        if (row._editting) {
          _this3.$set(row, '_editting', false);

          _this3.$delete(row, '_editRow');

          _this3.removeComment(row);

          if (row._new) {
            _this3.removeRow(row);
          }

          return;
        }

        var callback = function callback(flag, data) {
          if (flag === 'ok') {
            _this3.removeRow(row);

            _this3.sendInputEvent();
          } else {
            for (var key in data) {
              var v = data[key];

              _this3.setComment(row, key, v, 'error');
            }

            _this3.$set(row, '_deleting', false);
          }
        };

        if (_this3.onDeleteRow) {
          _this3.onDeleteRow.call(_this3, row, callback);
        } else {
          _this3.removeRow(row);
        }
      };

      var type = row._editting ? 'default' : 'error';
      return h('Button', {
        style: {
          margin: '0 5px'
        },
        props: {
          type: type,
          placement: 'top',
          size: 'small',
          loading: row._deleting
        },
        on: {
          click: function click() {
            if (_this3.deleteRowConfirm && !row._editting) {
              _this3.$Modal.confirm({
                content: '请确认是否要删除本条记录？',
                onOk: function onOk() {
                  defaultDeleteFunc();
                }
              });
            } else {
              defaultDeleteFunc();
            }
          }
        }
      }, row._editting ? '取消' : '删除');
    },
    go: function go(page, opts) {
      this.page = page;
      this.start = (this.page - 1) * this.pageSize + 1;
      this.$set(this.param, 'page', page);
      this.loadData(opts || {});
    },
    reset_query: function reset_query() {
      this.$refs.query.reset();
    },
    loadData: function loadData(url, param) {
      var _this4 = this;

      var _url;

      if (url instanceof Object) {
        _url = this.url;
        param = url;
      } else {
        _url = url || this.url;
      }

      Object.assign(this.param, param || {}); // data 为数据行， others 为其它信息，如total

      var callback = function callback(data, others) {
        if (data) {
          _this4.store.states.data = _this4.makeRows(data);
        }

        if (others && others instanceof Object) {
          _this4.store.mergeStates(others);
        }

        if (_this4.afterLoadData) {
          _this4.afterLoadData();

          _this4.afterLoadData = null; // 清除
        }

        _this4.$nextTick(function () {
          _this4.showLoading(false);

          _this4.setSelection(_this4.selected);

          _this4.sendInputEvent();
        });
      };

      if (this.onLoadData) {
        this.showLoading(true);
        this.onLoadData(_url, this.param, callback);
      }
    },
    handleQuerySubmit: function handleQuerySubmit(data) {
      this.go(1, data);
    }
  }),
  created: function created() {
    this.store.states.columns = this.makeCols();
    this.store.states.data = this.makeRows(this.store.states.data);
  },
  mounted: function mounted() {
    var _this5 = this;

    this.resize();
    window.addEventListener('resize', this.handleResize, true); // 初始化query 的 param

    if (this.$refs.query && this.$refs.query.value) this.param = Object.assign(this.param, this.$refs.query.value);

    if (this.autoLoad) {
      this.$nextTick(function () {
        _this5.loadData();
      });
    }

    this.oldParentWidth = this.$parent.$el.offsetWidth;
    this.__resizeHandler = debounce_default()(function () {
      var width = _this5.$parent.$el.offsetWidth;

      if (width !== _this5.oldParentWidth) {
        _this5.store.states.columns = _this5.makeCols();

        _this5.resize();

        _this5.oldParentWidth = width;
      }
    }, 100, {
      leading: true
    });
    if (this.store.states.detectParentResize) addListener(this.$parent.$el, this.__resizeHandler);
  },
  destroy: function destroy() {
    removeListener(this.$parent.$el, this.__resizeHandler);
  },
  watch: {
    'data.columns': {
      handler: function handler() {
        this.store.states.columns = this.makeCols();
        this.resize();
      },
      deep: true
    },
    choices: {
      immediate: true,
      handler: function handler(v) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.columns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _field = _step3.value;
            var _choices = v[_field.name];

            if (_choices) {
              setChoice(this, _field.editor, _choices);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (this.query) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.query.fields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var field = _step4.value;
              var choices = v[field.name];

              if (choices) {
                setChoice(this, field, choices);
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      },
      deep: true
    },
    value: {
      handler: function handler(value) {
        this.store.states.data = value;
      },
      deep: true
    },
    'store.states.static': function storeStatesStatic(value) {
      this.store.states.columns = this.makeCols();
      this.resize();
    } // 'store.states.data': {
    //   handler: function (value) {
    //     this.$emit('input', value)
    //   },
    //   deep: true
    // }

  }
});
// CONCATENATED MODULE: ./src/components/Table/UGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_UGridvue_type_script_lang_js_ = (UGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Table/UGrid.vue?vue&type=style&index=0&lang=less&
var UGridvue_type_style_index_0_lang_less_ = __webpack_require__("6902");

// CONCATENATED MODULE: ./src/components/Table/UGrid.vue






/* normalize component */

var UGrid_component = Object(componentNormalizer["a" /* default */])(
  Table_UGridvue_type_script_lang_js_,
  UGridvue_type_template_id_93af0c74_render,
  UGridvue_type_template_id_93af0c74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UGrid = (UGrid_component.exports);
// CONCATENATED MODULE: ./src/components/Table/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Select.vue?vue&type=template&id=66024990&
var Selectvue_type_template_id_66024990_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Select',{ref:"select",attrs:{"multiple":_vm.multiple,"clearable":_vm.clearable,"filterable":_vm.filterable,"transfer":_vm.transfer,"remote":_vm.remote,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"loading":_vm.loading,"remote-method":_vm.handleRemote,"on-changing":_vm.onChanging},on:{"input":_vm.handleInput},model:{value:(_vm.data),callback:function ($$v) {_vm.data=$$v},expression:"data"}},_vm._l((_vm.items),function(item){return _c('Option',{key:item.value + item.label,attrs:{"value":item.value,"label":item.label}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.renderLabel(item))}})])}),1)}
var Selectvue_type_template_id_66024990_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Select.vue?vue&type=template&id=66024990&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
  name: 'uSelect',
  data: function data() {
    var selectedValue = formatChoices(this.value);
    var d = this.initValue(this.value);
    return {
      data: d.data,
      items: [],
      loading: false,
      selectedValue: selectedValue
    };
  },
  props: {
    value: {},
    choices: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    filterable: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {},
    remoteSelected: {},
    //获取selected值的回调，返回应为 [{label: xxx, value: yyy}], 如果是单选，则不是数组
    transfer: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: function _default() {
        if (this.remote) {
          return '请输入搜索';
        } else {
          return '请选择';
        }
      }
    },
    // 用于指示是否返回input时，采用 {label: xxx, value: yyy} 的形式
    rich: {
      type: Boolean,
      default: false
    },
    onRenderLabel: {},
    onChanging: {}
  },
  mounted: function mounted() {
    this.fireSelected();
  },
  methods: {
    handleInput: function handleInput() {
      var v = this.getSelected();

      if (this.rich) {
        this.$emit('input', v);
      } else {
        this.$emit('input', this.data);
      }
    },
    handleRemote: function handleRemote(query) {
      var _this = this;

      this.loading = true;

      var callback = function callback(items) {
        _this.items = formatChoices(items);
        _this.loading = false;
      };

      if (this.remoteMethod) {
        this.remoteMethod(query, callback);
      }
    },
    setSelected: function setSelected(selected) {
      if (isEmpty(selected)) return;
      var v;
      this.selectedValue = selected;

      if (this.multiple) {
        this.$refs.select.selectedMultiple = selected;
      } else {
        if (Array.isArray(selected) && selected.length > 0) {
          v = selected[0].label;
        } else if (selected instanceof Object) {
          v = selected.label;
        } else {
          v = selected || '';
        }

        this.$refs.select.selectedSingle = v;
        this.$refs.select.query = v;
        this.$refs.select.lastQuery = v;
      }
    },
    fireSelected: function fireSelected() {
      var _this2 = this;

      if (!isEmpty(this.data)) {
        if (isEmpty(this.selectedValue)) {
          if (this.remoteSelected && this.remote) {
            var callback = function callback(v) {
              if (v) _this2.setSelected(v);
            };

            this.remoteSelected(this.data, callback);
          } else {
            var v = this.getSelected();
            this.setSelected(v);
          }
        } else {
          this.setSelected(this.selectedValue);
        }
      }
    },
    getSelected: function getSelected() {
      var v;

      if (isEmpty(this.data)) {
        if (this.multiple) {
          v = [];
        } else {
          v = {
            label: '',
            value: ''
          };
        }
      } else {
        var s;

        if (isEmpty(this.selectedValue)) {
          s = [];
        } else {
          if (Array.isArray(this.selectedValue)) s = this.selectedValue;else s = [this.selectedValue];
        } // v = findChoices((s || []).concat(this.$refs.select.options), this.data, this.multiple) 


        v = findChoices((s || []).concat(this.items), this.data, this.multiple);

        if (!this.multiple) {
          if (v.length > 0) v = v[0];else v = {};
        }

        if (isEmpty(v) && this.data) {
          if (Array.isArray(this.data)) {
            v = this.data.map(function (x) {
              return {
                label: '',
                value: x
              };
            });
          } else {
            v = {
              label: '',
              value: this.data
            };
          }
        }
      }

      this.selectedValue = v;
      return v;
    },
    getStatic: function getStatic() {
      this.getSelected();

      if (this.multiple) {
        return this.selectedValue.map(function (x) {
          return x.label;
        }).join(', ');
      } else {
        if (this.selectedValue instanceof Object) {
          return this.selectedValue.label;
        } else {
          return this.selectedValue;
        }
      }
    },
    initValue: function initValue(v) {
      var d = {};

      if (isEmpty(v)) {
        if (this.multiple) {
          v = [];
        } else {
          v = '';
        }
      } else {
        if (Array.isArray(v)) {
          var r = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var c = _step.value;
              if (c instanceof Object) r.push(c.value);else r.push(c);
              v = r;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else if (v instanceof Object) {
          v = v.value;
        }
      }

      d.data = v;
      return d;
    },
    renderLabel: function renderLabel(item) {
      if (this.onRenderLabel) return this.onRenderLabel(item);
      return item.label;
    }
  },
  watch: {
    value: {
      handler: function handler(v) {
        var selectedValue = formatChoices(v);
        var d = this.initValue(v);
        var data = d.data;

        if (!deepCompare(data, this.data)) {
          this.data = data;
          this.selectedValue = selectedValue;
          this.fireSelected();
        }
      },
      deep: true
    },
    choices: {
      immediate: true,
      handler: function handler(v) {
        if (typeof v !== 'function') {
          this.items = formatChoices(v);
        }
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Select.vue





/* normalize component */

var Select_component = Object(componentNormalizer["a" /* default */])(
  components_Selectvue_type_script_lang_js_,
  Selectvue_type_template_id_66024990_render,
  Selectvue_type_template_id_66024990_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Select = (Select_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RadioGroup.vue?vue&type=template&id=737f5e02&
var RadioGroupvue_type_template_id_737f5e02_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('RadioGroup',{on:{"input":_vm.handleInput},model:{value:(_vm.data),callback:function ($$v) {_vm.data=$$v},expression:"data"}},_vm._l((_vm.items),function(item){return _c('Radio',{key:item.label+item.value,attrs:{"label":item.value}},[_vm._v(_vm._s(item.label))])}),1)}
var RadioGroupvue_type_template_id_737f5e02_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RadioGroup.vue?vue&type=template&id=737f5e02&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RadioGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var RadioGroupvue_type_script_lang_js_ = ({
  name: 'uRadioGroup',
  data: function data() {
    return {
      data: this.value,
      items: []
    };
  },
  props: ['value', 'choices'],
  methods: {
    handleInput: function handleInput() {
      this.$emit('input', this.data);
    }
  },
  watch: {
    value: {
      handler: function handler(v) {
        this.data = v;
      },
      deep: true
    },
    choices: {
      immediate: true,
      handler: function handler() {
        if (typeof this.choices !== 'function') {
          this.items = formatChoices(this.choices);
        }
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/RadioGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RadioGroupvue_type_script_lang_js_ = (RadioGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RadioGroup.vue





/* normalize component */

var RadioGroup_component = Object(componentNormalizer["a" /* default */])(
  components_RadioGroupvue_type_script_lang_js_,
  RadioGroupvue_type_template_id_737f5e02_render,
  RadioGroupvue_type_template_id_737f5e02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioGroup = (RadioGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CheckboxGroup.vue?vue&type=template&id=0abf24bf&
var CheckboxGroupvue_type_template_id_0abf24bf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CheckboxGroup',{on:{"input":_vm.handleInput},model:{value:(_vm.data),callback:function ($$v) {_vm.data=$$v},expression:"data"}},_vm._l((_vm.items),function(item){return _c('Checkbox',{attrs:{"label":item.value}},[_vm._v(_vm._s(item.label))])}),1)}
var CheckboxGroupvue_type_template_id_0abf24bf_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CheckboxGroup.vue?vue&type=template&id=0abf24bf&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CheckboxGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var CheckboxGroupvue_type_script_lang_js_ = ({
  name: 'uCheckboxGroup',
  components: {
    CheckboxGroup: external_iview_["CheckboxGroup"],
    Checkbox: external_iview_["Checkbox"]
  },
  data: function data() {
    return {
      data: this.value,
      items: []
    };
  },
  props: ['value', 'choices'],
  methods: {
    handleInput: function handleInput() {
      this.$emit('input', this.data);
    }
  },
  watch: {
    value: {
      handler: function handler(v) {
        this.data = v;
      },
      deep: true
    },
    choices: {
      immediate: true,
      handler: function handler() {
        if (typeof this.choices !== 'function') {
          this.items = formatChoices(this.choices);
        }
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/CheckboxGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CheckboxGroupvue_type_script_lang_js_ = (CheckboxGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CheckboxGroup.vue





/* normalize component */

var CheckboxGroup_component = Object(componentNormalizer["a" /* default */])(
  components_CheckboxGroupvue_type_script_lang_js_,
  CheckboxGroupvue_type_template_id_0abf24bf_render,
  CheckboxGroupvue_type_template_id_0abf24bf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckboxGroup = (CheckboxGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Build/Build.vue?vue&type=template&id=471110d2&
var Buildvue_type_template_id_471110d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-build"},[_vm._l((_vm.data),function(item){return [(!item.hidden)?_c(item.component || 'BuildLayout',_vm._b({ref:item.name,refInFor:true,tag:"component",attrs:{"value":_vm.value,"labelWidth":item.labelWidth || _vm.labelWidth,"staticSuffix":_vm.staticSuffix,"validateResult":_vm.validateResult}},'component',item,false)):_vm._e()]})],2)}
var Buildvue_type_template_id_471110d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Build/Build.vue?vue&type=template&id=471110d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Build/Build.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Buildvue_type_script_lang_js_ = ({
  name: 'Build',
  mixins: [dict],
  data: function data() {
    return {
      originValue: deepCopy(this.value),
      // 保留初始值，用于reset
      oldvalue: deepCopy(this.value),
      fields: {},
      rows: {},
      // 每段索引,key为每段name值，如果没有则不插入
      validating: false,
      validateResult: {},
      //保存校验结果,
      visible_fields: {} //保存显示字段

    };
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    labelWidth: {
      type: Number,
      default: 150
    },
    plainData: true,
    //数据是否扁平化
    staticSuffix: {
      type: String,
      default: '_static'
    },
    value: {
      // 数据存放对象
      type: Object,
      default: function _default() {
        return {};
      }
    },
    //用于后台校验返回的信息，形式为
    //{name: '错误描述'}
    errors: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    rules: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 用于选择控件设置choices
    choices: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    validate: function validate(callback) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.validating) {
          return;
        }

        _this.validating = true;

        _this.$emit('validating', true);

        var _check = function _check(children, result, recursion) {
          var error = '';

          for (var k in _this.validateResult) {
            var r = _this.validateResult[k]; // 增加对hidden的处理

            if (r.rule && r.rule.length > 0 && !_this.fields[k].hidden) {
              if (!r.validateState && !_this.fields[k].static) {
                validateUtil_validateRule(_this.value, k, _this.validateResult);
                result.pending.push(r);
              } else if (r.validateState === 'validating') {
                result.pending.push(r);
              } else if (r.validateState === 'error' && !result.error) {
                result.error = r.error;
              }
            }
          }
        };

        var _check_pending = function _check_pending(children, recursion) {
          var r = {
            error: '',
            pending: []
          };

          _check(children, r, recursion);

          if (r.error) {
            _this.validating = false;

            _this.$emit('validating', false);

            reject(r.error);
            if (callback) callback(r.error);
            return;
          } else if (r.pending.length > 0) {
            setTimeout(function () {
              _check_pending(r.pending, false);
            }, 10);
          } else {
            _this.validating = false;

            _this.$emit('validating', false);

            resolve();
            if (callback) callback();
          }
        };

        _check_pending(_this.validateResult, true);
      });
    },
    //生成校验结构
    //force表示是否强制
    makeValidateResult: function makeValidateResult(force) {
      for (var name in this.fields) {
        var field = this.fields[name];
        if (!this.visible_fields[field.name]) continue;

        if ((force || !this.validateResult[name]) && !field.static) {
          var rule = this.getRule(field);
          this.$set(this.validateResult, name, {
            error: '',
            validateState: '',
            rule: rule
          });
        }
      }
    },
    //清除某个字段的校验结果，适用于直接改value的情况
    validateField: function validateField(name) {
      var field = this.fields[name];
      if (!this.visible_fields[field.name] || field.static) return;
      validateUtil_validateRule(this.value, name, this.validateResult);
    },
    //检查是否在layout中定义了
    check_in_layout: function check_in_layout(f, layout) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = layout[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var c = _step2.value;

              if (typeof c === 'string') {
                if (c === f.name) return true;
              } else if (c instanceof Object) {
                if (c.name === f.name) return true;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    makeFields: function makeFields() {
      var fs = {};
      var vfs = {};
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var row = _step3.value;
          var isStatic = row.static === undefined ? false : row.static;

          if (row.name) {
            this.rows[row.name] = row;
          }

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = (row.fields || [])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var field = _step4.value;
              fs[field.name] = field;
              this.$set(field, 'static', field.static || isStatic);
              this.$set(field, 'hidden', field.hidden || false);
              this.$set(field, 'enableOnChange', false); // 禁止Input确发onChange回调

              if (typeof field.options === 'undefined') {
                this.$set(field, 'options', {});
              }

              if (field.options.hasOwnProperty('choices')) this.$set(field.options, 'choices', field.options.choices);
              if (!field.type) this.$set(field, 'type', 'str'); //str

              if (this.check_in_layout(field, row.layout) && !field.hidden) {
                vfs[field.name] = true;
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.fields = fs;
      this.visible_fields = vfs;
    },
    getRule: function getRule(field) {
      var rule;

      if (!field.rule || field.static) {
        rule = [];
      } else {
        if (!Array.isArray(field.rule)) {
          field.rule.fullField = field.label;
          rule = [field.rule];
        } else {
          rule = field.rule.slice();
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = rule[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var r = _step5.value;

              if (r instanceof Object) {
                r.fullField = field.label;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } // 添加必填校验


      if (field.required) {
        if (field.type !== 'checkbox') {
          // 如果有上一个校验规则，则将required合并到其中，否则插入新的规则
          if (rule.length > 0) {
            rule[0].required = true;
          } else {
            rule.splice(0, 0, {
              required: true,
              fullField: field.label,
              type: field.multiple ? 'array' : 'string'
            });
          }
        } else {
          field.required = false;
        }
      }

      return rule;
    },
    mergeErrors: function mergeErrors(errors) {
      for (var k in this.errors) {
        this.$set(this.validateResult[k], 'error', this.errors[k]);
        this.$set(this.validateResult[k], 'validateState', 'error');
      }
    },
    // 合并rules
    mergeRules: function mergeRules() {
      for (var k in this.rules) {
        var result = this.validateResult[k];
        var v = this.rules[k];
        if (!result) continue;

        if (Array.isArray(v)) {
          result.rule = result.rule.concat(v);
        } else {
          result.rule.push(v);
        }
      }
    },
    // 清空数据
    reset: function reset() {
      var v = deepCopy(this.originValue);
      this.reset_object(this.value);
      Object.assign(this.value, v);
      this.makeValidateResult(true);
    }
  },
  created: function created() {
    this.makeFields();
    this.makeValidateResult();
    this.mergeRules();
    this.mergeErrors();
  },
  watch: {
    value: {
      handler: function handler(newvalue) {
        var v = deepCompare(newvalue, this.oldvalue, true);

        if (!isEmpty(v)) {
          this.oldvalue = deepCopy(newvalue);

          for (var k in v) {
            var field = this.fields[k];

            if (field && field.onChange) {
              field.onChange(v[k].value, newvalue);
            }
          }
        }
      },
      deep: true
    },
    errors: {
      handler: function handler() {
        this.mergeErrors();
      },
      deep: true
    },
    choices: {
      immediate: true,
      handler: function handler() {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this.data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var row = _step6.value;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = (row.fields || [])[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var field = _step7.value;
                var choices = this.choices[field.name];

                if (choices) {
                  if (!field.options) {
                    this.$set(field, 'options', {
                      choices: choices
                    });
                  } else {
                    this.$set(field.options, 'choices', choices);
                  }
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      },
      deep: true
    },
    data: {
      handler: function handler() {
        this.makeFields();
        this.makeValidateResult();
        this.mergeRules();
      },
      deep: true // rules: {
      //   handler () {
      //     this.mergeRules()
      //   },
      //   deep: true
      // }

    }
  }
});
// CONCATENATED MODULE: ./src/components/Build/Build.vue?vue&type=script&lang=js&
 /* harmony default export */ var Build_Buildvue_type_script_lang_js_ = (Buildvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Build/Build.vue





/* normalize component */

var Build_component = Object(componentNormalizer["a" /* default */])(
  Build_Buildvue_type_script_lang_js_,
  Buildvue_type_template_id_471110d2_render,
  Buildvue_type_template_id_471110d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Build = (Build_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Build/Layout.vue?vue&type=template&id=74bf9fe9&
var Layoutvue_type_template_id_74bf9fe9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.boxComponent)?_c(_vm.boxComponent,_vm._b({tag:"component",staticClass:"u-layout",attrs:{"title":_vm.title}},'component',_vm.boxOptions,false),[_vm._l((_vm.rows),function(row,i){return _c('Row',{key:i,staticClass:"u-layout-row"},_vm._l((row),function(col,j){return _c('Col',{key:j,attrs:{"span":col.colspan}},[(!col.hidden)?_c('FormCell',{attrs:{"col":col,"value":_vm.value,"validateResult":_vm.validateResult,"labelDir":_vm.labelDir,"staticSuffix":_vm.staticSuffix,"root":"Build"}}):_vm._e()],1)}),1)}),(_vm.buttons)?_c('Row',{attrs:{"slot":"footer"},slot:"footer"},[_c('Buttons',{attrs:{"buttons":_vm.btns,"data":_vm.value,"size":_vm.size,"target":_vm.$parent}})],1):_vm._e()],2):_c('div',{staticClass:"u-layout"},_vm._l((_vm.rows),function(row,i){return _c('Row',{key:i,staticClass:"u-layout-row"},_vm._l((row),function(col,j){return _c('Col',{key:j,attrs:{"span":col.colspan}},[(!col.hidden)?_c('FormCell',{attrs:{"col":col,"value":_vm.value,"validateResult":_vm.validateResult,"labelDir":_vm.labelDir,"staticSuffix":_vm.staticSuffix,"root":_vm.Build}}):_vm._e()],1)}),1)}),1)}
var Layoutvue_type_template_id_74bf9fe9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Build/Layout.vue?vue&type=template&id=74bf9fe9&

// CONCATENATED MODULE: ./src/components/Build/layoutMixin.js


/* harmony default export */ var layoutMixin = ({
  props: {
    name: String,
    title: {
      type: String,
      default: ''
    },
    tools: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    layout: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    boxComponent: {
      type: String,
      default: 'Box'
    },
    boxOptions: {},
    value: Object,
    static: {
      type: Boolean,
      default: false
    },
    //是否表态展示
    staticSuffix: {
      type: String,
      default: '_static'
    },
    buttons: {},
    labelWidth: {
      type: Number,
      default: 150
    },
    validateResult: {},
    labelDir: {
      //标签排列方向，水平 horizontal 垂直 vertical
      type: String,
      default: 'horizontal'
    },
    hidden: {
      // 设置隐藏
      type: Boolean,
      default: false
    }
  },
  computed: {
    rows: function rows() {
      var r = [],
          name;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.layout[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var new_r = [];
          r.push(new_r);
          var span = 24 / row.length; //重新计算col

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var col = _step2.value;

              if (typeof_default()(col) === 'object') {
                name = col.name;
                span = col.colspan || span;
              } else {
                name = col;
              }

              var width = 100 / 24 * span;
              var f = utils_list.get(this.fields, name, 'name');
              if (!f) throw Error("Can't find field ".concat(name, " in fields, please check if the name is not correct between layout and fields"));
              var field = Object.assign({
                colspan: span,
                labelWidth: this.labelWidth,
                static: col.static || this.static,
                hidden: this.hidden || col.hidden
              }, f);
              new_r.push(field);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return r;
    },
    btns: function btns() {
      if (Array.isArray(this.buttons)) return this.buttons;else return this.buttons.items;
    },
    size: function size() {
      return this.buttons.size || 'default';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Build/Layout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Layoutvue_type_script_lang_js_ = ({
  name: 'BuildLayout',
  components: {
    FormCell: FormCell,
    Row: external_iview_["Row"],
    Col: external_iview_["Col"],
    Buttons: UButtons
  },
  mixins: [layoutMixin]
});
// CONCATENATED MODULE: ./src/components/Build/Layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Build_Layoutvue_type_script_lang_js_ = (Layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Build/Layout.vue?vue&type=style&index=0&lang=less&
var Layoutvue_type_style_index_0_lang_less_ = __webpack_require__("afe8");

// CONCATENATED MODULE: ./src/components/Build/Layout.vue






/* normalize component */

var Layout_component = Object(componentNormalizer["a" /* default */])(
  Build_Layoutvue_type_script_lang_js_,
  Layoutvue_type_template_id_74bf9fe9_render,
  Layoutvue_type_template_id_74bf9fe9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Layout = (Layout_component.exports);
// CONCATENATED MODULE: ./src/components/Build/index.js




// EXTERNAL MODULE: ./src/components/styles/iview.fix.css
var iview_fix = __webpack_require__("2c21");

// EXTERNAL MODULE: ./src/components/styles/common.css
var common = __webpack_require__("a88d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DatepickerRange.vue?vue&type=template&id=bc8243c8&
var DatepickerRangevue_type_template_id_bc8243c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('DatePicker',{ref:"val1",style:({width: (_vm.width + "px")}),attrs:{"type":_vm.type,"value":_vm.val1,"transfer":"","placeholder":_vm.placeholderBegin,"options":_vm.options1},on:{"input":_vm.handleInput1}}),_vm._v("\n  -\n  "),_c('DatePicker',{ref:"val2",style:({width: (_vm.width + "px")}),attrs:{"type":_vm.type,"value":_vm.val2,"transfer":"","placeholder":_vm.placeholderEnd,"options":_vm.options2},on:{"input":_vm.handleInput2}})],1)}
var DatepickerRangevue_type_template_id_bc8243c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DatepickerRange.vue?vue&type=template&id=bc8243c8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DatepickerRange.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var DatepickerRangevue_type_script_lang_js_ = ({
  name: 'DatepickerRange',
  data: function data() {
    var v = this.parseDate(this.value);
    var self = this;
    v.options1 = {
      disabledDate: function disabledDate(date) {
        var ret = false;

        if (self.disabledBegin) {
          ret = self.disabledBegin(date);
        }

        if (self.val2) {
          ret = ret || formatDate(date) > formatDate(self.val2);
        }

        return ret;
      }
    };
    v.options2 = {
      disabledDate: function disabledDate(date) {
        var ret = false;

        if (self.disabledEnd) {
          ret = self.disabledEnd(date);
        }

        if (self.val1) {
          ret = ret || formatDate(date) < formatDate(self.val1);
        }

        return ret;
      }
    };
    return v;
  },
  props: {
    value: Array,
    placeholderBegin: String,
    placeholderEnd: String,
    type: {
      type: String,
      default: 'date'
    },
    disabledBegin: null,
    disabledEnd: null,
    width: {
      type: Number,
      default: 120
    },
    convert: {
      // 转换结果为string
      type: Boolean,
      default: true
    }
  },
  methods: {
    parseDate: function parseDate(v) {
      var val1, val2;

      if (!v || v.length === 0) {
        val1 = '';
        val2 = '';
      } else {
        val1 = v[0];
        val2 = v[1];
      }

      return {
        val1: val1,
        val2: val2
      };
    },
    handleInput1: function handleInput1(v) {
      this.val1 = v;
      this.$emit('input', [this.format(this.val1), this.format(this.val2)]);
    },
    handleInput2: function handleInput2(v) {
      this.val2 = v;
      this.$emit('input', [this.format(this.val1), this.format(this.val2)]);
    },
    format: function format(v) {
      if (this.convert && v) {
        v = new Date(v);

        switch (this.type) {
          case 'date':
          case 'year':
          case 'month':
            return formatDate(v);

          case 'datetime':
            return formatDate(v, 'yyyy/MM/dd hh:mm:ss');
        }
      } else {
        return v;
      }
    }
  },
  watch: {
    // val1: function(v) {
    //   this.$emit('input', [formatDate(this.val1), formatDate(this.val2)])
    // },
    // val2: function(v) {
    //   this.$emit('input', [formatDate(this.val1), formatDate(this.val2)])
    // },
    value: {
      handler: function handler(v) {
        var d = this.parseDate(v);
        this.val1 = d['val1'];
        this.val2 = d['val2'];

        if (!this.val1) {
          this.$refs.val1.internalValue = [];
        }

        if (!this.val2) {
          this.$refs.val2.internalValue = [];
        }
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/DatepickerRange.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DatepickerRangevue_type_script_lang_js_ = (DatepickerRangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DatepickerRange.vue





/* normalize component */

var DatepickerRange_component = Object(componentNormalizer["a" /* default */])(
  components_DatepickerRangevue_type_script_lang_js_,
  DatepickerRangevue_type_template_id_bc8243c8_render,
  DatepickerRangevue_type_template_id_bc8243c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DatepickerRange = (DatepickerRange_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UploaderFile.vue?vue&type=template&id=83d2a8fe&
var UploaderFilevue_type_template_id_83d2a8fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FileUpload',{ref:"upload",class:_vm.customClass,attrs:{"post-action":_vm.postAction,"size":_vm.size,"multiple":_vm.multiple,"headers":_vm.headers,"data":_vm.data,"value":_vm.value,"extensions":_vm.extensions,"input-id":_vm.inputId,"accept":_vm.accept,"inputId":_vm.inputId,"name":_vm.name},on:{"input":_vm.handleUpdateFiles,"input-file":_vm.handleInputFile}},[_vm._t("default")],2)}
var UploaderFilevue_type_template_id_83d2a8fe_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UploaderFile.vue?vue&type=template&id=83d2a8fe&

// EXTERNAL MODULE: ./src/components/vue-upload-component/index.js
var vue_upload_component = __webpack_require__("2143");
var vue_upload_component_default = /*#__PURE__*/__webpack_require__.n(vue_upload_component);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UploaderFile.vue?vue&type=script&lang=js&


var _name$components$prop;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UploaderFilevue_type_script_lang_js_ = (_name$components$prop = {
  name: 'uploader-file',
  components: {
    FileUpload: vue_upload_component_default.a
  },
  props: {
    value: {},
    size: {},
    multiple: {
      type: Boolean,
      default: false
    },
    headers: {},
    data: {},
    accept: {},
    inputId: {
      type: String,
      default: function _default() {
        return uuid();
      }
    },
    name: {},
    extensions: {},
    postAction: {},
    customClass: {
      type: String,
      default: 'ivu-btn ivu-primary'
    },
    inputFile: {},
    // 文件上传处理函数，如果未提供，则使用看缺省函数
    autoUpload: {
      type: Boolean,
      default: true
    },
    // 是否自动上传，缺省为 true
    onStart: {},
    // 开始上传
    onProgress: {},
    // 传输中
    onSuccess: {},
    // 成功
    onError: {},
    // 出错
    onUpload: {},
    // 上传
    onDelete: {} // 删除

  }
}, defineProperty_default()(_name$components$prop, "components", {
  FileUpload: vue_upload_component_default.a
}), defineProperty_default()(_name$components$prop, "methods", {
  handleInputFile: function handleInputFile(newFile, oldFile) {
    if (this.inputFile) this.inputFile(newFile, oldFile);else this.defaultInputFile(newFile, oldFile);
  },
  defaultInputFile: function defaultInputFile(newFile, oldFile) {
    if (newFile && !oldFile) {
      // 添加文件
      this.onUpload && this.onUpload(newFile);
    }

    if (newFile && oldFile) {
      // 更新文件
      // 开始上传
      if (newFile.active !== oldFile.active) {
        console.log('start', newFile.active, newFile);
        this.onStart && this.onStart(newFile);
      } // 上传进度


      if (newFile.progress !== oldFile.progress) {
        console.log('progress', newFile.progress, newFile);
        this.onProgress && this.onProgress(newFile.progress, newFile);
      } // 上传错误


      if (newFile.error !== oldFile.error) {
        console.log('error', newFile.error, newFile);
        this.onError && this.onError(newFile.error, newFile);
      } // 上传成功


      if (newFile.success !== oldFile.success) {
        console.log('success', newFile.success, newFile);
        this.onSuccess && this.onSuccess(newFile.success, newFile);
      }
    }

    if (!newFile && oldFile) {
      // 删除文件
      this.onDelete && this.onDelete(newFile);
    } // 自动上传


    if (this.autoUpload && (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error)) {
      if (!this.$refs.upload.active) {
        this.$refs.upload.active = true;
      }
    }
  },
  handleUpdateFiles: function handleUpdateFiles(v) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var f = _step.value;
        var status = f.error ? 'error' : f.success ? 'success' : f.active ? 'active' : '';
        f.status = status;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.$emit('input', v);
  },
  clear: function clear() {
    this.$refs.upload.clear();
  }
}), _name$components$prop);
// CONCATENATED MODULE: ./src/components/UploaderFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UploaderFilevue_type_script_lang_js_ = (UploaderFilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UploaderFile.vue





/* normalize component */

var UploaderFile_component = Object(componentNormalizer["a" /* default */])(
  components_UploaderFilevue_type_script_lang_js_,
  UploaderFilevue_type_template_id_83d2a8fe_render,
  UploaderFilevue_type_template_id_83d2a8fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UploaderFile = (UploaderFile_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"381d5604-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CardList/CardList.vue?vue&type=template&id=557a8561&
var CardListvue_type_template_id_557a8561_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-card-list"},[_vm._t("beforeQuery"),(_vm.store.query)?_c('Query',_vm._b({ref:"query",on:{"input":_vm.handleQuerySubmit,"on-query-change":_vm.handleQueryChange}},'Query',_vm.store.query,false)):_vm._e(),(_vm.store.data.length === 0 && !_vm.store.loading)?_c('div',[_vm._t("nodata",[_c('div',{staticClass:"ivu-spin",domProps:{"innerHTML":_vm._s(_vm.store.nodata)}})])],2):_vm._e(),(_vm.store.data.length === 0 && _vm.store.loading)?_c('div',[_vm._t("loading",[_c('div',{staticClass:"ivu-spin",domProps:{"innerHTML":_vm._s(_vm.store.loadingText)}})])],2):_vm._e(),(_vm.store.scroll)?_c('Scroll',{attrs:{"on-reach-bottom":_vm.handleReachBottom}},[_vm._t("default",null,{"data":_vm.store.data})],2):[_vm._t("default",null,{"data":_vm.store.data}),(_vm.store.pagination && _vm.store.data.length > 0)?_c('Pagination',{ref:"pagination",attrs:{"store":_vm.store},on:{"on-page":_vm.handlePage,"on-page-size":_vm.handlePageSize}},[_c('Buttons',{ref:"bottomButtons",attrs:{"buttons":_vm.store.bottomButtons,"target":this}})],1):_vm._e()],_vm._t("afterList")],2)}
var CardListvue_type_template_id_557a8561_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CardList/CardList.vue?vue&type=template&id=557a8561&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CardList/CardList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var CardListvue_type_script_lang_js_rowKey = 1;
/* harmony default export */ var CardListvue_type_script_lang_js_ = ({
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 用于选择控件设置choices
    choices: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  components: {
    Pagination: pagination,
    Buttons: UButtons,
    Query: components_Query
  },
  data: function data() {
    var _default = {
      query: null,
      pagination: true,
      pageSize: 10,
      total: 0,
      start: 1,
      data: [],
      param: {
        page: 1,
        pageSize: 10
      },
      page: 1,
      prev: '上一页',
      next: '下一页',
      pageSizeOpts: [10, 20, 30],
      autoLoad: true,
      onLoadData: null,
      bottomButtons: [],
      loadingText: '<i class="ivu-load-loop ivu-icon ivu-icon-ios-loading"></i> 正在装入...',
      loading: false,
      nodata: '暂无数据',
      scroll: false,
      // 是否无限滚动,
      toEnd: false // 是否到头（用于滚动模式）

    };
    var d = Object.assign(_default, this.config);
    return {
      store: d,
      old_param: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    // 初始化query 的 param
    this.store.param = {
      page: this.store.page,
      pageSize: this.store.pageSize
    };
    if (this.$refs.query && this.$refs.query.value) this.store.param = Object.assign(this.store.param, this.$refs.query.value);

    if (this.store.autoLoad) {
      this.$nextTick(function () {
        _this.loadData();
      });
    }
  },
  methods: {
    handlePage: function handlePage(page) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$set(_this2.store.param, 'page', page);

        _this2.store.page = page;
        _this2.store.start = (page - 1) * _this2.store.pageSize + 1;

        _this2.loadData();
      });
    },
    handlePageSize: function handlePageSize(size) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$set(_this3.store.param, 'pageSize', size);

        _this3.store.pageSize = size;
        _this3.store.start = (_this3.store.page - 1) * size + 1;

        _this3.loadData();
      });
    },
    handleQueryChange: function handleQueryChange(change) {
      this.$emit('on-query-change', change);
    },
    handleReachBottom: function handleReachBottom() {
      if (!this.store.scroll) {
        if (this.store.param.page + 1 <= Math.ceil(this.store.total / this.store.pageSize)) {
          this.store.param.page = this.store.param.page + 1;
          this.store.page = this.store.param.page;
        }
      } else {
        this.store.param.page = this.store.param.page + 1;
        this.store.page = this.store.param.page;
      }

      return this.loadData();
    },
    go: function go(page) {
      this.$refs.pagination.go(page);
    },
    loadData: function loadData(param) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        Object.assign(_this4.store.param, param || {}); // 比较除page之外的值，如果有变化则有两种处理
        // 1. 清空数据列表
        // 2. 重置page = 1

        var args = deepCopy(_this4.store.param);
        delete args.page;
        var same = deepCompare(args, _this4.old_param); // data 为数据行， others 为其它信息，如total

        var callback = function callback(data, others) {
          if (data) {
            if (!_this4.store.scroll || !same) {
              _this4.store.data = [];
            }

            _this4.addRows(data);

            _this4.old_param = args;
          } // 可以有 total , toEnd


          if (others && others instanceof Object) {
            _this4.mergeStates(others);
          }

          _this4.$nextTick(function () {
            _this4.showLoading(false);

            _this4.$emit('input', _this4.store.data);

            resolve(data);
          });
        };

        if (_this4.store.onLoadData) {
          _this4.showLoading(true);

          if (!same) {
            _this4.store.param.page = 1;
            _this4.store.page = 1;
            _this4.store.start = 1;
          }

          _this4.store.onLoadData(_this4.store.param, callback);
        }
      });
    },
    handleQuerySubmit: function handleQuerySubmit(data) {
      this.store.param = Object.assign(this.store.param, data);
      this.store.page = 1;
      this.store.start = 1;
      this.store.data = [];
      this.$set(this.store.param, 'page', 1);
      this.loadData();
    },
    showLoading: function showLoading() {
      var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.store.loading = loading;

      if (text) {
        this.store.loadingText = text;
      }
    },
    mergeStates: function mergeStates(o) {
      for (var name in o) {
        if (this.store.hasOwnProperty(name)) {
          this.$set(this.store, name, o[name]);
        }
      }
    },
    addRows: function addRows(rows) {
      if (!Array.isArray(rows)) {
        rows = [rows];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var r = _step.value;
          this.store.data.push(Object.assign({
            _rowKey: CardListvue_type_script_lang_js_rowKey++
          }, r));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  },
  watch: {
    choices: {
      immediate: true,
      handler: function handler(v) {
        if (this.store.query) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.store.query.fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var field = _step2.value;
              var choices = v[field.name];

              if (choices) {
                setChoice(this, field, choices);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      },
      deep: true
    },
    value: {
      handler: function handler(value) {
        this.store.data = value;
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/CardList/CardList.vue?vue&type=script&lang=js&
 /* harmony default export */ var CardList_CardListvue_type_script_lang_js_ = (CardListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CardList/CardList.vue





/* normalize component */

var CardList_component = Object(componentNormalizer["a" /* default */])(
  CardList_CardListvue_type_script_lang_js_,
  CardListvue_type_template_id_557a8561_render,
  CardListvue_type_template_id_557a8561_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardList = (CardList_component.exports);
// CONCATENATED MODULE: ./src/components/CardList/index.js

/* harmony default export */ var components_CardList = (CardList);
// CONCATENATED MODULE: ./src/components/index.js



 // import Uploader from './uploader'









 // import Chart from './EChart'
// import CKEditor from './Editor/CKEditor'
// import TinyMce from './Editor/TinyMce'

 //third-party plugin
// import uTemplate from "v-runtime-template"
// import VueScrollTo from 'vue-scrollto'



var Components = {
  Box: Box,
  Grid: UGrid,
  Buttons: UButtons,
  Query: components_Query,
  // Uploader,
  uSelect: Select,
  uRadioGroup: RadioGroup,
  uCheckboxGroup: CheckboxGroup,
  Build: Build,
  BuildLayout: Layout,
  FormCell: FormCell,
  GenericInput: Fields,
  // Chart,
  //   ckeditor: CKEditor
  // tinymce: TinyMce,
  DatepickerRange: DatepickerRange,
  // uTemplate,
  UploaderFile: UploaderFile,
  CardList: components_CardList
};

var components_install = function install(Vue) {
  if (install.installed) return;
  Object.keys(Components).forEach(function (name) {
    Vue.component(name, Components[name]);
  });
  Vue.prototype.$list = utils_list;
  Vue.prototype.$findParent = findParent;
}; // auto install


if (typeof window !== 'undefined' && window.Vue) {
  components_install(window.Vue);
} // window.VueScrollTo = VueScrollTo;


/* harmony default export */ var components = (objectSpread_default()({
  install: components_install
}, Components));
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fb35":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

/******/ });
});
//# sourceMappingURL=vuecoms2.umd.js.map