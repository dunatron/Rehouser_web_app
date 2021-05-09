import { useState } from 'react';
import { IconButton, Typography, Box } from '@material-ui/core';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { COMPANY_NAME } from '@/Lib/const';

const DisplayJson = ({ json, title }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  // Todo: look for me. must be an admin or just return null
  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexBasis: 'wrap',
          alignItems: 'center',
        }}>
        <IconButton
          onClick={toggleOpen}
          color="primary"
          aria-label="add to shopping cart">
          {open ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
        <Typography variant="h6">
          {title ? title : `${COMPANY_NAME} data dump`}
        </Typography>
      </Box>
      {open && (
        <Box
          style={{
            maxWidth: '100%',
            overflow: 'auto',
          }}>
          <pre>{JSON.stringify(json, null, 2)}</pre>
        </Box>
      )}
    </>
  );
};

export default DisplayJson;
