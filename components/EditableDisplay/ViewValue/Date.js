import Chip from '@material-ui/core/Chip';
import useViewStyles from './useViewStyles';

import moment from 'moment';

const DateDisplay = ({ item }) => {
  const classes = useViewStyles();
  return (
    <Chip
      className={classes.chip}
      size="small"
      label={moment(item.value).format(
        item.format ? item.format : 'ddd Do MMM YYYY'
      )}
    />
  );
};

export default DateDisplay;
