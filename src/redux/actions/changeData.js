import * as types from "../types/changeData";

export const changePassword = (password) => ({
   type: types.CHANGE_PASSWORD,
   payload: {
      password
   }
})