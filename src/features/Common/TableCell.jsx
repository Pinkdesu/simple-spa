import React from "react";
import "./style.css";

const TableCell = (props) => {
   const { text = '', children } = props;

   return (
      <td>
         {text}
         {children}
      </td>
   );
} 

export default TableCell;