import { Montserrat } from 'next/font/google';
import Footer from 'src/components/layout01/Footer';
import SEO from 'src/components/seo/SEO';
import Header from 'src/components/story/Header';
import S05Section01 from 'src/components/story/S05Section01';
import S05Section02 from 'src/components/story/S05Section02';

const _Montserrat = Montserrat({ subsets: ['latin'] });

const Page = () => {
  return (
    <div
      className={`${_Montserrat.className} relative mx-auto min-h-[100dvh] max-w-[1920px] antialiased`}
    >
      <SEO
        title="Yoolife | Xã hội tương lai"
        description="Yoolife AIoT Platform"
      />

      <Header />

      <S05Section01 />

      <S05Section02 />

      <Footer />
    </div>
  );
};

export default Page;
