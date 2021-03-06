import PropTypes from 'prop-types';
import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

import { InputFieldType } from './index';

import { withStyles } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';

const GreenSwitch = withStyles({
  switchBase: {
    // color: green[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const BooleanField = props => {
  const {
    config,
    register,
    errors,
    setValue,
    // defaultValue,
    defaultValues,
    label,
  } = props;
  const { fieldProps, refConf } = config;
  const name = fieldProps ? fieldProps.name : null;
  const defaultValue = defaultValues[fieldProps.name];

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            color="primary"
            {...fieldProps}
            name={name}
            defaultChecked={defaultValue}
            inputRef={register ? register(refConf) : null}
            aria-label="LoginSwitch"
          />
        }
        label={label ? label : fieldProps.label}
      />
      {config.inners &&
        config.inners.map((inner, idx) => (
          <InputFieldType
            {...props}
            config={inner}
            key={idx}
            setValue={setValue}
            register={register}
            errors={errors}
          />
        ))}
    </>
  );
};

BooleanField.propTypes = {
  config: PropTypes.shape({
    inners: PropTypes.shape({
      map: PropTypes.func,
    }),
  }).isRequired,
  defaultValue: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.any,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.any,
};

export default BooleanField;
