import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../../Profile"

const RenderAuthorized = () => {
   return (
      <Switch>
         <Route path="/" component={Profile} exact/>
      </Switch>
   )
}

export default RenderAuthorized;