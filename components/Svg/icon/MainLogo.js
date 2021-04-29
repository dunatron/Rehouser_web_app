// /**
//  * Top Left Stick is Behihn Top right stick and on top of the bottom stick
//  *
//  */
// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     color: theme.palette.text.primary,
//   },
//   padding: {
//     // padding: '9% 3%', // THESE WOULD CHANGE ALOT ON DIFF WIDTHS
//     padding: '6%',
//   },
//   st0: {
//     // fill: '#e60085',
//     // fill: theme.palette.primary.main,
//     fill: 'none',
//   },
//   st1: {
//     fill: 'none',
//     // stroke: '#172a3a',
//     stroke: theme.palette.primary.main,
//     strokeWidth: 8.438,
//     strokeMiterlimit: 10,
//   },
//   st2: {
//     fill: 'none',
//     // fill: '#172a3a',
//     // fill: theme.palette.primary.main,
//     // stroke: theme.palette.primary.light,
//     fill: theme.palette.primary.light,
//   },
//   st3: {
//     // fill: '#e60085',
//     fill: theme.palette.primary.main,
//   },
//   st4: {
//     // fill: '172a3a',
//     fill: theme.palette.primary.main,
//   },
//   // bottomRight Blob
//   path1: {
//     // stroke: 'green',
//     // strokeWidth: 8.438,
//     // strokeMiterlimit: 10,
//     fill: theme.palette.primary.main,
//   },
//   // Top Blob
//   path2: {
//     // fill: 'purple',
//     // fill: theme.palette.primary.light,
//     // fill: theme.palette.primary.light,
//   },
//   // bottom STick
//   path3: {
//     stroke: theme.palette.primary.main,
//     // stroke: 'red',
//     // fill: theme.palette.primary.light,
//   },
//   // Top Lefts STick
//   path4: {
//     stroke: theme.palette.primary.main,
//     // stroke: 'blue',
//     // fill: theme.palette.primary.light,
//   },
//   // Top right STick
//   path5: {
//     stroke: theme.palette.primary.main,
//     // stroke: 'yellow',
//     // fill: theme.palette.primary.light,
//   },
//   // BELOW QARE THE LETTERS
//   path6: {
//     fill: theme.palette.primary.main,
//   },
//   path7: {
//     fill: theme.palette.primary.main,
//   },
//   path8: {
//     fill: theme.palette.primary.main,
//   },
//   path9: {
//     fill: theme.palette.primary.main,
//   },
//   path10: {
//     fill: theme.palette.primary.main,
//   },
//   path11: {
//     fill: theme.palette.primary.main,
//   },
//   path12: {
//     fill: theme.palette.primary.main,
//   },
//   path13: {
//     fill: theme.palette.primary.main,
//   },
// }));

// const SVG = ({
//   style = {},
//   fill = '#000',
//   width = '100%',
//   className = '',
//   viewBox = '0 0 479.17 393.15',
//   padding,
//   theme,
// }) => {
//   const classes = useStyles();
//   const iconClasses = clsx({
//     'svg-icon': true,
//     [classes.padding]: padding,
//   });

//   const path1 = clsx({
//     [classes.st2]: true,
//     [classes.path1]: true,
//   });
//   const path2 = clsx({
//     [classes.st0]: true,
//     [classes.path2]: true,
//   });
//   const path3 = clsx({
//     [classes.st1]: true,
//     [classes.path3]: true,
//   });
//   const path4 = clsx({
//     [classes.st1]: true,
//     [classes.path4]: true,
//   });
//   const path5 = clsx({
//     [classes.st1]: true,
//     [classes.path5]: true,
//   });
//   const path6 = clsx({
//     [classes.st3]: true,
//     [classes.path6]: true,
//   });
//   const path7 = clsx({
//     [classes.st3]: true,
//     [classes.path7]: true,
//   });
//   const path8 = clsx({
//     [classes.st4]: true,
//     [classes.path8]: true,
//   });
//   const path9 = clsx({
//     [classes.st4]: true,
//     [classes.path9]: true,
//   });
//   const path10 = clsx({
//     [classes.st4]: true,
//     [classes.path10]: true,
//   });
//   const path11 = clsx({
//     [classes.st4]: true,
//     [classes.path11]: true,
//   });
//   const path12 = clsx({
//     [classes.st4]: true,
//     [classes.path12]: true,
//   });
//   const path13 = clsx({
//     [classes.st4]: true,
//     [classes.path13]: true,
//   });

