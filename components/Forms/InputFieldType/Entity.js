import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import FormCreator from '../FormCreator';

import {
  Button,
  Paper,
  Switch,
  Typography,
  FormControlLabel,
} from '@material-ui/core';
// _saveData={_saveData}

const EntityFormType = props => {
  const { config, setValue, register, rawData, _saveData } = props;
  const myRef = useRef(null);

  const {
    title,
    description,
    formConf,
    resolveKey,
    refConf,
    required,
    disableCreate,
  } = config;

  // const entityData = rawData[resolveKey];
  const [canBeFucked, setCanBeFucked] = useState(false);
  const entityData = rawData[resolveKey];

  const executeScroll = () => myRef.current.scrollIntoView();

  /**
   * ToDo: quite a bit, it neeeds to resolve its data to suplied key
   * passing in config but maybe not props it needs. maybe. because it should rightr
   */
  useEffect(() => {
    register({ name: resolveKey }, refConf);
  }, [register]);

  if (!formConf) return 'please supply a formConf object to that key';

  const submitEntityToLargerConcern = submittedFormData => {
    setValue(resolveKey, submittedFormData);
    // alert('check that submitted form data');
    setCanBeFucked(false);
    _saveData(); // saves data to localSTorage. forces parent to save
    // Should have data in upper form
    // SHould also scroll to closed toggle switch. Focus?
  };

  useEffect(() => {
    executeScroll();
  }, [canBeFucked]);

  /**
   * ToDo: quite a bit, it neeeds to resolve its data to suplied key
   * passing in config but maybe not props it needs. maybe. because it should rightr
   */
  return (
    <Paper style={{ padding: '8px' }} ref={myRef}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography>{description}</Typography>
      {entityData && <div>We have entitiy data</div>}
      {/* <Switch
        ref={myRef}
        value={canBeFucked}
        onChange={() => setCanBeFucked(!canBeFucked)}
      /> */}
      {/* <Button setCanBeFucked>{entityData ? 'Update' : 'BEGIN'}</Button> */}
      <FormControlLabel
        control={
          <Switch
            checked={canBeFucked}
            onChange={() => setCanBeFucked(!canBeFucked)}
            name="checkedB"
            color="primary"
          />
        }
        label={`${entityData ? 'Update ' : 'ADD '}${title}`}
      />
      {canBeFucked && (
        <FormCreator
          data={entityData}
          config={formConf}
          isNew={true}
          createText={`Add ${title}`}
          // error={error}
          // posting={loading}
          // onSubmit={submitFormWithData}]
          disableCreate={disableCreate}
          onSubmit={submitEntityToLargerConcern}
        />
      )}
    </Paper>
  );
};

EntityFormType.propTypes = {
  config: PropTypes.any,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default EntityFormType;
