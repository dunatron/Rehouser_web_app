import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import Map from '@/Components/Map/index';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StyledGeoSuggest from '@/Styles/GeoSuggest';

import Geosuggest from 'react-geosuggest';

// icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';

import LocationCityIcon from '@material-ui/icons/LocationCity';
import PublicIcon from '@material-ui/icons/Public';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles(theme => ({
  noLocationContainer: {
    padding: '16px',
    width: '100%',
    border: `1px dashed ${theme.palette.grey[400]}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

/**
 * This is not ok,
 * https://github.com/facebook/react/issues/14994
 */
const LocationPicker = ({ selection, defaultLocation, id, label, onClear }) => {
  const classes = useStyles();
  const geosuggestEl = useRef(null);
  const defaultState = {
    placeId: null,
    desc: '',
    lat: null,
    lng: null,
    showMap: true,
    country: 'NZ',
    type: 'geocode',
    ...defaultLocation,
    // type: 'ALL',
  };
  const [state, setState] = useState(defaultState);
  const [mapIn, setMapIn] = useState(defaultState.placeId ? true : false);
  const [alertIn, setAlertIn] = useState(defaultState.placeId ? false : true);

  const fixtures = [
    // { label: 'New York', location: { lat: 40.7033127, lng: -73.979681 } },
    // { label: 'Rio', location: { lat: -22.066452, lng: -42.9232368 } },
    // { label: 'Tokyo', location: { lat: 35.673343, lng: 139.710388 } },
  ];

  /**
   * When a suggest got selected
   */
  const onSuggestSelect = suggest => {
    if (!suggest) return;
    const { placeId, location, description, gmaps } = suggest;

    let componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name',
    };

    for (const component of gmaps.address_components) {
      const addressType = component.types[0];

      if (componentForm[addressType]) {
        const val = component[componentForm[addressType]];
        componentForm[addressType] = val;
        // document.getElementById(addressType).value = val;
      }
    }

    selection({
      placeId: placeId,
      lat: location.lat,
      lng: location.lng,
      desc: description,
      ...componentForm,
    });
    setState({
      ...state,
      placeId: placeId,
      lat: location.lat,
      lng: location.lng,
      desc: description,
    });
    // setMapIn(true);
    setAlertIn(false);
  };

  const _getZoom = desc => {
    if (desc.length <= 3) {
      return 10;
    }
    if (desc.length <= 5) {
      return 11;
    }
    if (desc.length <= 8) {
      return 13;
    }
    if (desc.length <= 12) {
      return 14;
    }
    if (desc.length <= 17) {
      return 15;
    }
    if (desc.length <= 23) {
      return 16;
    }
    return 18;
  };

  const handleClear = () => {
    setMapIn(false);
  };

  const handleOnMapExit = () => {
    setState({
      ...state,
      placeId: null,
      desc: '',
      lat: null,
      lng: null,
    });
    geosuggestEl.current.clear();
    onClear();
    setAlertIn(true);
  };

  const handleOnAlertExit = () => {
    setMapIn(true);
  };

  return (
    <div>
      <Geosuggest
        label={label}
        type="search"
        autoComplete="off"
        id={id}
        ref={geosuggestEl}
        placeholder={
          defaultLocation.desc ? defaultLocation.desc : 'Start Typing'
        }
        fixtures={fixtures}
        onSuggestSelect={onSuggestSelect}
        country="nz"
        queryDelay={250}
        initialValue={defaultLocation.desc ? defaultLocation.desc : ''}
        radius="20"
        // types={['establishment', 'geocode', 'regions', 'cities']}
        location={
          new google.maps.LatLng(
            defaultLocation.lat ? defaultLocation.lat : -46.1326615,
            defaultLocation.lng ? defaultLocation.lng : 168.89592100000004
          )
        }
        renderSuggestItem={suggestion => {
          return (
            <ListItem button divider>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary={suggestion.description} />
            </ListItem>
          );
        }}
      />
      <CSSTransition
        in={mapIn}
        timeout={600}
        classNames="rehouser-fade"
        unmountOnExit
        // onEnter={() => setShowButton(false)}
        onExited={() => handleOnMapExit()}>
        <div>
          {state.showMap && state.desc && (
            <Map
              center={{
                lat: state.lat,
                lng: state.lng,
              }}
              zoom={_getZoom(state.desc)}
            />
          )}
          <div
            style={{
              display: 'flex',
              flexWrap: 'no-wrap',
              padding: '16px 0',
              alignItems: 'center',
            }}>
            <LocationOnIcon color="primary" />
            <Typography style={{ padding: '8px 16px' }}>
              {state.desc}
            </Typography>
            <Tooltip
              title="Remove location data"
              aria-label="remove location data">
              <IconButton onClick={() => handleClear()}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={alertIn}
        timeout={600}
        classNames="rehouser-fade"
        onExited={() => handleOnAlertExit()}
        unmountOnExit>
        <div className={classes.noLocationContainer}>
          <Typography variant="h6" gutterBottom>
            NO LOCATION SELECTED
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please use the places dropdown picker above
          </Typography>
          <Typography variant="body2">
            (Ensure you have selected the option from the list)
          </Typography>
        </div>
      </CSSTransition>
    </div>
  );
};

LocationPicker.propTypes = {
  defaultLocation: PropTypes.shape({
    desc: PropTypes.any,
    lat: PropTypes.any,
    lng: PropTypes.any,
  }).isRequired,
  selection: PropTypes.func.isRequired,
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
  LoadingContainer: props => {
    return <div>Loading Google Instance</div>;
  },
})(LocationPicker);

// export default LocationPicker;