//   return (
//     <svg
//       width={width}
//       // style={style}
//       className={iconClasses}
//       height={width}
//       viewBox={viewBox}
//       xmlns="http://www.w3.org/2000/svg"
//       // className={`svg-icon ${className || ''}`}
//       xmlnsXlink="http://www.w3.org/1999/xlink">
//       <g>
//         <path
//           className={path1}
//           // className={classes.st2}
//           d="M402.38,271.41c8.22,8.22,19,12.39,29.83,12.56c23.45-0.35,42.53-19.62,42.53-43.14
// 		c0-23.75-19.43-43.18-43.18-43.18H328.62L402.38,271.41z"
//         />
//       </g>
//       <g>
//         <path
//           // className={classes.st0}
//           className={path2}
//           d="M270.02,82.58c16.45-16.45,16.74-43.12,0.97-59.98l-1.08-1.08c-8.38-8.38-19.43-12.58-30.48-12.59
// 		c-11.05,0.01-22.1,4.21-30.48,12.59l-1.08,1.08c-15.77,16.87-15.47,43.54,0.97,59.98l30.58,30.58L270.02,82.58z"
//         />
//       </g>
//       <path
//         // className={classes.st1}
//         className={path3}
//         d="M431.57,283.99H47.31c-23.75,0-43.18-19.43-43.18-43.18v0c0-23.75,19.43-43.18,43.18-43.18h384.26
// 	c23.75,0,43.18,19.43,43.18,43.18v0C474.74,264.56,455.31,283.99,431.57,283.99z"
//       />
//       <path
//         // className={classes.st1}
//         className={path4}
//         d="M270.53,78.65L77.79,271.39c-16.79,16.79-44.27,16.79-61.06,0l0,0c-16.79-16.79-16.79-44.27,0-61.06
// 	L209.47,17.58c16.79-16.79,44.27-16.79,61.06,0l0,0C287.33,34.38,287.33,61.85,270.53,78.65z"
//       />
//       <path
//         // className={classes.st1}
//         className={path5}
//         d="M402.39,271.39L209.64,78.65c-16.79-16.79-16.79-44.27,0-61.06l0,0c16.79-16.79,44.27-16.79,61.06,0
// 	l192.75,192.75c16.79,16.79,16.79,44.27,0,61.06l0,0C446.66,288.19,419.18,288.19,402.39,271.39z"
//       />

