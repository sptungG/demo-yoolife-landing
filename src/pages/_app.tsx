import type { AppProps } from 'next/app';

import 'mac-scrollbar/dist/mac-scrollbar.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import PageLoading from 'src/components/shared/PageLoading';
import 'src/styles/globals.css';

const Providers = dynamic(() => import('src/components/providers/providers'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Suspense>
  );
}
