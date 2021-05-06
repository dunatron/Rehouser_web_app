import React from 'react';

import MainLogo from './icon/MainLogo';
import MetatronsCube from './icon/MetatronsCube';
import { useTheme } from '@material-ui/core/styles';

const Icon = props => {
  const theme = useTheme();
  switch (props.name) {
    case 'main_logo':
      return <MainLogo theme={theme} {...props} />;
    case 'metatrons_cube':
      return <MetatronsCube theme={theme} {...props} />;
    default:
      return;
  }
};

export default Icon;
