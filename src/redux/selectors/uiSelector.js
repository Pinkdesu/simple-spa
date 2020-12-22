const STORE_NAME = 'ui';

export const uiSelector = (state) => state[STORE_NAME];

export const isAuthorizedSelector = (state) => state[STORE_NAME].isAuthorized;

export const userSelector = (state) => state[STORE_NAME].user;