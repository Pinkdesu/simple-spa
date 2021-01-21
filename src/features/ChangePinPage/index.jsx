import React, { useState} from "react";
import { PIN } from "./constants";
import useBack from "../../utils/useBack";
import { useDispatch } from "react-redux";
import { changePin } from "../../redux/actions/changeData";
import { ERROR_CODES } from "../../constants"
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";

const ChangePinPage = () => {
   const dispatch = useDispatch();

   const [pin, setPin] = useState('');
   const [error, setError] = useState({ pin: null });

   const goBack = useBack();

   const validePin = () => {
      let pinError = error.pin;

      if (pin < 1000 || pin > 9999 || isNaN(pin)) {
         pinError = ERROR_CODES[6] 
      }

      setError({ pin: pinError });
   }

   const handleChange = (e) => {
      const value = +e.target.value;
      
      if(isNaN(value) || value > 9999) return;

      setPin(value);
      setError({ pin: null})
   }

   const handleClick = () => {
      if(!validePin()) return;

      dispatch(changePin(pin));
      goBack();
   }

   return(
      <div className="main">
         <Header text="Username\PIN"/>
         <div className="form-wrapper">
            <ErrorBar errors={error}/>
               <div className="label-block">
               <TextField 
                  {...PIN}
                  value={pin} 
                  isError={Boolean(error.pinError)}
                  onChange={handleChange}
               />
               </div>
               <div className="button-block row">
                  <Button text={BUTTON_OK} onClick={handleClick}/>
                  <Button text={BUTTON_CANCEL} onClick={goBack}/>
               </div>
         </div>
      </div>
   );
}

export default ChangePinPage;