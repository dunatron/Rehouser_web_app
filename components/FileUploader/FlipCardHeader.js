import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Paper,
  ButtonGroup,
  Button,
  IconButton,
  Box,
  Typography,
  Tooltip,
} from '@material-ui/core';

import useUploadStyles from './UploadStyles';
//icons
import FlipToBackIcon from '@material-ui/icons/FlipToBackOutlined';
import FlipToFrontIcon from '@material-ui/icons/FlipToFrontOutlined';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import MinimizeIcon from '@material-ui/icons/Minimize';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HelpIcon from '@material-ui/icons/Help';

import BackupIcon from '@material-ui/icons/Backup';
import VisibilityIcon from '@material-ui/icons/Visibility';

const FlipCardHeader = ({
  title = '',
  isFlipped,
  flip,
  expanded,
  expand,
  hasFile,
  hasServerFile,
  viewFiles,
}) => {
  const classes = useUploadStyles();
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const toggleViewModal = () => setViewModalOpen(!viewModalOpen);
  const closeViewModal = () => setViewModalOpen(false);
  return (
    <div className={classes.flipHeader}>
      {hasServerFile && (
        <Tooltip title={`We have a file for ${title} on the server`}>
          <DoneIcon color="secondary" className={classes.hasServerIcon} />
        </Tooltip>
      )}

      {!hasServerFile && hasFile && (
        <Tooltip
          title={`Files are staged on the server for ${title} and will be attached when you upload the form`}>
          <HelpIcon color="primary" className={classes.hasServerIcon} />
        </Tooltip>
      )}
      {!hasServerFile && !hasFile && (
        <Tooltip title={`No File on the server for ${title}`}>
          <WarningIcon color="default" className={classes.hasServerIcon} />
        </Tooltip>
      )}
      <Typography style={{ marginLeft: '8px', marginRight: '8px' }}>
        {title}
      </Typography>
      {hasServerFile && expanded && (
        <IconButton onClick={flip}>
          {isFlipped ? <VisibilityIcon /> : <BackupIcon />}
        </IconButton>
      )}
      <IconButton onClick={expand}>
        {expanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
      </IconButton>
    </div>
  );
};

FlipCardHeader.propTypes = {
  flip: PropTypes.any,
  isFlipped: PropTypes.any,
  title: PropTypes.any,
};

export default FlipCardHeader;
