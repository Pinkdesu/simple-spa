import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../../Welcome";

const Sign = () => {
   return (
      <Switch>
         <Route path="/" component={Welcome}/>
      </Switch>
   );
}

export default Sign;