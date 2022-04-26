/**
 * Page load Events
 *
 * @format
 */
/***
 * Scroll event
 */

//get the nav wtih a class of .nav
const nav = document.querySelector('.nav');

//get the height of the nav
const navHeight = nav.getBoundingClientRect().height;

//adding the document scroll
window.addEventListener(
	'scroll',
	event => {
		//add the class of sticky if the scrollY or pageYOffset is higher than the navHeight
		if (scrollY > navHeight) {
			nav.classList.add('sticky');
		}
		//if the scrollYheight is less than navHeight remove the class of sticky
		else {
			nav.classList.remove('sticky');
		}
	},
	{
		passive: true
	}
);

/***
 * Implement the scroll Into view feature
 * It uses event delegation
 * Implemented a smooth scroll behavior
 */
//select the ul containing the nav-links, it is the common ancestor in this case
const ul = nav.querySelector('.nav-links');
console.log(ul);

//listen to the click event as it bubbles from the links
ul.addEventListener('click', event => {
	//prevent default browser behavior
	event.preventDefault();
	//check if the link is our target
	const isLink = event.target.classList.contains('nav-link');

	//if isLink continue executing the code
	if (isLink) {
		//get the link
		const target = event.target;
		//get the href attribure value in our case it is the section id
		const sectionId = target.getAttribute('href');
		//get the section with that id
		const section = document.querySelector(sectionId);
		//scroll to the section with the given id
		section.scrollIntoView({ behavior: 'smooth' });
	}
});
