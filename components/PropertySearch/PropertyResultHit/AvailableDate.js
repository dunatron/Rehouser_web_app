import {
  Paper,
  Typography,
  Badge,
  IconButton,
  Icon,
  Tooltip,
  ButtonGroup,
  Button,
} from '@material-ui/core';

import moment from 'moment';

const AvailableDate = ({ hit }) => {
  const availableNow =
    moment(hit.move_in_date_timestamp).unix() < moment().unix();
  return (
    <div>
      <Typography gutterBottom color="textSecondary">
        Available{' '}
        {availableNow
          ? ' NOW'
          : moment.unix(hit.move_in_date_timestamp).format('Do MMM, YYYY')}
      </Typography>
    </div>
  );
};

export default AvailableDate;
