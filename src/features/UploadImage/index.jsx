import React, { useState } from "react";
import Button from "../Common/Button";
import UploadFile from "../Common/UploadFile";
import * as constants from "./constants";
import "./style.css";

const UploadImage = () => {
   const [base64Image, setBase64Image] = useState();

   return (
      <div className="upload-image">
         <div className="upload-image__frame">
            <div className="upload-image__thumb-block emptyPhoto">
               {base64Image && <img alt="user"/>}
            </div>
         </div>  
         <div className="upload-image__button-block">
            <UploadFile/>
            <Button text={constants.DELETE}/>
         </div>
      </div>
   );
}

export default UploadImage;