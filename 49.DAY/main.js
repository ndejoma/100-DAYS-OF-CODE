/** @format */

const searchInput = document.querySelector('.input');
const btnSubmit = document.querySelector('#submit');
const form = document.querySelector('#dog-facts');

searchInput.addEventListener('input', e => {
	//if the value is not an empty string log to the console
	if (e.target.value) {
		console.dir(e.target.value);
	}
});

form.addEventListener('submit', e => {
	//prevent default
	e.preventDefault();
	console.log(e);
});

// const fetchDogFacts = (noFacts = 1) => {
// 	const request = fetch(
// 		`https://dog-api.kinduff.com/api/facts?number=${noFacts}`,
// 	);
// 	return request;
// };

// fetchDogFacts(1).then((response) => {
// 	console.log(res);
// });

// // console.log( fetch( "https://api.randomuser.me/?nat=US&results=1" ) );
// fetch('https://api.randomuser.me/?nat=US&results=1').then((response) => {
// 	console.log(response);
// });

/***
 * Fteching fake user data from an api
 */

// const URL = 'https://jsonplaceholder.typicode.com/users/1';

// //initiate the fetch request which returns a promises
// const fetchUserData = url => {
// 	return fetch(url);
// };

// //calling the function will return a promise
// fetchUserData(URL)
// 	.then(response => {
// 		console.log(response);
// 		//return the a new pomise by calling .json( ) method
// 		//turns the data returned into json data and returns it
// 		return response.json();
// 	})
// 	.then(data => {
// 		//the data about the user is returned as an object
// 		console.log(data); //{id: 1, name: 'Leanne Graham'}, …}
// 		//get the name of the user from the object returned
// 		const name = data.name;
// 		console.log(name); //Leanne Graham
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// /***
//  * Building Promises
//  */

// //build a Promises willYou marry that is resolve with an acceptance to the proposal or rejects with a denial, if number is greater than 70, proposal accepted, otherwise has been rejected

// //create a random generator function
// const randomNoGen = max => {
// 	if (max && max > 0) {
// 		return Math.floor(Math.random() * max) + 1;
// 	}
// };

// //for example
// console.log(randomNoGen(5));
// randomNoGen(100); //returns any number between 0 and 100

// //for fun
// const willYouMarryMe = new Promise((resolve, reject) => {
// 	//if no is greater than 65, the proposal was accepted
// 	if (randomNoGen(100) > 65) {
// 		resolve('I am happy, 🙂 she accepted ');
// 	} else {
// 		//if no is less than 65
// 		reject(new Error("She didn't accept 😢 I am sad"));
// 	}
// });

// //now it is time to consume the Promise
// willYouMarryMe
// 	.then(res => {
// 		console.log(res); //I am happy, 🙂 🙂 🙂  she accepted
// 	})
// 	.catch(err => {
// 		console.error(err.message); //main.js:100 She didn't accept 😢 😢 😢  I am sad
// 	});

// /***
//  * Using the Geolocation API to build a Promise
//  */

// // //create a function to get user location
// // const getUserLocation = () => {
// // 	return new Promise((resolve, reject) => {
// // 		//get user location of the device
// // 		navigator.geolocation.getCurrentPosition(
// // 			(position) => {
// // 				//call the resolve with the positio object
// // 				resolve(position);
// // 			},
// // 			(err) => {
// // 				//if there is an error reject
// // 				reject(err);
// // 			},
// // 		);
// // 	});
// // };

// // //when the getUserLocation i called a Promise it returned whether resolved or reject
// // getUserLocation()
// // 	.then((position) => {
// // 		console.log(position.coords);//{latitude: 52.520007, longitude: 13.404954, altitude: null, accuracy: 150, altitudeAccuracy: null, …}
// // 	})
// // 	.catch((err) => {
// // 		console.log(err);//Error returned by the geolocation inncase the Promise rejects
// // 	});

// //create a function to get the users location
// const getUserLocation = () => {
// 	return new Promise((resolve, reject) => {
// 		//handle the resolving or rejection of the location
// 		navigator.geolocation.getCurrentPosition(
// 			position => {
// 				//resolve with the position object
// 				resolve(position);
// 			},
// 			error => {
// 				//reject with the error
// 				reject(error);
// 			}
// 		);
// 	});
// };

// //   Calling the above function  returns a promise which we can consume by chaining then(), catch() or finally() methods
// getUserLocation()
// 	.then(position => {
// 		//destructure the coordinates from position object
// 		const { coords } = position;
// 		//🙂 not my real coordinates, I am using a location 		  override
// 		console.log(coords); //{latitude: 52.520007, ...}
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

/****
 * Converting the getUserData to an async await
 */

// const getUserData = async url => {
// 	try {
// 		const response = await fetch(url);
// 		//get the data from the response by converting it to JSON data
// 		const userData = await response.json();

// 		//destructure the name  and email of the userData
// 		const { username: userName, email } = userData;

// 		console.log(
// 			`The user's name is ${userName}, and their email is ${email}`
// 		); //The user's name is Antonette, and their email is Shanna@melissa.tv
// 	} catch (e) {
// 		console.log(e.message);
// 	} finally {
// 		console.log("I am done getting the user's data");
// 	}
// };

// //URL to fetch user with an id of 1
// const URL = 'https://jsonplaceholder.typicode.com/users/2';

// getUserData(URL);

const getUserData = async url => {
	//implement Error handling with try...catch...finally
	try {
		//wait for the response object
		const response = await fetch(url);
		//get remote user data and parse it as JSON
		const userData = await response.json();

		//destructure the name and email from userData
		const { name, email } = userData;
		//log something to the console using the data
		console.log(`Name: ${name} Email:${email}`);
	} catch (error) {
		//log the error object caught in try block
		console.log(error);
	} finally {
		//code to run whether an error occurs or not
		console.log("Done getting the user's data");
	}
};

//URL to fetch user with an id of 2
const URL = 'https://jsonplaceholder.typicode.com/users/2';
//initiate a fetch network request to the URL
getUserData(URL);
