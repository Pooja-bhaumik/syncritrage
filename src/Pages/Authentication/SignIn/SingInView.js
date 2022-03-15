import React from "react";
import { CustomInput } from "../../../Common/CustomInput";
import { CustomButton } from "../../../Common/CustomButton";
import {Link} from 'react-router-dom'
import './SignIn.scss'
const SingInView = (props) => {
  const {onSubmitHandler,onChangeHandler,...otherProps} = props

  return (
    <>
      <section className="SignIn py-4">
        <div className="container">
          <div className="row">
            <div className="col-5 mx-auto">
              <div className="SignInMain p-5">
                <h3 className="fw-bold">Welcome Back !</h3>
                {otherProps.errorMsg && <div class="alert alert-danger mb-3" role="alert">
                       {otherProps.errorMsg}
                       </div>}
                <form onSubmit={onSubmitHandler}>
                  <CustomInput
                    type="email"
                    placeholder="Email"
                    label="Email"
                    name="email"
                    text="Email is required"
                    error={otherProps.error.email}
                    onChange = {onChangeHandler}
                  />

                  <CustomInput
                    type={otherProps.passwordShown ? "text" : "password"}
                    showEyeIcon
                    placeholder="Password"
                    label="Password"
                    name="password"
                    text="Enter a valid password"
                    error={otherProps.error.password}
                    passwordShown = {otherProps.passwordShown}
                    onChange={onChangeHandler}
                    eyeButtonClickHandler = {otherProps.eyeButtonClickHandler}
                  />
                   <CustomButton type="submit" ButtonType = "Sign In"/>
               
                  <p className="m-0">
                    Dont't have an Account ?<Link to="/"> Register </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingInView;
