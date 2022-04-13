/**
 * The JavaScript DOM
 *
 * @format
 */

const h1 = document.createElement('h1');
const svg = document.createElement('svg');
h1.title = 'heading';
console.dir(h1);

const text = document.createTextNode('Day 50');

//create a comment node
const comment = document.createComment('my comment');

console.dir(svg);
console.dir(document);
console.dir(text); //#text

console.dir(comment);

console.log(h1.constructor.name);//HTMLHeadingElement