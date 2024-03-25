import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="en"
      className="scrollbar-thin scrollbar-track-bg scrollbar-thumb-green2 scrollbar-thumb-rounded-full"
    >
      <Head />
      <body className="bg-[#1d1d1d]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
