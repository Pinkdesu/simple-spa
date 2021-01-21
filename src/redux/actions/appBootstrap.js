import * as types from "../types/appBootstrap";

export const signIn = (payload) => ({
   type: types.SIGN_IN,
   payload
});