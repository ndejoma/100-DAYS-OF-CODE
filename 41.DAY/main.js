/***
 * JavaScript is not a true Object-Oriented Programming langauge, but a Prototype bases langugae
 */

//the [[Prototype]] for an object, we create
const obj = {};
//accessing the protoype of the Object above
console.log( obj.__proto__ );/*
{constructor: ƒ, __defineGetter__: ƒ, …}
*/
//logging the prototype obj.__proto__
console.log( obj.__proto__.__proto__ ); //null