import React  from "react";
import useBack from "../../utils/useBack";
import { useHistory, useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { documentSelector } from "../../redux/selectors/adminSelectors";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import Header from "../Common/Header";
import Button from "../Common/Button";
import List from "../Common/List";
import ListItem from "../Common/ListItem";
import "../ChangePasswordPage/style.css";

const EventDates = () => {
   const params = useParams();
   const history = useHistory();

   const { id } = params;

   const document = useSelector(documentSelector(+id));
   const {title, day, content, forPers } = document;
   
   const redirectTo = (path) => () => {
      history.push(path);
   };
   
   const goBack = useBack();

   return (
      <div className="main">
         <Header text="Documents\Document"/>
         <div className="row-content">
         <div>
            <List header="Document Information" onClick={redirectTo(`/admin/document/${id}/info`)}>
               <ListItem text={`Document Title: ${title}`}/>
               <ListItem text={`Day: ${day}`}/>
               <ListItem text={`Document Content: ${content}`}/>
               <ListItem text={`For: ${forPers}`}/>
            </List>
         </div>
            <div className="button-block row">
               <Button text={BUTTON_OK} />
               <Button text={BUTTON_CANCEL} onClick={goBack}/>
               <Button text="Delete" color="red"/>
            </div>
         </div>
      </div>
   )
}

export default EventDates;