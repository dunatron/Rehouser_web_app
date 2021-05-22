import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import useStyles from './useStyles';
import MapLoadingContainer from './MapLoadingContainer';

const MapContainer = props => {
  const { center, height } = props;
  const classes = useStyles();

  const onMarkerClick = () => {};

  const onInfoWindowClose = () => {};

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
      // styles: mapStyle,
    });
  };

  return (
    <div className={classes.mapWrapper}>
      <Map
        {...props}
        google={props.google}
        mapTypeId="SATELLITE"
        options={{
          mapId: 'Rehouser-Property',
          mapTypeId: 'SATELLITE',
        }}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        zoom={18}
        center={{
          lat: center ? center.lat : -46.1326615,
          lng: center ? center.lng : 168.89592100000004,
        }}
        initialCenter={{
          lat: center ? center.lat : -46.1326615,
          lng: center ? center.lng : 168.89592100000004,
        }}></Map>
    </div>
  );
};

MapContainer.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.any,
    lng: PropTypes.any,
  }).isRequired,
  google: PropTypes.any,
  height: PropTypes.any,
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
  LoadingContainer: MapLoadingContainer,
})(MapContainer);
