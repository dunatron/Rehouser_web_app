import React from 'react';
import PropTypes from 'prop-types';
import SuperLogin from '@/Components/SuperLogin';
import PageHeader from '@/Components/PageHeader';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const LoginPage = () => {
  return (
    <>
      <PageHeader
        title="Login / Signup"
        metaData={{
          title: 'Login',
          content: `${COMPANY_NAME} platform login`,
        }}
      />
      <SuperLogin />
    </>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
