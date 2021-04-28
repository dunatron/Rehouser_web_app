import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { connectCurrentRefinements } from 'react-instantsearch-dom';

const ClearRefinements = props => {
  const { items, refine } = props;

  const queryItem = items.filter(item => item.id === 'query');

  //   currentRefinement: "gdg"
  // id: "query"
  // index: "dev_PropertySearch"
  // label: "query: gdg"
  if (queryItem.length <= 0) return null;

  return (
    <div style={{ padding: '8px' }}>
      <Chip
        avatar={<Avatar>Q</Avatar>}
        //   avatar={<div>Query</div>}
        label={queryItem[0].label}
        clickable
        color="primary"
        onDelete={() => refine(items.filter(item => item.id === 'query'))}
        //   deleteIcon={<DoneIcon />}
      />
    </div>
  );

  return (
    <button onClick={() => refine(items)} disabled={!items.length}>
      {queryItem[0].currentRefinement}
    </button>
  );
};

const ClearQuery = connectCurrentRefinements(ClearRefinements);

export default ClearQuery;
