import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors/uiSelector";
import { changeUserInfo } from "../../redux/actions/changeData";
import Header from "../Common/Header";
import UploadImage from "../UploadImage";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import TextArea from "../Common/TextArea";
import useBack from "../../utils/useBack";
import { REGISTRATION_INFO } from "../Registration/constants";
import { ABOUT } from "./constants";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import { ERROR_CODES } from "../../constants";

const ChangeInfoPage = () => {
   const dispatch = useDispatch();
   
   const user = useSelector(userSelector);
   
   const { firstName, lastName, country, about } = user;
   
   const [values, setValues] = useState({
      firstName,
      lastName,
      country,
      about,
   });
   
   const [errors, setErrors] = useState({
      firstName: null,
      lastName: null,
      country: null,
      about: null
   });
   
   const goBack = useBack();

   const handleChange = useCallback((stateName) => (e) => {
      const value = e.target.value;

      setValues(prevState => ({
         ...prevState,
         [stateName]: value
      }));

      setErrors(prevState => ({
         ...prevState,
         [stateName]: null
      }));
   }, []);

   const validateInfo = () => {
      const currentErrorrs = { ...errors };
      const { firstName, lastName, country } = values;
      
      let isValide = true;

      if(!firstName.length){
         currentErrorrs["firstName"] = ERROR_CODES[5];
         isValide = false;
      }

      if(!lastName.length) {
         currentErrorrs["lastName"] = ERROR_CODES[5];
         isValide = false;
      }

      if(!country.length) {
         currentErrorrs["country"] = ERROR_CODES[5];
         isValide = false;
      }
      
      setErrors(currentErrorrs);

      return isValide;
   }

   const handleClick = () => {
      const { firstName, lastName, country, about } = values;
      console.log(firstName);
      if(!validateInfo()) return;
      dispatch(changeUserInfo({firstName, lastName, country, about}));
      goBack();
   }

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
                  <Button text={BUTTON_OK} onClick={handleClick}/>
                  <Button text={BUTTON_CANCEL} onClick={goBack}/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChangeInfoPage;