/**
 * Elements sizing and scrolling
 *
 * @format
 */

const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
	console.log(header.getBoundingClientRect());
});



/***
 ***** Browser events in JavaScript
 ** Browser events
 ** Event properties
 ** Handling patterns
 ***
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





