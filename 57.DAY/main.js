/**
 * Elements sizing and scrolling
 *
 * @format
 */

// const divScroll = document.querySelector('#text');
// console.log(divScroll.offsetLeft); //32
// console.log(divScroll.offsetTop); //32

// console.dir(divScroll.offsetWidth); //390
// console.dir(divScroll.offsetHeight); //290

// //clientLeft and clientTop - the width of the border
// console.log(divScroll.clientTop); //25
// console.log(divScroll.clientLeft); //25
// console.log(divScroll.clientRight); //undefined
// console.log(divScroll.clientBottom); //undefined

// /***
//  * clientHeight and clientWidth
//  * They represent inside element borders content together with padding
//  */

// console.log(divScroll.clientWidth); //325 (300 + 25)
// console.log(divScroll.clientHeight); //225 (200+25)

// /***
//  * scrollHeight and scrollWidth
//  */
// console.log(divScroll.scrollWidth); //325
// console.log(divScroll.scrollHeight); //346

// /***
//  * scrollLeft and scrollHeight
//  */

// console.log(divScroll.scrollTop); //0 if the items insde are not scrolled
// console.log(divScroll.scrollTop); //0

// /***
//  * Window and scrolling
//  * document.documentElement is the window width and height
//  */

// const docEl = document.documentElement;
// console.log(docEl.clientWidth); //1366 if there is a scroobar the clientWdith is 1351 15 is off the scrollbar
// console.log(window.innerWidth); //1366 -> doesn't account the width of the scrollbar

// /***
//  * Getting the current scroll
//  *
//  */
// console.log(docEl.scrollTop); //0
// console.log(docEl.scrollLeft); //0

// document.addEventListener('scroll', () => {
// 	//commented oot for performance reasons
// 	// console.log(window.pageXOffset);
// 	// console.log(window.pageYOffset);
// });

document.addEventListener('click', () => {
	// window.scrollBy(0, 30);//scrolls the element by 30 for every click
	// window.scrollTo(0, 50);
});

//listen to the scroll event
document.addEventListener( 'scroll', () => {
	//
});
