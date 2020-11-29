import React from "react";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import "./style.css";

const Welcome = () => {
   return (
      <div className="welcome-page">
         <div className="welcome-page__label-block">
            <TextField type="text" placeholder="user@email.com" label="E-mail"/>
            <TextField type="password" placeholder="Write your password..." label="Password"/>
         </div>
         <div className="welcome-page__button-block">
            <Button text="Sign in"/>
            <Button text="Sign up"/>
         </div>
      </div>
   );
}

export default Welcome;