//       <g>
//         <path
//           // className={classes.st3}
//           className={path6}
//           d="M36.27,360.75l18.29,30.68H43.15L25.9,361.51h-3.91l-3.68,29.93H7.52l8.95-72.77h14.28
// 		c4.65,0,8.34,0.42,11.08,1.27c2.7,0.79,5.06,2.23,7.07,4.34c3.8,3.9,5.7,8.92,5.7,15.08C54.6,350.64,48.49,357.77,36.27,360.75z
// 		 M25.99,328.7l-2.83,23.38h4.95c3.64,0,6.36-0.34,8.15-1.04c1.92-0.69,3.52-1.87,4.81-3.53c1.76-2.33,2.64-5.06,2.64-8.2
// 		c0-3.68-1.06-6.36-3.18-8.06c-2.12-1.7-5.46-2.54-10.02-2.54H25.99z"
//         />
//         <path
//           // className={classes.st3}
//           className={path7}
//           d="M72.61,372.96c0,3.27,1.13,5.95,3.39,8.06c2.29,2.1,5.22,3.16,8.77,3.16c4.87,0,8.61-1.82,11.22-5.47
// 		l7.78,4.29c-2.7,3.65-5.48,6.19-8.34,7.64c-2.89,1.48-6.5,2.21-10.84,2.21c-6.88,0-12.37-2.02-16.45-6.08
// 		c-4.08-4.05-6.13-9.47-6.13-16.26c0-7.1,2.25-13.04,6.74-17.82c4.46-4.74,10.1-7.12,16.92-7.12c6.6,0,11.8,2.14,15.6,6.41
// 		c3.87,4.3,5.8,10.07,5.8,17.3c0,0.76-0.05,1.98-0.14,3.68H72.61z M96.51,364.57c-1.1-6.85-4.89-10.27-11.36-10.27
// 		c-6.13,0-10.12,3.42-11.97,10.27H96.51z"
//         />
//         <path
//           // className={classes.st4}
//           className={path8}
//           d="M138.42,346.74h27.32v-28.09h18.92v72.78h-18.92v-30.02h-27.32v30.02H119.5v-72.78h18.92V346.74z"
//         />
//         <path
//           // className={classes.st4}
//           className={path9}
//           d="M196.34,366.24c0-3.67,0.74-7.1,2.22-10.28c1.48-3.19,3.54-5.95,6.18-8.3c2.64-2.35,5.77-4.2,9.41-5.55
// 		c3.64-1.35,7.61-2.03,11.92-2.03c4.25,0,8.19,0.66,11.82,1.98c3.63,1.32,6.79,3.15,9.46,5.5c2.67,2.35,4.74,5.15,6.23,8.4
// 		c1.48,3.25,2.22,6.84,2.22,10.76c0,3.93-0.76,7.52-2.27,10.76c-1.51,3.25-3.59,6.05-6.23,8.4c-2.64,2.35-5.81,4.17-9.51,5.45
// 		c-3.7,1.29-7.71,1.93-12.02,1.93c-4.25,0-8.17-0.64-11.78-1.93c-3.61-1.29-6.71-3.12-9.32-5.5c-2.61-2.38-4.65-5.23-6.13-8.54
// 		C197.07,373.98,196.34,370.3,196.34,366.24z M214.77,366.44c0,1.67,0.3,3.2,0.92,4.59c0.61,1.38,1.42,2.59,2.42,3.62
// 		c1,1.03,2.19,1.84,3.57,2.42c1.38,0.58,2.85,0.87,4.39,0.87s3.01-0.29,4.39-0.87c1.38-0.58,2.57-1.38,3.57-2.42
// 		c1-1.03,1.8-2.24,2.41-3.62c0.61-1.38,0.92-2.88,0.92-4.49c0-1.54-0.3-3.01-0.92-4.39c-0.61-1.38-1.42-2.59-2.41-3.62
// 		c-1-1.03-2.19-1.84-3.57-2.42c-1.39-0.58-2.85-0.87-4.39-0.87s-3.01,0.29-4.39,0.87c-1.38,0.58-2.57,1.39-3.57,2.42
// 		c-1,1.03-1.8,2.22-2.42,3.57C215.08,363.44,214.77,364.89,214.77,366.44z"
//         />
//         <path
//           // className={classes.st4}
//           className={path10}
//           d="M283.31,341.92v27.9c0,6.11,2.96,9.17,8.88,9.17c5.92,0,8.88-3.06,8.88-9.17v-27.9h17.47v31.27
// 		c0,6.69-2.21,11.71-6.61,15.06c-4.41,3.35-10.99,5.02-19.74,5.02c-8.75,0-15.33-1.67-19.74-5.02c-4.41-3.35-6.61-8.37-6.61-15.06
// 		v-31.27H283.31z"
//         />
//         <path
//           // className={classes.st4}
//           className={path11}
//           d="M363.24,354.66c-3.22-1.67-6.37-2.51-9.46-2.51c-1.61,0-2.91,0.32-3.91,0.97c-1,0.64-1.5,1.51-1.5,2.61
// 		c0,0.58,0.08,1.05,0.24,1.4c0.16,0.36,0.51,0.69,1.06,1.01c0.54,0.32,1.35,0.61,2.41,0.87s2.46,0.58,4.2,0.97
// 		c4.83,0.97,8.43,2.69,10.81,5.16c2.38,2.48,3.57,5.65,3.57,9.51c0,2.9-0.58,5.5-1.74,7.82c-1.16,2.32-2.77,4.26-4.83,5.84
// 		c-2.06,1.58-4.54,2.8-7.43,3.67c-2.9,0.87-6.08,1.3-9.56,1.3c-6.69,0-13.29-1.9-19.79-5.69l6.37-12.36
// 		c4.89,3.35,9.52,5.02,13.9,5.02c1.61,0,2.93-0.35,3.96-1.06c1.03-0.71,1.54-1.61,1.54-2.7c0-0.64-0.08-1.17-0.24-1.59
// 		c-0.16-0.42-0.5-0.8-1.01-1.16c-0.51-0.35-1.27-0.67-2.27-0.97c-1-0.29-2.3-0.59-3.91-0.92c-5.41-1.09-9.19-2.72-11.34-4.87
// 		c-2.16-2.16-3.23-5.13-3.23-8.93c0-2.77,0.51-5.26,1.54-7.48c1.03-2.22,2.51-4.1,4.44-5.65c1.93-1.54,4.26-2.74,7-3.57
// 		c2.73-0.84,5.77-1.26,9.12-1.26c5.47,0,10.78,1.06,15.93,3.19L363.24,354.66z"
//         />
//         <path
//           // className={classes.st4}
//           className={path12}
//           d="M395.28,369.62c0,7.53,3.54,11.3,10.62,11.3c3.8,0,6.66-1.54,8.59-4.63h16.89
// 		c-3.41,11.33-11.94,16.99-25.58,16.99c-4.18,0-8.01-0.63-11.49-1.88c-3.47-1.25-6.45-3.04-8.93-5.36c-2.48-2.32-4.39-5.08-5.74-8.3
// 		c-1.35-3.22-2.03-6.82-2.03-10.81c0-4.12,0.64-7.83,1.93-11.15c1.29-3.31,3.12-6.13,5.5-8.45c2.38-2.32,5.26-4.1,8.64-5.36
// 		c3.38-1.26,7.19-1.88,11.44-1.88c4.18,0,7.95,0.63,11.3,1.88c3.35,1.25,6.18,3.07,8.49,5.45c2.32,2.38,4.08,5.29,5.31,8.73
// 		c1.22,3.44,1.84,7.32,1.84,11.63v1.83H395.28z M415.75,359.49c-0.58-2.45-1.77-4.41-3.57-5.89c-1.8-1.48-3.99-2.22-6.56-2.22
// 		c-2.7,0-4.91,0.71-6.61,2.12c-1.7,1.42-2.78,3.41-3.23,5.98H415.75z"
//         />
//         <path
//           // className={classes.st4}
//           className={path13}
//           d="M442,341.92h17.47v8.11c1.87-2.96,4.15-5.23,6.86-6.8c2.7-1.58,5.86-2.36,9.46-2.36c0.45,0,0.95,0,1.5,0
// 		c0.54,0,1.17,0.06,1.88,0.19v16.7c-2.32-1.16-4.83-1.74-7.53-1.74c-4.05,0-7.1,1.21-9.12,3.62c-2.03,2.42-3.04,5.94-3.04,10.57
// 		v21.24H442V341.92z"
//         />
//       </g>
//     </svg>
//   );
// };

