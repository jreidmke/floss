import { AppProps } from 'next/app';

import '../styles/main.css';

// eslint-disable-next-line import/order
import { useEffect } from 'react';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-NSM8BT4',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
