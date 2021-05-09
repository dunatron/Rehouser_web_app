import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, FormControlLabel } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const strokeWidth = '1px';
const useStyles = makeStyles(theme => ({
  adminPanel: {
    position: 'absolute',
    top: '64px',
    pointerEvents: 'all',
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    overflow: 'auto',
    maxHeight: '80vh',
  },
  padding: {
    // padding: '9% 3%', // THESE WOULD CHANGE ALOT ON DIFF WIDTHS
    padding: '6%',
  },
  testPath: {
    fill: 'none',
    stroke: 'purple',
  },
  style1: {
    fill: 'none',
    stroke: 'black',
  },
  style2: {
    fill: 'none',
    stroke: 'transparent',
  },

  circles: {
    fill: 'none',
    stroke: theme.palette.text.primary,
  },
  outerCircle: {
    fill: 'none',
    // stroke: fade(theme.palette.primary.main, 0.5),
    // stroke: theme.palette.primary.contrastText,
    // stroke: theme.palette.background.default,
    stroke: theme.palette.primary.main,
  },
  middleCircle: {
    fill: 'none',
    // stroke: theme.palette.primary.contrastText,
    // stroke: theme.palette.background.default,
    stroke: theme.palette.primary.main,
    // stroke: 'none',
  },
  centreCircle: {
    fill: 'none',
    // stroke: theme.palette.primary.contrastText,
    // stroke: theme.palette.background.default,
    stroke: theme.palette.primary.main,
  },
  outerHexagon: {
    // fill: 'none',
    fill: fade(theme.palette.primary.main, 0.5),
    // stroke: 'black',
    stroke: theme.palette.primary.main,
    strokeWidth: '3px',
  },
  topOuterTri: {
    fill: 'none',
    stroke: theme.palette.text.primary,
    strokeWidth: strokeWidth,
  },
  upsidedownOuterTri: {
    fill: 'none',
    stroke: theme.palette.text.primary,
    strokeWidth: strokeWidth,
  },
  innerHexagon: {
    // fill: 'none',
    fill: fade(theme.palette.primary.light, 0.5),
    // fill: theme.palette.primary.light,
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
  topInnerTri: {
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
  upsidedownInnerTri: {
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
  leftLine: {
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
    // strokeWidth: '2px',
  },
  topLeftBotRightLine: {
    // stroke: theme.palette.primary.main,
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
  topRightBotLeftLine: {
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
  topBotMiddleLine: {
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
  botLeftInnermostTri: {
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
  botRightInnermostTri: {
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: strokeWidth,
  },
}));

const SVG = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  //   viewBox = '0 0 432 482',
  viewBox = '49 51 333 384',
  padding,
  theme,
  adminPanel = false,
  canShowAdminPanel = false,
}) => {
  const classes = useStyles();
  const iconClasses = clsx({
    'svg-icon': true,
    [classes.padding]: padding,
  });

  const [shapeState, setShapeState] = useState({
    circles: false,
    outerHexagon: true,
    topOuterTri: false,
    upsidedownOuterTri: false,
    innerHexagon: true,
    topInnerTri: false,
    upsidedownInnerTri: false,
    topLeftBotRightLine: false,
    topRightBotLeftLine: false,
    topBotMiddleLine: false,
    botLeftInnermostTri: false,
    botRightInnermostTri: false,
  });

  const [showCircles, setShowCircles] = useState(true);
  const [s1, setS1] = useState(true);

  const handleChangeShapeState = e => {
    console.log(e.target.name);
    console.log(e.target.checked);
    setShapeState({
      ...shapeState,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      {adminPanel && canShowAdminPanel && (
        <div className={classes.adminPanel}>
          {Object.keys(shapeState).map((itemKey, idx) => {
            return (
              <FormControlLabel
                control={
                  <Switch
                    name={itemKey}
                    checked={shapeState[itemKey]}
                    onChange={e => handleChangeShapeState(e)}
                  />
                }
                label={itemKey}
              />
            );
          })}
        </div>
      )}
      <svg
        //   xmlns:svg="http://www.w3.org/2000/svg"
        //   xmlns="http://www.w3.org/2000/svg"
        height={width}
        viewBox={viewBox}
        className={iconClasses}
        version="1.0"
        id="svg2">
        <defs id="defs34" />
        {/* M 215.5,147.5 L 133.5,194.5 L 133.5,288.5 L 215.5,335.5 L 297.5,288.5 L 297.5,194.5 L 215.5,147.5 z  */}
        <g id="layer1">
          {/* PATH TO EDIT IS HERE DUMMY */}
          {/* <path
            d="M215,241.5 L215.5,147.5"
            // style="fill:none;stroke:black"
            className={classes.testPath}
            id="path2898"
          /> */}
          {/* PATH TO EDIT IS ABOVE YOU DUMMY */}
          {/* <path
            d="M215,241 L215.5,147.5"
            // style="fill:none;stroke:black"
            className={classes.testPath}
            id="path2898"
          /> */}
          {/* <path
            d="M51.5,147.5 L262.5 241.5"
            // style="fill:none;stroke:black"
            className={classes.testPath}
            id="path2898"
          /> */}
          {/* <path
            d="M51.5,147.5 L168.5,241.5"
            // style="fill:none;stroke:black"
            className={classes.testPath}
            id="path2898"
          /> */}
          {/* LEFT LINE */}
          <path
            d="M51.5,147.5 L215.5,241.5"
            // style="fill:none;stroke:black"
            className={classes.leftLine}
            id="path2898"
          />
          <path
            d="M215.5,241.5 L215.5,429.5"
            // style="fill:none;stroke:black"
            className={classes.leftLine}
            id="path2898"
          />
          <path
            d="M215.5,241.5 L379.5,147.5"
            // style="fill:none;stroke:black"
            className={classes.leftLine}
            id="path2898"
          />

          {/* DUMMY CIRCLE */}
          {/* <path
            d="M51.5,335.5 L133.5,288.5"
            // style="fill:none;stroke:black"
            className={classes.leftLine}
            id="path2898"
          />
          <path
            d="M379.5,335.5 L297.5,288.5"
            // style="fill:none;stroke:black"
            className={classes.leftLine}
            id="path2898"
          />
          <path
            d="M215.5,147.5 L215.5,53.5"
            // style="fill:none;stroke:black"
            className={classes.leftLine}
            id="path2898"
          /> */}
          {/* <path
            d="M 262.5 241.5 A 47 47 0 1 1  168.5,241.5 A 47 47 0 1 1  262.5 241.5 z"
            // style="fill:none;stroke:black"
            className={classes.style1}
            id="path1933"
          /> */}
          {shapeState.circles && (
            <g id="g7542">
              {/* 1.  Middle Circle */}
              <path
                d="M 262.5 241.5 A 47 47 0 1 1  168.5,241.5 A 47 47 0 1 1  262.5 241.5 z"
                // style="fill:none;stroke:black"
                className={classes.centreCircle}
                id="path1933"
              />
              {/* 2.  Bottom Inner circle */}
              <path
                d="M 262.5 335.5 A 47 47 0 1 1  168.5,335.5 A 47 47 0 1 1  262.5 335.5 z"
                // style="fill:none;stroke:black"
                className={classes.middleCircle}
                id="path1961"
              />
              {/* 3. Top inner circle */}
              <path
                d="M 262.5 147.5 A 47 47 0 1 1  168.5,147.5 A 47 47 0 1 1  262.5 147.5 z"
                // style="fill:none;stroke:black"
                className={classes.middleCircle}
                id="path1967"
              />
              {/* 4. inner top left circle */}
              <path
                d="M 180.5 194.5 A 47 47 0 1 1  86.5,194.5 A 47 47 0 1 1  180.5 194.5 z"
                // style="fill:none;stroke:black"
                className={classes.middleCircle}
                id="path1971"
              />
              {/* 5. Inner top Right */}
              <path
                d="M 344.5 194.5 A 47 47 0 1 1  250.5,194.5 A 47 47 0 1 1  344.5 194.5 z"
                // style="fill:none;stroke:black"
                className={classes.middleCircle}
                id="path1973"
              />
              {/* 6. Inner bot Left circle  */}
              <path
                d="M 180.5 288.5 A 47 47 0 1 1  86.5,288.5 A 47 47 0 1 1  180.5 288.5 z"
                // style="fill:none;stroke:black"
                className={classes.middleCircle}
                id="path1979"
              />
              {/* 7. Inner Bot left circle */}
              <path
                d="M 344.5 288.5 A 47 47 0 1 1  250.5,288.5 A 47 47 0 1 1  344.5 288.5 z"
                // style="fill:none;stroke:black"
                className={classes.middleCircle}
                id="path1981"
              />
              {/* 8. Bot circle */}
              <path
                d="M 262.5 429.5 A 47 47 0 1 1  168.5,429.5 A 47 47 0 1 1  262.5 429.5 z"
                // style="fill:none;stroke:black"
                className={classes.outerCircle}
                id="path1963"
              />
              {/* 9. Top Circle */}
              <path
                d="M 262.5 53.5 A 47 47 0 1 1  168.5,53.5 A 47 47 0 1 1  262.5 53.5 z"
                // style="fill:none;stroke:black"
                className={classes.outerCircle}
                id="path1965"
              />
              {/* 10. Top left circle */}
              <path
                d="M 98.5 147.5 A 47 47 0 1 1  4.5,147.5 A 47 47 0 1 1  98.5 147.5 z"
                // style="fill:none;stroke:black"
                className={classes.outerCircle}
                id="path1969"
              />
              {/* 11. Top right circle */}
              <path
                d="M 426.5 147.5 A 47 47 0 1 1  332.5,147.5 A 47 47 0 1 1  426.5 147.5 z"
                // style="fill:none;stroke:black"
                className={classes.outerCircle}
                id="path1975"
              />
              {/* 12. Bottom left circle  */}
              <path
                d="M 98.5 335.5 A 47 47 0 1 1  4.5,335.5 A 47 47 0 1 1  98.5 335.5 z"
                // style="fill:none;stroke:black"
                className={classes.outerCircle}
                id="path1977"
              />
              {/* 13. Bottom right circle  */}
              <path
                d="M 426.5 335.5 A 47 47 0 1 1  332.5,335.5 A 47 47 0 1 1  426.5 335.5 z"
                // style="fill:none;stroke:black"
                className={classes.outerCircle}
                id="path1983"
              />
            </g>
          )}

          <g id="g7557">
            {/* 1. Outer hexagon */}
            {shapeState.outerHexagon && (
              <path
                d="M 215.5,53.5 L 379.5,147.5 L 379.5,335.5 L 215.5,429.5 L 51.5,335.5 L 51.5,147.5 L 215.5,53.5 z "
                // style="fill:none;stroke:black"
                className={classes.outerHexagon}
                id="path2886"
              />
            )}

            {/* 2. Top Outer triangle */}
            {shapeState.topOuterTri && (
              <path
                d="M 215.5,53.5 L 51.5,335.5 L 379.5,335.5 L 215.5,53.5 z "
                // style="fill:none;stroke:black"
                className={classes.topOuterTri}
                id="path2888"
              />
            )}
            {/* 3. Upsidedown Outer triangle */}
            {shapeState.upsidedownOuterTri && (
              <path
                d="M 51.5,147.5 L 215.5,429.5 L 379.5,147.5 L 51.5,147.5 z "
                // style="fill:none;stroke:black"
                className={classes.upsidedownOuterTri}
                id="path2890"
              />
            )}

            {/* 4. inner hexagon/cube */}
            {shapeState.innerHexagon && (
              <path
                d="M 215.5,147.5 L 133.5,194.5 L 133.5,288.5 L 215.5,335.5 L 297.5,288.5 L 297.5,194.5 L 215.5,147.5 z "
                // style="fill:none;stroke:black"
                className={classes.innerHexagon}
                id="path2892"
              />
            )}

            {/* 5 Top inner triangle */}
            {shapeState.topInnerTri && (
              <path
                d="M 133.5,288.5 L 215.5,53.5 L 297.5,288.5 L 133.5,288.5 z "
                // style="fill:none;stroke:black"
                className={classes.topInnerTri}
                id="path2894"
              />
            )}

            {/* 6. Upside down inner triangle */}
            {shapeState.upsidedownInnerTri && (
              <path
                d="M 215.5,429.5 L 133.5,194.5 L 297.5,194.5 L 215.5,429.5 z "
                // style="fill:none;stroke:black"
                className={classes.upsidedownInnerTri}
                id="path2896"
              />
            )}
            {/*  */}
            {/* 7. Top Left - Bottom right Line */}
            {shapeState.topLeftBotRightLine && (
              <path
                d="M 51.5,147.5 L 379.5,335.5"
                // style="fill:none;stroke:black"
                className={classes.topLeftBotRightLine}
                id="path2898"
              />
            )}

            {/* 8. Top Right - Bottom left Line */}
            {shapeState.topRightBotLeftLine && (
              <path
                d="M 51.5,335.5 L 379.5,147.5"
                // style="fill:none;stroke:black"
                className={classes.topRightBotLeftLine}
                id="path2900"
              />
            )}

            {/* 9. Top-Bot Middle Line  */}
            {shapeState.topBotMiddleLine && (
              <path
                d="M 215.5,53.5 L 215.5,429.5"
                // style="fill:none;stroke:black"
                className={classes.topBotMiddleLine}
                id="path2902"
              />
            )}

            {/* 10. Botom Lefft inner most triangle */}
            {shapeState.botLeftInnermostTri && (
              <path
                d="M 51.5,335.5 L 215.5,147.5 L 297.5,288.5 L 51.5,335.5 z "
                // style="fill:none;stroke:black"
                className={classes.botLeftInnermostTri}
                id="path2904"
              />
            )}
            {/*  */}
            {/* 10. Botom right inner most triangle */}
            {shapeState.botRightInnermostTri && (
              <path
                d="M 379.5,335.5 L 215.5,147.5 L 133.5,288.5 L 379.5,335.5 z "
                // style="fill:none;stroke:black"
                className={classes.botRightInnermostTri}
                id="path2906"
              />
            )}
            {/*  */}
            {/* 10. top right inner most triangle */}
            {shapeState.topRightInnermostTri && (
              <path
                d="M 379.5,147.5 L 133.5,194.5 L 215.5,335.5 L 379.5,147.5 z "
                // style="fill:none;stroke:black"
                className={classes.topRightInnermostTri}
                id="path2908"
              />
            )}
            {/*  */}
            <path
              d="M 51.5,147.5 L 215.5,335.5 L 297.5,194.5 L 51.5,147.5 z "
              // style="fill:none;stroke: transparent;"
              className={classes.style2}
              id="path2910"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default SVG;