// export default SVG;
/**
 * Top Left Stick is Behihn Top right stick and on top of the bottom stick
 *
 */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  padding: {
    // padding: '9% 3%', // THESE WOULD CHANGE ALOT ON DIFF WIDTHS
    padding: '6%',
  },
  st0: {
    // fill: '#e60085',
    // fill: theme.palette.primary.main,
    fill: 'none',
  },
  st1: {
    fill: 'none',
    // stroke: '#172a3a',
    stroke: theme.palette.primary.main,
    strokeWidth: 8.438,
    strokeMiterlimit: 10,
  },
  st2: {
    fill: 'none',
    // fill: '#172a3a',
    // fill: theme.palette.primary.main,
    // stroke: theme.palette.primary.light,
    fill: theme.palette.primary.light,
  },
  st3: {
    // fill: '#e60085',
    fill: theme.palette.primary.main,
  },
  st4: {
    // fill: '172a3a',
    fill: theme.palette.primary.main,
  },
  // bottomRight Blob
  path1: {
    // stroke: 'green',
    // strokeWidth: 8.438,
    // strokeMiterlimit: 10,
    fill: theme.palette.primary.main,
  },
  // Top Blob
  path2: {
    // fill: 'purple',
    // fill: theme.palette.primary.light,
    // fill: theme.palette.primary.light,
  },
  // bottom STick
  path3: {
    stroke: theme.palette.primary.main,
    // stroke: 'red',
    // fill: theme.palette.primary.light,
  },
  // Top Lefts STick
  path4: {
    stroke: theme.palette.primary.main,
    // stroke: 'blue',
    // fill: theme.palette.primary.light,
  },
  // Top right STick
  path5: {
    stroke: theme.palette.primary.main,
    // stroke: 'yellow',
    // fill: theme.palette.primary.light,
  },
  // BELOW QARE THE LETTERS
  path6: {
    fill: theme.palette.text.primary,
  },
  path7: {
    fill: theme.palette.text.primary,
  },
  path8: {
    fill: theme.palette.text.primary,
  },
  path9: {
    fill: theme.palette.text.primary,
  },
  path10: {
    fill: theme.palette.text.primary,
  },
  path11: {
    fill: theme.palette.text.primary,
  },
  path12: {
    fill: theme.palette.text.primary,
  },
  path13: {
    fill: theme.palette.text.primary,
  },
}));

