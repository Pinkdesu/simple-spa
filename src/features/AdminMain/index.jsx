import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Common/Header";
import AdminList from "../Common/AdminList";
import AdminListItem from "../Common/AdminListItem";
import "../../index.css"

const AdminMain = () => {
   const history = useHistory();

   const redirectTo = (path) => () => {
      history.push(path);
   };

   return (
      <div className="main">
         <Header text="Home"/>
         <div className="column-container">
            <AdminList header="Users">
               <AdminListItem text="Browse" onClick={redirectTo('/admin/user/browse')}/>
               <AdminListItem text="Create" onClick={redirectTo('/admin/user/create')}/>
               <AdminListItem text="Assign" onClick={redirectTo('/admin/user/assign')}/>
            </AdminList>   
            <AdminList header="Events">
               <AdminListItem text="Browse" onClick={redirectTo('/admin/event/browse')}/>
               <AdminListItem text="Create" onClick={redirectTo('/admin/event/create')}/>
               <AdminListItem text="Assign" onClick={redirectTo('/admin/event/assign')}/>
            </AdminList>   
            <AdminList header="Documents">
               <AdminListItem text="Browse" onClick={redirectTo('/admin/document/browse')}/>
               <AdminListItem text="Create" onClick={redirectTo('/admin/document/create')}/>
               <AdminListItem text="Download" onClick={redirectTo('/admin/document/download')}/>
            </AdminList>   
         </div>
      </div>
   );
}

export default AdminMain;