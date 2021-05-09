import PropTypes from 'prop-types';
import React from 'react';
import PleaseSignIn from '@/Components/PleaseSignIn';
import Signature from '@/Components/Signature/index';
import { Typography } from '@material-ui/core';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const AccountPage = ({ appData: { currentUser } }) => {
  return (
    <PleaseSignIn
      currentUser={currentUser}
      alert={
        <div>
          <Typography gutterBottom color="inherit">
            <strong>Please Sign In</strong>
          </Typography>
          <Typography gutterBottom color="inherit">
            You must be signed in to manage your {COMPANY_NAME} signature
          </Typography>
        </div>
      }>
      <Signature />
    </PleaseSignIn>
  );
};

AccountPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default AccountPage;
