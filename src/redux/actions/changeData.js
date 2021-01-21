import * as types from "../types/changeData";

export const changePassword = (password) => ({
   type: types.CHANGE_PASSWORD,
   payload: {
      password
   }
})

export const changeUserInfo = ({ firstName, lastName, country, about}) => ({
   type: types.CHANGE_USER_INFO,
   payload: {  
      firstName,
      lastName,
      country,
      about
   }
});

export const changePin = (pin) => ({
   type: types.CHANGE_PIN,
   paylaod: {
      pin
   }
})