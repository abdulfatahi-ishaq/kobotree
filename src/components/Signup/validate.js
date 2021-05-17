export default function validateForm(values) {
    let errors = {}

    //Fullname
    if(!values.fullname.trim()){
        errors.fullname = "Username Required"
    }

    //Email
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!values.email){
        errors.email = "Email Required"
    }else if(!emailRegex.test(values.email)){
        errors.email = "Email address is invalid"
    }

    //Password
    if(!values.password){
        errors.password = 'Password Required'
    }else if(values.password.length < 12){
        errors.password = 'Password needs to be 12 characters or more'
    }else if(!values.password.match(/[0-9]/g)){
        errors.password = 'Password should contain a number'
    }else if(!values.password.match(/[a-z]/g)){
        errors.password = 'Password should contain a lowercase'
    }else if(!values.password.match(/[A-Z]/g)){
        errors.password = 'Password should contain an uppercase'
    }else if(!values.password.match(/[^a-zA-Z0-9]/g)){
        errors.password = 'Password should contain a special character'
    }

    return errors;
}