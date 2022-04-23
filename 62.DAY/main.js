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

// add the event listener to the event
main.addEventListener('click', event => {
	console.log(event.target);
});
