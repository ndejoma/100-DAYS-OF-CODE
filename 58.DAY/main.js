/**
 * Elements sizing and scrolling
 *
 * @format
 */

/***
 ***** Browser events in JavaScript
 ** Browser events
 ** Event properties
 ** Handling patterns
 ***Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.
 For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box
 */

//Event - a signal that something has happened. All DOM nodes generates such events.

/***
 * * A list of most useful DOM events
 */

/***
 ** 1. Mouse events
 */

//click -> when an element is clicked ot tapped
//mouseover/mouseout -> when you move the mouse over or leaves an element
//mousedown/mouseup -> when the mouse button is pressed/released over an element
//mousemove - happens when the mouse is moved

/***
 ** 2. Form events
 */

//submit -> when the visitor submits a form
//focuse -> when a form element comes to focus

/***
 ** 3. Keyboard events
 */

//kedown and keyup -> when user presses and releases a key on the keyboard

/****
 ** 4. Document events
 */

//DOMContentLoaded -> happens the HTML has been full parsed, and the DOM is fully built.

/***
 ** Event handlers*****************************
 * A handler is a function that runs when a certain event is emitted
 * It is a away to run JavaScipr code incase of a user action
 *
 * There ae several ways to assign a handler function
 */

/**
 * HTML attribute
 * A handler can be set in HTML with an attribute name on<event>
 * <button onclick="function(){ console.log('I have be clicked)}"
 */
const btn2 = document.querySelector('#btn2');
console.log(btn2);

//add the handler
const clickHandler = function () {
	console.log('I run on click of the button');
};

//assgin the handelr to the button
btn2.onclick = clickHandler;

/***
 * Using element.addEventHandler
 */
//select the button
const btnMe = document.querySelector('#mybtn');
console.log(btnMe);

//add the handler
btnMe.addEventListener('click', () => {
	console.log('I have been clicked');
});

//we can also add another event handler
btnMe.addEventListener('click', function () {
	console.log(this);
	console.log('I have been clicked, what the hell is this???', this);
});
