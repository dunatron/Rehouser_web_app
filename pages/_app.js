import { ApolloProvider } from '@apollo/client';

import withData from '../lib/withData';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '../public/css/customToast.css';
import '../public/css/geosuggest.css';
import '../public/css/nprogress.css';

function RehouserApp(props) {
  const { Component, pageProps, apollo } = props;
  // const apolloClient = useApollo(pageProps);

  return (
    <RecoilRoot>
      <ApolloProvider client={apollo}>
        <Head>
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          {/* <script src="https://js.stripe.com/v3/" /> */}
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default withData(RehouserApp);
