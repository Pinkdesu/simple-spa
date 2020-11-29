import React, { memo } from "react";
import "./style.css";

const TextField = (props) => {
   const { type, value, onChange, label, placeholder, disabled = false } = props;

   return (
      <div className="text-field">
         <label>
            {label}
         </label>
         <input 
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            disabled={disabled} 
         />
      </div>
   );
}

export default memo(TextField);