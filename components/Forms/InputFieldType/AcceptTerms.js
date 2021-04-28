import PropTypes from 'prop-types';
import React from 'react';
import FieldError from '../InputFieldType/FieldError';

//Material Components
import { Box, Typography, Checkbox, FormControlLabel } from '@material-ui/core';

const AcceptTerms = props => {
  const { config, register, errors, defaultValue, label } = props;
  const { fieldProps, refConf } = config;
  return (
    <>
      <Box
        component="div"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}>
        <Typography style={{ maxWidth: '800px' }}>{config.terms}</Typography>
        <FormControlLabel
          control={
            <Checkbox
              {...fieldProps}
              color="primary"
              defaultChecked={defaultValue}
              aria-label="LoginSwitch"
              inputRef={register(refConf)}
            />
          }
          label={label}
        />
      </Box>
      <FieldError errors={errors} name={fieldProps.name} />
    </>
  );
};

AcceptTerms.propTypes = {
  config: PropTypes.shape({
    fieldProps: PropTypes.shape({
      label: PropTypes.any,
    }),
    refConf: PropTypes.object.isRequired,
    terms: PropTypes.any,
  }).isRequired,
  defaultValue: PropTypes.any,
  errors: PropTypes.any,
  register: PropTypes.func.isRequired,
};

export default AcceptTerms;
