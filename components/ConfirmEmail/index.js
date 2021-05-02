import PropTypes from 'prop-types';
import SendConfrimEmailButton from '@/Components/MutationButtons/SendConfrimEmailButton';
import OpenSuperLoginButton from '@/Components/SuperLogin/OpenSuperLoginButton';
import { Typography } from '@material-ui/core';
import RehouserPaper from '@/Styles/RehouserPaper';
import { useRouter } from 'next/router';

const ConfirmEmail = ({ me, children, token, title }) => {
  const router = useRouter();

  const confirmEmailToken = token ? token : router.query.token;

  if (!me) {
    return (
      <RehouserPaper>
        <Typography variant="h5" gutterBottom color="textPrimary">
          To confirm your email you must first be logged in
        </Typography>
        <OpenSuperLoginButton />
      </RehouserPaper>
    );
  }
  if (!me.emailValidated)
    return (
      <RehouserPaper>
        <Typography variant="h6" gutterBottom color="textPrimary">
          {title
            ? title
            : 'Please confirm your email address. You will be limited on the platform until you do'}
        </Typography>
        <Typography variant="body2" gutterBottom>
          You recieved a confirmation email that has a token when you signed up.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Please copy the token in the email and paste it into the field below
          to confirm your email address
        </Typography>
        <Typography variant="body2" gutterBottom>
          If you need abother token there is a button below that will send you a
          new email and token
        </Typography>
        <SendConfrimEmailButton token={confirmEmailToken} />
      </RehouserPaper>
    );
  return children ? children : null;
};

ConfirmEmail.propTypes = {
  children: PropTypes.any,
  me: PropTypes.shape({
    emailValidated: PropTypes.any,
  }),
};

export default ConfirmEmail;
