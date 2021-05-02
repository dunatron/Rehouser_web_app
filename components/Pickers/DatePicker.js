import React, { useState } from 'react';
import moment from 'moment';

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// API: https://material-ui-pickers.dev/api/KeyboardDatePicker
// https://material-ui-pickers.dev/demo/datepicker
// https://material-ui-pickers.dev/api/DatePicker
const RehouserDatePicker = ({ value, defaultValue, onChange, ...rest }) => {
  // const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(defaultValue);

  // Our DB only takes 2021-04-30T21:37:00+12:00
  // an this DB picker formats the string and date. we want to display that format then well reformat it back i guess
  // Unless for now, we could hold a. Nope thats more work. Allow format here and onCHange you will need to format it back, perhaps do that here
  const handleDateChange = date => {
    // if you think this is werid and unessarry you would be half right.
    // our db takes a specific string and this picker only has options to format the return value
    onChange(moment(date).format());
    setSelectedDate(date);
  };
  return (
    <div>
      <KeyboardDatePicker
        // color="primary"
        // readOnly
        disableToolbar
        clearable
        emptyLabel=""
        variant="dialog"
        style={{
          color: `inherit !important`,
        }}
        value={selectedDate} // null for no value
        onChange={handleDateChange}
        InputAdornmentProps={{ position: 'start' }}
        {...rest}
      />
    </div>
  );
};

export default RehouserDatePicker;
