export default function validateForm(values, errors) {
	//Fullname
	if (!values.fullname.trim()) {
		errors.fullname = 'Username Required';
	} else {
		errors.fullNameValid = true;
	}

	//Email
	let emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!values.email) {
		errors.email = 'Email Required';
	} else if (!emailRegex.test(values.email)) {
		errors.email = 'Email address is invalid';
	} else {
		errors.emailValid = true;
	}

	//Password
	if (values.password) {
		errors.password.required = true;
	}
	if (values.password.length > 12) {
		errors.password.requiredLength = true;
	}
	if (values.password.match(/[0-9]/g)) {
		errors.password.containsNumber = true;
	}
	if (values.password.match(/[a-z]/g)) {
		errors.password.containsLowerCase = true;
	}
	if (values.password.match(/[A-Z]/g)) {
		errors.password.containsUpperCase = true;
	}
	if (values.password.match(/[^a-zA-Z0-9]/g)) {
		errors.password.containsSpecialCharacter = true;
	}

	if (Object.values(errors.password).includes(false)) {
		errors.passwordValid = false;
	} else {
		errors.passwordValid = true;
	}

	if (errors.emailValid && errors.fullNameValid && errors.passwordValid) {
		errors.formValid = true;
	}

	return errors;
}
