/** @format */

console.log('I am in the index');

const logDay = day => {
	return day ?? 20;
};

logDay(30);

const logName = name => {
	console.log(name);
};
logName('I am john maina');

/**
 * Using the spread operator in an object
 *
 */

const personAgeMate = {
	age: 22,
	class: 5,
	birthPlace: 'Nyahe'
};

const me = {
	...personAgeMate,
	name: 'John Maina',
	hobby: 'Coding'
};

/***
 * classes
 */
class Person {
	constructor(props) {
		this.name = props.name;
		this.age = props.age;
	}
}

/***
 * using async await
 */

const getProducts = async () => {
	const res = await Promise.resolve('John');
	console.log(res);
};

getProducts();
