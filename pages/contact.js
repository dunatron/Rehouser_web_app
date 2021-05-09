import PropTypes from 'prop-types';
import PageHeader from '@/Components/PageHeader';
import ContactForm from '@/Components/Contact/ContactForm';
import { useQuery } from '@apollo/client';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const ContactPage = props => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) return <div>AN Error</div>;

  return (
    <>
      <PageHeader
        title="Contact"
        id="contact-page"
        metaData={{
          title: `Contact ${COMPANY_NAME} Support`,
          content: `Contact the ${COMPANY_NAME} support team who will be in touch with you promptly`,
        }}
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
