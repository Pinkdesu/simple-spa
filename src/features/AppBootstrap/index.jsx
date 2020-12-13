import React from "react";
import { useSelector } from "react-redux";
import { isAuthorizedSelector } from "../../redux/selectors/uiSelector";
import Sign from "./components/Sign";
import RenderAuthorized from "./components/RenderAuthorized";

const AppBootstrap = () => {
   const isAuthorized = useSelector(isAuthorizedSelector);

   return (
      <div className="default-view">
         {!isAuthorized ? <Sign/> : <RenderAuthorized />}
      </div>
   );
}

export default AppBootstrap;