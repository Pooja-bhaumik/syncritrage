import React from "react";
import {Link} from 'react-router-dom'
import left from "../../../assets/left.png";
import "./SignUp.scss";
import { CustomInput } from "../../../Common/CustomInput";
import { CustomButton } from "../../../Common/CustomButton";
const SignUp = (props) => {
  const {
    onSubmitHandler,
    onChangeHandler,
    UserInput,
    errorMsg, 
    ...otherProps
  } = props;

  return (
    <>
      <section className="SignUp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 ps-0">
              <div
                className="LeftContainer"
                style={{ backgroundImage: `url(${left})` }}
              ></div>
            </div>
            <div className="col-5 mx-auto RightContainer">
              <div className="SignUp-form">
                <h3 className="fw-bold">Welcome !</h3>
                     {errorMsg && <div class="alert alert-danger mb-3" role="alert">
                       {errorMsg}
                    </div>}
                <form onSubmit={onSubmitHandler}>
                  <CustomInput
                    type="text"
                    placeholder="Username"
                    label="Name"
                    value={UserInput.username}
                    name="username"
                    onChange={onChangeHandler}
                    text="Username not be empty"
                    error={otherProps.error.username}
                  />

                  <CustomInput
                    type="email"
                    placeholder="Email"
                    label="Email"
                    value={UserInput.email}
                    name="email"
                    onChange={onChangeHandler}
                    text="Email not be empty"
                    error={otherProps.error.email}
                  />

                  <CustomInput
                    type="password"
                    placeholder="Password"
                    label="Password"
                    value={UserInput.password}
                    name="password"
                    onChange={onChangeHandler}
                    text="Enter a valid password"
                    error={otherProps.error.password}
                  />

                  <CustomButton type="submit" ButtonType = "Sign Up"/>
                  <p className="m-0">
                    Already have an Account ?<Link to="/login"> Login </Link>
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
export default SignUp;
