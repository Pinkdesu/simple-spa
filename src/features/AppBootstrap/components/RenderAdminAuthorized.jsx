import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const RenderAdminAuthorized = () => {
   return (
      <Switch>
         <Route path="/admin" component={null} exact/>
         <Redirect from="*" to="/admin" exact/>
      </Switch>
   )
}

export default RenderAdminAuthorized;