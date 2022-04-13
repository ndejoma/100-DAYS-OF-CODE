/** @format */

const searchInput = document.querySelector('.input');
const btnSubmit = document.querySelector('#submit');
const form = document.querySelector('#dog-facts');

searchInput.addEventListener('input', (e) => {
	//if the value is not an empty string log to the console
	if (e.target.value) {
		console.dir(e.target.value);
	}
});

form.addEventListener('submit', (e) => {
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

const URL = 'https://jsonplaceholder.typicode.com/users/1';

//initiate the fetch request which returns a promises
const fetchUserData = (url) => {
	return fetch(url);
};

//calling the function will return a promise
fetchUserData(URL)
	.then((response) => {
		console.log(response);
		//return the a new pomise by calling .json( ) method
		//turns the data returned into json data and returns it
		return response.json();
	})
	.then((data) => {
		//the data about the user is returned as an object
		console.log(data);//{id: 1, name: 'Leanne Graham'}, …}
		//get the name of the user from the object returned
		const name = data.name;
		console.log(name); //Leanne Graham
	})
	.catch((err) => {
		console.log(err);
	});
