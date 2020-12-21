import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../../Profile";
import ChangePasswordPage from "../../ChangePasswordPage";
import ChangeInfoPage from "../../ChangeInfoPage";

const RenderAuthorized = () => {
   return (
      <Switch>
         <Route path="/" component={Profile} exact/>
         <Route path="/change-password" component={ChangePasswordPage} exact/>
         <Route path="/change-info" component={ChangeInfoPage} exact/>
      </Switch>
   )
}

export default RenderAuthorized;