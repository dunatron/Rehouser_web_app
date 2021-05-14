import {
  CHAT_QUERY,
  MESSAGES_QUERY,
  MESSAGES_CONNECTION_QUERY,
} from '../graphql/queries/index';

import {
  MESSAGES_CONNECTION_ORDER_BY,
  MESSAGES_CONNECTION_FIRST,
  MESSAGES_CONNECTION_SKIP,
} from '../lib/const';

export const writeMessage = async (client, message, optimisticId) => {
  const isOptimisticMessage = optimisticId === message.id ? true : false;

  if (!client.query) {
    return;
  }

  // message connection variables
  const variables = {
    orderBy: MESSAGES_CONNECTION_ORDER_BY,
    first: MESSAGES_CONNECTION_FIRST,
    skip: MESSAGES_CONNECTION_SKIP,
    where: {
      chat: {
        id: message.chat.id,
      },
    },
  };

  // message connection messages
  const { data, loading, error } = await client.query({
    query: MESSAGES_CONNECTION_QUERY,
    variables: variables,
  });

  console.log('WHAT ARE THESE PRECIOUS => ', data);
  //   messagesConnection:
  // aggregate: {__typename: "AggregateMessage", count: 10}
  // edges: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // pageInfo: {__typename: "PageInfo", hasNextPage: true, startCursor: "ckoo3x5vk9zib0999j4rns7n9", endCursor: "ckoo3vcr1psze0a26yz68qfb1"}
  // __typename: "MessageConnection"

  // new message to write
  const pagedMesssage = {
    cursor: message.id,
    node: {
      ...message,
    },
    __typename: 'MessageEdge',
  };

  const updatedMessages = [pagedMesssage, ...data.messagesConnection.edges];

  // filter out optimistic message
  const filteredMessages = updatedMessages.filter((edge, idx) => {
    // if (edge.cursor === optimisticId && isOptimisticMessage) return;
    return edge;
  });

  console.log('FILTERED MESSAGES => ', filteredMessages);

  // // filter out optimistic message
  // const filteredMessages = data.messagesConnection.edges.filter((edge, idx) => {
  //   if (edge.cursor === optimisticId && isOptimisticMessage) return;
  //   return edge;
  // });

  // write the query to the cache
  client.writeQuery({
    query: MESSAGES_CONNECTION_QUERY,
    variables: variables,
    data: {
      messagesConnection: {
        aggregate: {
          __typename: 'AggregateMessage',
          count: data.messagesConnection.aggregate.count + 1,
        },
        pageInfo: {
          __typename: 'PageInfo',
          hasNextPage: true,
          startCursor: 'ckoo3x5vk9zib0999j4rns7n9',
          endCursor: 'ckoo3vcr1psze0a26yz68qfb1',
        },
        edges: [...filteredMessages],
        __typename: 'MessageConnection',
        // edges: [pagedMesssage, ...filteredMessages],
      },
    },
  });
};

export const writeChat = (client, chat) => {};
