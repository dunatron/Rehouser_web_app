import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  noPadding: {
    padding: 0,
  },
}));

import Paper from '@material-ui/core/Paper';

const RehouserPaper = ({ attrs, children, ...rest }) => {
  const disablePadd = attrs?.disablePadding ? attrs.disablePadding : false;
  const classes = useStyles();
  const rootClasses = clsx({
    [classes.root]: true,
    [classes.noPadding]: disablePadd,
  });
  return (
    <Paper
      {...rest}
      classes={{
        root: rootClasses,
      }}>
      {children}
    </Paper>
  );
};

export default RehouserPaper;
