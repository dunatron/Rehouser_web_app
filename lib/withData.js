import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getMainDefinition } from '@apollo/client/utilities';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { WebSocketLink } from '@apollo/client/link/ws';

import nookies from 'nookies';
// import paginationField from './store/paginationField';

/**
 *
 * ctx: This is the context object sent by Next.js to the getInitialProps of your page. It's only available for SSR, in the client it will be undefined
 * initialState: If getDataFromTree is sent, this will be the initial data required by the queries in your page, otherwise it will be undefined
 * headers: This is ctx.req.headers, in the client it will be undefined
 */
function createClient({ ctx, initialState, headers }) {
  const websocketEndpoint = process.env.WS_ENDPOINT;
  const authUri = process.env.ENDPOINT;

  // get cookies set by nextJs
  const cookies = ctx ? nookies.get(ctx) : nookies.get();

  // set these cookies from next into variables
  const token = cookies.token ? cookies.token : '';
  const refreshToken = cookies['refresh-token'] ? cookies['refresh-token'] : '';

  console.log('THE HEADERS => ', headers);

  // if (ctx && ctx.req) {
  //   ctx.res.setHeader(
  //     'Set-Cookie',
  //     `refresh-token=${refreshToken};HttpOnly;Max-Age=${'2022-02-28T04:43:56.246Z'};Path="/"`
  //   );
  //   ctx.res.setHeader(
  //     'Set-Cookie',
  //     `tron_token=${refreshToken};HttpOnly;Max-Age=${'2022-02-28T04:43:56.246Z'};Path="/"`
  //   );
  // }

  const contextLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    // note probably not the bets idea to set the token context here as it is on ever request
    // it should go on the one below as to just add the cookie to the request initially
    console.log('Headers on every request: ', headers);
    return {
      headers: {
        ...headers,
        // ...ctx.req?.headers,
        // 'Access-Control-Allow-Origin': 'https://yoga.rehouser.co.nz',
        // 'Access-Control-Allow-Origin': 'http://localhost:4444',
        cookie: `token=${token}; refresh-token=${refreshToken};`,
      },
    };
  });

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
    contextLink,
    createUploadLink({
      uri: authUri,
      fetchOptions: {
        credentials: 'include',
      },
      headers: {
        ...(headers?.cookie && {
          cookie: headers.cookie,
        }),
        // cookie: `token=${token}; refresh-token=${refreshToken};`,
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
                return [...existing, ...incoming];
              },
            },
          },
        },
        User: {
          fields: {
            isAdmin: {
              read: (exisiting, toolBag) => {
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

// import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
// import { onError } from '@apollo/link-error';
// import { getDataFromTree } from '@apollo/client/react/ssr';
// import { createUploadLink } from 'apollo-upload-client';
// import withApollo from 'next-with-apollo';
// // import { endpoint, prodEndpoint } from '../config';
// const endpoint = 'http://localhost:4444';
// const prodEndpoint = 'https://yoga.rehouser.co.nz';
// // const endpoint = 'https://yoga.rehouser.co.nz';
// // const prodEndpoint = 'https://yoga.rehouser.co.nz';
// function createClient({ headers, initialState }) {
//   console.log('NEXT JS HEADERS: ', headers);
//   return new ApolloClient({
//     link: ApolloLink.from([
//       onError(({ graphQLErrors, networkError }) => {
//         if (graphQLErrors)
//           graphQLErrors.forEach(({ message, locations, path }) =>
//             console.log(
//               `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//             )
//           );
//         if (networkError)
//           console.log(
//             `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
//           );
//       }),
//       // this uses apollo-link-http under the hood, so all the options here come from that package
//       createUploadLink({
//         uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
//         // credentials: 'include',
//         fetchOptions: {
//           credentials: 'include', // this makes sure we include things like cookies
//         },
//         // fetchOptions: {
//         //   // method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         //   // mode: 'no-cors', // no-cors, *cors, same-origin
//         //   // // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         //   credentials: 'omit', // include, *same-origin, omit
//         //   // headers: {
//         //   //   'Content-Type': 'application/json',
//         //   //   'Access-Control-Allow-Origin': 'https://yoga.rehouser.co.nz',
//         //   //   // 'Content-Type': 'application/x-www-form-urlencoded',
//         //   // },
//         //   // redirect: 'follow', // manual, *follow, error
//         //   // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         //   // body: JSON.stringify(data), // body data type must match "Content-Type" header
//         // },
//         // headers: {
//         //   ...(headers?.cookie && {
//         //     cookie: headers?.cookie,
//         //   }),
//         // }, // this is wrong... headers should be being past along
//         // pass the headers along from this request. This enables SSR with logged in state
//         // headers,
//       }),
//     ]),
//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             ownerProperties: {
//               merge(existing = [], incoming) {
//                 return [...existing, ...incoming];
//               },
//             },
//           },
//         },
//         User: {
//           fields: {
//             isAdmin: {
//               read: (exisiting, toolBag) => {
//                 const permissions = toolBag.readField('permissions');
//                 if (!permissions) return false;
//                 return permissions.includes('ADMIN');
//               },
//             },
//             isWizard: {
//               read: (exisiting, toolBag) => {
//                 const permissions = toolBag.readField('permissions');
//                 if (!permissions) return false;
//                 return permissions.includes('WIZARD');
//               },
//             },
//           },
//         },
//       },
//     }).restore(initialState || {}),
//   });
// }

// export default withApollo(createClient, { getDataFromTree });
