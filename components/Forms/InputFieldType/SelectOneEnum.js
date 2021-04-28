import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Select,
  InputLabel,
  FormHelperText,
  FormControl,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_ENUM_QUERY } from '../../../graphql/queries';
import Error from '../../ErrorMessage';
import Loader from '../../Loader';
import FieldError from './FieldError';
import { is } from 'ramda';
import InputFieldType from './index';
import useStyles from '@/Components/Forms/useStyles';

// experimental
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SimpleSelect(props) {
  const classes = useStyles();
  const {
    __type,
    values,
    getValues,
    label,
    // selectID,
    handleChange,
    removeItem,
    register,
    unregister,
    config,
    setValue, // is from useForm
    reset,
    errors,
    defaultValues,
    helperText,
    fieldError,
    clearError,
  } = props;
  const { type, inners, fieldProps, refConf } = config;
  const name = fieldProps ? fieldProps.name : null;
  const selectID = `${fieldProps.name}-select-one-enum`;

  const defaultValue = defaultValues[fieldProps.name];
  // holds the actual curent value
  const [currVal, setCurrVal] = useState(defaultValue ? defaultValue : []);

  // defaultForm value needs your options object format
  const defaultFormattedOption = defaultValue
    ? {
        name: defaultValue,
        value: defaultValue,
      }
    : undefined;

  // get the enum options for the type
  const { data, error, loading } = useQuery(GET_ENUM_QUERY, {
    variables: {
      name: __type,
    },
  });

  //These possibly will fire too often. Can optimize these probably a lot!
  useEffect(() => {
    register({ name: fieldProps.name }, refConf);
    if (defaultValue) {
      setCurrVal(defaultValue);
      setValue(fieldProps.name, defaultValue);
    }
    return () => {
      clearError(fieldProps.name);
      unregister(fieldProps.name);
    };
  }, [fieldProps, defaultValue]);

  if (!fieldProps) return 'This form component needs fieldProps';

  if (error) return <Error error={error} />;

  // use enum options from DB
  const options = data
    ? data.__type.enumValues.map((v, i) => ({
        name: v.name,
        value: v.name,
      }))
    : [];

  const resolveShowOnParentVals = (config, inner) => {
    if (inner.parentShowVals.includes(currVal)) {
      return true;
    }
    return false;
  };

  const canDisplayInner = (config, inner) => {
    if (inner.parentShowVals) return resolveShowOnParentVals(config, inner);
    return true;
  };

  const handleOnValueChange = (event, valueObj, reason) => {
    if (valueObj) {
      setCurrVal(valueObj.value);
      setValue(fieldProps.name, valueObj.value);
      clearError(fieldProps.name);
    } else {
      setValue(fieldProps.name, null);
    }
  };

  return (
    <>
      <Autocomplete
        style={{ marginBottom: '16px' }}
        id={`${selectID}-label`}
        loading={loading}
        variant={fieldProps.variant ? fieldProps.variant : 'outlined'}
        options={options}
        defaultValue={defaultFormattedOption} // probably wont work
        getOptionLabel={option => option.name}
        getOptionSelected={(option, value) => option.value === value.value}
        onChange={handleOnValueChange}
        renderInput={params => (
          <TextField
            {...params}
            {...fieldProps}
            error={fieldError ? true : false}
            label={label}
            variant="outlined"
            helperText={fieldError}
          />
        )}
      />
      {inners &&
        inners.map((inner, idx) => {
          if (!canDisplayInner(config, inner)) return null;
          return (
            <div key={inner.key} style={{ marginTop: '16px' }}>
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
}

SimpleSelect.propTypes = {
  __type: PropTypes.any,
  clearError: PropTypes.func.isRequired,
  config: PropTypes.shape({
    key: PropTypes.any,
  }).isRequired,
  defaultValues: PropTypes.any,
  errors: PropTypes.any,
  fieldError: PropTypes.any,
  getValues: PropTypes.any,
  handleChange: PropTypes.any,
  helperText: PropTypes.any,
  label: PropTypes.any,
  register: PropTypes.func.isRequired,
  removeItem: PropTypes.any,
  reset: PropTypes.any,
  selectID: PropTypes.any,
  setValue: PropTypes.func.isRequired,
  values: PropTypes.any,
};
