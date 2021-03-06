import { createGlobalStyle } from 'styled-components';

<style type="text/css"></style>;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  fieldset{
    padding: 0;
    margin-inline-start: unset;
    margin-inline-end: unset;
    padding-block-start: unset;
    padding-inline-start: unset;
    padding-inline-end: unset;
    padding-block-end: unset;
    min-inline-size: unset;
    border: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: ${p => p.theme.typography.fontSize}px;
    line-height: 2;
    font-family: ${p => p.theme.typography.fontFamily};
  }
  a {
    text-decoration: none;
    color: ${p => p.theme.palette.common.black};
  }
  .highlight {
    color: black;
    background-color: ${p => p.theme.palette.nProgress.main};
  }
  button {  font-family: ${p => p.theme.typography.fontFamily}; }
  #nprogress {
    background-color: azure;
    width: 100%;
    position: fixed;
    top: 0;
    .bar {
      height:5px;
      background: ${p => p.theme.palette.nProgress.main};
    }
    .spinner {
      position: absolute;
      left: 50%;
      .spinner-icon {
        border-top-color: ${p => p.theme.palette.nProgress.main};
        border-left-color: ${p => p.theme.palette.nProgress.main};
      }
    }
    .peg {
       box-shadow: 0 0 10px ${p =>
         p.theme.palette.nProgress.main}, 0 0 5px ${p =>
  p.theme.palette.nProgress.main};
    }
  }
  .geosuggest__suggests {
    z-index: 1000 !important;
  }

  .Toastify__toast--info {
    background: ${p => p.theme.palette.primary.light};
    color: ${p => p.theme.palette.primary.contrastText};
  }
  .Toastify__toast--success {
    background: #07bc0c;
    color: #fff};
  }
  .Toastify__toast--warning {
    background: #f1c40f;
  }
  .Toastify__toast--error {
    background: #e74c3c;
  }
  /* Scrollbar style */
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 6px;
    /* display: none;  */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${p => p.theme.palette.background.paper};
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${p =>
      p.theme.palette.type === 'dark'
        ? p.theme.palette.text.primary
        : p.theme.palette.text.primary};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${p =>
      p.theme.palette.type === 'dark'
        ? p.theme.palette.text.primary
        : p.theme.palette.text.primary};
  }

  .geosuggest {
    font-size: 18px;
    font-size: 1rem;
    position: relative;
    width: 100%;
    margin: 0;
    margin-bottom: ${p => p.theme.spacing(1)}px;
    text-align: left;
  }
  .geosuggest__input {
    width: 100%;
    // border: 2px solid ${p => p.theme.palette.background.paper};
    background: ${p => p.theme.palette.background.paper};
    box-shadow: 0 0 1px ${p => p.theme.palette.primary.main};
    color: ${p => p.theme.palette.text.primary};
    padding: ${p => p.theme.spacing(2)}px;
    -webkit-transition: border 0.2s, box-shadow 0.2s;
    transition: border 0.2s, box-shadow 0.2s;
    /* font-family: 'ODBold'; */
    font-family: ${p => p.theme.typography.h1.fontFamily};
  }
  .geosuggest__input:focus {
    border-color: ${p => p.theme.palette.primary.main};
    outline: none;
  }
  .geosuggest__suggests {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 25em;
    padding: 0;
    margin-top: -1px;
    background: ${p => p.theme.palette.background.paper};
    color: ${p => p.theme.palette.text.primary};
    border: ${p => `2px solid ${p.theme.palette.primary.main}`};
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    z-index: 9000;
    -webkit-transition: max-height 0.2s, border 0.2s;
    transition: max-height 0.2s, border 0.2s;
  }
  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
  }

  /**
 * A geosuggest item
 */
  .geosuggest__item {
    font-size: 18px;
    font-size: 1rem;
    padding: 0;
    cursor: pointer;
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    /* background: #f5f5f5; */
    background: ${p => p.theme.palette.primary.main};
    color: ${p => p.theme.palette.primary.contrastText};
  }
  .geosuggest__item--active {
    background: #267dc0;
    color: #fff;
  }
  .geosuggest__item--active:hover,
  .geosuggest__item--active:focus {
    background: #ccc;
  }
  .geosuggest__item__matched-text {
    font-weight: bold;
  }


  .rehouser-fade-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .rehouser-fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .rehouser-fade-exit {
    opacity: 1;
  }
  .rehouser-fade-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  @keyframes pulse-metatrons-cube-circle {
    0%   { fill: ${p => p.theme.palette.primary.main} }
    17%  { fill: ${p => p.theme.palette.primary.dark} }
    33%  { fill: ${p => p.theme.palette.primary.main} }
    50%  { fill: ${p => p.theme.palette.primary.light} }
    67%  { fill: ${p => p.theme.palette.primary.main} }
    83%  { fill: ${p => p.theme.palette.primary.dark} }
    100% { fill: ${p => p.theme.palette.primary.main} }
  }
`;

export default GlobalStyle;
