/**
 * Event delegation
 *
 * @format
 */

/***
 The DOM level 2 specifies that an event flow has three phases
  1. Capturing phase -> which provides an opportunity to intercept the event before it reaches its target
  2. Target phase -> this where the actual target receives the event
  3. Bubbling phase -> which provide an opportunity to intercept the event as is goes up to ancestors of the target element.
  NB: Event bubbling and capturing will only happen if the element and all its ancestors have the same listener. eg click
  NB: Modern browsers bubble the event to the Window object , the path is store in the event.path
 */

const nav = document.querySelector('nav');

//We could add an event listener to all nav links by loop over them
// const allNavLinks = nav.querySelectorAll('li > a');
// console.log(allNavLinks);

// //we can add event listener to all navLInks by looping over them
// allNavLinks.forEach(navLink => {
// 	navLink.addEventListener('click', e => {
// 		//prevent default browser behavior when you click on a link
// 		e.preventDefault();
// 		console.log(e.target.closest('.nav-links'));
// 	});
// });

//We can refcator the above to use event delegation which is mote efficient than adding an event handler to the links

//In this case we will use the parent as the nav itself and attach an event handler to it
nav.addEventListener('click', event => {
	//prevent default browser behavior
	event.preventDefault();
	//clicked the code if it is the a tag that has been clicked
	const targetEl = event.target;
	//check if the target is the anchor tag and run the code inside
	if (targetEl.classList.contains('nav-link')) {
		//ge the id from the href attribute
		const sectionId = targetEl.getAttribute('href');

		//scroll to the section with given id a smooth scroll
		const section = document.querySelector(sectionId);

		//scroll to the given section with a smmoth animation transition
		section.scrollIntoView({ behavior: 'smooth' });
	}
});
