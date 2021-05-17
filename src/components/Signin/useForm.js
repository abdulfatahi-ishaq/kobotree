import { useState } from 'react';

const useForm = validate => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	let errorsField = {
		password: '',
        email: "",
        emailValid: false,
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
