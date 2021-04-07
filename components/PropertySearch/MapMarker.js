import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import { IconButton } from '@material-ui/core';

import PropertyCard from '@/Components/PropertyCard/index';

import { CustomMarker } from 'react-instantsearch-dom-maps';

import { makeStyles } from '@material-ui/core/styles';

//icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';
import { formatCentsToDollarsVal } from '@/Lib/formatCentsToDollars';

import PropertyResultHit from './PropertyResultHit';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    // backgroundColor: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.secondary.main,
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
    // backgroundColor: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.secondary.main,
    padding: theme.spacing(1),
    opacity: 0.9,
    zIndex: 100,
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
          className="map-marker">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            {formatCentsToDollarsVal(hit.rent / hit.rooms)}
            {/* {formatCentsToDollarsVal(hit.lowestRoomPrice)} */}
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
