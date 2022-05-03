/**
 * JavaScript forms
 *
 * @format
 */

//a function to show a message with the type of the input
const showMessage = (input, message, type) => {
	//get the span with an id of small
	const msgSpan = input.closest('.field').querySelector('.small');
	//add the message to the mgSpan
	msgSpan.innerText = message;

	//update the class depending on the type
	input.className = type ? 'success' : 'error';
	//return the type
	return type;
};

//function to show errot that use the showMessage
const showErrorMessage = (input, message) => {
	//call the show message with input message and false argument and return it
	return showMessage(input, message, false);
};

//function to show errot that use the showMessage
const showSuccessMessage = input => {
	//call the show message with input message as empty string and true argument and return it
	return showMessage(input, '', true);
};

//create a function to check if the input has value
const hasValue = (input, message) => {
	//check if the input is empty and show the errot message
	if (input.value.trim('') === '') {
		return showErrorMessage(input, message);
	}

	//if the input is not empty show success
	return showSuccessMessage(input);
};

//create a validateEmail function to validate if the email is not empty or invalid
const validateEmail = (input, requiredMsg, invalidMsg) => {
	//check if the email is empty, if empty return false from the function
	if (!hasValue(input, requiredMsg)) {
		return false;
	}

	//a regular expression to validate the email, don't sweat it you can google it
	//test such email format email@you.com will return true and invlaid email such "emailyou" will return false
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	//get the email from the input and trim the leading and trailing whitespaces
	const email = input.value.trim();
	//testing the email is invalid and if so show and error message with invalidMsg
	if (!emailRegex.test(email)) {
		return showErrorMessage(input, invalidMsg);
	}

	//if the email valid and present return true from the function call
	return true;
};

//error message to show to the user incase of an error
const usernameRequired = 'Please create a username';
const emailRequired = 'Please enter your email address';
const emailInvalid = 'please enter a valid email address';

//select the the form, the email input and the username input
const signUpForm = document.querySelector('form#signup');
const nameInput = signUpForm.querySelector('input#username');
const emailInput = signUpForm.querySelector('input#email');
console.log(emailInput);

//addd an event listener to listen to the form submission and validate the form inputs
signUpForm.addEventListener('submit', event => {
	//prevent default browser behavior when a form  is submitted
	event.preventDefault();

	//is name valid
	const nameIsValid = hasValue(nameInput, usernameRequired);
	const emailIsValid = validateEmail(emailInput, emailRequired, emailInvalid);

	if (nameIsValid && emailIsValid) {
		alert('All your data looks good 🎉 🎉 🎉 Hureee!!! ');
	}
});


/***
 * On day 65 && Day 66, I built a form validator in JavaScript. Use Regular expressions for email validation.
Day 66 of #100Daysof
 */