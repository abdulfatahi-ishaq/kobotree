export default function validateForm(values, errors) {
	//Fullname

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
	if (!values.password) {
		errors.password = "Password is required";
	}
    else {
        errors.passwordValid = true
    }


	if (errors.emailValid && errors.passwordValid) {
		errors.formValid = true;
	}

	return errors;
}
