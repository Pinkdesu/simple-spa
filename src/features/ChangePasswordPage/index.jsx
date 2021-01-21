import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors/uiSelector";
import { changePassword } from "../../redux/actions/changeData";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import * as constants from "./constants"
import useBack from "../../utils/useBack";
import { ERROR_CODES } from "../../constants";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import "./style.css";

const ChangePasswordPage = () => {
   const dispatch = useDispatch();

   const user = useSelector(userSelector);
   const { email, password } = user;

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

   const onError = useCallback((stateName, value) => {
      const isError = value.length < 8 && value.length !== 0;
      const error = isError ? ERROR_CODES[3] : null;

      setErrors(prevState => ({
         ...prevState,
         [stateName]: error,
      }));
   }, [])

   const validePassword = () => {
      const currentErrors = {};
      const { currentPassword, newPassword, repeatPassword } = values;
      
      let isValid = true;

      if (currentPassword !== password) {
         currentErrors["currentPassword"] = ERROR_CODES[2];
         isValid = false;
      }

      if (newPassword !== repeatPassword) {
         currentErrors["newPassword"] = ERROR_CODES[4];
         currentErrors["repeatPassword"] = ERROR_CODES[4];
         isValid = false;
      }

      if(!isValid) {
         setErrors(currentErrors);
      }

      return isValid;
   };

   const handleChange = useCallback((stateName) => (e) => {
      const value = e.target.value;

      setValues(prevState => ({
         ...prevState,
         [stateName]: value
      }));

      onError(stateName, value);
   }, [onError]);

   const saveChanges = () => {
      const { currentPassword, repeatPassword, newPassword} = values; 

      if(!currentPassword.length || !repeatPassword.length || !newPassword.length) return;
      if(!validePassword()) return;

      dispatch(changePassword(values.newPassword))
      goBack();
   };

   const goBack = useBack();

   return (
      <div className="main change-password-page">
         <Header text="Username\Login"/>
         <div className="form-wrapper">
            <ErrorBar errors={errors}/>
            <div className="label-block">
               <label>Email: {email}</label>
               <TextField 
                  {...constants.CHANGE_LOGIN_INFO.currentPassword}
                  value={values.currentPassword} 
                  isError={Boolean(errors.currentPassword)}
                  onChange={handleChange("currentPassword")}
               />
               <TextField 
                  {...constants.CHANGE_LOGIN_INFO.newPassword}
                  value={values.newPassword}
                  isError={Boolean(errors.newPassword)}
                  onChange={handleChange("newPassword")}
               />
               <TextField 
                  {...constants.CHANGE_LOGIN_INFO.repeatPassword}
                  value={values.repeatPassword}
                  isError={Boolean(errors.repeatPassword)}
                  onChange={handleChange("repeatPassword")}
               />
            </div>
            <div className="button-block row">
               <Button text={BUTTON_OK} onClick={saveChanges}/>
               <Button text={BUTTON_CANCEL} onClick={goBack}/>
            </div>
         </div>
      </div>
   )
}

export default ChangePasswordPage;