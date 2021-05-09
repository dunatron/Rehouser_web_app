import CustomSearchBox from './CustomSearchBox';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    padding: theme.spacing(2),
    // backgroundColor: theme.palette.primary.main, // Juins styles
    // color: theme.palette.primary.contrastText, // Juins styles
  },
}));

const SearchHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography color="inherit" variant="h4">
        {COMPANY_NAME}
      </Typography>
      <Typography color="inherit" variant="body1">
        Find my happy home
      </Typography>
      {/* <CustomSearchBox /> */}
    </div>
  );
};

export default SearchHeader;
