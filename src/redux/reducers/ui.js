import * as appTypes from "../types/appBootstrap";
import * as changeDataTypes from "../types/changeData";
import produce from "immer"

const initialState = {
   user: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      country: '',
      about: '',
      pin: ''
   },
   isAuthorized: false
}

const uiReducer = (state = initialState, action) => 
produce(state, (draft) => {
   const { type, payload } = action;

   switch (type) {
      case appTypes.SIGN_IN: {
         draft.isAuthorized = true;
         draft.user = {
            ...draft.user,
            ...payload
         };

         break;
      }

      case changeDataTypes.CHANGE_PIN:
      case changeDataTypes.CHANGE_PASSWORD: 
      case changeDataTypes.CHANGE_USER_INFO: {
         draft.user = {
            ...draft.user,
            ...payload,
         }
         break;
      }
      
      default: 
         break;
   }
});

export default uiReducer;