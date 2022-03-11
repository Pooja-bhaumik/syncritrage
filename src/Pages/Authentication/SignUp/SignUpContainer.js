import React, { useState } from "react";
import SignUp from "./SignUpView";
const SignUpContainer = () => {
    //state for input fields
    const [UserInput, setUserInput] = useState({
        username: "",
        password: "",
        email: "",
    });
    
    //state for error message
    const [error, setError] = useState({
        username: false, 
        email:false,
        password:false
    });
    
    const [submitted, setSubmitted] = useState(false);
    const [isFormValid, setIsFormValid]  = useState(false);
    


  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    // One liner :mukesh
    setError({...error, [name]: value.length ? false : true});
    // ****************************:pooja
    // if(value.length) {
    //     setError({...error, [name]: false});
    // }else {
    //     setError({...error, [name]: true});
    // }
    setUserInput({...UserInput, [name]: value});
  };

  const isFormDataValid = () => {
      const {username, email, password} = UserInput;
      if(username.length && email.length && password.length) {
          return true;
      }
      return false;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if(isFormDataValid()) {
        setIsFormValid(true);
    }else {
        setIsFormValid(false);
    }
  };
  return (
    <>
      <SignUp
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        UserInput={UserInput}
        submitted={submitted}
        isFormValid={isFormValid}
        error={error}
      />
    </>
  );
};
export default SignUpContainer;
