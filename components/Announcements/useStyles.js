import {
  Box,
  Typography,
  Checkbox,
  ListItemSecondaryAction,
  Button,
  IconButton,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import List from '@material-ui/core/List';

import CloseIcon from '@material-ui/icons/Close';
import ResendConfrimEmail from '@/Components/MutationButtons/ResendConfirmEmail';

const useStyles = makeStyles(theme => ({
  container: {
    color: theme.palette.text.primary,
    border: '1px solid green',
    width: '100%',
  },
  announcement: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    opacity: 0.85,
    border: '5px solid',
    borderColor: theme.palette.primary.main,
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    padding: '16px',
  },
  contentUrl: {
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
    },
  },
  text: {
    marginBottom: '16px',
  },
  type: {},
  closeBox: {
    // padding: '16px 16px 16px 0',
    position: 'relative',
    top: '-12px',
  },
  close: {
    color: theme.palette.primary.main,
    transition: 'all .25s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    color: theme.palette.primary.main,
    marginBottom: '8px',
  },
  action: {
    marginRight: '8px',
    marginBottom: '8px',
  },
}));

export default useStyles;
