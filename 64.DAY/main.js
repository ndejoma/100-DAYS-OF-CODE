/**
 * Page load Events
 *
 * @format
 */
//This events happen in sequence when you open a HTML page
/***
 * 1. DOMContentLoaded
 * The browser has fully loaded the HTML and completed builidng the DOM tree, but is hasn't laded external resources like stylesheets and images
 * At this point you can start applying JavaScript to elements on the page
 */

document.addEventListener('DOMContentLoaded', event => {
	console.log(event);
	console.log(
		'The DOM tree is built here, and scripts may block builidng of the DOM tree'
	);
});

/***
 * 2. load
 * It is rarely used, since we don't have to wait for that long to start manipulating the page using JS
 * At this the DOM is built, and all the resources(images and stylesheets) have been fully loaded.
 */

document.addEventListener('load', event => {
	console.log(
		'The DOM is built and all the resources have been fully loaded'
	);
});

//This events happen in sequence when you leave a page
/***
 * 3. beforeunload
 */

window.addEventListener('beforeunload', event => {
	//Trigger a confirmation to ask users if they are sure they want  to leave the page
	event.preventDefault();
	// Google Chrome requires returnValue to be set.
	event.returnValue = 'Are you sure you want to leave the page';
});

/***
 * 4.unload
 * The unload event is fired when the document or a child resource is being unloaded.
 * Avoid using this event as a developer
 */

window.addEventListener( 'unload', event => {
	//NB: Avoid using  this method
	//we can run code such as send the page's session analytic data
})
