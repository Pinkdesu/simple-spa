import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors/uiSelector";
import Header from "../Common/Header";
import UploadImage from "../UploadImage";
import List from "../Common/List";
import ListItem from "../Common/ListItem";
import Button from "../Common/Button";
import "./style.css"

const Profile = () => {
   const history = useHistory();

   const user = useSelector(userSelector);

   const { email, firstName, lastName, country, pin, about } = user;

   const redirectTo = (path) => () => {
      history.push(path);
   };

   return (
      <div className="main">
         <Header text="Username"/>
         <div className="column-container">
            <UploadImage/>
            <div className="profile__info">
               <List header="Login Information" onClick={redirectTo("/change-password")}>
                  <ListItem text={`Email: ${email}`}/>
                  <ListItem text="Password: *********"/>
               </List>
               <List header="Profile Information" onClick={redirectTo("/change-info")}>
                  <ListItem text={`First Name: ${firstName}`}/>
                  <ListItem text={`Last Name: ${lastName}`}/>
                  <ListItem text={`Country: ${country}`}/>
                  <ListItem text={`About: ${about}`}/>
               </List>
               <List header="Personal Identification Number">
                  <ListItem text={`PIN ${pin}`}>
                     <Button text="Set PIN" color="yellow" onClick={redirectTo("/change-pin")}/>
                  </ListItem>
               </List>
            </div>
         </div>
      </div>
   );
}

export default Profile;