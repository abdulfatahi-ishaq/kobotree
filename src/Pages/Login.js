import React from "react";
import SignIn from "../components/Signin";
import SideBarLayout  from "../components/SideBar";
import '../components/Signup/styles.css'
import { SignWrapper } from './Signup';

function Login() {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // function submitForm(){
  //   setIsSubmitted(true);
  // };

  return (
    <SignWrapper>
    <div className="form-container">
      <div className="form-content-left text-center">
      <SideBarLayout/>
      </div>
      <SignIn/>
    </div>
    </SignWrapper>
  );
}

export default Login;