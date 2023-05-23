import react from'react';
import moment from 'moment';
export const displayFormattedTime=(date:any)=> {
 return moment.utc(date).local().format("DD/MM/YYYY hh:mm A");
}

//displayFormattedTime("1999-01-01T01:00:00+00:00")
