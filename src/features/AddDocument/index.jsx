import React  from "react";
import useBack from "../../utils/useBack";
import { ADD_DOCUMENT_INFO } from "./constants";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import TextArea from "../Common/TextArea";
import "../ChangePasswordPage/style.css";

const EventDates = () => {
   const goBack = useBack();

   return (
      <div className="main change-password-page">
         <Header text="Eve\Dates"/>
         <div className="form-wrapper">
            <ErrorBar errors={{}}/>
            <div className="label-block">
               <TextField 
                  {...ADD_DOCUMENT_INFO.title}
                  value={""} 
               />
               <TextField 
                  {...ADD_DOCUMENT_INFO.day}
                  value={""}
               />
               <TextArea
                  {...ADD_DOCUMENT_INFO.content}
                  value={""}
               />
               <div className="text-field">
                  <label>{ADD_DOCUMENT_INFO.forPers.label}</label>
                  <div style={{ display: "flex", flexFlow: "column nowrap"}}>
                     <label>
                        {ADD_DOCUMENT_INFO.forPers.experts}
                        <input type="radio" />
                     </label>
                     <label>
                        {ADD_DOCUMENT_INFO.forPers.competitors}
                        <input type="radio" />
                     </label>
                  </div>
               </div>
            </div>
            <div className="button-block row">
               <Button text={BUTTON_OK} />
               <Button text={BUTTON_CANCEL} onClick={goBack}/>
            </div>
         </div>
      </div>
   )
}

export default EventDates;