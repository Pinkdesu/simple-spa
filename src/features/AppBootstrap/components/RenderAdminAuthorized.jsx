import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminMain from "../../AdminMain";
import BrowseUsers from "../../BrowseUsers";
import BrowseEvents from "../../BrowseEvents";
import AddEvent from "../../AddEvent";
import Event from "../../Event";
import EventTitle from "../../EventTitle";
import EventDates from "../../EventDates";
import EventParticipants from "../../EventParticipants";

const RenderAdminAuthorized = () => {
   return (
      <Switch>
         <Route path="/admin" component={AdminMain} exact/>
         <Route path="/admin/user/browse" component={BrowseUsers} exact/>
         <Route path="/admin/event/browse" component={BrowseEvents} exact/>
         <Route path="/admin/event/create" component={AddEvent} exact/>
         <Route path="/admin/event/:id" component={Event} exact/>
         <Route path="/admin/event/:id/title" component={EventTitle} exact/>
         <Route path="/admin/event/:id/dates" component={EventDates} exact/>
         <Route path="/admin/event/:id/participants" component={EventParticipants} exact/>

         <Redirect from="*" to="/admin" exact/>
      </Switch>
   )
}

export default RenderAdminAuthorized;