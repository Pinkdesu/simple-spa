import React, { useState, useCallback } from "react";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import * as constants from "./constants"
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import "./style.css";

const ChangePasswordPage = () => {
   const [values, setValues] = useState({
      currentPassword: '',
      newPassword: '',
      repeatPassword: ''
   });

   const [errors, setErrors] = useState({
      currentPassword: null,
      newPassword: null,
      repeatPassword: null
   });

   const handleChange = useCallback((stateName) => (e) => {
      const value = e.target.value;

      setValues(prevState => ({
         ...prevState,
         [stateName]: value
      }));
   }, [])

   const onError = useCallback((stateName, error) => {
      setErrors(prevState => ({
         ...prevState,
         [stateName]: error
      }));
   }, [])

   const saveChanges = useCallback(() => {
      
   }, []);

   return (
      <div className="main change-password-page">
         <Header text="Username\Login"/>
         <div className="form-wrapper">
            <ErrorBar errors={errors}/>
            <div className="label-block">
               <label>Email: user_test@gmail.com</label>
               <TextField 
                  {...constants.CHANGE_LOGIN_INFO.currentPassword}
                  value={values.email} 
                  isError={Boolean(errors.currentPassword)}
                  onChange={handleChange("currentPassword")}
               />
               <TextField 
                  {...constants.CHANGE_LOGIN_INFO.newPassword}
                  value={values.password}
                  isError={Boolean(errors.newPassword)}
                  onChange={handleChange("newPassword")}
               />
               <TextField 
                  {...constants.CHANGE_LOGIN_INFO.repeatPassword}
                  value={values.password}
                  isError={Boolean(errors.repeatPassword)}
                  onChange={handleChange("repeatPassword")}
               />
            </div>
            <div className="button-block row">
               <Button text={BUTTON_OK} onClick={saveChanges}/>
               <Button text={BUTTON_CANCEL}/>
            </div>
         </div>
      </div>
   )
}

export default ChangePasswordPage;