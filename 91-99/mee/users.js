"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var url = 'https://jsonplaceholder.typicode.com/users';
var response = await fetch(url);
var users = await response.json();
exports.users = users;