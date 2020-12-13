import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../../Welcome";
import Registration from "../../Registration"

const Sign = () => {
   return (
      <Switch>
         <Route path="/" component={Welcome} exact/>
         <Route path="/registration" component={Registration} exact/>
      </Switch>
   );
}

export default Sign;