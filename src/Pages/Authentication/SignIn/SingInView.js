import React from "react";
import { CustomInput } from "../../../Common/CustomInput";
import { CustomButton } from "../../../Common/CustomButton";
import './SignIn.scss'
const SingInView = () => {
  return (
    <>
      <section className="SignIn py-4">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
              <div className="SignInMain p-4">
                <h3 className="fw-bold">Welcome Back !</h3>
                <form>
                  <CustomInput
                    type="text"
                    placeholder="Username"
                    label="Name"
                    name="username"
                    text="Username not be empty"
                  />

                  <CustomInput
                    type="password"
                    placeholder="Password"
                    label="Password"
                    name="password"
                    text="Enter a valid password"
                  />
                   <CustomButton type="submit" />
                  <p className="m-0">
                    Dont't have an Account ?<a href="#"> Register </a>
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
