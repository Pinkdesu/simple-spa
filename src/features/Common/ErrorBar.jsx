import React from "react";
import "./style.css";

const ErrorBar = (props) => {
   const { text = ""} = props;

   return(
      <span className={`error-bar ${text && "visible"}`}>{text}</span>
   );
};

export default ErrorBar;