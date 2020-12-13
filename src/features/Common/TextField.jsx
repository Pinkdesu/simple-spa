import React, { memo } from "react";
import "./style.css";

const TextField = (props) => {
   const { 
      type, 
      value, 
      label, 
      onChange, 
      placeholder, 
      isError = false, 
      disabled = false, 
   } = props;

   const errorStyle = isError ? "error" : "";

   return (
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
   );
}

export default memo(TextField);