import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "../../Welcome";
import Registration from "../../Registration"

const Sign = () => {
   return (
      <Switch>
         <Route path="/" component={Welcome} exact/>
         <Route path="/registration" component={Registration} exact/>
         <Redirect from="*" to="/" exact/>
      </Switch>
   );
}

export default Sign;