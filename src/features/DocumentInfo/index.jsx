import React  from "react";
import getDate from "../../utils/getDate";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { documentSelector } from "../../redux/selectors/adminSelectors";
import useBack from "../../utils/useBack";
import { ADD_DOCUMENT_INFO } from "../AddDocument/constants";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import TextArea from "../Common/TextArea";
import "../ChangePasswordPage/style.css";

const DocumentInfo = () => {
   const params = useParams();

   const { id } = params;
   const document = useSelector(documentSelector(+id));

   const { title, day, content, forPers } = document;

   const goBack = useBack();

   return (
      <div className="main change-password-page">
         <Header text="Documents\Document Info"/>
         <div className="form-wrapper">
            <ErrorBar errors={{}}/>
            <div className="label-block">
               <TextField 
                  {...ADD_DOCUMENT_INFO.title}
                  value={title} 
               />
               <TextField 
                  {...ADD_DOCUMENT_INFO.day}
                  value={day}
               />
               <TextArea 
                  {...ADD_DOCUMENT_INFO.content}
                  value={content}
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

export default DocumentInfo;