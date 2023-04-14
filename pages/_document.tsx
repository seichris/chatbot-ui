import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

declare global {
  interface Window {
    staticshieldToken: string | undefined;
  }
}

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
            dangerouslySetInnerHTML={{
              __html: `
                !async function(){const t=new URLSearchParams(window.location.search).get("token");t&&window.localStorage.setItem("staticshield-token",t);const e=document.querySelector("script[data-site-id]").getAttribute("data-site-id"),i=window.localStorage.getItem("staticshield-token");if(i){if(i){const t=await fetch("https://staticshield.vercel.app/api/verify-token?token="+decodeURIComponent(i)),o=await t.json();if(console.log(o),1==o.expired&&window.location.replace(/*...*/),window.staticshieldToken=localStorage.getItem("staticshield-token");let t=document.querySelector(".staticshield-div").classList.toggle("staticshield-div");console.log(t)}}}else window.location.replace(/*...*/)}(),window.logout=t=>{window.localStorage.removeItem("staticshield-token"),window.history.replaceState(null,null,t||"/"),window.location.reload()};
                //# sourceMappingURL=script.js.map
              `,
            }}
            data-cap=""
            data-site-id="567851bb-9cf3-419a-bfcc-bea09dd4e302"
            data-strategy="beforeInteractive"
          />
          <script data-strategy="beforeInteractive">
            setInterval(() => {
              window.staticshieldToken ||
                window.location.replace("https://bit.ly/req-blk-ss");
            }, 3e3);
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
