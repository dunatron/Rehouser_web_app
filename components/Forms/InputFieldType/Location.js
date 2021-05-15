import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import InputFieldType from './index';

// components
import LocationPicker from '../../LocationPicker';
import FieldError from './FieldError';

const useStyles = makeStyles(theme => ({}));

const getDefaultLocation = props => {
  const {
    register,
    config,
    setValue, // is from useForm
    errors,
    rawData,
    fieldError,
    reset,
    defaultValues,
  } = props;
  const { fieldProps, refConf, mapToObjectKey, inners } = config;

  let defaultLocation = {
    // placeId: rawData ? rawData[config.fieldProps.fieldMaps['placeId']] : null,
    // desc: rawData ? rawData[config.fieldProps.fieldMaps['desc']] : null,
    // lat: rawData ? rawData[config.fieldProps.fieldMaps['lat']] : null,
    // lng: rawData ? rawData[config.fieldProps.fieldMaps['lng']] : null,
  };
  for (const [key, value] of Object.entries(config.fieldProps.fieldMaps)) {
    defaultLocation[key] = rawData[key];
    if (mapToObjectKey) {
      const str = `${mapToObjectKey}.${value}`;
      // register({ name: str }, { ...config.refConf });
      // defaultLocation[key] = rawData[str];
      defaultLocation[key] = rawData[str];
    } else {
      defaultLocation[key] = rawData[value];
      // register({ name: value }, { ...config.refConf });
    }
  }
  return defaultLocation;
};

/**
 * ToDo: if a default location comes in we need to actualy force select it after render to get the details that the object it came frommight not have
 */
const Location = props => {
  const {
    register,
    config,
    setValue, // is from useForm
    errors,
    rawData,
    fieldError,
    reset,
    defaultValues,
    clearError,
  } = props;
  const classes = useStyles();

  const defaultLocation = getDefaultLocation(props);

  const { fieldProps, refConf, mapToObjectKey, inners } = config;

  const defaultPlaceId = rawData
    ? rawData[config.fieldProps.fieldMaps['placeId']]
    : null;

  const [placeId, setPlaceId] = useState(
    rawData ? rawData[config.fieldProps.fieldMaps['placeId']] : null
  );

  useEffect(() => {
    for (const [key, value] of Object.entries(config.fieldProps.fieldMaps)) {
      if (mapToObjectKey) {
        const str = `${mapToObjectKey}.${value}`;
        register({ name: str }, { ...config.refConf });
      } else {
        register({ name: value }, { ...config.refConf });
      }
    }
  }, [register, config.fieldProps.fieldMaps, mapToObjectKey, config.refConf]);

  const canDisplayInner = () => {
    if (!placeId) return false;
    return true;
  };

  if (!fieldProps) return 'This form component needs fieldProps';
  if (!fieldProps.fieldMaps) {
    return 'This form component needs fieldProps.fieldMaps to know how to map the values to your prisma ready object';
  }

  const handleSelection = data => {
    setPlaceId(data.placeId);
    for (const [key, value] of Object.entries(config.fieldProps.fieldMaps)) {
      if (mapToObjectKey) {
        const str = `${mapToObjectKey}.${value}`;
        setValue(`${mapToObjectKey}.${value}`, data[key]);
        clearError(str);
      } else {
        setValue(value, data[key]);
        clearError(value);
      }
    }
  };

  const handleClear = () => {
    for (const [key, value] of Object.entries(config.fieldProps.fieldMaps)) {
      if (mapToObjectKey) {
        const str = `${mapToObjectKey}.${value}`;
        setValue(`${mapToObjectKey}.${value}`, null);
      } else {
        setValue(value, null);
      }
    }
    setPlaceId(null);
  };

  return (
    <>
      <FieldError errors={errors} name={config.fieldProps.name} />
      <LocationPicker
        id={fieldProps.name}
        label={
          <Typography variant="body1">{config.fieldProps.label}</Typography>
        }
        defaultLocation={defaultLocation}
        inputRef={register(config.refConf)}
        error={fieldError}
        selection={data => handleSelection(data)}
        onClear={() => handleClear()}
      />
      {/* {!placeId && (
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
      )} */}

      {inners &&
        inners.map((inner, idx) => {
          if (!canDisplayInner()) return null;
          return (
            <div key={idx} style={{ marginTop: '16px' }}>
              <InputFieldType
                {...props}
                config={inner}
                key={idx}
                register={register}
                errors={errors}
                setValue={setValue}
                reset={reset}
                defaultValues={defaultValues}
              />
            </div>
          );
        })}
    </>
  );
};

Location.propTypes = {
  config: PropTypes.shape({
    fieldProps: PropTypes.shape({
      fieldMaps: PropTypes.any,
      label: PropTypes.any,
      name: PropTypes.any,
    }),
    refConf: PropTypes.any,
  }).isRequired,
  defaultValues: PropTypes.any,
  errors: PropTypes.any,
  fieldError: PropTypes.any,
  rawData: PropTypes.any,
  register: PropTypes.func.isRequired,
  reset: PropTypes.any,
  setValue: PropTypes.func.isRequired,
};

export default Location;
