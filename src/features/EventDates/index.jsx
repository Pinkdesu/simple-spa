import React  from "react";
import getDate from "../../utils/getDate";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { eventSelector } from "../../redux/selectors/adminSelectors";
import useBack from "../../utils/useBack";
import { ADD_EVENT_INFO} from "../AddEvent/constants";
import { BUTTON_CANCEL, BUTTON_OK} from "../Registration/constants";
import { HEAD_COLS } from "./constants";
import Header from "../Common/Header";
import Button from "../Common/Button";
import ErrorBar from "../Common/ErrorBar";
import TextField from "../Common/TextField";
import Table from "../Common/Table";
import TableCell from "../Common/TableCell";
import "../ChangePasswordPage/style.css";

const EventDates = () => {
   const params = useParams();

   const { id } = params;
   const event = useSelector(eventSelector(+id));

   const { startDate, c1Date, c2Date, finishDate } = event;

   const goBack = useBack();

   const getDayDifference = (date, diff) => {
      const currentDate = new Date(date);
      const dateDiffDay = currentDate.setDate(currentDate.getDate() + diff);
      return getDate(dateDiffDay);
   }

   return (
      <div className="main change-password-page">
         <Header text="Events\Dates"/>
         <div style={{ margin: "20px 0"}}>
            <Table headCols={HEAD_COLS} className="colorTable">
               <tr>
                  <TableCell text={getDayDifference(c1Date, -2)}/>
                  <TableCell text={getDayDifference(c1Date, -1)}/>
                  <TableCell text={getDayDifference(c1Date, 0)}/>
                  <TableCell text={getDayDifference(c1Date, 1)}/>
                  <TableCell text={getDayDifference(c2Date, 0)}/>
                  <TableCell text={getDayDifference(c2Date, 1)}/>
               </tr>
            </Table>
         </div>
         <div className="form-wrapper">
            <ErrorBar errors={{}}/>
            <div className="label-block">
               <TextField 
                  {...ADD_EVENT_INFO.startDate}
                  value={getDate(startDate)} 
               />
               <TextField 
                  {...ADD_EVENT_INFO.c1Date}
                  value={getDate(c1Date)}
               />
               <TextField 
                  {...ADD_EVENT_INFO.c2Date}
                  value={getDate(c2Date)}
               />
               <TextField 
                  {...ADD_EVENT_INFO.finishDate}
                  value={getDate(finishDate)}
               />
            </div>
            <div className="button-block row">
               <Button text={BUTTON_OK} />
               <Button text={BUTTON_CANCEL} onClick={goBack}/>
            </div>
         </div>
      </div>
   )
}

export default EventDates;