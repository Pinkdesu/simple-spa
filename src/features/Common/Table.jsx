import React from "react";
import TableCell from "./TableCell";
import "./style.css";

const Table = (props) => {
   const { headCols = [], className = '', children } = props;

   return (
      <table className={`table ${className}`}>
         <thead>
            <tr>
               {headCols.map((text, index) => (
                  <TableCell key={index} text={text}/>
               ))}
            </tr>
         </thead>

         <tbody>
            {children}
         </tbody>
      </table>
   );
} 

export default Table;