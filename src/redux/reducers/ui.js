import * as types from "../types/appBootstrap";

const initialState = {
   isAuthorized: false
}

const uiReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case types.SIGN_IN: 
         return {...state, isAuthorized: true }
      default:
         return state;
   }
}
export default uiReducer;