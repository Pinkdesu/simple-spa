const STORE_NAME = 'admin';

export const isAdminAuthorizedSelector = (state) => state[STORE_NAME].isAdminAuthorized;

export const adminSelector = (state) => state[STORE_NAME].admin;

export const usersSelector = (state) => state[STORE_NAME].users;

export const eventsSelector = (state) => state[STORE_NAME].events;

export const eventSelector = (id) => (state) => {
   const events = state[STORE_NAME].events;
   
   return events.find(event => event.id === id);
}

export const documentsSelector = (state) => state[STORE_NAME].documents;

export const documentSelector = (id) => (state) => {
   const documents = state[STORE_NAME].documents;
   
   return documents.find(document => document.id === id);
}