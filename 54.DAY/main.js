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
console.dir(div);

//How do we insert elements into the DOM
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
div.className = ' alert alert-success';

//prepending the div to the document
document.body.prepend(div);

/***
 * elem.insertAdjacentHTML
 * beforebegin
 * beforeend
 * afterbeigin
 * afterend
 */
linksList.insertAdjacentHTML(
	'beforebegin',
	'<p>I am before begin of the ul</p>'
);
linksList.insertAdjacentHTML('afterbegin', '<p>I am after begin of the ul</p>');

linksList.insertAdjacentHTML(
	'beforeend',
	'<p>I am before begin  of the ul</p>'
);

linksList.insertAdjacentHTML('afterend', '<p>I am after the end of the ul</p>');

/***
 * Other shorter syntax are after, before, append and prepend, same as above
 */

/***
 * Cloning nodes: element.cloneNode(true)
 * Does a deep cloning of the given node with all its children
 */

const divCopy = div.cloneNode(true);
//apend the element after
div.after(divCopy);
console.log(divCopy);

//create a clone without children
//the children are not copies, just the elemnent itself
const div3 = div.cloneNode(false);
divCopy.after(div3);

//Document Fragment
const fragment = new DocumentFragment();
console.log(fragment); //#document-fragment
console.dir(fragment);

//remove a node from the documen
div3.remove(); //remove a node from the document

//create a text node
const text = document.createElement('maina');

text.append('dkdkkdkkdkdk');
console.log(text);
console.dir(text);

//append it to the body
document.body.prepend(text);
