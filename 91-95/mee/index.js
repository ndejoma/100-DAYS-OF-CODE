"use strict";

require("core-js/modules/es.promise.js");

require("core-js/stable");

var _regeneratorRuntime = require("regenerator-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('I am in the index');

const logDay = day => {
  return day !== null && day !== void 0 ? day : 20;
};

logDay(30);

const logName = name => {
  console.log(name);
};

logName('I am john maina');
/**
 * Using the spread operator in an object
 *
 */

const personAgeMate = {
  age: 22,
  class: 5,
  birthPlace: 'Nyahe'
};

const me = _objectSpread(_objectSpread({}, personAgeMate), {}, {
  name: 'John Maina',
  hobby: 'Coding'
});
/***
 * classes
 */


class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
  }

}
/***
 * using async await
 */


const getProducts = async () => {
  const res = await Promise.resolve('John');
  console.log(res);
};

getProducts();