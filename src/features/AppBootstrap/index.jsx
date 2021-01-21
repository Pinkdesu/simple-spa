import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { isAuthorizedSelector } from "../../redux/selectors/uiSelector";
import { isAdminAuthorizedSelector } from "../../redux/selectors/adminSelectors";
import AdminSign from "./components/AdminSign";
import Sign from "./components/Sign";
import RenderAuthorized from "./components/RenderAuthorized";
import RenderAdminAuthorized from "./components/RenderAdminAuthorized";

const AppBootstrap = () => {
   const location = useLocation();

   const isAuthorized = useSelector(isAuthorizedSelector);
   const isAdminAuthorized = useSelector(isAdminAuthorizedSelector);

   if(location.pathname.includes('/admin')) {
      return (
         <div className="default-view">
            {!isAdminAuthorized ? <RenderAdminAuthorized/>: <AdminSign/>}
         </div>
      );
   }
 
   return (
      <div className="default-view">
         {isAuthorized ? <RenderAuthorized /> : <Sign />}
      </div>
   );
}

export default AppBootstrap;