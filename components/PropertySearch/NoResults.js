import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { connectCurrentRefinements } from 'react-instantsearch-dom';

const ClearRefinements = ({ items, refine }) => {
  return (
    <div>
      <h3>No Property Results. Try adjusting the search settings</h3>
      <Button
        onClick={() => refine(items)}
        disabled={!items.length}
        color="secondary"
        variant="contained">
        Reset All
      </Button>
    </div>
  );
};

const NoResults = connectCurrentRefinements(ClearRefinements);

export default NoResults;
