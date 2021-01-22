import React from "react";
import getDate from "../../utils/getDate";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { eventSelector } from "../../redux/selectors/adminSelectors";
import Header from "../Common/Header";
import UploadImage from "../UploadImage";
import List from "../Common/List";
import ListItem from "../Common/ListItem";
import Button from "../Common/Button";
import "../Profile/style.css"

const Event = () => {
   const params = useParams();
   const history = useHistory();

   const { id } = params;

   const event = useSelector(eventSelector(+id));

   const { title, startDate, c1Date, c2Date, finishDate, participants } = event;

   const redirectTo = (path) => () => {
      history.push(path);
   };

   return (
      <div className="main">
         <Header text="Events\Example Event"/>
         <div className="column-container">
            <UploadImage/>
            <div className="profile__info">
               <List header="Event Information" onClick={redirectTo(`/admin/event/${id}/title`)}>
                  <ListItem text={`Event Title: ${title}`}/>
               </List>
               <List header="Dates Information" onClick={redirectTo(`/admin/event/${id}/dates`)}>
                  <ListItem text={`Start Date: ${getDate(startDate)}`}/>
                  <ListItem text={`C1 Date: ${getDate(c1Date)}`}/>
                  <ListItem text={`C+1 Date: ${getDate(c2Date)}`}/>
                  <ListItem text={`Finish Date: ${getDate(finishDate)}`}/>
               </List>
               <List header="Participants">
                  <ListItem text={`Participants: ${participants}`}>
                     <Button 
                        text="Assign" 
                        color="yellow" 
                        onClick={redirectTo(`/admin/event/${id}/participants`)}
                    />
                  </ListItem>
               </List>
            </div>
         </div>
      </div>
   );
}

export default Event;