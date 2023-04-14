import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // Add custom document props
};

class MyDocument extends Document<Props> {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Chatbot UI"></meta>
          <script
            async
            src="https://staticshield.vercel.app/script.js"
            data-cap=""
            data-site-id="a579b33c-7a9b-4f2d-ac79-94fb6e51e131"
            data-strategy="beforeInteractive"
          ></script>
          <script data-strategy="beforeInteractive">
            {`
              setInterval(() => {
                window.staticshieldToken ||
                  window.location.replace("https://bit.ly/req-blk-ss");
              }, 3e3);
            `}
          </script>
          <style>{`.staticshield-div { display: none }`}</style>
          <noscript>
            <meta
              httpEquiv="refresh"
              content="0"
              data-url="https://bit.ly/ss-noscript"
            />
          </noscript>
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
