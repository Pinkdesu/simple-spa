import React, { useState, useCallback} from "react";
import { REGISTRATION_INFO, BUTTON_CANCEL, BUTTON_OK } from "./constants";
import { useDispatch } from "react-redux";
import { LOGIN_INFO } from "../Welcome/constants";
import { ERROR_CODES } from "../../constants";
import { validateEmail } from "../../utils/validateEmail";
import { signUp } from "../../redux/actions/appBootstrap";
import useBack from "../../utils/useBack";
import Header from "../Common/Header";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import UploadImage from "../UploadImage";
import "./style.css";

const Registration = () => {
   const dispatch = useDispatch();

   const [values, setValues] = useState({
      email: '',
      firstName: '',
      lastName: '',
      country: '',
      password: '',
      repeatPassword: ''
   });

   const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      country: '',
      email: '',
   });

   const [passErrors, setPassErrors] = useState({
      password: '',
      repeatPassword: ''
   })

   const goBack = useBack();

   const validatePassword = () => {
      const currentErrors = { ...passErrors };
      const { password, repeatPassword } = values;
      
      let isValid = password === repeatPassword;

      if (password !== repeatPassword) {
         currentErrors["password"] = ERROR_CODES[4];
         currentErrors["repeatPassword"] = ERROR_CODES[4];
      }

      setErrors(currentErrors);

      return isValid;
   }

   const validateInfo = () => {
      const currentError = { ...errors };
      
      const { email, firstName, lastName, country } = values;

      let isValid = validateEmail(email) && email.length && 
                    firstName.length && lastName.length && 
                    country.length; 

      if(!validateEmail(email)){
         currentError["email"] = ERROR_CODES[1];
      }

      if(!email.length) {
         currentError["email"] = ERROR_CODES[5];
      }

      if(!firstName.length) {
         currentError["firstName"] = ERROR_CODES[5];
      }

      if(!lastName.length) {
         currentError["lastName"] = ERROR_CODES[5]
      }

      if(!country.length) {
         currentError["country"] = ERROR_CODES[5]
      }

      setErrors(currentError);

      return isValid;
   };

   const handleInfoChange = useCallback((stateName) => (e) => {
      const value = e.target.value;

      setValues(prevState => ({
         ...prevState,
         [stateName]: value,
      }));

      setErrors(prevState => ({
         ...prevState,
         [stateName]: null,
      }))
   }, []);

   const handlePassChange = useCallback((stateName) => (e) => {
      const value = e.target.value;

      const isError = value.length < 8;
      const error = isError ? ERROR_CODES[3] : null;

      setValues(prevState => ({
         ...prevState,
         [stateName]: value
      }));

      setPassErrors(prevState => ({
         ...prevState,
         [stateName]: error
      }));
   }, []);

   const handleClick = () => {
      if (!validateInfo() || !validatePassword()) return;

      const {email, firstName, lastName, country, password}  = values;

      dispatch(signUp({email, firstName, lastName, country, password}))
   }

   return (
      <div className="registration main"> 
         <Header text="Registration"/>
         <div className="column-container">
            <UploadImage/>
            <div className="registration__info">
               <ErrorBar errors={{...errors, ...passErrors}}/>
               <TextField 
                  {...REGISTRATION_INFO.firstName}
                  value={values.firstName}
                  isError={Boolean(errors.firstName)}
                  onChange={handleInfoChange("firstName")}
               />
               <TextField 
                  {...REGISTRATION_INFO.lastName} 
                  value={values.lastName}
                  isError={Boolean(errors.lastName)}
                  onChange={handleInfoChange("lastName")}
               />
               <TextField 
                  {...REGISTRATION_INFO.country} 
                  value={values.country}
                  isError={Boolean(errors.country)}
                  onChange={handleInfoChange("country")}
               />
               <TextField 
                  {...LOGIN_INFO.eMail}
                  value={values.email}
                  isError={Boolean(errors.email)}
                  onChange={handleInfoChange("email")}
               />
               <TextField 
                  {...LOGIN_INFO.password}
                  value={values.password}
                  isError={Boolean(passErrors.password)}
                  onChange={handlePassChange("password")}
               />
               <TextField 
                  {...REGISTRATION_INFO.rePassword}
                  value={values.repeatPassword}
                  isError={Boolean(passErrors.repeatPassword)}
                  onChange={handlePassChange("repeatPassword")}
               />
               <div className="button-block row">
                  <Button text={BUTTON_OK} onClick={handleClick}/>
                  <Button text={BUTTON_CANCEL} onClick={goBack}/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Registration;