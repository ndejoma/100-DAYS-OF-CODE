/** @format */
import _ from 'lodash';
import numRef from './numRef.json';

// export function numToWord (num) {
//     return _.reduce( numRef, ( acc, curr ) => {
//          return
//      })
// }

export function numToWord(num) {
	return _.reduce(
		numRef,
		(acc, curr) => {
			return curr.num === num ? curr.word : acc;
		},
		''
	);
}

numToWord(5);

export function wordToNumber(word) {
	return _.reduce(
		numRef,
		(acc, curr) => {
			return curr.word.toLowerCase() === word ? curr.num : acc;
		},
		-1
	);
}

console.log(wordToNumber('three'));

class Person {
	#name;
	constructor(props) {
		this.#name = props.name;
	}
	#getName() {
		return this.#name;
	}
	sayName() {
		console.log(this.#getName());
	}
}

console.log(new Person({ name: 'John Maina' }).sayName());
