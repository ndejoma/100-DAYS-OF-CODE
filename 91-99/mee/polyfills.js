"use strict";

require("core-js/modules/esnext.array.group-by.js");

/** @format */
//import 'core-js/actual/array/group-by';    // <- at the top of your entry point
console.log([1, 2, 3, 4, 5].groupBy(it => it % 2)); // => { '0': [ 2, 4 ], '1': [ 1, 3, 5 ] }