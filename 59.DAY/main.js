/**
 * The event object
 *
 * @format
 */

//select the button with a class of
const btn = document.querySelector('.btn');
const colorName = document.querySelector('.color');

//create a function to generate random color in rgb(r, g, b) between 0 and 255
const randomNo = max => {
	return Math.floor(Math.random() * max);
};

//rest random generation between 0 and 1o that is 0-9
// console.log(randomNo(10));

//create a function to get randomColor
const getRandomColor = () => {
	const r = randomNo(255);
	const g = randomNo(255);
	const b = randomNo(255);
	//return rgb format
	return `rgb(${r},${g},${b})`;
};

//create a function to render the color
const renderColor = (targetElement = document.body, colorNameCont) => {
	const color = getRandomColor();
	//set the body to the generated random color
	targetElement.style.backgroundColor = color;
	//set the name to be the current color
	colorNameCont.innerText = color;
};

//generate the random Color on the click of the button
btn.addEventListener('click', () => {
	renderColor(document.body, colorName);
});
