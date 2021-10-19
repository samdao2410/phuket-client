import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        {/* <!-- Global site tag (gtag.js) - Facebook Analytics --> */}
        {/* <script id="gorgias-chat-widget-install" src="/libs/gorgias.js"></script> */}
        <body>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
