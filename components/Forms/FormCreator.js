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

import { useQuery, useMutation } from '@apollo/client';
import { SAVE_FORM_MUTATION } from '@/Gql/mutations';
import Loader from '@/Components/Loader';
import NoSsr from '@material-ui/core/NoSsr';
import { useDebouncedCallback } from 'use-debounce';

import AutoSave from './AutoSave';

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
    stickySave = true,
    path,
    canSave,
  } = props;

  const [saveFormId, setSaveFormId] = useState(props.saveFormId);

  const currentUser = useCurrentUser();
  const me = currentUser.data ? currentUser.data.me : null;
  const keysWithTypes = getKeyTypes(config);
  const preFormattedFormData = formatData(data, keysWithTypes, 'pre');

  const [saveForm, saveFormProps] = useMutation(SAVE_FORM_MUTATION, {
    onError: () => toast.error(`Couldnt save ${title}`),
    onCompleted: data => {
      setSaveFormId(data.saveForm.id);
    },
  });

  const {
    register,
    unregister,
    handleSubmit,
    errors,
    setError,
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

  const onSubmit = async data => {
    if (!canSubmit()) return;
    const postFormattedFormData = formatData(data, keysWithTypes, 'post');
    // await clearSaveForm(postFormattedFormData);
    saveForm({
      variables: {
        data: {
          id: saveFormId,
          name: title,
          path: path,
          json: {},
          user: {
            connect: {
              id: me?.id,
            },
          },
        },
      },
    }).then(() => {
      props.onSubmit(postFormattedFormData);
    });
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
    if (me.id && canSave) {
      saveForm({
        variables: {
          data: {
            id: saveFormId,
            name: title,
            path: path,
            json: formValsToSave,
            user: {
              connect: {
                id: me?.id,
              },
            },
          },
        },
      });
    }
  };

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
      <Button
        onClick={() => {
          const vals = getValues();
          console.log('Current form values', vals);
        }}>
        GET VALUES
      </Button>
      <Card
        style={{
          marginBottom: '16px',
          maxWidth: '800px',
          overflow: 'initial',
        }}>
        <Typography gutterBottom>* Indicates required field</Typography>
        {configIsValid(config) &&
          filteredConf.map((item, idx) => {
            // rats and roaches in the building, ima get it like bob the builder(_)
            // with so much i could rebuild Anoya
            // const label = `${item?.fieldProps?.label} ${isRequired && '*'}`;
            return (
              <div key={idx}>
                <InputFieldType
                  // label={item?.fieldProps?.label} for whatever reaseeon only sets the first field...
                  {...props}
                  // isRequired={isRequired}
                  config={item}
                  key={idx}
                  register={register}
                  unregister={unregister}
                  reset={reset}
                  errors={errors}
                  setValue={setValue}
                  getValues={getValues}
                  setError={setError}
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
        <AutoSave
          title={title}
          getValues={getValues}
          stickySave={stickySave}
          me={me}
          canSave={canSave}
          saveFormId={props.saveFormId}
          path={path}
        />
        <ButtonGroup
          style={{
            marginTop: '16px',
          }}
          color="primary"
          aria-label="outlined primary button group square">
          {/* MAKE THIS A BUTTON LOADER PLEASE */}
          {!disableCreate && (
            <ButtonLoader
              loading={posting ? posting : false}
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
    canSave = true,
  } = props;

  const router = useRouter();
  const currentUser = useCurrentUser();
  const me = currentUser.data ? currentUser.data.me : null;

  const path = router.asPath;
  const saveKey = `savekey-${title}-${path}`;
  const saveDataProps = useSavedFormData({
    name: title,
    path: path,
    me: me,
    canSave,
  });

  if (saveDataProps.loading)
    return (
      <Loader loading={saveDataProps.loading} text="Loading in Form and data" />
    );
  if (currentUser.loading) return <div>Loading User</div>;

  const allData = {
    ...data,
    ...(saveDataProps.data?.getSavedForm?.json && {
      ...saveDataProps.data.getSavedForm.json,
    }), // saved updates
  };

  return (
    <NoSsr>
      <FormCreatorMain
        {...props}
        path={path}
        data={allData}
        saveKey={saveKey}
        saveFormId={
          saveDataProps.data?.getSavedForm?.id
            ? saveDataProps.data?.getSavedForm?.id
            : null
        }
      />
    </NoSsr>
  );
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
