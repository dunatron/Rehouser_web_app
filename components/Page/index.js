import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StateProvider } from '@/Store/index';
import MaterialPage from './MaterialPage';

import CustomToastContainer from '@/Containers/CustomToastContainer';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Meta from '../Meta/index';

// Admin Area Addisions
import NoSSRGeneralSubs from '@/Containers/NoSSRGeneralSubs';
import NoSSRAdminAlertsSub from '@/Containers/NoSSRAdminAlertsSub';

import GlobalStyle from './GlobalStyle';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import WithUser from '@/Components/WithUser';

import Router from 'next/router';
import NProgress from 'nprogress';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useRecoilState } from 'recoil';
import { themeState } from '@/Recoil/themeState';
import { createMuiTheme } from '@material-ui/core/styles';
import { NoSsr } from '@material-ui/core';
import useServiceWorker from '@/Lib/hooks/useServiceWorker';
import useDisableDrop from '@/Lib/hooks/useDisableDrop';
import useDisableDragover from '@/Lib/hooks/useDisableDragover';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// https://stripe.com/docs/stripe-js/react
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

/**
 * Do do this =>https://spectrum.chat/next-js/general/how-do-i-setup-a-global-toast-notification-system-using-next-js-i-am-using-next-alongside-apollo-client-and-graphql~211bf34c-56c2-4fee-bb04-c64f73a0cdfd
 */
const Page = props => {
  useServiceWorker();
  useDisableDrop();
  useDisableDragover();

  const [themeObj, setThemeObj] = useRecoilState(themeState);

  const theme = createMuiTheme({
    ...themeObj,
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Meta />
      <GlobalStyle theme={theme} />
      <CustomToastContainer />
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <StateProvider>
            {/* <Elements stripe={stripe}> */}
            {/* TESTING NOT LOADING THE SCRIPT IN HERE AND JUST USING THE PACKAGE... */}
            <Elements stripe={stripePromise}>
              <WithUser>
                <MaterialPage children={props.children} {...props} />
                {/* Admin Alerts straight up break general subs. general subs should be copied */}
                {/* <NoSSRAdminAlertsSub /> */}
                <NoSSRGeneralSubs />
              </WithUser>
            </Elements>
          </StateProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Page;
