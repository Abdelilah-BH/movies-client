import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head />
        <body style={{ background: "#112a45" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}