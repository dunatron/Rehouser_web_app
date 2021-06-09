import Chip from '@material-ui/core/Chip';
import useViewStyles from './useViewStyles';

import moment from 'moment';

const DateTimeDisplay = ({ item }) => {
  const classes = useViewStyles();
  return (
    <Chip
      className={classes.chip}
      size="small"
      label={moment(item.value).format(
        item.format ? item.format : 'ddd Do MMM YYYY hh:mm a'
      )}
    />
  );
};

export default DateTimeDisplay;
