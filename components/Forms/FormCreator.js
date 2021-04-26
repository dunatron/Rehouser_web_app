import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { isEmpty, is } from 'ramda';
import Errors from '@/Components/ErrorMessage';
import InputFieldType from './InputFieldType/index';
import { Typography, Button, ButtonGroup } from '@material-ui/core';
import FormErrors from './FormErrors';
import formatData from './formatters/formatData';
import { useCurrentUser } from '../User';
import { toast } from 'react-toastify';
import ButtonLoader from '@/Components/Loader/ButtonLoader';

import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@/Styles/Card';

import Fab from '@material-ui/core/Fab';

import useSavedFormData from './useSavedFormData';

const configIsValid = config => {
  if (isEmpty(config)) return false;
  if (!is(Array, config)) return false;
  return true; // yay your valid
};

const extractKeyType = obj => {
  let extras = {};
  if (obj.inners) {
    extras = getKeyTypes(obj.inners);
  }
  return {
    [obj.key]: obj.type,
    ...extras,
  };
};

const getKeyTypes = conf => {
  if (isEmpty(conf)) return {};
  if (conf == undefined) return {};
  return conf.reduce((acc, c) => {
    const newItem = extractKeyType(c);
    return { ...acc, ...newItem };
  }, {});
};

const _allData = () => {};

// landlord/properties/add?appraisal_id=cknyy5h1u50nj0999ahdn7ixp

const FormCreatorMain = props => {
  const {
    title,
    data,
    config,
    isNew,
    posting,
    error,
    updateCacheOnRemovedFile,
    createText,
    updateText,
    refetchQueries,
    folder,
    watchFields = [],
    handleWatchChanges,
    hasCancel,
    cancel,
    selectOptionTypes,
    disableCreate,
    saveKey,
  } = props;

  // awesome we have {me} which now has isAdmin and isWizard
  // we can on the form creator if it has something like requiredPermissions
  // or adminOnly and wizardOnly then disable the fields? or do we ommit them from the config entirely
  // easiset right now is to ommit the config object entirely if they cannot edit it
  // requiredPermissions : ["ADMIN", "WIZARD", "PERMISSIONUPDATE"]
  // while isAdmin and isWizard @client is cool. We should use me.permissions
  // we would check that on the requiredPermissions for each item we must find it in me.permissions
  // if we dont it will remove the config object
  const currentUser = useCurrentUser();
  const me = currentUser.data ? currentUser.data.me : null;
  const keysWithTypes = getKeyTypes(config);
  const preFormattedFormData = formatData(data, keysWithTypes, 'pre');

  const {
    register,
    unregister,
    handleSubmit,
    errors,
    setValue,
    getValues,
    reset,
    clearError,
    watch,
  } = useForm({
    defaultValues: {
      ...preFormattedFormData,
    },
  });

  if (handleWatchChanges) {
    handleWatchChanges(watch(watchFields));
  }

  const handleClearError = name => {
    if (errors[name]) {
      clearError(name);
    }
  };

  const canSubmit = () => {
    var can = true;
    config.forEach(item => {
      if (item.type === 'Signature') {
        if (!me.signature) {
          toast.error(
            <Typography>
              You need to supply a signature before you can progress
            </Typography>,
            {
              autoClose: 3000,
            }
          );
          can = false;
        }
      }
    });
    return can;
  };

  const onSubmit = data => {
    if (!canSubmit()) return;
    const postFormattedFormData = formatData(data, keysWithTypes, 'post');
    props.onSubmit(postFormattedFormData);
    localStorage.removeItem(saveKey);
    // we assume the data has gone to where it needs to go and we clear saveData
  };

  const _createText = () => {
    if (createText) return createText;
    return 'Create ' + title;
  };

  const _updateText = () => {
    if (updateText) return updateText;
    return 'Update ' + title;
  };

  const _saveData = () => {
    const formValsToSave = getValues();

    localStorage.setItem(saveKey, JSON.stringify(formValsToSave));
    toast.success(
      `${title} Form Data saved. You can leave this page and come back`
    );
  };

  // const _loadInSavedData = () => {
  //   // alert('Hiii');
  //   // setValue('rent', 69696969696);
  //   // setValue('rooms', 4);
  //   Object.entries(saveDataProps.data).map(([key, val]) => {
  //     setValue([key], val);
  //   });
  // };

  //// Store
  // localStorage.setItem("lastname", "Smith");
  // Retrieve
  // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

  useEffect(() => {
    // maybe you can get the default form values
    return () => {
      // get the values from useForm and save it somewhere when component dismounts
      // ahhh hmmmm, well lets have something called. FormContext.
      // basically we will give formCreators a unique key and they will greate objects and values etc. Genius I know.
      // To think about is if we post format. I dont think we do. Its for like creating and shit right.
      // mmm not true. I think maybe we do want to postFormat and preFormat
      // const formValsToSave = getValues();
      // localStorage.setItem('formData', JSON.stringify(formValsToSave));
      // const postFormattedFormData = formatData(
      //   formValsToSave,
      //   keysWithTypes,
      //   'post'
      // );
      // localStorage.setItem('formData', JSON.stringify(postFormattedFormData));
      // console.log('savedData formValsToSave => ', formValsToSave);
      // alert('ToDo: CreateForm COntext which will handle all form values');
      // Maybe a bit of a caveat here and will have to be robust
      // ie. saving the form type to redux. if persistState = true
      // Also perhaps a flag to say submitted? Would we have a clear? and a reset?
      // clear would clear out the form. reset would reset to default state like, bank account and prefilled vals based on account
    };
  });

  const filteredConf = config.filter((item, idx) => {
    if (!item.permissions) return item;
    if (item.permissions.includes('ADMIN')) {
      if (!me.isAdmin) return;
    }
    if (item.permissions.includes('WIZARD')) {
      if (!me.isWizard) return;
    }
    return item;
  });

  return (
    <>
      <Card
        style={{
          marginBottom: '16px',
          maxWidth: '800px',
          overflow: 'initial',
        }}>
        <Button
          onClick={() => {
            const theVals = getValues();
            console.log('CURRENT FORM VALUES => ', theVals);
          }}>
          Log VALUES
        </Button>
        {configIsValid(config) &&
          filteredConf.map((item, idx) => {
            return (
              <div key={idx}>
                <InputFieldType
                  {...props}
                  config={item}
                  key={idx}
                  register={register}
                  unregister={unregister}
                  reset={reset}
                  errors={errors}
                  setValue={setValue}
                  getValues={getValues}
                  clearError={handleClearError}
                  // rawData={data}
                  _saveData={_saveData}
                  rawData={data}
                  folder={folder}
                  defaultValues={preFormattedFormData}
                  refetchQueries={refetchQueries}
                  updateCacheOnRemovedFile={updateCacheOnRemovedFile}
                  defaultValue={
                    configIsValid(config)
                      ? preFormattedFormData[
                          item.fieldProps ? item.fieldProps.name : null
                        ]
                      : null
                  }
                />
                {errors[item.name] && item.errorMessage}
              </div>
            );
          })}
        <FormErrors errors={errors} />
        <Errors error={error} />
        <div
        // style={{
        //   position: '-webkit-sticky',
        //   position: 'sticky',
        //   bottom: 0,
        //   borderColor: 'red',
        //   zIndex: 999999,
        //   padding: '16px 0',
        // }}
        >
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            onClick={_saveData}>
            <SaveIcon />

            <Typography variant="button" style={{ margin: '0 4px' }}>
              SAVE
            </Typography>
          </Fab>
        </div>

        <ButtonGroup
          style={{
            marginTop: '16px',
          }}
          color="primary"
          aria-label="outlined primary button group square">
          {/* MAKE THIS A BUTTON LOADER PLEASE */}
          {!disableCreate && (
            <ButtonLoader
              loading={posting}
              text={isNew ? _createText() : _updateText()}
              onClick={handleSubmit(onSubmit)}
              btnProps={{
                startIcon: isNew ? <AddIcon /> : <EditIcon />,
                variant: 'contained',
                color: 'primary',
              }}
            />
          )}

          {hasCancel && (
            <Button disabled={posting} onClick={cancel}>
              <AddIcon />
              Cancel
            </Button>
          )}
        </ButtonGroup>
      </Card>
    </>
  );
};

