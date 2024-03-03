import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta
            name="naver-site-verification"
            content="6117b195ed77f0f26ea51a68d9a3b5d259b02fa2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
            integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
            crossOrigin="anonymous"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
          
            ChannelIO('boot', {
              "pluginKey": "f89e0394-5c7a-4479-b9cf-6f7697828b90"
            });
          `,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
