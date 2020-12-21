import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Common/Header";
import UploadImage from "../UploadImage";
import List from "../Common/List";
import ListItem from "../Common/ListItem";
import Button from "../Common/Button";
import "./style.css"

const Profile = () => {
   const history = useHistory();

   const goToChangePasswordPage = () => {
      history.push("/change-password");
   };

   const goToChangeInfoPage = () => {
      history.push('/change-info');
   }

   return (
      <div className="main">
         <Header text="Username"/>
         <div className="column-container">
            <UploadImage/>
            <div className="profile__info">
               <List header="Login Information" onClick={goToChangePasswordPage}>
                  <ListItem text="Email: example@gmail.com"/>
                  <ListItem text="Password: ********"/>
               </List>
               <List header="Profile Information" onClick={goToChangeInfoPage}>
                  <ListItem text="First Name: John"/>
                  <ListItem text="Last Name: Smith"/>
                  <ListItem text="Country: Russia"/>
                  <ListItem text="about: About myself"/>
               </List>
               <List header="Personal Identification Number">
                  <ListItem text="PIN">
                     <Button text="Set PIN" color="yellow"/>
                  </ListItem>
               </List>
            </div>
         </div>
      </div>
   );
}

export default Profile;