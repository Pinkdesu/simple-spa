import React, { memo } from "react";
import "./style.css";

const TextArea = (props) => {
   const { label, isError, value, onChange, placeholder, disabled = false } = props;

   const errorStyle = isError ? "error" : "";

   return (
      <div className="text-field text-area">
      <label className={errorStyle}>
         {label}
      </label>
      <textarea onChange={onChange} disabled={disabled} placeholder={placeholder} value={value}/>
   </div>
   );
}

export default memo(TextArea);