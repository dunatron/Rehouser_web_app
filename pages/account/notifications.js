import PropTypes from 'prop-types';
import React from 'react';
import PleaseSignIn from '@/Components/PleaseSignIn';
import Account from '@/Components/Account/index';
import { Typography } from '@material-ui/core';
import PageHeader from '@/Components/PageHeader';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

import NoSSRNotifications from '@/Components/Notifications/index';

const NotificationsPage = ({ appData: { currentUser } }) => {
  return (
    <>
      <PageHeader
        title="Notifications"
        intro="Here you can set the app notifications so that you can be alerted when something on the system happens that you have an interest in"
        metaData={{
          title: 'Notifications',
          content: `${COMPANY_NAME} user notification settings`,
        }}
      />
      <PleaseSignIn
        currentUser={currentUser}
        alert={
          <div>
            <Typography gutterBottom color="inherit">
              <strong>Please Sign In</strong>
            </Typography>
            <Typography gutterBottom color="inherit">
              You must be signed in to manage your notification settings
            </Typography>
          </div>
        }>
        <NoSSRNotifications />
      </PleaseSignIn>
    </>
  );
};

NotificationsPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default NotificationsPage;
