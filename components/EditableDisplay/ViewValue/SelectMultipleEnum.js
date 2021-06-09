import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import useViewStyles from './useViewStyles';
import { is } from 'ramda';

const SelectMultipleEnumDisplay = ({ item }) => {
  const classes = useViewStyles();
  return (
    <Box variant="div">
      {is(Array, item.value) ? (
        item.value.map((val, idx) => (
          <Chip key={val} className={classes.chip} size="small" label={val} />
        ))
      ) : (
        <Chip size="small" className={classes.chip} label={item.value} />
      )}
    </Box>
  );
};

export default SelectMultipleEnumDisplay;
