import React from "react";
import SignIn from "../components/Signin";
import SideBarLayout  from "../components/SideBar";
import '../components/Signup/styles.css'

function Login() {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // function submitForm(){
  //   setIsSubmitted(true);
  // };

  return (
    <>
    <div className="form-container">
      <div className="form-content-left text-center">
      <SideBarLayout/>
      </div>
      <SignIn/>
    </div>
    </>
  );
}

export default Login;