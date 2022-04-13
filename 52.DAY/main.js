/**
 * The JavaScript DOM
 *
 * @format
 */
/***
 * Searching elemement in the DOM
 */

//1.document.getElementById or Just id -> it finds the elements by its id, which should be unique per page
//selecting the element with an id of header
const header = document.getElementById('header');
console.log(header); //<header id='header'>...</header>

//2. elem.querySelector(csssselector) -> any css selector is valid
//return the first element found for the given selector
const navBar = document.querySelector('.nav-links');
console.log(navBar); //<nav class="nav-links" id="navbar">

//3. elem.querySelectorAll(CSSselector) -> returns inside the given element that match a given CSS selector
const navLinks = navBar.querySelectorAll('.nav-link');
console.log(navLinks); //NodeList(3) [li.nav-link, li.nav-link, li.nav-link]

//4.element.matches(CSSselector) -> returnns true or false by testing if an element matches a certain CSS selector
const isNav = navBar.matches('#navbar');
console.log(isNav); //true

//5.element.closest(CSSselector) -> looks for the nearest ancestor that matches a given CSS selector
//we can select the <header> which is an ancestor of the links
const link = navBar.querySelector('.nav-link > a');
const ancestor = link.closest('#header');
console.log(ancestor); //<header id='header'>...</header>

//6. Other types searching function include
//a.document.getElementsByTagName(tag eg p), select all the given tag names
//select all the paragraphs in a page returns HTML live collection
const paras = document.getElementsByTagName('p');
console.log(paras); //HTMLCollection []

//b. docum
console.log(navBar.getElementsByTagName('li'));

// console.log(header.getElementById('navbar'));

const myNavLinks = navBar.getElementsByClassName('nav-link');
console.log(myNavLinks); //[li.nav-link, li.nav-link,...]

const a = document.createElement('a');
console.dir(a);

console.dir(document);
