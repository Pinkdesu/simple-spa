export const ERROR_CODES = {
   1: 'Email address entered incorrectly',
   2: 'Password entered incorrectly',
   3: 'The password must consist of at least 8 characters',
   4: 'The passwords do not match',
   5: 'The field cannot be empty',
   6: 'The PIN code must contain 4 digits',
}

export const USERS = [
   { 
      id: 1,
      name: 'John Smith',
      event: 'Example Event',
      role: 'Expert',
      assign: 'assign'
   },
   { 
      id: 2,
      name: 'Jock Johnson',
      event: 'Example Event',
      role: 'Competitor',
      assign: 'remove'
   },
];

export const EVENTS = [
   {
      id: 1,
      userId: 1,
      title: 'Example Event #1',
      startDate: new Date("2020-12-01"),
      finishDate: new Date("2020-12-06"),
      c1Date: new Date("2020-12-03"),
      c2Date: new Date("2020-12-05"),
      participants: 12,
   },
   {
      id: 2,
      userId: 2,
      title: 'Example Event #2',
      startDate: new Date("2020-11-01"),
      finishDate: new Date("2020-11-06"),
      c1Date: new Date("2020-11-03"),
      c2Date: new Date("2020-11-05"),
      participants: 15,
   },
];