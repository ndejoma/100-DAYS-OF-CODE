"use strict";

require("core-js/modules/esnext.array.group-by.js");

/** @format */
//Uncomment this line if the @babel/preset-env is set  useBuiltsIns: "entry"
//if it useBuiltsIns: 'usage' Babel will load the rquired polyfills if they are found within your code
//import 'core-js/actual/array/group-by';    // <- at the top of your entry point
console.log([1, 2, 3, 4, 5].groupBy(function (it) {
  return it % 2;
})); // => { '0': [ 2, 4 ], '1': [ 1, 3, 5 ] }