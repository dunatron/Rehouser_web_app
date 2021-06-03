import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade, lighten } from '@material-ui/core/styles/colorManipulator';

import {
  AppBar,
  Tooltip,
  IconButton,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
  Chip,
} from '@material-ui/core';
import clsx from 'clsx';

import { useRouter } from 'next/router';
import useCurrentScrollTop from '@/Lib/hooks/useCurrentScrollTop';

import { store } from '@/Store/index';
//icons
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';

// account menu
import AccountMenu from './AccountMenu';
import ThemePicker from './ThemePicker';

const useStyles = makeStyles(theme => {
  return {
    backBtnRoot: {
      // color: 'red',
    },
    routeablePart: {
      cursor: 'pointer',
      color: theme.palette.text.primary,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    urlSection: {
      marginRight: '112px',
      display: 'flex',
      overflow: 'auto',
      //   direction: 'rtl', // starts scroll bar on the right
      direction: 'ltr', // starts scroll bar on the left
      position: 'relative',
    },
    urlParams: {
      fontSize: '0.7em',
      color: theme.palette.text.secondary,
    },
    paramValue: {
      color: theme.palette.primary.main,
    },
  };
});

const CurrentUrl = () => {
  const router = useRouter();
  // i think maybe we do this as an inline style...
  // or use like clsx and actually have the classes you clown
  const classes = useStyles();

  const pathParts = router.asPath.split('/');
  const formattedPathParts = pathParts.filter(part => part !== '');

  const routeToClickedPart = partIndex => {
    const newRoute = formattedPathParts.reduce((acc, part, idx) => {
      if (idx + 1 === formattedPathParts.length) return acc;
      if (idx > partIndex) return acc; // shouldnt add any more than where we are going
      if (idx === partIndex) {
        return acc + part;
      }
      return acc + part + '/';
    }, '/');
    router.push({
      pathname: newRoute,
    });
  };

  const handleGoBackToPreviousPage = () => {
    if (formattedPathParts.length === 0) return;
    router.back();
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
      }}>
      {formattedPathParts.length > 0 && (
        <IconButton
          onClick={handleGoBackToPreviousPage}
          color="default"
          size="medium"
          classes={{
            root: classes.backBtnRoot,
          }}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
      )}
      {formattedPathParts.length > 0 && (
        <div className={classes.urlSection}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              direction: 'ltr',
            }}>
            {formattedPathParts.map((urlPart, idx) => {
              const key = `${urlPart}-${idx}`;
              const isLastPart =
                idx + 1 === formattedPathParts.length ? true : false;

              //   if (isLastPart) return <RenderLastPart />;

              if (!isLastPart) {
                return (
                  <Chip
                    key={key}
                    label={urlPart}
                    size="small"
                    style={{ marginRight: '4px' }}
                    onClick={() => {
                      !isLastPart ? routeToClickedPart(idx) : null;
                    }}
                  />
                );
              }
              return (
                <Typography
                  key={key}
                  variant="h6"
                  className={!isLastPart ? classes.routeablePart : null}
                  noWrap
                  onClick={() => {
                    !isLastPart ? routeToClickedPart(idx) : null;
                  }}>
                  {isLastPart ? <RenderLastPart part={urlPart} /> : urlPart}
                  {!isLastPart && '/'}
                </Typography>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const RenderLastPart = ({ part }) => {
  const classes = useStyles();
  const pathParts = part.split('?');

  const lastPartStyles = {
    color: 'grey',
    fontSize: '0.6em',
  };

  var queryparams = part.split('?')[1];

  var params = queryparams ? queryparams.split('&') : [];

  var pair = null,
    data = [];

  params.forEach(function(d) {
    pair = d.split('=');
    data.push({ key: pair[0], value: pair[1] });
  });

  return (
    <>
      {pathParts[0]}
      {data.length > 0 && (
        <span className={classes.urlParams}>
          ?
          {data.map((prt, idx) => {
            // const isLastPart = idx + 1 === pathParts.length ? true : false;
            // if (isLastPart) {
            //   return (
            //     <span style={{ color: 'grey', fontSize: '0.8em' }}>{prt.key}</span>
            //   );
            // }
            return (
              <span>
                <span>{prt.key}</span>=
                <span className={classes.paramValue}>{prt.value}</span>{' '}
              </span>
            );
          })}
        </span>
      )}
    </>
  );
};

export default CurrentUrl;
