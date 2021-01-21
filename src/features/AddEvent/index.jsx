import React  from "react";
import { ADD_EVENT_INFO } from "./constants";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import Header from "../Common/Header";
import UploadImage from "../UploadImage";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import useBack from "../../utils/useBack";
import "../../index.css";

const AddEvent = () => {
   const goBack = useBack();

   return (
      <div className="main">
         <Header text="Events\New Event"/>
         <div className="column-container">
            <UploadImage/>
            <div className="form-wrapper">
               <ErrorBar errors={{}}/>
               <div className="label-block">
               <TextField 
                  {...ADD_EVENT_INFO.title}
                  value={""}
               />
               <TextField 
                  {...ADD_EVENT_INFO.startDate}
                  value={""}
               />
               <TextField 
                  {...ADD_EVENT_INFO.c1Date}
                  value={""}
               />
               <TextField 
                  {...ADD_EVENT_INFO.c2Date}
                  value={""}
               />
               <TextField 
                  {...ADD_EVENT_INFO.finishDate}
                  value={""}
               />
               </div>
               <div className="button-block row">
                  <Button text={BUTTON_OK} />
                  <Button text={BUTTON_CANCEL} onClick={goBack}/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AddEvent;