import React from "react";
import "./style.css";

const ErrorBar = (props) => {
   const { errors = {}} = props;

   const createErrorMessage = () => {
      const messages = Object.values(errors);

      if (messages.length === 1) 
         return messages[0];
      
      return messages.join(', ');
   }

   const message = createErrorMessage();

   return(
      <span className={`error-bar ${message && "visible"}`}>{message}</span>
   );
};

export default ErrorBar;