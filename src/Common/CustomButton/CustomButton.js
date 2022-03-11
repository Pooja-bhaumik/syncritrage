import React from "react";
import './CustomButton.scss'
import "./CustomButton";
const CustomButton = (props) => {
    const {type} = props
  return (
    <>
      <div className="SingBtn  pb-2">
        <button className="btn" type={type}>Sign Up</button>
      </div>
    </>
  );
};
export default CustomButton;
