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
