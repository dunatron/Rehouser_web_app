import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade, lighten } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('lg')]: {
        width: theme.sideBarWidth,
        flexShrink: 0,
      },
    },

    // MAYBE THIS FFS
    rehouserAppBar: {
      width: '100%',
      backgroundColor: `${theme.palette.background.default} !important`,
      [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${theme.sideBarWidth}px) !important`,
      },
    },
    menuButton: {
      marginLeft: 0,

      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    backBtnRoot: {
      // color: 'red',
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    logoContainer: {
      borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
      paddingBottom: '16px',
      paddingTop: '16px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    logo: {
      color: theme.palette.primary.main,
      fontSize: '36px',
      display: 'block',
      width: '100%',
      textAlign: 'center',
    },
    routeablePart: {
      cursor: 'pointer',
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    drawerPaper: {
      width: theme.sideBarWidth,
      backgroundColor: theme.palette.background.default,
    },
    content: {
      position: 'relative',
      flexGrow: 1,
      padding: theme.spacing(1),
      maxWidth: '100%',
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(1),
        maxWidth: `calc(100% - ${theme.sideBarWidth}px)`,
      },
    },
    urlSection: {
      marginRight: '112px',
      display: 'flex',
      overflow: 'auto',
      direction: 'rtl',
      position: 'relative',
    },
    actions: {
      position: 'absolute',
      right: '16px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  };
});

export default useStyles;
