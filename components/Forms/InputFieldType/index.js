import PropTypes from 'prop-types';

//Material Components
import { Typography, Paper, FormControlLabel, Switch } from '@material-ui/core';

import CheckReason from './CheckReason';
import CheckboxText from './CheckboxText';
import SelectOneWithText from './SelectOneWithText';
import CheckMultipleWithText from './CheckMultipleWithText';
import SelectMultipleEnum from './SelectMultipleEnum';
import SelectOneEnum from './SelectOneEnum';
import Location from './Location';
import LocationPicker from '../../LocationPicker';
import FormSection from './FormSection';
import EntityFormType from './Entity';
import FileUploader from './../../FileUploader';
import File from './File';
import String from './String';
import Boolean from './Boolean';
import Checkbox from './Checkbox';
import Money from './Money';
import Phone from './Phone';
import BankAccount from './BankAccount';
import Int from './Int';
import Float from './Float';
import DateField from './Date';
import DateTimeInput from './DateTime';
import AcceptTerms from './AcceptTerms';
import Info from './Info';
import Signature from './Signature';
import Image from './Image';
import CaptchaField from './Captcha';
import Email from './Email';
import Password from './Password';
import SelectOne from './SelectOne';

import { path } from 'ramda';

const extractErrorFromErrors = (errors, name) => {
  if (!errors || !name) return null;
  return errors[name] ? errors[name].message : null;
};

const extractDefaultValue = (defaultValues, name, type) => {
  if (!defaultValues || !name) {
    return null; // may need to do extra for different types
  }
  const dV = path(name.split('.'), defaultValues);
  // we should have the field values at this point. if we need to do more based on type we do it here
  return dV;
};

const InputFieldType = props => {
  // const { onChange, errors, errorMessage, name, fieldProps } = props;
  const {
    config,
    onChange,
    register,
    unregister,
    errors,
    getValues,
    setValue,
    reset,
    rawData,
    defaultValues,
    updateCacheOnRemovedFile,
    selectOptionTypes,
    // isRequired,
    // label,
  } = props;
  const { type, fieldProps, refConf } = config;
  const name = fieldProps ? fieldProps.name : null;
  // const label = fieldProps ? fieldProps.label : null;
  const isRequired = refConf?.required?.value ? refConf.required.value : false;
  const label = `${fieldProps?.label} ${isRequired ? '*' : ''}`;

  const sharedProps = {
    label: label,
  };

  const fieldError = extractErrorFromErrors(errors, name);
  const defaultValue = extractDefaultValue(defaultValues, name, type);

  const TypeToRender = () => {
    switch (type) {
      case 'Header':
        return <Typography variant="h4">{label}</Typography>;
      case 'Subheader':
        return <Typography variant="h5">{label}</Typography>;
      case 'RTypography':
        return (
          <Typography {...config.fieldProps} {...sharedProps}>
            {config.content}
          </Typography>
        );
      case 'Section':
        return <FormSection {...props} {...sharedProps} />;
      case 'Password':
        return <Password {...props} {...sharedProps} fieldError={fieldError} />;
      case 'String':
        return (
          <String
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'Email':
        return (
          <Email
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'CheckReason':
        return <CheckReason {...props} {...sharedProps} />;
      case 'CheckboxText':
        return <CheckboxText {...props} {...sharedProps} />;
      case 'SelectOneWithText':
        return <SelectOneWithText {...props} {...sharedProps} />;
      case 'CheckMultipleWithText':
        return <CheckMultipleWithText {...props} {...sharedProps} />;
      case 'Entity':
        return (
          <EntityFormType
            {...fieldProps}
            {...sharedProps}
            __type={config.__type}
            onChange={() => {}}
            {...props}
          />
        );
      case 'SelectOne':
        return (
          <SelectOne
            {...props}
            {...sharedProps}
            options={selectOptionTypes[config.optionKey]}
          />
        );
      case 'SelectMultipleEnum':
        return (
          <SelectMultipleEnum
            {...fieldProps}
            {...props}
            {...sharedProps}
            __type={config.__type}
            onChange={() => {}}
            helperText={fieldError}
            fieldError={fieldError}
          />
        );
      case 'SelectOneEnum':
        return (
          <SelectOneEnum
            {...fieldProps}
            {...props}
            {...sharedProps}
            __type={config.__type}
            onChange={() => {}}
            helperText={fieldError}
            fieldError={fieldError}
          />
        );
      case 'Location':
        return (
          <Location
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'Boolean':
        return (
          <Boolean
            {...props}
            {...sharedProps}
            // label={label}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'Checkbox':
        return (
          <Checkbox
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );

      case 'Money':
        return (
          <Money
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'BankAccount':
        return (
          <BankAccount
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'Phone':
        return (
          <Phone
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
            extractErrorFromErrors={extractErrorFromErrors}
          />
        );
      case 'Int':
        return (
          <Int
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'Float':
        return (
          <Float
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );

      case 'Date':
        return (
          <DateField
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'DateTime':
        return (
          <DateTimeInput
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'AcceptTerms':
        return (
          <AcceptTerms
            {...props}
            {...sharedProps}
            fieldError={fieldError}
            defaultValue={defaultValue}
          />
        );
      case 'Info':
        return <Info {...props} {...sharedProps} />;
      case 'File':
        return (
          <File
            {...props}
            {...sharedProps}
            extractErrorFromErrors={extractErrorFromErrors}
            fieldError={fieldError}
          />
        );
      case 'Signature':
        return <Signature {...props} {...sharedProps} />;
      case 'Image':
        return <Image {...props} {...sharedProps} />;
      case 'Captcha':
        return <CaptchaField {...props} {...sharedProps} />;
      default:
        return (
          <Typography color="error">
            form type of "{type}" does not currently exist in the form system
          </Typography>
        );
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // marginBottom: '8px',
        marginBottom: '16px',
        // borderBottom: '1px solid green',
      }}>
      {TypeToRender()}
    </div>
  );
};

// };
InputFieldType.propTypes = {
  clearErrors: PropTypes.any,
  config: PropTypes.shape({
    __type: PropTypes.any,
    content: PropTypes.any,
    fieldProps: PropTypes.any,
  }),
  defaultValues: PropTypes.any,
  errors: PropTypes.any,
  getValues: PropTypes.any,
  inners: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.any,
  rawData: PropTypes.any,
  register: PropTypes.any,
  reset: PropTypes.any,
  setValue: PropTypes.any,
  type: PropTypes.oneOf([
    'Header',
    'Subheader',
    'String',
    'CheckReason',
    'CheckboxText',
    'SelectOneWithText',
    'CheckMultipleWithText',
    'Boolean',
    'Int',
    'Money',
    'Float',
    'Date',
    'DateTime',
    'AcceptTerms',
  ]),
  unregister: PropTypes.any,
  updateCacheOnRemovedFile: PropTypes.any,
};

export { InputFieldType };
export default InputFieldType;
