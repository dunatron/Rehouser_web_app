import React, { useState } from 'react';

import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import brown from '@material-ui/core/colors/brown';
import common from '@material-ui/core/colors/common';
import cyan from '@material-ui/core/colors/cyan';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import orange from '@material-ui/core/colors/orange';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import yellow from '@material-ui/core/colors/yellow';

import {
  Typography,
  Button,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

import { useRecoilState } from 'recoil';
import { themeState } from '@/Recoil/themeState';

import { ButtonBase } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

import { createMuiTheme } from '@material-ui/core/styles';
import ThemedBox from './ThemedBox';

const _makeTheme = (color, themeObj) => {
  const t = createMuiTheme({
    ...themeObj,
    palette: {
      ...themeObj.palette,
      primary: {
        main: color,
      },
    },
  });
  return t;
};

const colors = {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
};

const marks = [
  {
    value: 100,
    label: '100',
  },
  {
    value: 200,
    label: '200',
  },
  {
    value: 300,
    label: '300',
  },
  {
    value: 400,
    label: '400',
  },
  {
    value: 500,
    label: '500',
  },
  {
    value: 600,
    label: '600',
  },
  {
    value: 700,
    label: '700',
  },
  {
    value: 800,
    label: '800',
  },
  {
    value: 900,
    label: '900',
  },
];

function valuetext(value) {
  return `${value} material color tint`;
}

const SelectMaterialColor = () => {
  const [themeObj, setThemeObj] = useRecoilState(themeState);
  const [range, setRange] = useState(500);
  const [appView, setAppView] = useState(false);

  const _handleSetTheme = theme => {
    setThemeObj({
      ...themeObj,
      // ...theme,
      maxWidth: 2000,
      palette: {
        ...themeObj.palette,
        ...theme.palette,
        nProgress: {
          main: theme.palette.primary.main,
        },
      },
    });
  };

  return (
    <div
      style={{
        padding: '16px',
      }}>
      <Button
        onClick={() => {
          setThemeObj({
            ...themeObj,
            palette: {
              ...themeObj.palette,
              nProgress: {
                main: 'green',
              },
            },
          });
        }}>
        TEST
      </Button>
      <Slider
        defaultValue={range}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={100}
        min={100}
        max={900}
        valueLabelDisplay="auto"
        marks={marks}
        onChangeCommitted={(e, v) => {
          setRange(v);
        }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={appView}
            onChange={e => setAppView(e.target.checked)}
            name="darkMode"
            color="primary"
          />
        }
        label="App View"
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.entries(colors).map(([colorKey, colorObj]) => {
          const color = colorObj[range];
          const theme = _makeTheme(color, themeObj);

          return (
            <ThemedBox
              appView={appView}
              theme={theme}
              range={range}
              setTheme={_handleSetTheme}
              colorKey={colorKey}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectMaterialColor;
