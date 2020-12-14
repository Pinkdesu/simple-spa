import React, { memo } from "react";
import "./style.css";

const Button = (props) => {
   const { text, color, onClick } = props;

   const getStyle = () => {
      switch(color) {
         case "blue":
            return "btnBlue"
         case "yellow":
            return "btnYellow"
         default:
            return "btnBlue"
      }
   }  

   const buttonColor = getStyle();
   
   return (
      <button onClick={onClick} className={`button ${buttonColor}`}>
         {text}
      </button>
   );
}

export default memo(Button);