import React, { useState, useCallback } from "react";
import Header from "../Common/Header";
import UploadImage from "../UploadImage";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import TextArea from "../Common/TextArea";
import { REGISTRATION_INFO } from "../Registration/constants";
import { ABOUT } from "./constants";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";

const ChangeInfoPage = () => {
   const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      country: '',
      about: ''
   });

   const [errors, setErrors] = useState({
      firstName: null,
      lastName: null,
      country: null,
      about: null
   });
   
   const handleChange = useCallback((stateName) => (e) => {
      const value = e.target.value;

      setValues(prevState => ({
         ...prevState,
         [stateName]: value
      }));
   }, []);

   return (
      <div className="main">
         <Header text="Username\Profile"/>
         <div className="column-container">
            <UploadImage/>
            <div className="form-wrapper">
               <ErrorBar errors={errors}/>
               <div className="label-block">
               <TextField 
                  {...REGISTRATION_INFO.firstName}
                  value={values.firstName} 
                  isError={Boolean(errors.firstName)}
                  onChange={handleChange("firstName")}
               />
               <TextField 
                  {...REGISTRATION_INFO.lastName}
                  value={values.lastName}
                  isError={Boolean(errors.lastName)}
                  onChange={handleChange("lastName")}
               />
               <TextField 
                  {...REGISTRATION_INFO.country}
                  value={values.country}
                  isError={Boolean(errors.country)}
                  onChange={handleChange("country")}
               />
                <TextArea 
                  {...ABOUT}
                  value={values.about}
                  isError={Boolean(errors.about)}
                  onChange={handleChange('about')}
                />
               </div>
               <div className="button-block row">
                  <Button text={BUTTON_OK} />
                  <Button text={BUTTON_CANCEL}/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChangeInfoPage;