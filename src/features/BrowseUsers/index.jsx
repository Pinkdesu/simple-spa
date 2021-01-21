import React from "react";
import { useSelector } from "react-redux";
import { usersSelector } from "../../redux/selectors/adminSelectors";
import { HEAD_COLS } from "./constants";
import Header from "../Common/Header";
import Table from "../Common/Table";
import TableCell from "../Common/TableCell";
import Button from "../Common/Button";
import "../../index.css"

const BrowseUsers = () => {
   const users = useSelector(usersSelector);

   const renderCells = (user) => {
      const { id, ...others } = user;
      const values = Object.values(others);

      return values.map((text, index) => {
         if (index === 3)
            return (
               <TableCell key={`${id}-${index}`}>
                  <Button text={text} color={text === "assign" ? "yellow" : 'red'}/>
               </TableCell>
            ); 

         return <TableCell key={`${id}-${index}`} text={text} />
      });
   };

   return (
      <div className="main">
         <Header text="Admin"/>
         <div className="row-container">
            <Table headCols={HEAD_COLS}>
               {users.map((user) => (
                  <tr key={users.id}>
                     {renderCells(user)}
                  </tr>
               ))}
            </Table>
         </div>
         <div className="button-block row">
            <Button text="Ok"/>
            <Button text="Cancel"/>
         </div>
      </div>
   );
} 

export default BrowseUsers;