/**
 * The event object
 *
 * @format
 */
//get all the main
const main = document.querySelector('.container');
console.log(main);
//evenets propgation and bubbling
const divs = main.querySelectorAll('.div');
console.log(divs);

//add the background clor
divs.forEach(div => {
	const color = div.dataset.backColor;
	// add the color
	div.style.backgroundColor = color;
});

//store the highlighted here
let highLighted;

// add the event listener to the event
main.addEventListener('click', event => {
	//check if highlighted is present and remove the class of highlight
	if (highLighted) {
		highLighted.classList.remove('highlight');
	}
	const targetDiv = event.target.closest('.div');
	// guard clause if null return
	if (!targetDiv) return;
	// add the class of highlight

	//set the highlightted to be the current div
	highLighted = targetDiv;

	//the add the class of hightlight
	highLighted.classList.add('highlight');
	console.log('*******');
});

/***
 * Loading action using menu
 */

const menu = document.querySelector('#menu');

class Menu {
	constructor(elem) {
		this._elem = elem;
		console.dir(this._elem.onClick, 'Before binding');
		// console.log(this);
		this._elem.onclick = this.onClick.bind(this); // (*)
		console.log(this);
		console.dir(this._elem.onClick, 'After binding');
	}
	save() {
		alert('saving');
	}
	load() {
		alert('loading');
	}
	search() {
		alert('searching');
	}
	onClick(event) {
		let action = event.target.dataset.action;
		if (action) {
			this[action]();
		}
	}
}
new Menu(menu);

//selct the div with id messages
const messagesContainer = document.querySelector('#messages');
console.log(messagesContainer);

//add an event listener to the div with id messages
messagesContainer.addEventListener('click', event => {
	const closeBtn = event.target.closest('.close');
	console.log(closeBtn);
	//implement  a guard clause if the target is not the close button return
	if (!closeBtn) return;

	//get the the div with a class of message
	const messageDiv = closeBtn.closest('.message');
	console.log(messageDiv);
	//add a class of hidden to the message div
	messageDiv.classList.add('hidden');
});

//select the link with an id of home
const linkHome = document.querySelector('#home');

//add the event listener
linkHome.addEventListener('click', event => {
	//prevent the default browser behavior of going to the URL
	event.preventDefault();
	//we can get the current window location
	const linkLocation = event.target.href;

	//set the location of the window manually using JavaScript
	window.location.href = linkLocation;
});

/***
 * Handling the onForm submit event
 */

const form = document.querySelector('form#form');
console.log(form);

//listen to the submit event inside the form
form.addEventListener('submit', event => {
	//prevent the default form submission
	event.preventDefault();
	//now let us handle the  submit using JavaScript
	console.dir(event.target);
});

//get the mouse-down prevent
//NB: Don't use such a method to prevent your users from copying text on your website
const textBlock = document.querySelector('#mouse-down');
textBlock.addEventListener('mousedown', e => {
	//prevnt default
	e.preventDefault();
	console.log(e.target);
});

