import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import ChatRoom from '@/Components/RehouserChat/ChatRoom';
import ActiveChat from '@/Components/RehouserChat/ActiveChat';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const SingleChatPage = ({ appData: { currentUser }, query: { id } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <PleaseSignIn
      currentUser={currentUser}
      message="Please sign in to view chat">
      <ActiveChat me={me} chat={{}} id={id} />
      {/* <ChatRoom me={me} chatId={id} /> */}
    </PleaseSignIn>
  );
};

SingleChatPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
  query: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default SingleChatPage;
