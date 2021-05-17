import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import './styles.css'
// import './script.js'
import validate from './validate';


const SignUp = () => {
    const {handleChange, values, handleSubmit,errors} = useForm(validate)
  return (
    <div className="form-content-right">
      <form id="registration" action="" className="form" onSubmit={handleSubmit}> 
        <h1 style={{fontSize:50,fontWeight:700}}>Sign up to open an account</h1><br />
      <div className="form-inputs">
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="form-input"
          placeholder="Fullname"
          value={values.fullname}
          onChange={handleChange}
        />
        {errors.fullname && <p>{errors.fullname}</p>}
      </div>
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
      <label htmlFor="password">
      <ul className="input-requirements" style={{fontSize:11, textAlign:"left"}}>
      <li>12 Character, Minimum</li>
      <li>Includes Number</li>
      <li>Symbols</li>
      <li>Capital Letter</li>
      <li>Lower Case Letter</li>
      </ul><br />
      </label>
      <button className='form-input-btn' type='submit'>
          Continue
        </button>
        <span className='form-input-login'>
          Already have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
