import type { AppProps } from 'next/app';
import 'simplebar-react/dist/simplebar.min.css';
import 'src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
