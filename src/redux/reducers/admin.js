import produce from "immer"
import * as types from "../types/admin";
import { USERS } from "../../constants";

const initialState = {
   admin: {
      email: '',
      password: ''
   },
   users: USERS,
   isAdminAuthorized: false
}

const adminReducer = (state = initialState, action) => 
 produce(state, (draft) => {
   const { type, payload } = action;

   switch (type) {
      case types.SIGN_IN: {
         draft.isAdminAuthorized = true;
         
         draft.admin = {
            ...draft.admin,
            ...payload
         };

         break
      }
      default: 
         break;
   }
});

export default adminReducer;