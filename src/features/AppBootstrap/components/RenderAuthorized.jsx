import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../../Profile";
import ChangePasswordPage from "../../ChangePasswordPage";

const RenderAuthorized = () => {
   return (
      <Switch>
         <Route path="/" component={Profile} exact/>
         <Route path="/change-password" component={ChangePasswordPage} exact/>
      </Switch>
   )
}

export default RenderAuthorized;