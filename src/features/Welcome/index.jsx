import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { validateEmail } from "../../utils/validateEmail";
import  * as actions from "../../redux/actions/appBootstrap"
import * as constants from "../../constants";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import "./style.css";

const Welcome = () => {
   const dispatch = useDispatch();

   const [values, setValues] = useState({
      email: "",
      password: ""
   });

   const [errors, setErrors] = useState({
      email: "",
      password: ""
   });

   const handleChange = useCallback((stateName) => {
      return (e) => {
         const value = e.target.value;

         setValues(prevState => ({
            ...prevState,
            [stateName]: value
         }));

         setErrors(prevState => ({
            ...prevState,
            [stateName]: ""
         }));
      }
   }, []);

   const errorHandler = (stateName, value) => {
      setErrors(prevState => ({
         ...prevState,
         [stateName]: value,
      }));
   };

   const singIn = () => {
      const isValEmail = !validateEmail(values.email);
      const isSmallPassword = values.password.length < 8;

      if (isValEmail || isSmallPassword) {
         if(isValEmail) {
            errorHandler("email", constants.EMAIL_INCORRECTLY)
         }
   
         if(isSmallPassword) {
            errorHandler("password", constants.PASSWORD_CONSIST)
         }
         return;
      }

      dispatch(actions.signIn())
   };

   return (
      <div className="welcome-page">
         <ErrorBar />
         <div className="welcome-page__label-block">
            <TextField 
               type="text" 
               value={values.email} 
               placeholder="user@email.com" 
               label="E-mail"
               error={errors.email}
               onChange={handleChange("email")}
            />
            <TextField 
               type="password" 
               value={values.password}
               placeholder="Write your password..." 
               label="Password"
               error={errors.password}
               onChange={handleChange("password")}
            />
         </div>
         <div className="welcome-page__button-block">
            <Button text="Sign in" onClick={singIn}/>
            <Button text="Sign up"/>
         </div>
      </div>
   );
}

export default Welcome;