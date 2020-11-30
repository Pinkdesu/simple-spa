import React from "react";
import { useSelector } from "react-redux";
import { isAuthorizedSelector } from "../../redux/selectors/uiSelector";
import Sign from "./components/Sign";

const AppBootstrap = () => {
   const isAuthorized = useSelector(isAuthorizedSelector);

   return (
      <div className="default-view">
         {!isAuthorized ? <Sign/> : null}
      </div>
   );
}

export default AppBootstrap;