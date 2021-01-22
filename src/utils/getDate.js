// eslint-disable-next-line import/no-anonymous-default-export
export default function(date) {
   const currentDate = new Date(date);

   return currentDate.toISOString().split('T')[0];
};