/**
 * The event object
 *
 * @format
 */

const btn = document.querySelector('#btn');
const divText = document.querySelector('#text');
console.log(btn);

// //event handler
// const handleClick = function (event) {
// 	console.log(event.currentTarget); //<button id="btn">Click Me!!! H</button>
// 	console.log(this); //<button id="btn">Click Me!!! H</button>
// 	console.log(event); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, ...}e
// 	//log the coordinates of the mursor where the mouse clicked
// 	console.log(`The mouse clicked X:${event.clientX}, Y:${event.clientY}`);//The mouse clicked X:68, Y:25
// 	console.log(`The type of the event is ${event.type}`);//The type of the event is click
// };

//add the eventlistenr and event hanlder
btn.addEventListener('click', e => {
	//hide or show the div#text
	divText.classList.toggle('hidden');
});
