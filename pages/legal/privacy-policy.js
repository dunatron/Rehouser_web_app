import PropTypes from 'prop-types';

import PageHeader from '@/Components/PageHeader';
import TextPdfGeneratorCombo from '@/Components/Pdfs/TextPdfGeneratorCombo';
import privacyPolicyPdfConf from '@/Lib/configs/pdfs/privacyPolicy';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const PrivacyPolicyPage = ({ appData: { currentUser } }) => {
  return (
    <>
      <PageHeader
        title={`${COMPANY_NAME} Privacy Policy`}
        intro="Our Privacy Policy to our users"
        hidden={true}
        metaData={{
          title: `${COMPANY_NAME} Privacy Policy`,
          content: 'Our Privacy Policy to our users',
        }}
      />
      {/* <SecurityStatementPdf /> */}
      <TextPdfGeneratorCombo
        config={privacyPolicyPdfConf}
        docConf={{
          title: `${COMPANY_NAME} Privacy Policy`,
          author: 'Dunatron',
          subject: `${COMPANY_LEGAL_NAME} privacy policy to our users`,
          keywords: 'Privacy Policy, security, files, pdf',
          creator: 'Heath Dunlop',
          producer: 'Heath Dunlop',
        }}
      />
    </>
  );
};

PrivacyPolicyPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object,
  }),
};

export default PrivacyPolicyPage;
