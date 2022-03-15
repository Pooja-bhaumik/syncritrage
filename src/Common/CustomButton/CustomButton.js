import React from "react";
import './CustomButton.scss'
import "./CustomButton";
const CustomButton = (props) => {
    const {type , ButtonType} = props
  return (
    <>
      <div className="SingBtn  pb-2">
        <button className="btn" type={type}  >{ButtonType}</button>
      </div>
    </>
  );
};
export default CustomButton;
