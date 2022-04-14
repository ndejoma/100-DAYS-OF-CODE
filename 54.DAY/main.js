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
// const header = document.getElementById('header');
// console.log(header); //<header id='header'>...</header>

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
console.dir(a.insertAdjacentElement);

console.dir(document);

/***
 * Attributes
 */

const input = document.body.querySelector('input');
console.log(input.hasAttribute('text')); //true
console.dir(input.id); //''
//set the id
input.setAttribute('id', 'search');

//chanhe the id
input.id = 'Youuuu';
//log the id value
console.dir(input.id);

//log the value
console.log(input.value); //''

//set the value of the input
input.setAttribute('value', 'Hmmmmm!!!!');
console.log(input.value); //Hmmmm
//but  you cannot set the value directly
//BUG
input.value = "Doesn't get set";

//log the value using getAtttribute
//No synchronization
console.log(input.getAttribute('value'));

console.dir(input);

const personDataDiv = document.querySelectorAll('div[data-person]');
console.log(personDataDiv);

const colors = ['green', 'yellow', 'purple', 'dodgerblue', 'fuchsia'];

personDataDiv.forEach(personData => {
	//set eeach color of the person data
	personData.style.color = colors[personData.dataset.person - 1];
	console.log(personData.style.color);
});

//select the data
const cartStatusMessage = document.querySelector('div.order[data-order-state');
console.log(cartStatusMessage);

//change the status of the order randomly
const randomNo = max => {
	//generete a max number upto
	return Math.floor(Math.random() * 3);
};

console.log(randomNo(3));

const orderStatuses = ['new', 'pending', 'cancelled'];

//style the first status randomnly
cartStatusMessage.dataset.orderState = orderStatuses[randomNo(3)];
//create a function to get the currentYear
const getCurrentYear = () => {
	return new Date().getFullYear();
};
const footer = document.querySelectorAll('footer');
console.log(footer);
//select all year spans
const yearSpans = document.querySelectorAll('span.year-span');
console.log( yearSpans );

yearSpans.forEach(yearSpan => {
	yearSpan.innerText = `${getCurrentYear()}`;
});


/**
 * Day 53: Data attributes in HTML documents.
All attributes starting with "data-" are reserved for programmers. They are available in the dataset property of the respective nodes. Data attributes are used to pass custom data from HTML  or mark HTML- elements for JavaScript.

//we can access elements from a page using their dataset values
//Consider this HTML snippet
   <section id="persons">
     	<p data-person="1">Person 1</p>
		<p data-person="2">Person 2</p>
		<p data-person="3">Person 3</p>
		<p data-person="4">Person 4</p>
		<p data-person="5">Person 5</p>
  </section>

//select the section with id of persons
const personsSection = document.querySelector('#persons')


 const persons = personsSection.querySelectorAll('p[data-person]');

 //arrays of colors to style each person
 const colors = ['green', 'yellow', 'purple', 'dodgerblue', 'fuchsia'];
 

 persons.forEach(person => {
     //set each color of the person data
     //subtract 1 to match the array index
     person.style.color = colors[person.dataset.person - 1];
 });
 */