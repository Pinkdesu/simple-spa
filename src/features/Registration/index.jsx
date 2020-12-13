import React from "react";
import { REGISTRATION_INFO, BUTTON_CANCEL, BUTTON_OK } from "./constants";
import { LOGIN_INFO } from "../Welcome/constants";
import Header from "../Common/Header";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import UploadImage from "../UploadImage";
import "./style.css";

const Registration = () => {
   return (
      <div className="registration"> 
         <Header text="Registration"/>
         <div className="column-container">
            <UploadImage/>
            <div className="registration__info">
               <ErrorBar/>
               <TextField 
                  {...REGISTRATION_INFO.firstName}
                  value=""
               />
               <TextField 
                  {...REGISTRATION_INFO.lastName} 
                  value=""
               />
               <TextField 
                  {...REGISTRATION_INFO.country} 
                  value=""
               />
               <TextField 
                  {...LOGIN_INFO.eMail}
                  value=""
               />
               <TextField 
                  {...LOGIN_INFO.password}
                  value=""
               />
               <TextField 
                  {...REGISTRATION_INFO.rePassword}
                  value=""
               />
               <div className="registration__button-block">
                  <Button text={BUTTON_OK}/>
                  <Button text={BUTTON_CANCEL}/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Registration;