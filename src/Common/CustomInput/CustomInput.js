import React from "react";
import './CustomInput.scss'
const CustomInput = (props) => {
    const {type,placeholder,label,name,value,onChange,text, error,eyeButtonClickHandler,passwordShown,showEyeIcon} = props
  return (
    <>
      <div className="inputBox pb-3">
        <label className="control-label pb-1">{label}</label>
        <input type={type} placeholder={placeholder} name={name} value ={value} class="form-control" onChange={onChange} />
       {showEyeIcon && <span className="eyeButton"><i className={passwordShown ? 'fa fa-eye-slash' :  'fa fa-eye'} onClick={eyeButtonClickHandler}></i></span>}
        {error && <span className="ErrorMsg">{text}</span>}
      </div>
    </>
  );
};
export default CustomInput;
