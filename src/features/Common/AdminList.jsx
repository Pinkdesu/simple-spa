import React from "react";
import "./style.css";

const AdminList = (props) => {
   const { header, children } = props;

   return (
      <div className="admin_list">
         <div className="admin_list__header">
            <span className="header__name">{header}</span>
         </div>

         <div className="list__content">
            {children}
         </div>
      </div>
   )
}

export default AdminList;