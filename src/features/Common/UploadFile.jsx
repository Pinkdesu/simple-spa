import React from "react";

const UploadFile = () => {
   return (
      <label className="input--file">
          <span className="button btnBlue">Upload</span>
         <input type="file" />
      </label>
   );
}

export default UploadFile;