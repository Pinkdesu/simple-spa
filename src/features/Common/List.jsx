import React from "react";
import {ReactComponent as WriteSVG} from "../../assets/image/write.svg";
import "./style.css";

const List = (props) => {
   const { header, children } = props;

   return (
      <div className="list">
         <div className="list__header">
            <span className="header__name">{header}</span>
            <span className="header__icon">
               <WriteSVG/>
            </span>
         </div>

         <div className="list__content">
            {children}
         </div>
      </div>
   )
}

export default List;