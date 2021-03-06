import PropTypes from 'prop-types';
import Alert from '@/Components/Alert';
import { useMutation } from '@apollo/client';
import { LANDLORD_TERMS_OF_ENGAGEMENT_FORM_CONF } from '@/Lib/configs/landlordTermsOfEngagementForm';

import { UPDATE_USER_MUTATION } from '@/Gql/mutations/index';
import FormCreator from '@/Components/Forms/FormCreator';
import TermsOfEngagement from '@/Components/Terms/TermsOfEngagement';
import { Typography } from '@material-ui/core';
import ChangeRouteButton from '@/Components/Routes/ChangeRouteButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import TextPdfGeneratorCombo from '@/Components/Pdfs/TextPdfGeneratorCombo';
import termsOfEngagementPdfConf from '@/Lib/configs/pdfs/termsOfEngagement';

import PleaseSignIn from '@/Components/PleaseSignIn';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

const AcceptTermsOfEngagementForm = ({ me }) => {
  const handleCompleted = data => {
    window.scrollTo(0, 0);
  };

  const [updateUser, { loading, error, data }] = useMutation(
    UPDATE_USER_MUTATION,
    {
      onCompleted: handleCompleted,
    }
  );

  // if (me === null)
  //   return (
  //     <Typography>Please Signin to accept the terms of engagement</Typography>
  //   );

  const accepted = me?.acceptedTermsOfEngagement
    ? me.acceptedTermsOfEngagement
    : false;

  return (
    <div>
      {accepted && (
        <>
          <Typography>
            You have accepted the Terms of engagement! You can now add property
            to the platform
          </Typography>
          <ChangeRouteButton
            route="/landlord/properties/add"
            title="Add Property"
            color="primary"
            variant="contained"
            size="large"
            btnProps={{
              startIcon: <CloudUploadIcon />,
            }}
          />
          <TextPdfGeneratorCombo
            config={termsOfEngagementPdfConf}
            docConf={{
              title: 'Terms of Engagement',
              author: 'Dunatron',
              subject: `${COMPANY_NAME} Terms of Engagement for Landlords`,
              keywords: 'Terms of engagement, security, files, pdf',
              creator: 'Heath Dunlop',
              producer: 'Heath Dunlop',
            }}
          />
        </>
      )}
      {!accepted && (
        <>
          <TextPdfGeneratorCombo
            config={termsOfEngagementPdfConf}
            docConf={{
              title: 'Terms of Engagement',
              author: 'Dunatron',
              subject: `${COMPANY_NAME} Terms of Engagement for Landlords`,
              keywords: 'Terms of engagement, security, files, pdf',
              creator: 'Heath Dunlop',
              producer: 'Heath Dunlop',
            }}
          />
          <br />
          <Alert severity="info">
            <Typography variant="body1" gutterBottom>
              You have not accepted the Landlord Terms of engagement and
              therefore you cannot add property to the platform.
            </Typography>
            <Typography variant="body1">
              Once you have completed the below form you will be able to add
              Property to the platform
            </Typography>
          </Alert>
          <PleaseSignIn message="You must be signed in to accept the terms of engagement">
            <FormCreator
              folder={`users/${me?.id}`}
              title="Terms of engagement form"
              data={{
                ...me,
              }}
              isNew={true}
              error={error}
              posting={loading}
              createText="Submit terms of engagement"
              config={LANDLORD_TERMS_OF_ENGAGEMENT_FORM_CONF}
              onSubmit={data => {
                console.log(
                  'data submited for LL Terms of engagement => ',
                  data
                );

                updateUser({
                  variables: {
                    where: {
                      id: me?.id,
                    },
                    data: {
                      ...data,
                      bankDetails: data?.bankDetails
                        ? {
                            create: {
                              ...data?.bankDetails,
                            },
                          }
                        : {},
                    },
                  },
                });
              }}
            />
          </PleaseSignIn>
        </>
      )}
    </div>
  );
};

AcceptTermsOfEngagementForm.propTypes = {
  me: PropTypes.shape({
    acceptedTermsOfEngagement: PropTypes.any,
    id: PropTypes.any,
  }).isRequired,
};

export default AcceptTermsOfEngagementForm;
