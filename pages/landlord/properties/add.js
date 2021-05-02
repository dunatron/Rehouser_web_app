import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateProperty from '@/Components/CreateProperty/index';
import PleaseSignIn from '@/Components/PleaseSignIn';
import ConfirmEmail from '@/Components/ConfirmEmail';
import { is } from 'ramda';
import PageHeader from '@/Components/PageHeader';
import { Box, Typography } from '@material-ui/core';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const AddPropertyPage = ({ appData: { currentUser } }) => {
  const pleaseSignInMessage =
    'You must be signed in to add properties to the market';

  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Add Property"
        intro="This is where you can add property to the platform. we estimate that you will need 15-20 minutes to complete the form provided you have the information on hand"
        children={[
          <Typography gutterBottom>
            Some of the key files you will need include the following
          </Typography>,
          <Typography component="ul" gutterBottom>
            <Typography component="li">Proof of Ownership</Typography>
            <Typography component="li">Insulation statement</Typography>
            <Typography component="li">Certificate of acceptance</Typography>
            <Typography component="li">Insurance policy</Typography>
          </Typography>,
        ]}
        metaData={{
          title: 'add a property to the platform',
          content: 'Add a property to the platform',
        }}
      />
      <PleaseSignIn
        currentUser={currentUser}
        message={pleaseSignInMessage}
        alert={
          <Typography variant="body1" gutterBottom color="inherit">
            <strong>{pleaseSignInMessage}</strong>
          </Typography>
        }>
        <ConfirmEmail
          me={me}
          title="You must confrim your email address before adding property">
          <CreateProperty me={me} />
        </ConfirmEmail>
      </PleaseSignIn>
    </>
  );
};

AddPropertyPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default AddPropertyPage;
