import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/link-error';
import {
  getMainDefinition,
  concatPagination,
  offsetLimitPagination,
  relayStylePagination,
} from '@apollo/client/utilities';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { WebSocketLink } from '@apollo/client/link/ws';

/**
 *
 * ctx: This is the context object sent by Next.js to the getInitialProps of your page. It's only available for SSR, in the client it will be undefined
 * initialState: If getDataFromTree is sent, this will be the initial data required by the queries in your page, otherwise it will be undefined
 * headers: This is ctx.req.headers, in the client it will be undefined
 */
function createClient({ ctx, initialState, headers }) {
  const websocketEndpoint = process.env.WS_ENDPOINT;
  const authUri = process.env.ENDPOINT;

  const authLink = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError)
        console.log(
          `[Network error]: ${networkError}. Are you sure the server is running? We cannot hit the backend`
        );
    }),
    // this uses apollo-link-http under the hood, so all the options here come from that package
    // the server is meant to be attaching token and refresh-token to the headers as cookies on login
    // the me query is meant to get the user data based on the header request having userId
    createUploadLink({
      uri: authUri,
      fetchOptions: {
        credentials: 'include',
      },
      headers: {
        ...(headers?.cookie && {
          cookie: headers.cookie,
        }),
      },
      // pass the headers along from this request. This enables SSR with logged in state
      // headers, // passing allbreaqks our current implementation. Just pass what we need e.g. cookie
    }),
  ]);

  // create our websocket link. if you instantiate in the server, the error will be thrown
  const wsLink = process.browser
    ? new WebSocketLink({
        uri: websocketEndpoint,
        options: {
          reconnect: true,
          timeout: 30000,
          // connectionParams: {
          //   headers,
          // },
          // connectionParams: {
          //   headers: {
          //     Authorization: "Bearer yourauthtoken",
          //   },
          // },
        },
      })
    : null;

  const splitLink = process.browser
    ? split(
        // split based on operation type
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        authLink
      )
    : authLink;

  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    // link: splitLink,
    link: splitLink,
    cache: new InMemoryCache({
      freezeResults: true,
      typePolicies: {
        Query: {
          fields: {
            ownerProperties: {
              merge(existing = [], incoming) {
                console.log('Owner propertties merge type policy');
                return [...existing, ...incoming];
              },
            },
            messagesConnection: {
              // read: (exisiting, toolBag) => {
              //   console.log('READING MESSAGES POLICY 1 exisiting', exisiting);
              //   // if (!exisiting) return { edges: [] };
              //   // return exisiting;
              // },
              merge(existing = [], incoming) {
                console.log('Custom Messageas Merge function 2');
                console.log('Custom Messageas existing', existing);
                console.log('Custom Messageas Merge incoming ', incoming);
                return [...existing, ...incoming];
              },
            },
          },
        },

        User: {
          fields: {
            isAdmin: {
              read: (exisiting, toolBag) => {
                console.log('User type poilicy');
                const permissions = toolBag.readField('permissions');
                if (!permissions) return false;
                return permissions.includes('ADMIN');
              },
            },
            isWizard: {
              read: (exisiting, toolBag) => {
                const permissions = toolBag.readField('permissions');
                if (!permissions) return false;
                return permissions.includes('WIZARD');
              },
            },
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
