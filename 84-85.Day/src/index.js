/** @format */
import { sayHello } from './hello';
import _ from 'lodash';

console.log('I love webpack');
console.log(sayHello);

const me = ['John', 'Maina', 'Ndegwa'];
const name = _.join(me, ' ');

sayHello('Hello, there', name);
