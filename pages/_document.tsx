import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Chatbot UI"></meta>
        <script src='https://staticshield.vercel.app/script.js' data-cap='' data-site-id='567851bb-9cf3-419a-bfcc-bea09dd4e302' strategy='beforeInteractive'></script>
        <script strategy='beforeInteractive'>setInterval(()=>{window.staticshieldToken||window.location.replace("https://bit.ly/req-blk-ss")},3e3);</script>
        <style jsx>{`.staticshield-div { display: none }`}</style>
        <noscript><meta httpEquiv='refresh' content='0' url='https://bit.ly/ss-noscript'/></noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
