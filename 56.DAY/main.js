/**
 * The JavaScript DOM
 *
 * @format
 */
/***
 * Styles and Classes
 */
const heading = document.querySelector('.heading');
console.log(heading.className); //heading me
//add a class of yellow
heading.classList.add('yellow');
console.log(heading.classList); //

//elem.style
document.body.style.display = 'none';
//setTimeout
setTimeout(() => {
	document.body.style.display = '';
}, 2000);

//store the class
const para = document.querySelector('#para');
console.log(para);
//set stylles using element .style
para.style.textAlign = 'center';
//addding styles to to the style
para.setAttribute(
	'style',
	'color: dodgerblue; textAlign: center; fontSize:  24px'
);
para.style.cssText =
	'color: dodgerblue; fontSize:  24rem; backgroundColor: pink';
//using style.cssText
console.dir(para);

const headingComp = getComputedStyle(heading);
console.log(headingComp); //{...}

//select the main
const main = document.querySelector('.main');
console.log(main);
//select the div
const div = main.querySelector('div');
//creeate the function to show notifications
const showNotication = ({ top, right, message, className }) => {
	div.style.cssText = `top: ${top}px; right: ${right}px;`;
	div.classList.add(className);
	div.classList.add('green');
	div.innerText = message;
};

const items = {
	top: 10,
	right: 10,
	message: 'Hello there, welcome!!!',
	className: 'welcome'
};

showNotication(items);
