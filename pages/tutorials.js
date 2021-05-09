import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import { ActivityManager, Activity } from '@/Components/ActivityManager';
import PageHeader from '@/Components//PageHeader';
import { Typography } from '@material-ui/core';

import FileUploader from '@/Components/FileUploader';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import NoSSRUploadWidget from '@/Components/UploadWidget';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const TutorialsPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <Fragment>
      <PageHeader
        title={`${COMPANY_NAME} Tutorials`}
        intro=""
        metaData={{
          title: `${COMPANY_NAME} Tutorials`,
          content: '',
        }}
      />
      <NoSSRUploadWidget />
    </Fragment>
  );
};

TutorialsPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object,
  }),
};

export default TutorialsPage;
