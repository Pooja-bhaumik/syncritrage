import axios from "axios";
import React, { useState } from "react";
import SingInView from "./SingInView";

const SignInContainer = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [errorMsg,setErrorMsg] = useState(undefined)
  const [passwordShown,setPasswordShown] = useState(false)
  const [error,setError] = useState({
      email:false,
      password:false
  })
  const [UserInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setError({...error,[name]:value.length ? false : true});
    setUserInput({ ...UserInput, [name]: value });
    setErrorMsg(undefined);
  };
  const eyeButtonClickHandler = (e)=>{
    // setPasswordShown(passwordShown ? false : true)//pooja
    setPasswordShown(!passwordShown)//mukesh
  }
  const signInStartsAsync = async () => {
    try {
      const url = "http://192.168.1.12/sync/login.php";
      const { email, password } = UserInput;
      const payload = {
        email,
        password,
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
      if (response && response.status) {
        if (response.status === 200) {
          const { data } = response;
          if (data.status) {
            setCurrentUser(data);
            localStorage.setItem("currentUser", JSON.stringify(data));
            setErrorMsg(undefined)
            alert("Login successfull");
          } else {
            setCurrentUser(undefined);
            setErrorMsg(data.message);
          }
        }
      }
      console.log("Login", response);
    } catch (error) {}
  };
  const isFormDataValid = ()=>{
      const {email,password} = UserInput
      if(email.length && password.length){
          return true
      }
      return false
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(isFormDataValid()){
        signInStartsAsync();
    }else{
        setErrorMsg('All feilds are required!')
    }
  };
  return (
    <>
      <SingInView
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        UserInput={UserInput}
        error={error}
        errorMsg = {errorMsg}
        passwordShown = {passwordShown}
        eyeButtonClickHandler = {eyeButtonClickHandler}
      />
    </>
  );
};
export default SignInContainer;
