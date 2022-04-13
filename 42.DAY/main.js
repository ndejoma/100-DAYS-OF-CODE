/***
 * JavaScript is not a true Object-Oriented Programming langauge, but a Prototype bases langugae
 */

//the [[Prototype]] for an object, we create
const obj = {};
//accessing the protoype of the Object above
console.log( obj.__proto__ );/*
{constructor: ƒ, __defineGetter__: ƒ, …}
*/
//logging the prototype obj.__proto__
console.log( obj.__proto__.__proto__ ); //null

/**8
 * Object.create(proto)
 * 
 */

const objMe = {
    name: 'Mainaa',
    birthYear: 1999
};


// create an object of person
const personActions = {
    getFullName () {
        return `${ this.firstName } ${ this.lastName }`;
    }
};



// create the function to create the person's object
function createPerson ( props ) {
    //create a person Object
    const personMe = Object.create( personActions );
    // log the value of personMe
    console.log( personMe );

    // add the props value to the object
    personMe.firstName = props.firstName;
    personMe.lastName = props.lastName;

    return personMe;
}

const propsForJohn = {
    firstName: 'John',
    lastName: 'Maina',
};
const johnObj = createPerson( propsForJohn );

//log the value of fullName of the person
console.log( johnObj.getFullName() );


// create a new object with the protoype pointing to objMe
const newMeObj = Object.create( objMe );
newMeObj.name = 'John';
console.log( newMeObj.name );
console.log( newMeObj );
/***
 * Using Function constructors
 * 1. You can use function declrations and Anonymous function expressions as function constructor, but never use Arrow functions as function constructors.
 */

function Person ( props ) {
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.birthYear = props.birthYear;
}



const propsForMe = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1998
};
const me = new Person( propsForMe );
console.log( me );



/***
 Day 42: OOP: Constructor functions.
We can create objects of the same type in JavaScript using Constructor functions and the new operator.
Constructor functions are just regular functions, but these conventions are followed:
 1. They are written in Pascal case, eg: Person, 		User, Animal and so on.
 2. The should be executed only with the new operator
 3. Never use Arrow functions in creating constructor 	 functions, use function declarations and normal 	 function expressions only.
 
For instance:
function Person(props) {
  this.firstName = props.firstName;
  this.lastName = props.lastName;
};

//props to use in the personMe object
const propsForMe = {
  firstName: 'John',
  lastName: 'Doe'
};

//create a new instance of Person called personMe
const personMe = new Person(propsForMe);
//create a new instance of Person with the props
//same as 
const personMe = {
  firstName: 'John',
  lastNmae: 'Doe'
}
 
So, what happens when we call the constructor function with the new operator.
 1. A new empty object is created an assigned to this
 2. Function body executes, modifying this anding 		properties to it.
 3. The value of this is returned.

 */