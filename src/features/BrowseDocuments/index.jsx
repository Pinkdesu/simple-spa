import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { documentsSelector } from "../../redux/selectors/adminSelectors";
import { HEAD_COLS } from "./constants";
import Header from "../Common/Header";
import Table from "../Common/Table";
import TableCell from "../Common/TableCell";
import Button from "../Common/Button";
import "../../index.css"

const BrowseDocuments = () => {
   const history = useHistory();
   const documents = useSelector(documentsSelector);

   const goToDocument = (id) => () => {
      history.push(`/admin/document/${id}`);
   }

   const renderCells = (document) => {
      const { id, title, day, forPers } = document;

      const values = [ title, day, forPers ];

      return values.map((text, index) => {
         return <TableCell key={`${id}-${index}`} text={text} />
      });
   };

   const addDocument = () => {
      history.push("/admin/document/create");
   };

   return (
      <div className="main">
         <Header text="Documents"/>
         <div className="row-container">
            <Table headCols={HEAD_COLS}>
               {documents.map((document) => (
                  <tr key={document.id} onClick={goToDocument(document.id)}>
                     {renderCells(document)}
                  </tr>
               ))}
            </Table>
         </div>
         <div className="button-block row">
            <Button text="Add Document" onClick={addDocument}/>
         </div>
      </div>
   );
} 

export default BrowseDocuments;