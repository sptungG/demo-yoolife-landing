import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import 'src/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
