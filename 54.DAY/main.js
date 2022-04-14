/**
 * The JavaScript DOM
 *
 * @format
 */
/***
 * Modifyibg the DOM
 */

/***
 * Modifying the DOM
 * It is the Key to creating live pages
 * Creating new elemens on the fly
 * Modifying existing pages
 */

//Modifying the DOM
const getCurrentYear = () => {
	return new Date().getFullYear();
};
const footer = document.querySelectorAll('footer');
console.log(footer);
//select all year spans
const yearSpans = document.querySelectorAll('span.year-span');
console.log(yearSpans);

yearSpans.forEach(yearSpan => {
	yearSpan.innerText = `${getCurrentYear()}`;
});

// Day of 53 assignment
const linksList = document.querySelector('#links-list');
console.log(linksList);

const allLinks = linksList.querySelectorAll('li > a');

//check if the links is a http or an external link
allLinks.forEach(link => {
	//only style the link with //
	if (link.innerText.includes('//')) {
		//style the links with the //
		link.style.color = 'yellow';
		console.log(link.innerText);
	}
});

//Creating new elements as node
const div = document.createElement('div');
console.dir( div );


//How do we insert elements into the DOM

