import React, { useState} from "react";
import { PIN } from "./constants";
import useBack from "../../utils/useBack";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";

const ChangePinPage = () => {
   const [pin, setPin] = useState('');
   const [error, setError] = useState({ pinError: null });

   const handleChange = (e) => {
      const value = +e.target.value;

      if(!isNaN(value))
         setPin(value);
   }

   const goBack = useBack();

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
                  <Button text={BUTTON_OK} />
                  <Button text={BUTTON_CANCEL} onClick={goBack}/>
               </div>
         </div>
      </div>
   );
}

export default ChangePinPage;