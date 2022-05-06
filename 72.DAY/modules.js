/**
 * Exports and imports
 *
 * @format
 */

/***
 * a. Name exports
 */

// # 1. Exporrs before a declaration or statement

//exporting a varaible called day
export const day = 72;

//exporting a class
export class Person {
	constructor(props) {
		this.name = props.name;
	}
}

//exporting a function
export const logDay = day => {
	console.log(`This is day ${day} of 100 Days of code`);
};

// ## 2 Export after declarations

const logMessage = message => {
	console.log(`The message is ${message}`);
};

const message = 'I am in day 72';

//export the list of variables as an object
export { logMessage, message };

// ### 3 Export as export

//create a function logName and export it
const logName = name => {
	console.log(`The person's name is ${name}`);
};

export { logName as sayPerson }; // epxort the function logName with a differennt name

/***
 * b default exports
 */

//default exports
class Student {
	constructor(props) {
		this.name = props.name;
		this._password = props.password;
	}
}

export default Student;
