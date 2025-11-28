// ==UserScript==
// @name         豆包工作流
// @namespace    npm/vite-plugin-monkey
// @version      0.0.1
// @description  这是一个用于批量生成和下载图像的工作流对话框组件，用于自动化执行任务。
// @icon         https://www.google.com/s2/favicons?sz=64&domain=doubao.com
// @downloadURL  https://anonymouschar42.github.io/doubao-workflow/doubao-workflow.user.js
// @updateURL    https://anonymouschar42.github.io/doubao-workflow/doubao-workflow.user.js
// @match        https://www.doubao.com/chat/*
// @require      https://registry.npmmirror.com/vue/3.5.25/files/dist/vue.global.prod.js
// @grant        GM_addStyle
// ==/UserScript==

(function (vue) {
  'use strict';

  const d=new Set;const importCSS = async e=>{d.has(e)||(d.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):(document.head||document.documentElement).appendChild(document.createElement("style")).append(t);})(e));};

  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var require_main_001 = __commonJS({
    "main-Cm099fna.js"(exports$1, module) {
      const configProviderContextKey = Symbol();
      const defaultNamespace = "el";
      const statePrefix = "is-";
      const _bem = (namespace, block, blockSuffix, element, modifier) => {
        let cls = `${namespace}-${block}`;
        if (blockSuffix) {
          cls += `-${blockSuffix}`;
        }
        if (element) {
          cls += `__${element}`;
        }
        if (modifier) {
          cls += `--${modifier}`;
        }
        return cls;
      };
      const namespaceContextKey = Symbol("namespaceContextKey");
      const useGetDerivedNamespace = (namespaceOverrides) => {
        const derivedNamespace = vue.getCurrentInstance() ? vue.inject(namespaceContextKey, vue.ref(defaultNamespace)) : vue.ref(defaultNamespace);
        const namespace = vue.computed(() => {
          return vue.unref(derivedNamespace) || defaultNamespace;
        });
        return namespace;
      };
      const useNamespace = (block, namespaceOverrides) => {
        const namespace = useGetDerivedNamespace();
        const b2 = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
        const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
        const m2 = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
        const be2 = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
        const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
        const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
        const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
        const is = (name, ...args) => {
          const state = args.length >= 1 ? args[0] : true;
          return name && state ? `${statePrefix}${name}` : "";
        };
        const cssVar = (object) => {
          const styles = {};
          for (const key in object) {
            if (object[key]) {
              styles[`--${namespace.value}-${key}`] = object[key];
            }
          }
          return styles;
        };
        const cssVarBlock = (object) => {
          const styles = {};
          for (const key in object) {
            if (object[key]) {
              styles[`--${namespace.value}-${block}-${key}`] = object[key];
            }
          }
          return styles;
        };
        const cssVarName = (name) => `--${namespace.value}-${name}`;
        const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
        return {
          namespace,
          b: b2,
          e,
          m: m2,
          be: be2,
          em,
          bm,
          bem,
          is,
          cssVar,
          cssVarName,
          cssVarBlock,
          cssVarBlockName
        };
      };
      const NOOP = () => {
      };
      const hasOwnProperty$d = Object.prototype.hasOwnProperty;
      const hasOwn = (val, key) => hasOwnProperty$d.call(val, key);
      const isArray$2 = Array.isArray;
      const isFunction$2 = (val) => typeof val === "function";
      const isString$2 = (val) => typeof val === "string";
      const isObject$2 = (val) => val !== null && typeof val === "object";
      const cacheStringFunction = (fn2) => {
        const cache = Object.create(null);
        return ((str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn2(str));
        });
      };
      const camelizeRE = /-\w/g;
      const camelize = cacheStringFunction(
        (str) => {
          return str.replace(camelizeRE, (c2) => c2.slice(1).toUpperCase());
        }
      );
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var Symbol$1 = root.Symbol;
      var objectProto$f = Object.prototype;
      var hasOwnProperty$c = objectProto$f.hasOwnProperty;
      var nativeObjectToString$1 = objectProto$f.toString;
      var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
        try {
          value[symToStringTag$1] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString$1.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag$1] = tag;
          } else {
            delete value[symToStringTag$1];
          }
        }
        return result;
      }
      var objectProto$e = Object.prototype;
      var nativeObjectToString = objectProto$e.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var symbolTag$3 = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      var isArray$1 = Array.isArray;
      var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray$1(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -Infinity ? "-0" : result;
      }
      var reWhitespace = /\s/;
      function trimmedEndIndex(string2) {
        var index = string2.length;
        while (index-- && reWhitespace.test(string2.charAt(index))) {
        }
        return index;
      }
      var reTrimStart = /^\s+/;
      function baseTrim(string2) {
        return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
      }
      function isObject$1(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject$1(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject$1(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function identity$1(value) {
        return value;
      }
      var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
      function isFunction$1(value) {
        if (!isObject$1(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
      }
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var funcProto$2 = Function.prototype;
      var funcToString$2 = funcProto$2.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString$2.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
      var funcToString$1 = funcProto$1.toString;
      var hasOwnProperty$b = objectProto$d.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject$1(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function getValue$1(object, key) {
        return object == null ? void 0 : object[key];
      }
      function getNative(object, key) {
        var value = getValue$1(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      var WeakMap = getNative(root, "WeakMap");
      var objectCreate = Object.create;
      var baseCreate = (function() {
        function object() {
        }
        return function(proto2) {
          if (!isObject$1(proto2)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto2);
          }
          object.prototype = proto2;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      })();
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      var defineProperty = (function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      })();
      var baseSetToString = !defineProperty ? identity$1 : function(func, string2) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string2),
          "writable": true
        });
      };
      var setToString = shortOut(baseSetToString);
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      var MAX_SAFE_INTEGER$1 = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER$1 : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var objectProto$c = Object.prototype;
      var hasOwnProperty$a = objectProto$c.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      var nativeMax$1 = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity$1), func + "");
      }
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction$1(value);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject$1(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      var objectProto$b = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
        return value === proto2;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      var argsTag$3 = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag$3;
      }
      var objectProto$a = Object.prototype;
      var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
      var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
      var isArguments = baseIsArguments( (function() {
        return arguments;
      })()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
      };
      function stubFalse() {
        return false;
      }
      var freeExports$2 = typeof exports$1 == "object" && exports$1 && !exports$1.nodeType && exports$1;
      var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
      var Buffer$1 = moduleExports$2 ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
      var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
      typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      var freeExports$1 = typeof exports$1 == "object" && exports$1 && !exports$1.nodeType && exports$1;
      var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
      var freeProcess = moduleExports$1 && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
          if (types2) {
            return types2;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      })();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      var objectProto$9 = Object.prototype;
      var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes &&
(key == "length" ||
isBuff && (key == "offset" || key == "parent") ||
isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") ||
isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      var nativeKeys = overArg(Object.keys, Object);
      var objectProto$8 = Object.prototype;
      var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty$7.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      function keys$1(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      var objectProto$7 = Object.prototype;
      var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject$1(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray$1(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      var nativeCreate = getNative(Object, "create");
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
      var objectProto$6 = Object.prototype;
      var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED$2 ? void 0 : result;
        }
        return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
      }
      var objectProto$5 = Object.prototype;
      var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
      }
      var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
        return this;
      }
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      var Map$1 = getNative(root, "Map");
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map$1 || ListCache)(),
          "string": new Hash()
        };
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      var FUNC_ERROR_TEXT$1 = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT$1);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string2) {
        var result = [];
        if (string2.charCodeAt(0) === 46) {
          result.push("");
        }
        string2.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      function toString$1(value) {
        return value == null ? "" : baseToString(value);
      }
      function castPath(value, object) {
        if (isArray$1(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString$1(value));
      }
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -Infinity ? "-0" : result;
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      function get$3(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset2 = array.length;
        while (++index < length) {
          array[offset2 + index] = values[index];
        }
        return array;
      }
      var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray$1(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (predicate(value)) {
            {
              arrayPush(result, value);
            }
          } else {
            result[result.length] = value;
          }
        }
        return result;
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array) : [];
      }
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      var objectTag$3 = "[object Object]";
      var funcProto = Function.prototype, objectProto$4 = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
          return false;
        }
        var proto2 = getPrototype(value);
        if (proto2 === null) {
          return true;
        }
        var Ctor = hasOwnProperty$3.call(proto2, "constructor") && proto2.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      function castArray$1() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray$1(value) ? value : [value];
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function baseAssign(object, source) {
        return object && copyObject(source, keys$1(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      var freeExports = typeof exports$1 == "object" && exports$1 && !exports$1.nodeType && exports$1;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function stubArray() {
        return [];
      }
      var objectProto$3 = Object.prototype;
      var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
      var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys$1, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var DataView = getNative(root, "DataView");
      var Promise$1 = getNative(root, "Promise");
      var Set$1 = getNative(root, "Set");
      var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
      var dataViewTag$3 = "[object DataView]";
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag$3;
              case mapCtorString:
                return mapTag$4;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag$4;
              case weakMapCtorString:
                return weakMapTag$1;
            }
          }
          return result;
        };
      }
      var objectProto$2 = Object.prototype;
      var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
      function initCloneArray(array) {
        var length = array.length, result = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      var Uint8Array2 = root.Uint8Array;
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      var reFlags = /\w*$/;
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
      function cloneSymbol(symbol) {
        return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
      var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag$2:
            return cloneArrayBuffer(object);
          case boolTag$2:
          case dateTag$2:
            return new Ctor(+object);
          case dataViewTag$2:
            return cloneDataView(object, isDeep);
          case float32Tag$1:
          case float64Tag$1:
          case int8Tag$1:
          case int16Tag$1:
          case int32Tag$1:
          case uint8Tag$1:
          case uint8ClampedTag$1:
          case uint16Tag$1:
          case uint32Tag$1:
            return cloneTypedArray(object, isDeep);
          case mapTag$3:
            return new Ctor();
          case numberTag$2:
          case stringTag$2:
            return new Ctor(object);
          case regexpTag$2:
            return cloneRegExp(object);
          case setTag$3:
            return new Ctor();
          case symbolTag$2:
            return cloneSymbol(object);
        }
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      var mapTag$2 = "[object Map]";
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag$2;
      }
      var nodeIsMap = nodeUtil && nodeUtil.isMap;
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      var setTag$2 = "[object Set]";
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag$2;
      }
      var nodeIsSet = nodeUtil && nodeUtil.isSet;
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$2 = 4;
      var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
      var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var cloneableTags = {};
      cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== void 0) {
          return result;
        }
        if (!isObject$1(value)) {
          return value;
        }
        var isArr = isArray$1(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys$1;
        var props = isArr ? void 0 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result;
      }
      var CLONE_SYMBOLS_FLAG$1 = 4;
      function clone$2(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG$1);
      }
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function setToArray(set2) {
        var index = -1, result = Array(set2.size);
        set2.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
      var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
      var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG$2;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      var COMPARE_PARTIAL_FLAG$3 = 1;
      var objectProto$1 = Object.prototype;
      var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      var COMPARE_PARTIAL_FLAG$2 = 1;
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            var result;
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      function isStrictComparable(value) {
        return value === value && !isObject$1(value);
      }
      function getMatchData(object) {
        var result = keys$1(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get$3(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity$1;
        }
        if (typeof value == "object") {
          return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      var baseFor = createBaseFor();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys$1);
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = -1, iterable = Object(collection);
          while (++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      var baseEach = createBaseEach(baseForOwn);
      var now$1 = function() {
        return root.Date.now();
      };
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max, nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject$1(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now$1();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now$1());
        }
        function debounced() {
          var time = now$1(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function assignMergeValue(object, key, value) {
        if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
        var isCommon = newValue === void 0;
        if (isCommon) {
          var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray$1(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject$1(objValue) || isFunction$1(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject$1(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : void 0;
      }
      function baseMap(collection, iteratee) {
        var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result[++index] = iteratee(value, key, collection2);
        });
        return result;
      }
      function map$1(collection, iteratee) {
        var func = isArray$1(collection) ? arrayMap : baseMap;
        return func(collection, baseIteratee(iteratee));
      }
      function flatMap(collection, iteratee) {
        return baseFlatten(map$1(collection, iteratee));
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
        while (++index < length) {
          var pair = pairs[index];
          result[pair[0]] = pair[1];
        }
        return result;
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isNil(value) {
        return value == null;
      }
      function isNull(value) {
        return value === null;
      }
      function isUndefined$2(value) {
        return value === void 0;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? void 0 : value;
      }
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var omit = flatRest(function(object, paths) {
        var result = {};
        if (object == null) {
          return result;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result);
        if (isDeep) {
          result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result, paths[length]);
        }
        return result;
      });
      function baseSet(object, path, value, customizer) {
        if (!isObject$1(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = void 0;
            if (newValue === void 0) {
              newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function set$2(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      const isUndefined$1 = (val) => val === void 0;
      const isBoolean = (val) => typeof val === "boolean";
      const isNumber$1 = (val) => typeof val === "number";
      const isElement = (e) => {
        if (typeof Element === "undefined")
          return false;
        return e instanceof Element;
      };
      const isPropAbsent = (prop) => isNil(prop);
      const isStringNumber = (val) => {
        if (!isString$2(val)) {
          return false;
        }
        return !Number.isNaN(Number(val));
      };
      var __defProp$9 = Object.defineProperty;
      var __defProps$6 = Object.defineProperties;
      var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
      var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
      var __hasOwnProp$b = Object.prototype.hasOwnProperty;
      var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
      var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __spreadValues$9 = (a2, b2) => {
        for (var prop in b2 || (b2 = {}))
          if (__hasOwnProp$b.call(b2, prop))
            __defNormalProp$9(a2, prop, b2[prop]);
        if (__getOwnPropSymbols$b)
          for (var prop of __getOwnPropSymbols$b(b2)) {
            if (__propIsEnum$b.call(b2, prop))
              __defNormalProp$9(a2, prop, b2[prop]);
          }
        return a2;
      };
      var __spreadProps$6 = (a2, b2) => __defProps$6(a2, __getOwnPropDescs$6(b2));
      function computedEager(fn2, options) {
        var _a2;
        const result = vue.shallowRef();
        vue.watchEffect(() => {
          result.value = fn2();
        }, __spreadProps$6(__spreadValues$9({}, options), {
          flush: (_a2 = void 0) != null ? _a2 : "sync"
        }));
        return vue.readonly(result);
      }
      var _a;
      const isClient = typeof window !== "undefined";
      const isString$1 = (val) => typeof val === "string";
      const noop = () => {
      };
      const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
      function resolveUnref(r) {
        return typeof r === "function" ? r() : vue.unref(r);
      }
      function createFilterWrapper(filter, fn2) {
        function wrapper(...args) {
          return new Promise((resolve, reject) => {
            Promise.resolve(filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args })).then(resolve).catch(reject);
          });
        }
        return wrapper;
      }
      function debounceFilter(ms, options = {}) {
        let timer;
        let maxTimer;
        let lastRejector = noop;
        const _clearTimeout = (timer2) => {
          clearTimeout(timer2);
          lastRejector();
          lastRejector = noop;
        };
        const filter = (invoke) => {
          const duration = resolveUnref(ms);
          const maxDuration = resolveUnref(options.maxWait);
          if (timer)
            _clearTimeout(timer);
          if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
            if (maxTimer) {
              _clearTimeout(maxTimer);
              maxTimer = null;
            }
            return Promise.resolve(invoke());
          }
          return new Promise((resolve, reject) => {
            lastRejector = options.rejectOnCancel ? reject : resolve;
            if (maxDuration && !maxTimer) {
              maxTimer = setTimeout(() => {
                if (timer)
                  _clearTimeout(timer);
                maxTimer = null;
                resolve(invoke());
              }, maxDuration);
            }
            timer = setTimeout(() => {
              if (maxTimer)
                _clearTimeout(maxTimer);
              maxTimer = null;
              resolve(invoke());
            }, duration);
          });
        };
        return filter;
      }
      function identity(arg) {
        return arg;
      }
      function tryOnScopeDispose(fn2) {
        if (vue.getCurrentScope()) {
          vue.onScopeDispose(fn2);
          return true;
        }
        return false;
      }
      function useDebounceFn(fn2, ms = 200, options = {}) {
        return createFilterWrapper(debounceFilter(ms, options), fn2);
      }
      function refDebounced(value, ms = 200, options = {}) {
        const debounced = vue.ref(value.value);
        const updater = useDebounceFn(() => {
          debounced.value = value.value;
        }, ms, options);
        vue.watch(value, () => updater());
        return debounced;
      }
      function tryOnMounted(fn2, sync = true) {
        if (vue.getCurrentInstance())
          vue.onMounted(fn2);
        else if (sync)
          fn2();
        else
          vue.nextTick(fn2);
      }
      function useTimeoutFn(cb, interval2, options = {}) {
        const {
          immediate = true
        } = options;
        const isPending = vue.ref(false);
        let timer = null;
        function clear() {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
        }
        function stop() {
          isPending.value = false;
          clear();
        }
        function start(...args) {
          clear();
          isPending.value = true;
          timer = setTimeout(() => {
            isPending.value = false;
            timer = null;
            cb(...args);
          }, resolveUnref(interval2));
        }
        if (immediate) {
          isPending.value = true;
          if (isClient)
            start();
        }
        tryOnScopeDispose(stop);
        return {
          isPending: vue.readonly(isPending),
          start,
          stop
        };
      }
      function unrefElement(elRef) {
        var _a2;
        const plain = resolveUnref(elRef);
        return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
      }
      const defaultWindow = isClient ? window : void 0;
      function useEventListener(...args) {
        let target;
        let events;
        let listeners;
        let options;
        if (isString$1(args[0]) || Array.isArray(args[0])) {
          [events, listeners, options] = args;
          target = defaultWindow;
        } else {
          [target, events, listeners, options] = args;
        }
        if (!target)
          return noop;
        if (!Array.isArray(events))
          events = [events];
        if (!Array.isArray(listeners))
          listeners = [listeners];
        const cleanups = [];
        const cleanup = () => {
          cleanups.forEach((fn2) => fn2());
          cleanups.length = 0;
        };
        const register = (el, event, listener, options2) => {
          el.addEventListener(event, listener, options2);
          return () => el.removeEventListener(event, listener, options2);
        };
        const stopWatch = vue.watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
          cleanup();
          if (!el)
            return;
          cleanups.push(...events.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener, options2));
          }));
        }, { immediate: true, flush: "post" });
        const stop = () => {
          stopWatch();
          cleanup();
        };
        tryOnScopeDispose(stop);
        return stop;
      }
      let _iOSWorkaround = false;
      function onClickOutside(target, handler, options = {}) {
        const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
        if (!window2)
          return;
        if (isIOS && !_iOSWorkaround) {
          _iOSWorkaround = true;
          Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
        }
        let shouldListen = true;
        const shouldIgnore = (event) => {
          return ignore.some((target2) => {
            if (typeof target2 === "string") {
              return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
            } else {
              const el = unrefElement(target2);
              return el && (event.target === el || event.composedPath().includes(el));
            }
          });
        };
        const listener = (event) => {
          const el = unrefElement(target);
          if (!el || el === event.target || event.composedPath().includes(el))
            return;
          if (event.detail === 0)
            shouldListen = !shouldIgnore(event);
          if (!shouldListen) {
            shouldListen = true;
            return;
          }
          handler(event);
        };
        const cleanup = [
          useEventListener(window2, "click", listener, { passive: true, capture }),
          useEventListener(window2, "pointerdown", (e) => {
            const el = unrefElement(target);
            if (el)
              shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
          }, { passive: true }),
          detectIframe && useEventListener(window2, "blur", (event) => {
            var _a2;
            const el = unrefElement(target);
            if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
              handler(event);
          })
        ].filter(Boolean);
        const stop = () => cleanup.forEach((fn2) => fn2());
        return stop;
      }
      function useSupported(callback, sync = false) {
        const isSupported = vue.ref();
        const update = () => isSupported.value = Boolean(callback());
        update();
        tryOnMounted(update, sync);
        return isSupported;
      }
      const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
      const globalKey = "__vueuse_ssr_handlers__";
      _global[globalKey] = _global[globalKey] || {};
      var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
      var __hasOwnProp$g = Object.prototype.hasOwnProperty;
      var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
      var __objRest$2 = (source, exclude) => {
        var target = {};
        for (var prop in source)
          if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
            target[prop] = source[prop];
        if (source != null && __getOwnPropSymbols$g)
          for (var prop of __getOwnPropSymbols$g(source)) {
            if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
              target[prop] = source[prop];
          }
        return target;
      };
      function useResizeObserver(target, callback, options = {}) {
        const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
        let observer;
        const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
        const cleanup = () => {
          if (observer) {
            observer.disconnect();
            observer = void 0;
          }
        };
        const stopWatch = vue.watch(() => unrefElement(target), (el) => {
          cleanup();
          if (isSupported.value && window2 && el) {
            observer = new ResizeObserver(callback);
            observer.observe(el, observerOptions);
          }
        }, { immediate: true, flush: "post" });
        const stop = () => {
          cleanup();
          stopWatch();
        };
        tryOnScopeDispose(stop);
        return {
          isSupported,
          stop
        };
      }
      var SwipeDirection;
      (function(SwipeDirection2) {
        SwipeDirection2["UP"] = "UP";
        SwipeDirection2["RIGHT"] = "RIGHT";
        SwipeDirection2["DOWN"] = "DOWN";
        SwipeDirection2["LEFT"] = "LEFT";
        SwipeDirection2["NONE"] = "NONE";
      })(SwipeDirection || (SwipeDirection = {}));
      var __defProp = Object.defineProperty;
      var __getOwnPropSymbols = Object.getOwnPropertySymbols;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __propIsEnum = Object.prototype.propertyIsEnumerable;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __spreadValues = (a2, b2) => {
        for (var prop in b2 || (b2 = {}))
          if (__hasOwnProp.call(b2, prop))
            __defNormalProp(a2, prop, b2[prop]);
        if (__getOwnPropSymbols)
          for (var prop of __getOwnPropSymbols(b2)) {
            if (__propIsEnum.call(b2, prop))
              __defNormalProp(a2, prop, b2[prop]);
          }
        return a2;
      };
      const _TransitionPresets = {
        easeInSine: [0.12, 0, 0.39, 0],
        easeOutSine: [0.61, 1, 0.88, 1],
        easeInOutSine: [0.37, 0, 0.63, 1],
        easeInQuad: [0.11, 0, 0.5, 0],
        easeOutQuad: [0.5, 1, 0.89, 1],
        easeInOutQuad: [0.45, 0, 0.55, 1],
        easeInCubic: [0.32, 0, 0.67, 0],
        easeOutCubic: [0.33, 1, 0.68, 1],
        easeInOutCubic: [0.65, 0, 0.35, 1],
        easeInQuart: [0.5, 0, 0.75, 0],
        easeOutQuart: [0.25, 1, 0.5, 1],
        easeInOutQuart: [0.76, 0, 0.24, 1],
        easeInQuint: [0.64, 0, 0.78, 0],
        easeOutQuint: [0.22, 1, 0.36, 1],
        easeInOutQuint: [0.83, 0, 0.17, 1],
        easeInExpo: [0.7, 0, 0.84, 0],
        easeOutExpo: [0.16, 1, 0.3, 1],
        easeInOutExpo: [0.87, 0, 0.13, 1],
        easeInCirc: [0.55, 0, 1, 0.45],
        easeOutCirc: [0, 0.55, 0.45, 1],
        easeInOutCirc: [0.85, 0, 0.15, 1],
        easeInBack: [0.36, 0, 0.66, -0.56],
        easeOutBack: [0.34, 1.56, 0.64, 1],
        easeInOutBack: [0.68, -0.6, 0.32, 1.6]
      };
      __spreadValues({
        linear: identity
      }, _TransitionPresets);
      class ElementPlusError extends Error {
        constructor(m2) {
          super(m2);
          this.name = "ElementPlusError";
        }
      }
      function throwError(scope, m2) {
        throw new ElementPlusError(`[${scope}] ${m2}`);
      }
      function debugWarn(scope, message) {
      }
      const initial = {
        current: 0
      };
      const zIndex = vue.ref(0);
      const defaultInitialZIndex = 2e3;
      const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
      const zIndexContextKey = Symbol("zIndexContextKey");
      const useZIndex = (zIndexOverrides) => {
        const increasingInjection = vue.getCurrentInstance() ? vue.inject(ZINDEX_INJECTION_KEY, initial) : initial;
        const zIndexInjection = vue.getCurrentInstance() ? vue.inject(zIndexContextKey, void 0) : void 0;
        const initialZIndex = vue.computed(() => {
          const zIndexFromInjection = vue.unref(zIndexInjection);
          return isNumber$1(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
        });
        const currentZIndex = vue.computed(() => initialZIndex.value + zIndex.value);
        const nextZIndex = () => {
          increasingInjection.current++;
          zIndex.value = increasingInjection.current;
          return currentZIndex.value;
        };
        if (!isClient && !vue.inject(ZINDEX_INJECTION_KEY)) ;
        return {
          initialZIndex,
          currentZIndex,
          nextZIndex
        };
      };
      var English = {
        name: "en",
        el: {
          breadcrumb: {
            label: "Breadcrumb"
          },
          colorpicker: {
            confirm: "OK",
            clear: "Clear",
            defaultLabel: "color picker",
            description: "current color is {color}. press enter to select a new color.",
            alphaLabel: "pick alpha value",
            alphaDescription: "alpha {alpha}, current color is {color}",
            hueLabel: "pick hue value",
            hueDescription: "hue {hue}, current color is {color}",
            svLabel: "pick saturation and brightness value",
            svDescription: "saturation {saturation}, brightness {brightness}, current color is {color}",
            predefineDescription: "select {value} as the color"
          },
          datepicker: {
            now: "Now",
            today: "Today",
            cancel: "Cancel",
            clear: "Clear",
            confirm: "OK",
            dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
            monthTablePrompt: "Use the arrow keys and enter to select the month",
            yearTablePrompt: "Use the arrow keys and enter to select the year",
            selectedDate: "Selected date",
            selectDate: "Select date",
            selectTime: "Select time",
            startDate: "Start Date",
            startTime: "Start Time",
            endDate: "End Date",
            endTime: "End Time",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            year: "",
            month1: "January",
            month2: "February",
            month3: "March",
            month4: "April",
            month5: "May",
            month6: "June",
            month7: "July",
            month8: "August",
            month9: "September",
            month10: "October",
            month11: "November",
            month12: "December",
            weeks: {
              sun: "Sun",
              mon: "Mon",
              tue: "Tue",
              wed: "Wed",
              thu: "Thu",
              fri: "Fri",
              sat: "Sat"
            },
            weeksFull: {
              sun: "Sunday",
              mon: "Monday",
              tue: "Tuesday",
              wed: "Wednesday",
              thu: "Thursday",
              fri: "Friday",
              sat: "Saturday"
            },
            months: {
              jan: "Jan",
              feb: "Feb",
              mar: "Mar",
              apr: "Apr",
              may: "May",
              jun: "Jun",
              jul: "Jul",
              aug: "Aug",
              sep: "Sep",
              oct: "Oct",
              nov: "Nov",
              dec: "Dec"
            }
          },
          inputNumber: {
            decrease: "decrease number",
            increase: "increase number"
          },
          select: {
            loading: "Loading",
            noMatch: "No matching data",
            noData: "No data",
            placeholder: "Select"
          },
          mention: {
            loading: "Loading"
          },
          dropdown: {
            toggleDropdown: "Toggle Dropdown"
          },
          cascader: {
            noMatch: "No matching data",
            loading: "Loading",
            placeholder: "Select",
            noData: "No data"
          },
          pagination: {
            goto: "Go to",
            pagesize: "/page",
            total: "Total {total}",
            pageClassifier: "",
            page: "Page",
            prev: "Go to previous page",
            next: "Go to next page",
            currentPage: "page {pager}",
            prevPages: "Previous {pager} pages",
            nextPages: "Next {pager} pages",
            deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
          },
          dialog: {
            close: "Close this dialog"
          },
          drawer: {
            close: "Close this dialog"
          },
          messagebox: {
            title: "Message",
            confirm: "OK",
            cancel: "Cancel",
            error: "Illegal input",
            close: "Close this dialog"
          },
          upload: {
            deleteTip: "press delete to remove",
            delete: "Delete",
            preview: "Preview",
            continue: "Continue"
          },
          slider: {
            defaultLabel: "slider between {min} and {max}",
            defaultRangeStartLabel: "pick start value",
            defaultRangeEndLabel: "pick end value"
          },
          table: {
            emptyText: "No Data",
            confirmFilter: "Confirm",
            resetFilter: "Reset",
            clearFilter: "All",
            sumText: "Sum"
          },
          tour: {
            next: "Next",
            previous: "Previous",
            finish: "Finish",
            close: "Close this dialog"
          },
          tree: {
            emptyText: "No Data"
          },
          transfer: {
            noMatch: "No matching data",
            noData: "No data",
            titles: ["List 1", "List 2"],
            filterPlaceholder: "Enter keyword",
            noCheckedFormat: "{total} items",
            hasCheckedFormat: "{checked}/{total} checked"
          },
          image: {
            error: "FAILED"
          },
          pageHeader: {
            title: "Back"
          },
          popconfirm: {
            confirmButtonText: "Yes",
            cancelButtonText: "No"
          },
          carousel: {
            leftArrow: "Carousel arrow left",
            rightArrow: "Carousel arrow right",
            indicator: "Carousel switch to index {index}"
          }
        }
      };
      const buildTranslator = (locale2) => (path, option) => translate(path, option, vue.unref(locale2));
      const translate = (path, option, locale2) => get$3(locale2, path, path).replace(/\{(\w+)\}/g, (_2, key) => {
        var _a2;
        return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
      });
      const buildLocaleContext = (locale2) => {
        const lang2 = vue.computed(() => vue.unref(locale2).name);
        const localeRef = vue.isRef(locale2) ? locale2 : vue.ref(locale2);
        return {
          lang: lang2,
          locale: localeRef,
          t: buildTranslator(locale2)
        };
      };
      const localeContextKey = Symbol("localeContextKey");
      const useLocale = (localeOverrides) => {
        const locale2 = vue.inject(localeContextKey, vue.ref());
        return buildLocaleContext(vue.computed(() => locale2.value || English));
      };
      const epPropKey = "__epPropKey";
      const definePropType = (val) => val;
      const isEpProp = (val) => isObject$2(val) && !!val[epPropKey];
      const buildProp = (prop, key) => {
        if (!isObject$2(prop) || isEpProp(prop))
          return prop;
        const { values, required, default: defaultValue, type, validator } = prop;
        const _validator = values || validator ? (val) => {
          let valid = false;
          let allowedValues = [];
          if (values) {
            allowedValues = Array.from(values);
            if (hasOwn(prop, "default")) {
              allowedValues.push(defaultValue);
            }
            valid || (valid = allowedValues.includes(val));
          }
          if (validator)
            valid || (valid = validator(val));
          if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
            vue.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
          }
          return valid;
        } : void 0;
        const epProp = {
          type,
          required: !!required,
          validator: _validator,
          [epPropKey]: true
        };
        if (hasOwn(prop, "default"))
          epProp.default = defaultValue;
        return epProp;
      };
      const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
        key,
        buildProp(option, key)
      ]));
      const componentSizes = ["", "default", "small", "large"];
      const useSizeProp = buildProp({
        type: String,
        values: componentSizes,
        required: false
      });
      const SIZE_INJECTION_KEY = Symbol("size");
      const useGlobalSize = () => {
        const injectedSize = vue.inject(SIZE_INJECTION_KEY, {});
        return vue.computed(() => {
          return vue.unref(injectedSize.size) || "";
        });
      };
      const getProp = (obj, path, defaultValue) => {
        return {
          get value() {
            return get$3(obj, path, defaultValue);
          },
          set value(val) {
            set$2(obj, path, val);
          }
        };
      };
      const globalConfig = vue.ref();
      function useGlobalConfig(key, defaultValue = void 0) {
        const config = vue.getCurrentInstance() ? vue.inject(configProviderContextKey, globalConfig) : globalConfig;
        if (key) {
          return vue.computed(() => {
            var _a2, _b;
            return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
          });
        } else {
          return config;
        }
      }
      const UPDATE_MODEL_EVENT = "update:modelValue";
      const CHANGE_EVENT = "change";
      const INPUT_EVENT = "input";
      var _export_sfc = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };
      const rAF = (fn2) => isClient ? window.requestAnimationFrame(fn2) : setTimeout(fn2, 16);
      const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
      const hasClass = (el, cls) => {
        if (!el || !cls)
          return false;
        if (cls.includes(" "))
          throw new Error("className should not contain space.");
        return el.classList.contains(cls);
      };
      const addClass = (el, cls) => {
        if (!el || !cls.trim())
          return;
        el.classList.add(...classNameToArray(cls));
      };
      const removeClass = (el, cls) => {
        if (!el || !cls.trim())
          return;
        el.classList.remove(...classNameToArray(cls));
      };
      const getStyle = (element, styleName) => {
        var _a2;
        if (!isClient || !element || !styleName)
          return "";
        let key = camelize(styleName);
        if (key === "float")
          key = "cssFloat";
        try {
          const style = element.style[key];
          if (style)
            return style;
          const computed2 = (_a2 = document.defaultView) == null ? void 0 : _a2.getComputedStyle(element, "");
          return computed2 ? computed2[key] : "";
        } catch (e) {
          return element.style[key];
        }
      };
      function addUnit(value, defaultUnit = "px") {
        if (!value)
          return "";
        if (isNumber$1(value) || isStringNumber(value)) {
          return `${value}${defaultUnit}`;
        } else if (isString$2(value)) {
          return value;
        }
      }
      let scrollBarWidth;
      const getScrollBarWidth = (namespace) => {
        var _a2;
        if (!isClient)
          return 0;
        if (scrollBarWidth !== void 0)
          return scrollBarWidth;
        const outer = document.createElement("div");
        outer.className = `${namespace}-scrollbar__wrap`;
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.position = "absolute";
        outer.style.top = "-9999px";
        document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = "scroll";
        const inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        (_a2 = outer.parentNode) == null ? void 0 : _a2.removeChild(outer);
        scrollBarWidth = widthNoScroll - widthWithScroll;
        return scrollBarWidth;
      };
      const withInstall = (main, extra) => {
        main.install = (app) => {
          for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
            app.component(comp.name, comp);
          }
        };
        if (extra) {
          for (const [key, comp] of Object.entries(extra)) {
            main[key] = comp;
          }
        }
        return main;
      };
      const withNoopInstall = (component) => {
        component.install = NOOP;
        return component;
      };
      const iconProps = buildProps({
        size: {
          type: definePropType([Number, String])
        },
        color: {
          type: String
        }
      });
      const __default__$j = vue.defineComponent({
        name: "ElIcon",
        inheritAttrs: false
      });
      const _sfc_main$s = vue.defineComponent({
        ...__default__$j,
        props: iconProps,
        setup(__props) {
          const props = __props;
          const ns = useNamespace("icon");
          const style = vue.computed(() => {
            const { size, color } = props;
            if (!size && !color)
              return {};
            return {
              fontSize: isUndefined$1(size) ? void 0 : addUnit(size),
              "--color": color
            };
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("i", vue.mergeProps({
              class: vue.unref(ns).b(),
              style: vue.unref(style)
            }, _ctx.$attrs), [
              vue.renderSlot(_ctx.$slots, "default")
            ], 16);
          };
        }
      });
      var Icon = _export_sfc(_sfc_main$s, [["__file", "icon.vue"]]);
      const ElIcon = withInstall(Icon);
      function useTimeout() {
        let timeoutHandle;
        const registerTimeout = (fn2, delay) => {
          cancelTimeout();
          timeoutHandle = window.setTimeout(fn2, delay);
        };
        const cancelTimeout = () => window.clearTimeout(timeoutHandle);
        tryOnScopeDispose(() => cancelTimeout());
        return {
          registerTimeout,
          cancelTimeout
        };
      }
      const useDelayedToggleProps = buildProps({
        showAfter: {
          type: Number,
          default: 0
        },
        hideAfter: {
          type: Number,
          default: 200
        },
        autoClose: {
          type: Number,
          default: 0
        }
      });
      const useDelayedToggle = ({
        showAfter,
        hideAfter,
        autoClose,
        open,
        close
      }) => {
        const { registerTimeout } = useTimeout();
        const {
          registerTimeout: registerTimeoutForAutoClose,
          cancelTimeout: cancelTimeoutForAutoClose
        } = useTimeout();
        const onOpen = (event, delay = vue.unref(showAfter)) => {
          registerTimeout(() => {
            open(event);
            const _autoClose = vue.unref(autoClose);
            if (isNumber$1(_autoClose) && _autoClose > 0) {
              registerTimeoutForAutoClose(() => {
                close(event);
              }, _autoClose);
            }
          }, delay);
        };
        const onClose = (event, delay = vue.unref(hideAfter)) => {
          cancelTimeoutForAutoClose();
          registerTimeout(() => {
            close(event);
          }, delay);
        };
        return {
          onOpen,
          onClose
        };
      };
      var _sfc_main6 = vue.defineComponent({
        name: "ArrowDown",
        __name: "arrow-down",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
            })
          ]));
        }
      }), arrow_down_default = _sfc_main6;
      var _sfc_main10 = vue.defineComponent({
        name: "ArrowRight",
        __name: "arrow-right",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
            })
          ]));
        }
      }), arrow_right_default = _sfc_main10;
      var _sfc_main12 = vue.defineComponent({
        name: "ArrowUp",
        __name: "arrow-up",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            })
          ]));
        }
      }), arrow_up_default = _sfc_main12;
      var _sfc_main49 = vue.defineComponent({
        name: "CircleCheck",
        __name: "circle-check",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
            }),
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"
            })
          ]));
        }
      }), circle_check_default = _sfc_main49;
      var _sfc_main51 = vue.defineComponent({
        name: "CircleClose",
        __name: "circle-close",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
            }),
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
            })
          ]));
        }
      }), circle_close_default = _sfc_main51;
      var _sfc_main56 = vue.defineComponent({
        name: "Close",
        __name: "close",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            })
          ]));
        }
      }), close_default = _sfc_main56;
      var _sfc_main133 = vue.defineComponent({
        name: "Hide",
        __name: "hide",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"
            }),
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"
            })
          ]));
        }
      }), hide_default = _sfc_main133;
      var _sfc_main150 = vue.defineComponent({
        name: "Loading",
        __name: "loading",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
            })
          ]));
        }
      }), loading_default = _sfc_main150;
      var _sfc_main283 = vue.defineComponent({
        name: "View",
        __name: "view",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
            })
          ]));
        }
      }), view_default = _sfc_main283;
      const iconPropType = definePropType([
        String,
        Object,
        Function
      ]);
      const CloseComponents = {
        Close: close_default
      };
      const ValidateComponentsMap = {
        validating: loading_default,
        success: circle_check_default,
        error: circle_close_default
      };
      const isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
      const isAndroid = () => isClient && /android/i.test(window.navigator.userAgent);
      let hiddenTextarea = void 0;
      const HIDDEN_STYLE = {
        height: "0",
        visibility: "hidden",
        overflow: isFirefox() ? "" : "hidden",
        position: "absolute",
        "z-index": "-1000",
        top: "0",
        right: "0"
      };
      const CONTEXT_STYLE = [
        "letter-spacing",
        "line-height",
        "padding-top",
        "padding-bottom",
        "font-family",
        "font-weight",
        "font-size",
        "text-rendering",
        "text-transform",
        "width",
        "text-indent",
        "padding-left",
        "padding-right",
        "border-width",
        "box-sizing",
        "word-break"
      ];
      const looseToNumber = (val) => {
        const n = Number.parseFloat(val);
        return Number.isNaN(n) ? val : n;
      };
      function calculateNodeStyling(targetElement) {
        const style = window.getComputedStyle(targetElement);
        const boxSizing = style.getPropertyValue("box-sizing");
        const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
        const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
        const contextStyle = CONTEXT_STYLE.map((name) => [
          name,
          style.getPropertyValue(name)
        ]);
        return { contextStyle, paddingSize, borderSize, boxSizing };
      }
      function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
        var _a2, _b;
        if (!hiddenTextarea) {
          hiddenTextarea = document.createElement("textarea");
          ((_a2 = targetElement.parentNode) != null ? _a2 : document.body).appendChild(hiddenTextarea);
        }
        const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
        contextStyle.forEach(([key, value]) => hiddenTextarea == null ? void 0 : hiddenTextarea.style.setProperty(key, value));
        Object.entries(HIDDEN_STYLE).forEach(([key, value]) => hiddenTextarea == null ? void 0 : hiddenTextarea.style.setProperty(key, value, "important"));
        hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
        let height = hiddenTextarea.scrollHeight;
        const result = {};
        if (boxSizing === "border-box") {
          height = height + borderSize;
        } else if (boxSizing === "content-box") {
          height = height - paddingSize;
        }
        hiddenTextarea.value = "";
        const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (isNumber$1(minRows)) {
          let minHeight = singleRowHeight * minRows;
          if (boxSizing === "border-box") {
            minHeight = minHeight + paddingSize + borderSize;
          }
          height = Math.max(minHeight, height);
          result.minHeight = `${minHeight}px`;
        }
        if (isNumber$1(maxRows)) {
          let maxHeight = singleRowHeight * maxRows;
          if (boxSizing === "border-box") {
            maxHeight = maxHeight + paddingSize + borderSize;
          }
          height = Math.min(maxHeight, height);
        }
        result.height = `${height}px`;
        (_b = hiddenTextarea.parentNode) == null ? void 0 : _b.removeChild(hiddenTextarea);
        hiddenTextarea = void 0;
        return result;
      }
      const mutable = (val) => val;
      const ariaProps = buildProps({
        ariaLabel: String,
        ariaOrientation: {
          type: String,
          values: ["horizontal", "vertical", "undefined"]
        },
        ariaControls: String
      });
      const useAriaProps = (arias) => {
        return pick(ariaProps, arias);
      };
      const inputProps = buildProps({
        id: {
          type: String,
          default: void 0
        },
        size: useSizeProp,
        disabled: Boolean,
        modelValue: {
          type: definePropType([
            String,
            Number,
            Object
          ]),
          default: ""
        },
        modelModifiers: {
          type: definePropType(Object),
          default: () => ({})
        },
        maxlength: {
          type: [String, Number]
        },
        minlength: {
          type: [String, Number]
        },
        type: {
          type: definePropType(String),
          default: "text"
        },
        resize: {
          type: String,
          values: ["none", "both", "horizontal", "vertical"]
        },
        autosize: {
          type: definePropType([Boolean, Object]),
          default: false
        },
        autocomplete: {
          type: definePropType(String),
          default: "off"
        },
        formatter: {
          type: Function
        },
        parser: {
          type: Function
        },
        placeholder: {
          type: String
        },
        form: {
          type: String
        },
        readonly: Boolean,
        clearable: Boolean,
        clearIcon: {
          type: iconPropType,
          default: circle_close_default
        },
        showPassword: Boolean,
        showWordLimit: Boolean,
        wordLimitPosition: {
          type: String,
          values: ["inside", "outside"],
          default: "inside"
        },
        suffixIcon: {
          type: iconPropType
        },
        prefixIcon: {
          type: iconPropType
        },
        containerRole: {
          type: String,
          default: void 0
        },
        tabindex: {
          type: [String, Number],
          default: 0
        },
        validateEvent: {
          type: Boolean,
          default: true
        },
        inputStyle: {
          type: definePropType([Object, Array, String]),
          default: () => mutable({})
        },
        autofocus: Boolean,
        rows: {
          type: Number,
          default: 2
        },
        ...useAriaProps(["ariaLabel"]),
        inputmode: {
          type: definePropType(String),
          default: void 0
        },
        name: String
      });
      const inputEmits = {
        [UPDATE_MODEL_EVENT]: (value) => isString$2(value),
        input: (value) => isString$2(value),
        change: (value) => isString$2(value),
        focus: (evt) => evt instanceof FocusEvent,
        blur: (evt) => evt instanceof FocusEvent,
        clear: () => true,
        mouseleave: (evt) => evt instanceof MouseEvent,
        mouseenter: (evt) => evt instanceof MouseEvent,
        keydown: (evt) => evt instanceof Event,
        compositionstart: (evt) => evt instanceof CompositionEvent,
        compositionupdate: (evt) => evt instanceof CompositionEvent,
        compositionend: (evt) => evt instanceof CompositionEvent
      };
      const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
      const LISTENER_PREFIX = /^on[A-Z]/;
      const useAttrs = (params = {}) => {
        const { excludeListeners = false, excludeKeys } = params;
        const allExcludeKeys = vue.computed(() => {
          return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
        });
        const instance = vue.getCurrentInstance();
        if (!instance) {
          return vue.computed(() => ({}));
        }
        return vue.computed(() => {
          var _a2;
          return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
        });
      };
      const defaultIdInjection = {
        prefix: Math.floor(Math.random() * 1e4),
        current: 0
      };
      const ID_INJECTION_KEY = Symbol("elIdInjection");
      const useIdInjection = () => {
        return vue.getCurrentInstance() ? vue.inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
      };
      const useId = (deterministicId) => {
        const idInjection = useIdInjection();
        const namespace = useGetDerivedNamespace();
        const idRef = computedEager(() => vue.unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
        return idRef;
      };
      const formContextKey = Symbol("formContextKey");
      const formItemContextKey = Symbol("formItemContextKey");
      const useFormItem = () => {
        const form = vue.inject(formContextKey, void 0);
        const formItem = vue.inject(formItemContextKey, void 0);
        return {
          form,
          formItem
        };
      };
      const useFormItemInputId = (props, {
        formItemContext,
        disableIdGeneration,
        disableIdManagement
      }) => {
        if (!disableIdGeneration) {
          disableIdGeneration = vue.ref(false);
        }
        if (!disableIdManagement) {
          disableIdManagement = vue.ref(false);
        }
        const instance = vue.getCurrentInstance();
        const inLabel = () => {
          let parent2 = instance == null ? void 0 : instance.parent;
          while (parent2) {
            if (parent2.type.name === "ElFormItem") {
              return false;
            }
            if (parent2.type.name === "ElLabelWrap") {
              return true;
            }
            parent2 = parent2.parent;
          }
          return false;
        };
        const inputId = vue.ref();
        let idUnwatch = void 0;
        const isLabeledByFormItem = vue.computed(() => {
          var _a2;
          return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
        });
        vue.onMounted(() => {
          idUnwatch = vue.watch([vue.toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
            const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
            if (newId !== inputId.value) {
              if ((formItemContext == null ? void 0 : formItemContext.removeInputId) && !inLabel()) {
                inputId.value && formItemContext.removeInputId(inputId.value);
                if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
                  formItemContext.addInputId(newId);
                }
              }
              inputId.value = newId;
            }
          }, { immediate: true });
        });
        vue.onUnmounted(() => {
          idUnwatch && idUnwatch();
          if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
            inputId.value && formItemContext.removeInputId(inputId.value);
          }
        });
        return {
          isLabeledByFormItem,
          inputId
        };
      };
      const useProp = (name) => {
        const vm = vue.getCurrentInstance();
        return vue.computed(() => {
          var _a2, _b;
          return (_b = (_a2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a2.$props) == null ? void 0 : _b[name];
        });
      };
      const useFormSize = (fallback, ignore = {}) => {
        const emptyRef = vue.ref(void 0);
        const size = ignore.prop ? emptyRef : useProp("size");
        const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
        const form = ignore.form ? { size: void 0 } : vue.inject(formContextKey, void 0);
        const formItem = ignore.formItem ? { size: void 0 } : vue.inject(formItemContextKey, void 0);
        return vue.computed(() => size.value || vue.unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
      };
      const useFormDisabled = (fallback) => {
        const disabled = useProp("disabled");
        const form = vue.inject(formContextKey, void 0);
        return vue.computed(() => disabled.value || vue.unref(fallback) || (form == null ? void 0 : form.disabled) || false);
      };
      const isHTMLElement = (e) => {
        if (typeof Element === "undefined")
          return false;
        return e instanceof Element;
      };
      const isFocusable = (element) => {
        if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
          return true;
        }
        if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") {
          return false;
        }
        switch (element.nodeName) {
          case "A": {
            return !!element.href && element.rel !== "ignore";
          }
          case "INPUT": {
            return !(element.type === "hidden" || element.type === "file");
          }
          case "BUTTON":
          case "SELECT":
          case "TEXTAREA": {
            return true;
          }
          default: {
            return false;
          }
        }
      };
      const focusElement = (el, options) => {
        if (!el || !el.focus)
          return;
        let cleanup = false;
        if (isHTMLElement(el) && !isFocusable(el) && !el.getAttribute("tabindex")) {
          el.setAttribute("tabindex", "-1");
          cleanup = true;
        }
        el.focus(options);
        if (isHTMLElement(el) && cleanup) {
          el.removeAttribute("tabindex");
        }
      };
      function useFocusController(target, {
        disabled,
        beforeFocus,
        afterFocus,
        beforeBlur,
        afterBlur
      } = {}) {
        const instance = vue.getCurrentInstance();
        const { emit } = instance;
        const wrapperRef = vue.shallowRef();
        const isFocused = vue.ref(false);
        const handleFocus = (event) => {
          const cancelFocus = isFunction$2(beforeFocus) ? beforeFocus(event) : false;
          if (vue.unref(disabled) || isFocused.value || cancelFocus)
            return;
          isFocused.value = true;
          emit("focus", event);
          afterFocus == null ? void 0 : afterFocus();
        };
        const handleBlur = (event) => {
          var _a2;
          const cancelBlur = isFunction$2(beforeBlur) ? beforeBlur(event) : false;
          if (vue.unref(disabled) || event.relatedTarget && ((_a2 = wrapperRef.value) == null ? void 0 : _a2.contains(event.relatedTarget)) || cancelBlur)
            return;
          isFocused.value = false;
          emit("blur", event);
          afterBlur == null ? void 0 : afterBlur();
        };
        const handleClick = (event) => {
          var _a2, _b;
          if (vue.unref(disabled) || isFocusable(event.target) || ((_a2 = wrapperRef.value) == null ? void 0 : _a2.contains(document.activeElement)) && wrapperRef.value !== document.activeElement)
            return;
          (_b = target.value) == null ? void 0 : _b.focus();
        };
        vue.watch([wrapperRef, () => vue.unref(disabled)], ([el, disabled2]) => {
          if (!el)
            return;
          if (disabled2) {
            el.removeAttribute("tabindex");
          } else {
            el.setAttribute("tabindex", "-1");
          }
        });
        useEventListener(wrapperRef, "focus", handleFocus, true);
        useEventListener(wrapperRef, "blur", handleBlur, true);
        useEventListener(wrapperRef, "click", handleClick, true);
        return {
          isFocused,
          wrapperRef,
          handleFocus,
          handleBlur
        };
      }
      const isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
      function useComposition({
        afterComposition,
        emit
      }) {
        const isComposing = vue.ref(false);
        const handleCompositionStart = (event) => {
          emit == null ? void 0 : emit("compositionstart", event);
          isComposing.value = true;
        };
        const handleCompositionUpdate = (event) => {
          var _a2;
          emit == null ? void 0 : emit("compositionupdate", event);
          const text = (_a2 = event.target) == null ? void 0 : _a2.value;
          const lastCharacter = text[text.length - 1] || "";
          isComposing.value = !isKorean(lastCharacter);
        };
        const handleCompositionEnd = (event) => {
          emit == null ? void 0 : emit("compositionend", event);
          if (isComposing.value) {
            isComposing.value = false;
            vue.nextTick(() => afterComposition(event));
          }
        };
        const handleComposition = (event) => {
          event.type === "compositionend" ? handleCompositionEnd(event) : handleCompositionUpdate(event);
        };
        return {
          isComposing,
          handleComposition,
          handleCompositionStart,
          handleCompositionUpdate,
          handleCompositionEnd
        };
      }
      function useCursor(input) {
        let selectionInfo;
        function recordCursor() {
          if (input.value == void 0)
            return;
          const { selectionStart, selectionEnd, value } = input.value;
          if (selectionStart == null || selectionEnd == null)
            return;
          const beforeTxt = value.slice(0, Math.max(0, selectionStart));
          const afterTxt = value.slice(Math.max(0, selectionEnd));
          selectionInfo = {
            selectionStart,
            selectionEnd,
            value,
            beforeTxt,
            afterTxt
          };
        }
        function setCursor() {
          if (input.value == void 0 || selectionInfo == void 0)
            return;
          const { value } = input.value;
          const { beforeTxt, afterTxt, selectionStart } = selectionInfo;
          if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
            return;
          let startPos = value.length;
          if (value.endsWith(afterTxt)) {
            startPos = value.length - afterTxt.length;
          } else if (value.startsWith(beforeTxt)) {
            startPos = beforeTxt.length;
          } else {
            const beforeLastChar = beforeTxt[selectionStart - 1];
            const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
            if (newIndex !== -1) {
              startPos = newIndex + 1;
            }
          }
          input.value.setSelectionRange(startPos, startPos);
        }
        return [recordCursor, setCursor];
      }
      const COMPONENT_NAME$4 = "ElInput";
      const __default__$i = vue.defineComponent({
        name: COMPONENT_NAME$4,
        inheritAttrs: false
      });
      const _sfc_main$r = vue.defineComponent({
        ...__default__$i,
        props: inputProps,
        emits: inputEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const rawAttrs = vue.useAttrs();
          const attrs = useAttrs();
          const slots = vue.useSlots();
          const containerKls = vue.computed(() => [
            props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
            nsInput.m(inputSize.value),
            nsInput.is("disabled", inputDisabled.value),
            nsInput.is("exceed", inputExceed.value),
            {
              [nsInput.b("group")]: slots.prepend || slots.append,
              [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
              [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
              [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
              [nsInput.b("hidden")]: props.type === "hidden"
            },
            rawAttrs.class
          ]);
          const wrapperKls = vue.computed(() => [
            nsInput.e("wrapper"),
            nsInput.is("focus", isFocused.value)
          ]);
          const { form: elForm, formItem: elFormItem } = useFormItem();
          const { inputId } = useFormItemInputId(props, {
            formItemContext: elFormItem
          });
          const inputSize = useFormSize();
          const inputDisabled = useFormDisabled();
          const nsInput = useNamespace("input");
          const nsTextarea = useNamespace("textarea");
          const input = vue.shallowRef();
          const textarea = vue.shallowRef();
          const hovering = vue.ref(false);
          const passwordVisible = vue.ref(false);
          const countStyle = vue.ref();
          const textareaCalcStyle = vue.shallowRef(props.inputStyle);
          const _ref = vue.computed(() => input.value || textarea.value);
          const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
            disabled: inputDisabled,
            afterBlur() {
              var _a2;
              if (props.validateEvent) {
                (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "blur").catch((err) => debugWarn());
              }
            }
          });
          const needStatusIcon = vue.computed(() => {
            var _a2;
            return (_a2 = elForm == null ? void 0 : elForm.statusIcon) != null ? _a2 : false;
          });
          const validateState = vue.computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
          const validateIcon = vue.computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
          const passwordIcon = vue.computed(() => passwordVisible.value ? view_default : hide_default);
          const containerStyle = vue.computed(() => [
            rawAttrs.style
          ]);
          const textareaStyle = vue.computed(() => [
            props.inputStyle,
            textareaCalcStyle.value,
            { resize: props.resize }
          ]);
          const nativeInputValue = vue.computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
          const showClear = vue.computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value));
          const showPwdVisible = vue.computed(() => props.showPassword && !inputDisabled.value && !!nativeInputValue.value);
          const isWordLimitVisible = vue.computed(() => props.showWordLimit && !!props.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
          const textLength = vue.computed(() => nativeInputValue.value.length);
          const inputExceed = vue.computed(() => !!isWordLimitVisible.value && textLength.value > Number(props.maxlength));
          const suffixVisible = vue.computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
          const hasModelModifiers = vue.computed(() => !!Object.keys(props.modelModifiers).length);
          const [recordCursor, setCursor] = useCursor(input);
          useResizeObserver(textarea, (entries) => {
            onceInitSizeTextarea();
            if (!isWordLimitVisible.value || props.resize !== "both")
              return;
            const entry = entries[0];
            const { width } = entry.contentRect;
            countStyle.value = {
              right: `calc(100% - ${width + 15 + 6}px)`
            };
          });
          const resizeTextarea = () => {
            const { type, autosize } = props;
            if (!isClient || type !== "textarea" || !textarea.value)
              return;
            if (autosize) {
              const minRows = isObject$2(autosize) ? autosize.minRows : void 0;
              const maxRows = isObject$2(autosize) ? autosize.maxRows : void 0;
              const textareaStyle2 = calcTextareaHeight(textarea.value, minRows, maxRows);
              textareaCalcStyle.value = {
                overflowY: "hidden",
                ...textareaStyle2
              };
              vue.nextTick(() => {
                textarea.value.offsetHeight;
                textareaCalcStyle.value = textareaStyle2;
              });
            } else {
              textareaCalcStyle.value = {
                minHeight: calcTextareaHeight(textarea.value).minHeight
              };
            }
          };
          const createOnceInitResize = (resizeTextarea2) => {
            let isInit = false;
            return () => {
              var _a2;
              if (isInit || !props.autosize)
                return;
              const isElHidden = ((_a2 = textarea.value) == null ? void 0 : _a2.offsetParent) === null;
              if (!isElHidden) {
                setTimeout(resizeTextarea2);
                isInit = true;
              }
            };
          };
          const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
          const setNativeInputValue = () => {
            const input2 = _ref.value;
            const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
            if (!input2 || input2.value === formatterValue)
              return;
            input2.value = formatterValue;
          };
          const formatValue = (value) => {
            const { trim, number } = props.modelModifiers;
            if (trim) {
              value = value.trim();
            }
            if (number) {
              value = `${looseToNumber(value)}`;
            }
            if (props.formatter && props.parser) {
              value = props.parser(value);
            }
            return value;
          };
          const handleInput = async (event) => {
            if (isComposing.value)
              return;
            const { lazy } = props.modelModifiers;
            let { value } = event.target;
            if (lazy) {
              emit(INPUT_EVENT, value);
              return;
            }
            value = formatValue(value);
            if (String(value) === nativeInputValue.value) {
              if (props.formatter) {
                setNativeInputValue();
              }
              return;
            }
            recordCursor();
            emit(UPDATE_MODEL_EVENT, value);
            emit(INPUT_EVENT, value);
            await vue.nextTick();
            if (props.formatter && props.parser || !hasModelModifiers.value) {
              setNativeInputValue();
            }
            setCursor();
          };
          const handleChange = async (event) => {
            let { value } = event.target;
            value = formatValue(value);
            if (props.modelModifiers.lazy) {
              emit(UPDATE_MODEL_EVENT, value);
            }
            emit(CHANGE_EVENT, value);
            await vue.nextTick();
            setNativeInputValue();
          };
          const {
            isComposing,
            handleCompositionStart,
            handleCompositionUpdate,
            handleCompositionEnd
          } = useComposition({ emit, afterComposition: handleInput });
          const handlePasswordVisible = () => {
            passwordVisible.value = !passwordVisible.value;
          };
          const focus = () => {
            var _a2;
            return (_a2 = _ref.value) == null ? void 0 : _a2.focus();
          };
          const blur = () => {
            var _a2;
            return (_a2 = _ref.value) == null ? void 0 : _a2.blur();
          };
          const handleMouseLeave = (evt) => {
            hovering.value = false;
            emit("mouseleave", evt);
          };
          const handleMouseEnter = (evt) => {
            hovering.value = true;
            emit("mouseenter", evt);
          };
          const handleKeydown = (evt) => {
            emit("keydown", evt);
          };
          const select = () => {
            var _a2;
            (_a2 = _ref.value) == null ? void 0 : _a2.select();
          };
          const clear = () => {
            emit(UPDATE_MODEL_EVENT, "");
            emit(CHANGE_EVENT, "");
            emit("clear");
            emit(INPUT_EVENT, "");
          };
          vue.watch(() => props.modelValue, () => {
            var _a2;
            vue.nextTick(() => resizeTextarea());
            if (props.validateEvent) {
              (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "change").catch((err) => debugWarn());
            }
          });
          vue.watch(nativeInputValue, (newValue) => {
            if (!_ref.value) {
              return;
            }
            const { trim, number } = props.modelModifiers;
            const elValue = _ref.value.value;
            const displayValue = (number || props.type === "number") && !/^0\d/.test(elValue) ? `${looseToNumber(elValue)}` : elValue;
            if (displayValue === newValue) {
              return;
            }
            if (document.activeElement === _ref.value && _ref.value.type !== "range") {
              if (trim && displayValue.trim() === newValue) {
                return;
              }
            }
            setNativeInputValue();
          });
          vue.watch(() => props.type, async () => {
            await vue.nextTick();
            setNativeInputValue();
            resizeTextarea();
          });
          vue.onMounted(() => {
            if (!props.formatter && props.parser) ;
            setNativeInputValue();
            vue.nextTick(resizeTextarea);
          });
          expose({
            input,
            textarea,
            ref: _ref,
            textareaStyle,
            autosize: vue.toRef(props, "autosize"),
            isComposing,
            focus,
            blur,
            select,
            clear,
            resizeTextarea
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass([
                vue.unref(containerKls),
                {
                  [vue.unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
                  [vue.unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend
                }
              ]),
              style: vue.normalizeStyle(vue.unref(containerStyle)),
              onMouseenter: handleMouseEnter,
              onMouseleave: handleMouseLeave
            }, [
              vue.createCommentVNode(" input "),
              _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createCommentVNode(" prepend slot "),
                _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(nsInput).be("group", "prepend"))
                }, [
                  vue.renderSlot(_ctx.$slots, "prepend")
                ], 2)) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("div", {
                  ref_key: "wrapperRef",
                  ref: wrapperRef,
                  class: vue.normalizeClass(vue.unref(wrapperKls))
                }, [
                  vue.createCommentVNode(" prefix slot "),
                  _ctx.$slots.prefix || _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(nsInput).e("prefix"))
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(vue.unref(nsInput).e("prefix-inner"))
                    }, [
                      vue.renderSlot(_ctx.$slots, "prefix"),
                      _ctx.prefixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 0,
                        class: vue.normalizeClass(vue.unref(nsInput).e("icon"))
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.prefixIcon)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
                    ], 2)
                  ], 2)) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("input", vue.mergeProps({
                    id: vue.unref(inputId),
                    ref_key: "input",
                    ref: input,
                    class: vue.unref(nsInput).e("inner")
                  }, vue.unref(attrs), {
                    name: _ctx.name,
                    minlength: _ctx.minlength,
                    maxlength: _ctx.maxlength,
                    type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
                    disabled: vue.unref(inputDisabled),
                    readonly: _ctx.readonly,
                    autocomplete: _ctx.autocomplete,
                    tabindex: _ctx.tabindex,
                    "aria-label": _ctx.ariaLabel,
                    placeholder: _ctx.placeholder,
                    style: _ctx.inputStyle,
                    form: _ctx.form,
                    autofocus: _ctx.autofocus,
                    role: _ctx.containerRole,
                    inputmode: _ctx.inputmode,
                    onCompositionstart: vue.unref(handleCompositionStart),
                    onCompositionupdate: vue.unref(handleCompositionUpdate),
                    onCompositionend: vue.unref(handleCompositionEnd),
                    onInput: handleInput,
                    onChange: handleChange,
                    onKeydown: handleKeydown
                  }), null, 16, ["id", "name", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "inputmode", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
                  vue.createCommentVNode(" suffix slot "),
                  vue.unref(suffixVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 1,
                    class: vue.normalizeClass(vue.unref(nsInput).e("suffix"))
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(vue.unref(nsInput).e("suffix-inner"))
                    }, [
                      !vue.unref(showClear) || !vue.unref(showPwdVisible) || !vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                        vue.renderSlot(_ctx.$slots, "suffix"),
                        _ctx.suffixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                          key: 0,
                          class: vue.normalizeClass(vue.unref(nsInput).e("icon"))
                        }, {
                          default: vue.withCtx(() => [
                            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.suffixIcon)))
                          ]),
                          _: 1
                        }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
                      ], 64)) : vue.createCommentVNode("v-if", true),
                      vue.unref(showClear) ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 1,
                        class: vue.normalizeClass([vue.unref(nsInput).e("icon"), vue.unref(nsInput).e("clear")]),
                        onMousedown: vue.withModifiers(vue.unref(NOOP), ["prevent"]),
                        onClick: clear
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.clearIcon)))
                        ]),
                        _: 1
                      }, 8, ["class", "onMousedown"])) : vue.createCommentVNode("v-if", true),
                      vue.unref(showPwdVisible) ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 2,
                        class: vue.normalizeClass([vue.unref(nsInput).e("icon"), vue.unref(nsInput).e("password")]),
                        onClick: handlePasswordVisible,
                        onMousedown: vue.withModifiers(vue.unref(NOOP), ["prevent"]),
                        onMouseup: vue.withModifiers(vue.unref(NOOP), ["prevent"])
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(passwordIcon))))
                        ]),
                        _: 1
                      }, 8, ["class", "onMousedown", "onMouseup"])) : vue.createCommentVNode("v-if", true),
                      vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
                        key: 3,
                        class: vue.normalizeClass([
                          vue.unref(nsInput).e("count"),
                          vue.unref(nsInput).is("outside", _ctx.wordLimitPosition === "outside")
                        ])
                      }, [
                        vue.createElementVNode("span", {
                          class: vue.normalizeClass(vue.unref(nsInput).e("count-inner"))
                        }, vue.toDisplayString(vue.unref(textLength)) + " / " + vue.toDisplayString(_ctx.maxlength), 3)
                      ], 2)) : vue.createCommentVNode("v-if", true),
                      vue.unref(validateState) && vue.unref(validateIcon) && vue.unref(needStatusIcon) ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                        key: 4,
                        class: vue.normalizeClass([
                          vue.unref(nsInput).e("icon"),
                          vue.unref(nsInput).e("validateIcon"),
                          vue.unref(nsInput).is("loading", vue.unref(validateState) === "validating")
                        ])
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(validateIcon))))
                        ]),
                        _: 1
                      }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
                    ], 2)
                  ], 2)) : vue.createCommentVNode("v-if", true)
                ], 2),
                vue.createCommentVNode(" append slot "),
                _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 1,
                  class: vue.normalizeClass(vue.unref(nsInput).be("group", "append"))
                }, [
                  vue.renderSlot(_ctx.$slots, "append")
                ], 2)) : vue.createCommentVNode("v-if", true)
              ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createCommentVNode(" textarea "),
                vue.createElementVNode("textarea", vue.mergeProps({
                  id: vue.unref(inputId),
                  ref_key: "textarea",
                  ref: textarea,
                  class: [vue.unref(nsTextarea).e("inner"), vue.unref(nsInput).is("focus", vue.unref(isFocused))]
                }, vue.unref(attrs), {
                  name: _ctx.name,
                  minlength: _ctx.minlength,
                  maxlength: _ctx.maxlength,
                  tabindex: _ctx.tabindex,
                  disabled: vue.unref(inputDisabled),
                  readonly: _ctx.readonly,
                  autocomplete: _ctx.autocomplete,
                  style: vue.unref(textareaStyle),
                  "aria-label": _ctx.ariaLabel,
                  placeholder: _ctx.placeholder,
                  form: _ctx.form,
                  autofocus: _ctx.autofocus,
                  rows: _ctx.rows,
                  role: _ctx.containerRole,
                  onCompositionstart: vue.unref(handleCompositionStart),
                  onCompositionupdate: vue.unref(handleCompositionUpdate),
                  onCompositionend: vue.unref(handleCompositionEnd),
                  onInput: handleInput,
                  onFocus: vue.unref(handleFocus),
                  onBlur: vue.unref(handleBlur),
                  onChange: handleChange,
                  onKeydown: handleKeydown
                }), null, 16, ["id", "name", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
                vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  style: vue.normalizeStyle(countStyle.value),
                  class: vue.normalizeClass([
                    vue.unref(nsInput).e("count"),
                    vue.unref(nsInput).is("outside", _ctx.wordLimitPosition === "outside")
                  ])
                }, vue.toDisplayString(vue.unref(textLength)) + " / " + vue.toDisplayString(_ctx.maxlength), 7)) : vue.createCommentVNode("v-if", true)
              ], 64))
            ], 38);
          };
        }
      });
      var Input = _export_sfc(_sfc_main$r, [["__file", "input.vue"]]);
      const ElInput = withInstall(Input);
      const GAP = 4;
      const BAR_MAP = {
        vertical: {
          offset: "offsetHeight",
          scroll: "scrollTop",
          scrollSize: "scrollHeight",
          size: "height",
          key: "vertical",
          axis: "Y",
          client: "clientY",
          direction: "top"
        },
        horizontal: {
          offset: "offsetWidth",
          scroll: "scrollLeft",
          scrollSize: "scrollWidth",
          size: "width",
          key: "horizontal",
          axis: "X",
          client: "clientX",
          direction: "left"
        }
      };
      const renderThumbStyle = ({
        move,
        size,
        bar
      }) => ({
        [bar.size]: size,
        transform: `translate${bar.axis}(${move}%)`
      });
      const scrollbarContextKey = Symbol("scrollbarContextKey");
      const thumbProps = buildProps({
        vertical: Boolean,
        size: String,
        move: Number,
        ratio: {
          type: Number,
          required: true
        },
        always: Boolean
      });
      const COMPONENT_NAME$3 = "Thumb";
      const _sfc_main$q = vue.defineComponent({
        __name: "thumb",
        props: thumbProps,
        setup(__props) {
          const props = __props;
          const scrollbar = vue.inject(scrollbarContextKey);
          const ns = useNamespace("scrollbar");
          if (!scrollbar)
            throwError(COMPONENT_NAME$3, "can not inject scrollbar context");
          const instance = vue.ref();
          const thumb = vue.ref();
          const thumbState = vue.ref({});
          const visible = vue.ref(false);
          let cursorDown = false;
          let cursorLeave = false;
          let baseScrollHeight = 0;
          let baseScrollWidth = 0;
          let originalOnSelectStart = isClient ? document.onselectstart : null;
          const bar = vue.computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
          const thumbStyle = vue.computed(() => renderThumbStyle({
            size: props.size,
            move: props.move,
            bar: bar.value
          }));
          const offsetRatio = vue.computed(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
          const clickThumbHandler = (e) => {
            var _a2;
            e.stopPropagation();
            if (e.ctrlKey || [1, 2].includes(e.button))
              return;
            (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
            startDrag(e);
            const el = e.currentTarget;
            if (!el)
              return;
            thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
          };
          const clickTrackHandler = (e) => {
            if (!thumb.value || !instance.value || !scrollbar.wrapElement)
              return;
            const offset2 = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
            const thumbHalf = thumb.value[bar.value.offset] / 2;
            const thumbPositionPercentage = (offset2 - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
            scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
          };
          const startDrag = (e) => {
            e.stopImmediatePropagation();
            cursorDown = true;
            baseScrollHeight = scrollbar.wrapElement.scrollHeight;
            baseScrollWidth = scrollbar.wrapElement.scrollWidth;
            document.addEventListener("mousemove", mouseMoveDocumentHandler);
            document.addEventListener("mouseup", mouseUpDocumentHandler);
            originalOnSelectStart = document.onselectstart;
            document.onselectstart = () => false;
          };
          const mouseMoveDocumentHandler = (e) => {
            if (!instance.value || !thumb.value)
              return;
            if (cursorDown === false)
              return;
            const prevPage = thumbState.value[bar.value.axis];
            if (!prevPage)
              return;
            const offset2 = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
            const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
            const thumbPositionPercentage = (offset2 - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
            if (bar.value.scroll === "scrollLeft") {
              scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * baseScrollWidth / 100;
            } else {
              scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * baseScrollHeight / 100;
            }
          };
          const mouseUpDocumentHandler = () => {
            cursorDown = false;
            thumbState.value[bar.value.axis] = 0;
            document.removeEventListener("mousemove", mouseMoveDocumentHandler);
            document.removeEventListener("mouseup", mouseUpDocumentHandler);
            restoreOnselectstart();
            if (cursorLeave)
              visible.value = false;
          };
          const mouseMoveScrollbarHandler = () => {
            cursorLeave = false;
            visible.value = !!props.size;
          };
          const mouseLeaveScrollbarHandler = () => {
            cursorLeave = true;
            visible.value = cursorDown;
          };
          vue.onBeforeUnmount(() => {
            restoreOnselectstart();
            document.removeEventListener("mouseup", mouseUpDocumentHandler);
          });
          const restoreOnselectstart = () => {
            if (document.onselectstart !== originalOnSelectStart)
              document.onselectstart = originalOnSelectStart;
          };
          useEventListener(vue.toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
          useEventListener(vue.toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.Transition, {
              name: vue.unref(ns).b("fade"),
              persisted: ""
            }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createElementVNode("div", {
                  ref_key: "instance",
                  ref: instance,
                  class: vue.normalizeClass([vue.unref(ns).e("bar"), vue.unref(ns).is(vue.unref(bar).key)]),
                  onMousedown: clickTrackHandler,
                  onClick: vue.withModifiers(() => {
                  }, ["stop"])
                }, [
                  vue.createElementVNode("div", {
                    ref_key: "thumb",
                    ref: thumb,
                    class: vue.normalizeClass(vue.unref(ns).e("thumb")),
                    style: vue.normalizeStyle(vue.unref(thumbStyle)),
                    onMousedown: clickThumbHandler
                  }, null, 38)
                ], 42, ["onClick"]), [
                  [vue.vShow, _ctx.always || visible.value]
                ])
              ]),
              _: 1
            }, 8, ["name"]);
          };
        }
      });
      var Thumb = _export_sfc(_sfc_main$q, [["__file", "thumb.vue"]]);
      const barProps = buildProps({
        always: {
          type: Boolean,
          default: true
        },
        minSize: {
          type: Number,
          required: true
        }
      });
      const _sfc_main$p = vue.defineComponent({
        __name: "bar",
        props: barProps,
        setup(__props, { expose }) {
          const props = __props;
          const scrollbar = vue.inject(scrollbarContextKey);
          const moveX = vue.ref(0);
          const moveY = vue.ref(0);
          const sizeWidth = vue.ref("");
          const sizeHeight = vue.ref("");
          const ratioY = vue.ref(1);
          const ratioX = vue.ref(1);
          const handleScroll = (wrap) => {
            if (wrap) {
              const offsetHeight = wrap.offsetHeight - GAP;
              const offsetWidth = wrap.offsetWidth - GAP;
              moveY.value = wrap.scrollTop * 100 / offsetHeight * ratioY.value;
              moveX.value = wrap.scrollLeft * 100 / offsetWidth * ratioX.value;
            }
          };
          const update = () => {
            const wrap = scrollbar == null ? void 0 : scrollbar.wrapElement;
            if (!wrap)
              return;
            const offsetHeight = wrap.offsetHeight - GAP;
            const offsetWidth = wrap.offsetWidth - GAP;
            const originalHeight = offsetHeight ** 2 / wrap.scrollHeight;
            const originalWidth = offsetWidth ** 2 / wrap.scrollWidth;
            const height = Math.max(originalHeight, props.minSize);
            const width = Math.max(originalWidth, props.minSize);
            ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
            ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
            sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
            sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
          };
          expose({
            handleScroll,
            update
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createVNode(Thumb, {
                move: moveX.value,
                ratio: ratioX.value,
                size: sizeWidth.value,
                always: _ctx.always
              }, null, 8, ["move", "ratio", "size", "always"]),
              vue.createVNode(Thumb, {
                move: moveY.value,
                ratio: ratioY.value,
                size: sizeHeight.value,
                vertical: "",
                always: _ctx.always
              }, null, 8, ["move", "ratio", "size", "always"])
            ], 64);
          };
        }
      });
      var Bar = _export_sfc(_sfc_main$p, [["__file", "bar.vue"]]);
      const scrollbarProps = buildProps({
        distance: {
          type: Number,
          default: 0
        },
        height: {
          type: [String, Number],
          default: ""
        },
        maxHeight: {
          type: [String, Number],
          default: ""
        },
        native: Boolean,
        wrapStyle: {
          type: definePropType([String, Object, Array]),
          default: ""
        },
        wrapClass: {
          type: [String, Array],
          default: ""
        },
        viewClass: {
          type: [String, Array],
          default: ""
        },
        viewStyle: {
          type: [String, Array, Object],
          default: ""
        },
        noresize: Boolean,
        tag: {
          type: String,
          default: "div"
        },
        always: Boolean,
        minSize: {
          type: Number,
          default: 20
        },
        tabindex: {
          type: [String, Number],
          default: void 0
        },
        id: String,
        role: String,
        ...useAriaProps(["ariaLabel", "ariaOrientation"])
      });
      const scrollbarEmits = {
        "end-reached": (direction) => ["left", "right", "top", "bottom"].includes(direction),
        scroll: ({
          scrollTop,
          scrollLeft
        }) => [scrollTop, scrollLeft].every(isNumber$1)
      };
      const COMPONENT_NAME$2 = "ElScrollbar";
      const __default__$h = vue.defineComponent({
        name: COMPONENT_NAME$2
      });
      const _sfc_main$o = vue.defineComponent({
        ...__default__$h,
        props: scrollbarProps,
        emits: scrollbarEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const ns = useNamespace("scrollbar");
          let stopResizeObserver = void 0;
          let stopWrapResizeObserver = void 0;
          let stopResizeListener = void 0;
          let wrapScrollTop = 0;
          let wrapScrollLeft = 0;
          let direction = "";
          const distanceScrollState = {
            bottom: false,
            top: false,
            right: false,
            left: false
          };
          const scrollbarRef = vue.ref();
          const wrapRef = vue.ref();
          const resizeRef = vue.ref();
          const barRef = vue.ref();
          const wrapStyle = vue.computed(() => {
            const style = {};
            if (props.height)
              style.height = addUnit(props.height);
            if (props.maxHeight)
              style.maxHeight = addUnit(props.maxHeight);
            return [props.wrapStyle, style];
          });
          const wrapKls = vue.computed(() => {
            return [
              props.wrapClass,
              ns.e("wrap"),
              { [ns.em("wrap", "hidden-default")]: !props.native }
            ];
          });
          const resizeKls = vue.computed(() => {
            return [ns.e("view"), props.viewClass];
          });
          const shouldSkipDirection = (direction2) => {
            var _a2;
            return (_a2 = distanceScrollState[direction2]) != null ? _a2 : false;
          };
          const DIRECTION_PAIRS = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
          };
          const updateTriggerStatus = (arrivedStates) => {
            const oppositeDirection = DIRECTION_PAIRS[direction];
            if (!oppositeDirection)
              return;
            const arrived = arrivedStates[direction];
            const oppositeArrived = arrivedStates[oppositeDirection];
            if (arrived && !distanceScrollState[direction]) {
              distanceScrollState[direction] = true;
            }
            if (!oppositeArrived && distanceScrollState[oppositeDirection]) {
              distanceScrollState[oppositeDirection] = false;
            }
          };
          const handleScroll = () => {
            var _a2;
            if (wrapRef.value) {
              (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrapRef.value);
              const prevTop = wrapScrollTop;
              const prevLeft = wrapScrollLeft;
              wrapScrollTop = wrapRef.value.scrollTop;
              wrapScrollLeft = wrapRef.value.scrollLeft;
              const arrivedStates = {
                bottom: wrapScrollTop + wrapRef.value.clientHeight >= wrapRef.value.scrollHeight - props.distance,
                top: wrapScrollTop <= props.distance && prevTop !== 0,
                right: wrapScrollLeft + wrapRef.value.clientWidth >= wrapRef.value.scrollWidth - props.distance && prevLeft !== wrapScrollLeft,
                left: wrapScrollLeft <= props.distance && prevLeft !== 0
              };
              emit("scroll", {
                scrollTop: wrapScrollTop,
                scrollLeft: wrapScrollLeft
              });
              if (prevTop !== wrapScrollTop) {
                direction = wrapScrollTop > prevTop ? "bottom" : "top";
              }
              if (prevLeft !== wrapScrollLeft) {
                direction = wrapScrollLeft > prevLeft ? "right" : "left";
              }
              if (props.distance > 0) {
                if (shouldSkipDirection(direction)) {
                  return;
                }
                updateTriggerStatus(arrivedStates);
              }
              if (arrivedStates[direction])
                emit("end-reached", direction);
            }
          };
          function scrollTo(arg1, arg2) {
            if (isObject$2(arg1)) {
              wrapRef.value.scrollTo(arg1);
            } else if (isNumber$1(arg1) && isNumber$1(arg2)) {
              wrapRef.value.scrollTo(arg1, arg2);
            }
          }
          const setScrollTop = (value) => {
            if (!isNumber$1(value)) {
              return;
            }
            wrapRef.value.scrollTop = value;
          };
          const setScrollLeft = (value) => {
            if (!isNumber$1(value)) {
              return;
            }
            wrapRef.value.scrollLeft = value;
          };
          const update = () => {
            var _a2;
            (_a2 = barRef.value) == null ? void 0 : _a2.update();
            distanceScrollState[direction] = false;
          };
          vue.watch(() => props.noresize, (noresize) => {
            if (noresize) {
              stopResizeObserver == null ? void 0 : stopResizeObserver();
              stopWrapResizeObserver == null ? void 0 : stopWrapResizeObserver();
              stopResizeListener == null ? void 0 : stopResizeListener();
            } else {
              ({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
              ({ stop: stopWrapResizeObserver } = useResizeObserver(wrapRef, update));
              stopResizeListener = useEventListener("resize", update);
            }
          }, { immediate: true });
          vue.watch(() => [props.maxHeight, props.height], () => {
            if (!props.native)
              vue.nextTick(() => {
                var _a2;
                update();
                if (wrapRef.value) {
                  (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrapRef.value);
                }
              });
          });
          vue.provide(scrollbarContextKey, vue.reactive({
            scrollbarElement: scrollbarRef,
            wrapElement: wrapRef
          }));
          vue.onActivated(() => {
            if (wrapRef.value) {
              wrapRef.value.scrollTop = wrapScrollTop;
              wrapRef.value.scrollLeft = wrapScrollLeft;
            }
          });
          vue.onMounted(() => {
            if (!props.native)
              vue.nextTick(() => {
                update();
              });
          });
          vue.onUpdated(() => update());
          expose({
            wrapRef,
            update,
            scrollTo,
            setScrollTop,
            setScrollLeft,
            handleScroll
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              ref_key: "scrollbarRef",
              ref: scrollbarRef,
              class: vue.normalizeClass(vue.unref(ns).b())
            }, [
              vue.createElementVNode("div", {
                ref_key: "wrapRef",
                ref: wrapRef,
                class: vue.normalizeClass(vue.unref(wrapKls)),
                style: vue.normalizeStyle(vue.unref(wrapStyle)),
                tabindex: _ctx.tabindex,
                onScroll: handleScroll
              }, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
                  id: _ctx.id,
                  ref_key: "resizeRef",
                  ref: resizeRef,
                  class: vue.normalizeClass(vue.unref(resizeKls)),
                  style: vue.normalizeStyle(_ctx.viewStyle),
                  role: _ctx.role,
                  "aria-label": _ctx.ariaLabel,
                  "aria-orientation": _ctx.ariaOrientation
                }, {
                  default: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
              ], 46, ["tabindex"]),
              !_ctx.native ? (vue.openBlock(), vue.createBlock(Bar, {
                key: 0,
                ref_key: "barRef",
                ref: barRef,
                always: _ctx.always,
                "min-size": _ctx.minSize
              }, null, 8, ["always", "min-size"])) : vue.createCommentVNode("v-if", true)
            ], 2);
          };
        }
      });
      var Scrollbar = _export_sfc(_sfc_main$o, [["__file", "scrollbar.vue"]]);
      const ElScrollbar = withInstall(Scrollbar);
      const POPPER_INJECTION_KEY = Symbol("popper");
      const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
      const roleTypes = [
        "dialog",
        "grid",
        "group",
        "listbox",
        "menu",
        "navigation",
        "tooltip",
        "tree"
      ];
      const popperProps = buildProps({
        role: {
          type: String,
          values: roleTypes,
          default: "tooltip"
        }
      });
      const __default__$g = vue.defineComponent({
        name: "ElPopper",
        inheritAttrs: false
      });
      const _sfc_main$n = vue.defineComponent({
        ...__default__$g,
        props: popperProps,
        setup(__props, { expose }) {
          const props = __props;
          const triggerRef = vue.ref();
          const popperInstanceRef = vue.ref();
          const contentRef = vue.ref();
          const referenceRef = vue.ref();
          const role = vue.computed(() => props.role);
          const popperProvides = {
            triggerRef,
            popperInstanceRef,
            contentRef,
            referenceRef,
            role
          };
          expose(popperProvides);
          vue.provide(POPPER_INJECTION_KEY, popperProvides);
          return (_ctx, _cache) => {
            return vue.renderSlot(_ctx.$slots, "default");
          };
        }
      });
      var Popper = _export_sfc(_sfc_main$n, [["__file", "popper.vue"]]);
      const __default__$f = vue.defineComponent({
        name: "ElPopperArrow",
        inheritAttrs: false
      });
      const _sfc_main$m = vue.defineComponent({
        ...__default__$f,
        setup(__props, { expose }) {
          const ns = useNamespace("popper");
          const { arrowRef, arrowStyle } = vue.inject(POPPER_CONTENT_INJECTION_KEY, void 0);
          vue.onBeforeUnmount(() => {
            arrowRef.value = void 0;
          });
          expose({
            arrowRef
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("span", {
              ref_key: "arrowRef",
              ref: arrowRef,
              class: vue.normalizeClass(vue.unref(ns).e("arrow")),
              style: vue.normalizeStyle(vue.unref(arrowStyle)),
              "data-popper-arrow": ""
            }, null, 6);
          };
        }
      });
      var ElPopperArrow = _export_sfc(_sfc_main$m, [["__file", "arrow.vue"]]);
      const popperTriggerProps = buildProps({
        virtualRef: {
          type: definePropType(Object)
        },
        virtualTriggering: Boolean,
        onMouseenter: {
          type: definePropType(Function)
        },
        onMouseleave: {
          type: definePropType(Function)
        },
        onClick: {
          type: definePropType(Function)
        },
        onKeydown: {
          type: definePropType(Function)
        },
        onFocus: {
          type: definePropType(Function)
        },
        onBlur: {
          type: definePropType(Function)
        },
        onContextmenu: {
          type: definePropType(Function)
        },
        id: String,
        open: Boolean
      });
      const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
      const useForwardRef = (forwardRef) => {
        const setForwardRef = (el) => {
          forwardRef.value = el;
        };
        vue.provide(FORWARD_REF_INJECTION_KEY, {
          setForwardRef
        });
      };
      const useForwardRefDirective = (setForwardRef) => {
        return {
          mounted(el) {
            setForwardRef(el);
          },
          updated(el) {
            setForwardRef(el);
          },
          unmounted() {
            setForwardRef(null);
          }
        };
      };
      const NAME = "ElOnlyChild";
      const OnlyChild = vue.defineComponent({
        name: NAME,
        setup(_2, {
          slots,
          attrs
        }) {
          var _a2;
          const forwardRefInjection = vue.inject(FORWARD_REF_INJECTION_KEY);
          const forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
          return () => {
            var _a22;
            const defaultSlot = (_a22 = slots.default) == null ? void 0 : _a22.call(slots, attrs);
            if (!defaultSlot)
              return null;
            const [firstLegitNode, length] = findFirstLegitChild(defaultSlot);
            if (!firstLegitNode) {
              return null;
            }
            return vue.withDirectives(vue.cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
          };
        }
      });
      function findFirstLegitChild(node) {
        if (!node)
          return [null, 0];
        const children = node;
        const len = children.filter((c2) => c2.type !== vue.Comment).length;
        for (const child of children) {
          if (isObject$2(child)) {
            switch (child.type) {
              case vue.Comment:
                continue;
              case vue.Text:
              case "svg":
                return [wrapTextContent(child), len];
              case vue.Fragment:
                return findFirstLegitChild(child.children);
              default:
                return [child, len];
            }
          }
          return [wrapTextContent(child), len];
        }
        return [null, 0];
      }
      function wrapTextContent(s2) {
        const ns = useNamespace("only-child");
        return vue.createVNode("span", {
          "class": ns.e("content")
        }, [s2]);
      }
      const __default__$e = vue.defineComponent({
        name: "ElPopperTrigger",
        inheritAttrs: false
      });
      const _sfc_main$l = vue.defineComponent({
        ...__default__$e,
        props: popperTriggerProps,
        setup(__props, { expose }) {
          const props = __props;
          const { role, triggerRef } = vue.inject(POPPER_INJECTION_KEY, void 0);
          useForwardRef(triggerRef);
          const ariaControls = vue.computed(() => {
            return ariaHaspopup.value ? props.id : void 0;
          });
          const ariaDescribedby = vue.computed(() => {
            if (role && role.value === "tooltip") {
              return props.open && props.id ? props.id : void 0;
            }
            return void 0;
          });
          const ariaHaspopup = vue.computed(() => {
            if (role && role.value !== "tooltip") {
              return role.value;
            }
            return void 0;
          });
          const ariaExpanded = vue.computed(() => {
            return ariaHaspopup.value ? `${props.open}` : void 0;
          });
          let virtualTriggerAriaStopWatch = void 0;
          const TRIGGER_ELE_EVENTS = [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ];
          vue.onMounted(() => {
            vue.watch(() => props.virtualRef, (virtualEl) => {
              if (virtualEl) {
                triggerRef.value = unrefElement(virtualEl);
              }
            }, {
              immediate: true
            });
            vue.watch(triggerRef, (el, prevEl) => {
              virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
              virtualTriggerAriaStopWatch = void 0;
              if (isElement(prevEl)) {
                TRIGGER_ELE_EVENTS.forEach((eventName) => {
                  const handler = props[eventName];
                  if (handler) {
                    prevEl.removeEventListener(eventName.slice(2).toLowerCase(), handler, ["onFocus", "onBlur"].includes(eventName));
                  }
                });
              }
              if (isElement(el)) {
                TRIGGER_ELE_EVENTS.forEach((eventName) => {
                  const handler = props[eventName];
                  if (handler) {
                    el.addEventListener(eventName.slice(2).toLowerCase(), handler, ["onFocus", "onBlur"].includes(eventName));
                  }
                });
                if (isFocusable(el)) {
                  virtualTriggerAriaStopWatch = vue.watch([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
                    [
                      "aria-controls",
                      "aria-describedby",
                      "aria-haspopup",
                      "aria-expanded"
                    ].forEach((key, idx) => {
                      isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
                    });
                  }, { immediate: true });
                }
              }
              if (isElement(prevEl) && isFocusable(prevEl)) {
                [
                  "aria-controls",
                  "aria-describedby",
                  "aria-haspopup",
                  "aria-expanded"
                ].forEach((key) => prevEl.removeAttribute(key));
              }
            }, {
              immediate: true
            });
          });
          vue.onBeforeUnmount(() => {
            virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
            virtualTriggerAriaStopWatch = void 0;
            if (triggerRef.value && isElement(triggerRef.value)) {
              const el = triggerRef.value;
              TRIGGER_ELE_EVENTS.forEach((eventName) => {
                const handler = props[eventName];
                if (handler) {
                  el.removeEventListener(eventName.slice(2).toLowerCase(), handler, ["onFocus", "onBlur"].includes(eventName));
                }
              });
              triggerRef.value = void 0;
            }
          });
          expose({
            triggerRef
          });
          return (_ctx, _cache) => {
            return !_ctx.virtualTriggering ? (vue.openBlock(), vue.createBlock(vue.unref(OnlyChild), vue.mergeProps({ key: 0 }, _ctx.$attrs, {
              "aria-controls": vue.unref(ariaControls),
              "aria-describedby": vue.unref(ariaDescribedby),
              "aria-expanded": vue.unref(ariaExpanded),
              "aria-haspopup": vue.unref(ariaHaspopup)
            }), {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : vue.createCommentVNode("v-if", true);
          };
        }
      });
      var ElPopperTrigger = _export_sfc(_sfc_main$l, [["__file", "trigger.vue"]]);
      const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
      const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
      const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
      const FOCUS_AFTER_TRAPPED_OPTS = {
        cancelable: true,
        bubbles: false
      };
      const FOCUSOUT_PREVENTED_OPTS = {
        cancelable: true,
        bubbles: false
      };
      const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
      const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
      const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
      const focusReason = vue.ref();
      const lastUserFocusTimestamp = vue.ref(0);
      const lastAutomatedFocusTimestamp = vue.ref(0);
      let focusReasonUserCount = 0;
      const obtainAllFocusableElements = (element) => {
        const nodes = [];
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (node) => {
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput)
              return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        });
        while (walker.nextNode())
          nodes.push(walker.currentNode);
        return nodes;
      };
      const getVisibleElement = (elements, container) => {
        for (const element of elements) {
          if (!isHidden(element, container))
            return element;
        }
      };
      const isHidden = (element, container) => {
        if (getComputedStyle(element).visibility === "hidden")
          return true;
        while (element) {
          if (container && element === container)
            return false;
          if (getComputedStyle(element).display === "none")
            return true;
          element = element.parentElement;
        }
        return false;
      };
      const getEdges = (container) => {
        const focusable = obtainAllFocusableElements(container);
        const first = getVisibleElement(focusable, container);
        const last2 = getVisibleElement(focusable.reverse(), container);
        return [first, last2];
      };
      const isSelectable = (element) => {
        return element instanceof HTMLInputElement && "select" in element;
      };
      const tryFocus = (element, shouldSelect) => {
        if (element) {
          const prevFocusedElement = document.activeElement;
          focusElement(element, { preventScroll: true });
          lastAutomatedFocusTimestamp.value = window.performance.now();
          if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
            element.select();
          }
        }
      };
      function removeFromStack(list, item) {
        const copy = [...list];
        const idx = list.indexOf(item);
        if (idx !== -1) {
          copy.splice(idx, 1);
        }
        return copy;
      }
      const createFocusableStack = () => {
        let stack = [];
        const push = (layer) => {
          const currentLayer = stack[0];
          if (currentLayer && layer !== currentLayer) {
            currentLayer.pause();
          }
          stack = removeFromStack(stack, layer);
          stack.unshift(layer);
        };
        const remove = (layer) => {
          var _a2, _b;
          stack = removeFromStack(stack, layer);
          (_b = (_a2 = stack[0]) == null ? void 0 : _a2.resume) == null ? void 0 : _b.call(_a2);
        };
        return {
          push,
          remove
        };
      };
      const focusFirstDescendant = (elements, shouldSelect = false) => {
        const prevFocusedElement = document.activeElement;
        for (const element of elements) {
          tryFocus(element, shouldSelect);
          if (document.activeElement !== prevFocusedElement)
            return;
        }
      };
      const focusableStack = createFocusableStack();
      const isFocusCausedByUserEvent = () => {
        return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
      };
      const notifyFocusReasonPointer = () => {
        focusReason.value = "pointer";
        lastUserFocusTimestamp.value = window.performance.now();
      };
      const notifyFocusReasonKeydown = () => {
        focusReason.value = "keyboard";
        lastUserFocusTimestamp.value = window.performance.now();
      };
      const useFocusReason = () => {
        vue.onMounted(() => {
          if (focusReasonUserCount === 0) {
            document.addEventListener("mousedown", notifyFocusReasonPointer);
            document.addEventListener("touchstart", notifyFocusReasonPointer);
            document.addEventListener("keydown", notifyFocusReasonKeydown);
          }
          focusReasonUserCount++;
        });
        vue.onBeforeUnmount(() => {
          focusReasonUserCount--;
          if (focusReasonUserCount <= 0) {
            document.removeEventListener("mousedown", notifyFocusReasonPointer);
            document.removeEventListener("touchstart", notifyFocusReasonPointer);
            document.removeEventListener("keydown", notifyFocusReasonKeydown);
          }
        });
        return {
          focusReason,
          lastUserFocusTimestamp,
          lastAutomatedFocusTimestamp
        };
      };
      const createFocusOutPreventedEvent = (detail) => {
        return new CustomEvent(FOCUSOUT_PREVENTED, {
          ...FOCUSOUT_PREVENTED_OPTS,
          detail
        });
      };
      const EVENT_CODE = {
        tab: "Tab",
        enter: "Enter",
        space: "Space",
        left: "ArrowLeft",
        up: "ArrowUp",
        right: "ArrowRight",
        down: "ArrowDown",
        esc: "Escape",
        delete: "Delete",
        backspace: "Backspace",
        numpadEnter: "NumpadEnter",
        pageUp: "PageUp",
        pageDown: "PageDown",
        home: "Home",
        end: "End"
      };
      const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
        const handleEvent = (event) => {
          const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
          if (checkForDefaultPrevented === false || !shouldPrevent) {
            return oursHandler == null ? void 0 : oursHandler(event);
          }
        };
        return handleEvent;
      };
      const getEventCode = (event) => {
        if (event.code && event.code !== "Unidentified")
          return event.code;
        const key = getEventKey(event);
        if (key) {
          if (Object.values(EVENT_CODE).includes(key))
            return key;
          switch (key) {
            case " ":
              return EVENT_CODE.space;
            default:
              return "";
          }
        }
        return "";
      };
      const getEventKey = (event) => {
        let key = event.key && event.key !== "Unidentified" ? event.key : "";
        if (!key && event.type === "keyup" && isAndroid()) {
          const target = event.target;
          key = target.value.charAt(target.selectionStart - 1);
        }
        return key;
      };
      let registeredEscapeHandlers = [];
      const cachedHandler = (event) => {
        const code = getEventCode(event);
        if (code === EVENT_CODE.esc) {
          registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
        }
      };
      const useEscapeKeydown = (handler) => {
        vue.onMounted(() => {
          if (registeredEscapeHandlers.length === 0) {
            document.addEventListener("keydown", cachedHandler);
          }
          if (isClient)
            registeredEscapeHandlers.push(handler);
        });
        vue.onBeforeUnmount(() => {
          registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
          if (registeredEscapeHandlers.length === 0) {
            if (isClient)
              document.removeEventListener("keydown", cachedHandler);
          }
        });
      };
      const _sfc_main$k = vue.defineComponent({
        name: "ElFocusTrap",
        inheritAttrs: false,
        props: {
          loop: Boolean,
          trapped: Boolean,
          focusTrapEl: Object,
          focusStartEl: {
            type: [Object, String],
            default: "first"
          }
        },
        emits: [
          ON_TRAP_FOCUS_EVT,
          ON_RELEASE_FOCUS_EVT,
          "focusin",
          "focusout",
          "focusout-prevented",
          "release-requested"
        ],
        setup(props, { emit }) {
          const forwardRef = vue.ref();
          let lastFocusBeforeTrapped;
          let lastFocusAfterTrapped;
          const { focusReason: focusReason2 } = useFocusReason();
          useEscapeKeydown((event) => {
            if (props.trapped && !focusLayer.paused) {
              emit("release-requested", event);
            }
          });
          const focusLayer = {
            paused: false,
            pause() {
              this.paused = true;
            },
            resume() {
              this.paused = false;
            }
          };
          const onKeydown = (e) => {
            if (!props.loop && !props.trapped)
              return;
            if (focusLayer.paused)
              return;
            const { altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
            const { loop } = props;
            const code = getEventCode(e);
            const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
            const currentFocusingEl = document.activeElement;
            if (isTabbing && currentFocusingEl) {
              const container = currentTarget;
              const [first, last2] = getEdges(container);
              const isTabbable = first && last2;
              if (!isTabbable) {
                if (currentFocusingEl === container) {
                  const focusoutPreventedEvent = createFocusOutPreventedEvent({
                    focusReason: focusReason2.value
                  });
                  emit("focusout-prevented", focusoutPreventedEvent);
                  if (!focusoutPreventedEvent.defaultPrevented) {
                    e.preventDefault();
                  }
                }
              } else {
                if (!shiftKey && currentFocusingEl === last2) {
                  const focusoutPreventedEvent = createFocusOutPreventedEvent({
                    focusReason: focusReason2.value
                  });
                  emit("focusout-prevented", focusoutPreventedEvent);
                  if (!focusoutPreventedEvent.defaultPrevented) {
                    e.preventDefault();
                    if (loop)
                      tryFocus(first, true);
                  }
                } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
                  const focusoutPreventedEvent = createFocusOutPreventedEvent({
                    focusReason: focusReason2.value
                  });
                  emit("focusout-prevented", focusoutPreventedEvent);
                  if (!focusoutPreventedEvent.defaultPrevented) {
                    e.preventDefault();
                    if (loop)
                      tryFocus(last2, true);
                  }
                }
              }
            }
          };
          vue.provide(FOCUS_TRAP_INJECTION_KEY, {
            focusTrapRef: forwardRef,
            onKeydown
          });
          vue.watch(() => props.focusTrapEl, (focusTrapEl) => {
            if (focusTrapEl) {
              forwardRef.value = focusTrapEl;
            }
          }, { immediate: true });
          vue.watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
            if (forwardRef2) {
              forwardRef2.addEventListener("keydown", onKeydown);
              forwardRef2.addEventListener("focusin", onFocusIn);
              forwardRef2.addEventListener("focusout", onFocusOut);
            }
            if (oldForwardRef) {
              oldForwardRef.removeEventListener("keydown", onKeydown);
              oldForwardRef.removeEventListener("focusin", onFocusIn);
              oldForwardRef.removeEventListener("focusout", onFocusOut);
            }
          });
          const trapOnFocus = (e) => {
            emit(ON_TRAP_FOCUS_EVT, e);
          };
          const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
          const onFocusIn = (e) => {
            const trapContainer = vue.unref(forwardRef);
            if (!trapContainer)
              return;
            const target = e.target;
            const relatedTarget = e.relatedTarget;
            const isFocusedInTrap = target && trapContainer.contains(target);
            if (!props.trapped) {
              const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
              if (!isPrevFocusedInTrap) {
                lastFocusBeforeTrapped = relatedTarget;
              }
            }
            if (isFocusedInTrap)
              emit("focusin", e);
            if (focusLayer.paused)
              return;
            if (props.trapped) {
              if (isFocusedInTrap) {
                lastFocusAfterTrapped = target;
              } else {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          };
          const onFocusOut = (e) => {
            const trapContainer = vue.unref(forwardRef);
            if (focusLayer.paused || !trapContainer)
              return;
            if (props.trapped) {
              const relatedTarget = e.relatedTarget;
              if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
                setTimeout(() => {
                  if (!focusLayer.paused && props.trapped) {
                    const focusoutPreventedEvent = createFocusOutPreventedEvent({
                      focusReason: focusReason2.value
                    });
                    emit("focusout-prevented", focusoutPreventedEvent);
                    if (!focusoutPreventedEvent.defaultPrevented) {
                      tryFocus(lastFocusAfterTrapped, true);
                    }
                  }
                }, 0);
              }
            } else {
              const target = e.target;
              const isFocusedInTrap = target && trapContainer.contains(target);
              if (!isFocusedInTrap)
                emit("focusout", e);
            }
          };
          async function startTrap() {
            await vue.nextTick();
            const trapContainer = vue.unref(forwardRef);
            if (trapContainer) {
              focusableStack.push(focusLayer);
              const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
              lastFocusBeforeTrapped = prevFocusedElement;
              const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
              if (!isPrevFocusContained) {
                const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
                trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
                trapContainer.dispatchEvent(focusEvent);
                if (!focusEvent.defaultPrevented) {
                  vue.nextTick(() => {
                    let focusStartEl = props.focusStartEl;
                    if (!isString$2(focusStartEl)) {
                      tryFocus(focusStartEl);
                      if (document.activeElement !== focusStartEl) {
                        focusStartEl = "first";
                      }
                    }
                    if (focusStartEl === "first") {
                      focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
                    }
                    if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                      tryFocus(trapContainer);
                    }
                  });
                }
              }
            }
          }
          function stopTrap() {
            const trapContainer = vue.unref(forwardRef);
            if (trapContainer) {
              trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
              const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
                ...FOCUS_AFTER_TRAPPED_OPTS,
                detail: {
                  focusReason: focusReason2.value
                }
              });
              trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
              trapContainer.dispatchEvent(releasedEvent);
              if (!releasedEvent.defaultPrevented && (focusReason2.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) {
                tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body);
              }
              trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
              focusableStack.remove(focusLayer);
              lastFocusBeforeTrapped = null;
              lastFocusAfterTrapped = null;
            }
          }
          vue.onMounted(() => {
            if (props.trapped) {
              startTrap();
            }
            vue.watch(() => props.trapped, (trapped) => {
              if (trapped) {
                startTrap();
              } else {
                stopTrap();
              }
            });
          });
          vue.onBeforeUnmount(() => {
            if (props.trapped) {
              stopTrap();
            }
            if (forwardRef.value) {
              forwardRef.value.removeEventListener("keydown", onKeydown);
              forwardRef.value.removeEventListener("focusin", onFocusIn);
              forwardRef.value.removeEventListener("focusout", onFocusOut);
              forwardRef.value = void 0;
            }
          });
          return {
            onKeydown
          };
        }
      });
      function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
      }
      var ElFocusTrap = _export_sfc(_sfc_main$k, [["render", _sfc_render$2], ["__file", "focus-trap.vue"]]);
      var E$1 = "top", R = "bottom", W = "right", P$1 = "left", me = "auto", G = [E$1, R, W, P$1], U$1 = "start", J = "end", Xe = "clippingParents", je = "viewport", K = "popper", Ye = "reference", De = G.reduce(function(t, e) {
        return t.concat([e + "-" + U$1, e + "-" + J]);
      }, []), Ee = [].concat(G, [me]).reduce(function(t, e) {
        return t.concat([e, e + "-" + U$1, e + "-" + J]);
      }, []), Ge = "beforeRead", Je = "read", Ke = "afterRead", Qe = "beforeMain", Ze = "main", et = "afterMain", tt = "beforeWrite", nt = "write", rt = "afterWrite", ot = [Ge, Je, Ke, Qe, Ze, et, tt, nt, rt];
      function C(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function H(t) {
        if (t == null) return window;
        if (t.toString() !== "[object Window]") {
          var e = t.ownerDocument;
          return e && e.defaultView || window;
        }
        return t;
      }
      function Q(t) {
        var e = H(t).Element;
        return t instanceof e || t instanceof Element;
      }
      function B(t) {
        var e = H(t).HTMLElement;
        return t instanceof e || t instanceof HTMLElement;
      }
      function Pe(t) {
        if (typeof ShadowRoot == "undefined") return false;
        var e = H(t).ShadowRoot;
        return t instanceof e || t instanceof ShadowRoot;
      }
      function Mt(t) {
        var e = t.state;
        Object.keys(e.elements).forEach(function(n) {
          var r = e.styles[n] || {}, o2 = e.attributes[n] || {}, i = e.elements[n];
          !B(i) || !C(i) || (Object.assign(i.style, r), Object.keys(o2).forEach(function(a2) {
            var s2 = o2[a2];
            s2 === false ? i.removeAttribute(a2) : i.setAttribute(a2, s2 === true ? "" : s2);
          }));
        });
      }
      function Rt(t) {
        var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
        return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
          Object.keys(e.elements).forEach(function(r) {
            var o2 = e.elements[r], i = e.attributes[r] || {}, a2 = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), s2 = a2.reduce(function(f2, c2) {
              return f2[c2] = "", f2;
            }, {});
            !B(o2) || !C(o2) || (Object.assign(o2.style, s2), Object.keys(i).forEach(function(f2) {
              o2.removeAttribute(f2);
            }));
          });
        };
      }
      var Ae = { name: "applyStyles", enabled: true, phase: "write", fn: Mt, effect: Rt, requires: ["computeStyles"] };
      function q(t) {
        return t.split("-")[0];
      }
      var X$1 = Math.max, ve = Math.min, Z = Math.round;
      function ee(t, e) {
        e === void 0 && (e = false);
        var n = t.getBoundingClientRect(), r = 1, o2 = 1;
        if (B(t) && e) {
          var i = t.offsetHeight, a2 = t.offsetWidth;
          a2 > 0 && (r = Z(n.width) / a2 || 1), i > 0 && (o2 = Z(n.height) / i || 1);
        }
        return { width: n.width / r, height: n.height / o2, top: n.top / o2, right: n.right / r, bottom: n.bottom / o2, left: n.left / r, x: n.left / r, y: n.top / o2 };
      }
      function ke(t) {
        var e = ee(t), n = t.offsetWidth, r = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: r };
      }
      function it(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return true;
        if (n && Pe(n)) {
          var r = e;
          do {
            if (r && t.isSameNode(r)) return true;
            r = r.parentNode || r.host;
          } while (r);
        }
        return false;
      }
      function N$1(t) {
        return H(t).getComputedStyle(t);
      }
      function Wt(t) {
        return ["table", "td", "th"].indexOf(C(t)) >= 0;
      }
      function I$1(t) {
        return ((Q(t) ? t.ownerDocument : t.document) || window.document).documentElement;
      }
      function ge(t) {
        return C(t) === "html" ? t : t.assignedSlot || t.parentNode || (Pe(t) ? t.host : null) || I$1(t);
      }
      function at(t) {
        return !B(t) || N$1(t).position === "fixed" ? null : t.offsetParent;
      }
      function Bt(t) {
        var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
        if (n && B(t)) {
          var r = N$1(t);
          if (r.position === "fixed") return null;
        }
        var o2 = ge(t);
        for (Pe(o2) && (o2 = o2.host); B(o2) && ["html", "body"].indexOf(C(o2)) < 0; ) {
          var i = N$1(o2);
          if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none") return o2;
          o2 = o2.parentNode;
        }
        return null;
      }
      function se(t) {
        for (var e = H(t), n = at(t); n && Wt(n) && N$1(n).position === "static"; ) n = at(n);
        return n && (C(n) === "html" || C(n) === "body" && N$1(n).position === "static") ? e : n || Bt(t) || e;
      }
      function Le(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function fe(t, e, n) {
        return X$1(t, ve(e, n));
      }
      function St(t, e, n) {
        var r = fe(t, e, n);
        return r > n ? n : r;
      }
      function st() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function ft(t) {
        return Object.assign({}, st(), t);
      }
      function ct(t, e) {
        return e.reduce(function(n, r) {
          return n[r] = t, n;
        }, {});
      }
      var Tt = function(t, e) {
        return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, ft(typeof t != "number" ? t : ct(t, G));
      };
      function Ht(t) {
        var e, n = t.state, r = t.name, o2 = t.options, i = n.elements.arrow, a2 = n.modifiersData.popperOffsets, s2 = q(n.placement), f2 = Le(s2), c2 = [P$1, W].indexOf(s2) >= 0, u2 = c2 ? "height" : "width";
        if (!(!i || !a2)) {
          var m2 = Tt(o2.padding, n), v2 = ke(i), l2 = f2 === "y" ? E$1 : P$1, h2 = f2 === "y" ? R : W, p2 = n.rects.reference[u2] + n.rects.reference[f2] - a2[f2] - n.rects.popper[u2], g = a2[f2] - n.rects.reference[f2], x2 = se(i), y = x2 ? f2 === "y" ? x2.clientHeight || 0 : x2.clientWidth || 0 : 0, $ = p2 / 2 - g / 2, d2 = m2[l2], b2 = y - v2[u2] - m2[h2], w2 = y / 2 - v2[u2] / 2 + $, O2 = fe(d2, w2, b2), j = f2;
          n.modifiersData[r] = (e = {}, e[j] = O2, e.centerOffset = O2 - w2, e);
        }
      }
      function Ct(t) {
        var e = t.state, n = t.options, r = n.element, o2 = r === void 0 ? "[data-popper-arrow]" : r;
        o2 != null && (typeof o2 == "string" && (o2 = e.elements.popper.querySelector(o2), !o2) || !it(e.elements.popper, o2) || (e.elements.arrow = o2));
      }
      var pt = { name: "arrow", enabled: true, phase: "main", fn: Ht, effect: Ct, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
      function te(t) {
        return t.split("-")[1];
      }
      var qt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Vt(t) {
        var e = t.x, n = t.y, r = window, o2 = r.devicePixelRatio || 1;
        return { x: Z(e * o2) / o2 || 0, y: Z(n * o2) / o2 || 0 };
      }
      function ut(t) {
        var e, n = t.popper, r = t.popperRect, o2 = t.placement, i = t.variation, a2 = t.offsets, s2 = t.position, f2 = t.gpuAcceleration, c2 = t.adaptive, u2 = t.roundOffsets, m2 = t.isFixed, v2 = a2.x, l2 = v2 === void 0 ? 0 : v2, h2 = a2.y, p2 = h2 === void 0 ? 0 : h2, g = typeof u2 == "function" ? u2({ x: l2, y: p2 }) : { x: l2, y: p2 };
        l2 = g.x, p2 = g.y;
        var x2 = a2.hasOwnProperty("x"), y = a2.hasOwnProperty("y"), $ = P$1, d2 = E$1, b2 = window;
        if (c2) {
          var w2 = se(n), O2 = "clientHeight", j = "clientWidth";
          if (w2 === H(n) && (w2 = I$1(n), N$1(w2).position !== "static" && s2 === "absolute" && (O2 = "scrollHeight", j = "scrollWidth")), w2 = w2, o2 === E$1 || (o2 === P$1 || o2 === W) && i === J) {
            d2 = R;
            var A2 = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.height : w2[O2];
            p2 -= A2 - r.height, p2 *= f2 ? 1 : -1;
          }
          if (o2 === P$1 || (o2 === E$1 || o2 === R) && i === J) {
            $ = W;
            var k = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.width : w2[j];
            l2 -= k - r.width, l2 *= f2 ? 1 : -1;
          }
        }
        var D2 = Object.assign({ position: s2 }, c2 && qt), S2 = u2 === true ? Vt({ x: l2, y: p2 }) : { x: l2, y: p2 };
        if (l2 = S2.x, p2 = S2.y, f2) {
          var L;
          return Object.assign({}, D2, (L = {}, L[d2] = y ? "0" : "", L[$] = x2 ? "0" : "", L.transform = (b2.devicePixelRatio || 1) <= 1 ? "translate(" + l2 + "px, " + p2 + "px)" : "translate3d(" + l2 + "px, " + p2 + "px, 0)", L));
        }
        return Object.assign({}, D2, (e = {}, e[d2] = y ? p2 + "px" : "", e[$] = x2 ? l2 + "px" : "", e.transform = "", e));
      }
      function Nt(t) {
        var e = t.state, n = t.options, r = n.gpuAcceleration, o2 = r === void 0 ? true : r, i = n.adaptive, a2 = i === void 0 ? true : i, s2 = n.roundOffsets, f2 = s2 === void 0 ? true : s2, c2 = { placement: q(e.placement), variation: te(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o2, isFixed: e.options.strategy === "fixed" };
        e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ut(Object.assign({}, c2, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a2, roundOffsets: f2 })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ut(Object.assign({}, c2, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f2 })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
      }
      var Me = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Nt, data: {} }, ye = { passive: true };
      function It(t) {
        var e = t.state, n = t.instance, r = t.options, o2 = r.scroll, i = o2 === void 0 ? true : o2, a2 = r.resize, s2 = a2 === void 0 ? true : a2, f2 = H(e.elements.popper), c2 = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return i && c2.forEach(function(u2) {
          u2.addEventListener("scroll", n.update, ye);
        }), s2 && f2.addEventListener("resize", n.update, ye), function() {
          i && c2.forEach(function(u2) {
            u2.removeEventListener("scroll", n.update, ye);
          }), s2 && f2.removeEventListener("resize", n.update, ye);
        };
      }
      var Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
      }, effect: It, data: {} }, _t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function be(t) {
        return t.replace(/left|right|bottom|top/g, function(e) {
          return _t[e];
        });
      }
      var zt = { start: "end", end: "start" };
      function lt(t) {
        return t.replace(/start|end/g, function(e) {
          return zt[e];
        });
      }
      function We(t) {
        var e = H(t), n = e.pageXOffset, r = e.pageYOffset;
        return { scrollLeft: n, scrollTop: r };
      }
      function Be(t) {
        return ee(I$1(t)).left + We(t).scrollLeft;
      }
      function Ft(t) {
        var e = H(t), n = I$1(t), r = e.visualViewport, o2 = n.clientWidth, i = n.clientHeight, a2 = 0, s2 = 0;
        return r && (o2 = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a2 = r.offsetLeft, s2 = r.offsetTop)), { width: o2, height: i, x: a2 + Be(t), y: s2 };
      }
      function Ut(t) {
        var e, n = I$1(t), r = We(t), o2 = (e = t.ownerDocument) == null ? void 0 : e.body, i = X$1(n.scrollWidth, n.clientWidth, o2 ? o2.scrollWidth : 0, o2 ? o2.clientWidth : 0), a2 = X$1(n.scrollHeight, n.clientHeight, o2 ? o2.scrollHeight : 0, o2 ? o2.clientHeight : 0), s2 = -r.scrollLeft + Be(t), f2 = -r.scrollTop;
        return N$1(o2 || n).direction === "rtl" && (s2 += X$1(n.clientWidth, o2 ? o2.clientWidth : 0) - i), { width: i, height: a2, x: s2, y: f2 };
      }
      function Se(t) {
        var e = N$1(t), n = e.overflow, r = e.overflowX, o2 = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o2 + r);
      }
      function dt(t) {
        return ["html", "body", "#document"].indexOf(C(t)) >= 0 ? t.ownerDocument.body : B(t) && Se(t) ? t : dt(ge(t));
      }
      function ce(t, e) {
        var n;
        e === void 0 && (e = []);
        var r = dt(t), o2 = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = H(r), a2 = o2 ? [i].concat(i.visualViewport || [], Se(r) ? r : []) : r, s2 = e.concat(a2);
        return o2 ? s2 : s2.concat(ce(ge(a2)));
      }
      function Te(t) {
        return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
      }
      function Xt(t) {
        var e = ee(t);
        return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
      }
      function ht(t, e) {
        return e === je ? Te(Ft(t)) : Q(e) ? Xt(e) : Te(Ut(I$1(t)));
      }
      function Yt(t) {
        var e = ce(ge(t)), n = ["absolute", "fixed"].indexOf(N$1(t).position) >= 0, r = n && B(t) ? se(t) : t;
        return Q(r) ? e.filter(function(o2) {
          return Q(o2) && it(o2, r) && C(o2) !== "body";
        }) : [];
      }
      function Gt(t, e, n) {
        var r = e === "clippingParents" ? Yt(t) : [].concat(e), o2 = [].concat(r, [n]), i = o2[0], a2 = o2.reduce(function(s2, f2) {
          var c2 = ht(t, f2);
          return s2.top = X$1(c2.top, s2.top), s2.right = ve(c2.right, s2.right), s2.bottom = ve(c2.bottom, s2.bottom), s2.left = X$1(c2.left, s2.left), s2;
        }, ht(t, i));
        return a2.width = a2.right - a2.left, a2.height = a2.bottom - a2.top, a2.x = a2.left, a2.y = a2.top, a2;
      }
      function mt(t) {
        var e = t.reference, n = t.element, r = t.placement, o2 = r ? q(r) : null, i = r ? te(r) : null, a2 = e.x + e.width / 2 - n.width / 2, s2 = e.y + e.height / 2 - n.height / 2, f2;
        switch (o2) {
          case E$1:
            f2 = { x: a2, y: e.y - n.height };
            break;
          case R:
            f2 = { x: a2, y: e.y + e.height };
            break;
          case W:
            f2 = { x: e.x + e.width, y: s2 };
            break;
          case P$1:
            f2 = { x: e.x - n.width, y: s2 };
            break;
          default:
            f2 = { x: e.x, y: e.y };
        }
        var c2 = o2 ? Le(o2) : null;
        if (c2 != null) {
          var u2 = c2 === "y" ? "height" : "width";
          switch (i) {
            case U$1:
              f2[c2] = f2[c2] - (e[u2] / 2 - n[u2] / 2);
              break;
            case J:
              f2[c2] = f2[c2] + (e[u2] / 2 - n[u2] / 2);
              break;
          }
        }
        return f2;
      }
      function ne(t, e) {
        e === void 0 && (e = {});
        var n = e, r = n.placement, o2 = r === void 0 ? t.placement : r, i = n.boundary, a2 = i === void 0 ? Xe : i, s2 = n.rootBoundary, f2 = s2 === void 0 ? je : s2, c2 = n.elementContext, u2 = c2 === void 0 ? K : c2, m2 = n.altBoundary, v2 = m2 === void 0 ? false : m2, l2 = n.padding, h2 = l2 === void 0 ? 0 : l2, p2 = ft(typeof h2 != "number" ? h2 : ct(h2, G)), g = u2 === K ? Ye : K, x2 = t.rects.popper, y = t.elements[v2 ? g : u2], $ = Gt(Q(y) ? y : y.contextElement || I$1(t.elements.popper), a2, f2), d2 = ee(t.elements.reference), b2 = mt({ reference: d2, element: x2, placement: o2 }), w2 = Te(Object.assign({}, x2, b2)), O2 = u2 === K ? w2 : d2, j = { top: $.top - O2.top + p2.top, bottom: O2.bottom - $.bottom + p2.bottom, left: $.left - O2.left + p2.left, right: O2.right - $.right + p2.right }, A2 = t.modifiersData.offset;
        if (u2 === K && A2) {
          var k = A2[o2];
          Object.keys(j).forEach(function(D2) {
            var S2 = [W, R].indexOf(D2) >= 0 ? 1 : -1, L = [E$1, R].indexOf(D2) >= 0 ? "y" : "x";
            j[D2] += k[L] * S2;
          });
        }
        return j;
      }
      function Jt(t, e) {
        e === void 0 && (e = {});
        var n = e, r = n.placement, o2 = n.boundary, i = n.rootBoundary, a2 = n.padding, s2 = n.flipVariations, f2 = n.allowedAutoPlacements, c2 = f2 === void 0 ? Ee : f2, u2 = te(r), m2 = u2 ? s2 ? De : De.filter(function(h2) {
          return te(h2) === u2;
        }) : G, v2 = m2.filter(function(h2) {
          return c2.indexOf(h2) >= 0;
        });
        v2.length === 0 && (v2 = m2);
        var l2 = v2.reduce(function(h2, p2) {
          return h2[p2] = ne(t, { placement: p2, boundary: o2, rootBoundary: i, padding: a2 })[q(p2)], h2;
        }, {});
        return Object.keys(l2).sort(function(h2, p2) {
          return l2[h2] - l2[p2];
        });
      }
      function Kt(t) {
        if (q(t) === me) return [];
        var e = be(t);
        return [lt(t), e, lt(e)];
      }
      function Qt(t) {
        var e = t.state, n = t.options, r = t.name;
        if (!e.modifiersData[r]._skip) {
          for (var o2 = n.mainAxis, i = o2 === void 0 ? true : o2, a2 = n.altAxis, s2 = a2 === void 0 ? true : a2, f2 = n.fallbackPlacements, c2 = n.padding, u2 = n.boundary, m2 = n.rootBoundary, v2 = n.altBoundary, l2 = n.flipVariations, h2 = l2 === void 0 ? true : l2, p2 = n.allowedAutoPlacements, g = e.options.placement, x2 = q(g), y = x2 === g, $ = f2 || (y || !h2 ? [be(g)] : Kt(g)), d2 = [g].concat($).reduce(function(z, V) {
            return z.concat(q(V) === me ? Jt(e, { placement: V, boundary: u2, rootBoundary: m2, padding: c2, flipVariations: h2, allowedAutoPlacements: p2 }) : V);
          }, []), b2 = e.rects.reference, w2 = e.rects.popper, O2 = new Map(), j = true, A2 = d2[0], k = 0; k < d2.length; k++) {
            var D2 = d2[k], S2 = q(D2), L = te(D2) === U$1, re = [E$1, R].indexOf(S2) >= 0, oe = re ? "width" : "height", M2 = ne(e, { placement: D2, boundary: u2, rootBoundary: m2, altBoundary: v2, padding: c2 }), T2 = re ? L ? W : P$1 : L ? R : E$1;
            b2[oe] > w2[oe] && (T2 = be(T2));
            var pe = be(T2), _2 = [];
            if (i && _2.push(M2[S2] <= 0), s2 && _2.push(M2[T2] <= 0, M2[pe] <= 0), _2.every(function(z) {
              return z;
            })) {
              A2 = D2, j = false;
              break;
            }
            O2.set(D2, _2);
          }
          if (j) for (var ue = h2 ? 3 : 1, xe = function(z) {
            var V = d2.find(function(de) {
              var ae = O2.get(de);
              if (ae) return ae.slice(0, z).every(function(Y2) {
                return Y2;
              });
            });
            if (V) return A2 = V, "break";
          }, ie = ue; ie > 0; ie--) {
            var le = xe(ie);
            if (le === "break") break;
          }
          e.placement !== A2 && (e.modifiersData[r]._skip = true, e.placement = A2, e.reset = true);
        }
      }
      var vt = { name: "flip", enabled: true, phase: "main", fn: Qt, requiresIfExists: ["offset"], data: { _skip: false } };
      function gt(t, e, n) {
        return n === void 0 && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
      }
      function yt(t) {
        return [E$1, W, R, P$1].some(function(e) {
          return t[e] >= 0;
        });
      }
      function Zt(t) {
        var e = t.state, n = t.name, r = e.rects.reference, o2 = e.rects.popper, i = e.modifiersData.preventOverflow, a2 = ne(e, { elementContext: "reference" }), s2 = ne(e, { altBoundary: true }), f2 = gt(a2, r), c2 = gt(s2, o2, i), u2 = yt(f2), m2 = yt(c2);
        e.modifiersData[n] = { referenceClippingOffsets: f2, popperEscapeOffsets: c2, isReferenceHidden: u2, hasPopperEscaped: m2 }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u2, "data-popper-escaped": m2 });
      }
      var bt = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zt };
      function en(t, e, n) {
        var r = q(t), o2 = [P$1, E$1].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n, a2 = i[0], s2 = i[1];
        return a2 = a2 || 0, s2 = (s2 || 0) * o2, [P$1, W].indexOf(r) >= 0 ? { x: s2, y: a2 } : { x: a2, y: s2 };
      }
      function tn(t) {
        var e = t.state, n = t.options, r = t.name, o2 = n.offset, i = o2 === void 0 ? [0, 0] : o2, a2 = Ee.reduce(function(u2, m2) {
          return u2[m2] = en(m2, e.rects, i), u2;
        }, {}), s2 = a2[e.placement], f2 = s2.x, c2 = s2.y;
        e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f2, e.modifiersData.popperOffsets.y += c2), e.modifiersData[r] = a2;
      }
      var wt = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tn };
      function nn(t) {
        var e = t.state, n = t.name;
        e.modifiersData[n] = mt({ reference: e.rects.reference, element: e.rects.popper, placement: e.placement });
      }
      var He = { name: "popperOffsets", enabled: true, phase: "read", fn: nn, data: {} };
      function rn(t) {
        return t === "x" ? "y" : "x";
      }
      function on(t) {
        var e = t.state, n = t.options, r = t.name, o2 = n.mainAxis, i = o2 === void 0 ? true : o2, a2 = n.altAxis, s2 = a2 === void 0 ? false : a2, f2 = n.boundary, c2 = n.rootBoundary, u2 = n.altBoundary, m2 = n.padding, v2 = n.tether, l2 = v2 === void 0 ? true : v2, h2 = n.tetherOffset, p2 = h2 === void 0 ? 0 : h2, g = ne(e, { boundary: f2, rootBoundary: c2, padding: m2, altBoundary: u2 }), x2 = q(e.placement), y = te(e.placement), $ = !y, d2 = Le(x2), b2 = rn(d2), w2 = e.modifiersData.popperOffsets, O2 = e.rects.reference, j = e.rects.popper, A2 = typeof p2 == "function" ? p2(Object.assign({}, e.rects, { placement: e.placement })) : p2, k = typeof A2 == "number" ? { mainAxis: A2, altAxis: A2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, A2), D2 = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, S2 = { x: 0, y: 0 };
        if (w2) {
          if (i) {
            var L, re = d2 === "y" ? E$1 : P$1, oe = d2 === "y" ? R : W, M2 = d2 === "y" ? "height" : "width", T2 = w2[d2], pe = T2 + g[re], _2 = T2 - g[oe], ue = l2 ? -j[M2] / 2 : 0, xe = y === U$1 ? O2[M2] : j[M2], ie = y === U$1 ? -j[M2] : -O2[M2], le = e.elements.arrow, z = l2 && le ? ke(le) : { width: 0, height: 0 }, V = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : st(), de = V[re], ae = V[oe], Y2 = fe(0, O2[M2], z[M2]), jt = $ ? O2[M2] / 2 - ue - Y2 - de - k.mainAxis : xe - Y2 - de - k.mainAxis, Dt = $ ? -O2[M2] / 2 + ue + Y2 + ae + k.mainAxis : ie + Y2 + ae + k.mainAxis, Oe = e.elements.arrow && se(e.elements.arrow), Et = Oe ? d2 === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (L = D2 == null ? void 0 : D2[d2]) != null ? L : 0, Pt = T2 + jt - Ce - Et, At = T2 + Dt - Ce, qe = fe(l2 ? ve(pe, Pt) : pe, T2, l2 ? X$1(_2, At) : _2);
            w2[d2] = qe, S2[d2] = qe - T2;
          }
          if (s2) {
            var Ve, kt = d2 === "x" ? E$1 : P$1, Lt = d2 === "x" ? R : W, F2 = w2[b2], he = b2 === "y" ? "height" : "width", Ne = F2 + g[kt], Ie = F2 - g[Lt], $e = [E$1, P$1].indexOf(x2) !== -1, _e = (Ve = D2 == null ? void 0 : D2[b2]) != null ? Ve : 0, ze = $e ? Ne : F2 - O2[he] - j[he] - _e + k.altAxis, Fe = $e ? F2 + O2[he] + j[he] - _e - k.altAxis : Ie, Ue = l2 && $e ? St(ze, F2, Fe) : fe(l2 ? ze : Ne, F2, l2 ? Fe : Ie);
            w2[b2] = Ue, S2[b2] = Ue - F2;
          }
          e.modifiersData[r] = S2;
        }
      }
      var xt = { name: "preventOverflow", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"] };
      function an(t) {
        return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
      }
      function sn(t) {
        return t === H(t) || !B(t) ? We(t) : an(t);
      }
      function fn(t) {
        var e = t.getBoundingClientRect(), n = Z(e.width) / t.offsetWidth || 1, r = Z(e.height) / t.offsetHeight || 1;
        return n !== 1 || r !== 1;
      }
      function cn(t, e, n) {
        n === void 0 && (n = false);
        var r = B(e), o2 = B(e) && fn(e), i = I$1(e), a2 = ee(t, o2), s2 = { scrollLeft: 0, scrollTop: 0 }, f2 = { x: 0, y: 0 };
        return (r || !r && !n) && ((C(e) !== "body" || Se(i)) && (s2 = sn(e)), B(e) ? (f2 = ee(e, true), f2.x += e.clientLeft, f2.y += e.clientTop) : i && (f2.x = Be(i))), { x: a2.left + s2.scrollLeft - f2.x, y: a2.top + s2.scrollTop - f2.y, width: a2.width, height: a2.height };
      }
      function pn(t) {
        var e = new Map(), n = new Set(), r = [];
        t.forEach(function(i) {
          e.set(i.name, i);
        });
        function o2(i) {
          n.add(i.name);
          var a2 = [].concat(i.requires || [], i.requiresIfExists || []);
          a2.forEach(function(s2) {
            if (!n.has(s2)) {
              var f2 = e.get(s2);
              f2 && o2(f2);
            }
          }), r.push(i);
        }
        return t.forEach(function(i) {
          n.has(i.name) || o2(i);
        }), r;
      }
      function un(t) {
        var e = pn(t);
        return ot.reduce(function(n, r) {
          return n.concat(e.filter(function(o2) {
            return o2.phase === r;
          }));
        }, []);
      }
      function ln(t) {
        var e;
        return function() {
          return e || (e = new Promise(function(n) {
            Promise.resolve().then(function() {
              e = void 0, n(t());
            });
          })), e;
        };
      }
      function dn(t) {
        var e = t.reduce(function(n, r) {
          var o2 = n[r.name];
          return n[r.name] = o2 ? Object.assign({}, o2, r, { options: Object.assign({}, o2.options, r.options), data: Object.assign({}, o2.data, r.data) }) : r, n;
        }, {});
        return Object.keys(e).map(function(n) {
          return e[n];
        });
      }
      var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function $t() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some(function(r) {
          return !(r && typeof r.getBoundingClientRect == "function");
        });
      }
      function we(t) {
        t === void 0 && (t = {});
        var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o2 = e.defaultOptions, i = o2 === void 0 ? Ot : o2;
        return function(a2, s2, f2) {
          f2 === void 0 && (f2 = i);
          var c2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ot, i), modifiersData: {}, elements: { reference: a2, popper: s2 }, attributes: {}, styles: {} }, u2 = [], m2 = false, v2 = { state: c2, setOptions: function(p2) {
            var g = typeof p2 == "function" ? p2(c2.options) : p2;
            h2(), c2.options = Object.assign({}, i, c2.options, g), c2.scrollParents = { reference: Q(a2) ? ce(a2) : a2.contextElement ? ce(a2.contextElement) : [], popper: ce(s2) };
            var x2 = un(dn([].concat(r, c2.options.modifiers)));
            return c2.orderedModifiers = x2.filter(function(y) {
              return y.enabled;
            }), l2(), v2.update();
          }, forceUpdate: function() {
            if (!m2) {
              var p2 = c2.elements, g = p2.reference, x2 = p2.popper;
              if ($t(g, x2)) {
                c2.rects = { reference: cn(g, se(x2), c2.options.strategy === "fixed"), popper: ke(x2) }, c2.reset = false, c2.placement = c2.options.placement, c2.orderedModifiers.forEach(function(j) {
                  return c2.modifiersData[j.name] = Object.assign({}, j.data);
                });
                for (var y = 0; y < c2.orderedModifiers.length; y++) {
                  if (c2.reset === true) {
                    c2.reset = false, y = -1;
                    continue;
                  }
                  var $ = c2.orderedModifiers[y], d2 = $.fn, b2 = $.options, w2 = b2 === void 0 ? {} : b2, O2 = $.name;
                  typeof d2 == "function" && (c2 = d2({ state: c2, options: w2, name: O2, instance: v2 }) || c2);
                }
              }
            }
          }, update: ln(function() {
            return new Promise(function(p2) {
              v2.forceUpdate(), p2(c2);
            });
          }), destroy: function() {
            h2(), m2 = true;
          } };
          if (!$t(a2, s2)) return v2;
          v2.setOptions(f2).then(function(p2) {
            !m2 && f2.onFirstUpdate && f2.onFirstUpdate(p2);
          });
          function l2() {
            c2.orderedModifiers.forEach(function(p2) {
              var g = p2.name, x2 = p2.options, y = x2 === void 0 ? {} : x2, $ = p2.effect;
              if (typeof $ == "function") {
                var d2 = $({ state: c2, name: g, instance: v2, options: y }), b2 = function() {
                };
                u2.push(d2 || b2);
              }
            });
          }
          function h2() {
            u2.forEach(function(p2) {
              return p2();
            }), u2 = [];
          }
          return v2;
        };
      }
      we();
      var mn = [Re, He, Me, Ae];
      we({ defaultModifiers: mn });
      var gn = [Re, He, Me, Ae, wt, vt, xt, pt, bt], yn = we({ defaultModifiers: gn });
      const popperArrowProps = buildProps({
        arrowOffset: {
          type: Number,
          default: 5
        }
      });
      const POSITIONING_STRATEGIES = ["fixed", "absolute"];
      const popperCoreConfigProps = buildProps({
        boundariesPadding: {
          type: Number,
          default: 0
        },
        fallbackPlacements: {
          type: definePropType(Array),
          default: void 0
        },
        gpuAcceleration: {
          type: Boolean,
          default: true
        },
        offset: {
          type: Number,
          default: 12
        },
        placement: {
          type: String,
          values: Ee,
          default: "bottom"
        },
        popperOptions: {
          type: definePropType(Object),
          default: () => ({})
        },
        strategy: {
          type: String,
          values: POSITIONING_STRATEGIES,
          default: "absolute"
        }
      });
      const popperContentProps = buildProps({
        ...popperCoreConfigProps,
        ...popperArrowProps,
        id: String,
        style: {
          type: definePropType([String, Array, Object])
        },
        className: {
          type: definePropType([String, Array, Object])
        },
        effect: {
          type: definePropType(String),
          default: "dark"
        },
        visible: Boolean,
        enterable: {
          type: Boolean,
          default: true
        },
        pure: Boolean,
        focusOnShow: Boolean,
        trapping: Boolean,
        popperClass: {
          type: definePropType([String, Array, Object])
        },
        popperStyle: {
          type: definePropType([String, Array, Object])
        },
        referenceEl: {
          type: definePropType(Object)
        },
        triggerTargetEl: {
          type: definePropType(Object)
        },
        stopPopperMouseEvent: {
          type: Boolean,
          default: true
        },
        virtualTriggering: Boolean,
        zIndex: Number,
        ...useAriaProps(["ariaLabel"]),
        loop: Boolean
      });
      const popperContentEmits = {
        mouseenter: (evt) => evt instanceof MouseEvent,
        mouseleave: (evt) => evt instanceof MouseEvent,
        focus: () => true,
        blur: () => true,
        close: () => true
      };
      const usePopperContentFocusTrap = (props, emit) => {
        const trapped = vue.ref(false);
        const focusStartRef = vue.ref();
        const onFocusAfterTrapped = () => {
          emit("focus");
        };
        const onFocusAfterReleased = (event) => {
          var _a2;
          if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) !== "pointer") {
            focusStartRef.value = "first";
            emit("blur");
          }
        };
        const onFocusInTrap = (event) => {
          if (props.visible && !trapped.value) {
            if (event.target) {
              focusStartRef.value = event.target;
            }
            trapped.value = true;
          }
        };
        const onFocusoutPrevented = (event) => {
          if (!props.trapping) {
            if (event.detail.focusReason === "pointer") {
              event.preventDefault();
            }
            trapped.value = false;
          }
        };
        const onReleaseRequested = () => {
          trapped.value = false;
          emit("close");
        };
        return {
          focusStartRef,
          trapped,
          onFocusAfterReleased,
          onFocusAfterTrapped,
          onFocusInTrap,
          onFocusoutPrevented,
          onReleaseRequested
        };
      };
      const buildPopperOptions = (props, modifiers = []) => {
        const { placement, strategy, popperOptions } = props;
        const options = {
          placement,
          strategy,
          ...popperOptions,
          modifiers: [...genModifiers(props), ...modifiers]
        };
        deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
        return options;
      };
      const unwrapMeasurableEl = ($el) => {
        if (!isClient)
          return;
        return unrefElement($el);
      };
      function genModifiers(options) {
        const { offset: offset2, gpuAcceleration, fallbackPlacements } = options;
        return [
          {
            name: "offset",
            options: {
              offset: [0, offset2 != null ? offset2 : 12]
            }
          },
          {
            name: "preventOverflow",
            options: {
              padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }
            }
          },
          {
            name: "flip",
            options: {
              padding: 5,
              fallbackPlacements
            }
          },
          {
            name: "computeStyles",
            options: {
              gpuAcceleration
            }
          }
        ];
      }
      function deriveExtraModifiers(options, modifiers) {
        if (modifiers) {
          options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
        }
      }
      const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
        const stateUpdater = {
          name: "updateState",
          enabled: true,
          phase: "write",
          fn: ({ state }) => {
            const derivedState = deriveState(state);
            Object.assign(states.value, derivedState);
          },
          requires: ["computeStyles"]
        };
        const options = vue.computed(() => {
          const { onFirstUpdate, placement, strategy, modifiers } = vue.unref(opts);
          return {
            onFirstUpdate,
            placement: placement || "bottom",
            strategy: strategy || "absolute",
            modifiers: [
              ...modifiers || [],
              stateUpdater,
              { name: "applyStyles", enabled: false }
            ]
          };
        });
        const instanceRef = vue.shallowRef();
        const states = vue.ref({
          styles: {
            popper: {
              position: vue.unref(options).strategy,
              left: "0",
              top: "0"
            },
            arrow: {
              position: "absolute"
            }
          },
          attributes: {}
        });
        const destroy = () => {
          if (!instanceRef.value)
            return;
          instanceRef.value.destroy();
          instanceRef.value = void 0;
        };
        vue.watch(options, (newOptions) => {
          const instance = vue.unref(instanceRef);
          if (instance) {
            instance.setOptions(newOptions);
          }
        }, {
          deep: true
        });
        vue.watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
          destroy();
          if (!referenceElement || !popperElement)
            return;
          instanceRef.value = yn(referenceElement, popperElement, vue.unref(options));
        });
        vue.onBeforeUnmount(() => {
          destroy();
        });
        return {
          state: vue.computed(() => {
            var _a2;
            return { ...((_a2 = vue.unref(instanceRef)) == null ? void 0 : _a2.state) || {} };
          }),
          styles: vue.computed(() => vue.unref(states).styles),
          attributes: vue.computed(() => vue.unref(states).attributes),
          update: () => {
            var _a2;
            return (_a2 = vue.unref(instanceRef)) == null ? void 0 : _a2.update();
          },
          forceUpdate: () => {
            var _a2;
            return (_a2 = vue.unref(instanceRef)) == null ? void 0 : _a2.forceUpdate();
          },
          instanceRef: vue.computed(() => vue.unref(instanceRef))
        };
      };
      function deriveState(state) {
        const elements = Object.keys(state.elements);
        const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
        const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
        return {
          styles,
          attributes
        };
      }
      const DEFAULT_ARROW_OFFSET = 0;
      const usePopperContent = (props) => {
        const { popperInstanceRef, contentRef, triggerRef, role } = vue.inject(POPPER_INJECTION_KEY, void 0);
        const arrowRef = vue.ref();
        const arrowOffset = vue.computed(() => props.arrowOffset);
        const eventListenerModifier = vue.computed(() => {
          return {
            name: "eventListeners",
            enabled: !!props.visible
          };
        });
        const arrowModifier = vue.computed(() => {
          var _a2;
          const arrowEl = vue.unref(arrowRef);
          const offset2 = (_a2 = vue.unref(arrowOffset)) != null ? _a2 : DEFAULT_ARROW_OFFSET;
          return {
            name: "arrow",
            enabled: !isUndefined$2(arrowEl),
            options: {
              element: arrowEl,
              padding: offset2
            }
          };
        });
        const options = vue.computed(() => {
          return {
            onFirstUpdate: () => {
              update();
            },
            ...buildPopperOptions(props, [
              vue.unref(arrowModifier),
              vue.unref(eventListenerModifier)
            ])
          };
        });
        const computedReference = vue.computed(() => unwrapMeasurableEl(props.referenceEl) || vue.unref(triggerRef));
        const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
        vue.watch(instanceRef, (instance) => popperInstanceRef.value = instance, {
          flush: "sync"
        });
        vue.onMounted(() => {
          vue.watch(() => {
            var _a2, _b;
            return (_b = (_a2 = vue.unref(computedReference)) == null ? void 0 : _a2.getBoundingClientRect) == null ? void 0 : _b.call(_a2);
          }, () => {
            update();
          });
        });
        return {
          attributes,
          arrowRef,
          contentRef,
          instanceRef,
          state,
          styles,
          role,
          forceUpdate,
          update
        };
      };
      const usePopperContentDOM = (props, {
        attributes,
        styles,
        role
      }) => {
        const { nextZIndex } = useZIndex();
        const ns = useNamespace("popper");
        const contentAttrs = vue.computed(() => vue.unref(attributes).popper);
        const contentZIndex = vue.ref(isNumber$1(props.zIndex) ? props.zIndex : nextZIndex());
        const contentClass = vue.computed(() => [
          ns.b(),
          ns.is("pure", props.pure),
          ns.is(props.effect),
          props.popperClass
        ]);
        const contentStyle = vue.computed(() => {
          return [
            { zIndex: vue.unref(contentZIndex) },
            vue.unref(styles).popper,
            props.popperStyle || {}
          ];
        });
        const ariaModal = vue.computed(() => role.value === "dialog" ? "false" : void 0);
        const arrowStyle = vue.computed(() => vue.unref(styles).arrow || {});
        const updateZIndex = () => {
          contentZIndex.value = isNumber$1(props.zIndex) ? props.zIndex : nextZIndex();
        };
        return {
          ariaModal,
          arrowStyle,
          contentAttrs,
          contentClass,
          contentStyle,
          contentZIndex,
          updateZIndex
        };
      };
      const __default__$d = vue.defineComponent({
        name: "ElPopperContent"
      });
      const _sfc_main$j = vue.defineComponent({
        ...__default__$d,
        props: popperContentProps,
        emits: popperContentEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const {
            focusStartRef,
            trapped,
            onFocusAfterReleased,
            onFocusAfterTrapped,
            onFocusInTrap,
            onFocusoutPrevented,
            onReleaseRequested
          } = usePopperContentFocusTrap(props, emit);
          const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
          const {
            ariaModal,
            arrowStyle,
            contentAttrs,
            contentClass,
            contentStyle,
            updateZIndex
          } = usePopperContentDOM(props, {
            styles,
            attributes,
            role
          });
          const formItemContext = vue.inject(formItemContextKey, void 0);
          vue.provide(POPPER_CONTENT_INJECTION_KEY, {
            arrowStyle,
            arrowRef
          });
          if (formItemContext) {
            vue.provide(formItemContextKey, {
              ...formItemContext,
              addInputId: NOOP,
              removeInputId: NOOP
            });
          }
          let triggerTargetAriaStopWatch = void 0;
          const updatePopper = (shouldUpdateZIndex = true) => {
            update();
            shouldUpdateZIndex && updateZIndex();
          };
          const togglePopperAlive = () => {
            updatePopper(false);
            if (props.visible && props.focusOnShow) {
              trapped.value = true;
            } else if (props.visible === false) {
              trapped.value = false;
            }
          };
          vue.onMounted(() => {
            vue.watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
              triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
              triggerTargetAriaStopWatch = void 0;
              const el = vue.unref(triggerTargetEl || contentRef.value);
              const prevEl = vue.unref(prevTriggerTargetEl || contentRef.value);
              if (isElement(el)) {
                triggerTargetAriaStopWatch = vue.watch([role, () => props.ariaLabel, ariaModal, () => props.id], (watches) => {
                  ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
                    isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
                  });
                }, { immediate: true });
              }
              if (prevEl !== el && isElement(prevEl)) {
                ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
                  prevEl.removeAttribute(key);
                });
              }
            }, { immediate: true });
            vue.watch(() => props.visible, togglePopperAlive, { immediate: true });
          });
          vue.onBeforeUnmount(() => {
            triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
            triggerTargetAriaStopWatch = void 0;
          });
          expose({
            popperContentRef: contentRef,
            popperInstanceRef: instanceRef,
            updatePopper,
            contentStyle
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
              ref_key: "contentRef",
              ref: contentRef
            }, vue.unref(contentAttrs), {
              style: vue.unref(contentStyle),
              class: vue.unref(contentClass),
              tabindex: "-1",
              onMouseenter: (e) => _ctx.$emit("mouseenter", e),
              onMouseleave: (e) => _ctx.$emit("mouseleave", e)
            }), [
              vue.createVNode(vue.unref(ElFocusTrap), {
                loop: _ctx.loop,
                trapped: vue.unref(trapped),
                "trap-on-focus-in": true,
                "focus-trap-el": vue.unref(contentRef),
                "focus-start-el": vue.unref(focusStartRef),
                onFocusAfterTrapped: vue.unref(onFocusAfterTrapped),
                onFocusAfterReleased: vue.unref(onFocusAfterReleased),
                onFocusin: vue.unref(onFocusInTrap),
                onFocusoutPrevented: vue.unref(onFocusoutPrevented),
                onReleaseRequested: vue.unref(onReleaseRequested)
              }, {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["loop", "trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
            ], 16, ["onMouseenter", "onMouseleave"]);
          };
        }
      });
      var ElPopperContent = _export_sfc(_sfc_main$j, [["__file", "content.vue"]]);
      const ElPopper = withInstall(Popper);
      const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
      const teleportProps = buildProps({
        to: {
          type: definePropType([String, Object]),
          required: true
        },
        disabled: Boolean
      });
      const useTooltipContentProps = buildProps({
        ...useDelayedToggleProps,
        ...popperContentProps,
        appendTo: {
          type: teleportProps.to.type
        },
        content: {
          type: String,
          default: ""
        },
        rawContent: Boolean,
        persistent: Boolean,
        visible: {
          type: definePropType(Boolean),
          default: null
        },
        transition: String,
        teleported: {
          type: Boolean,
          default: true
        },
        disabled: Boolean,
        ...useAriaProps(["ariaLabel"])
      });
      const useTooltipTriggerProps = buildProps({
        ...popperTriggerProps,
        disabled: Boolean,
        trigger: {
          type: definePropType([String, Array]),
          default: "hover"
        },
        triggerKeys: {
          type: definePropType(Array),
          default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space]
        },
        focusOnTarget: Boolean
      });
      const _prop = buildProp({
        type: definePropType(Boolean),
        default: null
      });
      const _event = buildProp({
        type: definePropType(Function)
      });
      const createModelToggleComposable = (name) => {
        const updateEventKey = `update:${name}`;
        const updateEventKeyRaw = `onUpdate:${name}`;
        const useModelToggleEmits2 = [updateEventKey];
        const useModelToggleProps2 = {
          [name]: _prop,
          [updateEventKeyRaw]: _event
        };
        const useModelToggle2 = ({
          indicator,
          toggleReason,
          shouldHideWhenRouteChanges,
          shouldProceed,
          onShow,
          onHide
        }) => {
          const instance = vue.getCurrentInstance();
          const { emit } = instance;
          const props = instance.props;
          const hasUpdateHandler = vue.computed(() => isFunction$2(props[updateEventKeyRaw]));
          const isModelBindingAbsent = vue.computed(() => props[name] === null);
          const doShow = (event) => {
            if (indicator.value === true) {
              return;
            }
            indicator.value = true;
            if (toggleReason) {
              toggleReason.value = event;
            }
            if (isFunction$2(onShow)) {
              onShow(event);
            }
          };
          const doHide = (event) => {
            if (indicator.value === false) {
              return;
            }
            indicator.value = false;
            if (toggleReason) {
              toggleReason.value = event;
            }
            if (isFunction$2(onHide)) {
              onHide(event);
            }
          };
          const show = (event) => {
            if (props.disabled === true || isFunction$2(shouldProceed) && !shouldProceed())
              return;
            const shouldEmit = hasUpdateHandler.value && isClient;
            if (shouldEmit) {
              emit(updateEventKey, true);
            }
            if (isModelBindingAbsent.value || !shouldEmit) {
              doShow(event);
            }
          };
          const hide = (event) => {
            if (props.disabled === true || !isClient)
              return;
            const shouldEmit = hasUpdateHandler.value && isClient;
            if (shouldEmit) {
              emit(updateEventKey, false);
            }
            if (isModelBindingAbsent.value || !shouldEmit) {
              doHide(event);
            }
          };
          const onChange = (val) => {
            if (!isBoolean(val))
              return;
            if (props.disabled && val) {
              if (hasUpdateHandler.value) {
                emit(updateEventKey, false);
              }
            } else if (indicator.value !== val) {
              if (val) {
                doShow();
              } else {
                doHide();
              }
            }
          };
          const toggle = () => {
            if (indicator.value) {
              hide();
            } else {
              show();
            }
          };
          vue.watch(() => props[name], onChange);
          if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
            vue.watch(() => ({
              ...instance.proxy.$route
            }), () => {
              if (shouldHideWhenRouteChanges.value && indicator.value) {
                hide();
              }
            });
          }
          vue.onMounted(() => {
            onChange(props[name]);
          });
          return {
            hide,
            show,
            toggle,
            hasUpdateHandler
          };
        };
        return {
          useModelToggle: useModelToggle2,
          useModelToggleProps: useModelToggleProps2,
          useModelToggleEmits: useModelToggleEmits2
        };
      };
      const {
        useModelToggleProps: useTooltipModelToggleProps,
        useModelToggleEmits: useTooltipModelToggleEmits,
        useModelToggle: useTooltipModelToggle
      } = createModelToggleComposable("visible");
      const useTooltipProps = buildProps({
        ...popperProps,
        ...useTooltipModelToggleProps,
        ...useTooltipContentProps,
        ...useTooltipTriggerProps,
        ...popperArrowProps,
        showArrow: {
          type: Boolean,
          default: true
        }
      });
      const tooltipEmits = [
        ...useTooltipModelToggleEmits,
        "before-show",
        "before-hide",
        "show",
        "hide",
        "open",
        "close"
      ];
      const isTriggerType = (trigger, type) => {
        if (isArray$2(trigger)) {
          return trigger.includes(type);
        }
        return trigger === type;
      };
      const whenTrigger = (trigger, type, handler) => {
        return (e) => {
          isTriggerType(vue.unref(trigger), type) && handler(e);
        };
      };
      const __default__$c = vue.defineComponent({
        name: "ElTooltipTrigger"
      });
      const _sfc_main$i = vue.defineComponent({
        ...__default__$c,
        props: useTooltipTriggerProps,
        setup(__props, { expose }) {
          const props = __props;
          const ns = useNamespace("tooltip");
          const { controlled, id, open, onOpen, onClose, onToggle } = vue.inject(TOOLTIP_INJECTION_KEY, void 0);
          const triggerRef = vue.ref(null);
          const stopWhenControlledOrDisabled = () => {
            if (vue.unref(controlled) || props.disabled) {
              return true;
            }
          };
          const trigger = vue.toRef(props, "trigger");
          const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", (e) => {
            onOpen(e);
            if (props.focusOnTarget && e.target) {
              vue.nextTick(() => {
                focusElement(e.target, { preventScroll: true });
              });
            }
          }));
          const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
          const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
            if (e.button === 0) {
              onToggle(e);
            }
          }));
          const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
          const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
          const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
            e.preventDefault();
            onToggle(e);
          }));
          const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
            const code = getEventCode(e);
            if (props.triggerKeys.includes(code)) {
              e.preventDefault();
              onToggle(e);
            }
          });
          expose({
            triggerRef
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.unref(ElPopperTrigger), {
              id: vue.unref(id),
              "virtual-ref": _ctx.virtualRef,
              open: vue.unref(open),
              "virtual-triggering": _ctx.virtualTriggering,
              class: vue.normalizeClass(vue.unref(ns).e("trigger")),
              onBlur: vue.unref(onBlur),
              onClick: vue.unref(onClick),
              onContextmenu: vue.unref(onContextMenu),
              onFocus: vue.unref(onFocus),
              onMouseenter: vue.unref(onMouseenter),
              onMouseleave: vue.unref(onMouseleave),
              onKeydown: vue.unref(onKeydown)
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
          };
        }
      });
      var ElTooltipTrigger = _export_sfc(_sfc_main$i, [["__file", "trigger.vue"]]);
      const _sfc_main$h = vue.defineComponent({
        __name: "teleport",
        props: teleportProps,
        setup(__props) {
          return (_ctx, _cache) => {
            return _ctx.disabled ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.Teleport, {
              key: 1,
              to: _ctx.to
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 8, ["to"]));
          };
        }
      });
      var Teleport = _export_sfc(_sfc_main$h, [["__file", "teleport.vue"]]);
      const ElTeleport = withInstall(Teleport);
      const usePopperContainerId = () => {
        const namespace = useGetDerivedNamespace();
        const idInjection = useIdInjection();
        const id = vue.computed(() => {
          return `${namespace.value}-popper-container-${idInjection.prefix}`;
        });
        const selector = vue.computed(() => `#${id.value}`);
        return {
          id,
          selector
        };
      };
      const createContainer = (id) => {
        const container = document.createElement("div");
        container.id = id;
        document.body.appendChild(container);
        return container;
      };
      const usePopperContainer = () => {
        const { id, selector } = usePopperContainerId();
        vue.onBeforeMount(() => {
          if (!isClient)
            return;
          if (!document.body.querySelector(selector.value)) {
            createContainer(id.value);
          }
        });
        return {
          id,
          selector
        };
      };
      const castArray = (arr) => {
        if (!arr && arr !== 0)
          return [];
        return isArray$2(arr) ? arr : [arr];
      };
      const __default__$b = vue.defineComponent({
        name: "ElTooltipContent",
        inheritAttrs: false
      });
      const _sfc_main$g = vue.defineComponent({
        ...__default__$b,
        props: useTooltipContentProps,
        setup(__props, { expose }) {
          const props = __props;
          const { selector } = usePopperContainerId();
          const ns = useNamespace("tooltip");
          const contentRef = vue.ref();
          const popperContentRef = computedEager(() => {
            var _a2;
            return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
          });
          let stopHandle;
          const {
            controlled,
            id,
            open,
            trigger,
            onClose,
            onOpen,
            onShow,
            onHide,
            onBeforeShow,
            onBeforeHide
          } = vue.inject(TOOLTIP_INJECTION_KEY, void 0);
          const transitionClass = vue.computed(() => {
            return props.transition || `${ns.namespace.value}-fade-in-linear`;
          });
          const persistentRef = vue.computed(() => {
            return props.persistent;
          });
          vue.onBeforeUnmount(() => {
            stopHandle == null ? void 0 : stopHandle();
          });
          const shouldRender = vue.computed(() => {
            return vue.unref(persistentRef) ? true : vue.unref(open);
          });
          const shouldShow = vue.computed(() => {
            return props.disabled ? false : vue.unref(open);
          });
          const appendTo = vue.computed(() => {
            return props.appendTo || selector.value;
          });
          const contentStyle = vue.computed(() => {
            var _a2;
            return (_a2 = props.style) != null ? _a2 : {};
          });
          const ariaHidden = vue.ref(true);
          const onTransitionLeave = () => {
            onHide();
            isFocusInsideContent() && focusElement(document.body, { preventScroll: true });
            ariaHidden.value = true;
          };
          const stopWhenControlled = () => {
            if (vue.unref(controlled))
              return true;
          };
          const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
            if (props.enterable && isTriggerType(vue.unref(trigger), "hover")) {
              onOpen();
            }
          });
          const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
            if (isTriggerType(vue.unref(trigger), "hover")) {
              onClose();
            }
          });
          const onBeforeEnter = () => {
            var _a2, _b;
            (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
            onBeforeShow == null ? void 0 : onBeforeShow();
          };
          const onBeforeLeave = () => {
            onBeforeHide == null ? void 0 : onBeforeHide();
          };
          const onAfterShow = () => {
            onShow();
          };
          const onBlur = () => {
            if (!props.virtualTriggering) {
              onClose();
            }
          };
          const isFocusInsideContent = (event) => {
            var _a2;
            const popperContent = (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
            const activeElement = (event == null ? void 0 : event.relatedTarget) || document.activeElement;
            return popperContent == null ? void 0 : popperContent.contains(activeElement);
          };
          vue.watch(() => vue.unref(open), (val) => {
            if (!val) {
              stopHandle == null ? void 0 : stopHandle();
            } else {
              ariaHidden.value = false;
              stopHandle = onClickOutside(popperContentRef, () => {
                if (vue.unref(controlled))
                  return;
                const needClose = castArray(vue.unref(trigger)).every((item) => {
                  return item !== "hover" && item !== "focus";
                });
                if (needClose) {
                  onClose();
                }
              }, { detectIframe: true });
            }
          }, {
            flush: "post"
          });
          vue.watch(() => props.content, () => {
            var _a2, _b;
            (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
          });
          expose({
            contentRef,
            isFocusInsideContent
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.unref(ElTeleport), {
              disabled: !_ctx.teleported,
              to: vue.unref(appendTo)
            }, {
              default: vue.withCtx(() => [
                vue.unref(shouldRender) || !ariaHidden.value ? (vue.openBlock(), vue.createBlock(vue.Transition, {
                  key: 0,
                  name: vue.unref(transitionClass),
                  appear: !vue.unref(persistentRef),
                  onAfterLeave: onTransitionLeave,
                  onBeforeEnter,
                  onAfterEnter: onAfterShow,
                  onBeforeLeave,
                  persisted: ""
                }, {
                  default: vue.withCtx(() => [
                    vue.withDirectives(vue.createVNode(vue.unref(ElPopperContent), vue.mergeProps({
                      id: vue.unref(id),
                      ref_key: "contentRef",
                      ref: contentRef
                    }, _ctx.$attrs, {
                      "aria-label": _ctx.ariaLabel,
                      "aria-hidden": ariaHidden.value,
                      "boundaries-padding": _ctx.boundariesPadding,
                      "fallback-placements": _ctx.fallbackPlacements,
                      "gpu-acceleration": _ctx.gpuAcceleration,
                      offset: _ctx.offset,
                      placement: _ctx.placement,
                      "popper-options": _ctx.popperOptions,
                      "arrow-offset": _ctx.arrowOffset,
                      strategy: _ctx.strategy,
                      effect: _ctx.effect,
                      enterable: _ctx.enterable,
                      pure: _ctx.pure,
                      "popper-class": _ctx.popperClass,
                      "popper-style": [_ctx.popperStyle, vue.unref(contentStyle)],
                      "reference-el": _ctx.referenceEl,
                      "trigger-target-el": _ctx.triggerTargetEl,
                      visible: vue.unref(shouldShow),
                      "z-index": _ctx.zIndex,
                      loop: _ctx.loop,
                      onMouseenter: vue.unref(onContentEnter),
                      onMouseleave: vue.unref(onContentLeave),
                      onBlur,
                      onClose: vue.unref(onClose)
                    }), {
                      default: vue.withCtx(() => [
                        vue.renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "arrow-offset", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "loop", "onMouseenter", "onMouseleave", "onClose"]), [
                      [vue.vShow, vue.unref(shouldShow)]
                    ])
                  ]),
                  _: 3
                }, 8, ["name", "appear"])) : vue.createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 8, ["disabled", "to"]);
          };
        }
      });
      var ElTooltipContent = _export_sfc(_sfc_main$g, [["__file", "content.vue"]]);
      const __default__$a = vue.defineComponent({
        name: "ElTooltip"
      });
      const _sfc_main$f = vue.defineComponent({
        ...__default__$a,
        props: useTooltipProps,
        emits: tooltipEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          usePopperContainer();
          const ns = useNamespace("tooltip");
          const id = useId();
          const popperRef = vue.ref();
          const contentRef = vue.ref();
          const updatePopper = () => {
            var _a2;
            const popperComponent = vue.unref(popperRef);
            if (popperComponent) {
              (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
            }
          };
          const open = vue.ref(false);
          const toggleReason = vue.ref();
          const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
            indicator: open,
            toggleReason
          });
          const { onOpen, onClose } = useDelayedToggle({
            showAfter: vue.toRef(props, "showAfter"),
            hideAfter: vue.toRef(props, "hideAfter"),
            autoClose: vue.toRef(props, "autoClose"),
            open: show,
            close: hide
          });
          const controlled = vue.computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
          const kls = vue.computed(() => {
            return [ns.b(), props.popperClass];
          });
          vue.provide(TOOLTIP_INJECTION_KEY, {
            controlled,
            id,
            open: vue.readonly(open),
            trigger: vue.toRef(props, "trigger"),
            onOpen,
            onClose,
            onToggle: (event) => {
              if (vue.unref(open)) {
                onClose(event);
              } else {
                onOpen(event);
              }
            },
            onShow: () => {
              emit("show", toggleReason.value);
            },
            onHide: () => {
              emit("hide", toggleReason.value);
            },
            onBeforeShow: () => {
              emit("before-show", toggleReason.value);
            },
            onBeforeHide: () => {
              emit("before-hide", toggleReason.value);
            },
            updatePopper
          });
          vue.watch(() => props.disabled, (disabled) => {
            if (disabled && open.value) {
              open.value = false;
            }
          });
          const isFocusInsideContent = (event) => {
            var _a2;
            return (_a2 = contentRef.value) == null ? void 0 : _a2.isFocusInsideContent(event);
          };
          vue.onDeactivated(() => open.value && hide());
          expose({
            popperRef,
            contentRef,
            isFocusInsideContent,
            updatePopper,
            onOpen,
            onClose,
            hide
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.unref(ElPopper), {
              ref_key: "popperRef",
              ref: popperRef,
              role: _ctx.role
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(ElTooltipTrigger, {
                  disabled: _ctx.disabled,
                  trigger: _ctx.trigger,
                  "trigger-keys": _ctx.triggerKeys,
                  "virtual-ref": _ctx.virtualRef,
                  "virtual-triggering": _ctx.virtualTriggering,
                  "focus-on-target": _ctx.focusOnTarget
                }, {
                  default: vue.withCtx(() => [
                    _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 3
                }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering", "focus-on-target"]),
                vue.createVNode(ElTooltipContent, {
                  ref_key: "contentRef",
                  ref: contentRef,
                  "aria-label": _ctx.ariaLabel,
                  "boundaries-padding": _ctx.boundariesPadding,
                  content: _ctx.content,
                  disabled: _ctx.disabled,
                  effect: _ctx.effect,
                  enterable: _ctx.enterable,
                  "fallback-placements": _ctx.fallbackPlacements,
                  "hide-after": _ctx.hideAfter,
                  "gpu-acceleration": _ctx.gpuAcceleration,
                  offset: _ctx.offset,
                  persistent: _ctx.persistent,
                  "popper-class": vue.unref(kls),
                  "popper-style": _ctx.popperStyle,
                  placement: _ctx.placement,
                  "popper-options": _ctx.popperOptions,
                  "arrow-offset": _ctx.arrowOffset,
                  pure: _ctx.pure,
                  "raw-content": _ctx.rawContent,
                  "reference-el": _ctx.referenceEl,
                  "trigger-target-el": _ctx.triggerTargetEl,
                  "show-after": _ctx.showAfter,
                  strategy: _ctx.strategy,
                  teleported: _ctx.teleported,
                  transition: _ctx.transition,
                  "virtual-triggering": _ctx.virtualTriggering,
                  "z-index": _ctx.zIndex,
                  "append-to": _ctx.appendTo,
                  loop: _ctx.loop
                }, {
                  default: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "content", {}, () => [
                      _ctx.rawContent ? (vue.openBlock(), vue.createElementBlock("span", {
                        key: 0,
                        innerHTML: _ctx.content
                      }, null, 8, ["innerHTML"])) : (vue.openBlock(), vue.createElementBlock("span", { key: 1 }, vue.toDisplayString(_ctx.content), 1))
                    ]),
                    _ctx.showArrow ? (vue.openBlock(), vue.createBlock(vue.unref(ElPopperArrow), { key: 0 })) : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 3
                }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "arrow-offset", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to", "loop"])
              ]),
              _: 3
            }, 8, ["role"]);
          };
        }
      });
      var Tooltip = _export_sfc(_sfc_main$f, [["__file", "tooltip.vue"]]);
      const ElTooltip = withInstall(Tooltip);
      const buttonGroupContextKey = Symbol("buttonGroupContextKey");
      const useDeprecated = ({ from: from2, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
        vue.watch(() => vue.unref(condition), (val) => {
        }, {
          immediate: true
        });
      };
      const useButton = (props, emit) => {
        useDeprecated({
          from: "type.text",
          replacement: "link",
          version: "3.0.0",
          scope: "props",
          ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
        }, vue.computed(() => props.type === "text"));
        const buttonGroupContext = vue.inject(buttonGroupContextKey, void 0);
        const globalConfig2 = useGlobalConfig("button");
        const { form } = useFormItem();
        const _size = useFormSize(vue.computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
        const _disabled = useFormDisabled();
        const _ref = vue.ref();
        const slots = vue.useSlots();
        const _type = vue.computed(() => {
          var _a2;
          return props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || ((_a2 = globalConfig2.value) == null ? void 0 : _a2.type) || "";
        });
        const autoInsertSpace = vue.computed(() => {
          var _a2, _b, _c;
          return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c : false;
        });
        const _plain = vue.computed(() => {
          var _a2, _b, _c;
          return (_c = (_b = props.plain) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.plain) != null ? _c : false;
        });
        const _round = vue.computed(() => {
          var _a2, _b, _c;
          return (_c = (_b = props.round) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.round) != null ? _c : false;
        });
        const _text = vue.computed(() => {
          var _a2, _b, _c;
          return (_c = (_b = props.text) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.text) != null ? _c : false;
        });
        const _props = vue.computed(() => {
          if (props.tag === "button") {
            return {
              ariaDisabled: _disabled.value || props.loading,
              disabled: _disabled.value || props.loading,
              autofocus: props.autofocus,
              type: props.nativeType
            };
          }
          return {};
        });
        const shouldAddSpace = vue.computed(() => {
          var _a2;
          const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
          if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
            const slot = defaultSlot[0];
            if ((slot == null ? void 0 : slot.type) === vue.Text) {
              const text = slot.children;
              return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(text.trim());
            }
          }
          return false;
        });
        const handleClick = (evt) => {
          if (_disabled.value || props.loading) {
            evt.stopPropagation();
            return;
          }
          if (props.nativeType === "reset") {
            form == null ? void 0 : form.resetFields();
          }
          emit("click", evt);
        };
        return {
          _disabled,
          _size,
          _type,
          _ref,
          _props,
          _plain,
          _round,
          _text,
          shouldAddSpace,
          handleClick
        };
      };
      const buttonTypes = [
        "default",
        "primary",
        "success",
        "warning",
        "info",
        "danger",
        "text",
        ""
      ];
      const buttonNativeTypes = ["button", "submit", "reset"];
      const buttonProps = buildProps({
        size: useSizeProp,
        disabled: Boolean,
        type: {
          type: String,
          values: buttonTypes,
          default: ""
        },
        icon: {
          type: iconPropType
        },
        nativeType: {
          type: String,
          values: buttonNativeTypes,
          default: "button"
        },
        loading: Boolean,
        loadingIcon: {
          type: iconPropType,
          default: () => loading_default
        },
        plain: {
          type: Boolean,
          default: void 0
        },
        text: {
          type: Boolean,
          default: void 0
        },
        link: Boolean,
        bg: Boolean,
        autofocus: Boolean,
        round: {
          type: Boolean,
          default: void 0
        },
        circle: Boolean,
        color: String,
        dark: Boolean,
        autoInsertSpace: {
          type: Boolean,
          default: void 0
        },
        tag: {
          type: definePropType([String, Object]),
          default: "button"
        }
      });
      const buttonEmits = {
        click: (evt) => evt instanceof MouseEvent
      };
      function bound01(n, max2) {
        if (isOnePointZero(n)) {
          n = "100%";
        }
        var isPercent = isPercentage(n);
        n = max2 === 360 ? n : Math.min(max2, Math.max(0, parseFloat(n)));
        if (isPercent) {
          n = parseInt(String(n * max2), 10) / 100;
        }
        if (Math.abs(n - max2) < 1e-6) {
          return 1;
        }
        if (max2 === 360) {
          n = (n < 0 ? n % max2 + max2 : n % max2) / parseFloat(String(max2));
        } else {
          n = n % max2 / parseFloat(String(max2));
        }
        return n;
      }
      function clamp01(val) {
        return Math.min(1, Math.max(0, val));
      }
      function isOnePointZero(n) {
        return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
      }
      function isPercentage(n) {
        return typeof n === "string" && n.indexOf("%") !== -1;
      }
      function boundAlpha(a2) {
        a2 = parseFloat(a2);
        if (isNaN(a2) || a2 < 0 || a2 > 1) {
          a2 = 1;
        }
        return a2;
      }
      function convertToPercentage(n) {
        if (n <= 1) {
          return "".concat(Number(n) * 100, "%");
        }
        return n;
      }
      function pad2(c2) {
        return c2.length === 1 ? "0" + c2 : String(c2);
      }
      function rgbToRgb(r, g, b2) {
        return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b2, 255) * 255
        };
      }
      function rgbToHsl(r, g, b2) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b2 = bound01(b2, 255);
        var max2 = Math.max(r, g, b2);
        var min2 = Math.min(r, g, b2);
        var h2 = 0;
        var s2 = 0;
        var l2 = (max2 + min2) / 2;
        if (max2 === min2) {
          s2 = 0;
          h2 = 0;
        } else {
          var d2 = max2 - min2;
          s2 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
          switch (max2) {
            case r:
              h2 = (g - b2) / d2 + (g < b2 ? 6 : 0);
              break;
            case g:
              h2 = (b2 - r) / d2 + 2;
              break;
            case b2:
              h2 = (r - g) / d2 + 4;
              break;
          }
          h2 /= 6;
        }
        return { h: h2, s: s2, l: l2 };
      }
      function hue2rgb(p2, q2, t) {
        if (t < 0) {
          t += 1;
        }
        if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p2 + (q2 - p2) * (6 * t);
        }
        if (t < 1 / 2) {
          return q2;
        }
        if (t < 2 / 3) {
          return p2 + (q2 - p2) * (2 / 3 - t) * 6;
        }
        return p2;
      }
      function hslToRgb(h2, s2, l2) {
        var r;
        var g;
        var b2;
        h2 = bound01(h2, 360);
        s2 = bound01(s2, 100);
        l2 = bound01(l2, 100);
        if (s2 === 0) {
          g = l2;
          b2 = l2;
          r = l2;
        } else {
          var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
          var p2 = 2 * l2 - q2;
          r = hue2rgb(p2, q2, h2 + 1 / 3);
          g = hue2rgb(p2, q2, h2);
          b2 = hue2rgb(p2, q2, h2 - 1 / 3);
        }
        return { r: r * 255, g: g * 255, b: b2 * 255 };
      }
      function rgbToHsv(r, g, b2) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b2 = bound01(b2, 255);
        var max2 = Math.max(r, g, b2);
        var min2 = Math.min(r, g, b2);
        var h2 = 0;
        var v2 = max2;
        var d2 = max2 - min2;
        var s2 = max2 === 0 ? 0 : d2 / max2;
        if (max2 === min2) {
          h2 = 0;
        } else {
          switch (max2) {
            case r:
              h2 = (g - b2) / d2 + (g < b2 ? 6 : 0);
              break;
            case g:
              h2 = (b2 - r) / d2 + 2;
              break;
            case b2:
              h2 = (r - g) / d2 + 4;
              break;
          }
          h2 /= 6;
        }
        return { h: h2, s: s2, v: v2 };
      }
      function hsvToRgb(h2, s2, v2) {
        h2 = bound01(h2, 360) * 6;
        s2 = bound01(s2, 100);
        v2 = bound01(v2, 100);
        var i = Math.floor(h2);
        var f2 = h2 - i;
        var p2 = v2 * (1 - s2);
        var q2 = v2 * (1 - f2 * s2);
        var t = v2 * (1 - (1 - f2) * s2);
        var mod2 = i % 6;
        var r = [v2, q2, p2, p2, t, v2][mod2];
        var g = [t, v2, v2, q2, p2, p2][mod2];
        var b2 = [p2, p2, t, v2, v2, q2][mod2];
        return { r: r * 255, g: g * 255, b: b2 * 255 };
      }
      function rgbToHex(r, g, b2, allow3Char) {
        var hex = [
          pad2(Math.round(r).toString(16)),
          pad2(Math.round(g).toString(16)),
          pad2(Math.round(b2).toString(16))
        ];
        if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }
        return hex.join("");
      }
      function rgbaToHex(r, g, b2, a2, allow4Char) {
        var hex = [
          pad2(Math.round(r).toString(16)),
          pad2(Math.round(g).toString(16)),
          pad2(Math.round(b2).toString(16)),
          pad2(convertDecimalToHex(a2))
        ];
        if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
        }
        return hex.join("");
      }
      function convertDecimalToHex(d2) {
        return Math.round(parseFloat(d2) * 255).toString(16);
      }
      function convertHexToDecimal(h2) {
        return parseIntFromHex(h2) / 255;
      }
      function parseIntFromHex(val) {
        return parseInt(val, 16);
      }
      function numberInputToObject(color) {
        return {
          r: color >> 16,
          g: (color & 65280) >> 8,
          b: color & 255
        };
      }
      var names = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      function inputToRGB(color) {
        var rgb = { r: 0, g: 0, b: 0 };
        var a2 = 1;
        var s2 = null;
        var v2 = null;
        var l2 = null;
        var ok = false;
        var format2 = false;
        if (typeof color === "string") {
          color = stringInputToObject(color);
        }
        if (typeof color === "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s2 = convertToPercentage(color.s);
            v2 = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s2, v2);
            ok = true;
            format2 = "hsv";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s2 = convertToPercentage(color.s);
            l2 = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s2, l2);
            ok = true;
            format2 = "hsl";
          }
          if (Object.prototype.hasOwnProperty.call(color, "a")) {
            a2 = color.a;
          }
        }
        a2 = boundAlpha(a2);
        return {
          ok,
          format: color.format || format2,
          r: Math.min(255, Math.max(rgb.r, 0)),
          g: Math.min(255, Math.max(rgb.g, 0)),
          b: Math.min(255, Math.max(rgb.b, 0)),
          a: a2
        };
      }
      var CSS_INTEGER = "[-\\+]?\\d+%?";
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
      var matchers = {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
      function stringInputToObject(color) {
        color = color.trim().toLowerCase();
        if (color.length === 0) {
          return false;
        }
        var named = false;
        if (names[color]) {
          color = names[color];
          named = true;
        } else if (color === "transparent") {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }
        var match = matchers.rgb.exec(color);
        if (match) {
          return { r: match[1], g: match[2], b: match[3] };
        }
        match = matchers.rgba.exec(color);
        if (match) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        match = matchers.hsl.exec(color);
        if (match) {
          return { h: match[1], s: match[2], l: match[3] };
        }
        match = matchers.hsla.exec(color);
        if (match) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        match = matchers.hsv.exec(color);
        if (match) {
          return { h: match[1], s: match[2], v: match[3] };
        }
        match = matchers.hsva.exec(color);
        if (match) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        match = matchers.hex8.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
          };
        }
        match = matchers.hex6.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
          };
        }
        match = matchers.hex4.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? "name" : "hex8"
          };
        }
        match = matchers.hex3.exec(color);
        if (match) {
          return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? "name" : "hex"
          };
        }
        return false;
      }
      function isValidCSSUnit(color) {
        return Boolean(matchers.CSS_UNIT.exec(String(color)));
      }
      var TinyColor = (
(function() {
          function TinyColor2(color, opts) {
            if (color === void 0) {
              color = "";
            }
            if (opts === void 0) {
              opts = {};
            }
            var _a2;
            if (color instanceof TinyColor2) {
              return color;
            }
            if (typeof color === "number") {
              color = numberInputToObject(color);
            }
            this.originalInput = color;
            var rgb = inputToRGB(color);
            this.originalInput = color;
            this.r = rgb.r;
            this.g = rgb.g;
            this.b = rgb.b;
            this.a = rgb.a;
            this.roundA = Math.round(100 * this.a) / 100;
            this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
            this.gradientType = opts.gradientType;
            if (this.r < 1) {
              this.r = Math.round(this.r);
            }
            if (this.g < 1) {
              this.g = Math.round(this.g);
            }
            if (this.b < 1) {
              this.b = Math.round(this.b);
            }
            this.isValid = rgb.ok;
          }
          TinyColor2.prototype.isDark = function() {
            return this.getBrightness() < 128;
          };
          TinyColor2.prototype.isLight = function() {
            return !this.isDark();
          };
          TinyColor2.prototype.getBrightness = function() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
          };
          TinyColor2.prototype.getLuminance = function() {
            var rgb = this.toRgb();
            var R2;
            var G2;
            var B2;
            var RsRGB = rgb.r / 255;
            var GsRGB = rgb.g / 255;
            var BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) {
              R2 = RsRGB / 12.92;
            } else {
              R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            }
            if (GsRGB <= 0.03928) {
              G2 = GsRGB / 12.92;
            } else {
              G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            }
            if (BsRGB <= 0.03928) {
              B2 = BsRGB / 12.92;
            } else {
              B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
          };
          TinyColor2.prototype.getAlpha = function() {
            return this.a;
          };
          TinyColor2.prototype.setAlpha = function(alpha) {
            this.a = boundAlpha(alpha);
            this.roundA = Math.round(100 * this.a) / 100;
            return this;
          };
          TinyColor2.prototype.isMonochrome = function() {
            var s2 = this.toHsl().s;
            return s2 === 0;
          };
          TinyColor2.prototype.toHsv = function() {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
          };
          TinyColor2.prototype.toHsvString = function() {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            var h2 = Math.round(hsv.h * 360);
            var s2 = Math.round(hsv.s * 100);
            var v2 = Math.round(hsv.v * 100);
            return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toHsl = function() {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
          };
          TinyColor2.prototype.toHslString = function() {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            var h2 = Math.round(hsl.h * 360);
            var s2 = Math.round(hsl.s * 100);
            var l2 = Math.round(hsl.l * 100);
            return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toHex = function(allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return rgbToHex(this.r, this.g, this.b, allow3Char);
          };
          TinyColor2.prototype.toHexString = function(allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return "#" + this.toHex(allow3Char);
          };
          TinyColor2.prototype.toHex8 = function(allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
          };
          TinyColor2.prototype.toHex8String = function(allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return "#" + this.toHex8(allow4Char);
          };
          TinyColor2.prototype.toHexShortString = function(allowShortChar) {
            if (allowShortChar === void 0) {
              allowShortChar = false;
            }
            return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
          };
          TinyColor2.prototype.toRgb = function() {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a
            };
          };
          TinyColor2.prototype.toRgbString = function() {
            var r = Math.round(this.r);
            var g = Math.round(this.g);
            var b2 = Math.round(this.b);
            return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b2, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b2, ", ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toPercentageRgb = function() {
            var fmt = function(x2) {
              return "".concat(Math.round(bound01(x2, 255) * 100), "%");
            };
            return {
              r: fmt(this.r),
              g: fmt(this.g),
              b: fmt(this.b),
              a: this.a
            };
          };
          TinyColor2.prototype.toPercentageRgbString = function() {
            var rnd = function(x2) {
              return Math.round(bound01(x2, 255) * 100);
            };
            return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toName = function() {
            if (this.a === 0) {
              return "transparent";
            }
            if (this.a < 1) {
              return false;
            }
            var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
            for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
              var _b = _a2[_i], key = _b[0], value = _b[1];
              if (hex === value) {
                return key;
              }
            }
            return false;
          };
          TinyColor2.prototype.toString = function(format2) {
            var formatSet = Boolean(format2);
            format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
            var formattedString = false;
            var hasAlpha = this.a < 1 && this.a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
            if (needsAlphaFormat) {
              if (format2 === "name" && this.a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format2 === "rgb") {
              formattedString = this.toRgbString();
            }
            if (format2 === "prgb") {
              formattedString = this.toPercentageRgbString();
            }
            if (format2 === "hex" || format2 === "hex6") {
              formattedString = this.toHexString();
            }
            if (format2 === "hex3") {
              formattedString = this.toHexString(true);
            }
            if (format2 === "hex4") {
              formattedString = this.toHex8String(true);
            }
            if (format2 === "hex8") {
              formattedString = this.toHex8String();
            }
            if (format2 === "name") {
              formattedString = this.toName();
            }
            if (format2 === "hsl") {
              formattedString = this.toHslString();
            }
            if (format2 === "hsv") {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          };
          TinyColor2.prototype.toNumber = function() {
            return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
          };
          TinyColor2.prototype.clone = function() {
            return new TinyColor2(this.toString());
          };
          TinyColor2.prototype.lighten = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l += amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.brighten = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var rgb = this.toRgb();
            rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
            rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
            rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
            return new TinyColor2(rgb);
          };
          TinyColor2.prototype.darken = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l -= amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.tint = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix("white", amount);
          };
          TinyColor2.prototype.shade = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix("black", amount);
          };
          TinyColor2.prototype.desaturate = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s -= amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.saturate = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s += amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.greyscale = function() {
            return this.desaturate(100);
          };
          TinyColor2.prototype.spin = function(amount) {
            var hsl = this.toHsl();
            var hue = (hsl.h + amount) % 360;
            hsl.h = hue < 0 ? 360 + hue : hue;
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.mix = function(color, amount) {
            if (amount === void 0) {
              amount = 50;
            }
            var rgb1 = this.toRgb();
            var rgb2 = new TinyColor2(color).toRgb();
            var p2 = amount / 100;
            var rgba = {
              r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
              g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
              b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
              a: (rgb2.a - rgb1.a) * p2 + rgb1.a
            };
            return new TinyColor2(rgba);
          };
          TinyColor2.prototype.analogous = function(results, slices) {
            if (results === void 0) {
              results = 6;
            }
            if (slices === void 0) {
              slices = 30;
            }
            var hsl = this.toHsl();
            var part = 360 / slices;
            var ret = [this];
            for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
              hsl.h = (hsl.h + part) % 360;
              ret.push(new TinyColor2(hsl));
            }
            return ret;
          };
          TinyColor2.prototype.complement = function() {
            var hsl = this.toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.monochromatic = function(results) {
            if (results === void 0) {
              results = 6;
            }
            var hsv = this.toHsv();
            var h2 = hsv.h;
            var s2 = hsv.s;
            var v2 = hsv.v;
            var res = [];
            var modification = 1 / results;
            while (results--) {
              res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
              v2 = (v2 + modification) % 1;
            }
            return res;
          };
          TinyColor2.prototype.splitcomplement = function() {
            var hsl = this.toHsl();
            var h2 = hsl.h;
            return [
              this,
              new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
              new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
            ];
          };
          TinyColor2.prototype.onBackground = function(background) {
            var fg = this.toRgb();
            var bg = new TinyColor2(background).toRgb();
            var alpha = fg.a + bg.a * (1 - fg.a);
            return new TinyColor2({
              r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
              g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
              b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
              a: alpha
            });
          };
          TinyColor2.prototype.triad = function() {
            return this.polyad(3);
          };
          TinyColor2.prototype.tetrad = function() {
            return this.polyad(4);
          };
          TinyColor2.prototype.polyad = function(n) {
            var hsl = this.toHsl();
            var h2 = hsl.h;
            var result = [this];
            var increment = 360 / n;
            for (var i = 1; i < n; i++) {
              result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
            }
            return result;
          };
          TinyColor2.prototype.equals = function(color) {
            return this.toRgbString() === new TinyColor2(color).toRgbString();
          };
          return TinyColor2;
        })()
      );
      function darken(color, amount = 20) {
        return color.mix("#141414", amount).toString();
      }
      function useButtonCustomStyle(props) {
        const _disabled = useFormDisabled();
        const ns = useNamespace("button");
        return vue.computed(() => {
          let styles = {};
          let buttonColor = props.color;
          if (buttonColor) {
            const match = buttonColor.match(/var\((.*?)\)/);
            if (match) {
              buttonColor = window.getComputedStyle(window.document.documentElement).getPropertyValue(match[1]);
            }
            const color = new TinyColor(buttonColor);
            const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
            if (props.plain) {
              styles = ns.cssVarBlock({
                "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
                "text-color": buttonColor,
                "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
                "hover-text-color": `var(${ns.cssVarName("color-white")})`,
                "hover-bg-color": buttonColor,
                "hover-border-color": buttonColor,
                "active-bg-color": activeBgColor,
                "active-text-color": `var(${ns.cssVarName("color-white")})`,
                "active-border-color": activeBgColor
              });
              if (_disabled.value) {
                styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
                styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
                styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
              }
            } else {
              const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
              const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
              styles = ns.cssVarBlock({
                "bg-color": buttonColor,
                "text-color": textColor,
                "border-color": buttonColor,
                "hover-bg-color": hoverBgColor,
                "hover-text-color": textColor,
                "hover-border-color": hoverBgColor,
                "active-bg-color": activeBgColor,
                "active-border-color": activeBgColor
              });
              if (_disabled.value) {
                const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
                styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
                styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
                styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
              }
            }
          }
          return styles;
        });
      }
      const __default__$9 = vue.defineComponent({
        name: "ElButton"
      });
      const _sfc_main$e = vue.defineComponent({
        ...__default__$9,
        props: buttonProps,
        emits: buttonEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const buttonStyle = useButtonCustomStyle(props);
          const ns = useNamespace("button");
          const {
            _ref,
            _size,
            _type,
            _disabled,
            _props,
            _plain,
            _round,
            _text,
            shouldAddSpace,
            handleClick
          } = useButton(props, emit);
          const buttonKls = vue.computed(() => [
            ns.b(),
            ns.m(_type.value),
            ns.m(_size.value),
            ns.is("disabled", _disabled.value),
            ns.is("loading", props.loading),
            ns.is("plain", _plain.value),
            ns.is("round", _round.value),
            ns.is("circle", props.circle),
            ns.is("text", _text.value),
            ns.is("link", props.link),
            ns.is("has-bg", props.bg)
          ]);
          expose({
            ref: _ref,
            size: _size,
            type: _type,
            disabled: _disabled,
            shouldAddSpace
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), vue.mergeProps({
              ref_key: "_ref",
              ref: _ref
            }, vue.unref(_props), {
              class: vue.unref(buttonKls),
              style: vue.unref(buttonStyle),
              onClick: vue.unref(handleClick)
            }), {
              default: vue.withCtx(() => [
                _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                    key: 1,
                    class: vue.normalizeClass(vue.unref(ns).is("loading"))
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.loadingIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"]))
                ], 64)) : _ctx.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), { key: 1 }, {
                  default: vue.withCtx(() => [
                    _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon), { key: 0 })) : vue.renderSlot(_ctx.$slots, "icon", { key: 1 })
                  ]),
                  _: 3
                })) : vue.createCommentVNode("v-if", true),
                _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 2,
                  class: vue.normalizeClass({ [vue.unref(ns).em("text", "expand")]: vue.unref(shouldAddSpace) })
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 2)) : vue.createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16, ["class", "style", "onClick"]);
          };
        }
      });
      var Button = _export_sfc(_sfc_main$e, [["__file", "button.vue"]]);
      const buttonGroupProps = {
        size: buttonProps.size,
        type: buttonProps.type
      };
      const __default__$8 = vue.defineComponent({
        name: "ElButtonGroup"
      });
      const _sfc_main$d = vue.defineComponent({
        ...__default__$8,
        props: buttonGroupProps,
        setup(__props) {
          const props = __props;
          vue.provide(buttonGroupContextKey, vue.reactive({
            size: vue.toRef(props, "size"),
            type: vue.toRef(props, "type")
          }));
          const ns = useNamespace("button");
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              class: vue.normalizeClass(vue.unref(ns).b("group"))
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2);
          };
        }
      });
      var ButtonGroup = _export_sfc(_sfc_main$d, [["__file", "button-group.vue"]]);
      const ElButton = withInstall(Button, {
        ButtonGroup
      });
      withNoopInstall(ButtonGroup);
      var PatchFlags = ((PatchFlags2) => {
        PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
        PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
        PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
        PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
        PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
        PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
        PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
        PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
        PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
        PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
        PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
        PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
        PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
        return PatchFlags2;
      })(PatchFlags || {});
      const checkboxProps = {
        modelValue: {
          type: [Number, String, Boolean],
          default: void 0
        },
        label: {
          type: [String, Boolean, Number, Object],
          default: void 0
        },
        value: {
          type: [String, Boolean, Number, Object],
          default: void 0
        },
        indeterminate: Boolean,
        disabled: Boolean,
        checked: Boolean,
        name: {
          type: String,
          default: void 0
        },
        trueValue: {
          type: [String, Number],
          default: void 0
        },
        falseValue: {
          type: [String, Number],
          default: void 0
        },
        trueLabel: {
          type: [String, Number],
          default: void 0
        },
        falseLabel: {
          type: [String, Number],
          default: void 0
        },
        id: {
          type: String,
          default: void 0
        },
        border: Boolean,
        size: useSizeProp,
        tabindex: [String, Number],
        validateEvent: {
          type: Boolean,
          default: true
        },
        ...useAriaProps(["ariaControls"])
      };
      const checkboxEmits = {
        [UPDATE_MODEL_EVENT]: (val) => isString$2(val) || isNumber$1(val) || isBoolean(val),
        change: (val) => isString$2(val) || isNumber$1(val) || isBoolean(val)
      };
      const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
      const useCheckboxDisabled = ({
        model,
        isChecked
      }) => {
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const isLimitDisabled = vue.computed(() => {
          var _a2, _b;
          const max2 = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value;
          const min2 = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
          return !isUndefined$1(max2) && model.value.length >= max2 && !isChecked.value || !isUndefined$1(min2) && model.value.length <= min2 && isChecked.value;
        });
        const isDisabled = useFormDisabled(vue.computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
        return {
          isDisabled,
          isLimitDisabled
        };
      };
      const useCheckboxEvent = (props, {
        model,
        isLimitExceeded,
        hasOwnLabel,
        isDisabled,
        isLabeledByFormItem
      }) => {
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const { formItem } = useFormItem();
        const { emit } = vue.getCurrentInstance();
        function getLabeledValue(value) {
          var _a2, _b, _c, _d;
          return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
        }
        function emitChangeEvent(checked, e) {
          emit(CHANGE_EVENT, getLabeledValue(checked), e);
        }
        function handleChange(e) {
          if (isLimitExceeded.value)
            return;
          const target = e.target;
          emit(CHANGE_EVENT, getLabeledValue(target.checked), e);
        }
        async function onClickRoot(e) {
          if (isLimitExceeded.value)
            return;
          if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
            const eventTargets = e.composedPath();
            const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
            if (!hasLabel) {
              model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
              await vue.nextTick();
              emitChangeEvent(model.value, e);
            }
          }
        }
        const validateEvent = vue.computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
        vue.watch(() => props.modelValue, () => {
          if (validateEvent.value) {
            formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
          }
        });
        return {
          handleChange,
          onClickRoot
        };
      };
      const useCheckboxModel = (props) => {
        const selfModel = vue.ref(false);
        const { emit } = vue.getCurrentInstance();
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const isGroup = vue.computed(() => isUndefined$1(checkboxGroup) === false);
        const isLimitExceeded = vue.ref(false);
        const model = vue.computed({
          get() {
            var _a2, _b;
            return isGroup.value ? (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a2.value : (_b = props.modelValue) != null ? _b : selfModel.value;
          },
          set(val) {
            var _a2, _b;
            if (isGroup.value && isArray$2(val)) {
              isLimitExceeded.value = ((_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
              isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
            } else {
              emit(UPDATE_MODEL_EVENT, val);
              selfModel.value = val;
            }
          }
        });
        return {
          model,
          isGroup,
          isLimitExceeded
        };
      };
      const useCheckboxStatus = (props, slots, { model }) => {
        const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
        const isFocused = vue.ref(false);
        const actualValue = vue.computed(() => {
          if (!isPropAbsent(props.value)) {
            return props.value;
          }
          return props.label;
        });
        const isChecked = vue.computed(() => {
          const value = model.value;
          if (isBoolean(value)) {
            return value;
          } else if (isArray$2(value)) {
            if (isObject$2(actualValue.value)) {
              return value.map(vue.toRaw).some((o2) => isEqual(o2, actualValue.value));
            } else {
              return value.map(vue.toRaw).includes(actualValue.value);
            }
          } else if (value !== null && value !== void 0) {
            return value === props.trueValue || value === props.trueLabel;
          } else {
            return !!value;
          }
        });
        const checkboxButtonSize = useFormSize(vue.computed(() => {
          var _a2;
          return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
        }), {
          prop: true
        });
        const checkboxSize = useFormSize(vue.computed(() => {
          var _a2;
          return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
        }));
        const hasOwnLabel = vue.computed(() => {
          return !!slots.default || !isPropAbsent(actualValue.value);
        });
        return {
          checkboxButtonSize,
          isChecked,
          isFocused,
          checkboxSize,
          hasOwnLabel,
          actualValue
        };
      };
      const useCheckbox = (props, slots) => {
        const { formItem: elFormItem } = useFormItem();
        const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
        const {
          isFocused,
          isChecked,
          checkboxButtonSize,
          checkboxSize,
          hasOwnLabel,
          actualValue
        } = useCheckboxStatus(props, slots, { model });
        const { isDisabled } = useCheckboxDisabled({ model, isChecked });
        const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
          formItemContext: elFormItem,
          disableIdGeneration: hasOwnLabel,
          disableIdManagement: isGroup
        });
        const { handleChange, onClickRoot } = useCheckboxEvent(props, {
          model,
          isLimitExceeded,
          hasOwnLabel,
          isDisabled,
          isLabeledByFormItem
        });
        const setStoreValue = () => {
          function addToStore() {
            var _a2, _b;
            if (isArray$2(model.value) && !model.value.includes(actualValue.value)) {
              model.value.push(actualValue.value);
            } else {
              model.value = (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true;
            }
          }
          props.checked && addToStore();
        };
        setStoreValue();
        useDeprecated({
          from: "label act as value",
          replacement: "value",
          version: "3.0.0",
          scope: "el-checkbox",
          ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, vue.computed(() => isGroup.value && isPropAbsent(props.value)));
        useDeprecated({
          from: "true-label",
          replacement: "true-value",
          version: "3.0.0",
          scope: "el-checkbox",
          ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, vue.computed(() => !!props.trueLabel));
        useDeprecated({
          from: "false-label",
          replacement: "false-value",
          version: "3.0.0",
          scope: "el-checkbox",
          ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, vue.computed(() => !!props.falseLabel));
        return {
          inputId,
          isLabeledByFormItem,
          isChecked,
          isDisabled,
          isFocused,
          checkboxButtonSize,
          checkboxSize,
          hasOwnLabel,
          model,
          actualValue,
          handleChange,
          onClickRoot
        };
      };
      const __default__$7 = vue.defineComponent({
        name: "ElCheckbox"
      });
      const _sfc_main$c = vue.defineComponent({
        ...__default__$7,
        props: checkboxProps,
        emits: checkboxEmits,
        setup(__props) {
          const props = __props;
          const slots = vue.useSlots();
          const {
            inputId,
            isLabeledByFormItem,
            isChecked,
            isDisabled,
            isFocused,
            checkboxSize,
            hasOwnLabel,
            model,
            actualValue,
            handleChange,
            onClickRoot
          } = useCheckbox(props, slots);
          const inputBindings = vue.computed(() => {
            var _a2, _b, _c, _d;
            if (props.trueValue || props.falseValue || props.trueLabel || props.falseLabel) {
              return {
                "true-value": (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true,
                "false-value": (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false
              };
            }
            return {
              value: actualValue.value
            };
          });
          const ns = useNamespace("checkbox");
          const compKls = vue.computed(() => {
            return [
              ns.b(),
              ns.m(checkboxSize.value),
              ns.is("disabled", isDisabled.value),
              ns.is("bordered", props.border),
              ns.is("checked", isChecked.value)
            ];
          });
          const spanKls = vue.computed(() => {
            return [
              ns.e("input"),
              ns.is("disabled", isDisabled.value),
              ns.is("checked", isChecked.value),
              ns.is("indeterminate", props.indeterminate),
              ns.is("focus", isFocused.value)
            ];
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(!vue.unref(hasOwnLabel) && vue.unref(isLabeledByFormItem) ? "span" : "label"), {
              class: vue.normalizeClass(vue.unref(compKls)),
              "aria-controls": _ctx.indeterminate ? _ctx.ariaControls : null,
              onClick: vue.unref(onClickRoot)
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("span", {
                  class: vue.normalizeClass(vue.unref(spanKls))
                }, [
                  vue.withDirectives(vue.createElementVNode("input", vue.mergeProps({
                    id: vue.unref(inputId),
                    "onUpdate:modelValue": ($event) => vue.isRef(model) ? model.value = $event : null,
                    class: vue.unref(ns).e("original"),
                    type: "checkbox",
                    indeterminate: _ctx.indeterminate,
                    name: _ctx.name,
                    tabindex: _ctx.tabindex,
                    disabled: vue.unref(isDisabled)
                  }, vue.unref(inputBindings), {
                    onChange: vue.unref(handleChange),
                    onFocus: ($event) => isFocused.value = true,
                    onBlur: ($event) => isFocused.value = false,
                    onClick: vue.withModifiers(() => {
                    }, ["stop"])
                  }), null, 16, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "onChange", "onFocus", "onBlur", "onClick"]), [
                    [vue.vModelCheckbox, vue.unref(model)]
                  ]),
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass(vue.unref(ns).e("inner"))
                  }, null, 2)
                ], 2),
                vue.unref(hasOwnLabel) ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(ns).e("label"))
                }, [
                  vue.renderSlot(_ctx.$slots, "default"),
                  !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
                  ], 64)) : vue.createCommentVNode("v-if", true)
                ], 2)) : vue.createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 8, ["class", "aria-controls", "onClick"]);
          };
        }
      });
      var Checkbox = _export_sfc(_sfc_main$c, [["__file", "checkbox.vue"]]);
      const __default__$6 = vue.defineComponent({
        name: "ElCheckboxButton"
      });
      const _sfc_main$b = vue.defineComponent({
        ...__default__$6,
        props: checkboxProps,
        emits: checkboxEmits,
        setup(__props) {
          const props = __props;
          const slots = vue.useSlots();
          const {
            isFocused,
            isChecked,
            isDisabled,
            checkboxButtonSize,
            model,
            actualValue,
            handleChange
          } = useCheckbox(props, slots);
          const inputBindings = vue.computed(() => {
            var _a2, _b, _c, _d;
            if (props.trueValue || props.falseValue || props.trueLabel || props.falseLabel) {
              return {
                "true-value": (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true,
                "false-value": (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false
              };
            }
            return {
              value: actualValue.value
            };
          });
          const checkboxGroup = vue.inject(checkboxGroupContextKey, void 0);
          const ns = useNamespace("checkbox");
          const activeStyle = vue.computed(() => {
            var _a2, _b, _c, _d;
            const fillValue = (_b = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a2.value) != null ? _b : "";
            return {
              backgroundColor: fillValue,
              borderColor: fillValue,
              color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
              boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
            };
          });
          const labelKls = vue.computed(() => {
            return [
              ns.b("button"),
              ns.bm("button", checkboxButtonSize.value),
              ns.is("disabled", isDisabled.value),
              ns.is("checked", isChecked.value),
              ns.is("focus", isFocused.value)
            ];
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("label", {
              class: vue.normalizeClass(vue.unref(labelKls))
            }, [
              vue.withDirectives(vue.createElementVNode("input", vue.mergeProps({
                "onUpdate:modelValue": ($event) => vue.isRef(model) ? model.value = $event : null,
                class: vue.unref(ns).be("button", "original"),
                type: "checkbox",
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: vue.unref(isDisabled)
              }, vue.unref(inputBindings), {
                onChange: vue.unref(handleChange),
                onFocus: ($event) => isFocused.value = true,
                onBlur: ($event) => isFocused.value = false,
                onClick: vue.withModifiers(() => {
                }, ["stop"])
              }), null, 16, ["onUpdate:modelValue", "name", "tabindex", "disabled", "onChange", "onFocus", "onBlur", "onClick"]), [
                [vue.vModelCheckbox, vue.unref(model)]
              ]),
              _ctx.$slots.default || _ctx.label ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).be("button", "inner")),
                style: vue.normalizeStyle(vue.unref(isChecked) ? vue.unref(activeStyle) : void 0)
              }, [
                vue.renderSlot(_ctx.$slots, "default", {}, () => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
                ])
              ], 6)) : vue.createCommentVNode("v-if", true)
            ], 2);
          };
        }
      });
      var CheckboxButton = _export_sfc(_sfc_main$b, [["__file", "checkbox-button.vue"]]);
      const checkboxGroupProps = buildProps({
        modelValue: {
          type: definePropType(Array),
          default: () => []
        },
        disabled: Boolean,
        min: Number,
        max: Number,
        size: useSizeProp,
        fill: String,
        textColor: String,
        tag: {
          type: String,
          default: "div"
        },
        validateEvent: {
          type: Boolean,
          default: true
        },
        options: {
          type: definePropType(Array)
        },
        props: {
          type: definePropType(Object),
          default: () => checkboxDefaultProps
        },
        type: {
          type: String,
          values: ["checkbox", "button"],
          default: "checkbox"
        },
        ...useAriaProps(["ariaLabel"])
      });
      const checkboxGroupEmits = {
        [UPDATE_MODEL_EVENT]: (val) => isArray$2(val),
        change: (val) => isArray$2(val)
      };
      const checkboxDefaultProps = {
        label: "label",
        value: "value",
        disabled: "disabled"
      };
      const __default__$5 = vue.defineComponent({
        name: "ElCheckboxGroup"
      });
      const _sfc_main$a = vue.defineComponent({
        ...__default__$5,
        props: checkboxGroupProps,
        emits: checkboxGroupEmits,
        setup(__props, { emit }) {
          const props = __props;
          const ns = useNamespace("checkbox");
          const { formItem } = useFormItem();
          const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
            formItemContext: formItem
          });
          const changeEvent = async (value) => {
            emit(UPDATE_MODEL_EVENT, value);
            await vue.nextTick();
            emit(CHANGE_EVENT, value);
          };
          const modelValue = vue.computed({
            get() {
              return props.modelValue;
            },
            set(val) {
              changeEvent(val);
            }
          });
          const aliasProps = vue.computed(() => ({
            ...checkboxDefaultProps,
            ...props.props
          }));
          const getOptionProps = (option) => {
            const { label, value, disabled } = aliasProps.value;
            const base = {
              label: option[label],
              value: option[value],
              disabled: option[disabled]
            };
            return { ...omit(option, [label, value, disabled]), ...base };
          };
          const optionComponent = vue.computed(() => props.type === "button" ? CheckboxButton : Checkbox);
          vue.provide(checkboxGroupContextKey, {
            ...pick(vue.toRefs(props), [
              "size",
              "min",
              "max",
              "disabled",
              "validateEvent",
              "fill",
              "textColor"
            ]),
            modelValue,
            changeEvent
          });
          vue.watch(() => props.modelValue, (newVal, oldValue) => {
            if (props.validateEvent && !isEqual(newVal, oldValue)) {
              formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
            }
          });
          return (_ctx, _cache) => {
            var _a2;
            return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
              id: vue.unref(groupId),
              class: vue.normalizeClass(vue.unref(ns).b("group")),
              role: "group",
              "aria-label": !vue.unref(isLabeledByFormItem) ? _ctx.ariaLabel || "checkbox-group" : void 0,
              "aria-labelledby": vue.unref(isLabeledByFormItem) ? (_a2 = vue.unref(formItem)) == null ? void 0 : _a2.labelId : void 0
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default", {}, () => [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (item, index) => {
                    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(optionComponent)), vue.mergeProps({ key: index }, getOptionProps(item)), null, 16);
                  }), 128))
                ])
              ]),
              _: 3
            }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
          };
        }
      });
      var CheckboxGroup = _export_sfc(_sfc_main$a, [["__file", "checkbox-group.vue"]]);
      const ElCheckbox = withInstall(Checkbox, {
        CheckboxButton,
        CheckboxGroup
      });
      withNoopInstall(CheckboxButton);
      withNoopInstall(CheckboxGroup);
      const nodeList = new Map();
      if (isClient) {
        let startClick;
        document.addEventListener("mousedown", (e) => startClick = e);
        document.addEventListener("mouseup", (e) => {
          if (startClick) {
            for (const handlers of nodeList.values()) {
              for (const { documentHandler } of handlers) {
                documentHandler(e, startClick);
              }
            }
            startClick = void 0;
          }
        });
      }
      function createDocumentHandler(el, binding) {
        let excludes = [];
        if (isArray$2(binding.arg)) {
          excludes = binding.arg;
        } else if (isElement(binding.arg)) {
          excludes.push(binding.arg);
        }
        return function(mouseup, mousedown) {
          const popperRef = binding.instance.popperRef;
          const mouseUpTarget = mouseup.target;
          const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
          const isBound = !binding || !binding.instance;
          const isTargetExists = !mouseUpTarget || !mouseDownTarget;
          const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
          const isSelf = el === mouseUpTarget;
          const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
          const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
          if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
            return;
          }
          binding.value(mouseup, mousedown);
        };
      }
      const ClickOutside = {
        beforeMount(el, binding) {
          if (!nodeList.has(el)) {
            nodeList.set(el, []);
          }
          nodeList.get(el).push({
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value
          });
        },
        updated(el, binding) {
          if (!nodeList.has(el)) {
            nodeList.set(el, []);
          }
          const handlers = nodeList.get(el);
          const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
          const newHandler = {
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value
          };
          if (oldHandlerIndex >= 0) {
            handlers.splice(oldHandlerIndex, 1, newHandler);
          } else {
            handlers.push(newHandler);
          }
        },
        unmounted(el) {
          nodeList.delete(el);
        }
      };
      const useSameTarget = (handleClick) => {
        if (!handleClick) {
          return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
        }
        let mousedownTarget = false;
        let mouseupTarget = false;
        const onClick = (e) => {
          if (mousedownTarget && mouseupTarget) {
            handleClick(e);
          }
          mousedownTarget = mouseupTarget = false;
        };
        const onMousedown = (e) => {
          mousedownTarget = e.target === e.currentTarget;
        };
        const onMouseup = (e) => {
          mouseupTarget = e.target === e.currentTarget;
        };
        return { onClick, onMousedown, onMouseup };
      };
      const overlayProps = buildProps({
        mask: {
          type: Boolean,
          default: true
        },
        customMaskEvent: Boolean,
        overlayClass: {
          type: definePropType([
            String,
            Array,
            Object
          ])
        },
        zIndex: {
          type: definePropType([String, Number])
        }
      });
      const overlayEmits = {
        click: (evt) => evt instanceof MouseEvent
      };
      const BLOCK = "overlay";
      var Overlay = vue.defineComponent({
        name: "ElOverlay",
        props: overlayProps,
        emits: overlayEmits,
        setup(props, { slots, emit }) {
          const ns = useNamespace(BLOCK);
          const onMaskClick = (e) => {
            emit("click", e);
          };
          const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
          return () => {
            return props.mask ? vue.createVNode("div", {
              class: [ns.b(), props.overlayClass],
              style: {
                zIndex: props.zIndex
              },
              onClick,
              onMousedown,
              onMouseup
            }, [vue.renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : vue.h("div", {
              class: props.overlayClass,
              style: {
                zIndex: props.zIndex,
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px"
              }
            }, [vue.renderSlot(slots, "default")]);
          };
        }
      });
      const ElOverlay = Overlay;
      const dialogInjectionKey = Symbol("dialogInjectionKey");
      const DEFAULT_DIALOG_TRANSITION = "dialog-fade";
      const dialogContentProps = buildProps({
        center: Boolean,
        alignCenter: {
          type: Boolean,
          default: void 0
        },
        closeIcon: {
          type: iconPropType
        },
        draggable: {
          type: Boolean,
          default: void 0
        },
        overflow: {
          type: Boolean,
          default: void 0
        },
        fullscreen: Boolean,
        headerClass: String,
        bodyClass: String,
        footerClass: String,
        showClose: {
          type: Boolean,
          default: true
        },
        title: {
          type: String,
          default: ""
        },
        ariaLevel: {
          type: String,
          default: "2"
        }
      });
      const dialogContentEmits = {
        close: () => true
      };
      const useDraggable = (targetRef, dragRef, draggable, overflow) => {
        const transform = {
          offsetX: 0,
          offsetY: 0
        };
        const isDragging = vue.ref(false);
        const adjustPosition = (moveX, moveY) => {
          if (targetRef.value) {
            const { offsetX, offsetY } = transform;
            const targetRect = targetRef.value.getBoundingClientRect();
            const targetLeft = targetRect.left;
            const targetTop = targetRect.top;
            const targetWidth = targetRect.width;
            const targetHeight = targetRect.height;
            const clientWidth = document.documentElement.clientWidth;
            const clientHeight = document.documentElement.clientHeight;
            const minLeft = -targetLeft + offsetX;
            const minTop = -targetTop + offsetY;
            const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
            const maxTop = clientHeight - targetTop - (targetHeight < clientHeight ? targetHeight : 0) + offsetY;
            if (!(overflow == null ? void 0 : overflow.value)) {
              moveX = Math.min(Math.max(moveX, minLeft), maxLeft);
              moveY = Math.min(Math.max(moveY, minTop), maxTop);
            }
            transform.offsetX = moveX;
            transform.offsetY = moveY;
            targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
          }
        };
        const onMousedown = (e) => {
          const downX = e.clientX;
          const downY = e.clientY;
          const { offsetX, offsetY } = transform;
          const onMousemove = (e2) => {
            if (!isDragging.value) {
              isDragging.value = true;
            }
            const moveX = offsetX + e2.clientX - downX;
            const moveY = offsetY + e2.clientY - downY;
            adjustPosition(moveX, moveY);
          };
          const onMouseup = () => {
            isDragging.value = false;
            document.removeEventListener("mousemove", onMousemove);
            document.removeEventListener("mouseup", onMouseup);
          };
          document.addEventListener("mousemove", onMousemove);
          document.addEventListener("mouseup", onMouseup);
        };
        const onDraggable = () => {
          if (dragRef.value && targetRef.value) {
            dragRef.value.addEventListener("mousedown", onMousedown);
            window.addEventListener("resize", updatePosition);
          }
        };
        const offDraggable = () => {
          if (dragRef.value && targetRef.value) {
            dragRef.value.removeEventListener("mousedown", onMousedown);
            window.removeEventListener("resize", updatePosition);
          }
        };
        const resetPosition = () => {
          transform.offsetX = 0;
          transform.offsetY = 0;
          if (targetRef.value) {
            targetRef.value.style.transform = "";
          }
        };
        const updatePosition = () => {
          const { offsetX, offsetY } = transform;
          adjustPosition(offsetX, offsetY);
        };
        vue.onMounted(() => {
          vue.watchEffect(() => {
            if (draggable.value) {
              onDraggable();
            } else {
              offDraggable();
            }
          });
        });
        vue.onBeforeUnmount(() => {
          offDraggable();
        });
        return {
          isDragging,
          resetPosition,
          updatePosition
        };
      };
      const composeRefs = (...refs) => {
        return (el) => {
          refs.forEach((ref2) => {
            ref2.value = el;
          });
        };
      };
      const __default__$4 = vue.defineComponent({ name: "ElDialogContent" });
      const _sfc_main$9 = vue.defineComponent({
        ...__default__$4,
        props: dialogContentProps,
        emits: dialogContentEmits,
        setup(__props, { expose }) {
          const props = __props;
          const { t } = useLocale();
          const { Close } = CloseComponents;
          const { dialogRef, headerRef, bodyId, ns, style } = vue.inject(dialogInjectionKey);
          const { focusTrapRef } = vue.inject(FOCUS_TRAP_INJECTION_KEY);
          const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
          const draggable = vue.computed(() => !!props.draggable);
          const overflow = vue.computed(() => !!props.overflow);
          const { resetPosition, updatePosition, isDragging } = useDraggable(dialogRef, headerRef, draggable, overflow);
          const dialogKls = vue.computed(() => [
            ns.b(),
            ns.is("fullscreen", props.fullscreen),
            ns.is("draggable", draggable.value),
            ns.is("dragging", isDragging.value),
            ns.is("align-center", !!props.alignCenter),
            { [ns.m("center")]: props.center }
          ]);
          expose({
            resetPosition,
            updatePosition
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              ref: vue.unref(composedDialogRef),
              class: vue.normalizeClass(vue.unref(dialogKls)),
              style: vue.normalizeStyle(vue.unref(style)),
              tabindex: "-1"
            }, [
              vue.createElementVNode("header", {
                ref_key: "headerRef",
                ref: headerRef,
                class: vue.normalizeClass([vue.unref(ns).e("header"), _ctx.headerClass, { "show-close": _ctx.showClose }])
              }, [
                vue.renderSlot(_ctx.$slots, "header", {}, () => [
                  vue.createElementVNode("span", {
                    role: "heading",
                    "aria-level": _ctx.ariaLevel,
                    class: vue.normalizeClass(vue.unref(ns).e("title"))
                  }, vue.toDisplayString(_ctx.title), 11, ["aria-level"])
                ]),
                _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("button", {
                  key: 0,
                  "aria-label": vue.unref(t)("el.dialog.close"),
                  class: vue.normalizeClass(vue.unref(ns).e("headerbtn")),
                  type: "button",
                  onClick: ($event) => _ctx.$emit("close")
                }, [
                  vue.createVNode(vue.unref(ElIcon), {
                    class: vue.normalizeClass(vue.unref(ns).e("close"))
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.closeIcon || vue.unref(Close))))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ], 10, ["aria-label", "onClick"])) : vue.createCommentVNode("v-if", true)
              ], 2),
              vue.createElementVNode("div", {
                id: vue.unref(bodyId),
                class: vue.normalizeClass([vue.unref(ns).e("body"), _ctx.bodyClass])
              }, [
                vue.renderSlot(_ctx.$slots, "default")
              ], 10, ["id"]),
              _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("footer", {
                key: 0,
                class: vue.normalizeClass([vue.unref(ns).e("footer"), _ctx.footerClass])
              }, [
                vue.renderSlot(_ctx.$slots, "footer")
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], 6);
          };
        }
      });
      var ElDialogContent = _export_sfc(_sfc_main$9, [["__file", "dialog-content.vue"]]);
      const dialogProps = buildProps({
        ...dialogContentProps,
        appendToBody: Boolean,
        appendTo: {
          type: teleportProps.to.type,
          default: "body"
        },
        beforeClose: {
          type: definePropType(Function)
        },
        destroyOnClose: Boolean,
        closeOnClickModal: {
          type: Boolean,
          default: true
        },
        closeOnPressEscape: {
          type: Boolean,
          default: true
        },
        lockScroll: {
          type: Boolean,
          default: true
        },
        modal: {
          type: Boolean,
          default: true
        },
        modalPenetrable: Boolean,
        openDelay: {
          type: Number,
          default: 0
        },
        closeDelay: {
          type: Number,
          default: 0
        },
        top: {
          type: String
        },
        modelValue: Boolean,
        modalClass: String,
        headerClass: String,
        bodyClass: String,
        footerClass: String,
        width: {
          type: [String, Number]
        },
        zIndex: {
          type: Number
        },
        trapFocus: Boolean,
        headerAriaLevel: {
          type: String,
          default: "2"
        },
        transition: {
          type: definePropType([String, Object]),
          default: void 0
        }
      });
      const dialogEmits = {
        open: () => true,
        opened: () => true,
        close: () => true,
        closed: () => true,
        [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
        openAutoFocus: () => true,
        closeAutoFocus: () => true
      };
      const useLockscreen = (trigger, options = {}) => {
        if (!vue.isRef(trigger)) {
          throwError("[useLockscreen]", "You need to pass a ref param to this function");
        }
        const ns = options.ns || useNamespace("popup");
        const hiddenCls = vue.computed(() => ns.bm("parent", "hidden"));
        let scrollBarWidth2 = 0;
        let withoutHiddenClass = false;
        let bodyWidth = "0";
        const cleanup = () => {
          setTimeout(() => {
            if (typeof document === "undefined")
              return;
            if (withoutHiddenClass && document) {
              document.body.style.width = bodyWidth;
              removeClass(document.body, hiddenCls.value);
            }
          }, 200);
        };
        vue.watch(trigger, (val) => {
          if (!val) {
            cleanup();
            return;
          }
          withoutHiddenClass = !hasClass(document.body, hiddenCls.value);
          if (withoutHiddenClass) {
            bodyWidth = document.body.style.width;
            addClass(document.body, hiddenCls.value);
          }
          scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
          const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          const bodyOverflowY = getStyle(document.body, "overflowY");
          if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
            document.body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
          }
        });
        vue.onScopeDispose(() => cleanup());
      };
      const useDialog = (props, targetRef) => {
        var _a2;
        const instance = vue.getCurrentInstance();
        const emit = instance.emit;
        const { nextZIndex } = useZIndex();
        let lastPosition = "";
        const titleId = useId();
        const bodyId = useId();
        const visible = vue.ref(false);
        const closed = vue.ref(false);
        const rendered = vue.ref(false);
        const zIndex2 = vue.ref((_a2 = props.zIndex) != null ? _a2 : nextZIndex());
        let openTimer = void 0;
        let closeTimer = void 0;
        const config = useGlobalConfig();
        const namespace = vue.computed(() => {
          var _a22, _b;
          return (_b = (_a22 = config.value) == null ? void 0 : _a22.namespace) != null ? _b : defaultNamespace;
        });
        const globalConfig2 = vue.computed(() => {
          var _a22;
          return (_a22 = config.value) == null ? void 0 : _a22.dialog;
        });
        const style = vue.computed(() => {
          const style2 = {};
          const varPrefix = `--${namespace.value}-dialog`;
          if (!props.fullscreen) {
            if (props.top) {
              style2[`${varPrefix}-margin-top`] = props.top;
            }
            if (props.width) {
              style2[`${varPrefix}-width`] = addUnit(props.width);
            }
          }
          return style2;
        });
        const _draggable = vue.computed(() => {
          var _a22, _b, _c;
          return ((_c = (_b = props.draggable) != null ? _b : (_a22 = globalConfig2.value) == null ? void 0 : _a22.draggable) != null ? _c : false) && !props.fullscreen;
        });
        const _alignCenter = vue.computed(() => {
          var _a22, _b, _c;
          return (_c = (_b = props.alignCenter) != null ? _b : (_a22 = globalConfig2.value) == null ? void 0 : _a22.alignCenter) != null ? _c : false;
        });
        const _overflow = vue.computed(() => {
          var _a22, _b, _c;
          return (_c = (_b = props.overflow) != null ? _b : (_a22 = globalConfig2.value) == null ? void 0 : _a22.overflow) != null ? _c : false;
        });
        const overlayDialogStyle = vue.computed(() => {
          if (_alignCenter.value) {
            return { display: "flex" };
          }
          return {};
        });
        const transitionConfig = vue.computed(() => {
          var _a22, _b, _c;
          const transition = (_c = (_b = props.transition) != null ? _b : (_a22 = globalConfig2.value) == null ? void 0 : _a22.transition) != null ? _c : DEFAULT_DIALOG_TRANSITION;
          const baseConfig2 = {
            name: transition,
            onAfterEnter: afterEnter,
            onBeforeLeave: beforeLeave,
            onAfterLeave: afterLeave
          };
          if (isObject$2(transition)) {
            const config2 = { ...transition };
            const _mergeHook = (userHook, defaultHook) => {
              return (el) => {
                if (isArray$2(userHook)) {
                  userHook.forEach((fn2) => {
                    if (isFunction$2(fn2))
                      fn2(el);
                  });
                } else if (isFunction$2(userHook)) {
                  userHook(el);
                }
                defaultHook();
              };
            };
            config2.onAfterEnter = _mergeHook(config2.onAfterEnter, afterEnter);
            config2.onBeforeLeave = _mergeHook(config2.onBeforeLeave, beforeLeave);
            config2.onAfterLeave = _mergeHook(config2.onAfterLeave, afterLeave);
            if (!config2.name) {
              config2.name = DEFAULT_DIALOG_TRANSITION;
            }
            return config2;
          }
          return baseConfig2;
        });
        function afterEnter() {
          emit("opened");
        }
        function afterLeave() {
          emit("closed");
          emit(UPDATE_MODEL_EVENT, false);
          if (props.destroyOnClose) {
            rendered.value = false;
          }
        }
        function beforeLeave() {
          emit("close");
        }
        function open() {
          closeTimer == null ? void 0 : closeTimer();
          openTimer == null ? void 0 : openTimer();
          if (props.openDelay && props.openDelay > 0) {
            ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
          } else {
            doOpen();
          }
        }
        function close() {
          openTimer == null ? void 0 : openTimer();
          closeTimer == null ? void 0 : closeTimer();
          if (props.closeDelay && props.closeDelay > 0) {
            ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
          } else {
            doClose();
          }
        }
        function handleClose() {
          function hide(shouldCancel) {
            if (shouldCancel)
              return;
            closed.value = true;
            visible.value = false;
          }
          if (props.beforeClose) {
            props.beforeClose(hide);
          } else {
            close();
          }
        }
        function onModalClick() {
          if (props.closeOnClickModal) {
            handleClose();
          }
        }
        function doOpen() {
          if (!isClient)
            return;
          visible.value = true;
        }
        function doClose() {
          visible.value = false;
        }
        function onOpenAutoFocus() {
          emit("openAutoFocus");
        }
        function onCloseAutoFocus() {
          emit("closeAutoFocus");
        }
        function onFocusoutPrevented(event) {
          var _a22;
          if (((_a22 = event.detail) == null ? void 0 : _a22.focusReason) === "pointer") {
            event.preventDefault();
          }
        }
        if (props.lockScroll) {
          useLockscreen(visible);
        }
        function onCloseRequested() {
          if (props.closeOnPressEscape) {
            handleClose();
          }
        }
        vue.watch(() => props.zIndex, () => {
          var _a22;
          zIndex2.value = (_a22 = props.zIndex) != null ? _a22 : nextZIndex();
        });
        vue.watch(() => props.modelValue, (val) => {
          var _a22;
          if (val) {
            closed.value = false;
            open();
            rendered.value = true;
            zIndex2.value = (_a22 = props.zIndex) != null ? _a22 : nextZIndex();
            vue.nextTick(() => {
              emit("open");
              if (targetRef.value) {
                targetRef.value.parentElement.scrollTop = 0;
                targetRef.value.parentElement.scrollLeft = 0;
                targetRef.value.scrollTop = 0;
              }
            });
          } else {
            if (visible.value) {
              close();
            }
          }
        });
        vue.watch(() => props.fullscreen, (val) => {
          if (!targetRef.value)
            return;
          if (val) {
            lastPosition = targetRef.value.style.transform;
            targetRef.value.style.transform = "";
          } else {
            targetRef.value.style.transform = lastPosition;
          }
        });
        vue.onMounted(() => {
          if (props.modelValue) {
            visible.value = true;
            rendered.value = true;
            open();
          }
        });
        return {
          afterEnter,
          afterLeave,
          beforeLeave,
          handleClose,
          onModalClick,
          close,
          doClose,
          onOpenAutoFocus,
          onCloseAutoFocus,
          onCloseRequested,
          onFocusoutPrevented,
          titleId,
          bodyId,
          closed,
          style,
          overlayDialogStyle,
          rendered,
          visible,
          zIndex: zIndex2,
          transitionConfig,
          _draggable,
          _alignCenter,
          _overflow
        };
      };
      const __default__$3 = vue.defineComponent({
        name: "ElDialog",
        inheritAttrs: false
      });
      const _sfc_main$8 = vue.defineComponent({
        ...__default__$3,
        props: dialogProps,
        emits: dialogEmits,
        setup(__props, { expose }) {
          const props = __props;
          const slots = vue.useSlots();
          useDeprecated({
            scope: "el-dialog",
            from: "the title slot",
            replacement: "the header slot",
            version: "3.0.0",
            ref: "https://element-plus.org/en-US/component/dialog.html#slots"
          }, vue.computed(() => !!slots.title));
          const ns = useNamespace("dialog");
          const dialogRef = vue.ref();
          const headerRef = vue.ref();
          const dialogContentRef = vue.ref();
          const {
            visible,
            titleId,
            bodyId,
            style,
            overlayDialogStyle,
            rendered,
            transitionConfig,
            zIndex: zIndex2,
            _draggable,
            _alignCenter,
            _overflow,
            handleClose,
            onModalClick,
            onOpenAutoFocus,
            onCloseAutoFocus,
            onCloseRequested,
            onFocusoutPrevented
          } = useDialog(props, dialogRef);
          vue.provide(dialogInjectionKey, {
            dialogRef,
            headerRef,
            bodyId,
            ns,
            rendered,
            style
          });
          const overlayEvent = useSameTarget(onModalClick);
          const penetrable = vue.computed(() => props.modalPenetrable && !props.modal && !props.fullscreen);
          const resetPosition = () => {
            var _a2;
            (_a2 = dialogContentRef.value) == null ? void 0 : _a2.resetPosition();
          };
          expose({
            visible,
            dialogContentRef,
            resetPosition,
            handleClose
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(vue.unref(ElTeleport), {
              to: _ctx.appendTo,
              disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.Transition, vue.mergeProps(vue.unref(transitionConfig), { persisted: "" }), {
                  default: vue.withCtx(() => {
                    var _a2;
                    return [
                      vue.withDirectives(vue.createVNode(vue.unref(ElOverlay), {
                        "custom-mask-event": "",
                        mask: _ctx.modal,
                        "overlay-class": [
                          (_a2 = _ctx.modalClass) != null ? _a2 : "",
                          `${vue.unref(ns).namespace.value}-modal-dialog`,
                          vue.unref(ns).is("penetrable", vue.unref(penetrable))
                        ],
                        "z-index": vue.unref(zIndex2)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("div", {
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": _ctx.title || void 0,
                            "aria-labelledby": !_ctx.title ? vue.unref(titleId) : void 0,
                            "aria-describedby": vue.unref(bodyId),
                            class: vue.normalizeClass(`${vue.unref(ns).namespace.value}-overlay-dialog`),
                            style: vue.normalizeStyle(vue.unref(overlayDialogStyle)),
                            onClick: vue.unref(overlayEvent).onClick,
                            onMousedown: vue.unref(overlayEvent).onMousedown,
                            onMouseup: vue.unref(overlayEvent).onMouseup
                          }, [
                            vue.createVNode(vue.unref(ElFocusTrap), {
                              loop: "",
                              trapped: vue.unref(visible),
                              "focus-start-el": "container",
                              onFocusAfterTrapped: vue.unref(onOpenAutoFocus),
                              onFocusAfterReleased: vue.unref(onCloseAutoFocus),
                              onFocusoutPrevented: vue.unref(onFocusoutPrevented),
                              onReleaseRequested: vue.unref(onCloseRequested)
                            }, {
                              default: vue.withCtx(() => [
                                vue.unref(rendered) ? (vue.openBlock(), vue.createBlock(ElDialogContent, vue.mergeProps({
                                  key: 0,
                                  ref_key: "dialogContentRef",
                                  ref: dialogContentRef
                                }, _ctx.$attrs, {
                                  center: _ctx.center,
                                  "align-center": vue.unref(_alignCenter),
                                  "close-icon": _ctx.closeIcon,
                                  draggable: vue.unref(_draggable),
                                  overflow: vue.unref(_overflow),
                                  fullscreen: _ctx.fullscreen,
                                  "header-class": _ctx.headerClass,
                                  "body-class": _ctx.bodyClass,
                                  "footer-class": _ctx.footerClass,
                                  "show-close": _ctx.showClose,
                                  title: _ctx.title,
                                  "aria-level": _ctx.headerAriaLevel,
                                  onClose: vue.unref(handleClose)
                                }), vue.createSlots({
                                  header: vue.withCtx(() => [
                                    !_ctx.$slots.title ? vue.renderSlot(_ctx.$slots, "header", {
                                      key: 0,
                                      close: vue.unref(handleClose),
                                      titleId: vue.unref(titleId),
                                      titleClass: vue.unref(ns).e("title")
                                    }) : vue.renderSlot(_ctx.$slots, "title", { key: 1 })
                                  ]),
                                  default: vue.withCtx(() => [
                                    vue.renderSlot(_ctx.$slots, "default")
                                  ]),
                                  _: 2
                                }, [
                                  _ctx.$slots.footer ? {
                                    name: "footer",
                                    fn: vue.withCtx(() => [
                                      vue.renderSlot(_ctx.$slots, "footer")
                                    ])
                                  } : void 0
                                ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : vue.createCommentVNode("v-if", true)
                              ]),
                              _: 3
                            }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                          ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
                        ]),
                        _: 3
                      }, 8, ["mask", "overlay-class", "z-index"]), [
                        [vue.vShow, vue.unref(visible)]
                      ])
                    ];
                  }),
                  _: 3
                }, 16)
              ]),
              _: 3
            }, 8, ["to", "disabled"]);
          };
        }
      });
      var Dialog = _export_sfc(_sfc_main$8, [["__file", "dialog.vue"]]);
      const ElDialog = withInstall(Dialog);
      const formMetaProps = buildProps({
        size: {
          type: String,
          values: componentSizes
        },
        disabled: Boolean
      });
      const formProps = buildProps({
        ...formMetaProps,
        model: Object,
        rules: {
          type: definePropType(Object)
        },
        labelPosition: {
          type: String,
          values: ["left", "right", "top"],
          default: "right"
        },
        requireAsteriskPosition: {
          type: String,
          values: ["left", "right"],
          default: "left"
        },
        labelWidth: {
          type: [String, Number],
          default: ""
        },
        labelSuffix: {
          type: String,
          default: ""
        },
        inline: Boolean,
        inlineMessage: Boolean,
        statusIcon: Boolean,
        showMessage: {
          type: Boolean,
          default: true
        },
        validateOnRuleChange: {
          type: Boolean,
          default: true
        },
        hideRequiredAsterisk: Boolean,
        scrollToError: Boolean,
        scrollIntoViewOptions: {
          type: definePropType([Object, Boolean]),
          default: true
        }
      });
      const formEmits = {
        validate: (prop, isValid2, message) => (isArray$2(prop) || isString$2(prop)) && isBoolean(isValid2) && isString$2(message)
      };
      function useFormLabelWidth() {
        const potentialLabelWidthArr = vue.ref([]);
        const autoLabelWidth = vue.computed(() => {
          if (!potentialLabelWidthArr.value.length)
            return "0";
          const max2 = Math.max(...potentialLabelWidthArr.value);
          return max2 ? `${max2}px` : "";
        });
        function getLabelWidthIndex(width) {
          const index = potentialLabelWidthArr.value.indexOf(width);
          if (index === -1 && autoLabelWidth.value === "0") ;
          return index;
        }
        function registerLabelWidth(val, oldVal) {
          if (val && oldVal) {
            const index = getLabelWidthIndex(oldVal);
            potentialLabelWidthArr.value.splice(index, 1, val);
          } else if (val) {
            potentialLabelWidthArr.value.push(val);
          }
        }
        function deregisterLabelWidth(val) {
          const index = getLabelWidthIndex(val);
          if (index > -1) {
            potentialLabelWidthArr.value.splice(index, 1);
          }
        }
        return {
          autoLabelWidth,
          registerLabelWidth,
          deregisterLabelWidth
        };
      }
      const filterFields = (fields, props) => {
        const normalized = castArray$1(props).map((prop) => isArray$2(prop) ? prop.join(".") : prop);
        return normalized.length > 0 ? fields.filter((field) => field.propString && normalized.includes(field.propString)) : fields;
      };
      const COMPONENT_NAME$1 = "ElForm";
      const __default__$2 = vue.defineComponent({
        name: COMPONENT_NAME$1
      });
      const _sfc_main$7 = vue.defineComponent({
        ...__default__$2,
        props: formProps,
        emits: formEmits,
        setup(__props, { expose, emit }) {
          const props = __props;
          const formRef = vue.ref();
          const fields = vue.reactive([]);
          const formSize = useFormSize();
          const ns = useNamespace("form");
          const formClasses = vue.computed(() => {
            const { labelPosition, inline } = props;
            return [
              ns.b(),
              ns.m(formSize.value || "default"),
              {
                [ns.m(`label-${labelPosition}`)]: labelPosition,
                [ns.m("inline")]: inline
              }
            ];
          });
          const getField = (prop) => {
            return filterFields(fields, [prop])[0];
          };
          const addField = (field) => {
            fields.push(field);
          };
          const removeField = (field) => {
            if (field.prop) {
              fields.splice(fields.indexOf(field), 1);
            }
          };
          const resetFields = (properties = []) => {
            if (!props.model) {
              return;
            }
            filterFields(fields, properties).forEach((field) => field.resetField());
          };
          const clearValidate = (props2 = []) => {
            filterFields(fields, props2).forEach((field) => field.clearValidate());
          };
          const isValidatable = vue.computed(() => {
            const hasModel = !!props.model;
            return hasModel;
          });
          const obtainValidateFields = (props2) => {
            if (fields.length === 0)
              return [];
            const filteredFields = filterFields(fields, props2);
            if (!filteredFields.length) {
              return [];
            }
            return filteredFields;
          };
          const validate = async (callback) => validateField(void 0, callback);
          const doValidateField = async (props2 = []) => {
            if (!isValidatable.value)
              return false;
            const fields2 = obtainValidateFields(props2);
            if (fields2.length === 0)
              return true;
            let validationErrors = {};
            for (const field of fields2) {
              try {
                await field.validate("");
                if (field.validateState === "error" && !field.error)
                  field.resetField();
              } catch (fields3) {
                validationErrors = {
                  ...validationErrors,
                  ...fields3
                };
              }
            }
            if (Object.keys(validationErrors).length === 0)
              return true;
            return Promise.reject(validationErrors);
          };
          const validateField = async (modelProps = [], callback) => {
            let result = false;
            const shouldThrow = !isFunction$2(callback);
            try {
              result = await doValidateField(modelProps);
              if (result === true) {
                await (callback == null ? void 0 : callback(result));
              }
              return result;
            } catch (e) {
              if (e instanceof Error)
                throw e;
              const invalidFields = e;
              if (props.scrollToError) {
                if (formRef.value) {
                  const formItem = formRef.value.querySelector(`.${ns.b()}-item.is-error`);
                  formItem == null ? void 0 : formItem.scrollIntoView(props.scrollIntoViewOptions);
                }
              }
              !result && await (callback == null ? void 0 : callback(false, invalidFields));
              return shouldThrow && Promise.reject(invalidFields);
            }
          };
          const scrollToField = (prop) => {
            var _a2;
            const field = getField(prop);
            if (field) {
              (_a2 = field.$el) == null ? void 0 : _a2.scrollIntoView(props.scrollIntoViewOptions);
            }
          };
          vue.watch(() => props.rules, () => {
            if (props.validateOnRuleChange) {
              validate().catch((err) => debugWarn());
            }
          }, { deep: true, flush: "post" });
          vue.provide(formContextKey, vue.reactive({
            ...vue.toRefs(props),
            emit,
            resetFields,
            clearValidate,
            validateField,
            getField,
            addField,
            removeField,
            ...useFormLabelWidth()
          }));
          expose({
            validate,
            validateField,
            resetFields,
            clearValidate,
            scrollToField,
            getField,
            fields
          });
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("form", {
              ref_key: "formRef",
              ref: formRef,
              class: vue.normalizeClass(vue.unref(formClasses))
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 2);
          };
        }
      });
      var Form = _export_sfc(_sfc_main$7, [["__file", "form.vue"]]);
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
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
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o2) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o22) {
          return o22.__proto__ || Object.getPrototypeOf(o22);
        };
        return _getPrototypeOf(o2);
      }
      function _setPrototypeOf(o2, p2) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o22, p22) {
          o22.__proto__ = p22;
          return o22;
        };
        return _setPrototypeOf(o2, p2);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct.bind();
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a2 = [null];
            a2.push.apply(a2, args2);
            var Constructor = Function.bind.apply(Parent2, a2);
            var instance = new Constructor();
            if (Class2) _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn2) {
        return Function.toString.call(fn2).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2)) return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      var formatRegExp = /%[sdj%]/g;
      var warning = function warning2() {
      };
      function convertFieldsError(errors) {
        if (!errors || !errors.length) return null;
        var fields = {};
        errors.forEach(function(error) {
          var field = error.field;
          fields[field] = fields[field] || [];
          fields[field].push(error);
        });
        return fields;
      }
      function format$1(template) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var i = 0;
        var len = args.length;
        if (typeof template === "function") {
          return template.apply(null, args);
        }
        if (typeof template === "string") {
          var str = template.replace(formatRegExp, function(x2) {
            if (x2 === "%%") {
              return "%";
            }
            if (i >= len) {
              return x2;
            }
            switch (x2) {
              case "%s":
                return String(args[i++]);
              case "%d":
                return Number(args[i++]);
              case "%j":
                try {
                  return JSON.stringify(args[i++]);
                } catch (_2) {
                  return "[Circular]";
                }
                break;
              default:
                return x2;
            }
          });
          return str;
        }
        return template;
      }
      function isNativeStringType(type4) {
        return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
      }
      function isEmptyValue(value, type4) {
        if (value === void 0 || value === null) {
          return true;
        }
        if (type4 === "array" && Array.isArray(value) && !value.length) {
          return true;
        }
        if (isNativeStringType(type4) && typeof value === "string" && !value) {
          return true;
        }
        return false;
      }
      function asyncParallelArray(arr, func, callback) {
        var results = [];
        var total = 0;
        var arrLength = arr.length;
        function count(errors) {
          results.push.apply(results, errors || []);
          total++;
          if (total === arrLength) {
            callback(results);
          }
        }
        arr.forEach(function(a2) {
          func(a2, count);
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
        Object.keys(objArr).forEach(function(k) {
          ret.push.apply(ret, objArr[k] || []);
        });
        return ret;
      }
      var AsyncValidationError = (function(_Error) {
        _inheritsLoose(AsyncValidationError2, _Error);
        function AsyncValidationError2(errors, fields) {
          var _this;
          _this = _Error.call(this, "Async Validation Error") || this;
          _this.errors = errors;
          _this.fields = fields;
          return _this;
        }
        return AsyncValidationError2;
      })( _wrapNativeSuper(Error));
      function asyncMap(objArr, option, func, callback, source) {
        if (option.first) {
          var _pending = new Promise(function(resolve, reject) {
            var next = function next2(errors) {
              callback(errors);
              return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
            };
            var flattenArr = flattenObjArr(objArr);
            asyncSerialArray(flattenArr, func, next);
          });
          _pending["catch"](function(e) {
            return e;
          });
          return _pending;
        }
        var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
        var objArrKeys = Object.keys(objArr);
        var objArrLength = objArrKeys.length;
        var total = 0;
        var results = [];
        var pending = new Promise(function(resolve, reject) {
          var next = function next2(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === objArrLength) {
              callback(results);
              return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
            }
          };
          if (!objArrKeys.length) {
            callback(results);
            resolve(source);
          }
          objArrKeys.forEach(function(key) {
            var arr = objArr[key];
            if (firstFields.indexOf(key) !== -1) {
              asyncSerialArray(arr, func, next);
            } else {
              asyncParallelArray(arr, func, next);
            }
          });
        });
        pending["catch"](function(e) {
          return e;
        });
        return pending;
      }
      function isErrorObj(obj) {
        return !!(obj && obj.message !== void 0);
      }
      function getValue(value, path) {
        var v2 = value;
        for (var i = 0; i < path.length; i++) {
          if (v2 == void 0) {
            return v2;
          }
          v2 = v2[path[i]];
        }
        return v2;
      }
      function complementError(rule, source) {
        return function(oe) {
          var fieldValue;
          if (rule.fullFields) {
            fieldValue = getValue(source, rule.fullFields);
          } else {
            fieldValue = source[oe.field || rule.fullField];
          }
          if (isErrorObj(oe)) {
            oe.field = oe.field || rule.fullField;
            oe.fieldValue = fieldValue;
            return oe;
          }
          return {
            message: typeof oe === "function" ? oe() : oe,
            fieldValue,
            field: oe.field || rule.fullField
          };
        };
      }
      function deepMerge(target, source) {
        if (source) {
          for (var s2 in source) {
            if (source.hasOwnProperty(s2)) {
              var value = source[s2];
              if (typeof value === "object" && typeof target[s2] === "object") {
                target[s2] = _extends({}, target[s2], value);
              } else {
                target[s2] = value;
              }
            }
          }
        }
        return target;
      }
      var required$1 = function required(rule, value, source, errors, options, type4) {
        if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
          errors.push(format$1(options.messages.required, rule.fullField));
        }
      };
      var whitespace = function whitespace2(rule, value, source, errors, options) {
        if (/^\s+$/.test(value) || value === "") {
          errors.push(format$1(options.messages.whitespace, rule.fullField));
        }
      };
      var urlReg;
      var getUrlRegex = (function() {
        if (urlReg) {
          return urlReg;
        }
        var word = "[a-fA-F\\d:]";
        var b2 = function b22(options) {
          return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
        };
        var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
        var v6seg = "[a-fA-F\\d]{1,4}";
        var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
        var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
        var v4exact = new RegExp("^" + v4 + "$");
        var v6exact = new RegExp("^" + v6 + "$");
        var ip = function ip2(options) {
          return options && options.exact ? v46Exact : new RegExp("(?:" + b2(options) + v4 + b2(options) + ")|(?:" + b2(options) + v6 + b2(options) + ")", "g");
        };
        ip.v4 = function(options) {
          return options && options.exact ? v4exact : new RegExp("" + b2(options) + v4 + b2(options), "g");
        };
        ip.v6 = function(options) {
          return options && options.exact ? v6exact : new RegExp("" + b2(options) + v6 + b2(options), "g");
        };
        var protocol = "(?:(?:[a-z]+:)?//)";
        var auth = "(?:\\S+(?::\\S*)?@)?";
        var ipv4 = ip.v4().source;
        var ipv6 = ip.v6().source;
        var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
        var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
        var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
        var port = "(?::\\d{2,5})?";
        var path = '(?:[/?#][^\\s"]*)?';
        var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
        urlReg = new RegExp("(?:^" + regex + "$)", "i");
        return urlReg;
      });
      var pattern$2 = {
email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,



hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
      };
      var types = {
        integer: function integer(value) {
          return types.number(value) && parseInt(value, 10) === value;
        },
        "float": function float(value) {
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
          return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
        },
        number: function number(value) {
          if (isNaN(value)) {
            return false;
          }
          return typeof value === "number";
        },
        object: function object(value) {
          return typeof value === "object" && !types.array(value);
        },
        method: function method(value) {
          return typeof value === "function";
        },
        email: function email(value) {
          return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
        },
        url: function url(value) {
          return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
        },
        hex: function hex(value) {
          return typeof value === "string" && !!value.match(pattern$2.hex);
        }
      };
      var type$1 = function type(rule, value, source, errors, options) {
        if (rule.required && value === void 0) {
          required$1(rule, value, source, errors, options);
          return;
        }
        var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
        var ruleType = rule.type;
        if (custom.indexOf(ruleType) > -1) {
          if (!types[ruleType](value)) {
            errors.push(format$1(options.messages.types[ruleType], rule.fullField, rule.type));
          }
        } else if (ruleType && typeof value !== rule.type) {
          errors.push(format$1(options.messages.types[ruleType], rule.fullField, rule.type));
        }
      };
      var range = function range2(rule, value, source, errors, options) {
        var len = typeof rule.len === "number";
        var min2 = typeof rule.min === "number";
        var max2 = typeof rule.max === "number";
        var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
        var val = value;
        var key = null;
        var num = typeof value === "number";
        var str = typeof value === "string";
        var arr = Array.isArray(value);
        if (num) {
          key = "number";
        } else if (str) {
          key = "string";
        } else if (arr) {
          key = "array";
        }
        if (!key) {
          return false;
        }
        if (arr) {
          val = value.length;
        }
        if (str) {
          val = value.replace(spRegexp, "_").length;
        }
        if (len) {
          if (val !== rule.len) {
            errors.push(format$1(options.messages[key].len, rule.fullField, rule.len));
          }
        } else if (min2 && !max2 && val < rule.min) {
          errors.push(format$1(options.messages[key].min, rule.fullField, rule.min));
        } else if (max2 && !min2 && val > rule.max) {
          errors.push(format$1(options.messages[key].max, rule.fullField, rule.max));
        } else if (min2 && max2 && (val < rule.min || val > rule.max)) {
          errors.push(format$1(options.messages[key].range, rule.fullField, rule.min, rule.max));
        }
      };
      var ENUM$1 = "enum";
      var enumerable$1 = function enumerable(rule, value, source, errors, options) {
        rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
        if (rule[ENUM$1].indexOf(value) === -1) {
          errors.push(format$1(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
        }
      };
      var pattern$1 = function pattern(rule, value, source, errors, options) {
        if (rule.pattern) {
          if (rule.pattern instanceof RegExp) {
            rule.pattern.lastIndex = 0;
            if (!rule.pattern.test(value)) {
              errors.push(format$1(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          } else if (typeof rule.pattern === "string") {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) {
              errors.push(format$1(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
            }
          }
        }
      };
      var rules = {
        required: required$1,
        whitespace,
        type: type$1,
        range,
        "enum": enumerable$1,
        pattern: pattern$1
      };
      var string = function string2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, "string") && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options, "string");
          if (!isEmptyValue(value, "string")) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
            rules.pattern(rule, value, source, errors, options);
            if (rule.whitespace === true) {
              rules.whitespace(rule, value, source, errors, options);
            }
          }
        }
        callback(errors);
      };
      var method2 = function method3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var number2 = function number3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (value === "") {
            value = void 0;
          }
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var _boolean = function _boolean2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var regexp2 = function regexp3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (!isEmptyValue(value)) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var integer2 = function integer3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var floatFn = function floatFn2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var array2 = function array3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if ((value === void 0 || value === null) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options, "array");
          if (value !== void 0 && value !== null) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var object2 = function object3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var ENUM = "enum";
      var enumerable2 = function enumerable3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (value !== void 0) {
            rules[ENUM](rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var pattern2 = function pattern3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, "string") && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (!isEmptyValue(value, "string")) {
            rules.pattern(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var date2 = function date3(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, "date") && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
          if (!isEmptyValue(value, "date")) {
            var dateObject;
            if (value instanceof Date) {
              dateObject = value;
            } else {
              dateObject = new Date(value);
            }
            rules.type(rule, dateObject, source, errors, options);
            if (dateObject) {
              rules.range(rule, dateObject.getTime(), source, errors, options);
            }
          }
        }
        callback(errors);
      };
      var required2 = function required3(rule, value, callback, source, options) {
        var errors = [];
        var type4 = Array.isArray(value) ? "array" : typeof value;
        rules.required(rule, value, source, errors, options, type4);
        callback(errors);
      };
      var type2 = function type3(rule, value, callback, source, options) {
        var ruleType = rule.type;
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value, ruleType) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options, ruleType);
          if (!isEmptyValue(value, ruleType)) {
            rules.type(rule, value, source, errors, options);
          }
        }
        callback(errors);
      };
      var any = function any2(rule, value, callback, source, options) {
        var errors = [];
        var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
        if (validate) {
          if (isEmptyValue(value) && !rule.required) {
            return callback();
          }
          rules.required(rule, value, source, errors, options);
        }
        callback(errors);
      };
      var validators = {
        string,
        method: method2,
        number: number2,
        "boolean": _boolean,
        regexp: regexp2,
        integer: integer2,
        "float": floatFn,
        array: array2,
        object: object2,
        "enum": enumerable2,
        pattern: pattern2,
        date: date2,
        url: type2,
        hex: type2,
        email: type2,
        required: required2,
        any
      };
      function newMessages() {
        return {
          "default": "Validation error on field %s",
          required: "%s is required",
          "enum": "%s must be one of %s",
          whitespace: "%s cannot be empty",
          date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid"
          },
          types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            "boolean": "%s is not a %s",
            integer: "%s is not an %s",
            "float": "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s"
          },
          string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters"
          },
          number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s"
          },
          array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length"
          },
          pattern: {
            mismatch: "%s value %s does not match pattern %s"
          },
          clone: function clone2() {
            var cloned = JSON.parse(JSON.stringify(this));
            cloned.clone = this.clone;
            return cloned;
          }
        };
      }
      var messages = newMessages();
      var Schema = (function() {
        function Schema2(descriptor) {
          this.rules = null;
          this._messages = messages;
          this.define(descriptor);
        }
        var _proto = Schema2.prototype;
        _proto.define = function define(rules2) {
          var _this = this;
          if (!rules2) {
            throw new Error("Cannot configure a schema with no rules");
          }
          if (typeof rules2 !== "object" || Array.isArray(rules2)) {
            throw new Error("Rules must be an object");
          }
          this.rules = {};
          Object.keys(rules2).forEach(function(name) {
            var item = rules2[name];
            _this.rules[name] = Array.isArray(item) ? item : [item];
          });
        };
        _proto.messages = function messages2(_messages) {
          if (_messages) {
            this._messages = deepMerge(newMessages(), _messages);
          }
          return this._messages;
        };
        _proto.validate = function validate(source_, o2, oc) {
          var _this2 = this;
          if (o2 === void 0) {
            o2 = {};
          }
          if (oc === void 0) {
            oc = function oc2() {
            };
          }
          var source = source_;
          var options = o2;
          var callback = oc;
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          if (!this.rules || Object.keys(this.rules).length === 0) {
            if (callback) {
              callback(null, source);
            }
            return Promise.resolve(source);
          }
          function complete(results) {
            var errors = [];
            var fields = {};
            function add2(e) {
              if (Array.isArray(e)) {
                var _errors;
                errors = (_errors = errors).concat.apply(_errors, e);
              } else {
                errors.push(e);
              }
            }
            for (var i = 0; i < results.length; i++) {
              add2(results[i]);
            }
            if (!errors.length) {
              callback(null, source);
            } else {
              fields = convertFieldsError(errors);
              callback(errors, fields);
            }
          }
          if (options.messages) {
            var messages$1 = this.messages();
            if (messages$1 === messages) {
              messages$1 = newMessages();
            }
            deepMerge(messages$1, options.messages);
            options.messages = messages$1;
          } else {
            options.messages = this.messages();
          }
          var series = {};
          var keys2 = options.keys || Object.keys(this.rules);
          keys2.forEach(function(z) {
            var arr = _this2.rules[z];
            var value = source[z];
            arr.forEach(function(r) {
              var rule = r;
              if (typeof rule.transform === "function") {
                if (source === source_) {
                  source = _extends({}, source);
                }
                value = source[z] = rule.transform(value);
              }
              if (typeof rule === "function") {
                rule = {
                  validator: rule
                };
              } else {
                rule = _extends({}, rule);
              }
              rule.validator = _this2.getValidationMethod(rule);
              if (!rule.validator) {
                return;
              }
              rule.field = z;
              rule.fullField = rule.fullField || z;
              rule.type = _this2.getType(rule);
              series[z] = series[z] || [];
              series[z].push({
                rule,
                value,
                source,
                field: z
              });
            });
          });
          var errorFields = {};
          return asyncMap(series, options, function(data, doIt) {
            var rule = data.rule;
            var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
            deep = deep && (rule.required || !rule.required && data.value);
            rule.field = data.field;
            function addFullField(key, schema) {
              return _extends({}, schema, {
                fullField: rule.fullField + "." + key,
                fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
              });
            }
            function cb(e) {
              if (e === void 0) {
                e = [];
              }
              var errorList = Array.isArray(e) ? e : [e];
              if (!options.suppressWarning && errorList.length) {
                Schema2.warning("async-validator:", errorList);
              }
              if (errorList.length && rule.message !== void 0) {
                errorList = [].concat(rule.message);
              }
              var filledErrors = errorList.map(complementError(rule, source));
              if (options.first && filledErrors.length) {
                errorFields[rule.field] = 1;
                return doIt(filledErrors);
              }
              if (!deep) {
                doIt(filledErrors);
              } else {
                if (rule.required && !data.value) {
                  if (rule.message !== void 0) {
                    filledErrors = [].concat(rule.message).map(complementError(rule, source));
                  } else if (options.error) {
                    filledErrors = [options.error(rule, format$1(options.messages.required, rule.field))];
                  }
                  return doIt(filledErrors);
                }
                var fieldsSchema = {};
                if (rule.defaultField) {
                  Object.keys(data.value).map(function(key) {
                    fieldsSchema[key] = rule.defaultField;
                  });
                }
                fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                var paredFieldsSchema = {};
                Object.keys(fieldsSchema).forEach(function(field) {
                  var fieldSchema = fieldsSchema[field];
                  var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
                  paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
                });
                var schema = new Schema2(paredFieldsSchema);
                schema.messages(options.messages);
                if (data.rule.options) {
                  data.rule.options.messages = options.messages;
                  data.rule.options.error = options.error;
                }
                schema.validate(data.value, data.rule.options || options, function(errs) {
                  var finalErrors = [];
                  if (filledErrors && filledErrors.length) {
                    finalErrors.push.apply(finalErrors, filledErrors);
                  }
                  if (errs && errs.length) {
                    finalErrors.push.apply(finalErrors, errs);
                  }
                  doIt(finalErrors.length ? finalErrors : null);
                });
              }
            }
            var res;
            if (rule.asyncValidator) {
              res = rule.asyncValidator(rule, data.value, cb, data.source, options);
            } else if (rule.validator) {
              try {
                res = rule.validator(rule, data.value, cb, data.source, options);
              } catch (error) {
                console.error == null ? void 0 : console.error(error);
                if (!options.suppressValidatorError) {
                  setTimeout(function() {
                    throw error;
                  }, 0);
                }
                cb(error.message);
              }
              if (res === true) {
                cb();
              } else if (res === false) {
                cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
              } else if (res instanceof Array) {
                cb(res);
              } else if (res instanceof Error) {
                cb(res.message);
              }
            }
            if (res && res.then) {
              res.then(function() {
                return cb();
              }, function(e) {
                return cb(e);
              });
            }
          }, function(results) {
            complete(results);
          }, source);
        };
        _proto.getType = function getType(rule) {
          if (rule.type === void 0 && rule.pattern instanceof RegExp) {
            rule.type = "pattern";
          }
          if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
            throw new Error(format$1("Unknown rule type %s", rule.type));
          }
          return rule.type || "string";
        };
        _proto.getValidationMethod = function getValidationMethod(rule) {
          if (typeof rule.validator === "function") {
            return rule.validator;
          }
          var keys2 = Object.keys(rule);
          var messageIndex = keys2.indexOf("message");
          if (messageIndex !== -1) {
            keys2.splice(messageIndex, 1);
          }
          if (keys2.length === 1 && keys2[0] === "required") {
            return validators.required;
          }
          return validators[this.getType(rule)] || void 0;
        };
        return Schema2;
      })();
      Schema.register = function register(type4, validator) {
        if (typeof validator !== "function") {
          throw new Error("Cannot register a validator by type, validator is not a function");
        }
        validators[type4] = validator;
      };
      Schema.warning = warning;
      Schema.messages = messages;
      Schema.validators = validators;
      const formItemValidateStates = [
        "",
        "error",
        "validating",
        "success"
      ];
      const formItemProps = buildProps({
        label: String,
        labelWidth: {
          type: [String, Number],
          default: ""
        },
        labelPosition: {
          type: String,
          values: ["left", "right", "top", ""],
          default: ""
        },
        prop: {
          type: definePropType([String, Array])
        },
        required: {
          type: Boolean,
          default: void 0
        },
        rules: {
          type: definePropType([Object, Array])
        },
        error: String,
        validateStatus: {
          type: String,
          values: formItemValidateStates
        },
        for: String,
        inlineMessage: {
          type: Boolean,
          default: void 0
        },
        showMessage: {
          type: Boolean,
          default: true
        },
        size: {
          type: String,
          values: componentSizes
        }
      });
      const COMPONENT_NAME = "ElLabelWrap";
      var FormLabelWrap = vue.defineComponent({
        name: COMPONENT_NAME,
        props: {
          isAutoWidth: Boolean,
          updateAll: Boolean
        },
        setup(props, {
          slots
        }) {
          const formContext = vue.inject(formContextKey, void 0);
          const formItemContext = vue.inject(formItemContextKey);
          if (!formItemContext)
            throwError(COMPONENT_NAME, "usage: <el-form-item><label-wrap /></el-form-item>");
          const ns = useNamespace("form");
          const el = vue.ref();
          const computedWidth = vue.ref(0);
          const getLabelWidth = () => {
            var _a2;
            if ((_a2 = el.value) == null ? void 0 : _a2.firstElementChild) {
              const width = window.getComputedStyle(el.value.firstElementChild).width;
              return Math.ceil(Number.parseFloat(width));
            } else {
              return 0;
            }
          };
          const updateLabelWidth = (action = "update") => {
            vue.nextTick(() => {
              if (slots.default && props.isAutoWidth) {
                if (action === "update") {
                  computedWidth.value = getLabelWidth();
                } else if (action === "remove") {
                  formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
                }
              }
            });
          };
          const updateLabelWidthFn = () => updateLabelWidth("update");
          vue.onMounted(() => {
            updateLabelWidthFn();
          });
          vue.onBeforeUnmount(() => {
            updateLabelWidth("remove");
          });
          vue.onUpdated(() => updateLabelWidthFn());
          vue.watch(computedWidth, (val, oldVal) => {
            if (props.updateAll) {
              formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
            }
          });
          useResizeObserver(vue.computed(() => {
            var _a2, _b;
            return (_b = (_a2 = el.value) == null ? void 0 : _a2.firstElementChild) != null ? _b : null;
          }), updateLabelWidthFn);
          return () => {
            var _a2, _b;
            if (!slots)
              return null;
            const {
              isAutoWidth
            } = props;
            if (isAutoWidth) {
              const autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
              const hasLabel = formItemContext == null ? void 0 : formItemContext.hasLabel;
              const style = {};
              if (hasLabel && autoLabelWidth && autoLabelWidth !== "auto") {
                const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
                const labelPosition = formItemContext.labelPosition || formContext.labelPosition;
                const marginPosition = labelPosition === "left" ? "marginRight" : "marginLeft";
                if (marginWidth) {
                  style[marginPosition] = `${marginWidth}px`;
                }
              }
              return vue.createVNode("div", {
                "ref": el,
                "class": [ns.be("item", "label-wrap")],
                "style": style
              }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
            } else {
              return vue.createVNode(vue.Fragment, {
                "ref": el
              }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
            }
          };
        }
      });
      const __default__$1 = vue.defineComponent({
        name: "ElFormItem"
      });
      const _sfc_main$6 = vue.defineComponent({
        ...__default__$1,
        props: formItemProps,
        setup(__props, { expose }) {
          const props = __props;
          const slots = vue.useSlots();
          const formContext = vue.inject(formContextKey, void 0);
          const parentFormItemContext = vue.inject(formItemContextKey, void 0);
          const _size = useFormSize(void 0, { formItem: false });
          const ns = useNamespace("form-item");
          const labelId = useId().value;
          const inputIds = vue.ref([]);
          const validateState = vue.ref("");
          const validateStateDebounced = refDebounced(validateState, 100);
          const validateMessage = vue.ref("");
          const formItemRef = vue.ref();
          let initialValue = void 0;
          let isResettingField = false;
          const labelPosition = vue.computed(() => props.labelPosition || (formContext == null ? void 0 : formContext.labelPosition));
          const labelStyle = vue.computed(() => {
            if (labelPosition.value === "top") {
              return {};
            }
            const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
            if (labelWidth)
              return { width: labelWidth };
            return {};
          });
          const contentStyle = vue.computed(() => {
            if (labelPosition.value === "top" || (formContext == null ? void 0 : formContext.inline)) {
              return {};
            }
            if (!props.label && !props.labelWidth && isNested) {
              return {};
            }
            const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
            if (!props.label && !slots.label) {
              return { marginLeft: labelWidth };
            }
            return {};
          });
          const formItemClasses = vue.computed(() => [
            ns.b(),
            ns.m(_size.value),
            ns.is("error", validateState.value === "error"),
            ns.is("validating", validateState.value === "validating"),
            ns.is("success", validateState.value === "success"),
            ns.is("required", isRequired.value || props.required),
            ns.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
            (formContext == null ? void 0 : formContext.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
            {
              [ns.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon,
              [ns.m(`label-${labelPosition.value}`)]: labelPosition.value
            }
          ]);
          const _inlineMessage = vue.computed(() => isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
          const validateClasses = vue.computed(() => [
            ns.e("error"),
            { [ns.em("error", "inline")]: _inlineMessage.value }
          ]);
          const propString = vue.computed(() => {
            if (!props.prop)
              return "";
            return isArray$2(props.prop) ? props.prop.join(".") : props.prop;
          });
          const hasLabel = vue.computed(() => {
            return !!(props.label || slots.label);
          });
          const labelFor = vue.computed(() => {
            var _a2;
            return (_a2 = props.for) != null ? _a2 : inputIds.value.length === 1 ? inputIds.value[0] : void 0;
          });
          const isGroup = vue.computed(() => {
            return !labelFor.value && hasLabel.value;
          });
          const isNested = !!parentFormItemContext;
          const fieldValue = vue.computed(() => {
            const model = formContext == null ? void 0 : formContext.model;
            if (!model || !props.prop) {
              return;
            }
            return getProp(model, props.prop).value;
          });
          const normalizedRules = vue.computed(() => {
            const { required } = props;
            const rules2 = [];
            if (props.rules) {
              rules2.push(...castArray$1(props.rules));
            }
            const formRules = formContext == null ? void 0 : formContext.rules;
            if (formRules && props.prop) {
              const _rules = getProp(formRules, props.prop).value;
              if (_rules) {
                rules2.push(...castArray$1(_rules));
              }
            }
            if (required !== void 0) {
              const requiredRules = rules2.map((rule, i) => [rule, i]).filter(([rule]) => "required" in rule);
              if (requiredRules.length > 0) {
                for (const [rule, i] of requiredRules) {
                  if (rule.required === required)
                    continue;
                  rules2[i] = { ...rule, required };
                }
              } else {
                rules2.push({ required });
              }
            }
            return rules2;
          });
          const validateEnabled = vue.computed(() => normalizedRules.value.length > 0);
          const getFilteredRule = (trigger) => {
            const rules2 = normalizedRules.value;
            return rules2.filter((rule) => {
              if (!rule.trigger || !trigger)
                return true;
              if (isArray$2(rule.trigger)) {
                return rule.trigger.includes(trigger);
              } else {
                return rule.trigger === trigger;
              }
            }).map(({ trigger: trigger2, ...rule }) => rule);
          };
          const isRequired = vue.computed(() => normalizedRules.value.some((rule) => rule.required));
          const shouldShowError = vue.computed(() => {
            var _a2;
            return validateStateDebounced.value === "error" && props.showMessage && ((_a2 = formContext == null ? void 0 : formContext.showMessage) != null ? _a2 : true);
          });
          const currentLabel = vue.computed(() => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
          const setValidationState = (state) => {
            validateState.value = state;
          };
          const onValidationFailed = (error) => {
            var _a2, _b;
            const { errors, fields } = error;
            if (!errors || !fields) {
              console.error(error);
            }
            setValidationState("error");
            validateMessage.value = errors ? (_b = (_a2 = errors == null ? void 0 : errors[0]) == null ? void 0 : _a2.message) != null ? _b : `${props.prop} is required` : "";
            formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
          };
          const onValidationSucceeded = () => {
            setValidationState("success");
            formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
          };
          const doValidate = async (rules2) => {
            const modelName = propString.value;
            const validator = new Schema({
              [modelName]: rules2
            });
            return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
              onValidationSucceeded();
              return true;
            }).catch((err) => {
              onValidationFailed(err);
              return Promise.reject(err);
            });
          };
          const validate = async (trigger, callback) => {
            if (isResettingField || !props.prop) {
              return false;
            }
            const hasCallback = isFunction$2(callback);
            if (!validateEnabled.value) {
              callback == null ? void 0 : callback(false);
              return false;
            }
            const rules2 = getFilteredRule(trigger);
            if (rules2.length === 0) {
              callback == null ? void 0 : callback(true);
              return true;
            }
            setValidationState("validating");
            return doValidate(rules2).then(() => {
              callback == null ? void 0 : callback(true);
              return true;
            }).catch((err) => {
              const { fields } = err;
              callback == null ? void 0 : callback(false, fields);
              return hasCallback ? false : Promise.reject(fields);
            });
          };
          const clearValidate = () => {
            setValidationState("");
            validateMessage.value = "";
            isResettingField = false;
          };
          const resetField = async () => {
            const model = formContext == null ? void 0 : formContext.model;
            if (!model || !props.prop)
              return;
            const computedValue = getProp(model, props.prop);
            isResettingField = true;
            computedValue.value = clone$2(initialValue);
            await vue.nextTick();
            clearValidate();
            isResettingField = false;
          };
          const addInputId = (id) => {
            if (!inputIds.value.includes(id)) {
              inputIds.value.push(id);
            }
          };
          const removeInputId = (id) => {
            inputIds.value = inputIds.value.filter((listId) => listId !== id);
          };
          vue.watch(() => props.error, (val) => {
            validateMessage.value = val || "";
            setValidationState(val ? "error" : "");
          }, { immediate: true });
          vue.watch(() => props.validateStatus, (val) => setValidationState(val || ""));
          const context = vue.reactive({
            ...vue.toRefs(props),
            $el: formItemRef,
            size: _size,
            validateMessage,
            validateState,
            labelId,
            inputIds,
            isGroup,
            hasLabel,
            fieldValue,
            addInputId,
            removeInputId,
            resetField,
            clearValidate,
            validate,
            propString
          });
          vue.provide(formItemContextKey, context);
          vue.onMounted(() => {
            if (props.prop) {
              formContext == null ? void 0 : formContext.addField(context);
              initialValue = clone$2(fieldValue.value);
            }
          });
          vue.onBeforeUnmount(() => {
            formContext == null ? void 0 : formContext.removeField(context);
          });
          expose({
            size: _size,
            validateMessage,
            validateState,
            validate,
            clearValidate,
            resetField
          });
          return (_ctx, _cache) => {
            var _a2;
            return vue.openBlock(), vue.createElementBlock("div", {
              ref_key: "formItemRef",
              ref: formItemRef,
              class: vue.normalizeClass(vue.unref(formItemClasses)),
              role: vue.unref(isGroup) ? "group" : void 0,
              "aria-labelledby": vue.unref(isGroup) ? vue.unref(labelId) : void 0
            }, [
              vue.createVNode(vue.unref(FormLabelWrap), {
                "is-auto-width": vue.unref(labelStyle).width === "auto",
                "update-all": ((_a2 = vue.unref(formContext)) == null ? void 0 : _a2.labelWidth) === "auto"
              }, {
                default: vue.withCtx(() => [
                  !!(_ctx.label || _ctx.$slots.label) ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(labelFor) ? "label" : "div"), {
                    key: 0,
                    id: vue.unref(labelId),
                    for: vue.unref(labelFor),
                    class: vue.normalizeClass(vue.unref(ns).e("label")),
                    style: vue.normalizeStyle(vue.unref(labelStyle))
                  }, {
                    default: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "label", { label: vue.unref(currentLabel) }, () => [
                        vue.createTextVNode(vue.toDisplayString(vue.unref(currentLabel)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["id", "for", "class", "style"])) : vue.createCommentVNode("v-if", true)
                ]),
                _: 3
              }, 8, ["is-auto-width", "update-all"]),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).e("content")),
                style: vue.normalizeStyle(vue.unref(contentStyle))
              }, [
                vue.renderSlot(_ctx.$slots, "default"),
                vue.createVNode(vue.TransitionGroup, {
                  name: `${vue.unref(ns).namespace.value}-zoom-in-top`
                }, {
                  default: vue.withCtx(() => [
                    vue.unref(shouldShowError) ? vue.renderSlot(_ctx.$slots, "error", {
                      key: 0,
                      error: validateMessage.value
                    }, () => [
                      vue.createElementVNode("div", {
                        class: vue.normalizeClass(vue.unref(validateClasses))
                      }, vue.toDisplayString(validateMessage.value), 3)
                    ]) : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 3
                }, 8, ["name"])
              ], 6)
            ], 10, ["role", "aria-labelledby"]);
          };
        }
      });
      var FormItem = _export_sfc(_sfc_main$6, [["__file", "form-item.vue"]]);
      const ElForm = withInstall(Form, {
        FormItem
      });
      const ElFormItem = withNoopInstall(FormItem);
      const getCell = function(event) {
        var _a2;
        return (_a2 = event.target) == null ? void 0 : _a2.closest("td");
      };
      const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
        if (!sortKey && !sortMethod && (!sortBy || isArray$2(sortBy) && !sortBy.length)) {
          return array;
        }
        if (isString$2(reverse)) {
          reverse = reverse === "descending" ? -1 : 1;
        } else {
          reverse = reverse && reverse < 0 ? -1 : 1;
        }
        const getKey = sortMethod ? null : function(value, index) {
          if (sortBy) {
            return flatMap(castArray$1(sortBy), (by) => {
              if (isString$2(by)) {
                return get$3(value, by);
              } else {
                return by(value, index, array);
              }
            });
          }
          if (sortKey !== "$key") {
            if (isObject$2(value) && "$value" in value)
              value = value.$value;
          }
          return [
            isObject$2(value) ? sortKey ? get$3(value, sortKey) : null : value
          ];
        };
        const compare = function(a2, b2) {
          var _a2, _b, _c, _d, _e, _f;
          if (sortMethod) {
            return sortMethod(a2.value, b2.value);
          }
          for (let i = 0, len = (_b = (_a2 = a2.key) == null ? void 0 : _a2.length) != null ? _b : 0; i < len; i++) {
            if (((_c = a2.key) == null ? void 0 : _c[i]) < ((_d = b2.key) == null ? void 0 : _d[i])) {
              return -1;
            }
            if (((_e = a2.key) == null ? void 0 : _e[i]) > ((_f = b2.key) == null ? void 0 : _f[i])) {
              return 1;
            }
          }
          return 0;
        };
        return array.map((value, index) => {
          return {
            value,
            index,
            key: getKey ? getKey(value, index) : null
          };
        }).sort((a2, b2) => {
          let order = compare(a2, b2);
          if (!order) {
            order = a2.index - b2.index;
          }
          return order * +reverse;
        }).map((item) => item.value);
      };
      const getColumnById = function(table, columnId) {
        let column = null;
        table.columns.forEach((item) => {
          if (item.id === columnId) {
            column = item;
          }
        });
        return column;
      };
      const getColumnByKey = function(table, columnKey) {
        let column = null;
        for (let i = 0; i < table.columns.length; i++) {
          const item = table.columns[i];
          if (item.columnKey === columnKey) {
            column = item;
            break;
          }
        }
        if (!column)
          throwError("ElTable", `No column matching with column-key: ${columnKey}`);
        return column;
      };
      const getColumnByCell = function(table, cell, namespace) {
        const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
        if (matches) {
          return getColumnById(table, matches[0]);
        }
        return null;
      };
      const getRowIdentity = (row, rowKey) => {
        if (!row)
          throw new Error("Row is required when get row identity");
        if (isString$2(rowKey)) {
          if (!rowKey.includes(".")) {
            return `${row[rowKey]}`;
          }
          const key = rowKey.split(".");
          let current = row;
          for (const element of key) {
            current = current[element];
          }
          return `${current}`;
        } else if (isFunction$2(rowKey)) {
          return rowKey.call(null, row);
        }
        return "";
      };
      const getKeysMap = function(array, rowKey, flatten2 = false, childrenKey = "children") {
        const data = array || [];
        const arrayMap2 = {};
        data.forEach((row, index) => {
          arrayMap2[getRowIdentity(row, rowKey)] = { row, index };
          if (flatten2) {
            const children = row[childrenKey];
            if (isArray$2(children)) {
              Object.assign(arrayMap2, getKeysMap(children, rowKey, true, childrenKey));
            }
          }
        });
        return arrayMap2;
      };
      function mergeOptions(defaults2, config) {
        const options = {};
        let key;
        for (key in defaults2) {
          options[key] = defaults2[key];
        }
        for (key in config) {
          if (hasOwn(config, key)) {
            const value = config[key];
            if (!isUndefined$1(value)) {
              options[key] = value;
            }
          }
        }
        return options;
      }
      function parseWidth(width) {
        if (width === "")
          return width;
        if (!isUndefined$1(width)) {
          width = Number.parseInt(width, 10);
          if (Number.isNaN(width)) {
            width = "";
          }
        }
        return width;
      }
      function parseMinWidth(minWidth) {
        if (minWidth === "")
          return minWidth;
        if (!isUndefined$1(minWidth)) {
          minWidth = parseWidth(minWidth);
          if (Number.isNaN(minWidth)) {
            minWidth = 80;
          }
        }
        return minWidth;
      }
      function parseHeight(height) {
        if (isNumber$1(height)) {
          return height;
        }
        if (isString$2(height)) {
          if (/^\d+(?:px)?$/.test(height)) {
            return Number.parseInt(height, 10);
          } else {
            return height;
          }
        }
        return null;
      }
      function compose(...funcs) {
        if (funcs.length === 0) {
          return (arg) => arg;
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        return funcs.reduce((a2, b2) => (...args) => a2(b2(...args)));
      }
      function toggleRowStatus(statusArr, row, newVal, tableTreeProps, selectable, rowIndex, rowKey) {
        let _rowIndex = rowIndex != null ? rowIndex : 0;
        let changed = false;
        const getIndex = () => {
          if (!rowKey) {
            return statusArr.indexOf(row);
          }
          const id = getRowIdentity(row, rowKey);
          return statusArr.findIndex((item) => getRowIdentity(item, rowKey) === id);
        };
        const index = getIndex();
        const included = index !== -1;
        const isRowSelectable = selectable == null ? void 0 : selectable.call(null, row, _rowIndex);
        const toggleStatus = (type) => {
          if (type === "add") {
            statusArr.push(row);
          } else {
            statusArr.splice(index, 1);
          }
          changed = true;
        };
        const getChildrenCount = (row2) => {
          let count = 0;
          const children = (tableTreeProps == null ? void 0 : tableTreeProps.children) && row2[tableTreeProps.children];
          if (children && isArray$2(children)) {
            count += children.length;
            children.forEach((item) => {
              count += getChildrenCount(item);
            });
          }
          return count;
        };
        if (!selectable || isRowSelectable) {
          if (isBoolean(newVal)) {
            if (newVal && !included) {
              toggleStatus("add");
            } else if (!newVal && included) {
              toggleStatus("remove");
            }
          } else {
            included ? toggleStatus("remove") : toggleStatus("add");
          }
        }
        if (!(tableTreeProps == null ? void 0 : tableTreeProps.checkStrictly) && (tableTreeProps == null ? void 0 : tableTreeProps.children) && isArray$2(row[tableTreeProps.children])) {
          row[tableTreeProps.children].forEach((item) => {
            const childChanged = toggleRowStatus(statusArr, item, newVal != null ? newVal : !included, tableTreeProps, selectable, _rowIndex + 1, rowKey);
            _rowIndex += getChildrenCount(item) + 1;
            if (childChanged) {
              changed = childChanged;
            }
          });
        }
        return changed;
      }
      function walkTreeNode(root2, cb, childrenKey = "children", lazyKey = "hasChildren", lazy = false) {
        const isNil2 = (array) => !(isArray$2(array) && array.length);
        function _walker(parent2, children, level) {
          cb(parent2, children, level);
          children.forEach((item) => {
            if (item[lazyKey] && lazy) {
              cb(item, null, level + 1);
              return;
            }
            const children2 = item[childrenKey];
            if (!isNil2(children2)) {
              _walker(item, children2, level + 1);
            }
          });
        }
        root2.forEach((item) => {
          if (item[lazyKey] && lazy) {
            cb(item, null, 0);
            return;
          }
          const children = item[childrenKey];
          if (!isNil2(children)) {
            _walker(item, children, 0);
          }
        });
      }
      const getTableOverflowTooltipProps = (props, innerText, row, column) => {
        const popperOptions = {
          strategy: "fixed",
          ...props.popperOptions
        };
        const tooltipFormatterContent = isFunction$2(column == null ? void 0 : column.tooltipFormatter) ? column.tooltipFormatter({
          row,
          column,
          cellValue: getProp(row, column.property).value
        }) : void 0;
        if (vue.isVNode(tooltipFormatterContent)) {
          return {
            slotContent: tooltipFormatterContent,
            content: null,
            ...props,
            popperOptions
          };
        }
        return {
          slotContent: null,
          content: tooltipFormatterContent != null ? tooltipFormatterContent : innerText,
          ...props,
          popperOptions
        };
      };
      let removePopper = null;
      function createTablePopper(props, popperContent, row, column, trigger, table) {
        var _a2;
        const tableOverflowTooltipProps = getTableOverflowTooltipProps(props, popperContent, row, column);
        const mergedProps = {
          ...tableOverflowTooltipProps,
          slotContent: void 0
        };
        if ((removePopper == null ? void 0 : removePopper.trigger) === trigger) {
          const comp = (_a2 = removePopper.vm) == null ? void 0 : _a2.component;
          merge(comp == null ? void 0 : comp.props, mergedProps);
          if (comp && tableOverflowTooltipProps.slotContent) {
            comp.slots.content = () => [tableOverflowTooltipProps.slotContent];
          }
          return;
        }
        removePopper == null ? void 0 : removePopper();
        const parentNode = table == null ? void 0 : table.refs.tableWrapper;
        const ns = parentNode == null ? void 0 : parentNode.dataset.prefix;
        const vm = vue.createVNode(ElTooltip, {
          virtualTriggering: true,
          virtualRef: trigger,
          appendTo: parentNode,
          placement: "top",
          transition: "none",
          offset: 0,
          hideAfter: 0,
          ...mergedProps
        }, tableOverflowTooltipProps.slotContent ? {
          content: () => tableOverflowTooltipProps.slotContent
        } : void 0);
        vm.appContext = { ...table.appContext, ...table };
        const container = document.createElement("div");
        vue.render(vm, container);
        vm.component.exposed.onOpen();
        const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns}-scrollbar__wrap`);
        removePopper = () => {
          var _a22, _b;
          if ((_b = (_a22 = vm.component) == null ? void 0 : _a22.exposed) == null ? void 0 : _b.onClose) {
            vm.component.exposed.onClose();
          }
          vue.render(null, container);
          const currentRemovePopper = removePopper;
          scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", currentRemovePopper);
          currentRemovePopper.trigger = void 0;
          currentRemovePopper.vm = void 0;
          removePopper = null;
        };
        removePopper.trigger = trigger != null ? trigger : void 0;
        removePopper.vm = vm;
        scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", removePopper);
      }
      function getCurrentColumns(column) {
        if (column.children) {
          return flatMap(column.children, getCurrentColumns);
        } else {
          return [column];
        }
      }
      function getColSpan(colSpan, column) {
        return colSpan + column.colSpan;
      }
      const isFixedColumn = (index, fixed, store, realColumns) => {
        let start = 0;
        let after = index;
        const columns = store.states.columns.value;
        if (realColumns) {
          const curColumns = getCurrentColumns(realColumns[index]);
          const preColumns = columns.slice(0, columns.indexOf(curColumns[0]));
          start = preColumns.reduce(getColSpan, 0);
          after = start + curColumns.reduce(getColSpan, 0) - 1;
        } else {
          start = index;
        }
        let fixedLayout;
        switch (fixed) {
          case "left":
            if (after < store.states.fixedLeafColumnsLength.value) {
              fixedLayout = "left";
            }
            break;
          case "right":
            if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
              fixedLayout = "right";
            }
            break;
          default:
            if (after < store.states.fixedLeafColumnsLength.value) {
              fixedLayout = "left";
            } else if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
              fixedLayout = "right";
            }
        }
        return fixedLayout ? {
          direction: fixedLayout,
          start,
          after
        } : {};
      };
      const getFixedColumnsClass = (namespace, index, fixed, store, realColumns, offset2 = 0) => {
        const classes = [];
        const { direction, start, after } = isFixedColumn(index, fixed, store, realColumns);
        if (direction) {
          const isLeft = direction === "left";
          classes.push(`${namespace}-fixed-column--${direction}`);
          if (isLeft && after + offset2 === store.states.fixedLeafColumnsLength.value - 1) {
            classes.push("is-last-column");
          } else if (!isLeft && start - offset2 === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
            classes.push("is-first-column");
          }
        }
        return classes;
      };
      function getOffset(offset2, column) {
        return offset2 + (isNull(column.realWidth) || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
      }
      const getFixedColumnOffset = (index, fixed, store, realColumns) => {
        const {
          direction,
          start = 0,
          after = 0
        } = isFixedColumn(index, fixed, store, realColumns);
        if (!direction) {
          return;
        }
        const styles = {};
        const isLeft = direction === "left";
        const columns = store.states.columns.value;
        if (isLeft) {
          styles.left = columns.slice(0, start).reduce(getOffset, 0);
        } else {
          styles.right = columns.slice(after + 1).reverse().reduce(getOffset, 0);
        }
        return styles;
      };
      const ensurePosition = (style, key) => {
        if (!style)
          return;
        if (!Number.isNaN(style[key])) {
          style[key] = `${style[key]}px`;
        }
      };
      function useExpand(watcherData) {
        const instance = vue.getCurrentInstance();
        const defaultExpandAll = vue.ref(false);
        const expandRows = vue.ref([]);
        const updateExpandRows = () => {
          const data = watcherData.data.value || [];
          const rowKey = watcherData.rowKey.value;
          if (defaultExpandAll.value) {
            expandRows.value = data.slice();
          } else if (rowKey) {
            const expandRowsMap = getKeysMap(expandRows.value, rowKey);
            expandRows.value = data.reduce((prev, row) => {
              const rowId = getRowIdentity(row, rowKey);
              const rowInfo = expandRowsMap[rowId];
              if (rowInfo) {
                prev.push(row);
              }
              return prev;
            }, []);
          } else {
            expandRows.value = [];
          }
        };
        const toggleRowExpansion = (row, expanded) => {
          const changed = toggleRowStatus(expandRows.value, row, expanded, void 0, void 0, void 0, watcherData.rowKey.value);
          if (changed) {
            instance.emit("expand-change", row, expandRows.value.slice());
          }
        };
        const setExpandRowKeys = (rowKeys) => {
          instance.store.assertRowKey();
          const data = watcherData.data.value || [];
          const rowKey = watcherData.rowKey.value;
          const keysMap = getKeysMap(data, rowKey);
          expandRows.value = rowKeys.reduce((prev, cur) => {
            const info = keysMap[cur];
            if (info) {
              prev.push(info.row);
            }
            return prev;
          }, []);
        };
        const isRowExpanded = (row) => {
          const rowKey = watcherData.rowKey.value;
          if (rowKey) {
            const expandMap = getKeysMap(expandRows.value, rowKey);
            return !!expandMap[getRowIdentity(row, rowKey)];
          }
          return expandRows.value.includes(row);
        };
        return {
          updateExpandRows,
          toggleRowExpansion,
          setExpandRowKeys,
          isRowExpanded,
          states: {
            expandRows,
            defaultExpandAll
          }
        };
      }
      function useCurrent(watcherData) {
        const instance = vue.getCurrentInstance();
        const _currentRowKey = vue.ref(null);
        const currentRow = vue.ref(null);
        const setCurrentRowKey = (key) => {
          instance.store.assertRowKey();
          _currentRowKey.value = key;
          setCurrentRowByKey(key);
        };
        const restoreCurrentRowKey = () => {
          _currentRowKey.value = null;
        };
        const setCurrentRowByKey = (key) => {
          var _a2;
          const { data, rowKey } = watcherData;
          let _currentRow = null;
          if (rowKey.value) {
            _currentRow = (_a2 = (vue.unref(data) || []).find((item) => getRowIdentity(item, rowKey.value) === key)) != null ? _a2 : null;
          }
          currentRow.value = _currentRow != null ? _currentRow : null;
          instance.emit("current-change", currentRow.value, null);
        };
        const updateCurrentRow = (_currentRow) => {
          const oldCurrentRow = currentRow.value;
          if (_currentRow && _currentRow !== oldCurrentRow) {
            currentRow.value = _currentRow;
            instance.emit("current-change", currentRow.value, oldCurrentRow);
            return;
          }
          if (!_currentRow && oldCurrentRow) {
            currentRow.value = null;
            instance.emit("current-change", null, oldCurrentRow);
          }
        };
        const updateCurrentRowData = () => {
          const rowKey = watcherData.rowKey.value;
          const data = watcherData.data.value || [];
          const oldCurrentRow = currentRow.value;
          if (oldCurrentRow && !data.includes(oldCurrentRow)) {
            if (rowKey) {
              const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
              setCurrentRowByKey(currentRowKey);
            } else {
              currentRow.value = null;
            }
            if (isNull(currentRow.value)) {
              instance.emit("current-change", null, oldCurrentRow);
            }
          } else if (_currentRowKey.value) {
            setCurrentRowByKey(_currentRowKey.value);
            restoreCurrentRowKey();
          }
        };
        return {
          setCurrentRowKey,
          restoreCurrentRowKey,
          setCurrentRowByKey,
          updateCurrentRow,
          updateCurrentRowData,
          states: {
            _currentRowKey,
            currentRow
          }
        };
      }
      function useTree(watcherData) {
        const expandRowKeys = vue.ref([]);
        const treeData = vue.ref({});
        const indent = vue.ref(16);
        const lazy = vue.ref(false);
        const lazyTreeNodeMap = vue.ref({});
        const lazyColumnIdentifier = vue.ref("hasChildren");
        const childrenColumnName = vue.ref("children");
        const checkStrictly = vue.ref(false);
        const instance = vue.getCurrentInstance();
        const normalizedData = vue.computed(() => {
          if (!watcherData.rowKey.value)
            return {};
          const data = watcherData.data.value || [];
          return normalize(data);
        });
        const normalizedLazyNode = vue.computed(() => {
          const rowKey = watcherData.rowKey.value;
          const keys2 = Object.keys(lazyTreeNodeMap.value);
          const res = {};
          if (!keys2.length)
            return res;
          keys2.forEach((key) => {
            if (lazyTreeNodeMap.value[key].length) {
              const item = { children: [] };
              lazyTreeNodeMap.value[key].forEach((row) => {
                const currentRowKey = getRowIdentity(row, rowKey);
                item.children.push(currentRowKey);
                if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
                  res[currentRowKey] = { children: [] };
                }
              });
              res[key] = item;
            }
          });
          return res;
        });
        const normalize = (data) => {
          const rowKey = watcherData.rowKey.value;
          const res = {};
          walkTreeNode(data, (parent2, children, level) => {
            const parentId = getRowIdentity(parent2, rowKey);
            if (isArray$2(children)) {
              res[parentId] = {
                children: children.map((row) => getRowIdentity(row, rowKey)),
                level
              };
            } else if (lazy.value) {
              res[parentId] = {
                children: [],
                lazy: true,
                level
              };
            }
          }, childrenColumnName.value, lazyColumnIdentifier.value, lazy.value);
          return res;
        };
        const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll) => {
          var _a2, _b;
          ifExpandAll || (ifExpandAll = (_a2 = instance.store) == null ? void 0 : _a2.states.defaultExpandAll.value);
          const nested = normalizedData.value;
          const normalizedLazyNode_ = normalizedLazyNode.value;
          const keys2 = Object.keys(nested);
          const newTreeData = {};
          if (keys2.length) {
            const oldTreeData = vue.unref(treeData);
            const rootLazyRowKeys = [];
            const getExpanded = (oldValue, key) => {
              if (ifChangeExpandRowKeys) {
                if (expandRowKeys.value) {
                  return ifExpandAll || expandRowKeys.value.includes(key);
                } else {
                  return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
                }
              } else {
                const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
                return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
              }
            };
            keys2.forEach((key) => {
              const oldValue = oldTreeData[key];
              const newValue = { ...nested[key] };
              newValue.expanded = getExpanded(oldValue, key);
              if (newValue.lazy) {
                const { loaded = false, loading = false } = oldValue || {};
                newValue.loaded = !!loaded;
                newValue.loading = !!loading;
                rootLazyRowKeys.push(key);
              }
              newTreeData[key] = newValue;
            });
            const lazyKeys = Object.keys(normalizedLazyNode_);
            if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
              lazyKeys.forEach((key) => {
                var _a22;
                const oldValue = oldTreeData[key];
                const lazyNodeChildren = normalizedLazyNode_[key].children;
                if (rootLazyRowKeys.includes(key)) {
                  if (((_a22 = newTreeData[key].children) == null ? void 0 : _a22.length) !== 0) {
                    throw new Error("[ElTable]children must be an empty array.");
                  }
                  newTreeData[key].children = lazyNodeChildren;
                } else {
                  const { loaded = false, loading = false } = oldValue || {};
                  newTreeData[key] = {
                    lazy: true,
                    loaded: !!loaded,
                    loading: !!loading,
                    expanded: getExpanded(oldValue, key),
                    children: lazyNodeChildren,
                    level: void 0
                  };
                }
              });
            }
          }
          treeData.value = newTreeData;
          (_b = instance.store) == null ? void 0 : _b.updateTableScrollY();
        };
        vue.watch(() => expandRowKeys.value, () => {
          updateTreeData(true);
        });
        vue.watch(() => normalizedData.value, () => {
          updateTreeData();
        });
        vue.watch(() => normalizedLazyNode.value, () => {
          updateTreeData();
        });
        const updateTreeExpandKeys = (value) => {
          expandRowKeys.value = value;
          updateTreeData();
        };
        const isUseLazy = (data) => {
          return lazy.value && data && "loaded" in data && !data.loaded;
        };
        const toggleTreeExpansion = (row, expanded) => {
          instance.store.assertRowKey();
          const rowKey = watcherData.rowKey.value;
          const id = getRowIdentity(row, rowKey);
          const data = id && treeData.value[id];
          if (id && data && "expanded" in data) {
            const oldExpanded = data.expanded;
            expanded = isUndefined$1(expanded) ? !data.expanded : expanded;
            treeData.value[id].expanded = expanded;
            if (oldExpanded !== expanded) {
              instance.emit("expand-change", row, expanded);
            }
            isUseLazy(data) && loadData(row, id, data);
            instance.store.updateTableScrollY();
          }
        };
        const loadOrToggle = (row) => {
          instance.store.assertRowKey();
          const rowKey = watcherData.rowKey.value;
          const id = getRowIdentity(row, rowKey);
          const data = treeData.value[id];
          if (isUseLazy(data)) {
            loadData(row, id, data);
          } else {
            toggleTreeExpansion(row, void 0);
          }
        };
        const loadData = (row, key, treeNode) => {
          const { load } = instance.props;
          if (load && !treeData.value[key].loaded) {
            treeData.value[key].loading = true;
            load(row, treeNode, (data) => {
              if (!isArray$2(data)) {
                throw new TypeError("[ElTable] data must be an array");
              }
              treeData.value[key].loading = false;
              treeData.value[key].loaded = true;
              treeData.value[key].expanded = true;
              if (data.length) {
                lazyTreeNodeMap.value[key] = data;
              }
              instance.emit("expand-change", row, true);
            });
          }
        };
        const updateKeyChildren = (key, data) => {
          const { lazy: lazy2, rowKey } = instance.props;
          if (!lazy2)
            return;
          if (!rowKey)
            throw new Error("[Table] rowKey is required in updateKeyChild");
          if (lazyTreeNodeMap.value[key]) {
            lazyTreeNodeMap.value[key] = data;
          }
        };
        return {
          loadData,
          loadOrToggle,
          toggleTreeExpansion,
          updateTreeExpandKeys,
          updateTreeData,
          updateKeyChildren,
          normalize,
          states: {
            expandRowKeys,
            treeData,
            indent,
            lazy,
            lazyTreeNodeMap,
            lazyColumnIdentifier,
            childrenColumnName,
            checkStrictly
          }
        };
      }
      const sortData = (data, states) => {
        const sortingColumn = states.sortingColumn;
        if (!sortingColumn || isString$2(sortingColumn.sortable)) {
          return data;
        }
        return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
      };
      const doFlattenColumns = (columns) => {
        const result = [];
        columns.forEach((column) => {
          if (column.children && column.children.length > 0) {
            result.push.apply(result, doFlattenColumns(column.children));
          } else {
            result.push(column);
          }
        });
        return result;
      };
      function useWatcher$1() {
        var _a2;
        const instance = vue.getCurrentInstance();
        const { size: tableSize } = vue.toRefs((_a2 = instance.proxy) == null ? void 0 : _a2.$props);
        const rowKey = vue.ref(null);
        const data = vue.ref([]);
        const _data = vue.ref([]);
        const isComplex = vue.ref(false);
        const _columns = vue.ref([]);
        const originColumns = vue.ref([]);
        const columns = vue.ref([]);
        const fixedColumns = vue.ref([]);
        const rightFixedColumns = vue.ref([]);
        const leafColumns = vue.ref([]);
        const fixedLeafColumns = vue.ref([]);
        const rightFixedLeafColumns = vue.ref([]);
        const updateOrderFns = [];
        const leafColumnsLength = vue.ref(0);
        const fixedLeafColumnsLength = vue.ref(0);
        const rightFixedLeafColumnsLength = vue.ref(0);
        const isAllSelected = vue.ref(false);
        const selection = vue.ref([]);
        const reserveSelection = vue.ref(false);
        const selectOnIndeterminate = vue.ref(false);
        const selectable = vue.ref(null);
        const filters = vue.ref({});
        const filteredData = vue.ref(null);
        const sortingColumn = vue.ref(null);
        const sortProp = vue.ref(null);
        const sortOrder = vue.ref(null);
        const hoverRow = vue.ref(null);
        const selectedMap = vue.computed(() => {
          return rowKey.value ? getKeysMap(selection.value, rowKey.value) : void 0;
        });
        vue.watch(data, () => {
          var _a22;
          if (instance.state) {
            scheduleLayout(false);
            const needUpdateFixed = instance.props.tableLayout === "auto";
            if (needUpdateFixed) {
              (_a22 = instance.refs.tableHeaderRef) == null ? void 0 : _a22.updateFixedColumnStyle();
            }
          }
        }, {
          deep: true
        });
        const assertRowKey = () => {
          if (!rowKey.value)
            throw new Error("[ElTable] prop row-key is required");
        };
        const updateChildFixed = (column) => {
          var _a22;
          (_a22 = column.children) == null ? void 0 : _a22.forEach((childColumn) => {
            childColumn.fixed = column.fixed;
            updateChildFixed(childColumn);
          });
        };
        const updateColumns = () => {
          _columns.value.forEach((column) => {
            updateChildFixed(column);
          });
          fixedColumns.value = _columns.value.filter((column) => [true, "left"].includes(column.fixed));
          const selectColumn = _columns.value.find((column) => column.type === "selection");
          let selectColFixLeft;
          if (selectColumn && selectColumn.fixed !== "right" && !fixedColumns.value.includes(selectColumn)) {
            const selectColumnIndex = _columns.value.indexOf(selectColumn);
            if (selectColumnIndex === 0 && fixedColumns.value.length) {
              fixedColumns.value.unshift(selectColumn);
              selectColFixLeft = true;
            }
          }
          rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
          const notFixedColumns = _columns.value.filter((column) => (selectColFixLeft ? column.type !== "selection" : true) && !column.fixed);
          originColumns.value = Array.from(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
          const leafColumns2 = doFlattenColumns(notFixedColumns);
          const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
          const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
          leafColumnsLength.value = leafColumns2.length;
          fixedLeafColumnsLength.value = fixedLeafColumns2.length;
          rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
          columns.value = Array.from(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
          isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
        };
        const scheduleLayout = (needUpdateColumns, immediate = false) => {
          if (needUpdateColumns) {
            updateColumns();
          }
          if (immediate) {
            instance.state.doLayout();
          } else {
            instance.state.debouncedUpdateLayout();
          }
        };
        const isSelected = (row) => {
          if (selectedMap.value) {
            return !!selectedMap.value[getRowIdentity(row, rowKey.value)];
          } else {
            return selection.value.includes(row);
          }
        };
        const clearSelection = () => {
          isAllSelected.value = false;
          const oldSelection = selection.value;
          selection.value = [];
          if (oldSelection.length) {
            instance.emit("selection-change", []);
          }
        };
        const cleanSelection = () => {
          var _a22, _b;
          let deleted;
          if (rowKey.value) {
            deleted = [];
            const childrenKey = (_b = (_a22 = instance == null ? void 0 : instance.store) == null ? void 0 : _a22.states) == null ? void 0 : _b.childrenColumnName.value;
            const dataMap = getKeysMap(data.value, rowKey.value, true, childrenKey);
            for (const key in selectedMap.value) {
              if (hasOwn(selectedMap.value, key) && !dataMap[key]) {
                deleted.push(selectedMap.value[key].row);
              }
            }
          } else {
            deleted = selection.value.filter((item) => !data.value.includes(item));
          }
          if (deleted.length) {
            const newSelection = selection.value.filter((item) => !deleted.includes(item));
            selection.value = newSelection;
            instance.emit("selection-change", newSelection.slice());
          }
        };
        const getSelectionRows = () => {
          return (selection.value || []).slice();
        };
        const toggleRowSelection = (row, selected, emitChange = true, ignoreSelectable = false) => {
          var _a22, _b, _c, _d;
          const treeProps = {
            children: (_b = (_a22 = instance == null ? void 0 : instance.store) == null ? void 0 : _a22.states) == null ? void 0 : _b.childrenColumnName.value,
            checkStrictly: (_d = (_c = instance == null ? void 0 : instance.store) == null ? void 0 : _c.states) == null ? void 0 : _d.checkStrictly.value
          };
          const changed = toggleRowStatus(selection.value, row, selected, treeProps, ignoreSelectable ? void 0 : selectable.value, data.value.indexOf(row), rowKey.value);
          if (changed) {
            const newSelection = (selection.value || []).slice();
            if (emitChange) {
              instance.emit("select", newSelection, row);
            }
            instance.emit("selection-change", newSelection);
          }
        };
        const _toggleAllSelection = () => {
          var _a22, _b;
          const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
          isAllSelected.value = value;
          let selectionChanged = false;
          let childrenCount = 0;
          const rowKey2 = (_b = (_a22 = instance == null ? void 0 : instance.store) == null ? void 0 : _a22.states) == null ? void 0 : _b.rowKey.value;
          const { childrenColumnName } = instance.store.states;
          const treeProps = {
            children: childrenColumnName.value,
            checkStrictly: false
          };
          data.value.forEach((row, index) => {
            const rowIndex = index + childrenCount;
            if (toggleRowStatus(selection.value, row, value, treeProps, selectable.value, rowIndex, rowKey2)) {
              selectionChanged = true;
            }
            childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
          });
          if (selectionChanged) {
            instance.emit("selection-change", selection.value ? selection.value.slice() : []);
          }
          instance.emit("select-all", (selection.value || []).slice());
        };
        const updateAllSelected = () => {
          var _a22;
          if (((_a22 = data.value) == null ? void 0 : _a22.length) === 0) {
            isAllSelected.value = false;
            return;
          }
          const { childrenColumnName } = instance.store.states;
          let rowIndex = 0;
          let selectedCount = 0;
          const checkSelectedStatus = (data2) => {
            var _a3;
            for (const row of data2) {
              const isRowSelectable = selectable.value && selectable.value.call(null, row, rowIndex);
              if (!isSelected(row)) {
                if (!selectable.value || isRowSelectable) {
                  return false;
                }
              } else {
                selectedCount++;
              }
              rowIndex++;
              if (((_a3 = row[childrenColumnName.value]) == null ? void 0 : _a3.length) && !checkSelectedStatus(row[childrenColumnName.value])) {
                return false;
              }
            }
            return true;
          };
          const isAllSelected_ = checkSelectedStatus(data.value || []);
          isAllSelected.value = selectedCount === 0 ? false : isAllSelected_;
        };
        const getChildrenCount = (rowKey2) => {
          var _a22;
          if (!instance || !instance.store)
            return 0;
          const { treeData } = instance.store.states;
          let count = 0;
          const children = (_a22 = treeData.value[rowKey2]) == null ? void 0 : _a22.children;
          if (children) {
            count += children.length;
            children.forEach((childKey) => {
              count += getChildrenCount(childKey);
            });
          }
          return count;
        };
        const updateFilters = (column, values) => {
          const filters_ = {};
          castArray$1(column).forEach((col) => {
            filters.value[col.id] = values;
            filters_[col.columnKey || col.id] = values;
          });
          return filters_;
        };
        const updateSort = (column, prop, order) => {
          if (sortingColumn.value && sortingColumn.value !== column) {
            sortingColumn.value.order = null;
          }
          sortingColumn.value = column;
          sortProp.value = prop;
          sortOrder.value = order;
        };
        const execFilter = () => {
          let sourceData = vue.unref(_data);
          Object.keys(filters.value).forEach((columnId) => {
            const values = filters.value[columnId];
            if (!values || values.length === 0)
              return;
            const column = getColumnById({
              columns: columns.value
            }, columnId);
            if (column && column.filterMethod) {
              sourceData = sourceData.filter((row) => {
                return values.some((value) => column.filterMethod.call(null, value, row, column));
              });
            }
          });
          filteredData.value = sourceData;
        };
        const execSort = () => {
          var _a22;
          data.value = sortData((_a22 = filteredData.value) != null ? _a22 : [], {
            sortingColumn: sortingColumn.value,
            sortProp: sortProp.value,
            sortOrder: sortOrder.value
          });
        };
        const execQuery = (ignore = void 0) => {
          if (!(ignore == null ? void 0 : ignore.filter)) {
            execFilter();
          }
          execSort();
        };
        const clearFilter = (columnKeys) => {
          const { tableHeaderRef } = instance.refs;
          if (!tableHeaderRef)
            return;
          const panels = Object.assign({}, tableHeaderRef.filterPanels);
          const keys2 = Object.keys(panels);
          if (!keys2.length)
            return;
          if (isString$2(columnKeys)) {
            columnKeys = [columnKeys];
          }
          if (isArray$2(columnKeys)) {
            const columns_ = columnKeys.map((key) => getColumnByKey({
              columns: columns.value
            }, key));
            keys2.forEach((key) => {
              const column = columns_.find((col) => col.id === key);
              if (column) {
                column.filteredValue = [];
              }
            });
            instance.store.commit("filterChange", {
              column: columns_,
              values: [],
              silent: true,
              multi: true
            });
          } else {
            keys2.forEach((key) => {
              const column = columns.value.find((col) => col.id === key);
              if (column) {
                column.filteredValue = [];
              }
            });
            filters.value = {};
            instance.store.commit("filterChange", {
              column: {},
              values: [],
              silent: true
            });
          }
        };
        const clearSort = () => {
          if (!sortingColumn.value)
            return;
          updateSort(null, null, null);
          instance.store.commit("changeSortCondition", {
            silent: true
          });
        };
        const {
          setExpandRowKeys,
          toggleRowExpansion,
          updateExpandRows,
          states: expandStates,
          isRowExpanded
        } = useExpand({
          data,
          rowKey
        });
        const {
          updateTreeExpandKeys,
          toggleTreeExpansion,
          updateTreeData,
          updateKeyChildren,
          loadOrToggle,
          states: treeStates
        } = useTree({
          data,
          rowKey
        });
        const {
          updateCurrentRowData,
          updateCurrentRow,
          setCurrentRowKey,
          states: currentData
        } = useCurrent({
          data,
          rowKey
        });
        const setExpandRowKeysAdapter = (val) => {
          setExpandRowKeys(val);
          updateTreeExpandKeys(val);
        };
        const toggleRowExpansionAdapter = (row, expanded) => {
          const hasExpandColumn = columns.value.some(({ type }) => type === "expand");
          if (hasExpandColumn) {
            toggleRowExpansion(row, expanded);
          } else {
            toggleTreeExpansion(row, expanded);
          }
        };
        return {
          assertRowKey,
          updateColumns,
          scheduleLayout,
          isSelected,
          clearSelection,
          cleanSelection,
          getSelectionRows,
          toggleRowSelection,
          _toggleAllSelection,
          toggleAllSelection: null,
          updateAllSelected,
          updateFilters,
          updateCurrentRow,
          updateSort,
          execFilter,
          execSort,
          execQuery,
          clearFilter,
          clearSort,
          toggleRowExpansion,
          setExpandRowKeysAdapter,
          setCurrentRowKey,
          toggleRowExpansionAdapter,
          isRowExpanded,
          updateExpandRows,
          updateCurrentRowData,
          loadOrToggle,
          updateTreeData,
          updateKeyChildren,
          states: {
            tableSize,
            rowKey,
            data,
            _data,
            isComplex,
            _columns,
            originColumns,
            columns,
            fixedColumns,
            rightFixedColumns,
            leafColumns,
            fixedLeafColumns,
            rightFixedLeafColumns,
            updateOrderFns,
            leafColumnsLength,
            fixedLeafColumnsLength,
            rightFixedLeafColumnsLength,
            isAllSelected,
            selection,
            reserveSelection,
            selectOnIndeterminate,
            selectable,
            filters,
            filteredData,
            sortingColumn,
            sortProp,
            sortOrder,
            hoverRow,
            ...expandStates,
            ...treeStates,
            ...currentData
          }
        };
      }
      function replaceColumn(array, column) {
        return array.map((item) => {
          var _a2;
          if (item.id === column.id) {
            return column;
          } else if ((_a2 = item.children) == null ? void 0 : _a2.length) {
            item.children = replaceColumn(item.children, column);
          }
          return item;
        });
      }
      function sortColumn(array) {
        array.forEach((item) => {
          var _a2, _b;
          item.no = (_a2 = item.getColumnIndex) == null ? void 0 : _a2.call(item);
          if ((_b = item.children) == null ? void 0 : _b.length) {
            sortColumn(item.children);
          }
        });
        array.sort((cur, pre) => cur.no - pre.no);
      }
      function useStore() {
        const instance = vue.getCurrentInstance();
        const watcher = useWatcher$1();
        const ns = useNamespace("table");
        const mutations = {
          setData(states, data) {
            const dataInstanceChanged = vue.unref(states._data) !== data;
            states.data.value = data;
            states._data.value = data;
            instance.store.execQuery();
            instance.store.updateCurrentRowData();
            instance.store.updateExpandRows();
            instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
            if (vue.unref(states.reserveSelection)) {
              instance.store.assertRowKey();
            } else {
              if (dataInstanceChanged) {
                instance.store.clearSelection();
              } else {
                instance.store.cleanSelection();
              }
            }
            instance.store.updateAllSelected();
            if (instance.$ready) {
              instance.store.scheduleLayout();
            }
          },
          insertColumn(states, column, parent2, updateColumnOrder) {
            var _a2;
            const array = vue.unref(states._columns);
            let newColumns = [];
            if (!parent2) {
              array.push(column);
              newColumns = array;
            } else {
              if (parent2 && !parent2.children) {
                parent2.children = [];
              }
              (_a2 = parent2.children) == null ? void 0 : _a2.push(column);
              newColumns = replaceColumn(array, parent2);
            }
            sortColumn(newColumns);
            states._columns.value = newColumns;
            states.updateOrderFns.push(updateColumnOrder);
            if (column.type === "selection") {
              states.selectable.value = column.selectable;
              states.reserveSelection.value = column.reserveSelection;
            }
            if (instance.$ready) {
              instance.store.updateColumns();
              instance.store.scheduleLayout();
            }
          },
          updateColumnOrder(states, column) {
            var _a2;
            const newColumnIndex = (_a2 = column.getColumnIndex) == null ? void 0 : _a2.call(column);
            if (newColumnIndex === column.no)
              return;
            sortColumn(states._columns.value);
            if (instance.$ready) {
              instance.store.updateColumns();
            }
          },
          removeColumn(states, column, parent2, updateColumnOrder) {
            var _a2;
            const array = vue.unref(states._columns) || [];
            if (parent2) {
              (_a2 = parent2.children) == null ? void 0 : _a2.splice(parent2.children.findIndex((item) => item.id === column.id), 1);
              vue.nextTick(() => {
                var _a22;
                if (((_a22 = parent2.children) == null ? void 0 : _a22.length) === 0) {
                  delete parent2.children;
                }
              });
              states._columns.value = replaceColumn(array, parent2);
            } else {
              const index = array.indexOf(column);
              if (index > -1) {
                array.splice(index, 1);
                states._columns.value = array;
              }
            }
            const updateFnIndex = states.updateOrderFns.indexOf(updateColumnOrder);
            updateFnIndex > -1 && states.updateOrderFns.splice(updateFnIndex, 1);
            if (instance.$ready) {
              instance.store.updateColumns();
              instance.store.scheduleLayout();
            }
          },
          sort(states, options) {
            const { prop, order, init } = options;
            if (prop) {
              const column = vue.unref(states.columns).find((column2) => column2.property === prop);
              if (column) {
                column.order = order;
                instance.store.updateSort(column, prop, order);
                instance.store.commit("changeSortCondition", { init });
              }
            }
          },
          changeSortCondition(states, options) {
            const { sortingColumn, sortProp, sortOrder } = states;
            const columnValue = vue.unref(sortingColumn), propValue = vue.unref(sortProp), orderValue = vue.unref(sortOrder);
            if (isNull(orderValue)) {
              states.sortingColumn.value = null;
              states.sortProp.value = null;
            }
            const ignore = { filter: true };
            instance.store.execQuery(ignore);
            if (!options || !(options.silent || options.init)) {
              instance.emit("sort-change", {
                column: columnValue,
                prop: propValue,
                order: orderValue
              });
            }
            instance.store.updateTableScrollY();
          },
          filterChange(_states, options) {
            const { column, values, silent } = options;
            const newFilters = instance.store.updateFilters(column, values);
            instance.store.execQuery();
            if (!silent) {
              instance.emit("filter-change", newFilters);
            }
            instance.store.updateTableScrollY();
          },
          toggleAllSelection() {
            var _a2, _b;
            (_b = (_a2 = instance.store).toggleAllSelection) == null ? void 0 : _b.call(_a2);
          },
          rowSelectedChanged(_states, row) {
            instance.store.toggleRowSelection(row);
            instance.store.updateAllSelected();
          },
          setHoverRow(states, row) {
            states.hoverRow.value = row;
          },
          setCurrentRow(_states, row) {
            instance.store.updateCurrentRow(row);
          }
        };
        const commit = function(name, ...args) {
          const mutations2 = instance.store.mutations;
          if (mutations2[name]) {
            mutations2[name].apply(instance, [
              instance.store.states,
              ...args
            ]);
          } else {
            throw new Error(`Action not found: ${name}`);
          }
        };
        const updateTableScrollY = function() {
          vue.nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
        };
        return {
          ns,
          ...watcher,
          mutations,
          commit,
          updateTableScrollY
        };
      }
      const InitialStateMap = {
        rowKey: "rowKey",
        defaultExpandAll: "defaultExpandAll",
        selectOnIndeterminate: "selectOnIndeterminate",
        indent: "indent",
        lazy: "lazy",
        data: "data",
        ["treeProps.hasChildren"]: {
          key: "lazyColumnIdentifier",
          default: "hasChildren"
        },
        ["treeProps.children"]: {
          key: "childrenColumnName",
          default: "children"
        },
        ["treeProps.checkStrictly"]: {
          key: "checkStrictly",
          default: false
        }
      };
      function createStore(table, props) {
        if (!table) {
          throw new Error("Table is required.");
        }
        const store = useStore();
        store.toggleAllSelection = debounce(store._toggleAllSelection, 10);
        Object.keys(InitialStateMap).forEach((key) => {
          handleValue(getArrKeysValue(props, key), key, store);
        });
        proxyTableProps(store, props);
        return store;
      }
      function proxyTableProps(store, props) {
        Object.keys(InitialStateMap).forEach((key) => {
          vue.watch(() => getArrKeysValue(props, key), (value) => {
            handleValue(value, key, store);
          });
        });
      }
      function handleValue(value, propsKey, store) {
        let newVal = value;
        let storeKey = InitialStateMap[propsKey];
        if (isObject$2(storeKey)) {
          newVal = newVal || storeKey.default;
          storeKey = storeKey.key;
        }
        store.states[storeKey].value = newVal;
      }
      function getArrKeysValue(props, key) {
        if (key.includes(".")) {
          const keyList = key.split(".");
          let value = props;
          keyList.forEach((k) => {
            value = value[k];
          });
          return value;
        } else {
          return props[key];
        }
      }
      class TableLayout {
        constructor(options) {
          this.observers = [];
          this.table = null;
          this.store = null;
          this.columns = [];
          this.fit = true;
          this.showHeader = true;
          this.height = vue.ref(null);
          this.scrollX = vue.ref(false);
          this.scrollY = vue.ref(false);
          this.bodyWidth = vue.ref(null);
          this.fixedWidth = vue.ref(null);
          this.rightFixedWidth = vue.ref(null);
          this.gutterWidth = 0;
          for (const name in options) {
            if (hasOwn(options, name)) {
              if (vue.isRef(this[name])) {
                this[name].value = options[name];
              } else {
                this[name] = options[name];
              }
            }
          }
          if (!this.table) {
            throw new Error("Table is required for Table Layout");
          }
          if (!this.store) {
            throw new Error("Store is required for Table Layout");
          }
        }
        updateScrollY() {
          const height = this.height.value;
          if (isNull(height))
            return false;
          const scrollBarRef = this.table.refs.scrollBarRef;
          if (this.table.vnode.el && (scrollBarRef == null ? void 0 : scrollBarRef.wrapRef)) {
            let scrollY = true;
            const prevScrollY = this.scrollY.value;
            scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight;
            this.scrollY.value = scrollY;
            return prevScrollY !== scrollY;
          }
          return false;
        }
        setHeight(value, prop = "height") {
          if (!isClient)
            return;
          const el = this.table.vnode.el;
          value = parseHeight(value);
          this.height.value = Number(value);
          if (!el && (value || value === 0)) {
            vue.nextTick(() => this.setHeight(value, prop));
            return;
          }
          if (el && isNumber$1(value)) {
            el.style[prop] = `${value}px`;
            this.updateElsHeight();
          } else if (el && isString$2(value)) {
            el.style[prop] = value;
            this.updateElsHeight();
          }
        }
        setMaxHeight(value) {
          this.setHeight(value, "max-height");
        }
        getFlattenColumns() {
          const flattenColumns = [];
          const columns = this.table.store.states.columns.value;
          columns.forEach((column) => {
            if (column.isColumnGroup) {
              flattenColumns.push.apply(flattenColumns, column.columns);
            } else {
              flattenColumns.push(column);
            }
          });
          return flattenColumns;
        }
        updateElsHeight() {
          this.updateScrollY();
          this.notifyObservers("scrollable");
        }
        headerDisplayNone(elm) {
          if (!elm)
            return true;
          let headerChild = elm;
          while (headerChild.tagName !== "DIV") {
            if (getComputedStyle(headerChild).display === "none") {
              return true;
            }
            headerChild = headerChild.parentElement;
          }
          return false;
        }
        updateColumnsWidth() {
          var _a2;
          if (!isClient)
            return;
          const fit = this.fit;
          const bodyWidth = (_a2 = this.table.vnode.el) == null ? void 0 : _a2.clientWidth;
          let bodyMinWidth = 0;
          const flattenColumns = this.getFlattenColumns();
          const flexColumns = flattenColumns.filter((column) => !isNumber$1(column.width));
          flattenColumns.forEach((column) => {
            if (isNumber$1(column.width) && column.realWidth)
              column.realWidth = null;
          });
          if (flexColumns.length > 0 && fit) {
            flattenColumns.forEach((column) => {
              bodyMinWidth += Number(column.width || column.minWidth || 80);
            });
            if (bodyMinWidth <= bodyWidth) {
              this.scrollX.value = false;
              const totalFlexWidth = bodyWidth - bodyMinWidth;
              if (flexColumns.length === 1) {
                flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth;
              } else {
                const allColumnsWidth = flexColumns.reduce((prev, column) => prev + Number(column.minWidth || 80), 0);
                const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
                let noneFirstWidth = 0;
                flexColumns.forEach((column, index) => {
                  if (index === 0)
                    return;
                  const flexWidth = Math.floor(Number(column.minWidth || 80) * flexWidthPerPixel);
                  noneFirstWidth += flexWidth;
                  column.realWidth = Number(column.minWidth || 80) + flexWidth;
                });
                flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
              }
            } else {
              this.scrollX.value = true;
              flexColumns.forEach((column) => {
                column.realWidth = Number(column.minWidth);
              });
            }
            this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
            this.table.state.resizeState.value.width = this.bodyWidth.value;
          } else {
            flattenColumns.forEach((column) => {
              if (!column.width && !column.minWidth) {
                column.realWidth = 80;
              } else {
                column.realWidth = Number(column.width || column.minWidth);
              }
              bodyMinWidth += column.realWidth;
            });
            this.scrollX.value = bodyMinWidth > bodyWidth;
            this.bodyWidth.value = bodyMinWidth;
          }
          const fixedColumns = this.store.states.fixedColumns.value;
          if (fixedColumns.length > 0) {
            let fixedWidth = 0;
            fixedColumns.forEach((column) => {
              fixedWidth += Number(column.realWidth || column.width);
            });
            this.fixedWidth.value = fixedWidth;
          }
          const rightFixedColumns = this.store.states.rightFixedColumns.value;
          if (rightFixedColumns.length > 0) {
            let rightFixedWidth = 0;
            rightFixedColumns.forEach((column) => {
              rightFixedWidth += Number(column.realWidth || column.width);
            });
            this.rightFixedWidth.value = rightFixedWidth;
          }
          this.notifyObservers("columns");
        }
        addObserver(observer) {
          this.observers.push(observer);
        }
        removeObserver(observer) {
          const index = this.observers.indexOf(observer);
          if (index !== -1) {
            this.observers.splice(index, 1);
          }
        }
        notifyObservers(event) {
          const observers = this.observers;
          observers.forEach((observer) => {
            var _a2, _b;
            switch (event) {
              case "columns":
                (_a2 = observer.state) == null ? void 0 : _a2.onColumnsChange(this);
                break;
              case "scrollable":
                (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
                break;
              default:
                throw new Error(`Table Layout don't have event ${event}.`);
            }
          });
        }
      }
      const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
      const _sfc_main$5 = vue.defineComponent({
        name: "ElTableFilterPanel",
        components: {
          ElCheckbox,
          ElCheckboxGroup,
          ElScrollbar,
          ElTooltip,
          ElIcon,
          ArrowDown: arrow_down_default,
          ArrowUp: arrow_up_default
        },
        directives: { ClickOutside },
        props: {
          placement: {
            type: String,
            default: "bottom-start"
          },
          store: {
            type: Object
          },
          column: {
            type: Object
          },
          upDataColumn: {
            type: Function
          },
          appendTo: useTooltipContentProps.appendTo
        },
        setup(props) {
          const instance = vue.getCurrentInstance();
          const { t } = useLocale();
          const ns = useNamespace("table-filter");
          const parent2 = instance == null ? void 0 : instance.parent;
          if (props.column && !parent2.filterPanels.value[props.column.id]) {
            parent2.filterPanels.value[props.column.id] = instance;
          }
          const tooltipVisible = vue.ref(false);
          const tooltip = vue.ref(null);
          const filters = vue.computed(() => {
            return props.column && props.column.filters;
          });
          const filterClassName = vue.computed(() => {
            if (props.column && props.column.filterClassName) {
              return `${ns.b()} ${props.column.filterClassName}`;
            }
            return ns.b();
          });
          const filterValue = vue.computed({
            get: () => {
              var _a2;
              return (((_a2 = props.column) == null ? void 0 : _a2.filteredValue) || [])[0];
            },
            set: (value) => {
              if (filteredValue.value) {
                if (!isPropAbsent(value)) {
                  filteredValue.value.splice(0, 1, value);
                } else {
                  filteredValue.value.splice(0, 1);
                }
              }
            }
          });
          const filteredValue = vue.computed({
            get() {
              if (props.column) {
                return props.column.filteredValue || [];
              }
              return [];
            },
            set(value) {
              var _a2;
              if (props.column) {
                (_a2 = props.upDataColumn) == null ? void 0 : _a2.call(props, "filteredValue", value);
              }
            }
          });
          const multiple = vue.computed(() => {
            if (props.column) {
              return props.column.filterMultiple;
            }
            return true;
          });
          const isActive = (filter) => {
            return filter.value === filterValue.value;
          };
          const hidden = () => {
            tooltipVisible.value = false;
          };
          const showFilterPanel = (e) => {
            e.stopPropagation();
            tooltipVisible.value = !tooltipVisible.value;
          };
          const hideFilterPanel = () => {
            tooltipVisible.value = false;
          };
          const handleConfirm = () => {
            confirmFilter(filteredValue.value);
            hidden();
          };
          const handleReset = () => {
            filteredValue.value = [];
            confirmFilter(filteredValue.value);
            hidden();
          };
          const handleSelect = (_filterValue) => {
            filterValue.value = _filterValue;
            if (!isPropAbsent(_filterValue)) {
              confirmFilter(filteredValue.value);
            } else {
              confirmFilter([]);
            }
            hidden();
          };
          const confirmFilter = (filteredValue2) => {
            var _a2, _b;
            (_a2 = props.store) == null ? void 0 : _a2.commit("filterChange", {
              column: props.column,
              values: filteredValue2
            });
            (_b = props.store) == null ? void 0 : _b.updateAllSelected();
          };
          vue.watch(tooltipVisible, (value) => {
            var _a2;
            if (props.column) {
              (_a2 = props.upDataColumn) == null ? void 0 : _a2.call(props, "filterOpened", value);
            }
          }, {
            immediate: true
          });
          const popperPaneRef = vue.computed(() => {
            var _a2, _b;
            return (_b = (_a2 = tooltip.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
          });
          return {
            tooltipVisible,
            multiple,
            filterClassName,
            filteredValue,
            filterValue,
            filters,
            handleConfirm,
            handleReset,
            handleSelect,
            isPropAbsent,
            isActive,
            t,
            ns,
            showFilterPanel,
            hideFilterPanel,
            popperPaneRef,
            tooltip
          };
        }
      });
      function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
        const _component_el_checkbox = vue.resolveComponent("el-checkbox");
        const _component_el_checkbox_group = vue.resolveComponent("el-checkbox-group");
        const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
        const _component_arrow_up = vue.resolveComponent("arrow-up");
        const _component_arrow_down = vue.resolveComponent("arrow-down");
        const _component_el_icon = vue.resolveComponent("el-icon");
        const _component_el_tooltip = vue.resolveComponent("el-tooltip");
        const _directive_click_outside = vue.resolveDirective("click-outside");
        return vue.openBlock(), vue.createBlock(_component_el_tooltip, {
          ref: "tooltip",
          visible: _ctx.tooltipVisible,
          offset: 0,
          placement: _ctx.placement,
          "show-arrow": false,
          "stop-popper-mouse-event": false,
          teleported: "",
          effect: "light",
          pure: "",
          "popper-class": _ctx.filterClassName,
          persistent: "",
          "append-to": _ctx.appendTo
        }, {
          content: vue.withCtx(() => [
            _ctx.multiple ? (vue.openBlock(), vue.createElementBlock("div", { key: 0 }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.ns.e("content"))
              }, [
                vue.createVNode(_component_el_scrollbar, {
                  "wrap-class": _ctx.ns.e("wrap")
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_checkbox_group, {
                      modelValue: _ctx.filteredValue,
                      "onUpdate:modelValue": ($event) => _ctx.filteredValue = $event,
                      class: vue.normalizeClass(_ctx.ns.e("checkbox-group"))
                    }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.filters, (filter) => {
                          return vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                            key: filter.value,
                            value: filter.value
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(filter.text), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "class"])
                  ]),
                  _: 1
                }, 8, ["wrap-class"])
              ], 2),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.ns.e("bottom"))
              }, [
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(_ctx.ns.is("disabled", _ctx.filteredValue.length === 0)),
                  disabled: _ctx.filteredValue.length === 0,
                  type: "button",
                  onClick: _ctx.handleConfirm
                }, vue.toDisplayString(_ctx.t("el.table.confirmFilter")), 11, ["disabled", "onClick"]),
                vue.createElementVNode("button", {
                  type: "button",
                  onClick: _ctx.handleReset
                }, vue.toDisplayString(_ctx.t("el.table.resetFilter")), 9, ["onClick"])
              ], 2)
            ])) : (vue.openBlock(), vue.createElementBlock("ul", {
              key: 1,
              class: vue.normalizeClass(_ctx.ns.e("list"))
            }, [
              vue.createElementVNode("li", {
                class: vue.normalizeClass([
                  _ctx.ns.e("list-item"),
                  _ctx.ns.is("active", _ctx.isPropAbsent(_ctx.filterValue))
                ]),
                onClick: ($event) => _ctx.handleSelect(null)
              }, vue.toDisplayString(_ctx.t("el.table.clearFilter")), 11, ["onClick"]),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.filters, (filter) => {
                return vue.openBlock(), vue.createElementBlock("li", {
                  key: filter.value,
                  class: vue.normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
                  label: filter.value,
                  onClick: ($event) => _ctx.handleSelect(filter.value)
                }, vue.toDisplayString(filter.text), 11, ["label", "onClick"]);
              }), 128))
            ], 2))
          ]),
          default: vue.withCtx(() => [
            vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
              class: vue.normalizeClass([
                `${_ctx.ns.namespace.value}-table__column-filter-trigger`,
                `${_ctx.ns.namespace.value}-none-outline`
              ]),
              onClick: _ctx.showFilterPanel
            }, [
              vue.createVNode(_component_el_icon, null, {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "filter-icon", {}, () => {
                    var _a2;
                    return [
                      ((_a2 = _ctx.column) == null ? void 0 : _a2.filterOpened) ? (vue.openBlock(), vue.createBlock(_component_arrow_up, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_arrow_down, { key: 1 }))
                    ];
                  })
                ]),
                _: 3
              })
            ], 10, ["onClick"])), [
              [_directive_click_outside, _ctx.hideFilterPanel, _ctx.popperPaneRef]
            ])
          ]),
          _: 3
        }, 8, ["visible", "placement", "popper-class", "append-to"]);
      }
      var FilterPanel = _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__file", "filter-panel.vue"]]);
      function useLayoutObserver(root2) {
        const instance = vue.getCurrentInstance();
        vue.onBeforeMount(() => {
          tableLayout.value.addObserver(instance);
        });
        vue.onMounted(() => {
          onColumnsChange(tableLayout.value);
          onScrollableChange(tableLayout.value);
        });
        vue.onUpdated(() => {
          onColumnsChange(tableLayout.value);
          onScrollableChange(tableLayout.value);
        });
        vue.onUnmounted(() => {
          tableLayout.value.removeObserver(instance);
        });
        const tableLayout = vue.computed(() => {
          const layout = root2.layout;
          if (!layout) {
            throw new Error("Can not find table layout.");
          }
          return layout;
        });
        const onColumnsChange = (layout) => {
          var _a2;
          const cols = ((_a2 = root2.vnode.el) == null ? void 0 : _a2.querySelectorAll("colgroup > col")) || [];
          if (!cols.length)
            return;
          const flattenColumns = layout.getFlattenColumns();
          const columnsMap = {};
          flattenColumns.forEach((column) => {
            columnsMap[column.id] = column;
          });
          for (let i = 0, j = cols.length; i < j; i++) {
            const col = cols[i];
            const name = col.getAttribute("name");
            const column = columnsMap[name];
            if (column) {
              col.setAttribute("width", column.realWidth || column.width);
            }
          }
        };
        const onScrollableChange = (layout) => {
          var _a2, _b;
          const cols = ((_a2 = root2.vnode.el) == null ? void 0 : _a2.querySelectorAll("colgroup > col[name=gutter]")) || [];
          for (let i = 0, j = cols.length; i < j; i++) {
            const col = cols[i];
            col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
          }
          const ths = ((_b = root2.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
          for (let i = 0, j = ths.length; i < j; i++) {
            const th = ths[i];
            th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
            th.style.display = layout.scrollY.value ? "" : "none";
          }
        };
        return {
          tableLayout: tableLayout.value,
          onColumnsChange,
          onScrollableChange
        };
      }
      const TABLE_INJECTION_KEY = Symbol("ElTable");
      function useEvent(props, emit) {
        const instance = vue.getCurrentInstance();
        const parent2 = vue.inject(TABLE_INJECTION_KEY);
        const handleFilterClick = (event) => {
          event.stopPropagation();
          return;
        };
        const handleHeaderClick = (event, column) => {
          if (!column.filters && column.sortable) {
            handleSortClick(event, column, false);
          } else if (column.filterable && !column.sortable) {
            handleFilterClick(event);
          }
          parent2 == null ? void 0 : parent2.emit("header-click", column, event);
        };
        const handleHeaderContextMenu = (event, column) => {
          parent2 == null ? void 0 : parent2.emit("header-contextmenu", column, event);
        };
        const draggingColumn = vue.ref(null);
        const dragging = vue.ref(false);
        const dragState = vue.ref();
        const handleMouseDown = (event, column) => {
          var _a2, _b;
          if (!isClient)
            return;
          if (column.children && column.children.length > 0)
            return;
          if (draggingColumn.value && props.border) {
            dragging.value = true;
            const table = parent2;
            emit("set-drag-visible", true);
            const tableEl = table == null ? void 0 : table.vnode.el;
            const tableLeft = tableEl == null ? void 0 : tableEl.getBoundingClientRect().left;
            const columnEl = (_b = (_a2 = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a2.el) == null ? void 0 : _b.querySelector(`th.${column.id}`);
            const columnRect = columnEl.getBoundingClientRect();
            const minLeft = columnRect.left - tableLeft + 30;
            addClass(columnEl, "noclick");
            dragState.value = {
              startMouseLeft: event.clientX,
              startLeft: columnRect.right - tableLeft,
              startColumnLeft: columnRect.left - tableLeft,
              tableLeft
            };
            const resizeProxy = table == null ? void 0 : table.refs.resizeProxy;
            resizeProxy.style.left = `${dragState.value.startLeft}px`;
            document.onselectstart = function() {
              return false;
            };
            document.ondragstart = function() {
              return false;
            };
            const handleMouseMove2 = (event2) => {
              const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
              const proxyLeft = dragState.value.startLeft + deltaLeft;
              resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
            };
            const handleMouseUp = () => {
              if (dragging.value) {
                const { startColumnLeft, startLeft } = dragState.value;
                const finalLeft = Number.parseInt(resizeProxy.style.left, 10);
                const columnWidth = finalLeft - startColumnLeft;
                column.width = column.realWidth = columnWidth;
                table == null ? void 0 : table.emit("header-dragend", column.width, startLeft - startColumnLeft, column, event);
                requestAnimationFrame(() => {
                  props.store.scheduleLayout(false, true);
                });
                document.body.style.cursor = "";
                dragging.value = false;
                draggingColumn.value = null;
                dragState.value = void 0;
                emit("set-drag-visible", false);
              }
              document.removeEventListener("mousemove", handleMouseMove2);
              document.removeEventListener("mouseup", handleMouseUp);
              document.onselectstart = null;
              document.ondragstart = null;
              setTimeout(() => {
                removeClass(columnEl, "noclick");
              }, 0);
            };
            document.addEventListener("mousemove", handleMouseMove2);
            document.addEventListener("mouseup", handleMouseUp);
          }
        };
        const handleMouseMove = (event, column) => {
          var _a2;
          if (column.children && column.children.length > 0)
            return;
          const el = event.target;
          if (!isElement(el)) {
            return;
          }
          const target = el == null ? void 0 : el.closest("th");
          if (!column || !column.resizable || !target)
            return;
          if (!dragging.value && props.border) {
            const rect = target.getBoundingClientRect();
            const bodyStyle = document.body.style;
            const isLastTh = ((_a2 = target.parentNode) == null ? void 0 : _a2.lastElementChild) === target;
            const allowDarg = props.allowDragLastColumn || !isLastTh;
            if (rect.width > 12 && rect.right - event.clientX < 8 && allowDarg) {
              bodyStyle.cursor = "col-resize";
              if (hasClass(target, "is-sortable")) {
                target.style.cursor = "col-resize";
              }
              draggingColumn.value = column;
            } else if (!dragging.value) {
              bodyStyle.cursor = "";
              if (hasClass(target, "is-sortable")) {
                target.style.cursor = "pointer";
              }
              draggingColumn.value = null;
            }
          }
        };
        const handleMouseOut = () => {
          if (!isClient)
            return;
          document.body.style.cursor = "";
        };
        const toggleOrder = ({ order, sortOrders }) => {
          if (order === "")
            return sortOrders[0];
          const index = sortOrders.indexOf(order || null);
          return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
        };
        const handleSortClick = (event, column, givenOrder) => {
          var _a2;
          event.stopPropagation();
          const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
          const target = (_a2 = event.target) == null ? void 0 : _a2.closest("th");
          if (target) {
            if (hasClass(target, "noclick")) {
              removeClass(target, "noclick");
              return;
            }
          }
          if (!column.sortable)
            return;
          const clickTarget = event.currentTarget;
          if (["ascending", "descending"].some((str) => hasClass(clickTarget, str) && !column.sortOrders.includes(str))) {
            return;
          }
          const states = props.store.states;
          let sortProp = states.sortProp.value;
          let sortOrder;
          const sortingColumn = states.sortingColumn.value;
          if (sortingColumn !== column || sortingColumn === column && isNull(sortingColumn.order)) {
            if (sortingColumn) {
              sortingColumn.order = null;
            }
            states.sortingColumn.value = column;
            sortProp = column.property;
          }
          if (!order) {
            sortOrder = column.order = null;
          } else {
            sortOrder = column.order = order;
          }
          states.sortProp.value = sortProp;
          states.sortOrder.value = sortOrder;
          parent2 == null ? void 0 : parent2.store.commit("changeSortCondition");
        };
        return {
          handleHeaderClick,
          handleHeaderContextMenu,
          handleMouseDown,
          handleMouseMove,
          handleMouseOut,
          handleSortClick,
          handleFilterClick
        };
      }
      function useStyle$2(props) {
        const parent2 = vue.inject(TABLE_INJECTION_KEY);
        const ns = useNamespace("table");
        const getHeaderRowStyle = (rowIndex) => {
          const headerRowStyle = parent2 == null ? void 0 : parent2.props.headerRowStyle;
          if (isFunction$2(headerRowStyle)) {
            return headerRowStyle.call(null, { rowIndex });
          }
          return headerRowStyle;
        };
        const getHeaderRowClass = (rowIndex) => {
          const classes = [];
          const headerRowClassName = parent2 == null ? void 0 : parent2.props.headerRowClassName;
          if (isString$2(headerRowClassName)) {
            classes.push(headerRowClassName);
          } else if (isFunction$2(headerRowClassName)) {
            classes.push(headerRowClassName.call(null, { rowIndex }));
          }
          return classes.join(" ");
        };
        const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
          var _a2;
          let headerCellStyles = (_a2 = parent2 == null ? void 0 : parent2.props.headerCellStyle) != null ? _a2 : {};
          if (isFunction$2(headerCellStyles)) {
            headerCellStyles = headerCellStyles.call(null, {
              rowIndex,
              columnIndex,
              row,
              column
            });
          }
          const fixedStyle = getFixedColumnOffset(columnIndex, column.fixed, props.store, row);
          ensurePosition(fixedStyle, "left");
          ensurePosition(fixedStyle, "right");
          return Object.assign({}, headerCellStyles, fixedStyle);
        };
        const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
          const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, column.fixed, props.store, row);
          const classes = [
            column.id,
            column.order,
            column.headerAlign,
            column.className,
            column.labelClassName,
            ...fixedClasses
          ];
          if (!column.children) {
            classes.push("is-leaf");
          }
          if (column.sortable) {
            classes.push("is-sortable");
          }
          const headerCellClassName = parent2 == null ? void 0 : parent2.props.headerCellClassName;
          if (isString$2(headerCellClassName)) {
            classes.push(headerCellClassName);
          } else if (isFunction$2(headerCellClassName)) {
            classes.push(headerCellClassName.call(null, {
              rowIndex,
              columnIndex,
              row,
              column
            }));
          }
          classes.push(ns.e("cell"));
          return classes.filter((className) => Boolean(className)).join(" ");
        };
        return {
          getHeaderRowStyle,
          getHeaderRowClass,
          getHeaderCellStyle,
          getHeaderCellClass
        };
      }
      const getAllColumns = (columns) => {
        const result = [];
        columns.forEach((column) => {
          if (column.children) {
            result.push(column);
            result.push.apply(result, getAllColumns(column.children));
          } else {
            result.push(column);
          }
        });
        return result;
      };
      const convertToRows = (originColumns) => {
        let maxLevel = 1;
        const traverse = (column, parent2) => {
          if (parent2) {
            column.level = parent2.level + 1;
            if (maxLevel < column.level) {
              maxLevel = column.level;
            }
          }
          if (column.children) {
            let colSpan = 0;
            column.children.forEach((subColumn) => {
              traverse(subColumn, column);
              colSpan += subColumn.colSpan;
            });
            column.colSpan = colSpan;
          } else {
            column.colSpan = 1;
          }
        };
        originColumns.forEach((column) => {
          column.level = 1;
          traverse(column, void 0);
        });
        const rows = [];
        for (let i = 0; i < maxLevel; i++) {
          rows.push([]);
        }
        const allColumns = getAllColumns(originColumns);
        allColumns.forEach((column) => {
          if (!column.children) {
            column.rowSpan = maxLevel - column.level + 1;
          } else {
            column.rowSpan = 1;
            column.children.forEach((col) => col.isSubColumn = true);
          }
          rows[column.level - 1].push(column);
        });
        return rows;
      };
      function useUtils$1(props) {
        const parent2 = vue.inject(TABLE_INJECTION_KEY);
        const columnRows = vue.computed(() => {
          return convertToRows(props.store.states.originColumns.value);
        });
        const isGroup = vue.computed(() => {
          const result = columnRows.value.length > 1;
          if (result && parent2) {
            parent2.state.isGroup.value = true;
          }
          return result;
        });
        const toggleAllSelection = (event) => {
          event.stopPropagation();
          parent2 == null ? void 0 : parent2.store.commit("toggleAllSelection");
        };
        return {
          isGroup,
          toggleAllSelection,
          columnRows
        };
      }
      var TableHeader = vue.defineComponent({
        name: "ElTableHeader",
        components: {
          ElCheckbox
        },
        props: {
          fixed: {
            type: String,
            default: ""
          },
          store: {
            required: true,
            type: Object
          },
          border: Boolean,
          defaultSort: {
            type: Object,
            default: () => {
              return {
                prop: "",
                order: ""
              };
            }
          },
          appendFilterPanelTo: {
            type: String
          },
          allowDragLastColumn: {
            type: Boolean
          }
        },
        setup(props, { emit }) {
          const instance = vue.getCurrentInstance();
          const parent2 = vue.inject(TABLE_INJECTION_KEY);
          const ns = useNamespace("table");
          const filterPanels = vue.ref({});
          const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent2);
          const isTableLayoutAuto = (parent2 == null ? void 0 : parent2.props.tableLayout) === "auto";
          const saveIndexSelection = vue.reactive( new Map());
          const theadRef = vue.ref();
          let delayId;
          const updateFixedColumnStyle = () => {
            delayId = setTimeout(() => {
              if (saveIndexSelection.size > 0) {
                saveIndexSelection.forEach((column, key) => {
                  const el = theadRef.value.querySelector(`.${key.replace(/\s/g, ".")}`);
                  if (el) {
                    const width = el.getBoundingClientRect().width;
                    column.width = width || column.width;
                  }
                });
                saveIndexSelection.clear();
              }
            });
          };
          vue.watch(saveIndexSelection, updateFixedColumnStyle);
          vue.onBeforeUnmount(() => {
            if (delayId) {
              clearTimeout(delayId);
              delayId = void 0;
            }
          });
          vue.onMounted(async () => {
            await vue.nextTick();
            await vue.nextTick();
            const { prop, order } = props.defaultSort;
            parent2 == null ? void 0 : parent2.store.commit("sort", { prop, order, init: true });
            updateFixedColumnStyle();
          });
          const {
            handleHeaderClick,
            handleHeaderContextMenu,
            handleMouseDown,
            handleMouseMove,
            handleMouseOut,
            handleSortClick,
            handleFilterClick
          } = useEvent(props, emit);
          const {
            getHeaderRowStyle,
            getHeaderRowClass,
            getHeaderCellStyle,
            getHeaderCellClass
          } = useStyle$2(props);
          const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
          instance.state = {
            onColumnsChange,
            onScrollableChange
          };
          instance.filterPanels = filterPanels;
          return {
            ns,
            filterPanels,
            onColumnsChange,
            onScrollableChange,
            columnRows,
            getHeaderRowClass,
            getHeaderRowStyle,
            getHeaderCellClass,
            getHeaderCellStyle,
            handleHeaderClick,
            handleHeaderContextMenu,
            handleMouseDown,
            handleMouseMove,
            handleMouseOut,
            handleSortClick,
            handleFilterClick,
            isGroup,
            toggleAllSelection,
            saveIndexSelection,
            isTableLayoutAuto,
            theadRef,
            updateFixedColumnStyle
          };
        },
        render() {
          const {
            ns,
            isGroup,
            columnRows,
            getHeaderCellStyle,
            getHeaderCellClass,
            getHeaderRowClass,
            getHeaderRowStyle,
            handleHeaderClick,
            handleHeaderContextMenu,
            handleMouseDown,
            handleMouseMove,
            handleSortClick,
            handleMouseOut,
            store,
            $parent,
            saveIndexSelection,
            isTableLayoutAuto
          } = this;
          let rowSpan = 1;
          return vue.h("thead", {
            ref: "theadRef",
            class: ns.is("group", isGroup)
          }, columnRows.map((subColumns, rowIndex) => vue.h("tr", {
            class: getHeaderRowClass(rowIndex),
            key: rowIndex,
            style: getHeaderRowStyle(rowIndex)
          }, subColumns.map((column, cellIndex) => {
            if (column.rowSpan > rowSpan) {
              rowSpan = column.rowSpan;
            }
            const _class = getHeaderCellClass(rowIndex, cellIndex, subColumns, column);
            if (isTableLayoutAuto && column.fixed) {
              saveIndexSelection.set(_class, column);
            }
            return vue.h("th", {
              class: _class,
              colspan: column.colSpan,
              key: `${column.id}-thead`,
              rowspan: column.rowSpan,
              style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
              onClick: ($event) => {
                var _a2;
                if ((_a2 = $event.currentTarget) == null ? void 0 : _a2.classList.contains("noclick")) {
                  return;
                }
                handleHeaderClick($event, column);
              },
              onContextmenu: ($event) => handleHeaderContextMenu($event, column),
              onMousedown: ($event) => handleMouseDown($event, column),
              onMousemove: ($event) => handleMouseMove($event, column),
              onMouseout: handleMouseOut
            }, [
              vue.h("div", {
                class: [
                  "cell",
                  column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""
                ]
              }, [
                column.renderHeader ? column.renderHeader({
                  column,
                  $index: cellIndex,
                  store,
                  _self: $parent
                }) : column.label,
                column.sortable && vue.h("span", {
                  onClick: ($event) => handleSortClick($event, column),
                  class: "caret-wrapper"
                }, [
                  vue.h("i", {
                    onClick: ($event) => handleSortClick($event, column, "ascending"),
                    class: "sort-caret ascending"
                  }),
                  vue.h("i", {
                    onClick: ($event) => handleSortClick($event, column, "descending"),
                    class: "sort-caret descending"
                  })
                ]),
                column.filterable && vue.h(FilterPanel, {
                  store,
                  placement: column.filterPlacement || "bottom-start",
                  appendTo: $parent == null ? void 0 : $parent.appendFilterPanelTo,
                  column,
                  upDataColumn: (key, value) => {
                    column[key] = value;
                  }
                }, {
                  "filter-icon": () => column.renderFilterIcon ? column.renderFilterIcon({
                    filterOpened: column.filterOpened
                  }) : null
                })
              ])
            ]);
          }))));
        }
      });
      function isGreaterThan(a2, b2, epsilon = 0.03) {
        return a2 - b2 > epsilon;
      }
      function useEvents(props) {
        const parent2 = vue.inject(TABLE_INJECTION_KEY);
        const tooltipContent = vue.ref("");
        const tooltipTrigger = vue.ref(vue.h("div"));
        const handleEvent = (event, row, name) => {
          var _a2, _b, _c;
          const table = parent2;
          const cell = getCell(event);
          let column = null;
          const namespace = (_a2 = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a2.dataset.prefix;
          if (cell) {
            column = getColumnByCell({
              columns: (_c = (_b = props.store) == null ? void 0 : _b.states.columns.value) != null ? _c : []
            }, cell, namespace);
            if (column) {
              table == null ? void 0 : table.emit(`cell-${name}`, row, column, cell, event);
            }
          }
          table == null ? void 0 : table.emit(`row-${name}`, row, column, event);
        };
        const handleDoubleClick = (event, row) => {
          handleEvent(event, row, "dblclick");
        };
        const handleClick = (event, row) => {
          var _a2;
          (_a2 = props.store) == null ? void 0 : _a2.commit("setCurrentRow", row);
          handleEvent(event, row, "click");
        };
        const handleContextMenu = (event, row) => {
          handleEvent(event, row, "contextmenu");
        };
        const handleMouseEnter = debounce((index) => {
          var _a2;
          (_a2 = props.store) == null ? void 0 : _a2.commit("setHoverRow", index);
        }, 30);
        const handleMouseLeave = debounce(() => {
          var _a2;
          (_a2 = props.store) == null ? void 0 : _a2.commit("setHoverRow", null);
        }, 30);
        const getPadding = (el) => {
          const style = window.getComputedStyle(el, null);
          const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0;
          const paddingRight = Number.parseInt(style.paddingRight, 10) || 0;
          const paddingTop = Number.parseInt(style.paddingTop, 10) || 0;
          const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0;
          return {
            left: paddingLeft,
            right: paddingRight,
            top: paddingTop,
            bottom: paddingBottom
          };
        };
        const toggleRowClassByCell = (rowSpan, event, toggle) => {
          var _a2;
          let node = (_a2 = event == null ? void 0 : event.target) == null ? void 0 : _a2.parentNode;
          while (rowSpan > 1) {
            node = node == null ? void 0 : node.nextSibling;
            if (!node || node.nodeName !== "TR")
              break;
            toggle(node, "hover-row hover-fixed-row");
            rowSpan--;
          }
        };
        const handleCellMouseEnter = (event, row, tooltipOptions) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
          if (!parent2)
            return;
          const table = parent2;
          const cell = getCell(event);
          const namespace = (_a2 = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a2.dataset.prefix;
          let column = null;
          if (cell) {
            column = getColumnByCell({
              columns: (_c = (_b = props.store) == null ? void 0 : _b.states.columns.value) != null ? _c : []
            }, cell, namespace);
            if (!column) {
              return;
            }
            if (cell.rowSpan > 1) {
              toggleRowClassByCell(cell.rowSpan, event, addClass);
            }
            const hoverState = table.hoverState = {
              cell,
              column,
              row
            };
            table == null ? void 0 : table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
          }
          if (!tooltipOptions) {
            if (((_d = removePopper) == null ? void 0 : _d.trigger) === cell) {
              (_e = removePopper) == null ? void 0 : _e();
            }
            return;
          }
          const cellChild = event.target.querySelector(".cell");
          if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length && ((_f = cellChild.textContent) == null ? void 0 : _f.trim()))) {
            return;
          }
          const range2 = document.createRange();
          range2.setStart(cellChild, 0);
          range2.setEnd(cellChild, cellChild.childNodes.length);
          const { width: rangeWidth, height: rangeHeight } = range2.getBoundingClientRect();
          const { width: cellChildWidth, height: cellChildHeight } = cellChild.getBoundingClientRect();
          const { top, left, right, bottom } = getPadding(cellChild);
          const horizontalPadding = left + right;
          const verticalPadding = top + bottom;
          if (isGreaterThan(rangeWidth + horizontalPadding, cellChildWidth) || isGreaterThan(rangeHeight + verticalPadding, cellChildHeight) || isGreaterThan(cellChild.scrollWidth, cellChildWidth)) {
            createTablePopper(tooltipOptions, (_g = (cell == null ? void 0 : cell.innerText) || (cell == null ? void 0 : cell.textContent)) != null ? _g : "", row, column, cell, table);
          } else if (((_h = removePopper) == null ? void 0 : _h.trigger) === cell) {
            (_i = removePopper) == null ? void 0 : _i();
          }
        };
        const handleCellMouseLeave = (event) => {
          const cell = getCell(event);
          if (!cell)
            return;
          if (cell.rowSpan > 1) {
            toggleRowClassByCell(cell.rowSpan, event, removeClass);
          }
          const oldHoverState = parent2 == null ? void 0 : parent2.hoverState;
          parent2 == null ? void 0 : parent2.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
        };
        return {
          handleDoubleClick,
          handleClick,
          handleContextMenu,
          handleMouseEnter,
          handleMouseLeave,
          handleCellMouseEnter,
          handleCellMouseLeave,
          tooltipContent,
          tooltipTrigger
        };
      }
      function useStyles(props) {
        const parent2 = vue.inject(TABLE_INJECTION_KEY);
        const ns = useNamespace("table");
        const getRowStyle = (row, rowIndex) => {
          const rowStyle = parent2 == null ? void 0 : parent2.props.rowStyle;
          if (isFunction$2(rowStyle)) {
            return rowStyle.call(null, {
              row,
              rowIndex
            });
          }
          return rowStyle || null;
        };
        const getRowClass = (row, rowIndex, displayIndex) => {
          var _a2;
          const classes = [ns.e("row")];
          if ((parent2 == null ? void 0 : parent2.props.highlightCurrentRow) && row === ((_a2 = props.store) == null ? void 0 : _a2.states.currentRow.value)) {
            classes.push("current-row");
          }
          if (props.stripe && displayIndex % 2 === 1) {
            classes.push(ns.em("row", "striped"));
          }
          const rowClassName = parent2 == null ? void 0 : parent2.props.rowClassName;
          if (isString$2(rowClassName)) {
            classes.push(rowClassName);
          } else if (isFunction$2(rowClassName)) {
            classes.push(rowClassName.call(null, {
              row,
              rowIndex
            }));
          }
          return classes;
        };
        const getCellStyle = (rowIndex, columnIndex, row, column) => {
          const cellStyle = parent2 == null ? void 0 : parent2.props.cellStyle;
          let cellStyles = cellStyle != null ? cellStyle : {};
          if (isFunction$2(cellStyle)) {
            cellStyles = cellStyle.call(null, {
              rowIndex,
              columnIndex,
              row,
              column
            });
          }
          const fixedStyle = getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
          ensurePosition(fixedStyle, "left");
          ensurePosition(fixedStyle, "right");
          return Object.assign({}, cellStyles, fixedStyle);
        };
        const getCellClass = (rowIndex, columnIndex, row, column, offset2) => {
          const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, props == null ? void 0 : props.fixed, props.store, void 0, offset2);
          const classes = [column.id, column.align, column.className, ...fixedClasses];
          const cellClassName = parent2 == null ? void 0 : parent2.props.cellClassName;
          if (isString$2(cellClassName)) {
            classes.push(cellClassName);
          } else if (isFunction$2(cellClassName)) {
            classes.push(cellClassName.call(null, {
              rowIndex,
              columnIndex,
              row,
              column
            }));
          }
          classes.push(ns.e("cell"));
          return classes.filter((className) => Boolean(className)).join(" ");
        };
        const getSpan = (row, column, rowIndex, columnIndex) => {
          let rowspan = 1;
          let colspan = 1;
          const fn2 = parent2 == null ? void 0 : parent2.props.spanMethod;
          if (isFunction$2(fn2)) {
            const result = fn2({
              row,
              column,
              rowIndex,
              columnIndex
            });
            if (isArray$2(result)) {
              rowspan = result[0];
              colspan = result[1];
            } else if (isObject$2(result)) {
              rowspan = result.rowspan;
              colspan = result.colspan;
            }
          }
          return { rowspan, colspan };
        };
        const getColspanRealWidth = (columns, colspan, index) => {
          if (colspan < 1) {
            return columns[index].realWidth;
          }
          const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index, index + colspan);
          return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
        };
        return {
          getRowStyle,
          getRowClass,
          getCellStyle,
          getCellClass,
          getSpan,
          getColspanRealWidth
        };
      }
      const __default__ = vue.defineComponent({
        name: "TableTdWrapper"
      });
      const _sfc_main$4 = vue.defineComponent({
        ...__default__,
        props: {
          colspan: {
            type: Number,
            default: 1
          },
          rowspan: {
            type: Number,
            default: 1
          }
        },
        setup(__props) {
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createElementBlock("td", {
              colspan: __props.colspan,
              rowspan: __props.rowspan
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 8, ["colspan", "rowspan"]);
          };
        }
      });
      var TdWrapper = _export_sfc(_sfc_main$4, [["__file", "td-wrapper.vue"]]);
      function useRender$1(props) {
        const parent2 = vue.inject(TABLE_INJECTION_KEY);
        const ns = useNamespace("table");
        const {
          handleDoubleClick,
          handleClick,
          handleContextMenu,
          handleMouseEnter,
          handleMouseLeave,
          handleCellMouseEnter,
          handleCellMouseLeave,
          tooltipContent,
          tooltipTrigger
        } = useEvents(props);
        const {
          getRowStyle,
          getRowClass,
          getCellStyle,
          getCellClass,
          getSpan,
          getColspanRealWidth
        } = useStyles(props);
        let displayIndex = -1;
        const firstDefaultColumnIndex = vue.computed(() => {
          var _a2;
          return (_a2 = props.store) == null ? void 0 : _a2.states.columns.value.findIndex(({ type }) => type === "default");
        });
        const getKeyOfRow = (row, index) => {
          var _a2;
          const rowKey = (_a2 = parent2 == null ? void 0 : parent2.props) == null ? void 0 : _a2.rowKey;
          if (rowKey) {
            return getRowIdentity(row, rowKey);
          }
          return index;
        };
        const rowRender = (row, $index, treeRowData, expanded = false) => {
          const { tooltipEffect, tooltipOptions, store } = props;
          const { indent, columns } = store.states;
          const rowClasses = [];
          let display = true;
          if (treeRowData) {
            rowClasses.push(ns.em("row", `level-${treeRowData.level}`));
            display = !!treeRowData.display;
          }
          if ($index === 0) {
            displayIndex = -1;
          }
          if (props.stripe && display) {
            displayIndex++;
          }
          rowClasses.push(...getRowClass(row, $index, displayIndex));
          const displayStyle = display ? null : { display: "none" };
          return vue.h("tr", {
            style: [displayStyle, getRowStyle(row, $index)],
            class: rowClasses,
            key: getKeyOfRow(row, $index),
            onDblclick: ($event) => handleDoubleClick($event, row),
            onClick: ($event) => handleClick($event, row),
            onContextmenu: ($event) => handleContextMenu($event, row),
            onMouseenter: () => handleMouseEnter($index),
            onMouseleave: handleMouseLeave
          }, columns.value.map((column, cellIndex) => {
            const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
            if (!rowspan || !colspan) {
              return null;
            }
            const columnData = Object.assign({}, column);
            columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
            const data = {
              store,
              _self: props.context || parent2,
              column: columnData,
              row,
              $index,
              cellIndex,
              expanded
            };
            if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
              data.treeNode = {
                indent: treeRowData.level && treeRowData.level * indent.value,
                level: treeRowData.level
              };
              if (isBoolean(treeRowData.expanded)) {
                data.treeNode.expanded = treeRowData.expanded;
                if ("loading" in treeRowData) {
                  data.treeNode.loading = treeRowData.loading;
                }
                if ("noLazyChildren" in treeRowData) {
                  data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
                }
              }
            }
            const baseKey = `${getKeyOfRow(row, $index)},${cellIndex}`;
            const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
            const mergedTooltipOptions = column.showOverflowTooltip && merge({
              effect: tooltipEffect
            }, tooltipOptions, column.showOverflowTooltip);
            return vue.h(TdWrapper, {
              style: getCellStyle($index, cellIndex, row, column),
              class: getCellClass($index, cellIndex, row, column, colspan - 1),
              key: `${patchKey}${baseKey}`,
              rowspan,
              colspan,
              onMouseenter: ($event) => handleCellMouseEnter($event, row, mergedTooltipOptions),
              onMouseleave: handleCellMouseLeave
            }, {
              default: () => cellChildren(cellIndex, column, data)
            });
          }));
        };
        const cellChildren = (_cellIndex, column, data) => {
          return column.renderCell(data);
        };
        const wrappedRowRender = (row, $index) => {
          const store = props.store;
          const { isRowExpanded, assertRowKey } = store;
          const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
          const columns = store.states.columns.value;
          const hasExpandColumn = columns.some(({ type }) => type === "expand");
          if (hasExpandColumn) {
            const expanded = isRowExpanded(row);
            const tr = rowRender(row, $index, void 0, expanded);
            const renderExpanded = parent2 == null ? void 0 : parent2.renderExpanded;
            if (!renderExpanded) {
              console.error("[Element Error]renderExpanded is required.");
              return tr;
            }
            const rows = [[tr]];
            if (parent2.props.preserveExpandedContent || expanded) {
              rows[0].push(vue.h("tr", {
                key: `expanded-row__${tr.key}`,
                style: { display: expanded ? "" : "none" }
              }, [
                vue.h("td", {
                  colspan: columns.length,
                  class: `${ns.e("cell")} ${ns.e("expanded-cell")}`
                }, [renderExpanded({ row, $index, store, expanded })])
              ]));
            }
            return rows;
          } else if (Object.keys(treeData.value).length) {
            assertRowKey();
            const key = getRowIdentity(row, rowKey.value);
            let cur = treeData.value[key];
            let treeRowData = null;
            if (cur) {
              treeRowData = {
                expanded: cur.expanded,
                level: cur.level,
                display: true,
                noLazyChildren: void 0,
                loading: void 0
              };
              if (isBoolean(cur.lazy)) {
                if (treeRowData && isBoolean(cur.loaded) && cur.loaded) {
                  treeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                treeRowData.loading = cur.loading;
              }
            }
            const tmp = [rowRender(row, $index, treeRowData != null ? treeRowData : void 0)];
            if (cur) {
              let i = 0;
              const traverse = (children, parent22) => {
                if (!(children && children.length && parent22))
                  return;
                children.forEach((node) => {
                  const innerTreeRowData = {
                    display: parent22.display && parent22.expanded,
                    level: parent22.level + 1,
                    expanded: false,
                    noLazyChildren: false,
                    loading: false
                  };
                  const childKey = getRowIdentity(node, rowKey.value);
                  if (isPropAbsent(childKey)) {
                    throw new Error("For nested data item, row-key is required.");
                  }
                  cur = { ...treeData.value[childKey] };
                  if (cur) {
                    innerTreeRowData.expanded = cur.expanded;
                    cur.level = cur.level || innerTreeRowData.level;
                    cur.display = !!(cur.expanded && innerTreeRowData.display);
                    if (isBoolean(cur.lazy)) {
                      if (isBoolean(cur.loaded) && cur.loaded) {
                        innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                      }
                      innerTreeRowData.loading = cur.loading;
                    }
                  }
                  i++;
                  tmp.push(rowRender(node, $index + i, innerTreeRowData));
                  if (cur) {
                    const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
                    traverse(nodes2, cur);
                  }
                });
              };
              cur.display = true;
              const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
              traverse(nodes, cur);
            }
            return tmp;
          } else {
            return rowRender(row, $index, void 0);
          }
        };
        return {
          wrappedRowRender,
          tooltipContent,
          tooltipTrigger
        };
      }
      const defaultProps$2 = {
        store: {
          required: true,
          type: Object
        },
        stripe: Boolean,
        tooltipEffect: String,
        tooltipOptions: {
          type: Object
        },
        context: {
          default: () => ({}),
          type: Object
        },
        rowClassName: [String, Function],
        rowStyle: [Object, Function],
        fixed: {
          type: String,
          default: ""
        },
        highlight: Boolean
      };
      var TableBody = vue.defineComponent({
        name: "ElTableBody",
        props: defaultProps$2,
        setup(props) {
          var _a2;
          const instance = vue.getCurrentInstance();
          const parent2 = vue.inject(TABLE_INJECTION_KEY);
          const ns = useNamespace("table");
          const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
          const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent2);
          const hoveredCellList = [];
          vue.watch((_a2 = props.store) == null ? void 0 : _a2.states.hoverRow, (newVal, oldVal) => {
            var _a22, _b;
            const el = instance == null ? void 0 : instance.vnode.el;
            const rows = Array.from((el == null ? void 0 : el.children) || []).filter((e) => e == null ? void 0 : e.classList.contains(`${ns.e("row")}`));
            let rowNum = newVal;
            const childNodes = (_a22 = rows[rowNum]) == null ? void 0 : _a22.childNodes;
            if (childNodes == null ? void 0 : childNodes.length) {
              let control = 0;
              const indexes = Array.from(childNodes).reduce((acc, item, index) => {
                var _a3, _b2;
                if (((_a3 = childNodes[index]) == null ? void 0 : _a3.colSpan) > 1) {
                  control = (_b2 = childNodes[index]) == null ? void 0 : _b2.colSpan;
                }
                if (item.nodeName !== "TD" && control === 0) {
                  acc.push(index);
                }
                control > 0 && control--;
                return acc;
              }, []);
              indexes.forEach((rowIndex) => {
                var _a3;
                rowNum = newVal;
                while (rowNum > 0) {
                  const preChildNodes = (_a3 = rows[rowNum - 1]) == null ? void 0 : _a3.childNodes;
                  if (preChildNodes[rowIndex] && preChildNodes[rowIndex].nodeName === "TD" && preChildNodes[rowIndex].rowSpan > 1) {
                    addClass(preChildNodes[rowIndex], "hover-cell");
                    hoveredCellList.push(preChildNodes[rowIndex]);
                    break;
                  }
                  rowNum--;
                }
              });
            } else {
              hoveredCellList.forEach((item) => removeClass(item, "hover-cell"));
              hoveredCellList.length = 0;
            }
            if (!((_b = props.store) == null ? void 0 : _b.states.isComplex.value) || !isClient)
              return;
            rAF(() => {
              const oldRow = rows[oldVal];
              const newRow = rows[newVal];
              if (oldRow && !oldRow.classList.contains("hover-fixed-row")) {
                removeClass(oldRow, "hover-row");
              }
              if (newRow) {
                addClass(newRow, "hover-row");
              }
            });
          });
          vue.onUnmounted(() => {
            var _a22;
            (_a22 = removePopper) == null ? void 0 : _a22();
          });
          return {
            ns,
            onColumnsChange,
            onScrollableChange,
            wrappedRowRender,
            tooltipContent,
            tooltipTrigger
          };
        },
        render() {
          const { wrappedRowRender, store } = this;
          const data = (store == null ? void 0 : store.states.data.value) || [];
          return vue.h("tbody", { tabIndex: -1 }, [
            data.reduce((acc, row) => {
              return acc.concat(wrappedRowRender(row, acc.length));
            }, [])
          ]);
        }
      });
      function useMapState() {
        const table = vue.inject(TABLE_INJECTION_KEY);
        const store = table == null ? void 0 : table.store;
        const leftFixedLeafCount = vue.computed(() => {
          var _a2;
          return (_a2 = store == null ? void 0 : store.states.fixedLeafColumnsLength.value) != null ? _a2 : 0;
        });
        const rightFixedLeafCount = vue.computed(() => {
          var _a2;
          return (_a2 = store == null ? void 0 : store.states.rightFixedColumns.value.length) != null ? _a2 : 0;
        });
        const columnsCount = vue.computed(() => {
          var _a2;
          return (_a2 = store == null ? void 0 : store.states.columns.value.length) != null ? _a2 : 0;
        });
        const leftFixedCount = vue.computed(() => {
          var _a2;
          return (_a2 = store == null ? void 0 : store.states.fixedColumns.value.length) != null ? _a2 : 0;
        });
        const rightFixedCount = vue.computed(() => {
          var _a2;
          return (_a2 = store == null ? void 0 : store.states.rightFixedColumns.value.length) != null ? _a2 : 0;
        });
        return {
          leftFixedLeafCount,
          rightFixedLeafCount,
          columnsCount,
          leftFixedCount,
          rightFixedCount,
          columns: vue.computed(() => {
            var _a2;
            return (_a2 = store == null ? void 0 : store.states.columns.value) != null ? _a2 : [];
          })
        };
      }
      function useStyle$1(props) {
        const { columns } = useMapState();
        const ns = useNamespace("table");
        const getCellClasses = (columns2, cellIndex) => {
          const column = columns2[cellIndex];
          const classes = [
            ns.e("cell"),
            column.id,
            column.align,
            column.labelClassName,
            ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store)
          ];
          if (column.className) {
            classes.push(column.className);
          }
          if (!column.children) {
            classes.push(ns.is("leaf"));
          }
          return classes;
        };
        const getCellStyles = (column, cellIndex) => {
          const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
          ensurePosition(fixedStyle, "left");
          ensurePosition(fixedStyle, "right");
          return fixedStyle;
        };
        return {
          getCellClasses,
          getCellStyles,
          columns
        };
      }
      var TableFooter = vue.defineComponent({
        name: "ElTableFooter",
        props: {
          fixed: {
            type: String,
            default: ""
          },
          store: {
            required: true,
            type: Object
          },
          summaryMethod: Function,
          sumText: String,
          border: Boolean,
          defaultSort: {
            type: Object,
            default: () => {
              return {
                prop: "",
                order: ""
              };
            }
          }
        },
        setup(props) {
          const parent2 = vue.inject(TABLE_INJECTION_KEY);
          const ns = useNamespace("table");
          const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
          const { onScrollableChange, onColumnsChange } = useLayoutObserver(parent2);
          return {
            ns,
            onScrollableChange,
            onColumnsChange,
            getCellClasses,
            getCellStyles,
            columns
          };
        },
        render() {
          const { columns, getCellStyles, getCellClasses, summaryMethod, sumText } = this;
          const data = this.store.states.data.value;
          let sums = [];
          if (summaryMethod) {
            sums = summaryMethod({
              columns,
              data
            });
          } else {
            columns.forEach((column, index) => {
              if (index === 0) {
                sums[index] = sumText;
                return;
              }
              const values = data.map((item) => Number(item[column.property]));
              const precisions = [];
              let notNumber = true;
              values.forEach((value) => {
                if (!Number.isNaN(+value)) {
                  notNumber = false;
                  const decimal = `${value}`.split(".")[1];
                  precisions.push(decimal ? decimal.length : 0);
                }
              });
              const precision = Math.max.apply(null, precisions);
              if (!notNumber) {
                sums[index] = values.reduce((prev, curr) => {
                  const value = Number(curr);
                  if (!Number.isNaN(+value)) {
                    return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
                  } else {
                    return prev;
                  }
                }, 0);
              } else {
                sums[index] = "";
              }
            });
          }
          return vue.h(vue.h("tfoot", [
            vue.h("tr", {}, [
              ...columns.map((column, cellIndex) => vue.h("td", {
                key: cellIndex,
                colspan: column.colSpan,
                rowspan: column.rowSpan,
                class: getCellClasses(columns, cellIndex),
                style: getCellStyles(column, cellIndex)
              }, [
                vue.h("div", {
                  class: ["cell", column.labelClassName]
                }, [sums[cellIndex]])
              ]))
            ])
          ]));
        }
      });
      function useUtils(store) {
        const setCurrentRow = (row) => {
          store.commit("setCurrentRow", row);
        };
        const getSelectionRows = () => {
          return store.getSelectionRows();
        };
        const toggleRowSelection = (row, selected, ignoreSelectable = true) => {
          store.toggleRowSelection(row, selected, false, ignoreSelectable);
          store.updateAllSelected();
        };
        const clearSelection = () => {
          store.clearSelection();
        };
        const clearFilter = (columnKeys) => {
          store.clearFilter(columnKeys);
        };
        const toggleAllSelection = () => {
          store.commit("toggleAllSelection");
        };
        const toggleRowExpansion = (row, expanded) => {
          store.toggleRowExpansionAdapter(row, expanded);
        };
        const clearSort = () => {
          store.clearSort();
        };
        const sort = (prop, order) => {
          store.commit("sort", { prop, order });
        };
        const updateKeyChildren = (key, data) => {
          store.updateKeyChildren(key, data);
        };
        return {
          setCurrentRow,
          getSelectionRows,
          toggleRowSelection,
          clearSelection,
          clearFilter,
          toggleAllSelection,
          toggleRowExpansion,
          clearSort,
          sort,
          updateKeyChildren
        };
      }
      function useStyle(props, layout, store, table) {
        const isHidden2 = vue.ref(false);
        const renderExpanded = vue.ref(null);
        const resizeProxyVisible = vue.ref(false);
        const setDragVisible = (visible) => {
          resizeProxyVisible.value = visible;
        };
        const resizeState = vue.ref({
          width: null,
          height: null,
          headerHeight: null
        });
        const isGroup = vue.ref(false);
        const scrollbarViewStyle = {
          display: "inline-block",
          verticalAlign: "middle"
        };
        const tableWidth = vue.ref();
        const tableScrollHeight = vue.ref(0);
        const bodyScrollHeight = vue.ref(0);
        const headerScrollHeight = vue.ref(0);
        const footerScrollHeight = vue.ref(0);
        const appendScrollHeight = vue.ref(0);
        vue.watchEffect(() => {
          var _a2;
          layout.setHeight((_a2 = props.height) != null ? _a2 : null);
        });
        vue.watchEffect(() => {
          var _a2;
          layout.setMaxHeight((_a2 = props.maxHeight) != null ? _a2 : null);
        });
        vue.watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
          if (!vue.unref(rowKey) || !vue.unref(currentRowKey))
            return;
          store.setCurrentRowKey(`${currentRowKey}`);
        }, {
          immediate: true
        });
        vue.watch(() => props.data, (data) => {
          table.store.commit("setData", data);
        }, {
          immediate: true,
          deep: true
        });
        vue.watchEffect(() => {
          if (props.expandRowKeys) {
            store.setExpandRowKeysAdapter(props.expandRowKeys);
          }
        });
        const handleMouseLeave = () => {
          table.store.commit("setHoverRow", null);
          if (table.hoverState)
            table.hoverState = null;
        };
        const handleHeaderFooterMousewheel = (_event2, data) => {
          const { pixelX, pixelY } = data;
          if (Math.abs(pixelX) >= Math.abs(pixelY)) {
            table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
          }
        };
        const shouldUpdateHeight = vue.computed(() => {
          return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
        });
        const tableBodyStyles = vue.computed(() => {
          return {
            width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
          };
        });
        const doLayout = () => {
          if (shouldUpdateHeight.value) {
            layout.updateElsHeight();
          }
          layout.updateColumnsWidth();
          if (typeof window === "undefined")
            return;
          requestAnimationFrame(syncPosition);
        };
        vue.onMounted(async () => {
          await vue.nextTick();
          store.updateColumns();
          bindEvents();
          requestAnimationFrame(doLayout);
          const el = table.vnode.el;
          const tableHeader = table.refs.headerWrapper;
          if (props.flexible && el && el.parentElement) {
            el.parentElement.style.minWidth = "0";
          }
          resizeState.value = {
            width: tableWidth.value = el.offsetWidth,
            height: el.offsetHeight,
            headerHeight: props.showHeader && tableHeader ? tableHeader.offsetHeight : null
          };
          store.states.columns.value.forEach((column) => {
            if (column.filteredValue && column.filteredValue.length) {
              table.store.commit("filterChange", {
                column,
                values: column.filteredValue,
                silent: true
              });
            }
          });
          table.$ready = true;
        });
        const setScrollClassByEl = (el, className) => {
          if (!el)
            return;
          const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
          classList.push(layout.scrollX.value ? className : "is-scrolling-none");
          el.className = classList.join(" ");
        };
        const setScrollClass = (className) => {
          const { tableWrapper } = table.refs;
          setScrollClassByEl(tableWrapper, className);
        };
        const hasScrollClass = (className) => {
          const { tableWrapper } = table.refs;
          return !!(tableWrapper && tableWrapper.classList.contains(className));
        };
        const syncPosition = function() {
          if (!table.refs.scrollBarRef)
            return;
          if (!layout.scrollX.value) {
            const scrollingNoneClass = "is-scrolling-none";
            if (!hasScrollClass(scrollingNoneClass)) {
              setScrollClass(scrollingNoneClass);
            }
            return;
          }
          const scrollContainer = table.refs.scrollBarRef.wrapRef;
          if (!scrollContainer)
            return;
          const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
          const { headerWrapper, footerWrapper } = table.refs;
          if (headerWrapper)
            headerWrapper.scrollLeft = scrollLeft;
          if (footerWrapper)
            footerWrapper.scrollLeft = scrollLeft;
          const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
          if (scrollLeft >= maxScrollLeftPosition) {
            setScrollClass("is-scrolling-right");
          } else if (scrollLeft === 0) {
            setScrollClass("is-scrolling-left");
          } else {
            setScrollClass("is-scrolling-middle");
          }
        };
        const bindEvents = () => {
          if (!table.refs.scrollBarRef)
            return;
          if (table.refs.scrollBarRef.wrapRef) {
            useEventListener(table.refs.scrollBarRef.wrapRef, "scroll", syncPosition, {
              passive: true
            });
          }
          if (props.fit) {
            useResizeObserver(table.vnode.el, resizeListener);
          } else {
            useEventListener(window, "resize", resizeListener);
          }
          useResizeObserver(table.refs.bodyWrapper, () => {
            var _a2, _b;
            resizeListener();
            (_b = (_a2 = table.refs) == null ? void 0 : _a2.scrollBarRef) == null ? void 0 : _b.update();
          });
        };
        const resizeListener = () => {
          var _a2, _b, _c, _d;
          const el = table.vnode.el;
          if (!table.$ready || !el)
            return;
          let shouldUpdateLayout = false;
          const {
            width: oldWidth,
            height: oldHeight,
            headerHeight: oldHeaderHeight
          } = resizeState.value;
          const width = tableWidth.value = el.offsetWidth;
          if (oldWidth !== width) {
            shouldUpdateLayout = true;
          }
          const height = el.offsetHeight;
          if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) {
            shouldUpdateLayout = true;
          }
          const tableHeader = props.tableLayout === "fixed" ? table.refs.headerWrapper : (_a2 = table.refs.tableHeaderRef) == null ? void 0 : _a2.$el;
          if (props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) !== oldHeaderHeight) {
            shouldUpdateLayout = true;
          }
          tableScrollHeight.value = ((_b = table.refs.tableWrapper) == null ? void 0 : _b.scrollHeight) || 0;
          headerScrollHeight.value = (tableHeader == null ? void 0 : tableHeader.scrollHeight) || 0;
          footerScrollHeight.value = ((_c = table.refs.footerWrapper) == null ? void 0 : _c.offsetHeight) || 0;
          appendScrollHeight.value = ((_d = table.refs.appendWrapper) == null ? void 0 : _d.offsetHeight) || 0;
          bodyScrollHeight.value = tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value - appendScrollHeight.value;
          if (shouldUpdateLayout) {
            resizeState.value = {
              width,
              height,
              headerHeight: props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) || 0
            };
            doLayout();
          }
        };
        const tableSize = useFormSize();
        const bodyWidth = vue.computed(() => {
          const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
          return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
        });
        const tableLayout = vue.computed(() => {
          if (props.maxHeight)
            return "fixed";
          return props.tableLayout;
        });
        const emptyBlockStyle = vue.computed(() => {
          if (props.data && props.data.length)
            return;
          let height = "100%";
          if (props.height && bodyScrollHeight.value) {
            height = `${bodyScrollHeight.value}px`;
          }
          const width = tableWidth.value;
          return {
            width: width ? `${width}px` : "",
            height
          };
        });
        const scrollbarStyle = vue.computed(() => {
          if (props.height) {
            return {
              height: "100%"
            };
          }
          if (props.maxHeight) {
            if (!Number.isNaN(Number(props.maxHeight))) {
              return {
                maxHeight: `${+props.maxHeight - headerScrollHeight.value - footerScrollHeight.value}px`
              };
            } else {
              return {
                maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)`
              };
            }
          }
          return {};
        });
        return {
          isHidden: isHidden2,
          renderExpanded,
          setDragVisible,
          isGroup,
          handleMouseLeave,
          handleHeaderFooterMousewheel,
          tableSize,
          emptyBlockStyle,
          resizeProxyVisible,
          bodyWidth,
          resizeState,
          doLayout,
          tableBodyStyles,
          tableLayout,
          scrollbarViewStyle,
          scrollbarStyle
        };
      }
      function useKeyRender(table) {
        const observer = vue.ref();
        const initWatchDom = () => {
          const el = table.vnode.el;
          const columnsWrapper = el.querySelector(".hidden-columns");
          const config = { childList: true, subtree: true };
          const updateOrderFns = table.store.states.updateOrderFns;
          observer.value = new MutationObserver(() => {
            updateOrderFns.forEach((fn2) => fn2());
          });
          observer.value.observe(columnsWrapper, config);
        };
        vue.onMounted(() => {
          initWatchDom();
        });
        vue.onUnmounted(() => {
          var _a2;
          (_a2 = observer.value) == null ? void 0 : _a2.disconnect();
        });
      }
      var defaultProps$1 = {
        data: {
          type: Array,
          default: () => []
        },
        size: useSizeProp,
        width: [String, Number],
        height: [String, Number],
        maxHeight: [String, Number],
        fit: {
          type: Boolean,
          default: true
        },
        stripe: Boolean,
        border: Boolean,
        rowKey: [String, Function],
        showHeader: {
          type: Boolean,
          default: true
        },
        showSummary: Boolean,
        sumText: String,
        summaryMethod: Function,
        rowClassName: [String, Function],
        rowStyle: [Object, Function],
        cellClassName: [String, Function],
        cellStyle: [Object, Function],
        headerRowClassName: [String, Function],
        headerRowStyle: [Object, Function],
        headerCellClassName: [String, Function],
        headerCellStyle: [Object, Function],
        highlightCurrentRow: Boolean,
        currentRowKey: [String, Number],
        emptyText: String,
        expandRowKeys: Array,
        defaultExpandAll: Boolean,
        defaultSort: Object,
        tooltipEffect: String,
        tooltipOptions: Object,
        spanMethod: Function,
        selectOnIndeterminate: {
          type: Boolean,
          default: true
        },
        indent: {
          type: Number,
          default: 16
        },
        treeProps: {
          type: Object,
          default: () => {
            return {
              hasChildren: "hasChildren",
              children: "children",
              checkStrictly: false
            };
          }
        },
        lazy: Boolean,
        load: Function,
        style: {
          type: Object,
          default: () => ({})
        },
        className: {
          type: String,
          default: ""
        },
        tableLayout: {
          type: String,
          default: "fixed"
        },
        scrollbarAlwaysOn: Boolean,
        flexible: Boolean,
        showOverflowTooltip: [Boolean, Object],
        tooltipFormatter: Function,
        appendFilterPanelTo: String,
        scrollbarTabindex: {
          type: [Number, String],
          default: void 0
        },
        allowDragLastColumn: {
          type: Boolean,
          default: true
        },
        preserveExpandedContent: Boolean,
        nativeScrollbar: Boolean
      };
      function hColgroup(props) {
        const isAuto = props.tableLayout === "auto";
        let columns = props.columns || [];
        if (isAuto) {
          if (columns.every(({ width }) => isUndefined$1(width))) {
            columns = [];
          }
        }
        const getPropsData = (column) => {
          const propsData = {
            key: `${props.tableLayout}_${column.id}`,
            style: {},
            name: void 0
          };
          if (isAuto) {
            propsData.style = {
              width: `${column.width}px`
            };
          } else {
            propsData.name = column.id;
          }
          return propsData;
        };
        return vue.h("colgroup", {}, columns.map((column) => vue.h("col", getPropsData(column))));
      }
      hColgroup.props = ["columns", "tableLayout"];
      const useScrollbar = () => {
        const scrollBarRef = vue.ref();
        const scrollTo = (options, yCoord) => {
          const scrollbar = scrollBarRef.value;
          if (scrollbar) {
            scrollbar.scrollTo(options, yCoord);
          }
        };
        const setScrollPosition = (position, offset2) => {
          const scrollbar = scrollBarRef.value;
          if (scrollbar && isNumber$1(offset2) && ["Top", "Left"].includes(position)) {
            scrollbar[`setScroll${position}`](offset2);
          }
        };
        const setScrollTop = (top) => setScrollPosition("Top", top);
        const setScrollLeft = (left) => setScrollPosition("Left", left);
        return {
          scrollBarRef,
          scrollTo,
          setScrollTop,
          setScrollLeft
        };
      };
      var v = false, o, f, s, u, d, N, l, p, m, w, D, x, E, M, F;
      function a() {
        if (!v) {
          v = true;
          var e = navigator.userAgent, n = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), i = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
          if (x = /\b(iPhone|iP[ao]d)/.exec(e), E = /\b(iP[ao]d)/.exec(e), w = /Android/i.exec(e), M = /FBAN\/\w+;/i.exec(e), F = /Mobile/i.exec(e), D = !!/Win64/.exec(e), n) {
            o = n[1] ? parseFloat(n[1]) : n[5] ? parseFloat(n[5]) : NaN, o && document && document.documentMode && (o = document.documentMode);
            var r = /(?:Trident\/(\d+.\d+))/.exec(e);
            N = r ? parseFloat(r[1]) + 4 : o, f = n[2] ? parseFloat(n[2]) : NaN, s = n[3] ? parseFloat(n[3]) : NaN, u = n[4] ? parseFloat(n[4]) : NaN, u ? (n = /(?:Chrome\/(\d+\.\d+))/.exec(e), d = n && n[1] ? parseFloat(n[1]) : NaN) : d = NaN;
          } else o = f = s = d = u = NaN;
          if (i) {
            if (i[1]) {
              var t = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
              l = t ? parseFloat(t[1].replace("_", ".")) : true;
            } else l = false;
            p = !!i[2], m = !!i[3];
          } else l = p = m = false;
        }
      }
      var _ = { ie: function() {
        return a() || o;
      }, ieCompatibilityMode: function() {
        return a() || N > o;
      }, ie64: function() {
        return _.ie() && D;
      }, firefox: function() {
        return a() || f;
      }, opera: function() {
        return a() || s;
      }, webkit: function() {
        return a() || u;
      }, safari: function() {
        return _.webkit();
      }, chrome: function() {
        return a() || d;
      }, windows: function() {
        return a() || p;
      }, osx: function() {
        return a() || l;
      }, linux: function() {
        return a() || m;
      }, iphone: function() {
        return a() || x;
      }, mobile: function() {
        return a() || x || E || w || F;
      }, nativeApp: function() {
        return a() || M;
      }, android: function() {
        return a() || w;
      }, ipad: function() {
        return a() || E;
      } }, A = _;
      var c = !!(typeof window < "u" && window.document && window.document.createElement), U = { canUseDOM: c }, h = U;
      var X;
      h.canUseDOM && (X = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
      function S(e, n) {
        if (!h.canUseDOM || n && !("addEventListener" in document)) return false;
        var i = "on" + e, r = i in document;
        if (!r) {
          var t = document.createElement("div");
          t.setAttribute(i, "return;"), r = typeof t[i] == "function";
        }
        return !r && X && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
      }
      var b = S;
      var O = 10, I = 40, P = 800;
      function T(e) {
        var n = 0, i = 0, r = 0, t = 0;
        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (n = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (n = i, i = 0), r = n * O, t = i * O, "deltaY" in e && (t = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || t) && e.deltaMode && (e.deltaMode == 1 ? (r *= I, t *= I) : (r *= P, t *= P)), r && !n && (n = r < 1 ? -1 : 1), t && !i && (i = t < 1 ? -1 : 1), { spinX: n, spinY: i, pixelX: r, pixelY: t };
      }
      T.getEventType = function() {
        return A.firefox() ? "DOMMouseScroll" : b("wheel") ? "wheel" : "mousewheel";
      };
      var Y = T;
      const SCOPE = "_Mousewheel";
      const mousewheel = function(element, callback) {
        if (element && element.addEventListener) {
          removeWheelHandler(element);
          const fn2 = function(event) {
            const normalized = Y(event);
            callback && Reflect.apply(callback, this, [event, normalized]);
          };
          element[SCOPE] = { wheelHandler: fn2 };
          element.addEventListener("wheel", fn2, { passive: true });
        }
      };
      const removeWheelHandler = (element) => {
        var _a2;
        if ((_a2 = element[SCOPE]) == null ? void 0 : _a2.wheelHandler) {
          element.removeEventListener("wheel", element[SCOPE].wheelHandler);
          element[SCOPE] = null;
        }
      };
      const Mousewheel = {
        beforeMount(el, binding) {
          mousewheel(el, binding.value);
        },
        unmounted(el) {
          removeWheelHandler(el);
        },
        updated(el, binding) {
          if (binding.value !== binding.oldValue) {
            mousewheel(el, binding.value);
          }
        }
      };
      let tableIdSeed = 1;
      const _sfc_main$3 = vue.defineComponent({
        name: "ElTable",
        directives: {
          Mousewheel
        },
        components: {
          TableHeader,
          TableBody,
          TableFooter,
          ElScrollbar,
          hColgroup
        },
        props: defaultProps$1,
        emits: [
          "select",
          "select-all",
          "selection-change",
          "cell-mouse-enter",
          "cell-mouse-leave",
          "cell-contextmenu",
          "cell-click",
          "cell-dblclick",
          "row-click",
          "row-contextmenu",
          "row-dblclick",
          "header-click",
          "header-contextmenu",
          "sort-change",
          "filter-change",
          "current-change",
          "header-dragend",
          "expand-change",
          "scroll"
        ],
        setup(props) {
          const { t } = useLocale();
          const ns = useNamespace("table");
          const table = vue.getCurrentInstance();
          vue.provide(TABLE_INJECTION_KEY, table);
          const store = createStore(table, props);
          table.store = store;
          const layout = new TableLayout({
            store: table.store,
            table,
            fit: props.fit,
            showHeader: props.showHeader
          });
          table.layout = layout;
          const isEmpty = vue.computed(() => (store.states.data.value || []).length === 0);
          const {
            setCurrentRow,
            getSelectionRows,
            toggleRowSelection,
            clearSelection,
            clearFilter,
            toggleAllSelection,
            toggleRowExpansion,
            clearSort,
            sort,
            updateKeyChildren
          } = useUtils(store);
          const {
            isHidden: isHidden2,
            renderExpanded,
            setDragVisible,
            isGroup,
            handleMouseLeave,
            handleHeaderFooterMousewheel,
            tableSize,
            emptyBlockStyle,
            resizeProxyVisible,
            bodyWidth,
            resizeState,
            doLayout,
            tableBodyStyles,
            tableLayout,
            scrollbarViewStyle,
            scrollbarStyle
          } = useStyle(props, layout, store, table);
          const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
          const debouncedUpdateLayout = debounce(doLayout, 50);
          const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`;
          table.tableId = tableId;
          table.state = {
            isGroup,
            resizeState,
            doLayout,
            debouncedUpdateLayout
          };
          const computedSumText = vue.computed(() => {
            var _a2;
            return (_a2 = props.sumText) != null ? _a2 : t("el.table.sumText");
          });
          const computedEmptyText = vue.computed(() => {
            var _a2;
            return (_a2 = props.emptyText) != null ? _a2 : t("el.table.emptyText");
          });
          const columns = vue.computed(() => {
            return convertToRows(store.states.originColumns.value)[0];
          });
          useKeyRender(table);
          vue.onBeforeUnmount(() => {
            debouncedUpdateLayout.cancel();
          });
          return {
            ns,
            layout,
            store,
            columns,
            handleHeaderFooterMousewheel,
            handleMouseLeave,
            tableId,
            tableSize,
            isHidden: isHidden2,
            isEmpty,
            renderExpanded,
            resizeProxyVisible,
            resizeState,
            isGroup,
            bodyWidth,
            tableBodyStyles,
            emptyBlockStyle,
            debouncedUpdateLayout,
            setCurrentRow,
            getSelectionRows,
            toggleRowSelection,
            clearSelection,
            clearFilter,
            toggleAllSelection,
            toggleRowExpansion,
            clearSort,
            doLayout,
            sort,
            updateKeyChildren,
            t,
            setDragVisible,
            context: table,
            computedSumText,
            computedEmptyText,
            tableLayout,
            scrollbarViewStyle,
            scrollbarStyle,
            scrollBarRef,
            scrollTo,
            setScrollLeft,
            setScrollTop,
            allowDragLastColumn: props.allowDragLastColumn
          };
        }
      });
      function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
        const _component_hColgroup = vue.resolveComponent("hColgroup");
        const _component_table_header = vue.resolveComponent("table-header");
        const _component_table_body = vue.resolveComponent("table-body");
        const _component_table_footer = vue.resolveComponent("table-footer");
        const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
        const _directive_mousewheel = vue.resolveDirective("mousewheel");
        return vue.openBlock(), vue.createElementBlock("div", {
          ref: "tableWrapper",
          class: vue.normalizeClass([
            {
              [_ctx.ns.m("fit")]: _ctx.fit,
              [_ctx.ns.m("striped")]: _ctx.stripe,
              [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
              [_ctx.ns.m("hidden")]: _ctx.isHidden,
              [_ctx.ns.m("group")]: _ctx.isGroup,
              [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
              [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
              [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
              [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
              [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
              "has-footer": _ctx.showSummary
            },
            _ctx.ns.m(_ctx.tableSize),
            _ctx.className,
            _ctx.ns.b(),
            _ctx.ns.m(`layout-${_ctx.tableLayout}`)
          ]),
          style: vue.normalizeStyle(_ctx.style),
          "data-prefix": _ctx.ns.namespace.value,
          onMouseleave: _ctx.handleMouseLeave
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(_ctx.ns.e("inner-wrapper"))
          }, [
            vue.createElementVNode("div", {
              ref: "hiddenColumns",
              class: "hidden-columns"
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 512),
            _ctx.showHeader && _ctx.tableLayout === "fixed" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              ref: "headerWrapper",
              class: vue.normalizeClass(_ctx.ns.e("header-wrapper"))
            }, [
              vue.createElementVNode("table", {
                ref: "tableHeader",
                class: vue.normalizeClass(_ctx.ns.e("header")),
                style: vue.normalizeStyle(_ctx.tableBodyStyles),
                border: "0",
                cellpadding: "0",
                cellspacing: "0"
              }, [
                vue.createVNode(_component_hColgroup, {
                  columns: _ctx.store.states.columns.value,
                  "table-layout": _ctx.tableLayout
                }, null, 8, ["columns", "table-layout"]),
                vue.createVNode(_component_table_header, {
                  ref: "tableHeaderRef",
                  border: _ctx.border,
                  "default-sort": _ctx.defaultSort,
                  store: _ctx.store,
                  "append-filter-panel-to": _ctx.appendFilterPanelTo,
                  "allow-drag-last-column": _ctx.allowDragLastColumn,
                  onSetDragVisible: _ctx.setDragVisible
                }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "allow-drag-last-column", "onSetDragVisible"])
              ], 6)
            ], 2)), [
              [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
            ]) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", {
              ref: "bodyWrapper",
              class: vue.normalizeClass(_ctx.ns.e("body-wrapper"))
            }, [
              vue.createVNode(_component_el_scrollbar, {
                ref: "scrollBarRef",
                "view-style": _ctx.scrollbarViewStyle,
                "wrap-style": _ctx.scrollbarStyle,
                always: _ctx.scrollbarAlwaysOn,
                tabindex: _ctx.scrollbarTabindex,
                native: _ctx.nativeScrollbar,
                onScroll: ($event) => _ctx.$emit("scroll", $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("table", {
                    ref: "tableBody",
                    class: vue.normalizeClass(_ctx.ns.e("body")),
                    cellspacing: "0",
                    cellpadding: "0",
                    border: "0",
                    style: vue.normalizeStyle({
                      width: _ctx.bodyWidth,
                      tableLayout: _ctx.tableLayout
                    })
                  }, [
                    vue.createVNode(_component_hColgroup, {
                      columns: _ctx.store.states.columns.value,
                      "table-layout": _ctx.tableLayout
                    }, null, 8, ["columns", "table-layout"]),
                    _ctx.showHeader && _ctx.tableLayout === "auto" ? (vue.openBlock(), vue.createBlock(_component_table_header, {
                      key: 0,
                      ref: "tableHeaderRef",
                      class: vue.normalizeClass(_ctx.ns.e("body-header")),
                      border: _ctx.border,
                      "default-sort": _ctx.defaultSort,
                      store: _ctx.store,
                      "append-filter-panel-to": _ctx.appendFilterPanelTo,
                      onSetDragVisible: _ctx.setDragVisible
                    }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : vue.createCommentVNode("v-if", true),
                    vue.createVNode(_component_table_body, {
                      context: _ctx.context,
                      highlight: _ctx.highlightCurrentRow,
                      "row-class-name": _ctx.rowClassName,
                      "tooltip-effect": _ctx.tooltipEffect,
                      "tooltip-options": _ctx.tooltipOptions,
                      "row-style": _ctx.rowStyle,
                      store: _ctx.store,
                      stripe: _ctx.stripe
                    }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
                    _ctx.showSummary && _ctx.tableLayout === "auto" ? (vue.openBlock(), vue.createBlock(_component_table_footer, {
                      key: 1,
                      class: vue.normalizeClass(_ctx.ns.e("body-footer")),
                      border: _ctx.border,
                      "default-sort": _ctx.defaultSort,
                      store: _ctx.store,
                      "sum-text": _ctx.computedSumText,
                      "summary-method": _ctx.summaryMethod
                    }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : vue.createCommentVNode("v-if", true)
                  ], 6),
                  _ctx.isEmpty ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    ref: "emptyBlock",
                    style: vue.normalizeStyle(_ctx.emptyBlockStyle),
                    class: vue.normalizeClass(_ctx.ns.e("empty-block"))
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(_ctx.ns.e("empty-text"))
                    }, [
                      vue.renderSlot(_ctx.$slots, "empty", {}, () => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.computedEmptyText), 1)
                      ])
                    ], 2)
                  ], 6)) : vue.createCommentVNode("v-if", true),
                  _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 1,
                    ref: "appendWrapper",
                    class: vue.normalizeClass(_ctx.ns.e("append-wrapper"))
                  }, [
                    vue.renderSlot(_ctx.$slots, "append")
                  ], 2)) : vue.createCommentVNode("v-if", true)
                ]),
                _: 3
              }, 8, ["view-style", "wrap-style", "always", "tabindex", "native", "onScroll"])
            ], 2),
            _ctx.showSummary && _ctx.tableLayout === "fixed" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              ref: "footerWrapper",
              class: vue.normalizeClass(_ctx.ns.e("footer-wrapper"))
            }, [
              vue.createElementVNode("table", {
                class: vue.normalizeClass(_ctx.ns.e("footer")),
                cellspacing: "0",
                cellpadding: "0",
                border: "0",
                style: vue.normalizeStyle(_ctx.tableBodyStyles)
              }, [
                vue.createVNode(_component_hColgroup, {
                  columns: _ctx.store.states.columns.value,
                  "table-layout": _ctx.tableLayout
                }, null, 8, ["columns", "table-layout"]),
                vue.createVNode(_component_table_footer, {
                  border: _ctx.border,
                  "default-sort": _ctx.defaultSort,
                  store: _ctx.store,
                  "sum-text": _ctx.computedSumText,
                  "summary-method": _ctx.summaryMethod
                }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
              ], 6)
            ], 2)), [
              [vue.vShow, !_ctx.isEmpty],
              [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
            ]) : vue.createCommentVNode("v-if", true),
            _ctx.border || _ctx.isGroup ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 2,
              class: vue.normalizeClass(_ctx.ns.e("border-left-patch"))
            }, null, 2)) : vue.createCommentVNode("v-if", true)
          ], 2),
          vue.withDirectives(vue.createElementVNode("div", {
            ref: "resizeProxy",
            class: vue.normalizeClass(_ctx.ns.e("column-resize-proxy"))
          }, null, 2), [
            [vue.vShow, _ctx.resizeProxyVisible]
          ])
        ], 46, ["data-prefix", "onMouseleave"]);
      }
      var Table = _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__file", "table.vue"]]);
      const defaultClassNames = {
        selection: "table-column--selection",
        expand: "table__expand-column"
      };
      const cellStarts = {
        default: {
          order: ""
        },
        selection: {
          width: 48,
          minWidth: 48,
          realWidth: 48,
          order: ""
        },
        expand: {
          width: 48,
          minWidth: 48,
          realWidth: 48,
          order: ""
        },
        index: {
          width: 48,
          minWidth: 48,
          realWidth: 48,
          order: ""
        }
      };
      const getDefaultClassName = (type) => {
        return defaultClassNames[type] || "";
      };
      const cellForced = {
        selection: {
          renderHeader({
            store,
            column
          }) {
            var _a2;
            function isDisabled() {
              return store.states.data.value && store.states.data.value.length === 0;
            }
            return vue.h(ElCheckbox, {
              disabled: isDisabled(),
              size: store.states.tableSize.value,
              indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
              "onUpdate:modelValue": (_a2 = store.toggleAllSelection) != null ? _a2 : void 0,
              modelValue: store.states.isAllSelected.value,
              ariaLabel: column.label
            });
          },
          renderCell({
            row,
            column,
            store,
            $index
          }) {
            return vue.h(ElCheckbox, {
              disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
              size: store.states.tableSize.value,
              onChange: () => {
                store.commit("rowSelectedChanged", row);
              },
              onClick: (event) => event.stopPropagation(),
              modelValue: store.isSelected(row),
              ariaLabel: column.label
            });
          },
          sortable: false,
          resizable: false
        },
        index: {
          renderHeader({
            column
          }) {
            return column.label || "#";
          },
          renderCell({
            column,
            $index
          }) {
            let i = $index + 1;
            const index = column.index;
            if (isNumber$1(index)) {
              i = $index + index;
            } else if (isFunction$2(index)) {
              i = index($index);
            }
            return vue.h("div", {}, [i]);
          },
          sortable: false
        },
        expand: {
          renderHeader({
            column
          }) {
            return column.label || "";
          },
          renderCell({
            column,
            row,
            store,
            expanded
          }) {
            const { ns } = store;
            const classes = [ns.e("expand-icon")];
            if (!column.renderExpand && expanded) {
              classes.push(ns.em("expand-icon", "expanded"));
            }
            const callback = function(e) {
              e.stopPropagation();
              store.toggleRowExpansion(row);
            };
            return vue.h("div", {
              class: classes,
              onClick: callback
            }, {
              default: () => {
                if (column.renderExpand) {
                  return [
                    column.renderExpand({
                      expanded
                    })
                  ];
                }
                return [
                  vue.h(ElIcon, null, {
                    default: () => {
                      return [vue.h(arrow_right_default)];
                    }
                  })
                ];
              }
            });
          },
          sortable: false,
          resizable: false
        }
      };
      function defaultRenderCell({
        row,
        column,
        $index
      }) {
        var _a2;
        const property2 = column.property;
        const value = property2 && getProp(row, property2).value;
        if (column && column.formatter) {
          return column.formatter(row, column, value, $index);
        }
        return ((_a2 = value == null ? void 0 : value.toString) == null ? void 0 : _a2.call(value)) || "";
      }
      function treeCellPrefix({
        row,
        treeNode,
        store
      }, createPlaceholder = false) {
        const { ns } = store;
        if (!treeNode) {
          if (createPlaceholder) {
            return [
              vue.h("span", {
                class: ns.e("placeholder")
              })
            ];
          }
          return null;
        }
        const ele = [];
        const callback = function(e) {
          e.stopPropagation();
          if (treeNode.loading) {
            return;
          }
          store.loadOrToggle(row);
        };
        if (treeNode.indent) {
          ele.push(vue.h("span", {
            class: ns.e("indent"),
            style: { "padding-left": `${treeNode.indent}px` }
          }));
        }
        if (isBoolean(treeNode.expanded) && !treeNode.noLazyChildren) {
          const expandClasses = [
            ns.e("expand-icon"),
            treeNode.expanded ? ns.em("expand-icon", "expanded") : ""
          ];
          let icon = arrow_right_default;
          if (treeNode.loading) {
            icon = loading_default;
          }
          ele.push(vue.h("div", {
            class: expandClasses,
            onClick: callback
          }, {
            default: () => {
              return [
                vue.h(ElIcon, { class: ns.is("loading", treeNode.loading) }, {
                  default: () => [vue.h(icon)]
                })
              ];
            }
          }));
        } else {
          ele.push(vue.h("span", {
            class: ns.e("placeholder")
          }));
        }
        return ele;
      }
      function getAllAliases(props, aliases2) {
        return props.reduce((prev, cur) => {
          prev[cur] = cur;
          return prev;
        }, aliases2);
      }
      function useWatcher(owner, props_) {
        const instance = vue.getCurrentInstance();
        const registerComplexWatchers = () => {
          const props = ["fixed"];
          const aliases2 = {
            realWidth: "width",
            realMinWidth: "minWidth"
          };
          const allAliases = getAllAliases(props, aliases2);
          Object.keys(allAliases).forEach((key) => {
            const columnKey = aliases2[key];
            if (hasOwn(props_, columnKey)) {
              vue.watch(() => props_[columnKey], (newVal) => {
                let value = newVal;
                if (columnKey === "width" && key === "realWidth") {
                  value = parseWidth(newVal);
                }
                if (columnKey === "minWidth" && key === "realMinWidth") {
                  value = parseMinWidth(newVal);
                }
                instance.columnConfig.value[columnKey] = value;
                instance.columnConfig.value[key] = value;
                const updateColumns = columnKey === "fixed";
                owner.value.store.scheduleLayout(updateColumns);
              });
            }
          });
        };
        const registerNormalWatchers = () => {
          const props = [
            "label",
            "filters",
            "filterMultiple",
            "filteredValue",
            "sortable",
            "index",
            "formatter",
            "className",
            "labelClassName",
            "filterClassName",
            "showOverflowTooltip",
            "tooltipFormatter",
            "resizable"
          ];
          const parentProps = ["showOverflowTooltip"];
          const aliases2 = {
            property: "prop",
            align: "realAlign",
            headerAlign: "realHeaderAlign"
          };
          const allAliases = getAllAliases(props, aliases2);
          Object.keys(allAliases).forEach((key) => {
            const columnKey = aliases2[key];
            if (hasOwn(props_, columnKey)) {
              vue.watch(() => props_[columnKey], (newVal) => {
                instance.columnConfig.value[key] = newVal;
              });
            }
          });
          parentProps.forEach((key) => {
            if (hasOwn(owner.value.props, key)) {
              vue.watch(() => owner.value.props[key], (newVal) => {
                instance.columnConfig.value[key] = newVal;
              });
            }
          });
        };
        return {
          registerComplexWatchers,
          registerNormalWatchers
        };
      }
      function useRender(props, slots, owner) {
        const instance = vue.getCurrentInstance();
        const columnId = vue.ref("");
        const isSubColumn = vue.ref(false);
        const realAlign = vue.ref();
        const realHeaderAlign = vue.ref();
        const ns = useNamespace("table");
        vue.watchEffect(() => {
          realAlign.value = props.align ? `is-${props.align}` : null;
          realAlign.value;
        });
        vue.watchEffect(() => {
          realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
          realHeaderAlign.value;
        });
        const columnOrTableParent = vue.computed(() => {
          let parent2 = instance.vnode.vParent || instance.parent;
          while (parent2 && !parent2.tableId && !parent2.columnId) {
            parent2 = parent2.vnode.vParent || parent2.parent;
          }
          return parent2;
        });
        const hasTreeColumn = vue.computed(() => {
          const { store } = instance.parent;
          if (!store)
            return false;
          const { treeData } = store.states;
          const treeDataValue = treeData.value;
          return treeDataValue && Object.keys(treeDataValue).length > 0;
        });
        const realWidth = vue.ref(parseWidth(props.width));
        const realMinWidth = vue.ref(parseMinWidth(props.minWidth));
        const setColumnWidth = (column) => {
          if (realWidth.value)
            column.width = realWidth.value;
          if (realMinWidth.value) {
            column.minWidth = realMinWidth.value;
          }
          if (!realWidth.value && realMinWidth.value) {
            column.width = void 0;
          }
          if (!column.minWidth) {
            column.minWidth = 80;
          }
          column.realWidth = Number(isUndefined$1(column.width) ? column.minWidth : column.width);
          return column;
        };
        const setColumnForcedProps = (column) => {
          const type = column.type;
          const source = cellForced[type] || {};
          Object.keys(source).forEach((prop) => {
            const value = source[prop];
            if (prop !== "className" && !isUndefined$1(value)) {
              column[prop] = value;
            }
          });
          const className = getDefaultClassName(type);
          if (className) {
            const forceClass = `${vue.unref(ns.namespace)}-${className}`;
            column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
          }
          return column;
        };
        const checkSubColumn = (children) => {
          if (isArray$2(children)) {
            children.forEach((child) => check(child));
          } else {
            check(children);
          }
          function check(item) {
            var _a2;
            if (((_a2 = item == null ? void 0 : item.type) == null ? void 0 : _a2.name) === "ElTableColumn") {
              item.vParent = instance;
            }
          }
        };
        const setColumnRenders = (column) => {
          if (props.renderHeader) ;
          else if (column.type !== "selection") {
            column.renderHeader = (scope) => {
              instance.columnConfig.value["label"];
              return vue.renderSlot(slots, "header", scope, () => [column.label]);
            };
          }
          if (slots["filter-icon"]) {
            column.renderFilterIcon = (scope) => {
              return vue.renderSlot(slots, "filter-icon", scope);
            };
          }
          if (slots.expand) {
            column.renderExpand = (scope) => {
              return vue.renderSlot(slots, "expand", scope);
            };
          }
          let originRenderCell = column.renderCell;
          if (column.type === "expand") {
            column.renderCell = (data) => vue.h("div", {
              class: "cell"
            }, [originRenderCell(data)]);
            owner.value.renderExpanded = (row) => {
              return slots.default ? slots.default(row) : slots.default;
            };
          } else {
            originRenderCell = originRenderCell || defaultRenderCell;
            column.renderCell = (data) => {
              let children = null;
              if (slots.default) {
                const vnodes = slots.default(data);
                children = vnodes.some((v2) => v2.type !== vue.Comment) ? vnodes : originRenderCell(data);
              } else {
                children = originRenderCell(data);
              }
              const { columns } = owner.value.store.states;
              const firstUserColumnIndex = columns.value.findIndex((item) => item.type === "default");
              const shouldCreatePlaceholder = hasTreeColumn.value && data.cellIndex === firstUserColumnIndex;
              const prefix = treeCellPrefix(data, shouldCreatePlaceholder);
              const props2 = {
                class: "cell",
                style: {}
              };
              if (column.showOverflowTooltip) {
                props2.class = `${props2.class} ${vue.unref(ns.namespace)}-tooltip`;
                props2.style = {
                  width: `${(data.column.realWidth || Number(data.column.width)) - 1}px`
                };
              }
              checkSubColumn(children);
              return vue.h("div", props2, [prefix, children]);
            };
          }
          return column;
        };
        const getPropsData = (...propsKey) => {
          return propsKey.reduce((prev, cur) => {
            if (isArray$2(cur)) {
              cur.forEach((key) => {
                prev[key] = props[key];
              });
            }
            return prev;
          }, {});
        };
        const getColumnElIndex = (children, child) => {
          return Array.prototype.indexOf.call(children, child);
        };
        const updateColumnOrder = () => {
          owner.value.store.commit("updateColumnOrder", instance.columnConfig.value);
        };
        return {
          columnId,
          realAlign,
          isSubColumn,
          realHeaderAlign,
          columnOrTableParent,
          setColumnWidth,
          setColumnForcedProps,
          setColumnRenders,
          getPropsData,
          getColumnElIndex,
          updateColumnOrder
        };
      }
      var defaultProps = {
        type: {
          type: String,
          default: "default"
        },
        label: String,
        className: String,
        labelClassName: String,
        property: String,
        prop: String,
        width: {
          type: [String, Number],
          default: ""
        },
        minWidth: {
          type: [String, Number],
          default: ""
        },
        renderHeader: Function,
        sortable: {
          type: [Boolean, String],
          default: false
        },
        sortMethod: Function,
        sortBy: [String, Function, Array],
        resizable: {
          type: Boolean,
          default: true
        },
        columnKey: String,
        align: String,
        headerAlign: String,
        showOverflowTooltip: {
          type: [Boolean, Object],
          default: void 0
        },
        tooltipFormatter: Function,
        fixed: [Boolean, String],
        formatter: Function,
        selectable: Function,
        reserveSelection: Boolean,
        filterMethod: Function,
        filteredValue: Array,
        filters: Array,
        filterPlacement: String,
        filterMultiple: {
          type: Boolean,
          default: true
        },
        filterClassName: String,
        index: [Number, Function],
        sortOrders: {
          type: Array,
          default: () => {
            return ["ascending", "descending", null];
          },
          validator: (val) => {
            return val.every((order) => ["ascending", "descending", null].includes(order));
          }
        }
      };
      let columnIdSeed = 1;
      var ElTableColumn$1 = vue.defineComponent({
        name: "ElTableColumn",
        components: {
          ElCheckbox
        },
        props: defaultProps,
        setup(props, { slots }) {
          const instance = vue.getCurrentInstance();
          const columnConfig = vue.ref({});
          const owner = vue.computed(() => {
            let parent22 = instance.parent;
            while (parent22 && !parent22.tableId) {
              parent22 = parent22.parent;
            }
            return parent22;
          });
          const { registerNormalWatchers, registerComplexWatchers } = useWatcher(owner, props);
          const {
            columnId,
            isSubColumn,
            realHeaderAlign,
            columnOrTableParent,
            setColumnWidth,
            setColumnForcedProps,
            setColumnRenders,
            getPropsData,
            getColumnElIndex,
            realAlign,
            updateColumnOrder
          } = useRender(props, slots, owner);
          const parent2 = columnOrTableParent.value;
          columnId.value = `${"tableId" in parent2 && parent2.tableId || "columnId" in parent2 && parent2.columnId}_column_${columnIdSeed++}`;
          vue.onBeforeMount(() => {
            isSubColumn.value = owner.value !== parent2;
            const type = props.type || "default";
            const sortable = props.sortable === "" ? true : props.sortable;
            const showOverflowTooltip = type === "selection" ? false : isUndefined$1(props.showOverflowTooltip) ? parent2.props.showOverflowTooltip : props.showOverflowTooltip;
            const tooltipFormatter = isUndefined$1(props.tooltipFormatter) ? parent2.props.tooltipFormatter : props.tooltipFormatter;
            const defaults2 = {
              ...cellStarts[type],
              id: columnId.value,
              type,
              property: props.prop || props.property,
              align: realAlign,
              headerAlign: realHeaderAlign,
              showOverflowTooltip,
              tooltipFormatter,
              filterable: props.filters || props.filterMethod,
              filteredValue: [],
              filterPlacement: "",
              filterClassName: "",
              isColumnGroup: false,
              isSubColumn: false,
              filterOpened: false,
              sortable,
              index: props.index,
              rawColumnKey: instance.vnode.key
            };
            const basicProps = [
              "columnKey",
              "label",
              "className",
              "labelClassName",
              "type",
              "renderHeader",
              "formatter",
              "fixed",
              "resizable"
            ];
            const sortProps = ["sortMethod", "sortBy", "sortOrders"];
            const selectProps = ["selectable", "reserveSelection"];
            const filterProps = [
              "filterMethod",
              "filters",
              "filterMultiple",
              "filterOpened",
              "filteredValue",
              "filterPlacement",
              "filterClassName"
            ];
            let column = getPropsData(basicProps, sortProps, selectProps, filterProps);
            column = mergeOptions(defaults2, column);
            const chains = compose(setColumnRenders, setColumnWidth, setColumnForcedProps);
            column = chains(column);
            columnConfig.value = column;
            registerNormalWatchers();
            registerComplexWatchers();
          });
          vue.onMounted(() => {
            var _a2, _b;
            const parent22 = columnOrTableParent.value;
            const children = isSubColumn.value ? (_a2 = parent22.vnode.el) == null ? void 0 : _a2.children : (_b = parent22.refs.hiddenColumns) == null ? void 0 : _b.children;
            const getColumnIndex = () => getColumnElIndex(children || [], instance.vnode.el);
            columnConfig.value.getColumnIndex = getColumnIndex;
            const columnIndex = getColumnIndex();
            columnIndex > -1 && owner.value.store.commit("insertColumn", columnConfig.value, isSubColumn.value ? "columnConfig" in parent22 && parent22.columnConfig.value : null, updateColumnOrder);
          });
          vue.onBeforeUnmount(() => {
            const getColumnIndex = columnConfig.value.getColumnIndex;
            const columnIndex = getColumnIndex ? getColumnIndex() : -1;
            columnIndex > -1 && owner.value.store.commit("removeColumn", columnConfig.value, isSubColumn.value ? "columnConfig" in parent2 && parent2.columnConfig.value : null, updateColumnOrder);
          });
          instance.columnId = columnId.value;
          instance.columnConfig = columnConfig;
          return;
        },
        render() {
          var _a2, _b, _c;
          try {
            const renderDefault = (_b = (_a2 = this.$slots).default) == null ? void 0 : _b.call(_a2, {
              row: {},
              column: {},
              $index: -1
            });
            const children = [];
            if (isArray$2(renderDefault)) {
              for (const childNode of renderDefault) {
                if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
                  children.push(childNode);
                } else if (childNode.type === vue.Fragment && isArray$2(childNode.children)) {
                  childNode.children.forEach((vnode2) => {
                    if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString$2(vnode2 == null ? void 0 : vnode2.children)) {
                      children.push(vnode2);
                    }
                  });
                }
              }
            }
            const vnode = vue.h("div", children);
            return vnode;
          } catch (e) {
            return vue.h("div", []);
          }
        }
      });
      const ElTable = withInstall(Table, {
        TableColumn: ElTableColumn$1
      });
      const ElTableColumn = withNoopInstall(ElTableColumn$1);
      const baseCss = '@charset "UTF-8";:root{--el-color-white:#ffffff;--el-color-black:#000000;--el-color-primary-rgb:64,158,255;--el-color-success-rgb:103,194,58;--el-color-warning-rgb:230,162,60;--el-color-danger-rgb:245,108,108;--el-color-error-rgb:245,108,108;--el-color-info-rgb:144,147,153;--el-font-size-extra-large:20px;--el-font-size-large:18px;--el-font-size-medium:16px;--el-font-size-base:14px;--el-font-size-small:13px;--el-font-size-extra-small:12px;--el-font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;--el-font-weight-primary:500;--el-font-line-height-primary:24px;--el-index-normal:1;--el-index-top:1000;--el-index-popper:2000;--el-border-radius-base:4px;--el-border-radius-small:2px;--el-border-radius-round:20px;--el-border-radius-circle:100%;--el-transition-duration:.3s;--el-transition-duration-fast:.2s;--el-transition-function-ease-in-out-bezier:cubic-bezier(.645,.045,.355,1);--el-transition-function-fast-bezier:cubic-bezier(.23,1,.32,1);--el-transition-all:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);--el-transition-fade:opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-md-fade:transform var(--el-transition-duration) var(--el-transition-function-fast-bezier),opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-fade-linear:opacity var(--el-transition-duration-fast) linear;--el-transition-border:border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-box-shadow:box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-color:color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-component-size-large:40px;--el-component-size:32px;--el-component-size-small:24px}:root{color-scheme:light;--el-color-primary:#409eff;--el-color-primary-light-3:rgb(121,187,255);--el-color-primary-light-5:rgb(160,207,255);--el-color-primary-light-7:rgb(198,226,255);--el-color-primary-light-8:rgb(217,236,255);--el-color-primary-light-9:rgb(236,245,255);--el-color-primary-dark-2:rgb(51,126,204);--el-color-success:#67c23a;--el-color-success-light-3:rgb(149,212,117);--el-color-success-light-5:rgb(179,225,157);--el-color-success-light-7:rgb(209,237,196);--el-color-success-light-8:rgb(225,243,216);--el-color-success-light-9:rgb(240,249,235);--el-color-success-dark-2:rgb(82,155,46);--el-color-warning:#e6a23c;--el-color-warning-light-3:rgb(238,190,119);--el-color-warning-light-5:rgb(243,209,158);--el-color-warning-light-7:rgb(248,227,197);--el-color-warning-light-8:rgb(250,236,216);--el-color-warning-light-9:rgb(253,246,236);--el-color-warning-dark-2:rgb(184,130,48);--el-color-danger:#f56c6c;--el-color-danger-light-3:rgb(248,152,152);--el-color-danger-light-5:rgb(250,182,182);--el-color-danger-light-7:rgb(252,211,211);--el-color-danger-light-8:rgb(253,226,226);--el-color-danger-light-9:rgb(254,240,240);--el-color-danger-dark-2:rgb(196,86,86);--el-color-error:#f56c6c;--el-color-error-light-3:rgb(248,152,152);--el-color-error-light-5:rgb(250,182,182);--el-color-error-light-7:rgb(252,211,211);--el-color-error-light-8:rgb(253,226,226);--el-color-error-light-9:rgb(254,240,240);--el-color-error-dark-2:rgb(196,86,86);--el-color-info:#909399;--el-color-info-light-3:rgb(177,179,184);--el-color-info-light-5:rgb(200,201,204);--el-color-info-light-7:rgb(222,223,224);--el-color-info-light-8:rgb(233,233,235);--el-color-info-light-9:rgb(244,244,245);--el-color-info-dark-2:rgb(115,118,122);--el-bg-color:#ffffff;--el-bg-color-page:#f2f3f5;--el-bg-color-overlay:#ffffff;--el-text-color-primary:#303133;--el-text-color-regular:#606266;--el-text-color-secondary:#909399;--el-text-color-placeholder:#a8abb2;--el-text-color-disabled:#c0c4cc;--el-border-color:#dcdfe6;--el-border-color-light:#e4e7ed;--el-border-color-lighter:#ebeef5;--el-border-color-extra-light:#f2f6fc;--el-border-color-dark:#d4d7de;--el-border-color-darker:#cdd0d6;--el-fill-color:#f0f2f5;--el-fill-color-light:#f5f7fa;--el-fill-color-lighter:#fafafa;--el-fill-color-extra-light:#fafcff;--el-fill-color-dark:#ebedf0;--el-fill-color-darker:#e6e8eb;--el-fill-color-blank:#ffffff;--el-box-shadow:0px 12px 32px 4px rgba(0,0,0,.04),0px 8px 20px rgba(0,0,0,.08);--el-box-shadow-light:0px 0px 12px rgba(0,0,0,.12);--el-box-shadow-lighter:0px 0px 6px rgba(0,0,0,.12);--el-box-shadow-dark:0px 16px 48px 16px rgba(0,0,0,.08),0px 12px 32px rgba(0,0,0,.12),0px 8px 16px -8px rgba(0,0,0,.16);--el-disabled-bg-color:var(--el-fill-color-light);--el-disabled-text-color:var(--el-text-color-placeholder);--el-disabled-border-color:var(--el-border-color-light);--el-overlay-color:rgba(0,0,0,.8);--el-overlay-color-light:rgba(0,0,0,.7);--el-overlay-color-lighter:rgba(0,0,0,.5);--el-mask-color:rgba(255,255,255,.9);--el-mask-color-extra-light:rgba(255,255,255,.3);--el-border-width:1px;--el-border-style:solid;--el-border-color-hover:var(--el-text-color-disabled);--el-border:var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-svg-monochrome-grey:var(--el-border-color)}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transform-origin:center top;transition:var(--el-transition-md-fade)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transform-origin:center bottom;transition:var(--el-transition-md-fade)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transform-origin:top left;transition:var(--el-transition-md-fade)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-enter-active,.el-collapse-transition-leave-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.el-icon{--color:inherit;align-items:center;display:inline-flex;height:1em;justify-content:center;line-height:1em;position:relative;width:1em;fill:currentColor;color:var(--color);font-size:inherit}.el-icon.is-loading{animation:rotating 2s linear infinite}.el-icon svg{height:1em;width:1em}';
      importCSS(baseCss);
      const elButtonCss = '.el-button{--el-button-font-weight:var(--el-font-weight-primary);--el-button-border-color:var(--el-border-color);--el-button-bg-color:var(--el-fill-color-blank);--el-button-text-color:var(--el-text-color-regular);--el-button-disabled-text-color:var(--el-disabled-text-color);--el-button-disabled-bg-color:var(--el-fill-color-blank);--el-button-disabled-border-color:var(--el-border-color-light);--el-button-divide-border-color:rgba(255,255,255,.5);--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-7);--el-button-active-text-color:var(--el-button-hover-text-color);--el-button-active-border-color:var(--el-color-primary);--el-button-active-bg-color:var(--el-button-hover-bg-color);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-hover-link-text-color:var(--el-text-color-secondary);--el-button-active-color:var(--el-text-color-primary);align-items:center;-webkit-appearance:none;background-color:var(--el-button-bg-color);border:var(--el-border);border-color:var(--el-button-border-color);box-sizing:border-box;color:var(--el-button-text-color);cursor:pointer;display:inline-flex;font-weight:var(--el-button-font-weight);height:32px;justify-content:center;line-height:1;outline:none;text-align:center;transition:.1s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.el-button:hover{background-color:var(--el-button-hover-bg-color);border-color:var(--el-button-hover-border-color);color:var(--el-button-hover-text-color);outline:none}.el-button:active{background-color:var(--el-button-active-bg-color);border-color:var(--el-button-active-border-color);color:var(--el-button-active-text-color);outline:none}.el-button:focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset 0s,outline 0s}.el-button>span{align-items:center;display:inline-flex}.el-button+.el-button{margin-left:12px}.el-button{border-radius:var(--el-border-radius-base);font-size:var(--el-font-size-base)}.el-button,.el-button.is-round{padding:8px 15px}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon]+span{margin-left:6px}.el-button [class*=el-icon] svg{vertical-align:bottom}.el-button.is-plain{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary)}.el-button.is-active{background-color:var(--el-button-active-bg-color);border-color:var(--el-button-active-border-color);color:var(--el-button-active-text-color);outline:none}.el-button.is-disabled,.el-button.is-disabled:hover{background-color:var(--el-button-disabled-bg-color);background-image:none;border-color:var(--el-button-disabled-border-color);color:var(--el-button-disabled-text-color);cursor:not-allowed}.el-button.is-loading{pointer-events:none;position:relative}.el-button.is-loading:before{background-color:var(--el-mask-color-extra-light);border-radius:inherit;content:"";inset:-1px;pointer-events:none;position:absolute;z-index:1}.el-button.is-round{border-radius:var(--el-border-radius-round)}.el-button.is-circle{border-radius:50%;padding:8px;width:32px}.el-button.is-text{background-color:transparent;border:0 solid transparent;color:var(--el-button-text-color)}.el-button.is-text.is-disabled{background-color:transparent!important;color:var(--el-button-disabled-text-color)}.el-button.is-text:not(.is-disabled):hover{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled):focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset 0s,outline 0s}.el-button.is-text:not(.is-disabled):active{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled).is-has-bg:hover{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg:active{background-color:var(--el-fill-color-dark)}.el-button__text--expand{letter-spacing:.3em;margin-right:-.3em}.el-button.is-link{background:transparent;border-color:transparent;color:var(--el-button-text-color);height:auto;padding:2px}.el-button.is-link:hover{color:var(--el-button-hover-link-text-color)}.el-button.is-link.is-disabled{background-color:transparent!important;border-color:transparent!important;color:var(--el-button-disabled-text-color)}.el-button.is-link:not(.is-disabled):hover{background-color:transparent;border-color:transparent}.el-button.is-link:not(.is-disabled):active{background-color:transparent;border-color:transparent;color:var(--el-button-active-color)}.el-button--text{background:transparent;border-color:transparent;color:var(--el-color-primary);padding-left:0;padding-right:0}.el-button--text.is-disabled{background-color:transparent!important;border-color:transparent!important;color:var(--el-button-disabled-text-color)}.el-button--text:not(.is-disabled):hover{background-color:transparent;border-color:transparent;color:var(--el-color-primary-light-3)}.el-button--text:not(.is-disabled):active{background-color:transparent;border-color:transparent;color:var(--el-color-primary-dark-2)}.el-button__link--expand{letter-spacing:.3em;margin-right:-.3em}.el-button--primary{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-primary);--el-button-border-color:var(--el-color-primary);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-active-color:var(--el-color-primary-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-primary-light-5);--el-button-hover-bg-color:var(--el-color-primary-light-3);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-bg-color:var(--el-color-primary-dark-2);--el-button-active-border-color:var(--el-color-primary-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-primary-light-5);--el-button-disabled-border-color:var(--el-color-primary-light-5)}.el-button--primary.is-link,.el-button--primary.is-plain,.el-button--primary.is-text{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-primary);--el-button-hover-border-color:var(--el-color-primary);--el-button-active-text-color:var(--el-color-white)}.el-button--primary.is-link.is-disabled,.el-button--primary.is-link.is-disabled:active,.el-button--primary.is-link.is-disabled:focus,.el-button--primary.is-link.is-disabled:hover,.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:hover,.el-button--primary.is-text.is-disabled,.el-button--primary.is-text.is-disabled:active,.el-button--primary.is-text.is-disabled:focus,.el-button--primary.is-text.is-disabled:hover{background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8);color:var(--el-color-primary-light-5)}.el-button--success{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-success);--el-button-border-color:var(--el-color-success);--el-button-outline-color:var(--el-color-success-light-5);--el-button-active-color:var(--el-color-success-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-success-light-5);--el-button-hover-bg-color:var(--el-color-success-light-3);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-bg-color:var(--el-color-success-dark-2);--el-button-active-border-color:var(--el-color-success-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-success-light-5);--el-button-disabled-border-color:var(--el-color-success-light-5)}.el-button--success.is-link,.el-button--success.is-plain,.el-button--success.is-text{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-success);--el-button-hover-border-color:var(--el-color-success);--el-button-active-text-color:var(--el-color-white)}.el-button--success.is-link.is-disabled,.el-button--success.is-link.is-disabled:active,.el-button--success.is-link.is-disabled:focus,.el-button--success.is-link.is-disabled:hover,.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:hover,.el-button--success.is-text.is-disabled,.el-button--success.is-text.is-disabled:active,.el-button--success.is-text.is-disabled:focus,.el-button--success.is-text.is-disabled:hover{background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8);color:var(--el-color-success-light-5)}.el-button--warning{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-warning);--el-button-border-color:var(--el-color-warning);--el-button-outline-color:var(--el-color-warning-light-5);--el-button-active-color:var(--el-color-warning-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-warning-light-5);--el-button-hover-bg-color:var(--el-color-warning-light-3);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-bg-color:var(--el-color-warning-dark-2);--el-button-active-border-color:var(--el-color-warning-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-warning-light-5);--el-button-disabled-border-color:var(--el-color-warning-light-5)}.el-button--warning.is-link,.el-button--warning.is-plain,.el-button--warning.is-text{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-warning);--el-button-hover-border-color:var(--el-color-warning);--el-button-active-text-color:var(--el-color-white)}.el-button--warning.is-link.is-disabled,.el-button--warning.is-link.is-disabled:active,.el-button--warning.is-link.is-disabled:focus,.el-button--warning.is-link.is-disabled:hover,.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:hover,.el-button--warning.is-text.is-disabled,.el-button--warning.is-text.is-disabled:active,.el-button--warning.is-text.is-disabled:focus,.el-button--warning.is-text.is-disabled:hover{background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8);color:var(--el-color-warning-light-5)}.el-button--danger{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-danger);--el-button-border-color:var(--el-color-danger);--el-button-outline-color:var(--el-color-danger-light-5);--el-button-active-color:var(--el-color-danger-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-danger-light-5);--el-button-hover-bg-color:var(--el-color-danger-light-3);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-bg-color:var(--el-color-danger-dark-2);--el-button-active-border-color:var(--el-color-danger-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-danger-light-5);--el-button-disabled-border-color:var(--el-color-danger-light-5)}.el-button--danger.is-link,.el-button--danger.is-plain,.el-button--danger.is-text{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-danger);--el-button-hover-border-color:var(--el-color-danger);--el-button-active-text-color:var(--el-color-white)}.el-button--danger.is-link.is-disabled,.el-button--danger.is-link.is-disabled:active,.el-button--danger.is-link.is-disabled:focus,.el-button--danger.is-link.is-disabled:hover,.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:hover,.el-button--danger.is-text.is-disabled,.el-button--danger.is-text.is-disabled:active,.el-button--danger.is-text.is-disabled:focus,.el-button--danger.is-text.is-disabled:hover{background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8);color:var(--el-color-danger-light-5)}.el-button--info{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-info);--el-button-border-color:var(--el-color-info);--el-button-outline-color:var(--el-color-info-light-5);--el-button-active-color:var(--el-color-info-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-info-light-5);--el-button-hover-bg-color:var(--el-color-info-light-3);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-bg-color:var(--el-color-info-dark-2);--el-button-active-border-color:var(--el-color-info-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-info-light-5);--el-button-disabled-border-color:var(--el-color-info-light-5)}.el-button--info.is-link,.el-button--info.is-plain,.el-button--info.is-text{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-info);--el-button-hover-border-color:var(--el-color-info);--el-button-active-text-color:var(--el-color-white)}.el-button--info.is-link.is-disabled,.el-button--info.is-link.is-disabled:active,.el-button--info.is-link.is-disabled:focus,.el-button--info.is-link.is-disabled:hover,.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:hover,.el-button--info.is-text.is-disabled,.el-button--info.is-text.is-disabled:active,.el-button--info.is-text.is-disabled:focus,.el-button--info.is-text.is-disabled:hover{background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8);color:var(--el-color-info-light-5)}.el-button--large{--el-button-size:40px;height:var(--el-button-size)}.el-button--large [class*=el-icon]+span{margin-left:8px}.el-button--large{border-radius:var(--el-border-radius-base);font-size:var(--el-font-size-base);padding:12px 19px}.el-button--large.is-round{padding:12px 19px}.el-button--large.is-circle{padding:12px;width:var(--el-button-size)}.el-button--small{--el-button-size:24px;height:var(--el-button-size)}.el-button--small [class*=el-icon]+span{margin-left:4px}.el-button--small{border-radius:calc(var(--el-border-radius-base) - 1px);font-size:12px;padding:5px 11px}.el-button--small.is-round{padding:5px 11px}.el-button--small.is-circle{padding:5px;width:var(--el-button-size)}';
      importCSS(elButtonCss);
      const elDialogCss = ":root{--el-popup-modal-bg-color:var(--el-color-black);--el-popup-modal-opacity:.5}.v-modal-enter{animation:v-modal-in var(--el-transition-duration-fast) ease}.v-modal-leave{animation:v-modal-out var(--el-transition-duration-fast) ease forwards}@keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{background:var(--el-popup-modal-bg-color);height:100%;left:0;opacity:var(--el-popup-modal-opacity);position:fixed;top:0;width:100%}.el-popup-parent--hidden{overflow:hidden}.el-dialog{--el-dialog-width:50%;--el-dialog-margin-top:15vh;--el-dialog-bg-color:var(--el-bg-color);--el-dialog-box-shadow:var(--el-box-shadow);--el-dialog-title-font-size:var(--el-font-size-large);--el-dialog-content-font-size:14px;--el-dialog-font-line-height:var(--el-font-line-height-primary);--el-dialog-padding-primary:16px;--el-dialog-border-radius:var(--el-border-radius-base);background:var(--el-dialog-bg-color);border-radius:var(--el-dialog-border-radius);box-shadow:var(--el-dialog-box-shadow);box-sizing:border-box;margin:var(--el-dialog-margin-top,15vh) auto 50px;overflow-wrap:break-word;padding:var(--el-dialog-padding-primary);position:relative;width:var(--el-dialog-width,50%)}.el-dialog:focus{outline:none!important}.el-dialog.is-align-center{margin:auto}.el-dialog.is-fullscreen{--el-dialog-width:100%;--el-dialog-margin-top:0;border-radius:0;height:100%;margin-bottom:0;overflow:auto}.el-dialog__wrapper{inset:0;margin:0;overflow:auto;position:fixed}.el-dialog.is-draggable .el-dialog__header{cursor:move;-webkit-user-select:none;-moz-user-select:none;user-select:none}.el-dialog__header{padding-bottom:var(--el-dialog-padding-primary)}.el-dialog__header.show-close{padding-right:calc(var(--el-dialog-padding-primary) + var(--el-message-close-size, 16px))}.el-dialog__headerbtn{background:transparent;border:none;cursor:pointer;font-size:var(--el-message-close-size,16px);height:48px;outline:none;padding:0;position:absolute;right:0;top:0;width:48px}.el-dialog__headerbtn .el-dialog__close{color:var(--el-color-info);font-size:inherit}.el-dialog__headerbtn:focus .el-dialog__close,.el-dialog__headerbtn:hover .el-dialog__close{color:var(--el-color-primary)}.el-dialog__title{color:var(--el-text-color-primary);font-size:var(--el-dialog-title-font-size);line-height:var(--el-dialog-font-line-height)}.el-dialog__body{color:var(--el-text-color-regular);font-size:var(--el-dialog-content-font-size)}.el-dialog__footer{box-sizing:border-box;padding-top:var(--el-dialog-padding-primary);text-align:right}.el-dialog--center{text-align:center}.el-dialog--center .el-dialog__body{text-align:initial}.el-dialog--center .el-dialog__footer{text-align:inherit}.el-modal-dialog.is-penetrable{pointer-events:none}.el-modal-dialog.is-penetrable .el-dialog{pointer-events:auto}.el-overlay-dialog{inset:0;overflow:auto;position:fixed}.dialog-fade-enter-active{animation:modal-fade-in var(--el-transition-duration)}.dialog-fade-enter-active .el-overlay-dialog{animation:dialog-fade-in var(--el-transition-duration)}.dialog-fade-leave-active{animation:modal-fade-out var(--el-transition-duration)}.dialog-fade-leave-active .el-overlay-dialog{animation:dialog-fade-out var(--el-transition-duration)}@keyframes dialog-fade-in{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes dialog-fade-out{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20px,0)}}@keyframes modal-fade-in{0%{opacity:0}to{opacity:1}}@keyframes modal-fade-out{0%{opacity:1}to{opacity:0}}";
      importCSS(elDialogCss);
      const elOverlayCss = ".el-overlay{background-color:var(--el-overlay-color-lighter);height:100%;inset:0;overflow:auto;position:fixed;z-index:2000}.el-overlay .el-overlay-root{height:0}";
      importCSS(elOverlayCss);
      const elTableCss = '.el-table{--el-table-border-color:var(--el-border-color-lighter);--el-table-border:1px solid var(--el-table-border-color);--el-table-text-color:var(--el-text-color-regular);--el-table-header-text-color:var(--el-text-color-secondary);--el-table-row-hover-bg-color:var(--el-fill-color-light);--el-table-current-row-bg-color:var(--el-color-primary-light-9);--el-table-header-bg-color:var(--el-bg-color);--el-table-fixed-box-shadow:var(--el-box-shadow-light);--el-table-bg-color:var(--el-fill-color-blank);--el-table-tr-bg-color:var(--el-bg-color);--el-table-expanded-cell-bg-color:var(--el-fill-color-blank);--el-table-fixed-left-column:inset 10px 0 10px -10px rgba(0,0,0,.15);--el-table-fixed-right-column:inset -10px 0 10px -10px rgba(0,0,0,.15);--el-table-index:var(--el-index-normal);background-color:var(--el-table-bg-color);box-sizing:border-box;color:var(--el-table-text-color);font-size:var(--el-font-size-base);height:-moz-fit-content;height:fit-content;max-width:100%;overflow:hidden;position:relative;width:100%}.el-table__inner-wrapper{display:flex;flex-direction:column;height:100%;position:relative}.el-table__inner-wrapper:before{bottom:0;height:1px;left:0}.el-table tbody:focus-visible{outline:none}.el-table.has-footer.el-table--fluid-height tr:last-child td.el-table__cell,.el-table.has-footer.el-table--scrollable-y tr:last-child td.el-table__cell{border-bottom-color:transparent}.el-table__empty-block{align-items:center;display:flex;justify-content:center;left:0;min-height:60px;position:sticky;text-align:center;width:100%}.el-table__empty-text{color:var(--el-text-color-secondary);line-height:60px;width:50%}.el-table__expand-column .cell{padding:0;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.el-table__expand-icon{color:var(--el-text-color-regular);cursor:pointer;font-size:12px;height:20px;position:relative;transition:transform var(--el-transition-duration-fast) ease-in-out}.el-table__expand-icon--expanded{transform:rotate(90deg)}.el-table__expand-icon>.el-icon{font-size:12px}.el-table__expanded-cell{background-color:var(--el-table-expanded-cell-bg-color)}.el-table__expanded-cell[class*=cell]{padding:20px 50px}.el-table__expanded-cell:hover{background-color:transparent!important}.el-table__placeholder{display:inline-block;width:20px}.el-table__append-wrapper{overflow:hidden}.el-table--fit{border-bottom:0;border-right:0}.el-table--fit .el-table__cell.gutter{border-right-width:1px}.el-table--fit .el-table__inner-wrapper:before{width:100%}.el-table thead{color:var(--el-table-header-text-color)}.el-table thead th{font-weight:600}.el-table thead.is-group th.el-table__cell{background:var(--el-fill-color-light)}.el-table .el-table__cell{box-sizing:border-box;min-width:0;padding:8px 0;position:relative;text-align:left;text-overflow:ellipsis;vertical-align:middle;z-index:var(--el-table-index)}.el-table .el-table__cell.is-center{text-align:center}.el-table .el-table__cell.is-right{text-align:right}.el-table .el-table__cell.gutter{border-bottom-width:0;border-right-width:0;padding:0;width:15px}.el-table .el-table__cell.is-hidden>*{visibility:hidden}.el-table .cell{box-sizing:border-box;line-height:23px;overflow:hidden;overflow-wrap:break-word;padding:0 12px;text-overflow:ellipsis;white-space:normal}.el-table .cell.el-tooltip{min-width:50px;white-space:nowrap}.el-table--large{font-size:var(--el-font-size-base)}.el-table--large .el-table__cell{padding:12px 0}.el-table--large .cell{padding:0 16px}.el-table--default{font-size:var(--el-font-size-base)}.el-table--default .el-table__cell{padding:8px 0}.el-table--default .cell{padding:0 12px}.el-table--small{font-size:var(--el-font-size-extra-small)}.el-table--small .el-table__cell{padding:4px 0}.el-table--small .cell{padding:0 8px}.el-table tr{background-color:var(--el-table-tr-bg-color)}.el-table tr input[type=checkbox]{margin:0}.el-table td.el-table__cell,.el-table th.el-table__cell.is-leaf{border-bottom:var(--el-table-border)}.el-table th.el-table__cell.is-sortable{cursor:pointer}.el-table th.el-table__cell{background-color:var(--el-table-header-bg-color)}.el-table th.el-table__cell>.cell.highlight{color:var(--el-color-primary)}.el-table th.el-table__cell.required>div:before{background:#ff4d51;border-radius:50%;content:"";display:inline-block;height:8px;margin-right:5px;vertical-align:middle;width:8px}.el-table td.el-table__cell div{box-sizing:border-box}.el-table td.el-table__cell.gutter{width:0}.el-table--border .el-table__inner-wrapper:after,.el-table--border:after,.el-table--border:before,.el-table__inner-wrapper:before{background-color:var(--el-table-border-color);content:"";position:absolute;z-index:calc(var(--el-table-index) + 2)}.el-table--border .el-table__inner-wrapper:after{height:1px;left:0;top:0;width:100%;z-index:calc(var(--el-table-index) + 2)}.el-table--border:before{height:100%;left:0;top:-1px;width:1px}.el-table--border:after{height:100%;right:0;top:-1px;width:1px}.el-table--border .el-table__inner-wrapper{border-bottom:none;border-right:none}.el-table--border .el-table__footer-wrapper{flex-shrink:0;position:relative}.el-table--border .el-table__cell{border-right:var(--el-table-border)}.el-table--border th.el-table__cell.gutter:last-of-type{border-bottom:var(--el-table-border);border-bottom-width:1px}.el-table--border th.el-table__cell{border-bottom:var(--el-table-border)}.el-table--hidden{visibility:hidden}.el-table__body-wrapper,.el-table__footer-wrapper,.el-table__header-wrapper{width:100%}.el-table__body-wrapper tr td.el-table-fixed-column--left,.el-table__body-wrapper tr td.el-table-fixed-column--right,.el-table__body-wrapper tr th.el-table-fixed-column--left,.el-table__body-wrapper tr th.el-table-fixed-column--right,.el-table__footer-wrapper tr td.el-table-fixed-column--left,.el-table__footer-wrapper tr td.el-table-fixed-column--right,.el-table__footer-wrapper tr th.el-table-fixed-column--left,.el-table__footer-wrapper tr th.el-table-fixed-column--right,.el-table__header-wrapper tr td.el-table-fixed-column--left,.el-table__header-wrapper tr td.el-table-fixed-column--right,.el-table__header-wrapper tr th.el-table-fixed-column--left,.el-table__header-wrapper tr th.el-table-fixed-column--right{background:inherit;position:sticky!important;z-index:calc(var(--el-table-index) + 1)}.el-table__body-wrapper tr td.el-table-fixed-column--left.is-first-column:before,.el-table__body-wrapper tr td.el-table-fixed-column--left.is-last-column:before,.el-table__body-wrapper tr td.el-table-fixed-column--right.is-first-column:before,.el-table__body-wrapper tr td.el-table-fixed-column--right.is-last-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--left.is-first-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--left.is-last-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--right.is-first-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--right.is-last-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--left.is-first-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--left.is-last-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--right.is-first-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--right.is-last-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--left.is-first-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--left.is-last-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--right.is-first-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--right.is-last-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--left.is-first-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--left.is-last-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--right.is-first-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--right.is-last-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--left.is-first-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--left.is-last-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--right.is-first-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--right.is-last-column:before{bottom:-1px;box-shadow:none;content:"";overflow-x:hidden;overflow-y:hidden;pointer-events:none;position:absolute;top:0;touch-action:none;width:10px}.el-table__body-wrapper tr td.el-table-fixed-column--left.is-first-column:before,.el-table__body-wrapper tr td.el-table-fixed-column--right.is-first-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--left.is-first-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--right.is-first-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--left.is-first-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--right.is-first-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--left.is-first-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--right.is-first-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--left.is-first-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--right.is-first-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--left.is-first-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--right.is-first-column:before{left:-10px}.el-table__body-wrapper tr td.el-table-fixed-column--left.is-last-column:before,.el-table__body-wrapper tr td.el-table-fixed-column--right.is-last-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--left.is-last-column:before,.el-table__body-wrapper tr th.el-table-fixed-column--right.is-last-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--left.is-last-column:before,.el-table__footer-wrapper tr td.el-table-fixed-column--right.is-last-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--left.is-last-column:before,.el-table__footer-wrapper tr th.el-table-fixed-column--right.is-last-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--left.is-last-column:before,.el-table__header-wrapper tr td.el-table-fixed-column--right.is-last-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--left.is-last-column:before,.el-table__header-wrapper tr th.el-table-fixed-column--right.is-last-column:before{right:-10px}.el-table__body-wrapper tr td.el-table__fixed-right-patch,.el-table__body-wrapper tr th.el-table__fixed-right-patch,.el-table__footer-wrapper tr td.el-table__fixed-right-patch,.el-table__footer-wrapper tr th.el-table__fixed-right-patch,.el-table__header-wrapper tr td.el-table__fixed-right-patch,.el-table__header-wrapper tr th.el-table__fixed-right-patch{background:#fff;position:sticky!important;right:0;z-index:calc(var(--el-table-index) + 1)}.el-table__header-wrapper{flex-shrink:0}.el-table__header-wrapper tr th.el-table-fixed-column--left,.el-table__header-wrapper tr th.el-table-fixed-column--right{background-color:var(--el-table-header-bg-color)}.el-table__body,.el-table__footer,.el-table__header{border-collapse:separate;table-layout:fixed}.el-table__header-wrapper{overflow:hidden}.el-table__header-wrapper tbody td.el-table__cell{background-color:var(--el-table-row-hover-bg-color);color:var(--el-table-text-color)}.el-table__footer-wrapper{flex-shrink:0;overflow:hidden}.el-table__footer-wrapper tfoot td.el-table__cell{background-color:var(--el-table-row-hover-bg-color);color:var(--el-table-text-color)}.el-table__body-wrapper .el-table-column--selection>.cell,.el-table__header-wrapper .el-table-column--selection>.cell{align-items:center;display:inline-flex;height:23px}.el-table__body-wrapper .el-table-column--selection .el-checkbox,.el-table__header-wrapper .el-table-column--selection .el-checkbox{height:unset}.el-table.is-scrolling-left .el-table-fixed-column--right.is-first-column:before{box-shadow:var(--el-table-fixed-right-column)}.el-table.is-scrolling-left.el-table--border .el-table-fixed-column--left.is-last-column.el-table__cell{border-right:var(--el-table-border)}.el-table.is-scrolling-left th.el-table-fixed-column--left{background-color:var(--el-table-header-bg-color)}.el-table.is-scrolling-right .el-table-fixed-column--left.is-last-column:before{box-shadow:var(--el-table-fixed-left-column)}.el-table.is-scrolling-right .el-table-fixed-column--left.is-last-column.el-table__cell{border-right:none}.el-table.is-scrolling-right th.el-table-fixed-column--right{background-color:var(--el-table-header-bg-color)}.el-table.is-scrolling-middle .el-table-fixed-column--left.is-last-column.el-table__cell{border-right:none}.el-table.is-scrolling-middle .el-table-fixed-column--right.is-first-column:before{box-shadow:var(--el-table-fixed-right-column)}.el-table.is-scrolling-middle .el-table-fixed-column--left.is-last-column:before{box-shadow:var(--el-table-fixed-left-column)}.el-table.is-scrolling-none .el-table-fixed-column--left.is-first-column:before,.el-table.is-scrolling-none .el-table-fixed-column--left.is-last-column:before,.el-table.is-scrolling-none .el-table-fixed-column--right.is-first-column:before,.el-table.is-scrolling-none .el-table-fixed-column--right.is-last-column:before{box-shadow:none}.el-table.is-scrolling-none th.el-table-fixed-column--left,.el-table.is-scrolling-none th.el-table-fixed-column--right{background-color:var(--el-table-header-bg-color)}.el-table__body-wrapper{flex:1;overflow:hidden;position:relative}.el-table__body-wrapper .el-scrollbar__bar{z-index:calc(var(--el-table-index) + 2)}.el-table .caret-wrapper{align-items:center;cursor:pointer;display:inline-flex;flex-direction:column;height:14px;overflow:initial;position:relative;vertical-align:middle;width:24px}.el-table .sort-caret{border:5px solid transparent;height:0;left:7px;position:absolute;width:0}.el-table .sort-caret.ascending{border-bottom-color:var(--el-text-color-placeholder);top:-5px}.el-table .sort-caret.descending{border-top-color:var(--el-text-color-placeholder);bottom:-3px}.el-table .ascending .sort-caret.ascending{border-bottom-color:var(--el-color-primary)}.el-table .descending .sort-caret.descending{border-top-color:var(--el-color-primary)}.el-table .hidden-columns{position:absolute;visibility:hidden;z-index:-1}.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell{background:var(--el-fill-color-lighter)}.el-table--striped .el-table__body tr.el-table__row--striped.current-row td.el-table__cell{background-color:var(--el-table-current-row-bg-color)}.el-table__body tr.hover-row.current-row>td.el-table__cell,.el-table__body tr.hover-row.el-table__row--striped.current-row>td.el-table__cell,.el-table__body tr.hover-row.el-table__row--striped>td.el-table__cell,.el-table__body tr.hover-row>td.el-table__cell{background-color:var(--el-table-row-hover-bg-color)}.el-table__body tr>td.hover-cell{background-color:var(--el-table-row-hover-bg-color)}.el-table__body tr.current-row>td.el-table__cell{background-color:var(--el-table-current-row-bg-color)}.el-table.el-table--scrollable-y .el-table__body-header{position:sticky;top:0;z-index:calc(var(--el-table-index) + 2)}.el-table.el-table--scrollable-y .el-table__body-footer{bottom:0;position:sticky;z-index:calc(var(--el-table-index) + 2)}.el-table__column-resize-proxy{border-left:var(--el-table-border);bottom:0;left:200px;position:absolute;top:0;width:0;z-index:calc(var(--el-table-index) + 9)}.el-table__column-filter-trigger{cursor:pointer;display:inline-block}.el-table__column-filter-trigger i{color:var(--el-color-info);font-size:14px;vertical-align:middle}.el-table__border-left-patch{height:100%;top:0;width:1px}.el-table__border-bottom-patch,.el-table__border-left-patch{background-color:var(--el-table-border-color);left:0;position:absolute;z-index:calc(var(--el-table-index) + 2)}.el-table__border-bottom-patch{height:1px}.el-table__border-right-patch{background-color:var(--el-table-border-color);height:100%;position:absolute;top:0;width:1px;z-index:calc(var(--el-table-index) + 2)}.el-table--enable-row-transition .el-table__body td.el-table__cell{transition:background-color .25s ease}.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell{background-color:var(--el-table-row-hover-bg-color)}.el-table [class*=el-table__row--level] .el-table__expand-icon{display:inline-block;height:12px;line-height:12px;margin-right:8px;text-align:center;width:12px}.el-table .el-table.el-table--border .el-table__cell{border-right:var(--el-table-border)}.el-table:not(.el-table--border) .el-table__cell{border-right:none}.el-table:not(.el-table--border)>.el-table__inner-wrapper:after{content:none}';
      importCSS(elTableCss);
      const elCheckboxCss = '.el-checkbox{--el-checkbox-font-size:14px;--el-checkbox-font-weight:var(--el-font-weight-primary);--el-checkbox-text-color:var(--el-text-color-regular);--el-checkbox-input-height:14px;--el-checkbox-input-width:14px;--el-checkbox-border-radius:var(--el-border-radius-small);--el-checkbox-bg-color:var(--el-fill-color-blank);--el-checkbox-input-border:var(--el-border);--el-checkbox-disabled-border-color:var(--el-border-color);--el-checkbox-disabled-input-fill:var(--el-fill-color-light);--el-checkbox-disabled-icon-color:var(--el-text-color-placeholder);--el-checkbox-disabled-checked-input-fill:var(--el-border-color-extra-light);--el-checkbox-disabled-checked-input-border-color:var(--el-border-color);--el-checkbox-disabled-checked-icon-color:var(--el-text-color-placeholder);--el-checkbox-checked-text-color:var(--el-color-primary);--el-checkbox-checked-input-border-color:var(--el-color-primary);--el-checkbox-checked-bg-color:var(--el-color-primary);--el-checkbox-checked-icon-color:var(--el-color-white);--el-checkbox-input-border-color-hover:var(--el-color-primary);align-items:center;color:var(--el-checkbox-text-color);cursor:pointer;display:inline-flex;font-size:var(--el-font-size-base);font-weight:var(--el-checkbox-font-weight);height:var(--el-checkbox-height,32px);margin-right:30px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.el-checkbox.is-disabled{cursor:not-allowed}.el-checkbox.is-bordered{border:var(--el-border);border-radius:var(--el-border-radius-base);box-sizing:border-box;padding:0 15px 0 9px}.el-checkbox.is-bordered.is-checked{border-color:var(--el-color-primary)}.el-checkbox.is-bordered.is-disabled{border-color:var(--el-border-color-lighter)}.el-checkbox.is-bordered.el-checkbox--large{border-radius:var(--el-border-radius-base);padding:0 19px 0 11px}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__label{font-size:var(--el-font-size-base)}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__inner{height:14px;width:14px}.el-checkbox.is-bordered.el-checkbox--small{border-radius:calc(var(--el-border-radius-base) - 1px);padding:0 11px 0 7px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox input:focus-visible+.el-checkbox__inner{border-radius:var(--el-checkbox-border-radius);outline:2px solid var(--el-checkbox-input-border-color-hover);outline-offset:1px}.el-checkbox__input{cursor:pointer;display:inline-flex;outline:none;position:relative;white-space:nowrap}.el-checkbox__input.is-disabled .el-checkbox__inner{background-color:var(--el-checkbox-disabled-input-fill);border-color:var(--el-checkbox-disabled-border-color);cursor:not-allowed}.el-checkbox__input.is-disabled .el-checkbox__inner:after{border-color:var(--el-checkbox-disabled-icon-color);cursor:not-allowed}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner:after{border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner:before{background-color:var(--el-checkbox-disabled-checked-icon-color);border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled+span.el-checkbox__label{color:var(--el-disabled-text-color);cursor:not-allowed}.el-checkbox__input.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-checked .el-checkbox__inner:after{border-color:var(--el-checkbox-checked-icon-color);transform:translate(-45%,-60%) rotate(45deg) scaleY(1)}.el-checkbox__input.is-checked+.el-checkbox__label{color:var(--el-checkbox-checked-text-color)}.el-checkbox__input.is-focus:not(.is-checked) .el-checkbox__original:not(:focus-visible){border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:before{background-color:var(--el-checkbox-checked-icon-color);content:"";display:block;height:2px;left:0;position:absolute;right:0;top:5px;transform:scale(.5)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:after{display:none}.el-checkbox__inner{background-color:var(--el-checkbox-bg-color);border:var(--el-checkbox-input-border);border-radius:var(--el-checkbox-border-radius);box-sizing:border-box;display:inline-block;height:var(--el-checkbox-input-height);position:relative;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46),outline .25s cubic-bezier(.71,-.46,.29,1.46);width:var(--el-checkbox-input-width);z-index:var(--el-index-normal)}.el-checkbox__inner:hover{border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__inner:after{border:1px solid transparent;border-left:0;border-top:0;box-sizing:content-box;content:"";height:7px;left:50%;position:absolute;top:50%;transform:translate(-45%,-60%) rotate(45deg) scaleY(0);transform-origin:center;transition:transform .15s ease-in .05s;width:3px}.el-checkbox__original{height:0;margin:0;opacity:0;outline:none;position:absolute;width:0;z-index:-1}.el-checkbox__label{display:inline-block;font-size:var(--el-checkbox-font-size);line-height:1;padding-left:8px}.el-checkbox.el-checkbox--large{height:40px}.el-checkbox.el-checkbox--large .el-checkbox__label{font-size:14px}.el-checkbox.el-checkbox--large .el-checkbox__inner{height:14px;width:14px}.el-checkbox.el-checkbox--small{height:24px}.el-checkbox.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.el-checkbox--small .el-checkbox__input.is-indeterminate .el-checkbox__inner:before{top:4px}.el-checkbox.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox:last-of-type{margin-right:0}';
      importCSS(elCheckboxCss);
      const elPopperCss = '.el-popper{--el-popper-border-radius:var(--el-popover-border-radius,4px);border-radius:var(--el-popper-border-radius);font-size:12px;line-height:20px;min-width:10px;overflow-wrap:break-word;padding:5px 11px;position:absolute;visibility:visible;word-break:normal;z-index:2000}.el-popper.is-dark{background:var(--el-text-color-primary);border:1px solid var(--el-text-color-primary);color:var(--el-bg-color)}.el-popper.is-dark>.el-popper__arrow:before{background:var(--el-text-color-primary);border:1px solid var(--el-text-color-primary);right:0}.el-popper.is-light{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color-light)}.el-popper.is-light>.el-popper__arrow:before{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color-light);right:0}.el-popper.is-pure{padding:0}.el-popper__arrow{height:10px;position:absolute;width:10px;z-index:-1}.el-popper__arrow:before{background:var(--el-text-color-primary);box-sizing:border-box;content:" ";height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:-1}.el-popper[data-popper-placement^=top]>.el-popper__arrow{bottom:-5px}.el-popper[data-popper-placement^=top]>.el-popper__arrow:before{border-bottom-right-radius:2px}.el-popper[data-popper-placement^=bottom]>.el-popper__arrow{top:-5px}.el-popper[data-popper-placement^=bottom]>.el-popper__arrow:before{border-top-left-radius:2px}.el-popper[data-popper-placement^=left]>.el-popper__arrow{right:-5px}.el-popper[data-popper-placement^=left]>.el-popper__arrow:before{border-top-right-radius:2px}.el-popper[data-popper-placement^=right]>.el-popper__arrow{left:-5px}.el-popper[data-popper-placement^=right]>.el-popper__arrow:before{border-bottom-left-radius:2px}.el-popper[data-popper-placement^=top]>.el-popper__arrow:before{border-left-color:transparent!important;border-top-color:transparent!important}.el-popper[data-popper-placement^=bottom]>.el-popper__arrow:before{border-bottom-color:transparent!important;border-right-color:transparent!important}.el-popper[data-popper-placement^=left]>.el-popper__arrow:before{border-bottom-color:transparent!important;border-left-color:transparent!important}.el-popper[data-popper-placement^=right]>.el-popper__arrow:before{border-right-color:transparent!important;border-top-color:transparent!important}';
      importCSS(elPopperCss);
      const elScrollbarCss = ".el-scrollbar{--el-scrollbar-opacity:.3;--el-scrollbar-bg-color:var(--el-text-color-secondary);--el-scrollbar-hover-opacity:.5;--el-scrollbar-hover-bg-color:var(--el-text-color-secondary);height:100%;overflow:hidden;position:relative}.el-scrollbar__wrap{height:100%;overflow:auto}.el-scrollbar__wrap--hidden-default{scrollbar-width:none}.el-scrollbar__wrap--hidden-default::-webkit-scrollbar{display:none}.el-scrollbar__thumb{background-color:var(--el-scrollbar-bg-color,var(--el-text-color-secondary));border-radius:inherit;cursor:pointer;display:block;height:0;opacity:var(--el-scrollbar-opacity,.3);position:relative;transition:var(--el-transition-duration) background-color;width:0}.el-scrollbar__thumb:hover{background-color:var(--el-scrollbar-hover-bg-color,var(--el-text-color-secondary));opacity:var(--el-scrollbar-hover-opacity,.5)}.el-scrollbar__bar{border-radius:4px;bottom:2px;position:absolute;right:2px;z-index:1}.el-scrollbar__bar.is-vertical{top:2px;width:6px}.el-scrollbar__bar.is-vertical>div{width:100%}.el-scrollbar__bar.is-horizontal{height:6px;left:2px}.el-scrollbar__bar.is-horizontal>div{height:100%}.el-scrollbar-fade-enter-active{transition:opacity .34s ease-out}.el-scrollbar-fade-leave-active{transition:opacity .12s ease-out}.el-scrollbar-fade-enter-from,.el-scrollbar-fade-leave-active{opacity:0}";
      importCSS(elScrollbarCss);
      const elTableColumnCss = ".el-table-column--selection .cell{padding-left:14px;padding-right:14px}.el-table-filter{background-color:#fff;border:1px solid var(--el-border-color-lighter);border-radius:2px;box-shadow:var(--el-box-shadow-light);box-sizing:border-box}.el-table-filter__list{list-style:none;margin:0;min-width:100px;padding:5px 0}.el-table-filter__list-item{cursor:pointer;font-size:var(--el-font-size-base);line-height:36px;padding:0 10px}.el-table-filter__list-item:hover{background-color:var(--el-color-primary-light-9);color:var(--el-color-primary)}.el-table-filter__list-item.is-active{background-color:var(--el-color-primary);color:#fff}.el-table-filter__content{min-width:100px}.el-table-filter__bottom{border-top:1px solid var(--el-border-color-lighter);padding:8px}.el-table-filter__bottom button{background:transparent;border:none;color:var(--el-text-color-regular);cursor:pointer;font-size:var(--el-font-size-small);padding:0 3px}.el-table-filter__bottom button:hover{color:var(--el-color-primary)}.el-table-filter__bottom button:focus{outline:none}.el-table-filter__bottom button.is-disabled{color:var(--el-disabled-text-color);cursor:not-allowed}.el-table-filter__wrap{max-height:280px}.el-table-filter__checkbox-group{padding:10px}.el-table-filter__checkbox-group label.el-checkbox{align-items:center;display:flex;height:unset;margin-bottom:12px;margin-left:5px;margin-right:5px}.el-table-filter__checkbox-group .el-checkbox:last-child{margin-bottom:0}";
      importCSS(elTableColumnCss);
      const elTagCss = ".el-tag{--el-tag-font-size:12px;--el-tag-border-radius:4px;--el-tag-border-radius-rounded:9999px;align-items:center;background-color:var(--el-tag-bg-color);border-color:var(--el-tag-border-color);border-radius:var(--el-tag-border-radius);border-style:solid;border-width:1px;box-sizing:border-box;color:var(--el-tag-text-color);display:inline-flex;font-size:var(--el-tag-font-size);height:24px;justify-content:center;line-height:1;padding:0 9px;vertical-align:middle;white-space:nowrap;--el-icon-size:14px}.el-tag,.el-tag.el-tag--primary{--el-tag-bg-color:var(--el-color-primary-light-9);--el-tag-border-color:var(--el-color-primary-light-8);--el-tag-hover-color:var(--el-color-primary)}.el-tag.el-tag--success{--el-tag-bg-color:var(--el-color-success-light-9);--el-tag-border-color:var(--el-color-success-light-8);--el-tag-hover-color:var(--el-color-success)}.el-tag.el-tag--warning{--el-tag-bg-color:var(--el-color-warning-light-9);--el-tag-border-color:var(--el-color-warning-light-8);--el-tag-hover-color:var(--el-color-warning)}.el-tag.el-tag--danger{--el-tag-bg-color:var(--el-color-danger-light-9);--el-tag-border-color:var(--el-color-danger-light-8);--el-tag-hover-color:var(--el-color-danger)}.el-tag.el-tag--error{--el-tag-bg-color:var(--el-color-error-light-9);--el-tag-border-color:var(--el-color-error-light-8);--el-tag-hover-color:var(--el-color-error)}.el-tag.el-tag--info{--el-tag-bg-color:var(--el-color-info-light-9);--el-tag-border-color:var(--el-color-info-light-8);--el-tag-hover-color:var(--el-color-info)}.el-tag.is-hit{border-color:var(--el-color-primary)}.el-tag.is-round{border-radius:var(--el-tag-border-radius-rounded)}.el-tag .el-tag__close{color:var(--el-tag-text-color);flex-shrink:0}.el-tag .el-tag__close:hover{background-color:var(--el-tag-hover-color);color:var(--el-color-white)}.el-tag.el-tag--primary{--el-tag-text-color:var(--el-color-primary)}.el-tag.el-tag--success{--el-tag-text-color:var(--el-color-success)}.el-tag.el-tag--warning{--el-tag-text-color:var(--el-color-warning)}.el-tag.el-tag--danger{--el-tag-text-color:var(--el-color-danger)}.el-tag.el-tag--error{--el-tag-text-color:var(--el-color-error)}.el-tag.el-tag--info{--el-tag-text-color:var(--el-color-info)}.el-tag .el-icon{border-radius:50%;cursor:pointer;font-size:calc(var(--el-icon-size) - 2px);height:var(--el-icon-size);width:var(--el-icon-size)}.el-tag .el-tag__close{margin-left:6px}.el-tag--dark{--el-tag-text-color:var(--el-color-white)}.el-tag--dark,.el-tag--dark.el-tag--primary{--el-tag-bg-color:var(--el-color-primary);--el-tag-border-color:var(--el-color-primary);--el-tag-hover-color:var(--el-color-primary-light-3)}.el-tag--dark.el-tag--success{--el-tag-bg-color:var(--el-color-success);--el-tag-border-color:var(--el-color-success);--el-tag-hover-color:var(--el-color-success-light-3)}.el-tag--dark.el-tag--warning{--el-tag-bg-color:var(--el-color-warning);--el-tag-border-color:var(--el-color-warning);--el-tag-hover-color:var(--el-color-warning-light-3)}.el-tag--dark.el-tag--danger{--el-tag-bg-color:var(--el-color-danger);--el-tag-border-color:var(--el-color-danger);--el-tag-hover-color:var(--el-color-danger-light-3)}.el-tag--dark.el-tag--error{--el-tag-bg-color:var(--el-color-error);--el-tag-border-color:var(--el-color-error);--el-tag-hover-color:var(--el-color-error-light-3)}.el-tag--dark.el-tag--info{--el-tag-bg-color:var(--el-color-info);--el-tag-border-color:var(--el-color-info);--el-tag-hover-color:var(--el-color-info-light-3)}.el-tag--dark.el-tag--danger,.el-tag--dark.el-tag--error,.el-tag--dark.el-tag--info,.el-tag--dark.el-tag--primary,.el-tag--dark.el-tag--success,.el-tag--dark.el-tag--warning{--el-tag-text-color:var(--el-color-white)}.el-tag--plain,.el-tag--plain.el-tag--primary{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-primary-light-5);--el-tag-hover-color:var(--el-color-primary)}.el-tag--plain.el-tag--success{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-success-light-5);--el-tag-hover-color:var(--el-color-success)}.el-tag--plain.el-tag--warning{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-warning-light-5);--el-tag-hover-color:var(--el-color-warning)}.el-tag--plain.el-tag--danger{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-danger-light-5);--el-tag-hover-color:var(--el-color-danger)}.el-tag--plain.el-tag--error{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-error-light-5);--el-tag-hover-color:var(--el-color-error)}.el-tag--plain.el-tag--info{--el-tag-bg-color:var(--el-fill-color-blank);--el-tag-border-color:var(--el-color-info-light-5);--el-tag-hover-color:var(--el-color-info)}.el-tag.is-closable{padding-right:5px}.el-tag--large{height:32px;padding:0 11px;--el-icon-size:16px}.el-tag--large .el-tag__close{margin-left:8px}.el-tag--large.is-closable{padding-right:7px}.el-tag--small{height:20px;padding:0 7px;--el-icon-size:12px}.el-tag--small .el-tag__close{margin-left:4px}.el-tag--small.is-closable{padding-right:3px}.el-tag--small .el-icon-close{transform:scale(.8)}.el-tag.el-tag--primary.is-hit{border-color:var(--el-color-primary)}.el-tag.el-tag--success.is-hit{border-color:var(--el-color-success)}.el-tag.el-tag--warning.is-hit{border-color:var(--el-color-warning)}.el-tag.el-tag--danger.is-hit{border-color:var(--el-color-danger)}.el-tag.el-tag--error.is-hit{border-color:var(--el-color-error)}.el-tag.el-tag--info.is-hit{border-color:var(--el-color-info)}";
      importCSS(elTagCss);
      const elFormCss = '.el-form{--el-form-label-font-size:var(--el-font-size-base);--el-form-inline-content-width:220px}.el-form--inline .el-form-item{display:inline-flex;margin-right:32px;vertical-align:middle}.el-form--inline.el-form--label-top{display:flex;flex-wrap:wrap}.el-form--inline.el-form--label-top .el-form-item{display:block}.el-form-item{display:flex;--font-size:14px;margin-bottom:18px}.el-form-item .el-form-item{margin-bottom:0}.el-form-item .el-input__validateIcon{display:none}.el-form-item--large{--font-size:14px;--el-form-label-font-size:var(--font-size);margin-bottom:22px}.el-form-item--large .el-form-item__label{height:40px;line-height:40px}.el-form-item--large .el-form-item__content{line-height:40px}.el-form-item--large .el-form-item__error{padding-top:4px}.el-form-item--default{--font-size:14px;--el-form-label-font-size:var(--font-size);margin-bottom:18px}.el-form-item--default .el-form-item__label{height:32px;line-height:32px}.el-form-item--default .el-form-item__content{line-height:32px}.el-form-item--default .el-form-item__error{padding-top:2px}.el-form-item--small{--font-size:12px;--el-form-label-font-size:var(--font-size);margin-bottom:18px}.el-form-item--small .el-form-item__label{height:24px;line-height:24px}.el-form-item--small .el-form-item__content{line-height:24px}.el-form-item--small .el-form-item__error{padding-top:2px}.el-form-item--label-left .el-form-item__label{justify-content:flex-start;text-align:left}.el-form-item--label-right .el-form-item__label{justify-content:flex-end;text-align:right}.el-form-item--label-top{display:block}.el-form-item--label-top .el-form-item__label{display:block;height:auto;line-height:22px;margin-bottom:8px;text-align:left;width:-moz-fit-content;width:fit-content}.el-form-item__label-wrap{display:flex}.el-form-item__label{align-items:flex-start;box-sizing:border-box;color:var(--el-text-color-regular);display:inline-flex;flex:0 0 auto;font-size:var(--el-form-label-font-size);height:32px;line-height:32px;padding:0 12px 0 0}.el-form-item__content{align-items:center;display:flex;flex:1;flex-wrap:wrap;font-size:var(--font-size);line-height:32px;min-width:0;position:relative}.el-form-item__content .el-input-group{vertical-align:top}.el-form-item__error{color:var(--el-color-danger);font-size:12px;left:0;line-height:1;padding-top:2px;position:absolute;top:100%}.el-form-item__error--inline{display:inline-block;left:auto;margin-left:10px;position:relative;top:auto}.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label-wrap>.el-form-item__label:before,.el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label:before{color:var(--el-color-danger);content:"*";margin-right:4px}.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label-wrap>.el-form-item__label:after,.el-form-item.is-required:not(.is-no-asterisk).asterisk-right>.el-form-item__label:after{color:var(--el-color-danger);content:"*";margin-left:4px}.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper.is-focus,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-input__wrapper,.el-form-item.is-error .el-form-item__content .el-input__wrapper.is-focus,.el-form-item.is-error .el-form-item__content .el-input__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-input__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-select__wrapper,.el-form-item.is-error .el-form-item__content .el-select__wrapper.is-focus,.el-form-item.is-error .el-form-item__content .el-select__wrapper:focus,.el-form-item.is-error .el-form-item__content .el-select__wrapper:hover,.el-form-item.is-error .el-form-item__content .el-textarea__inner,.el-form-item.is-error .el-form-item__content .el-textarea__inner.is-focus,.el-form-item.is-error .el-form-item__content .el-textarea__inner:focus,.el-form-item.is-error .el-form-item__content .el-textarea__inner:hover{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-form-item.is-error .el-form-item__content .el-input-group__append .el-input__wrapper,.el-form-item.is-error .el-form-item__content .el-input-group__prepend .el-input__wrapper{box-shadow:inset 0 0 0 1px transparent}.el-form-item.is-error .el-form-item__content .el-input-group__append .el-input__validateIcon,.el-form-item.is-error .el-form-item__content .el-input-group__prepend .el-input__validateIcon{display:none}.el-form-item.is-error .el-form-item__content .el-input__validateIcon{color:var(--el-color-danger)}.el-form-item--feedback .el-input__validateIcon{display:inline-flex}';
      importCSS(elFormCss);
      const elInputCss = ".el-textarea{--el-input-text-color:var(--el-text-color-regular);--el-input-border:var(--el-border);--el-input-hover-border:var(--el-border-color-hover);--el-input-focus-border:var(--el-color-primary);--el-input-transparent-border:0 0 0 1px transparent inset;--el-input-border-color:var(--el-border-color);--el-input-border-radius:var(--el-border-radius-base);--el-input-bg-color:var(--el-fill-color-blank);--el-input-icon-color:var(--el-text-color-placeholder);--el-input-placeholder-color:var(--el-text-color-placeholder);--el-input-hover-border-color:var(--el-border-color-hover);--el-input-clear-hover-color:var(--el-text-color-secondary);--el-input-focus-border-color:var(--el-color-primary);--el-input-width:100%;display:inline-block;font-size:var(--el-font-size-base);position:relative;vertical-align:bottom;width:100%}.el-textarea__inner{-webkit-appearance:none;background-color:var(--el-input-bg-color,var(--el-fill-color-blank));background-image:none;border:none;border-radius:var(--el-input-border-radius,var(--el-border-radius-base));box-shadow:0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;box-sizing:border-box;color:var(--el-input-text-color,var(--el-text-color-regular));display:block;font-family:inherit;font-size:inherit;line-height:1.5;padding:5px 11px;position:relative;resize:vertical;transition:var(--el-transition-box-shadow);width:100%}.el-textarea__inner::-moz-placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-textarea__inner::placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-textarea__inner:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-textarea__inner:focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset;outline:none}.el-textarea .el-input__count{background:var(--el-fill-color-blank);bottom:5px;color:var(--el-color-info);font-size:12px;line-height:14px;position:absolute;right:10px}.el-textarea .el-input__count.is-outside{background:transparent;bottom:unset;line-height:1;padding-top:2px;position:absolute;right:0;top:100%}.el-textarea.is-disabled .el-textarea__inner{background-color:var(--el-disabled-bg-color);box-shadow:0 0 0 1px var(--el-disabled-border-color) inset;color:var(--el-disabled-text-color);cursor:not-allowed}.el-textarea.is-disabled .el-textarea__inner::-moz-placeholder{color:var(--el-text-color-placeholder)}.el-textarea.is-disabled .el-textarea__inner::placeholder{color:var(--el-text-color-placeholder)}.el-textarea.is-exceed .el-textarea__inner{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-textarea.is-exceed .el-input__count{color:var(--el-color-danger)}.el-input{--el-input-text-color:var(--el-text-color-regular);--el-input-border:var(--el-border);--el-input-hover-border:var(--el-border-color-hover);--el-input-focus-border:var(--el-color-primary);--el-input-transparent-border:0 0 0 1px transparent inset;--el-input-border-color:var(--el-border-color);--el-input-border-radius:var(--el-border-radius-base);--el-input-bg-color:var(--el-fill-color-blank);--el-input-icon-color:var(--el-text-color-placeholder);--el-input-placeholder-color:var(--el-text-color-placeholder);--el-input-hover-border-color:var(--el-border-color-hover);--el-input-clear-hover-color:var(--el-text-color-secondary);--el-input-focus-border-color:var(--el-color-primary);--el-input-width:100%;--el-input-height:var(--el-component-size);box-sizing:border-box;display:inline-flex;font-size:var(--el-font-size-base);line-height:var(--el-input-height);position:relative;vertical-align:middle;width:var(--el-input-width)}.el-input::-webkit-scrollbar{width:6px;z-index:11}.el-input::-webkit-scrollbar:horizontal{height:6px}.el-input::-webkit-scrollbar-thumb{background:var(--el-text-color-disabled);border-radius:5px;width:6px}.el-input::-webkit-scrollbar-corner,.el-input::-webkit-scrollbar-track{background:var(--el-fill-color-blank)}.el-input::-webkit-scrollbar-track-piece{background:var(--el-fill-color-blank);width:6px}.el-input .el-input__clear,.el-input .el-input__password{color:var(--el-input-icon-color);cursor:pointer;font-size:14px}.el-input .el-input__clear:hover,.el-input .el-input__password:hover{color:var(--el-input-clear-hover-color)}.el-input .el-input__count{align-items:center;color:var(--el-color-info);display:inline-flex;font-size:12px;height:100%}.el-input .el-input__count .el-input__count-inner{background:var(--el-fill-color-blank);display:inline-block;line-height:normal;padding-left:8px}.el-input .el-input__count.is-outside{height:unset;padding-top:2px;position:absolute;right:0;top:100%}.el-input .el-input__count.is-outside .el-input__count-inner{background:transparent;line-height:1;padding-left:0}.el-input__wrapper{align-items:center;background-color:var(--el-input-bg-color,var(--el-fill-color-blank));background-image:none;border-radius:var(--el-input-border-radius,var(--el-border-radius-base));box-shadow:0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;cursor:text;display:inline-flex;flex-grow:1;justify-content:center;padding:1px 11px;transform:translateZ(0);transition:var(--el-transition-box-shadow)}.el-input__wrapper:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.el-input__wrapper.is-focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset}.el-input{--el-input-inner-height:calc(var(--el-input-height, 32px) - 2px)}.el-input__inner{-webkit-appearance:none;background:none;border:none;box-sizing:border-box;color:var(--el-input-text-color,var(--el-text-color-regular));flex-grow:1;font-size:inherit;height:var(--el-input-inner-height);line-height:var(--el-input-inner-height);outline:none;padding:0;width:100%}.el-input__inner:focus{outline:none}.el-input__inner::-moz-placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-input__inner::placeholder{color:var(--el-input-placeholder-color,var(--el-text-color-placeholder))}.el-input__inner[type=password]::-ms-reveal{display:none}.el-input__inner[type=number]{line-height:1}.el-input__prefix{color:var(--el-input-icon-color,var(--el-text-color-placeholder));display:inline-flex;flex-shrink:0;flex-wrap:nowrap;height:100%;line-height:var(--el-input-inner-height);pointer-events:none;text-align:center;transition:all var(--el-transition-duration);white-space:nowrap}.el-input__prefix-inner{align-items:center;display:inline-flex;justify-content:center;pointer-events:all}.el-input__prefix-inner>:last-child{margin-right:8px}.el-input__prefix-inner>:first-child,.el-input__prefix-inner>:first-child.el-input__icon{margin-left:0}.el-input__suffix{color:var(--el-input-icon-color,var(--el-text-color-placeholder));display:inline-flex;flex-shrink:0;flex-wrap:nowrap;height:100%;line-height:var(--el-input-inner-height);pointer-events:none;text-align:center;transition:all var(--el-transition-duration);white-space:nowrap}.el-input__suffix-inner{align-items:center;display:inline-flex;justify-content:center;pointer-events:all}.el-input__suffix-inner>:first-child{margin-left:8px}.el-input .el-input__icon{align-items:center;display:flex;height:inherit;justify-content:center;line-height:inherit;margin-left:8px;transition:all var(--el-transition-duration)}.el-input__validateIcon{pointer-events:none}.el-input.is-active .el-input__wrapper{box-shadow:0 0 0 1px var(--el-input-focus-color, ) inset}.el-input.is-disabled{cursor:not-allowed}.el-input.is-disabled .el-input__wrapper{background-color:var(--el-disabled-bg-color);box-shadow:0 0 0 1px var(--el-disabled-border-color) inset;cursor:not-allowed}.el-input.is-disabled .el-input__inner{color:var(--el-disabled-text-color);-webkit-text-fill-color:var(--el-disabled-text-color);cursor:not-allowed}.el-input.is-disabled .el-input__inner::-moz-placeholder{color:var(--el-text-color-placeholder)}.el-input.is-disabled .el-input__inner::placeholder{color:var(--el-text-color-placeholder)}.el-input.is-disabled .el-input__icon{cursor:not-allowed}.el-input.is-disabled .el-input__prefix-inner,.el-input.is-disabled .el-input__suffix-inner{pointer-events:none}.el-input.is-exceed .el-input__wrapper{box-shadow:0 0 0 1px var(--el-color-danger) inset}.el-input.is-exceed .el-input__suffix .el-input__count{color:var(--el-color-danger)}.el-input--large{--el-input-height:var(--el-component-size-large);font-size:14px}.el-input--large .el-input__wrapper{padding:1px 15px}.el-input--large{--el-input-inner-height:calc(var(--el-input-height, 40px) - 2px)}.el-input--small{--el-input-height:var(--el-component-size-small);font-size:12px}.el-input--small .el-input__wrapper{padding:1px 7px}.el-input--small{--el-input-inner-height:calc(var(--el-input-height, 24px) - 2px)}.el-input-group{align-items:stretch;display:inline-flex;width:100%}.el-input-group__append,.el-input-group__prepend{align-items:center;background-color:var(--el-fill-color-light);border-radius:var(--el-input-border-radius);color:var(--el-color-info);display:inline-flex;justify-content:center;min-height:100%;padding:0 20px;position:relative;white-space:nowrap}.el-input-group__append:focus,.el-input-group__prepend:focus{outline:none}.el-input-group__append .el-button,.el-input-group__append .el-select,.el-input-group__prepend .el-button,.el-input-group__prepend .el-select{display:inline-block;flex:1;margin:0 -20px}.el-input-group__append button.el-button,.el-input-group__append button.el-button:hover,.el-input-group__append div.el-select .el-select__wrapper,.el-input-group__append div.el-select:hover .el-select__wrapper,.el-input-group__prepend button.el-button,.el-input-group__prepend button.el-button:hover,.el-input-group__prepend div.el-select .el-select__wrapper,.el-input-group__prepend div.el-select:hover .el-select__wrapper{background-color:transparent;border-color:transparent;color:inherit}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input{font-size:inherit}.el-input-group__prepend{border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;box-shadow:1px 0 0 0 var(--el-input-border-color) inset,0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset}.el-input-group__append{border-bottom-left-radius:0;border-left:0;border-top-left-radius:0;box-shadow:0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset,-1px 0 0 0 var(--el-input-border-color) inset}.el-input-group--prepend>.el-input__wrapper{border-bottom-left-radius:0;border-top-left-radius:0}.el-input-group--prepend .el-input-group__prepend .el-select .el-select__wrapper{border-bottom-right-radius:0;border-top-right-radius:0;box-shadow:1px 0 0 0 var(--el-input-border-color) inset,0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset}.el-input-group--append>.el-input__wrapper{border-bottom-right-radius:0;border-top-right-radius:0}.el-input-group--append .el-input-group__append .el-select .el-select__wrapper{border-bottom-left-radius:0;border-top-left-radius:0;box-shadow:0 1px 0 0 var(--el-input-border-color) inset,0 -1px 0 0 var(--el-input-border-color) inset,-1px 0 0 0 var(--el-input-border-color) inset}.el-input-hidden{display:none!important}";
      importCSS(elInputCss);
      function waitForElement(selector, timeout = 5e3) {
        return new Promise((resolve, reject) => {
          const startTime = Date.now();
          const check = () => {
            const element = document.querySelector(selector);
            if (element) {
              resolve(element);
              return;
            }
            if (Date.now() - startTime > timeout) {
              reject(new Error(`Element with selector "${selector}" not found within ${timeout}ms`));
              return;
            }
            requestAnimationFrame(check);
          };
          check();
        });
      }
      function getReactInstance(element) {
        for (const key in element) {
          if (key.startsWith("__reactInternalInstance$") || key.startsWith("__reactFiber$") || key.startsWith("__reactProps$")) {
            return element[key];
          }
        }
        return null;
      }
      function findReactEventHandlers(reactInstance) {
        const handlers = {};
        let fiber = reactInstance;
        let depth = 0;
        while (fiber && depth < 10) {
          const props = fiber.memoizedProps || fiber.pendingProps;
          if (props) {
            if (props.onChange && !handlers.onChange) handlers.onChange = props.onChange;
            if (props.onInput && !handlers.onInput) handlers.onInput = props.onInput;
            if (props.onBlur && !handlers.onBlur) handlers.onBlur = props.onBlur;
            if (props.onFocus && !handlers.onFocus) handlers.onFocus = props.onFocus;
            if (props.value !== void 0 && !handlers.value) handlers.value = props.value;
          }
          if (fiber.stateNode && fiber.stateNode.props) {
            const nodeProps = fiber.stateNode.props;
            if (nodeProps.onChange && !handlers.onChange) handlers.onChange = nodeProps.onChange;
            if (nodeProps.onInput && !handlers.onInput) handlers.onInput = nodeProps.onInput;
          }
          fiber = fiber.return;
          depth++;
        }
        return handlers;
      }
      function createReactLikeEvent(type, target) {
        const nativeEvent = new Event(type, {
          bubbles: true,
          cancelable: true
        });
        const reactEvent = {
          ...nativeEvent,
          target,
          currentTarget: target,
          nativeEvent,
          persist: function() {
          },
          isDefaultPrevented: function() {
            return false;
          },
          isPropagationStopped: function() {
            return false;
          },
          preventDefault: function() {
            nativeEvent.preventDefault();
          },
          stopPropagation: function() {
            nativeEvent.stopPropagation();
          }
        };
        return reactEvent;
      }
      function tryAllReactMethods(input, value, handlers) {
        input.value = value;
        if (handlers.onChange) {
          try {
            const fakeEvent = createReactLikeEvent("change", input);
            handlers.onChange(fakeEvent);
            return true;
          } catch (e) {
            console.error("onChange调用失败:", e);
          }
        }
        if (handlers.onInput) {
          try {
            const fakeEvent = createReactLikeEvent("input", input);
            handlers.onInput(fakeEvent);
            return true;
          } catch (e) {
            console.error("onInput调用失败:", e);
          }
        }
        return false;
      }
      function setValueWithNativeEvents(input, value) {
        const events = [
          { type: "focus", options: { bubbles: true } },
          { type: "input", options: { bubbles: true, inputType: "insertText" } },
          { type: "change", options: { bubbles: true } }
        ];
        input.value = value;
        events.forEach((eventDesc) => {
          try {
            const event = new Event(eventDesc.type, eventDesc.options);
            if (eventDesc.type === "input") {
              Object.assign(event, {
                inputType: "insertText",
                data: value,
                dataTransfer: null,
                isComposing: false
              });
            }
            input.dispatchEvent(event);
          } catch (e) {
            console.error(`事件 ${eventDesc.type} 失败:`, e);
          }
        });
      }
      function setReactInputValue(input, value) {
        input.focus();
        const reactInstance = getReactInstance(input);
        if (reactInstance) {
          const eventHandlers = findReactEventHandlers(reactInstance);
          const success = tryAllReactMethods(input, value, eventHandlers);
          if (success) {
            return;
          }
        }
        setValueWithNativeEvents(input, value);
      }
      var hookCallback;
      function hooks() {
        return hookCallback.apply(null, arguments);
      }
      function setHookCallback(callback) {
        hookCallback = callback;
      }
      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp(a2, b2) {
        return Object.prototype.hasOwnProperty.call(a2, b2);
      }
      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined(input) {
        return input === void 0;
      }
      function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map(arr, fn2) {
        var res = [], i, arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
          res.push(fn2(arr[i], i));
        }
        return res;
      }
      function extend(a2, b2) {
        for (var i in b2) {
          if (hasOwnProp(b2, i)) {
            a2[i] = b2[i];
          }
        }
        if (hasOwnProp(b2, "toString")) {
          a2.toString = b2.toString;
        }
        if (hasOwnProp(b2, "valueOf")) {
          a2.valueOf = b2.valueOf;
        }
        return a2;
      }
      function createUTC(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, true).utc();
      }
      function defaultParsingFlags() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags(m2) {
        if (m2._pf == null) {
          m2._pf = defaultParsingFlags();
        }
        return m2._pf;
      }
      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function(fun) {
          var t = Object(this), len = t.length >>> 0, i;
          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid(m2) {
        var flags = null, parsedParts = false, isNowValid = m2._d && !isNaN(m2._d.getTime());
        if (isNowValid) {
          flags = getParsingFlags(m2);
          parsedParts = some.call(flags.parsedDateParts, function(i) {
            return i != null;
          });
          isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m2._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
          }
        }
        if (Object.isFrozen == null || !Object.isFrozen(m2)) {
          m2._isValid = isNowValid;
        } else {
          return isNowValid;
        }
        return m2._isValid;
      }
      function createInvalid(flags) {
        var m2 = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m2), flags);
        } else {
          getParsingFlags(m2).userInvalidated = true;
        }
        return m2;
      }
      var momentProperties = hooks.momentProperties = [], updateInProgress = false;
      function copyConfig(to2, from2) {
        var i, prop, val, momentPropertiesLen = momentProperties.length;
        if (!isUndefined(from2._isAMomentObject)) {
          to2._isAMomentObject = from2._isAMomentObject;
        }
        if (!isUndefined(from2._i)) {
          to2._i = from2._i;
        }
        if (!isUndefined(from2._f)) {
          to2._f = from2._f;
        }
        if (!isUndefined(from2._l)) {
          to2._l = from2._l;
        }
        if (!isUndefined(from2._strict)) {
          to2._strict = from2._strict;
        }
        if (!isUndefined(from2._tzm)) {
          to2._tzm = from2._tzm;
        }
        if (!isUndefined(from2._isUTC)) {
          to2._isUTC = from2._isUTC;
        }
        if (!isUndefined(from2._offset)) {
          to2._offset = from2._offset;
        }
        if (!isUndefined(from2._pf)) {
          to2._pf = getParsingFlags(from2);
        }
        if (!isUndefined(from2._locale)) {
          to2._locale = from2._locale;
        }
        if (momentPropertiesLen > 0) {
          for (i = 0; i < momentPropertiesLen; i++) {
            prop = momentProperties[i];
            val = from2[prop];
            if (!isUndefined(val)) {
              to2[prop] = val;
            }
          }
        }
        return to2;
      }
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = new Date(NaN);
        }
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }
      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }
      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate(msg, fn2) {
        var firstTime = true;
        return extend(function() {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i, key, argLen = arguments.length;
            for (i = 0; i < argLen; i++) {
              arg = "";
              if (typeof arguments[i] === "object") {
                arg += "\n[" + i + "] ";
                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ": " + arguments[0][key] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn(
              msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
            );
            firstTime = false;
          }
          return fn2.apply(this, arguments);
        }, fn2);
      }
      var deprecations = {};
      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }
      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;
      function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set(config) {
        var prop, i;
        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this["_" + i] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
        );
      }
      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }
      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys;
      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function(obj) {
          var i, res = [];
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }
      var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar(key, mom, now2) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now2) : output;
      }
      function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
        return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
      function addFormatToken(token2, padded, ordinal2, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token2) {
          formatTokenFunctions[token2] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal2) {
          formatTokenFunctions[ordinal2] = function() {
            return this.localeData().ordinal(
              func.apply(this, arguments),
              token2
            );
          };
        }
      }
      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction(format2) {
        var array = format2.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }
        return function(mom) {
          var output = "", i2;
          for (i2 = 0; i2 < length; i2++) {
            output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
          }
          return output;
        };
      }
      function formatMoment(m2, format2) {
        if (!m2.isValid()) {
          return m2.localeData().invalidDate();
        }
        format2 = expandFormat(format2, m2.localeData());
        formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
        return formatFunctions[format2](m2);
      }
      function expandFormat(format2, locale2) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
          return locale2.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format2)) {
          format2 = format2.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
          );
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }
        return format2;
      }
      var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat(key) {
        var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format2 || !formatUpper) {
          return format2;
        }
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        }).join("");
        return this._longDateFormat[key];
      }
      var defaultInvalidDate = "Invalid date";
      function invalidDate() {
        return this._invalidDate;
      }
      var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
      function ordinal(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime(number, withoutSuffix, string2, isFuture) {
        var output = this._relativeTime[string2];
        return isFunction(output) ? output(number, withoutSuffix, string2, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture(diff2, output) {
        var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
        return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
      }
      var aliases = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
      };
      function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
      }
      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
      };
      function getPrioritizedUnits(unitsObj) {
        var units = [], u2;
        for (u2 in unitsObj) {
          if (hasOwnProp(unitsObj, u2)) {
            units.push({ unit: u2, priority: priorities[u2] });
          }
        }
        units.sort(function(a2, b2) {
          return a2.priority - b2.priority;
        });
        return units;
      }
      var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
      regexes = {};
      function addRegexToken(token2, regex, strictRegex) {
        regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }
      function getParseRegexForToken(token2, config) {
        if (!hasOwnProp(regexes, token2)) {
          return new RegExp(unescapeFormat(token2));
        }
        return regexes[token2](config._strict, config._locale);
      }
      function unescapeFormat(s2) {
        return regexEscape(
          s2.replace("\\", "").replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(matched, p1, p2, p3, p4) {
              return p1 || p2 || p3 || p4;
            }
          )
        );
      }
      function regexEscape(s2) {
        return s2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }
        return value;
      }
      var tokens = {};
      function addParseToken(token2, callback) {
        var i, func = callback, tokenLen;
        if (typeof token2 === "string") {
          token2 = [token2];
        }
        if (isNumber(callback)) {
          func = function(input, array) {
            array[callback] = toInt(input);
          };
        }
        tokenLen = token2.length;
        for (i = 0; i < tokenLen; i++) {
          tokens[token2[i]] = func;
        }
      }
      function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token3) {
          config._w = config._w || {};
          callback(input, config._w, config, token3);
        });
      }
      function addTimeToArrayFromToken(token2, input, config) {
        if (input != null && hasOwnProp(tokens, token2)) {
          tokens[token2](input, config._a, config, token2);
        }
      }
      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
      var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
      addFormatToken("Y", 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : "+" + y;
      });
      addFormatToken(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      });
      addFormatToken(0, ["YYYY", 4], 0, "year");
      addFormatToken(0, ["YYYYY", 5], 0, "year");
      addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
      addRegexToken("Y", matchSigned);
      addRegexToken("YY", match1to2, match2);
      addRegexToken("YYYY", match1to4, match4);
      addRegexToken("YYYYY", match1to6, match6);
      addRegexToken("YYYYYY", match1to6, match6);
      addParseToken(["YYYYY", "YYYYYY"], YEAR);
      addParseToken("YYYY", function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken("YY", function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken("Y", function(input, array) {
        array[YEAR] = parseInt(input, 10);
      });
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear = makeGetSet("FullYear", true);
      function getIsLeapYear() {
        return isLeapYear(this.year());
      }
      function makeGetSet(unit, keepTime) {
        return function(value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }
      function get(mom, unit) {
        if (!mom.isValid()) {
          return NaN;
        }
        var d2 = mom._d, isUTC = mom._isUTC;
        switch (unit) {
          case "Milliseconds":
            return isUTC ? d2.getUTCMilliseconds() : d2.getMilliseconds();
          case "Seconds":
            return isUTC ? d2.getUTCSeconds() : d2.getSeconds();
          case "Minutes":
            return isUTC ? d2.getUTCMinutes() : d2.getMinutes();
          case "Hours":
            return isUTC ? d2.getUTCHours() : d2.getHours();
          case "Date":
            return isUTC ? d2.getUTCDate() : d2.getDate();
          case "Day":
            return isUTC ? d2.getUTCDay() : d2.getDay();
          case "Month":
            return isUTC ? d2.getUTCMonth() : d2.getMonth();
          case "FullYear":
            return isUTC ? d2.getUTCFullYear() : d2.getFullYear();
          default:
            return NaN;
        }
      }
      function set$1(mom, unit, value) {
        var d2, isUTC, year, month, date;
        if (!mom.isValid() || isNaN(value)) {
          return;
        }
        d2 = mom._d;
        isUTC = mom._isUTC;
        switch (unit) {
          case "Milliseconds":
            return void (isUTC ? d2.setUTCMilliseconds(value) : d2.setMilliseconds(value));
          case "Seconds":
            return void (isUTC ? d2.setUTCSeconds(value) : d2.setSeconds(value));
          case "Minutes":
            return void (isUTC ? d2.setUTCMinutes(value) : d2.setMinutes(value));
          case "Hours":
            return void (isUTC ? d2.setUTCHours(value) : d2.setHours(value));
          case "Date":
            return void (isUTC ? d2.setUTCDate(value) : d2.setDate(value));



case "FullYear":
            break;
default:
            return;
        }
        year = value;
        month = mom.month();
        date = mom.date();
        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
        void (isUTC ? d2.setUTCFullYear(year, month, date) : d2.setFullYear(year, month, date));
      }
      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }
      function stringSet(units, value) {
        if (typeof units === "object") {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
          for (i = 0; i < prioritizedLen; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value);
          }
        }
        return this;
      }
      function mod(n, x2) {
        return (n % x2 + x2) % x2;
      }
      var indexOf;
      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function(o2) {
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o2) {
              return i;
            }
          }
          return -1;
        };
      }
      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      });
      addFormatToken("MMM", 0, 0, function(format2) {
        return this.localeData().monthsShort(this, format2);
      });
      addFormatToken("MMMM", 0, 0, function(format2) {
        return this.localeData().months(this, format2);
      });
      addRegexToken("M", match1to2, match1to2NoLeadingZero);
      addRegexToken("MM", match1to2, match2);
      addRegexToken("MMM", function(isStrict, locale2) {
        return locale2.monthsShortRegex(isStrict);
      });
      addRegexToken("MMMM", function(isStrict, locale2) {
        return locale2.monthsRegex(isStrict);
      });
      addParseToken(["M", "MM"], function(input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
        var month = config._locale.monthsParse(input, token2, config._strict);
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      });
      var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
      function localeMonths(m2, format2) {
        if (!m2) {
          return isArray(this._months) ? this._months : this._months["standalone"];
        }
        return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
      }
      function localeMonthsShort(m2, format2) {
        if (!m2) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
      }
      function handleStrictParse(monthName, format2, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC([2e3, i]);
            this._shortMonthsParse[i] = this.monthsShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse(monthName, format2, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format2, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
              "^" + this.months(mom, "").replace(".", "") + "$",
              "i"
            );
            this._shortMonthsParse[i] = new RegExp(
              "^" + this.monthsShort(mom, "").replace(".", "") + "$",
              "i"
            );
          }
          if (!strict && !this._monthsParse[i]) {
            regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }
      function setMonth(mom, value) {
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value === "string") {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value);
            if (!isNumber(value)) {
              return mom;
            }
          }
        }
        var month = value, date = mom.date();
        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
        void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
        return mom;
      }
      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, "Month");
        }
      }
      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse() {
        function cmpLenRev(a2, b2) {
          return b2.length - a2.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          shortP = regexEscape(this.monthsShort(mom, ""));
          longP = regexEscape(this.months(mom, ""));
          shortPieces.push(shortP);
          longPieces.push(longP);
          mixedPieces.push(longP);
          mixedPieces.push(shortP);
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._monthsShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
      }
      function createDate(y, m2, d2, h2, M2, s2, ms) {
        var date;
        if (y < 100 && y >= 0) {
          date = new Date(y + 400, m2, d2, h2, M2, s2, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m2, d2, h2, M2, s2, ms);
        }
        return date;
      }
      function createUTCDate(y) {
        var date, args;
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken("w", ["ww", 2], "wo", "week");
      addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
      addRegexToken("w", match1to2, match1to2NoLeadingZero);
      addRegexToken("ww", match1to2, match2);
      addRegexToken("W", match1to2, match1to2NoLeadingZero);
      addRegexToken("WW", match1to2, match2);
      addWeekParseToken(
        ["w", "ww", "W", "WW"],
        function(input, week, config, token2) {
          week[token2.substr(0, 1)] = toInt(input);
        }
      );
      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek = {
        dow: 0,
doy: 6
};
      function localeFirstDayOfWeek() {
        return this._week.dow;
      }
      function localeFirstDayOfYear() {
        return this._week.doy;
      }
      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      addFormatToken("d", 0, "do", "day");
      addFormatToken("dd", 0, 0, function(format2) {
        return this.localeData().weekdaysMin(this, format2);
      });
      addFormatToken("ddd", 0, 0, function(format2) {
        return this.localeData().weekdaysShort(this, format2);
      });
      addFormatToken("dddd", 0, 0, function(format2) {
        return this.localeData().weekdays(this, format2);
      });
      addFormatToken("e", 0, 0, "weekday");
      addFormatToken("E", 0, 0, "isoWeekday");
      addRegexToken("d", match1to2);
      addRegexToken("e", match1to2);
      addRegexToken("E", match1to2);
      addRegexToken("dd", function(isStrict, locale2) {
        return locale2.weekdaysMinRegex(isStrict);
      });
      addRegexToken("ddd", function(isStrict, locale2) {
        return locale2.weekdaysShortRegex(isStrict);
      });
      addRegexToken("dddd", function(isStrict, locale2) {
        return locale2.weekdaysRegex(isStrict);
      });
      addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
        var weekday = config._locale.weekdaysParse(input, token2, config._strict);
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
        week[token2] = toInt(input);
      });
      function parseWeekday(input, locale2) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale2.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday(input, locale2) {
        if (typeof input === "string") {
          return locale2.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }
      var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
      function localeWeekdays(m2, format2) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
        return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
      }
      function localeWeekdaysShort(m2) {
        return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin(m2) {
        return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format2, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i = 0; i < 7; ++i) {
            mom = createUTC([2e3, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
              mom,
              ""
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse(weekdayName, format2, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format2, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
              "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._shortWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._minWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
          }
          if (!this._weekdaysParse[i]) {
            regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }
      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = get(this, "Day");
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse() {
        function cmpLenRev(a2, b2) {
          return b2.length - a2.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ""));
          shortp = regexEscape(this.weekdaysShort(mom, ""));
          longp = regexEscape(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._weekdaysShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
        this._weekdaysMinStrictRegex = new RegExp(
          "^(" + minPieces.join("|") + ")",
          "i"
        );
      }
      function hFormat() {
        return this.hours() % 12 || 12;
      }
      function kFormat() {
        return this.hours() || 24;
      }
      addFormatToken("H", ["HH", 2], 0, "hour");
      addFormatToken("h", ["hh", 2], 0, hFormat);
      addFormatToken("k", ["kk", 2], 0, kFormat);
      addFormatToken("hmm", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken("hmmss", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken("Hmm", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken("Hmmss", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      function meridiem(token2, lowercase) {
        addFormatToken(token2, 0, 0, function() {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
          );
        });
      }
      meridiem("a", true);
      meridiem("A", false);
      function matchMeridiem(isStrict, locale2) {
        return locale2._meridiemParse;
      }
      addRegexToken("a", matchMeridiem);
      addRegexToken("A", matchMeridiem);
      addRegexToken("H", match1to2, match1to2HasZero);
      addRegexToken("h", match1to2, match1to2NoLeadingZero);
      addRegexToken("k", match1to2, match1to2NoLeadingZero);
      addRegexToken("HH", match1to2, match2);
      addRegexToken("hh", match1to2, match2);
      addRegexToken("kk", match1to2, match2);
      addRegexToken("hmm", match3to4);
      addRegexToken("hmmss", match5to6);
      addRegexToken("Hmm", match3to4);
      addRegexToken("Hmmss", match5to6);
      addParseToken(["H", "HH"], HOUR);
      addParseToken(["k", "kk"], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(["h", "hh"], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      });
      function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
      function localeMeridiem(hours2, minutes2, isLower) {
        if (hours2 > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      };
      var locales = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }
        return minl;
      }
      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
      }
      function chooseLocale(names2) {
        var i = 0, j, next, locale2, split;
        while (i < names2.length) {
          split = normalizeLocale(names2[i]).split("-");
          j = split.length;
          next = normalizeLocale(names2[i + 1]);
          next = next ? next.split("-") : null;
          while (j > 0) {
            locale2 = loadLocale(split.slice(0, j).join("-"));
            if (locale2) {
              return locale2;
            }
            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }
      function isLocaleNameSane(name) {
        return !!(name && name.match("^[^/\\\\]*$"));
      }
      function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = require;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            locales[name] = null;
          }
        }
        return locales[name];
      }
      function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }
          if (data) {
            globalLocale = data;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn(
                "Locale " + key + " not found. Did you forget to load it?"
              );
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale(name, config) {
        if (config !== null) {
          var locale2, parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
            deprecateSimple(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            );
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale2 = loadLocale(config.parentLocale);
              if (locale2 != null) {
                parentConfig = locale2._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name,
                  config
                });
                return null;
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));
          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function(x2) {
              defineLocale(x2.name, x2.config);
            });
          }
          getSetGlobalLocale(name);
          return locales[name];
        } else {
          delete locales[name];
          return null;
        }
      }
      function updateLocale(name, config) {
        if (config != null) {
          var locale2, tmpLocale, parentConfig = baseConfig;
          if (locales[name] != null && locales[name].parentLocale != null) {
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name;
            }
            locale2 = new Locale(config);
            locale2.parentLocale = locales[name];
            locales[name] = locale2;
          }
          getSetGlobalLocale(name);
        } else {
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }
        return locales[name];
      }
      function getLocale(key) {
        var locale2;
        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }
        if (!key) {
          return globalLocale;
        }
        if (!isArray(key)) {
          locale2 = loadLocale(key);
          if (locale2) {
            return locale2;
          }
          key = [key];
        }
        return chooseLocale(key);
      }
      function listLocales() {
        return keys(locales);
      }
      function checkOverflow(m2) {
        var overflow, a2 = m2._a;
        if (a2 && getParsingFlags(m2).overflow === -2) {
          overflow = a2[MONTH] < 0 || a2[MONTH] > 11 ? MONTH : a2[DATE] < 1 || a2[DATE] > daysInMonth(a2[YEAR], a2[MONTH]) ? DATE : a2[HOUR] < 0 || a2[HOUR] > 24 || a2[HOUR] === 24 && (a2[MINUTE] !== 0 || a2[SECOND] !== 0 || a2[MILLISECOND] !== 0) ? HOUR : a2[MINUTE] < 0 || a2[MINUTE] > 59 ? MINUTE : a2[SECOND] < 0 || a2[SECOND] > 59 ? SECOND : a2[MILLISECOND] < 0 || a2[MILLISECOND] > 999 ? MILLISECOND : -1;
          if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }
          getParsingFlags(m2).overflow = overflow;
        }
        return m2;
      }
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, false],
        ["YYYY", /\d{4}/, false]
      ], isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO(config) {
        var i, l2, string2 = config._i, match = extendedIsoRegex.exec(string2) || basicIsoRegex.exec(string2), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
        if (match) {
          getParsingFlags(config).iso = true;
          for (i = 0, l2 = isoDatesLen; i < l2; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l2 = isoTimesLen; i < l2; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
          untruncateYear(yearStr),
          defaultLocaleMonthsShort.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
        ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2e3 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }
      function preprocessRFC2822(s2) {
        return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
            parsedInput[0],
            parsedInput[1],
            parsedInput[2]
          ).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
          return h2 * 60 + m2;
        }
      }
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
          );
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }
        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      hooks.createFromInputFallback = deprecate(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(config) {
          config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
        }
      );
      function defaults(a2, b2, c2) {
        if (a2 != null) {
          return a2;
        }
        if (b2 != null) {
          return b2;
        }
        return c2;
      }
      function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
          ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }
      function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }
          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }
        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(
          null,
          input
        );
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo(config) {
        var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w2 = config._w;
        if (w2.GG != null || w2.W != null || w2.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults(
            w2.GG,
            config._a[YEAR],
            weekOfYear(createLocal(), 1, 4).year
          );
          week = defaults(w2.W, 1);
          weekday = defaults(w2.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
          week = defaults(w2.w, curWeek.week);
          if (w2.d != null) {
            weekday = w2.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w2.e != null) {
            weekday = w2.e + dow;
            if (w2.e < 0 || w2.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks.ISO_8601 = function() {
      };
      hooks.RFC_2822 = function() {
      };
      function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string2 = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string2.length, totalParsedInputLength = 0, era, tokenLen;
        tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens2.length;
        for (i = 0; i < tokenLen; i++) {
          token2 = tokens2[i];
          parsedInput = (string2.match(getParseRegexForToken(token2, config)) || [])[0];
          if (parsedInput) {
            skipped = string2.substr(0, string2.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string2 = string2.slice(
              string2.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions[token2]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token2);
            }
            addTimeToArrayFromToken(token2, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token2);
          }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string2.length > 0) {
          getParsingFlags(config).unusedInput.push(string2);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(
          config._locale,
          config._a[HOUR],
          config._meridiem
        );
        era = getParsingFlags(config).era;
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }
        configFromArray(config);
        checkOverflow(config);
      }
      function meridiemFixWrap(locale2, hour, meridiem2) {
        var isPm;
        if (meridiem2 == null) {
          return hour;
        }
        if (locale2.meridiemHour != null) {
          return locale2.meridiemHour(hour, meridiem2);
        } else if (locale2.isPM != null) {
          isPm = locale2.isPM(meridiem2);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          return hour;
        }
      }
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
        if (configfLen === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }
        for (i = 0; i < configfLen; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);
          if (isValid(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags(tempConfig).charsLeftOver;
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend(config, bestMoment || tempConfig);
      }
      function configFromObject(config) {
        if (config._d) {
          return;
        }
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
        config._a = map(
          [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
          function(obj) {
            return obj && parseInt(obj, 10);
          }
        );
        configFromArray(config);
      }
      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = void 0;
        }
        return res;
      }
      function prepareConfig(config) {
        var input = config._i, format2 = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format2 === void 0 && input === "") {
          return createInvalid({ nullInput: true });
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format2)) {
          configFromStringAndArray(config);
        } else if (format2) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }
        if (!isValid(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function(obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
        var c2 = {};
        if (format2 === true || format2 === false) {
          strict = format2;
          format2 = void 0;
        }
        if (locale2 === true || locale2 === false) {
          strict = locale2;
          locale2 = void 0;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = void 0;
        }
        c2._isAMomentObject = true;
        c2._useUTC = c2._isUTC = isUTC;
        c2._l = locale2;
        c2._i = input;
        c2._f = format2;
        c2._strict = strict;
        return createFromConfig(c2);
      }
      function createLocal(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, false);
      }
      var prototypeMin = deprecate(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        }
      ), prototypeMax = deprecate(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        }
      );
      function pickBy(fn2, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn2](res)) {
            res = moments[i];
          }
        }
        return res;
      }
      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
      }
      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
      }
      var now = function() {
        return Date.now ? Date.now() : + new Date();
      };
      var ordering = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function isDurationValid(m2) {
        var key, unitHasDecimal = false, i, orderLen = ordering.length;
        for (key in m2) {
          if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
            return false;
          }
        }
        for (i = 0; i < orderLen; ++i) {
          if (m2[ordering[i]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration(NaN);
      }
      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds2 + seconds2 * 1e3 +
minutes2 * 6e4 +
hours2 * 1e3 * 60 * 60;
        this._days = +days2 + weeks2 * 7;
        this._months = +months2 + quarters * 3 + years2 * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
      }
      function isDuration(obj) {
        return obj instanceof Duration;
      }
      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays(array1, array22, dontConvert) {
        var len = Math.min(array1.length, array22.length), lengthDiff = Math.abs(array1.length - array22.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
          if (toInt(array1[i]) !== toInt(array22[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset(token2, separator) {
        addFormatToken(token2, 0, 0, function() {
          var offset2 = this.utcOffset(), sign2 = "+";
          if (offset2 < 0) {
            offset2 = -offset2;
            sign2 = "-";
          }
          return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
        });
      }
      offset("Z", ":");
      offset("ZZ", "");
      addRegexToken("Z", matchShortOffset);
      addRegexToken("ZZ", matchShortOffset);
      addParseToken(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      });
      var chunkOffset = /([\+\-]|\d\d)/gi;
      function offsetFromString(matcher, string2) {
        var matches = (string2 || "").match(matcher), chunk, parts, minutes2;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
        minutes2 = +(parts[1] * 60) + toInt(parts[2]);
        return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
      }
      function cloneWithOffset(input, model) {
        var res, diff2;
        if (model._isUTC) {
          res = model.clone();
          diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff2);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }
      function getDateOffset(m2) {
        return -Math.round(m2._d.getTimezoneOffset());
      }
      hooks.updateOffset = function() {
      };
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset2 = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset2 !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(
                this,
                createDuration(input - offset2, "m"),
                1,
                false
              );
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset2 : getDateOffset(this);
        }
      }
      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c2 = {}, other;
        copyConfig(c2, this);
        c2 = prepareConfig(c2);
        if (c2._a) {
          other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
          this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration(input, key) {
        var duration = input, match = null, sign2, ret, diffRes;
        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};
          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign2,
            h: toInt(match[HOUR]) * sign2,
            m: toInt(match[MINUTE]) * sign2,
            s: toInt(match[SECOND]) * sign2,
            ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
};
        } else if (match = isoRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign2),
            M: parseIso(match[3], sign2),
            w: parseIso(match[4], sign2),
            d: parseIso(match[5], sign2),
            h: parseIso(match[6], sign2),
            m: parseIso(match[7], sign2),
            s: parseIso(match[8], sign2)
          };
        } else if (duration == null) {
          duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
          diffRes = momentsDifference(
            createLocal(duration.from),
            createLocal(duration.to)
          );
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration(input) && hasOwnProp(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;
      function parseIso(inp, sign2) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign2;
      }
      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return { milliseconds: 0, months: 0 };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder(direction, name) {
        return function(val, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(
              name,
              "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            );
            tmp = val;
            val = period;
            period = tmp;
          }
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }
      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months2) {
          setMonth(mom, get(mom, "Month") + months2 * isAdding);
        }
        if (days2) {
          set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
        }
        if (milliseconds2) {
          mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days2 || months2);
        }
      }
      var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
      function isString(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
      }
      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], i, property2, propertyLen = properties.length;
        for (i = 0; i < propertyLen; i += 1) {
          property2 = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property2);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], i, property2;
        for (i = 0; i < properties.length; i += 1) {
          property2 = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property2);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat(myMoment, now2) {
        var diff2 = myMoment.diff(now2, "days", true);
        return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time, formats) {
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = void 0;
            formats = void 0;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats = void 0;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time = void 0;
          }
        }
        var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
        return this.format(
          output || this.localeData().calendar(format2, this, createLocal(now2))
        );
      }
      function clone() {
        return new Moment(this);
      }
      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }
      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }
      function isBetween(from2, to2, units, inclusivity) {
        var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }
      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }
      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }
      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }
      function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
          case "year":
            output = monthDiff(this, that) / 12;
            break;
          case "month":
            output = monthDiff(this, that);
            break;
          case "quarter":
            output = monthDiff(this, that) / 3;
            break;
          case "second":
            output = (this - that) / 1e3;
            break;
case "minute":
            output = (this - that) / 6e4;
            break;
case "hour":
            output = (this - that) / 36e5;
            break;
case "day":
            output = (this - that - zoneDelta) / 864e5;
            break;
case "week":
            output = (this - that - zoneDelta) / 6048e5;
            break;
default:
            output = this - that;
        }
        return asFloat ? output : absFloor(output);
      }
      function monthDiff(a2, b2) {
        if (a2.date() < b2.date()) {
          return -monthDiff(b2, a2);
        }
        var wholeMonthDiff = (b2.year() - a2.year()) * 12 + (b2.month() - a2.month()), anchor = a2.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b2 - anchor < 0) {
          anchor2 = a2.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b2 - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a2.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b2 - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
        if (m2.year() < 0 || m2.year() > 9999) {
          return formatMoment(
            m2,
            utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        if (isFunction(Date.prototype.toISOString)) {
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
          }
        }
        return formatMoment(
          m2,
          utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      function inspect() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }
      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }
      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }
      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }
      function locale(key) {
        var newLocaleData;
        if (key === void 0) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang = deprecate(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(key) {
          if (key === void 0) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        }
      );
      function localeData() {
        return this._locale;
      }
      var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate(y, m2, d2) {
        if (y < 100 && y >= 0) {
          return new Date(y + 400, m2, d2) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m2, d2).valueOf();
        }
      }
      function utcStartOfDate(y, m2, d2) {
        if (y < 100 && y >= 0) {
          return Date.UTC(y + 400, m2, d2) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m2, d2);
        }
      }
      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year(), 0, 1);
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3,
              1
            );
            break;
          case "month":
            time = startOfDate(this.year(), this.month(), 1);
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            );
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date());
            break;
          case "hour":
            time = this._d.valueOf();
            time -= mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            );
            break;
          case "minute":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;
          case "second":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3 + 3,
              1
            ) - 1;
            break;
          case "month":
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            ) - 1;
            break;
          case "minute":
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;
          case "second":
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate() {
        return new Date(this.valueOf());
      }
      function toArray() {
        var m2 = this;
        return [
          m2.year(),
          m2.month(),
          m2.date(),
          m2.hour(),
          m2.minute(),
          m2.second(),
          m2.millisecond()
        ];
      }
      function toObject() {
        var m2 = this;
        return {
          years: m2.year(),
          months: m2.month(),
          date: m2.date(),
          hours: m2.hours(),
          minutes: m2.minutes(),
          seconds: m2.seconds(),
          milliseconds: m2.milliseconds()
        };
      }
      function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid(this);
      }
      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }
      function invalidAt() {
        return getParsingFlags(this).overflow;
      }
      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken("N", 0, 0, "eraAbbr");
      addFormatToken("NN", 0, 0, "eraAbbr");
      addFormatToken("NNN", 0, 0, "eraAbbr");
      addFormatToken("NNNN", 0, 0, "eraName");
      addFormatToken("NNNNN", 0, 0, "eraNarrow");
      addFormatToken("y", ["y", 1], "yo", "eraYear");
      addFormatToken("y", ["yy", 2], 0, "eraYear");
      addFormatToken("y", ["yyy", 3], 0, "eraYear");
      addFormatToken("y", ["yyyy", 4], 0, "eraYear");
      addRegexToken("N", matchEraAbbr);
      addRegexToken("NN", matchEraAbbr);
      addRegexToken("NNN", matchEraAbbr);
      addRegexToken("NNNN", matchEraName);
      addRegexToken("NNNNN", matchEraNarrow);
      addParseToken(
        ["N", "NN", "NNN", "NNNN", "NNNNN"],
        function(input, array, config, token2) {
          var era = config._locale.erasParse(input, token2, config._strict);
          if (era) {
            getParsingFlags(config).era = era;
          } else {
            getParsingFlags(config).invalidEra = input;
          }
        }
      );
      addRegexToken("y", matchUnsigned);
      addRegexToken("yy", matchUnsigned);
      addRegexToken("yyy", matchUnsigned);
      addRegexToken("yyyy", matchUnsigned);
      addRegexToken("yo", matchEraYearOrdinal);
      addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
      addParseToken(["yo"], function(input, array, config, token2) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      });
      function localeEras(m2, format2) {
        var i, l2, date, eras = this._eras || getLocale("en")._eras;
        for (i = 0, l2 = eras.length; i < l2; ++i) {
          switch (typeof eras[i].since) {
            case "string":
              date = hooks(eras[i].since).startOf("day");
              eras[i].since = date.valueOf();
              break;
          }
          switch (typeof eras[i].until) {
            case "undefined":
              eras[i].until = Infinity;
              break;
            case "string":
              date = hooks(eras[i].until).startOf("day").valueOf();
              eras[i].until = date.valueOf();
              break;
          }
        }
        return eras;
      }
      function localeErasParse(eraName, format2, strict) {
        var i, l2, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i = 0, l2 = eras.length; i < l2; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();
          if (strict) {
            switch (format2) {
              case "N":
              case "NN":
              case "NNN":
                if (abbr === eraName) {
                  return eras[i];
                }
                break;
              case "NNNN":
                if (name === eraName) {
                  return eras[i];
                }
                break;
              case "NNNNN":
                if (narrow === eraName) {
                  return eras[i];
                }
                break;
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }
      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === void 0) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }
      function getEraName() {
        var i, l2, val, eras = this.localeData().eras();
        for (i = 0, l2 = eras.length; i < l2; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }
        return "";
      }
      function getEraNarrow() {
        var i, l2, val, eras = this.localeData().eras();
        for (i = 0, l2 = eras.length; i < l2; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }
        return "";
      }
      function getEraAbbr() {
        var i, l2, val, eras = this.localeData().eras();
        for (i = 0, l2 = eras.length; i < l2; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }
        return "";
      }
      function getEraYear() {
        var i, l2, dir, val, eras = this.localeData().eras();
        for (i = 0, l2 = eras.length; i < l2; ++i) {
          dir = eras[i].since <= eras[i].until ? 1 : -1;
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr(isStrict, locale2) {
        return locale2.erasAbbrRegex(isStrict);
      }
      function matchEraName(isStrict, locale2) {
        return locale2.erasNameRegex(isStrict);
      }
      function matchEraNarrow(isStrict, locale2) {
        return locale2.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal(isStrict, locale2) {
        return locale2._eraYearOrdinalRegex || matchUnsigned;
      }
      function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l2, erasName, erasAbbr, erasNarrow, eras = this.eras();
        for (i = 0, l2 = eras.length; i < l2; ++i) {
          erasName = regexEscape(eras[i].name);
          erasAbbr = regexEscape(eras[i].abbr);
          erasNarrow = regexEscape(eras[i].narrow);
          namePieces.push(erasName);
          abbrPieces.push(erasAbbr);
          narrowPieces.push(erasNarrow);
          mixedPieces.push(erasName);
          mixedPieces.push(erasAbbr);
          mixedPieces.push(erasNarrow);
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp(
          "^(" + narrowPieces.join("|") + ")",
          "i"
        );
      }
      addFormatToken(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function addWeekYearFormatToken(token2, getter) {
        addFormatToken(0, [token2, token2.length], 0, getter);
      }
      addWeekYearFormatToken("gggg", "weekYear");
      addWeekYearFormatToken("ggggg", "weekYear");
      addWeekYearFormatToken("GGGG", "isoWeekYear");
      addWeekYearFormatToken("GGGGG", "isoWeekYear");
      addRegexToken("G", matchSigned);
      addRegexToken("g", matchSigned);
      addRegexToken("GG", match1to2, match2);
      addRegexToken("gg", match1to2, match2);
      addRegexToken("GGGG", match1to4, match4);
      addRegexToken("gggg", match1to4, match4);
      addRegexToken("GGGGG", match1to6, match6);
      addRegexToken("ggggg", match1to6, match6);
      addWeekParseToken(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function(input, week, config, token2) {
          week[token2.substr(0, 2)] = toInt(input);
        }
      );
      addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
        week[token2] = hooks.parseTwoDigitYear(input);
      });
      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.week(),
          this.weekday() + this.localeData()._week.dow,
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        );
      }
      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }
      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken("Q", 0, "Qo", "quarter");
      addRegexToken("Q", match1);
      addParseToken("Q", function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      });
      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken("D", ["DD", 2], "Do", "date");
      addRegexToken("D", match1to2, match1to2NoLeadingZero);
      addRegexToken("DD", match1to2, match2);
      addRegexToken("Do", function(isStrict, locale2) {
        return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(["D", "DD"], DATE);
      addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      });
      var getSetDayOfMonth = makeGetSet("Date", true);
      addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
      addRegexToken("DDD", match1to3);
      addRegexToken("DDDD", match3);
      addParseToken(["DDD", "DDDD"], function(input, array, config) {
        config._dayOfYear = toInt(input);
      });
      function getSetDayOfYear(input) {
        var dayOfYear = Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken("m", ["mm", 2], 0, "minute");
      addRegexToken("m", match1to2, match1to2HasZero);
      addRegexToken("mm", match1to2, match2);
      addParseToken(["m", "mm"], MINUTE);
      var getSetMinute = makeGetSet("Minutes", false);
      addFormatToken("s", ["ss", 2], 0, "second");
      addRegexToken("s", match1to2, match1to2HasZero);
      addRegexToken("ss", match1to2, match2);
      addParseToken(["s", "ss"], SECOND);
      var getSetSecond = makeGetSet("Seconds", false);
      addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ["SSS", 3], 0, "millisecond");
      addFormatToken(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      });
      addFormatToken(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      });
      addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      });
      addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      });
      addRegexToken("S", match1to3, match1);
      addRegexToken("SS", match1to3, match2);
      addRegexToken("SSS", match1to3, match3);
      var token, getSetMillisecond;
      for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
      }
      function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
      }
      for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
      }
      getSetMillisecond = makeGetSet("Milliseconds", false);
      addFormatToken("z", 0, 0, "zoneAbbr");
      addFormatToken("zz", 0, 0, "zoneName");
      function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate(
        "dates accessor is deprecated. Use date instead.",
        getSetDayOfMonth
      );
      proto.months = deprecate(
        "months accessor is deprecated. Use month instead",
        getSetMonth
      );
      proto.years = deprecate(
        "years accessor is deprecated. Use year instead",
        getSetYear
      );
      proto.zone = deprecate(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        getSetZone
      );
      proto.isDSTShifted = deprecate(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        isDaylightSavingTimeShifted
      );
      function createUnix(input) {
        return createLocal(input * 1e3);
      }
      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }
      function preParsePostFormat(string2) {
        return string2;
      }
      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;
      function get$1(format2, index, field, setter) {
        var locale2 = getLocale(), utc = createUTC().set(setter, index);
        return locale2[field](utc, format2);
      }
      function listMonthsImpl(format2, index, field) {
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
        if (index != null) {
          return get$1(format2, index, field, "month");
        }
        var i, out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format2, i, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl(localeSorted, format2, index, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        } else {
          format2 = localeSorted;
          index = format2;
          localeSorted = false;
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        }
        var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
        if (index != null) {
          return get$1(format2, (index + shift) % 7, field, "day");
        }
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format2, (i + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths(format2, index) {
        return listMonthsImpl(format2, index, "months");
      }
      function listMonthsShort(format2, index) {
        return listMonthsImpl(format2, index, "monthsShort");
      }
      function listWeekdays(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
      }
      function listWeekdaysShort(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
      }
      function listWeekdaysMin(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
      }
      getSetGlobalLocale("en", {
        eras: [
          {
            since: "0001-01-01",
            until: Infinity,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -Infinity,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.lang = deprecate(
        "moment.lang is deprecated. Use moment.locale instead.",
        getSetGlobalLocale
      );
      hooks.langData = deprecate(
        "moment.langData is deprecated. Use moment.localeData instead.",
        getLocale
      );
      var mathAbs = Math.abs;
      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }
      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      }
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }
      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble() {
        var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
        if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
          milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
          days2 = 0;
          months2 = 0;
        }
        data.milliseconds = milliseconds2 % 1e3;
        seconds2 = absFloor(milliseconds2 / 1e3);
        data.seconds = seconds2 % 60;
        minutes2 = absFloor(seconds2 / 60);
        data.minutes = minutes2 % 60;
        hours2 = absFloor(minutes2 / 60);
        data.hours = hours2 % 24;
        days2 += absFloor(hours2 / 24);
        monthsFromDays = absFloor(daysToMonths(days2));
        months2 += monthsFromDays;
        days2 -= absCeil(monthsToDays(monthsFromDays));
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        data.days = days2;
        data.months = months2;
        data.years = years2;
        return this;
      }
      function daysToMonths(days2) {
        return days2 * 4800 / 146097;
      }
      function monthsToDays(months2) {
        return months2 * 146097 / 4800;
      }
      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days2, months2, milliseconds2 = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
          days2 = this._days + milliseconds2 / 864e5;
          months2 = this._months + daysToMonths(days2);
          switch (units) {
            case "month":
              return months2;
            case "quarter":
              return months2 / 3;
            case "year":
              return months2 / 12;
          }
        } else {
          days2 = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
            case "week":
              return days2 / 7 + milliseconds2 / 6048e5;
            case "day":
              return days2 + milliseconds2 / 864e5;
            case "hour":
              return days2 * 24 + milliseconds2 / 36e5;
            case "minute":
              return days2 * 1440 + milliseconds2 / 6e4;
            case "second":
              return days2 * 86400 + milliseconds2 / 1e3;
case "millisecond":
              return Math.floor(days2 * 864e5) + milliseconds2;
            default:
              throw new Error("Unknown unit " + units);
          }
        }
      }
      function makeAs(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
      function clone$1() {
        return createDuration(this);
      }
      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
      }
      function makeGetter(name) {
        return function() {
          return this.isValid() ? this._data[name] : NaN;
        };
      }
      var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
      function weeks() {
        return absFloor(this.days() / 7);
      }
      var round = Math.round, thresholds = {
        ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
w: null,
M: 11
};
      function substituteTimeAgo(string2, number, withoutSuffix, isFuture, locale2) {
        return locale2.relativeTime(number || 1, !!withoutSuffix, string2, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
        var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a2 = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
        if (thresholds2.w != null) {
          a2 = a2 || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
        }
        a2 = a2 || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
        a2[2] = withoutSuffix;
        a2[3] = +posNegDuration > 0;
        a2[4] = locale2;
        return substituteTimeAgo.apply(null, a2);
      }
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === void 0) {
          return round;
        }
        if (typeof roundingFunction === "function") {
          round = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === void 0) {
          return false;
        }
        if (limit === void 0) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
          thresholds.ss = limit - 1;
        }
        return true;
      }
      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds, locale2, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale2 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale2);
        if (withSuffix) {
          output = locale2.pastFuture(+this, output);
        }
        return locale2.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign(x2) {
        return (x2 > 0) - (x2 < 0) || +x2;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s2, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes2 = absFloor(seconds2 / 60);
        hours2 = absFloor(minutes2 / 60);
        seconds2 %= 60;
        minutes2 %= 60;
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        s2 = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign(this._months) !== sign(total) ? "-" : "";
        daysSign = sign(this._days) !== sign(total) ? "-" : "";
        hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
        return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s2 + "S" : "");
      }
      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        toISOString$1
      );
      proto$2.lang = lang;
      addFormatToken("X", 0, 0, "unix");
      addFormatToken("x", 0, 0, "valueOf");
      addRegexToken("x", matchSigned);
      addRegexToken("X", matchTimestamp);
      addParseToken("X", function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      });
      addParseToken("x", function(input, array, config) {
        config._d = new Date(toInt(input));
      });
      hooks.version = "2.30.1";
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "GGGG-[W]WW",
MONTH: "YYYY-MM"
};
      var _sfc_main80 = vue.defineComponent({
        name: "Delete",
        __name: "delete",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
            })
          ]));
        }
      }), delete_default = _sfc_main80;
      var _sfc_main201 = vue.defineComponent({
        name: "Plus",
        __name: "plus",
        setup(__props) {
          return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [
            vue.createElementVNode("path", {
              fill: "currentColor",
              d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
            })
          ]));
        }
      }), plus_default = _sfc_main201;
      const _hoisted_1 = { style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "gap": "10px" } };
      const _hoisted_2 = { style: { "margin-bottom": "10px" } };
      const _sfc_main$2 = vue.defineComponent({
        __name: "WorkflowDialog",
        setup(__props, { expose: __expose }) {
          const state = vue.reactive({
            visible: false,
keywords: "",
            form: {
              common: "帮我生成图片：图片风格为「电影写真」，比例 「9:16」",
              list: []
            },
running: false,
            shouldStop: false
          });
          const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));
          const addKeywords = () => {
            if (state.keywords.trim()) {
              const keywordsArray = state.keywords.split("\n").filter((keyword) => keyword.trim() !== "");
              keywordsArray.forEach((keyword) => {
                state.form.list.push({
                  desc: keyword.trim()
                });
              });
              state.keywords = "";
            }
          };
          const start = async () => {
            state.visible = false;
            state.running = true;
            state.shouldStop = false;
            try {
              for (const item of state.form.list) {
                if (state.shouldStop) break;
                await startDraw(item.desc);
              }
            } finally {
              state.running = false;
              state.shouldStop = false;
            }
          };
          const stop = () => {
            state.shouldStop = true;
          };
          const startDraw = async (desc) => {
            if (!desc) return;
            await waitForElement('[data-testid="create_conversation_button"]').then((ele) => ele.click());
            await sleep();
            await waitForElement('[data-testid="chat_input_input"]').then((ele) => {
              setReactInputValue(ele, state.form.common + "\n" + desc);
            });
            await sleep();
            await waitForElement('[data-testid="chat_input_send_button"]').then((ele) => ele.click());
            const imgList = await waitForNewImageLoaded();
            await sleep();
            await changeTitle(desc);
            await sleep();
            for (const thumb of imgList) {
              thumb.click();
              await waitForAttrChange('[data-testid="in_painting_picture"]', (ele) => ele?.getAttribute("src") || "").then((src) => {
                const filename = `${desc}_${hooks().format("MMDD_HHmmss")}.png`;
                downloadImage(src, filename);
              });
              await sleep();
            }
          };
          const waitForNewImageLoaded = async (timeout = 60) => {
            const initialCount = document.querySelectorAll('[data-testid="message_image_content"]').length;
            for (let i = 0; i < timeout; i++) {
              const imgList = document.querySelectorAll('[data-testid="message_image_content"]');
              if (imgList.length > initialCount) {
                const lastImgContainer = imgList[imgList.length - 1];
                const imgs = lastImgContainer.querySelectorAll('img[alt="image"]');
                if (imgs.length > 0) {
                  return Array.from(imgs);
                }
              }
              await sleep(1e3);
            }
            throw new Error("Timeout: No new image loaded.");
          };
          const waitForAttrChange = async (selector, attrGetter, timeout = 60) => {
            const attr = attrGetter(document.querySelector(selector));
            for (let i = 0; i < timeout; i++) {
              const newAttr = attrGetter(document.querySelector(selector));
              if (newAttr !== attr) {
                return newAttr;
              }
              await sleep(1e3);
            }
            throw new Error("Timeout: Image src not updated.");
          };
          const downloadImage = async (url, filename) => {
            try {
              const response = await fetch(url);
              const blob = await response.blob();
              const downloadUrl = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = downloadUrl;
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(downloadUrl);
            } catch (error) {
              console.error("下载图片失败:", error);
            }
          };
          const changeTitle = async (desc) => {
            await waitForElement(".truncate").then((ele) => ele.click());
            await waitForElement('[data-testid="edit_conversation_dialog_name_input"]').then((ele) => {
              setReactInputValue(ele, desc);
            });
            await sleep();
            await waitForElement('[data-testid="edit_conversation_dialog_confirm_button"]').then((ele) => ele.click());
          };
          const show = () => {
            state.visible = true;
          };
          const addRow = () => {
            state.form.list.push({
              desc: ""
            });
          };
          const deleteRow = (index) => {
            state.form.list.splice(index, 1);
          };
          const clearTable = () => {
            state.form.list = [];
          };
          __expose({
            show
          });
          return (_ctx, _cache) => {
            const _component_ElInput = ElInput;
            const _component_ElFormItem = ElFormItem;
            const _component_el_input = ElInput;
            const _component_el_button = ElButton;
            const _component_el_form = ElForm;
            const _component_el_icon = ElIcon;
            const _component_el_table_column = ElTableColumn;
            const _component_el_table = ElTable;
            const _component_el_dialog = ElDialog;
            return vue.openBlock(), vue.createBlock(_component_el_dialog, {
              modelValue: state.visible,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.visible = $event),
              title: "工作流",
              draggable: "",
              modal: false
            }, {
              footer: vue.withCtx(() => [
                vue.createVNode(_component_el_button, {
                  type: "primary",
                  onClick: start,
                  loading: state.running
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(state.running ? "运行中..." : "确定"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"]),
                state.running ? (vue.openBlock(), vue.createBlock(_component_el_button, {
                  key: 0,
                  onClick: stop,
                  type: "danger"
                }, {
                  default: vue.withCtx(() => [..._cache[7] || (_cache[7] = [
                    vue.createTextVNode("停止", -1)
                  ])]),
                  _: 1
                })) : vue.createCommentVNode("", true)
              ]),
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_form, {
                  ref: "form",
                  model: state.form,
                  "label-width": "80px",
                  style: { "padding-bottom": "20px" }
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_ElFormItem, { label: "公共描述" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_ElInput, {
                          modelValue: state.form.common,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.form.common = $event),
                          placeholder: "请输入描述"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_ElFormItem, { label: "关键词" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_el_input, {
                          modelValue: state.keywords,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.keywords = $event),
                          type: "textarea",
                          rows: 3,
                          placeholder: "请输入关键词，每行对应一条",
                          style: { "flex": "1", "margin-right": "20px" }
                        }, null, 8, ["modelValue"]),
                        vue.createElementVNode("div", _hoisted_1, [
                          vue.createVNode(_component_el_button, {
                            onClick: addKeywords,
                            type: "primary"
                          }, {
                            default: vue.withCtx(() => [..._cache[3] || (_cache[3] = [
                              vue.createTextVNode("插入表格", -1)
                            ])]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                vue.createElementVNode("div", _hoisted_2, [
                  vue.createVNode(_component_el_button, {
                    onClick: addRow,
                    type: "primary"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_icon, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(plus_default))
                        ]),
                        _: 1
                      }),
                      _cache[4] || (_cache[4] = vue.createElementVNode("span", null, "新增一条", -1))
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_el_button, { onClick: clearTable }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_icon, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(delete_default))
                        ]),
                        _: 1
                      }),
                      _cache[5] || (_cache[5] = vue.createElementVNode("span", null, "清空表格", -1))
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode(_component_el_table, {
                  data: state.form.list,
                  border: true
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_table_column, {
                      label: "描述",
                      align: "center"
                    }, {
                      default: vue.withCtx(({ row }) => [
                        vue.createVNode(_component_el_input, {
                          modelValue: row.desc,
                          "onUpdate:modelValue": ($event) => row.desc = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_el_table_column, {
                      label: "操作",
                      width: "200px",
                      align: "center"
                    }, {
                      default: vue.withCtx(({ $index }) => [
                        vue.createVNode(_component_el_button, {
                          type: "danger",
                          onClick: ($event) => deleteRow($index)
                        }, {
                          default: vue.withCtx(() => [..._cache[6] || (_cache[6] = [
                            vue.createTextVNode("删除", -1)
                          ])]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["data"])
              ]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });
      const _sfc_main$1 = vue.defineComponent({
        __name: "BatchButton",
        setup(__props) {
          const dialogRef = vue.ref();
          const handleClick = () => {
            dialogRef.value?.show();
          };
          return (_ctx, _cache) => {
            const _component_el_button = ElButton;
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              vue.createVNode(_component_el_button, { onClick: handleClick }, {
                default: vue.withCtx(() => [..._cache[0] || (_cache[0] = [
                  vue.createTextVNode("批量生成", -1)
                ])]),
                _: 1
              }),
              vue.createVNode(_sfc_main$2, {
                ref_key: "dialogRef",
                ref: dialogRef
              }, null, 512)
            ], 64);
          };
        }
      });
      const _sfc_main = vue.defineComponent({
        __name: "App",
        setup(__props) {
          return (_ctx, _cache) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$1);
          };
        }
      });
      function insertApp() {
        const app = document.createElement("div");
        const targetElement = document.querySelector('[data-testid="workspace_icon"]');
        if (targetElement && targetElement.parentNode) {
          targetElement.parentNode.insertBefore(app, targetElement.nextSibling);
        } else {
          document.body.append(app);
        }
        return app;
      }
      const appContainer = insertApp();
      const interval = setInterval(() => {
        const targetElement = document.querySelector('[data-testid="workspace_icon"]');
        if (targetElement && targetElement.parentNode) {
          if (appContainer.parentNode) {
            appContainer.parentNode.removeChild(appContainer);
          }
          targetElement.parentNode.insertBefore(appContainer, targetElement.nextSibling);
          clearInterval(interval);
        }
      }, 500);
      setTimeout(() => clearInterval(interval), 1e4);
      vue.createApp(_sfc_main).mount(appContainer);
    }
  });
  require_main_001();

})(Vue);