import React, { memo } from "react";
import "./style.css";

const AdminListItem = (props) => {
   const { text, onClick } = props;

   return (
      <div className="list-item" onClick={onClick}>
         <span>{text}</span>
      </div>
   )
}

export default memo(AdminListItem);