import PropTypes from 'prop-types';
import React from 'react';
import { path } from 'ramda';
import { Typography } from '@material-ui/core';

const FieldError = ({ errors, name }) => {
  if (!errors) return null;
  if (!name) return null;
  const dotSplitName = name.split('.');
  const error = path(dotSplitName, errors); //=> 2
  if (!error) return null;
  return (
    <div style={{ padding: '16px', backgroundColor: '#ffcdd2' }}>
      <Typography style={{ color: '#b71c1c' }} gutterBottom>
        {error ? error.message : null}
      </Typography>
    </div>
  );
};

FieldError.propTypes = {
  errors: PropTypes.any,
  name: PropTypes.any,
};

export default FieldError;
