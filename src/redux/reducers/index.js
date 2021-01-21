import { combineReducers } from 'redux';
import uiReducer from "./ui";
import adminReducer from "./admin";

const rootReducer = combineReducers({
   ui: uiReducer,
   admin: adminReducer
});

export default rootReducer;