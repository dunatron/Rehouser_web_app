import {
  Typography,
  Button,
  Card,
  Switch,
  FormControlLabel,
  Avatar,
} from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import RehouserPaper from '@/Styles/RehouserPaper';
import AppDrawer from '@/Components/Page/AppDrawer';

import HomePageBannerBody from '../../pages/index';
import ParticleBanner from '@/Components/Banner/ParticleBanner';
import SVG from '@/Components/Svg';

import { ButtonBase } from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

import { makefontRgba } from '../../themes/palettes/mainPalette';

// icons
import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';

// Themes
import darkTheme from '../../themes/palettes/darkPalette';
import lightTheme from '../../themes/palettes/mainPalette';

const useStyles = makeStyles(theme => ({
  base: {},
  root: {
    width: '33%',
    // height: '300px',
    display: 'inline-block',
    overflow: 'hidden',
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.contrastText,
    // // padding: '30px',
    // display: 'flex',
    // flexDirection: 'column',
    // minWidth: '320px',
    // width: '50%',
    // maxHeight: '400px',
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  title: {
    // fontSize: '0.7em',
    color: theme.palette.text.primary,
  },
  actions: {
    position: 'absolute',
    right: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  appBody: {
    padding: theme.spacing(1),
  },
  basicPanel: {
    backgroundColor: theme.palette.background.paper,
  },
  basicPanelColors: {
    width: '262px',
    display: 'flex',
    flexWrap: 'wrap',
    color: theme.palette.primary.contrastText,
  },
  basicMainPanel: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '120px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  basicLightPanel: {
    backgroundColor: theme.palette.primary.light,
    width: '50%',
    height: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  basicDarkPanel: {
    backgroundColor: theme.palette.primary.dark,
    width: '50%',
    height: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
}));

const ThemedBox = ({
  colorKey,
  range,
  theme,
  setTheme,
  darkMode,
  setDarkMode,
  appView,
}) => {
  const classes = useStyles(theme);

  const [stateTheme, setStateTheme] = useState(theme);

  //   const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeSwitchChange = event => {
    setDarkMode(event.target.checked);
  };

  const darkModeSwitch = (
    <FormControlLabel
      control={
        <Switch
          checked={darkMode}
          onChange={handleDarkModeSwitchChange}
          name="darkMode"
          color="primary"
        />
      }
      label="Dark Mode"
    />
  );

  if (!appView)
    return (
      <div className={classes.basicPanel}>
        <ButtonBase
          className={classes.basicPanelColors}
          onClick={() => setTheme(theme)}>
          <div className={classes.basicMainPanel}>
            {/* {theme.palette.primary.main} */}
            {colorKey} {range}
          </div>
          <div className={classes.basicLightPanel}>
            {/* Light */}
            {/* {theme.palette.primary.light} */}
          </div>
          <div className={classes.basicDarkPanel}>
            {/* Dark */}
            {/* {theme.palette.primary.dark} */}
          </div>
        </ButtonBase>
        <RehouserPaper square>{darkModeSwitch}</RehouserPaper>
      </div>
    );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar disableGutters={false} variant="regular">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Landlord
          </Typography>
          <div className={classes.actions}>
            <IconButton color="primary" variant="contained">
              <SearchIcon />
            </IconButton>
            <Avatar
              //   alt={me ? `${me.firstName} ${me.lastName}` : 'Account'}
              //   src={photoUrl}
              className={classes.icon}
              aria-controls="faccount-menu"
              aria-haspopup="true"
              //   onClick={handleClick}
            />
            {/* <AccountMenu me={me} /> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.appBody}>
        <div style={{ padding: '16px' }}>
          <SVG name="main_logo" />
        </div>

        <RehouserPaper>
          <div>{colorKey}</div>
          <div>{theme.palette.primary.main}</div>
          {darkModeSwitch}
        </RehouserPaper>
        <RehouserPaper>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setTheme(theme)}>
            Set {colorKey} {range}
          </Button>
        </RehouserPaper>
      </div>
    </div>
  );
};

// rgba(62, 62, 62, 0.85)
const darkFontRgb = `255, 255, 255`;
const darkModeTypes = {
  ...darkTheme,
  palette: {
    type: 'dark',
    common: { black: 'rgba(59, 40, 40, 1)', white: 'rgba(255, 255, 255, 1)' },
    background: { paper: '#424242', default: '#303030' },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: makefontRgba(darkFontRgb, 0.87),
      secondary: makefontRgba(darkFontRgb, 0.54),
      disabled: makefontRgba(darkFontRgb, 0.38),
      hint: makefontRgba(darkFontRgb, 0.38),
    },
  },
  typography: {
    ...darkTheme.typography,
  },
};

const lightFontRgb = `62, 62, 62`;
const lightModeTypes = {
  palette: {
    type: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },

    background: { paper: '#fff', default: '#fafafa' },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: makefontRgba(lightFontRgb, 0.87),
      secondary: makefontRgba(lightFontRgb, 0.54),
      disabled: makefontRgba(lightFontRgb, 0.38),
      hint: makefontRgba(lightFontRgb, 0.38),
    },
  },
  typography: {
    ...lightTheme.typography,
  },
};

const ThemedBoxWithProvider = props => {
  const [stateTheme, setStateTheme] = useState(props.theme);
  const [darkMode, setDarkMode] = useState(props.theme.palette.type === 'dark');
  useEffect(() => {
    setStateTheme({
      ...stateTheme,
      ...props.theme,
      palette: {
        type: darkMode ? 'dark' : 'light',
        ...props.theme.palette,
        ...(darkMode && darkModeTypes.palette),
        ...(!darkMode && lightModeTypes.palette),
      },
      typography: {
        ...props.theme.typography,
        ...(darkMode && darkModeTypes.palette),
        ...(!darkMode && lightModeTypes.palette),
      },
    });
  }, [props.theme, darkMode]);

  return (
    <ThemeProvider theme={stateTheme}>
      <ThemedBox
        {...props}
        theme={stateTheme}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setTheme={t => props.setTheme(t)}
      />
    </ThemeProvider>
  );
};

export default ThemedBoxWithProvider;
