import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import TextInput from '../../Inputs/TextInput';
import DatePicker from '@/Components/Pickers/DatePicker';

// It's President Tron, Im back in office
const DateField = props => {
  const {
    config,
    register,
    fieldError,
    clearError,
    defaultValues,
    setValue,
    unregister,
    setError,
    errors,
    label,
  } = props;
  const { fieldProps, refConf } = config;
  const [internalVal, setInternalVal] = useState();

  const isRequired = refConf?.required?.value ? refConf.required.value : false;

  const defaultValue = defaultValues[fieldProps.name];

  const handleDateError = () => {
    setValue(fieldProps.name, null);
    if (isRequired) {
      setError(fieldProps.name, 'required', refConf?.required?.message);
    }
  };

  const handleDateChange = date => {
    if (fieldError) {
      clearError(fieldProps.name);
    }
    if (date === 'Invalid date') return handleDateError();
    setValue(fieldProps.name, date);
  };

  // useEffect(() => {
  //   register({ name: fieldProps.name }, refConf);
  //   if (defaultValue) {
  //     setValue(fieldProps.name, defaultValue);
  //   }
  //   return () => {
  //     clearError(fieldProps.name);
  //     unregister(fieldProps.name);
  //   };
  // }, [fieldProps, defaultValue]);

  const nullOnEmptyVal = v => {
    if (v === '') return null;
    if (v == 'undefined') return null;
    if (v == undefined) return null;
    return v;
  };

  return (
    <div>
      <div
        style={{
          zIndex: -9999,
          position: 'absolute',
        }}>
        <input
          // style={{ visibility: 'hidden', position: 'absolute' }}
          // disabled={true}
          name={fieldProps.name}
          ref={register(refConf)}
          value={internalVal}
        />
      </div>
      <DatePicker
        inputVariant={fieldProps.variant ? fieldProps.variant : 'outlined'}
        label={label}
        format="MMMM Do YYYY"
        // format="dddd, MMMM Do YYYY, h:mm:ss a"
        defaultValue={nullOnEmptyVal(defaultValue)}
        // format="YYYY-MM-DDTkk:mm" // Umm you need to have it output unfortuanetely. The format matters. Look into a display vs val format
        minDate={fieldProps.minDate}
        maxDate={fieldProps.maxDate}
        inputProps={{
          name: fieldProps.name,
          id: fieldProps.name,
          // ref: register(refConf), // dont register on the input as that is the display value
        }}
        error={fieldError ? true : false}
        helperText={fieldError}
        onChange={handleDateChange}
      />
    </div>
  );
};

// When I made my first Mill I puckered up, and told my girl to buckle up

DateField.propTypes = {
  config: PropTypes.any,
  fieldError: PropTypes.any,
  register: PropTypes.func.isRequired,
};

export default DateField;

// import PropTypes from 'prop-types';
// import React, { useEffect, useState } from 'react';
// import TextInput from '../../Inputs/TextInput';
// import DatePicker from '@/Components/Pickers/DatePicker';

// // It's President Tron, Im back in office
// const DateField = props => {
//   const {
//     config,
//     register,
//     fieldError,
//     clearError,
//     defaultValues,
//     setValue,
//     unregister,
//     setError,
//     errors,
//     label,
//   } = props;
//   const { fieldProps, refConf } = config;
//   const [internalVal, setInternalVal] = useState();

//   const isRequired = refConf?.required?.value ? refConf.required.value : false;

//   const defaultValue = defaultValues[fieldProps.name];

//   const handleDateError = () => {
//     // setValue(fieldProps.name, null);
//     // if (isRequired) {
//     //   setError(fieldProps.name, 'required', refConf?.required?.message);
//     // }
//   };

//   const handleDateChange = date => {
//     setInternalVal(date);
//     // if (fieldError) {
//     //   clearError(fieldProps.name);
//     // }
//     // if (date === 'Invalid date') handleDateError();
//     // set value with moment
//     // setValue(fieldProps.name, date);
//   };

//   // useEffect(() => {
//   //   register({ name: fieldProps.name }, refConf);
//   //   if (defaultValue) {
//   //     setValue(fieldProps.name, defaultValue);
//   //   }
//   //   return () => {
//   //     clearError(fieldProps.name);
//   //     unregister(fieldProps.name);
//   //   };
//   // }, [fieldProps, defaultValue]);

//   const nullOnEmptyVal = v => {
//     if (v === '') return null;
//     return v;
//   };

//   return (
//     <div>
//       <input
//         name={fieldProps.name}
//         ref={register(refConf)}
//         value={internalVal}></input>
//       <DatePicker
//         inputVariant={fieldProps.variant ? fieldProps.variant : 'outlined'}
//         label={label}
//         format="MMMM Do YYYY"
//         // format="dddd, MMMM Do YYYY, h:mm:ss a"
//         defaultValue={nullOnEmptyVal(defaultValue)}
//         // format="YYYY-MM-DDTkk:mm" // Umm you need to have it output unfortuanetely. The format matters. Look into a display vs val format
//         minDate={fieldProps.minDate}
//         maxDate={fieldProps.maxDate}
//         inputProps={{
//           name: fieldProps.name,
//           id: fieldProps.name,
//           // ref: register(refConf), // dont register on the input as that is the display value
//         }}
//         error={fieldError ? true : false}
//         helperText={fieldError}
//         onChange={handleDateChange}
//       />
//     </div>
//   );
// };

// // When I made my first Mill I puckered up, and told my girl to buckle up

// DateField.propTypes = {
//   config: PropTypes.any,
//   fieldError: PropTypes.any,
//   register: PropTypes.func.isRequired,
// };

// export default DateField;
