import Chip from '@material-ui/core/Chip';
import useViewStyles from './useViewStyles';

const StringDisplay = ({ item }) => {
  const classes = useViewStyles();
  return <Chip className={classes.chip} size="small" label={item.value} />;
};

export default StringDisplay;
