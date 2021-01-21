import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../../utils/validateEmail";
import  * as actions from "../../redux/actions/appBootstrap"
import * as constants from "./constants";
import { ERROR_CODES } from "../../constants";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import "./style.css";

const Welcome = () => {
   const dispatch = useDispatch();
   const history = useHistory();

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

   const signIn = () => {
      const isValEmail = !validateEmail(values.email);
      const isSmallPassword = values.password.length < 8;

      if (isValEmail || isSmallPassword) {
         if(isValEmail) {
            errorHandler("email", ERROR_CODES[1])
         }
   
         if(isSmallPassword) {
            errorHandler("password", ERROR_CODES[3])
         }
         return;
      }

      dispatch(actions.signIn(values))
   };

   const signUp = () => {
      history.push('/registration');
   };

   return (
      <div className="welcome-page">
         <ErrorBar errors={errors}/>
         <div className="label-block">
            <TextField 
               {...constants.LOGIN_INFO.eMail}
               value={values.email} 
               isError={Boolean(errors.email)}
               onChange={handleChange("email")}
            />
            <TextField 
               {...constants.LOGIN_INFO.password}
               value={values.password}
               isError={Boolean(errors.password)}
               onChange={handleChange("password")}
            />
         </div>
         <div className="button-block">
            <Button text="Sign in" onClick={signIn}/>
            <Button text="Sign up" onClick={signUp}/>
         </div>
      </div>
   );
}

export default Welcome;