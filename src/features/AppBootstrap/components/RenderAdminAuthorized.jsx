import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminMain from "../../AdminMain";
import BrowseUsers from "../../BrowseUsers";

const RenderAdminAuthorized = () => {
   return (
      <Switch>
         <Route path="/admin" component={AdminMain} exact/>
         <Route path="/admin/user/browse" component={BrowseUsers} exact/>
         <Redirect from="*" to="/admin" exact/>
      </Switch>
   )
}

export default RenderAdminAuthorized;