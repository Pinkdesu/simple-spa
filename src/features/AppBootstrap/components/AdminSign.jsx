import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminWelcome from "../../AdminWelcome";

const AdminSign = () => {
   return (
      <Switch>
         <Route path="/admin/sign-in" component={AdminWelcome} exact/>
         <Redirect from="*" to="/admin/sign-in" exact/>
      </Switch>
   );
}

export default AdminSign;