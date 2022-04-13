/***
 * Inheritance between Classes in JavaScript
 * 🙂 
 */


// //We can refactor the code above to use ES6 Classes
// class Person {
//   constructor ( props ) {
//     this.firstName = props.firstName;
//     this.lastName = props.lastName;
//     this.birthYear = props.birthYear;
//   }

//   //add the methods here 
//   getFullName () {
//     return `${ this.firstName } ${ this.lastName }`;
//   }

//   calcAge ( year ) {
//     return year - this.birthYear;
//   }
// }

// //props for the person's object
// const personProps = {
//   firstName: 'Jignesh',
//   lastName: 'Thummar',
//   birthYear: 1990
// };

// //create a new instance of Person 
// const person = new Person( personProps );
// //invoke the functions on the instance
// console.log( person.getFullName() );//Jignesh Thummar
// console.log( person.calcAge( 2022 ) );//32





// //create a class of Student that inherits/extends from the Person class
// class Student extends Person {
//   constructor ( props ) {
//     //call super method which calls method of the Parent class
//     //invokes the Parent class's constructor with the props passed in
//     super( props );
//     this.yearStudy = props.yearStudy;
//     this.course = props.course;
//     this.regNo = props.regNo;
//   }

//   //create a method to introduces studnet
//   introduce () {
//     return `My name is ${ super.getFullName() }, I am in year ${ this.yearStudy } taking Bachelor in ${ this.course }`;
//   }

// }


// const propsForStudent = {
//   firstName: 'Mary',
//   lastName: 'Immaculate',
//   birthYear: 1998,
//   course: 'CS',
//   yearStudy: 3,
//   regNo: 'EQ100'
// };


// const student = new Student( propsForStudent );
// console.log( student.introduce() );



//1.Create a parent class Person
class Person {
	constructor(props) {
    	this.name = props.name;
      	this.birthYear = props.birthYear;
    }
    //method to get name
	getFullName() {
     	return name;
    }
}

//2.create a class of student which extends from Person
class Student extends Person {
	constructor(props) {
      //call super which calls Person constructor
      super(props);
      this.course = props.course;
      this.yearStudy = props.yearStudy;
    }
  	//create method to introduce student
  	introduce() {
      return (
      `My name is ${this.name}, I am in year ${this.yearStudy} taking a Bachelors in ${this.course}`
        );
    }
} 

const propsStudent = {
    name: 'Mary Ann',
    birthYear: 1998,
    course: 'CS',
    yearStudy: 3
}
//create a new instance of student class
const student = new Student(propsStudent);
console.log(student.introduce());//My name is Mary Ann, I am in Year 3 taking CS