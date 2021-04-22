import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography, Grid } from '@material-ui/core';
import {
  deepOrange,
  deepPurple,
  blueGrey,
  lightGreen,
  green,
  lightBlue,
  red,
} from '@material-ui/core/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import theme from '@/Themes/palettes/darkPalette';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 2, 0, 2),
    marginBottom: theme.spacing(2),
    maxWidth: '920px',
  },
  checkIcon: {
    color: theme.palette.primary.contrastText,
    marginRight: theme.spacing(2),
  },
  messageStrip: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  children: {
    color: theme.palette.primary.contrastText,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  actionItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    // marginTop: theme.spacing(2),
    margin: theme.spacing(0, 1, 1, 0),
  },
}));

const SuccessPaper = ({ children, actions, handleCreateMore, show }) => {
  const classes = useStyles();

  if (!show) return null;

  return (
    <Paper variant="outlined" square className={classes.root}>
      <div className={classes.messageStrip}>
        <CheckCircleOutlineIcon className={classes.checkIcon} />
        <Typography className={classes.children} variant="subtitle1">
          {children}
        </Typography>
      </div>
      <div className={classes.actions}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} className={classes.actionItem}>
            <Button
              onClick={handleCreateMore}
              className={classes.button}
              variant="text"
              color="primary">
              Create More
            </Button>
          </Grid>
          {actions &&
            actions.map((action, idx) => (
              <Grid key={idx} item xs={6} md={4} className={classes.actionItem}>
                <span className={classes.button}>{action}</span>
              </Grid>
            ))}
        </Grid>
      </div>
    </Paper>
  );
};

SuccessPaper.propTypes = {
  children: PropTypes.any,
  handleCreateMore: PropTypes.any,
  show: PropTypes.any,
};

export default SuccessPaper;
