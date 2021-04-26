import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginModalState } from '@/Recoil/loginModalState';
import { themeState } from '@/Recoil/themeState';

import { createMuiTheme } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
} from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';

import SelectMaterialTheme from './SelectMaterialTheme';

const ThemeManipulator = () => {
  const [themeObj, setThemeObj] = useRecoilState(themeState);
  return (
    <div>
      <Card style={{ overflow: 'unset' }}>
        <SelectMaterialTheme />
      </Card>
      <pre>{JSON.stringify(themeObj, null, 2)}</pre>
    </div>
  );
};

export default ThemeManipulator;
