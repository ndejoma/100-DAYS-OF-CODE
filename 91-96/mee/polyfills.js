"use strict";

require("core-js/modules/web.timers.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.set.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.error.to-string.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/web.dom-exception.constructor.js");

require("core-js/modules/web.dom-exception.stack.js");

require("core-js/modules/web.dom-exception.to-string-tag.js");

require("core-js/modules/web.structured-clone.js");

require("core-js/modules/web.queue-microtask.js");

require("core-js/actual");

/** @format */
// <- at the top of your entry point
setTimeout(function () {
  console.log('I run last');
}, 0);
console.log(Array.from(new Set([1, 2, 3, 2, 1]))); // => [1, 2, 3]

console.log([1, 2, 3, 4, 5].groupBy(function (it) {
  return it % 2;
})); // => { 1: [1, 3, 5], 0: [2, 4] }

console.log(Promise.resolve(42).then(function (x) {
  return console.log(x);
})); // => 42

structuredClone(new Set([1, 2, 3])); // => new Set([1, 2, 3])

queueMicrotask(function () {
  return console.log('called as microtask');
});