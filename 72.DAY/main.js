/** @format */
// import from module.js
import UserHere, {
	day,
	Person,
	logDay as logDayFn,
	logMessage,
	message,
	sayPerson as logPerson
} from './modules.js';
import * as importObj from './modules.js';

// call the function log Day
logDayFn(day); // This is day 72 of 100 Days of code

const person = new Person({ name: 'John Doe' });
console.log(person.name); // John Doe

//log the message
logMessage(message); // The message is I am in day 72

//log the object here
console.log(importObj); /**
Module {…}
Person: (...)
day: (...)
logDay: (...)
logMessage: (...)
message: (...)
Symbol(Symbol.toStringTag): "Module"
**/
// We can call the logDay ith our message from the object
console.log(importObj.logDay(importObj.day)); // This is day 72 of 100 Days of code

//log the person's name
logPerson(person.name);

//create a new user
const user = new UserHere({ name: 'Jane Doe', password: '03939mmmmr' });
console.log(user.name)//Jane Doe