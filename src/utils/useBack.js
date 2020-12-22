import { useCallback } from "react";
import { useHistory } from "react-router"

export default function useBack(defaultPath = '/') {
   const history = useHistory();
 
   return useCallback(() => {
     if (history.length < 1) {
       history.push(defaultPath);
       return;
     }
     history.goBack();
   }, [history, defaultPath]);
 };
 