const SVG = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 479.17 393.15',
  padding,
  theme,
}) => {
  const classes = useStyles();
  const iconClasses = clsx({
    'svg-icon': true,
    [classes.padding]: padding,
  });

  const path1 = clsx({
    [classes.st2]: true,
    [classes.path1]: true,
  });
  const path2 = clsx({
    [classes.st0]: true,
    [classes.path2]: true,
  });
  const path3 = clsx({
    [classes.st1]: true,
    [classes.path3]: true,
  });
  const path4 = clsx({
    [classes.st1]: true,
    [classes.path4]: true,
  });
  const path5 = clsx({
    [classes.st1]: true,
    [classes.path5]: true,
  });
  const path6 = clsx({
    [classes.st3]: true,
    [classes.path6]: true,
  });
  const path7 = clsx({
    [classes.st3]: true,
    [classes.path7]: true,
  });
  const path8 = clsx({
    [classes.st4]: true,
    [classes.path8]: true,
  });
  const path9 = clsx({
    [classes.st4]: true,
    [classes.path9]: true,
  });
  const path10 = clsx({
    [classes.st4]: true,
    [classes.path10]: true,
  });
  const path11 = clsx({
    [classes.st4]: true,
    [classes.path11]: true,
  });
  const path12 = clsx({
    [classes.st4]: true,
    [classes.path12]: true,
  });
  const path13 = clsx({
    [classes.st4]: true,
    [classes.path13]: true,
  });

  return (
    <svg
      width={width}
      // style={style}
      className={iconClasses}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      // className={`svg-icon ${className || ''}`}
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g>
        <path
          className={path1}
          // className={classes.st2}
          d="M402.38,271.41c8.22,8.22,19,12.39,29.83,12.56c23.45-0.35,42.53-19.62,42.53-43.14
     c0-23.75-19.43-43.18-43.18-43.18H328.62L402.38,271.41z"
        />
      </g>
      <g>
        <path
          // className={classes.st0}
          className={path2}
          d="M270.02,82.58c16.45-16.45,16.74-43.12,0.97-59.98l-1.08-1.08c-8.38-8.38-19.43-12.58-30.48-12.59
     c-11.05,0.01-22.1,4.21-30.48,12.59l-1.08,1.08c-15.77,16.87-15.47,43.54,0.97,59.98l30.58,30.58L270.02,82.58z"
        />
      </g>
      <path
        // className={classes.st1}
        className={path3}
        d="M431.57,283.99H47.31c-23.75,0-43.18-19.43-43.18-43.18v0c0-23.75,19.43-43.18,43.18-43.18h384.26
   c23.75,0,43.18,19.43,43.18,43.18v0C474.74,264.56,455.31,283.99,431.57,283.99z"
      />
      <path
        // className={classes.st1}
        className={path4}
        d="M270.53,78.65L77.79,271.39c-16.79,16.79-44.27,16.79-61.06,0l0,0c-16.79-16.79-16.79-44.27,0-61.06
   L209.47,17.58c16.79-16.79,44.27-16.79,61.06,0l0,0C287.33,34.38,287.33,61.85,270.53,78.65z"
      />
      <path
        // className={classes.st1}
        className={path5}
        d="M402.39,271.39L209.64,78.65c-16.79-16.79-16.79-44.27,0-61.06l0,0c16.79-16.79,44.27-16.79,61.06,0
   l192.75,192.75c16.79,16.79,16.79,44.27,0,61.06l0,0C446.66,288.19,419.18,288.19,402.39,271.39z"
      />

      <g>
        <path
          // className={classes.st3}
          className={path6}
          d="M36.27,360.75l18.29,30.68H43.15L25.9,361.51h-3.91l-3.68,29.93H7.52l8.95-72.77h14.28
     c4.65,0,8.34,0.42,11.08,1.27c2.7,0.79,5.06,2.23,7.07,4.34c3.8,3.9,5.7,8.92,5.7,15.08C54.6,350.64,48.49,357.77,36.27,360.75z
      M25.99,328.7l-2.83,23.38h4.95c3.64,0,6.36-0.34,8.15-1.04c1.92-0.69,3.52-1.87,4.81-3.53c1.76-2.33,2.64-5.06,2.64-8.2
     c0-3.68-1.06-6.36-3.18-8.06c-2.12-1.7-5.46-2.54-10.02-2.54H25.99z"
        />
        <path
          // className={classes.st3}
          className={path7}
          d="M72.61,372.96c0,3.27,1.13,5.95,3.39,8.06c2.29,2.1,5.22,3.16,8.77,3.16c4.87,0,8.61-1.82,11.22-5.47
     l7.78,4.29c-2.7,3.65-5.48,6.19-8.34,7.64c-2.89,1.48-6.5,2.21-10.84,2.21c-6.88,0-12.37-2.02-16.45-6.08
     c-4.08-4.05-6.13-9.47-6.13-16.26c0-7.1,2.25-13.04,6.74-17.82c4.46-4.74,10.1-7.12,16.92-7.12c6.6,0,11.8,2.14,15.6,6.41
     c3.87,4.3,5.8,10.07,5.8,17.3c0,0.76-0.05,1.98-0.14,3.68H72.61z M96.51,364.57c-1.1-6.85-4.89-10.27-11.36-10.27
     c-6.13,0-10.12,3.42-11.97,10.27H96.51z"
        />
        <path
          // className={classes.st4}
          className={path8}
          d="M138.42,346.74h27.32v-28.09h18.92v72.78h-18.92v-30.02h-27.32v30.02H119.5v-72.78h18.92V346.74z"
        />
        <path
          // className={classes.st4}
          className={path9}
          d="M196.34,366.24c0-3.67,0.74-7.1,2.22-10.28c1.48-3.19,3.54-5.95,6.18-8.3c2.64-2.35,5.77-4.2,9.41-5.55
     c3.64-1.35,7.61-2.03,11.92-2.03c4.25,0,8.19,0.66,11.82,1.98c3.63,1.32,6.79,3.15,9.46,5.5c2.67,2.35,4.74,5.15,6.23,8.4
     c1.48,3.25,2.22,6.84,2.22,10.76c0,3.93-0.76,7.52-2.27,10.76c-1.51,3.25-3.59,6.05-6.23,8.4c-2.64,2.35-5.81,4.17-9.51,5.45
     c-3.7,1.29-7.71,1.93-12.02,1.93c-4.25,0-8.17-0.64-11.78-1.93c-3.61-1.29-6.71-3.12-9.32-5.5c-2.61-2.38-4.65-5.23-6.13-8.54
     C197.07,373.98,196.34,370.3,196.34,366.24z M214.77,366.44c0,1.67,0.3,3.2,0.92,4.59c0.61,1.38,1.42,2.59,2.42,3.62
     c1,1.03,2.19,1.84,3.57,2.42c1.38,0.58,2.85,0.87,4.39,0.87s3.01-0.29,4.39-0.87c1.38-0.58,2.57-1.38,3.57-2.42
     c1-1.03,1.8-2.24,2.41-3.62c0.61-1.38,0.92-2.88,0.92-4.49c0-1.54-0.3-3.01-0.92-4.39c-0.61-1.38-1.42-2.59-2.41-3.62
     c-1-1.03-2.19-1.84-3.57-2.42c-1.39-0.58-2.85-0.87-4.39-0.87s-3.01,0.29-4.39,0.87c-1.38,0.58-2.57,1.39-3.57,2.42
     c-1,1.03-1.8,2.22-2.42,3.57C215.08,363.44,214.77,364.89,214.77,366.44z"
        />
        <path
          // className={classes.st4}
          className={path10}
          d="M283.31,341.92v27.9c0,6.11,2.96,9.17,8.88,9.17c5.92,0,8.88-3.06,8.88-9.17v-27.9h17.47v31.27
     c0,6.69-2.21,11.71-6.61,15.06c-4.41,3.35-10.99,5.02-19.74,5.02c-8.75,0-15.33-1.67-19.74-5.02c-4.41-3.35-6.61-8.37-6.61-15.06
     v-31.27H283.31z"
        />
        <path
          // className={classes.st4}
          className={path11}
          d="M363.24,354.66c-3.22-1.67-6.37-2.51-9.46-2.51c-1.61,0-2.91,0.32-3.91,0.97c-1,0.64-1.5,1.51-1.5,2.61
     c0,0.58,0.08,1.05,0.24,1.4c0.16,0.36,0.51,0.69,1.06,1.01c0.54,0.32,1.35,0.61,2.41,0.87s2.46,0.58,4.2,0.97
     c4.83,0.97,8.43,2.69,10.81,5.16c2.38,2.48,3.57,5.65,3.57,9.51c0,2.9-0.58,5.5-1.74,7.82c-1.16,2.32-2.77,4.26-4.83,5.84
     c-2.06,1.58-4.54,2.8-7.43,3.67c-2.9,0.87-6.08,1.3-9.56,1.3c-6.69,0-13.29-1.9-19.79-5.69l6.37-12.36
     c4.89,3.35,9.52,5.02,13.9,5.02c1.61,0,2.93-0.35,3.96-1.06c1.03-0.71,1.54-1.61,1.54-2.7c0-0.64-0.08-1.17-0.24-1.59
     c-0.16-0.42-0.5-0.8-1.01-1.16c-0.51-0.35-1.27-0.67-2.27-0.97c-1-0.29-2.3-0.59-3.91-0.92c-5.41-1.09-9.19-2.72-11.34-4.87
     c-2.16-2.16-3.23-5.13-3.23-8.93c0-2.77,0.51-5.26,1.54-7.48c1.03-2.22,2.51-4.1,4.44-5.65c1.93-1.54,4.26-2.74,7-3.57
     c2.73-0.84,5.77-1.26,9.12-1.26c5.47,0,10.78,1.06,15.93,3.19L363.24,354.66z"
        />
        <path
          // className={classes.st4}
          className={path12}
          d="M395.28,369.62c0,7.53,3.54,11.3,10.62,11.3c3.8,0,6.66-1.54,8.59-4.63h16.89
     c-3.41,11.33-11.94,16.99-25.58,16.99c-4.18,0-8.01-0.63-11.49-1.88c-3.47-1.25-6.45-3.04-8.93-5.36c-2.48-2.32-4.39-5.08-5.74-8.3
     c-1.35-3.22-2.03-6.82-2.03-10.81c0-4.12,0.64-7.83,1.93-11.15c1.29-3.31,3.12-6.13,5.5-8.45c2.38-2.32,5.26-4.1,8.64-5.36
     c3.38-1.26,7.19-1.88,11.44-1.88c4.18,0,7.95,0.63,11.3,1.88c3.35,1.25,6.18,3.07,8.49,5.45c2.32,2.38,4.08,5.29,5.31,8.73
     c1.22,3.44,1.84,7.32,1.84,11.63v1.83H395.28z M415.75,359.49c-0.58-2.45-1.77-4.41-3.57-5.89c-1.8-1.48-3.99-2.22-6.56-2.22
     c-2.7,0-4.91,0.71-6.61,2.12c-1.7,1.42-2.78,3.41-3.23,5.98H415.75z"
        />
        <path
          // className={classes.st4}
          className={path13}
          d="M442,341.92h17.47v8.11c1.87-2.96,4.15-5.23,6.86-6.8c2.7-1.58,5.86-2.36,9.46-2.36c0.45,0,0.95,0,1.5,0
     c0.54,0,1.17,0.06,1.88,0.19v16.7c-2.32-1.16-4.83-1.74-7.53-1.74c-4.05,0-7.1,1.21-9.12,3.62c-2.03,2.42-3.04,5.94-3.04,10.57
     v21.24H442V341.92z"
        />
      </g>
    </svg>
  );
};

export default SVG;
