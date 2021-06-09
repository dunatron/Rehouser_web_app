import { Chip } from '@material-ui/core';
import useViewStyles from './useViewStyles';

const BooleanDisplay = ({ item }) => {
  const classes = useViewStyles();
  const _getValue = () => {
    if (item.value === true) return 'YES';
    if (item.value === false) return 'NO';
    return 'Not set';
  };
  return <Chip className={classes.chip} size="small" label={_getValue()} />;
};

export default BooleanDisplay;
