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

//error message to show to the user incase of an error
const usernameRequired = 'Please create a username';
const emailRequired = 'Please enter your email address';
const emailInvalid = 'please enter a valid email address';
const passwordRequired = 'Please create a password';
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
const togglePasswordIcon = signUpForm.querySelector('#toggle-password');

//addd an event listener to listen to the form submission and validate the form inputs
signUpForm.addEventListener('submit', event => {
	//prevent default browser behavior when a form  is submitted
	event.preventDefault();

	//is name valid
	const nameIsValid = hasValue(nameInput, usernameRequired);
	const passwordIsValid = validatePassword(
		passwordInput,
		passwordRequired,
		passwordInvalid
	);
	const emailIsValid = validateEmail(emailInput, emailRequired, emailInvalid);

	if (nameIsValid && emailIsValid && passwordIsValid) {
		alert('All your data looks good 🎉 🎉 🎉 Hureee!!! ');
	}
});

//listen to the toggle event on the password icon
togglePasswordIcon.addEventListener('click', event => {
	//toggle the type if password set change it to text and if text change it to password
	const type =
		passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
	//now set the attribute to be the text
	passwordInput.setAttribute('type', type);

	//I am using  box-icons in these case
	//the bx-show  CSSclass is the eye and the bx-low-vision CSS class is the icon with the slash(cancel vision)
	//remove the class of bx-show so that the class of bx-low-vision can take effect
	togglePasswordIcon.classList.toggle('bx-show');
});
