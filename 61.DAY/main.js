/**
 * The event object
 *
 * @format
 */
//evenets propgation and bubbling
const nav = document.querySelector('#nav');
const anchorTag = document.querySelector('a');

//run the hanlder on click of the anchor tag
// anchorTag.addEventListener('click', event => {
// 	event.stopPropagation(); //the event doesn't bubble
// 	console.log(event.target);
// });
// //add an event handler to the click event on the nav
// console.log(nav);

// nav.addEventListener(
// 	'click',
// 	e => {
// 		console.log(e);
// 		//important is the path taken by the event as it bubbles
// 		console.log(e.path); //[a, li, ul, nav#nav, body, html, document, Window]
// 		//confirm is the event bubbles by logging to the console
// 		console.log(e.bubbles); //true
// 	},
// 	{
// 		capture: true
// 	}
// );

/**8
 * Bubbling and capturing in action
 *We can capture the event in the capturing phase and run a handler on it by setting capture to be true
 useCa
 */

//select all elements on the page
const allElements = document.querySelectorAll('*');
console.log(allElements);

//capturing and bubbling events
for (let el of allElements) {
	//the event with capture
	el.addEventListener(
		'click',
		event => {
			console.log(`Capturing: ${event.eventPhase}`); // Capturing: [object PointerEvent]
		},
		true
	);
	//the bubbling after the target phase
	el.addEventListener('click', event => {
		console.log(`Bubbling: ${event.eventPhase}`); // Bubbling: [object PointerEvent]
	});
}

/***
 * Day 60: Events Propagation: Bubbling and Capturing
A standard DOM element has three phases of events propagation
 a. Capturing phase -> events goes down to the target element
 b. Target phase -> The event reached the target element
 c. Bubbling -> the event bubbles up from the element.
 
		<nav id="nav" onclick="console.log('nav')">
		<ul onclick="console.log('ul')">
			<li onclick="console.log('li')">
					<a href="#" onclick="console.log('a')">
				  Link 1
				</a>
			</li>
		</ul>
	</nav>

1. Event Bubbling
When an events happens on a target element, it first runs on the handlers on that element, then that element's parents,and all they way through its other ancestors. By default events will be handled at the target phase or bubbling phase.

//In the above example a click on inner <a> first runs it onclick
1. The handler on <a> is run first
2. Then on the the <li>
3. Then on the <ul>target phase
4. Then on the <nav>
5. The so upwards until the document object

Almost all events bubble, you can check if an event bubbles in the event object passed to the handler.
//select the nav and add a hanlder to handle the click
document.querySelector('#nav').('click', (event) => {
console.log(event.bubbles);//true
})


2. Event Capturing
It is rarely used in real code, but sometime it is very useful. In our example above, if we click on the <a>, the event will first moves from the document root to the target element. In this case the path will be document -> <html> -> <body> -> <nav> -> <ul> -> <li> -> <a>(target phase)
To cacth an event on the capture phase we must set the hander capture to true
//add an event listener to the <a> with capturing set to true
document.querySelector('li > a').('click', (event) => {
console.log(event.eventPhase);//1 Capturing = 1
}, {capture: true})


3. Event target phase
The target element which received the event. In a handler event object, the event.target will always point to the element that received the event.
 */
