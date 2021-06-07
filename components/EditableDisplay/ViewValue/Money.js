import Chip from '@material-ui/core/Chip';
import useViewStyles from './useViewStyles';
import { formatMoneyVal } from '@/Lib/formatMoney';

const MoneyDisplay = ({ item }) => {
  const classes = useViewStyles();
  return (
    <Chip
      className={classes.chip}
      size="small"
      label={formatMoneyVal(item.value)}
    />
  );
};

export default MoneyDisplay;
