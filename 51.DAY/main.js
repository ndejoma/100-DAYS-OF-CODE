/**
 * The JavaScript DOM
 *
 * @format
 */

//All operations on the DOM start with the document object
console.dir(document); //#document
console.log(document); //#document

//the top most document's node is this, the node of the html tag
console.log(document.documentElement); //<html>...</html>
console.dir(document.documentElement); //html object

//document.doctype
console.dir(document.doctype); //<!DOCTYPE html>

//document.head
console.log(document.head); //<head>...</head>

//document.body
console.log(document.body); //<body>...</body>

//Children, parent, sibling
//in our case
//Children - direct children of  a specific element, in this case head and body are direct children of the html element
console.log(document.documentElement.children); //HTMLCollection(2) [head, body]

//Children, sbilings and Parents relationship
//logging the parentElement of document.body node
console.log( document.body.parentElement );//html

//logging the first elementChild of body
console.log( document.body.firstElementChild );//<main>...</main>

///logging yhe lastElement child of body
console.log( document.body.lastElementChild );//<script>...</script>

//log the children of the body
console.log( document.body.children );//HTMLCollection(2) [main, script]

//the element's sibling
console.log( document.body.previousElementSibling );//<head>...</head>

//log the value of nextElementSibling, since there are no sibling after body
console.log(document.body.nextElementSibling);//null
