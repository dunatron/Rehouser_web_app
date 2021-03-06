import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { connectRefinementList } from 'react-instantsearch-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Collapse,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
} from '@material-ui/core';

import ExpansionRefinement from './ExpansionRefinement';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    // color: theme.palette.primary.contrastText,
    // backgroundColor: theme.palette.primary.main,
    margin: 0,
  },
  controlLabel: {
    // color: theme.palette.primary.contrastText,
  },
  label: {
    display: 'flex',
    color: 'inherit',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '1rem',
    wordBreak: 'break-word',
  },
  labelCount: {
    fontSize: '0.8em',
    alignSelf: 'end',
    padding: '0 0 0 4px',
    wordBreak: 'break-all',
  },
  checkboxRoot: {
    color: 'inherit',
  },
  checkboxChecked: {
    color: 'inherit',
  },
}));

const CheckboxItemLabel = ({ label, count }) => {
  const classes = useStyles();
  return (
    <span className={classes.label}>
      {label}
      <span className={classes.labelCount}>({count})</span>
    </span>
  );
};

const MaterialUiCheckBoxRefinementList = ({
  items,
  attribute,
  refine,
  createURL,
  expansionProps,
}) => {
  const classes = useStyles();

  return (
    <ExpansionRefinement
      expanded={true}
      title={attribute.toUpperCase()}
      nested={true}
      {...expansionProps}>
      {items.map(({ count, isRefined, label, value }, i) => (
        <FormControlLabel
          classes={{
            root: classes.root,
            label: classes.controlLabel,
          }}
          key={i}
          control={
            <Checkbox
              size="small"
              classes={{
                root: classes.checkboxRoot,
                checked: classes.checkboxChecked,
              }}
              color="primary"
              // color="default"
              checked={isRefined}
              onClick={event => {
                event.preventDefault();
                refine(value);
              }}
              // value="checkedA"
            />
          }
          // label={label}
          label={<CheckboxItemLabel label={label} count={count} />}
        />
      ))}
    </ExpansionRefinement>
  );
};

MaterialUiCheckBoxRefinementList.propTypes = {
  attribute: PropTypes.string.isRequired,
  operator: PropTypes.string,
};

const CheckBoxList = connectRefinementList(MaterialUiCheckBoxRefinementList);

export default CheckBoxList;
