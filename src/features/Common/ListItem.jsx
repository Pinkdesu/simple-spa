import React, { memo } from "react";
import "./style.css";

const ListItem = (props) => {
   const { text, children } = props;

   return (
      <div className="list-item">
         <span>{text}</span>
         {children}
      </div>
   )
}

export default memo(ListItem);