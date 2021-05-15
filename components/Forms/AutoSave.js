import React, { useEffect, useState } from 'react';
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

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  stickySave: {
    position: '-webkit-sticky',
    position: 'sticky',
    bottom: 0,
    zIndex: 900,
    // padding: '16px 0',
    padding: 0,
  },
  fabRoot: {
    borderRadius: '0 !important',
    padding: '100px',
  },
}));

const AutoSave = ({
  getValues,
  stickySave,
  me,
  canSave,
  title,
  saveFormId,
  path,
  submitting,
}) => {
  const classes = useStyles();
  const [saveForm, saveFormProps] = useMutation(SAVE_FORM_MUTATION, {
    onError: () => toast.error(`Couldnt save ${title}`),
    onCompleted: data => {
      //   setSaveFormId(data.saveForm.id);
      toast.success(`Sucessfully saved the ${data.saveForm.name} form`);
    },
  });

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

  const saveBtnContainerClasses = clsx({
    [classes.saveBtnContainer]: true,
    [classes.stickySave]: stickySave,
  });

  const fabRootClasses = clsx({
    [classes.fabRoot]: true,
  });

  if (!me) return null;

  return (
    <div className={saveBtnContainerClasses}>
      {me.id && canSave && (
        <Fab
          disabled={saveFormProps.loading}
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          classes={{
            root: fabRootClasses,
          }}
          onClick={_saveData}>
          <SaveIcon />

          <Typography variant="button" style={{ margin: '0 4px' }}>
            SAVE {title}
          </Typography>
        </Fab>
      )}
    </div>
  );
};

export default AutoSave;
