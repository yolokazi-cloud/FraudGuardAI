// /pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="fgai" content="SemiColonWeb" />
        <meta name="description" content="FraudGuardAI Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&family=Istok+Web:wght@400;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Stylesheets */}
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/css/font-icons.css" />
        <link rel="stylesheet" href="/css/components/ion.rangeslider.css" />
        <link rel="stylesheet" href="/demos/hosting/hosting.css" />
        <link rel="stylesheet" href="/css/custom.css" />
      </Head>
      <body className="stretched">
        <Main />
        <NextScript />
        {/* Scripts */}
        <script src="/js/jquery.js"></script>
        <script src="/js/functions.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>
  {/*      <script>!SEMICOLON.Mobile.any() && skrollr.init({ forceHeight: false });</script>*/}
        <script src="/js/jquery.hotspot.js"></script>
        <script src="/js/components/rangeslider.min.js"></script>
      </body>
    </Html>
  );
}
