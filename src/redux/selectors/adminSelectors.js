const STORE_NAME = 'admin';

export const isAdminAuthorizedSelector = (state) => state[STORE_NAME].isAdminAuthorized;

export const adminSelector = (state) => state[STORE_NAME].admin;