/**
 * Trying to set saveData from getValues and then inject it into data. Which might not work.
 * Ask to load in if found. We may have to add an extra field called savedData. so FormCreatorMain can setValue.
 * Also try inject the data for the visuals
 *
 */
const FormCreator = props => {
  const {
    title,
    data,
    config,
    isNew,
    posting,
    error,
    updateCacheOnRemovedFile,
    createText,
    updateText,
    refetchQueries,
    folder,
    watchFields = [],
    handleWatchChanges,
    hasCancel,
    cancel,
    selectOptionTypes,
    disableCreate,
  } = props;
  const router = useRouter();
  const saveKey = `savekey-${title}-${router.asPath}`;
  const saveDataProps = useSavedFormData({ saveKey: saveKey });

  if (saveDataProps.loading) return <div>Loading Form Data</div>;

  const allData = {
    ...data,
    ...saveDataProps.data, // saved updates
  };

  console.log('THE SAVE KEY => ', saveKey);

  return <FormCreatorMain {...props} data={allData} saveKey={saveKey} />;
};

FormCreator.propTypes = {
  config: PropTypes.array.isRequired,
  createText: PropTypes.any,
  data: PropTypes.any,
  error: PropTypes.any,
  folder: PropTypes.any,
  handleWatchChanges: PropTypes.func,
  isNew: PropTypes.any,
  name: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  posting: PropTypes.any,
  refetchQueries: PropTypes.any,
  title: PropTypes.any,
  updateCacheOnRemovedFile: PropTypes.any,
  updateText: PropTypes.any,
  watchFields: PropTypes.array,
};

export { FormCreator };
export default FormCreator;
