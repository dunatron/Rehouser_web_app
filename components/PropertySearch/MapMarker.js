import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { IconButton } from '@material-ui/core';
import { CustomMarker } from 'react-instantsearch-dom-maps';

import { makeStyles } from '@material-ui/core/styles';

//icons
import CloseIcon from '@material-ui/icons/Close';
import { formatMoneyVal } from '@/Lib/formatMoney';

import PropertyResultHit from './PropertyResultHit';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    // backgroundColor: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    top: 0,
    overflow: 'scroll',
    borderTop: `8px solid ${theme.palette.primary.main}`,
    borderLeft: `8px solid ${theme.palette.primary.main}`,
    borderBottom: `8px solid ${theme.palette.primary.main}`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    top: 0,
    position: 'sticky',
    // backgroundColor: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
    opacity: 0.9,
    zIndex: 100,
  },
  marker: {
    border: '1px solid grey',
    padding: '4px',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    fontWeight: 900,
    fontSize: '1.6em',
    '&:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
}));

const MapMarker = ({ hit }) => {
  const node = useRef();
  const [showMore, setShowMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const classes = useStyles();

  return (
    <>
      <CustomMarker key={hit.objectID} hit={hit}>
        <div
          ref={node}
          onClick={() => setShowMore(true)}
          className={classes.marker}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            {formatMoneyVal(hit.rent, { minimumFractionDigits: 0 })}
          </div>
        </div>
      </CustomMarker>
      {showMore && (
        <div className={classes.root}>
          <div className={classes.header}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p>{hit.location}</p>
            </div>
            <IconButton onClick={() => setShowMore(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <PropertyResultHit hit={hit} disableImages={false} reverse={true} />
        </div>
      )}
    </>
  );
};

MapMarker.propTypes = {
  hit: PropTypes.shape({
    location: PropTypes.any,
    objectID: PropTypes.any,
    rent: PropTypes.any,
  }).isRequired,
};

export default MapMarker;
