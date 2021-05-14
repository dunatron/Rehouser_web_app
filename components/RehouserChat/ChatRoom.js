import PropTypes from 'prop-types';
import React from 'react';
import { useCallback, useEffect } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import styled from 'styled-components';
import Error from '@/Components/ErrorMessage';
import Loader from '@/Components/Loader';
import { writeMessage } from '../../services/cache.service';
import { CHAT_QUERY, MESSAGES_CONNECTION_QUERY } from '@/Gql/queries/index';
import { CREATE_MESSAGE_MUTATION } from '@/Gql/mutations/index';
import { uuid } from 'uuidv4';
import {
  MESSAGES_CONNECTION_ORDER_BY,
  MESSAGES_CONNECTION_FIRST,
  MESSAGES_CONNECTION_SKIP,
} from '@/Lib/const';

import RChat from '@/Components/RChat';

const ChatRoomScreen = ({ me, chat, chatId }) => {
  const client = useApolloClient();

  const { data, loading, error, fetchMore, refetch } = useQuery(
    MESSAGES_CONNECTION_QUERY,
    {
      fetchPolicy: 'network-only',
      variables: {
        orderBy: MESSAGES_CONNECTION_ORDER_BY,
        first: MESSAGES_CONNECTION_FIRST,
        skip: MESSAGES_CONNECTION_SKIP,
        where: {
          chat: {
            id: chatId,
          },
        },
      },
    }
  );

  //   messagesConnection:
  // aggregate:
  // count: 5
  // __typename: "AggregateMessage"
  // __proto__: Object
  // edges: Array(5)
  // 0: {__typename: "MessageEdge", cursor: "ckoo0x5xapqxv0a26gl14prbo", node: {…}}
  // 1: {__typename: "MessageEdge", cursor: "ckoo0x39c9uts09998yfn4hld", node: {…}}
  // 2: {__typename: "MessageEdge", cursor: "ckoo0v1439uqg0999okz83d91", node: {…}}
  // 3: {__typename: "MessageEdge", cursor: "ckoo0s8vkpqtt0a267rpxv8of", node: {…}}
  // 4: {__typename: "MessageEdge", cursor: "ckonzmyqt9sti0999oo0m987d", node: {…}}
  // length: 5
  // __proto__: Array(0)
  // pageInfo:
  // endCursor: "ckonzmyqt9sti0999oo0m987d"
  // hasNextPage: true
  // startCursor: "ckoo0x5xapqxv0a26gl14prbo"
  // __typename: "PageInfo"
  // __proto__: Object
  // __typename: "MessageConnection"

  const handleFetchMore = () => {
    if (!data.messagesConnection) return null;
    fetchMore({
      variables: {
        query: MESSAGES_CONNECTION_QUERY,
        cursor: data.messagesConnection.pageInfo.endCursor,
        skip: data.messagesConnection.edges.length,
      },
      // Query.messagesConnection TpDo: create merge function
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.messagesConnection.edges;
        const pageInfo = fetchMoreResult.messagesConnection.pageInfo;
        // I got bricks now watch me build it, like bob the builder
        // with so many bricks I could rebuild Tronia
        console.log('Previous result => ', prevResult);
        console.log('Previous result => ', prevResult);
        const newCaheObject = newEdges.length
          ? {
              messagesConnection: {
                aggregate: {
                  __typename: 'AggregateMessage',
                  count: parseInt(
                    prevResult.messagesConnection.aggregate.count +
                      newEdges.length
                  ),
                  // count: newEdges.length + ,
                },
                edges: [...prevResult.messagesConnection.edges, ...newEdges],
                pageInfo,
                // pageInfo: {
                //   endCursor: 'ckonzmyqt9sti0999oo0m987d',
                //   hasNextPage: true,
                //   startCursor: 'ckoo0x5xapqxv0a26gl14prbo',
                //   __typename: 'PageInfo',
                // },
                __typename: 'MessageConnection',
              },
            }
          : prevResult;

        console.log('The NEW CACHE OBJECT +> ', newCaheObject);

        return newCaheObject;
      },
    });
  };

  const handleOnScroll = () => {};
  const [createMessage, sendMessageProps] = useMutation(
    CREATE_MESSAGE_MUTATION
  );

  useEffect(() => {}, [chat, chatId, client, data]);

  const onSendMessage = useCallback(
    content => {
      if (!chat) return null;
      if (!data) return null;
      if (!data.messagesConnection) return null;
      const cacheMessageId = `temp-id-${uuid()}`;
      createMessage({
        variables: {
          data: {
            content: content,
            isMine: true,
            lastMessageRel: {
              connect: {
                id: chatId,
              },
            },
            chat: {
              connect: {
                id: chatId,
              },
            },
            sender: {
              connect: {
                id: me.id,
              },
            },
          },
        },
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   createMessage: {
        //     id: cacheMessageId,
        //     chat: chat,
        //     __typename: 'Message',
        //     content: content,
        //     // createdAt: '2020-12-01T03:20:45.346Z',
        //     isMine: true,
        //     sender: {
        //       id: me.id,
        //       firstName: me.firstName,
        //       lastName: me.lastName,
        //       __typename: 'User',
        //     },
        //   },
        // },
        update: (proxy, { data }) => {
          if (data && data.createMessage) {
            writeMessage(client, data.createMessage, cacheMessageId);
          }
        },
      });
    },
    [chat, chatId, client, data]
  );

  if (!chat) return null;
  if (loading) return 'Loading';
  if (error) return <Error error={error} />;
  const { messagesConnection } = data;
  console.log('Messages connection => ', messagesConnection);
  const mappedMessages = messagesConnection.edges.map(edge => edge.node);

  return (
    <RChat
      messages={mappedMessages}
      me={me}
      onSendMessage={onSendMessage}
      chat={chat}
      handleFetchMore={handleFetchMore}
    />
  );
};

ChatRoomScreen.propTypes = {
  chat: PropTypes.any,
  chatId: PropTypes.any,
  me: PropTypes.shape({
    id: PropTypes.any,
  }).isRequired,
};

const ChatRoomScreenConnection = props => {
  const { chatId } = props;
  const { data, loading, error } = useQuery(CHAT_QUERY, {
    variables: {
      where: {
        id: chatId,
      },
    },
  });
  if (loading) return <Loader loading={loading} text="Initializing chat" />;
  if (error) return <Error error={error} />;

  if (!data) return <div>Couldnt find chat</div>;
  // ToDo create a pagination provider for this
  return <ChatRoomScreen {...props} chat={data.chat} />;
};

ChatRoomScreenConnection.propTypes = {
  chatId: PropTypes.any,
};

export default ChatRoomScreenConnection;
