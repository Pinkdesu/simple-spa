import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { eventsSelector } from "../../redux/selectors/adminSelectors";
import { HEAD_COLS } from "./constants";
import getDate from "../../utils/getDate";
import Header from "../Common/Header";
import Table from "../Common/Table";
import TableCell from "../Common/TableCell";
import Button from "../Common/Button";
import "../../index.css"

const BrowseEvents = () => {
   const history = useHistory();
   const events = useSelector(eventsSelector);

   const goToEvent = (id) => () => {
      history.push(`/admin/event/${id}`);
   }

   const renderCells = (event) => {
      const { id, startDate, finishDate, participants, title } = event;

      const date = `${getDate(startDate)} - ${getDate(finishDate)}`;
      const values = [ title, date, participants ];

      return values.map((text, index) => {
         return <TableCell key={`${id}-${index}`} text={text} />
      });
   };

   const addEvent = () => {
      history.push("/admin/event/create");
   };

   return (
      <div className="main">
         <Header text="Events"/>
         <div className="row-container">
            <Table headCols={HEAD_COLS}>
               {events.map((event) => (
                  <tr key={event.id} onClick={goToEvent(event.id)}>
                     {renderCells(event)}
                  </tr>
               ))}
            </Table>
         </div>
         <div className="button-block row">
            <Button text="Add Event" onClick={addEvent}/>
         </div>
      </div>
   );
} 

export default BrowseEvents;