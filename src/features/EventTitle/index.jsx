import React from "react";
import { ADD_EVENT_INFO } from "../AddEvent/constants"
import useBack from "../../utils/useBack";
import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { eventSelector } from "../../redux/selectors/adminSelectors";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";

const EventTitle = () => {
   const params = useParams();
   
   const { id } = params;
   const event = useSelector(eventSelector(+id));
   
   const goBack = useBack();
   
   return(
      <div className="main">
         <Header text="Event\Title"/>
         <div className="form-wrapper">
            <ErrorBar errors={{}}/>
               <div className="label-block">
               <TextField 
                  {...ADD_EVENT_INFO.title}
                  value={event.title} 
               />
               </div>
               <div className="button-block row">
                  <Button text={BUTTON_OK} />
                  <Button text={BUTTON_CANCEL} onClick={goBack} />
               </div>
         </div>
      </div>
   );
}

export default EventTitle;