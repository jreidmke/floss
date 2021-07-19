/* eslint-disable react/no-unescaped-entities */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-531B9RH73H" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-531B9RH73H');
              `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
