import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "../../Profile";
import ChangePasswordPage from "../../ChangePasswordPage";
import ChangeInfoPage from "../../ChangeInfoPage";
import ChangePinPage from "../../ChangePinPage";

const RenderAuthorized = () => {
   return (
      <Switch>
         <Route path="/" component={Profile} exact/>
         <Route path="/change-password" component={ChangePasswordPage} exact/>
         <Route path="/change-info" component={ChangeInfoPage} exact/>
         <Route path="/change-pin" component={ChangePinPage} exact/>
         <Redirect from="*" to="/" exact/>
      </Switch>
   )
}

export default RenderAuthorized;