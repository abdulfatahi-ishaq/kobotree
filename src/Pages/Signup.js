import React from "react";
import SignUp from "../components/Signup";
import SideBarLayout  from "../components/SideBar";
import '../components/Signup/styles.css'

function Signup() {
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
      <SignUp/>
    </div>
    </>
  );
}

export default Signup;
