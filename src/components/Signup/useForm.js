import { useState } from 'react';

const useForm = validate => {
	const [values, setValues] = useState({
		fullname: '',
		email: '',
		password: '',
	});

	let errorsField = {
		password: {
			required: false,
			containsLowerCase: false,
			containsUpperCase: false,
			containsSpecialCharacter: false,
			requiredLength: false,
			containsNumber: false,
		},
		emailValid: false,
		fullNameValid: false,
		passwordValid: false,
		formValid: false,
	};

	const [errors, setErrors] = useState(errorsField);

	const handleChange = e => {
		const { name, value } = e.target;
		setValues(prev => ({
			...prev,
			[name]: value,
		}));

		setErrors(validate({ ...values, [name]: value }, errorsField));
	};

	const handleSubmit = e => {
		e.preventDefault();
        
        if (errors.formValid) {
            alert("Form is valid")
        }
	};

	return { handleChange, values, handleSubmit, errors };
};

export default useForm;
