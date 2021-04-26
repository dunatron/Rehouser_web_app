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
  const [currentState, setCurrentSTate] = useState(themeObj);

  const [primaryColor, setPrimaryColor] = useState(
    themeObj.palette.primary.main
  );
  const [secondaryColor, setSecondaryColor] = useState(
    themeObj.palette.secondary.main
  );

  // text
  const [textPrimary, setTextPrimary] = useState(themeObj.palette.text.primary);
  const [textSecondary, setTextSecondary] = useState(
    themeObj.palette.text.secondary
  );
  const [textDisabled, setTextDisabled] = useState(
    themeObj.palette.text.disabled
  );
  const [textHint, setTextHint] = useState(themeObj.palette.text.hint);

  // background
  const [backgroundDefault, setBackgroundDefault] = useState(
    themeObj.palette.background.default
  );
  const [backgroundPaper, setBackgroundPaper] = useState(
    themeObj.palette.background.paper
  );

  useEffect(() => {
    setTheme();
    return () => {};
  }, [primaryColor]);

  const setTheme = () => {
    setThemeObj({
      //   ...theme,
      ...themeObj,
      palette: {
        ...themeObj.palette,
        primary: {
          main: primaryColor,
          //   ...themeObj.palette.primary,
          //   main: '#00FFFF',
        },
        secondary: {
          main: secondaryColor,
        },
        text: {
          primary: textPrimary,
          secondary: textSecondary,
          disabled: textDisabled,
          hint: textHint,
        },
        background: {
          paper: backgroundPaper,
          default: backgroundDefault,
        },
      },
    });
  };

  return (
    <div>
      <Card style={{ overflow: 'unset' }}>
        <SelectMaterialTheme
          setColor={color => {
            setPrimaryColor(color);
          }}
        />
      </Card>

      {/* Palette main/secondary */}
      <Card style={{ overflow: 'unset' }}>
        <CardHeader title="Palette" />
        <CardContent style={{ display: 'flex' }}>
          <ColorPicker
            name="color"
            floatingLabelText="Primary Color"
            defaultValue={primaryColor}
            onChange={color => {
              if (color !== undefined) setPrimaryColor(color);
            }}
          />
          <ColorPicker
            name="color"
            showPicker={true}
            floatingLabelText="Secondary Color"
            defaultValue={secondaryColor}
            onChange={color => {
              if (color !== undefined) setSecondaryColor(color);
            }}
          />
          <button onClick={setTheme}>Set Theme</button>
        </CardContent>
      </Card>
      {/* Palette text */}
      <Card style={{ overflow: 'unset' }}>
        <CardHeader title="Text" />

        <CardContent style={{ display: 'flex' }}>
          <ColorPicker
            name="color"
            floatingLabelText="Text Primary"
            defaultValue={textPrimary}
            onChange={color => {
              if (color !== undefined) setTextPrimary(color);
            }}
          />
          <ColorPicker
            name="color"
            showPicker={true}
            floatingLabelText="Text Secondary"
            defaultValue={textSecondary}
            onChange={color => {
              if (color !== undefined) setTextSecondary(color);
            }}
          />
          <ColorPicker
            name="color"
            showPicker={true}
            floatingLabelText="Text Disabled"
            defaultValue={textDisabled}
            onChange={color => {
              if (color !== undefined) setTextDisabled(color);
            }}
          />
          <ColorPicker
            name="color"
            showPicker={true}
            floatingLabelText="Text Hint"
            defaultValue={textHint}
            onChange={color => {
              if (color !== undefined) setTextHint(color);
            }}
          />
          <button onClick={setTheme}>Set Theme</button>
        </CardContent>
      </Card>
      {/* Palette background */}
      <Card style={{ overflow: 'unset' }}>
        <CardHeader title="Background" />
        <CardContent style={{ display: 'flex' }}>
          <ColorPicker
            name="color"
            floatingLabelText="BAckground Default"
            defaultValue={backgroundDefault}
            onChange={color => {
              if (color !== undefined) setBackgroundDefault(color);
            }}
          />
          <ColorPicker
            name="color"
            showPicker={true}
            floatingLabelText="Background Paper"
            defaultValue={backgroundPaper}
            onChange={color => {
              if (color !== undefined) setBackgroundPaper(color);
            }}
          />
          <button onClick={setTheme}>Set Theme</button>
        </CardContent>
      </Card>

      <pre>{JSON.stringify(themeObj, null, 2)}</pre>
    </div>
  );
};

export default ThemeManipulator;
