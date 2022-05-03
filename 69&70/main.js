/**
 * JavaScript forms
 *
 * @format
 */
//develop uutility functions

//Check if the length of the input is between max and min value
const isBetween = (length, min, max) =>
	length < min || length > max ? false : true;

//a function to show a message with the type of the input
const showMessage = (input, message, type) => {
	//get the span with an id of small
	const msgSpan = input.closest('.field').querySelector('.small');
	//add the message to the mgSpan
	msgSpan.innerHTML = message;

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

/***
 * A function to validate the user input
 */
const validateUsername = (input, requiredMsg) => {
	//check if the username is empty and show the rrot
	if (!hasValue(input, requiredMsg)) {
		//return false if the username is not provided
		return false;
	}
	const min = 4,
		max = 20;

	//get the username from the input
	const userName = input.value.trim();

	//check the username
	if (!isBetween(userName.length, min, max)) {
		//show the error message if the username is not between 4 and 20 characters and return false
		return showErrorMessage(
			input,
			`Username must be between ${min} and ${max} characters.`
		);
	}
	//returns true if the username is long enough and
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

/***
 * Create a function to validate the password input
 */

const validatePassword = (input, requiredMsg, passwordValidityMsg) => {
	//check if the password has been type in
	if (!hasValue(input, requiredMsg)) {
		//return and stop the function executuin if the password is not provided
		return false;
	}

	//get the

	//the password validation regex
	const passwordRegex =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

	//get the email inout and trim the leading and trailing whitespace
	const password = passwordInput.value.trim();

	//check if the password meets the requirements
	/***
	 * The above regex tests if has:
	 * 1. at least 8 character
	 * 2. at least 1 numeric character
	 * 3. at least 1 lowercase letter
	 * 4. at least 1 uppercase letter
	 * 5. atleast 1 special character
	 */
	//if the password  is not valid or false as per the regex test
	if (!passwordRegex.test(password)) {
		return showErrorMessage(input, passwordValidityMsg);
	}

	//if all the conditions are met return true
	return true;
};

//createa function to validate the the confirm password
const validateConfirmPassword = (passwordInput, confirmPasswordInput) => {
	//check if both inputs have  value if not return false
	if (!hasValue(confirmPasswordInput, 'Please confirm password')) {
		//return false if the password
		return false;
	}
	//get the input of both password and the confirm one
	const password = passwordInput.value.trim();
	const confirmPassword = confirmPasswordInput.value.trim();

	//chech if both passwords do match
	if (password !== confirmPassword) {
		//returns false if the passwords do not match
		return showErrorMessage(
			confirmPasswordInput,
			'The passwords do not match'
		);
	}
	//return true if all the check pass
	return showSuccessMessage(confirmPasswordInput);
};
//error message to show to the user incase of an error
const usernameRequired = 'Please create a username';
const emailRequired = 'Please enter your email address';
const emailInvalid = 'please enter a valid email address';
const passwordRequired = 'Please create a password';
const confirmPasswordRequired = 'Please confirm your password';
const passwordInvalid = `
   Make sure you password has:
   <ul>
      <li>at least 8 characters</li>
      <li>at least 1 numeric character</li>
      <li>at least 1 lowercase letter</li>
      <li> at least 1 uppercase letter</li>
      <li>atleast 1 special character</li>
   </ul>
`;

//select the the form, the email input and the username input
const signUpForm = document.querySelector('form#signup');
const nameInput = signUpForm.querySelector('input#username');
const emailInput = signUpForm.querySelector('input#email');
const passwordInput = signUpForm.querySelector('input#password');
const confirmPasswordInput = signUpForm.querySelector('input#confirm-password');
const togglePasswordIcons = signUpForm.querySelectorAll('.toggle-password');

//create a function to change or hide password
const showHidePassword = input => {
	//set the type to be password if text and text if password
	const type =
		input.getAttribute('type') === 'password' ? 'text' : 'password';
	input.setAttribute('type', type);
};

//listen to the toggle event on the password icons, and show or hide the password
togglePasswordIcons.forEach(togglePasswordIcon => {
	togglePasswordIcon.addEventListener('click', event => {
		//Boolean value for the password icons,
		//toggle password on or off depending on thisconditions
		const isPasswordIcon = event.target.id == 'pass';
		const isConfirmPasswordIcon = event.target.id === 'confirm';

		if (isPasswordIcon) {
			//if the password icon is clicked show or hide the password
			showHidePassword(passwordInput);
			event.target.classList.toggle('bx-show');
		}

		//if the confirm password icon is clicked show or hide the confirm password
		if (isConfirmPasswordIcon) {
			showHidePassword(confirmPasswordInput);
			event.target.classList.toggle('bx-show');
		}
	});
});

/***
 * Validate the form instantly
 */

//Using event delegation to listen to the input event in the form fields
signUpForm.addEventListener('input', event => {
	console.log(event.target.id);

	//assign the event target to a variable
	const target = event.target;
	//if the event happens in the username input, validate it
	if (target.id === 'username') {
		validateUsername(nameInput, usernameRequired);
	}
	//if the event happens in the email input validate
	if (target.id === 'email') {
		validateEmail(emailInput, emailRequired, emailInvalid);
	}

	//if the event happens in the password input validate
	if (target.id === 'password') {
		validatePassword(passwordInput, passwordRequired, passwordInvalid);
	}

	//if the event happens in the input confirm password
	if (target.id === 'confirm-password') {
		validateConfirmPassword(passwordInput, confirmPasswordInput);
	}
});
