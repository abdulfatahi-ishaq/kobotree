import React from "react";
import { Link } from "react-router-dom";
import useForm from "../Signup/useForm";
import '../Signup/styles.css'
import validate from '../Signup/validate';


const SignIn = () => {
    const {handleChange, values, handleSubmit,errors} = useForm(validate)
  return (
    <div className="form-content-right">
      <form action="" className="form" onSubmit={handleSubmit}> 
        <h1 style={{fontSize:50,fontWeight:700}}>Log In into your account</h1><br />
      <div className="form-inputs">
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-inputs">
        <input
          type="password"
          name="password"
          id="password"
          className="form-input"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
       <Link className='text-right' style={{fontSize:10, color:"grey"}} to="">Forgot Password?</Link>
      <br /><br />
      <button className='form-input-btn' type='submit'>
          Log In
        </button>
        <span className='form-input-login'>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
