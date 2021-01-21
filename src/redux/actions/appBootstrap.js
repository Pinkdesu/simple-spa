import * as types from "../types/appBootstrap";

export const signIn = (payload) => ({
   type: types.SIGN_IN,
   payload
});

export const signUp = (payload) => ({
   type: types.SIGN_UP,
   payload
});