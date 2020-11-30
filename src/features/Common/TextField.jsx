import React, { memo } from "react";
import ErrorBar from "./ErrorBar";
import "./style.css";

const TextField = (props) => {
   const { 
      type, 
      value, 
      label, 
      onChange, 
      error, 
      placeholder, 
      disabled = false, 
   } = props;

   const errorStyle = Boolean(error) ? "error" : "";

   return (
      <div className="text-field-wrapper">
         <ErrorBar text={error} />
         <div className="text-field">
            <label className={errorStyle}>
               {label}
            </label>
            <input 
               type={type} 
               value={value} 
               onChange={onChange} 
               placeholder={placeholder} 
               disabled={disabled}
               className={errorStyle}
            />
         </div>
      </div>
   );
}

export default memo(TextField);