import React, { useState } from "react";
import axios from "axios";
import SignUp from "./SignUpView";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  //state for input fields
  const [UserInput, setUserInput] = useState({
    username: "",
    password: "",
    email: "",
  });
  let navigate = useNavigate();

  //state for error message
  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
  });

  // const [submitted, setSubmitted] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState(undefined);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // One liner :mukesh
    setError({ ...error, [name]: value.length ? false : true });
    setErrorMsg(undefined)
    // ****************************:pooja
    // if(value.length) {
    //     setError({...error, [name]: false});
    // }else {
    //     setError({...error, [name]: true});
    // }
    setUserInput({ ...UserInput, [name]: value });
  };

  const isFormDataValid = () => {
    const { username, email, password } = UserInput;
    if (username.length && email.length && password.length) {
      return true;
    }
    return false;
  };
  const signUpStartsAsync = async () => {
    try {
      const url = "http://192.168.1.12/sync/signup.php";
      const { username, password, email } = UserInput;
      const payload = {
        name: username,
        password,
        email,
      };

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await axios({
        method: "POST",
        url: url,
        data: payload,
        headers: headers,
      });
      console.log("RESPONSE: ", response);
      if(response && response.status){
        if(response.status === 200){
          const {data} = response;
          if(data.status) {
            setErrorMsg(undefined);
            navigate('/login')
          }else {
            setErrorMsg(data.message);
          }
        }
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
  const onSubmitHandler = (e) => {

    e.preventDefault();
    
    if (isFormDataValid()) {
      signUpStartsAsync();
    }else{
      setErrorMsg('All feilds are required')
    }
  };
  return (
    <>
      <SignUp
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        UserInput={UserInput}
        // submitted={submitted}
        // isFormValid={isFormValid}
        error={error}
        errorMsg={errorMsg}
      />
    </>
  );
};
export default SignUpContainer;
