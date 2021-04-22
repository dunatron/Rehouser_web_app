import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listItem: {
    // backgroundColor: 'rgba(0, 0, 0, 0.08)',
    // color: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  listItemSelected: {
    background: `${theme.palette.primary.main} !important`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  listItemHover: {
    background: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  listItemIcon: {
    color: 'inherit',
  },
  listItemText: {
    // color: theme.palette.primary.main,
    // fontFamily: 'GustanMedium',
    color: 'inherit',
  },
  listItemTextCurrent: {
    color: theme.palette.primary.contrastText,
  },
  listItemDivider: {
    // borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
  },
}));

export default useStyles;
