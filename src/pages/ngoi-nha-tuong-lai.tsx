import { Montserrat } from 'next/font/google';
import Footer from 'src/components/layout01/Footer';
import SEO from 'src/components/seo/SEO';
import Header from 'src/components/story/Header';
import S01Section01 from 'src/components/story/S01Section01';
import S01Section02 from 'src/components/story/S01Section02';
import S01Section03 from 'src/components/story/S01Section03';
import S01Section04 from 'src/components/story/S01Section04';

const _Montserrat = Montserrat({ subsets: ['latin'] });

const Page = () => {
  return (
    <div
      className={`${_Montserrat.className} relative mx-auto min-h-[100dvh] max-w-[1920px] antialiased`}
    >
      <SEO
        title="Yoolife | Ngôi nhà tương lai"
        description="Yoolife AIoT Platform"
      />

      <Header />

      <S01Section01 />

      <S01Section02 />

      <S01Section03 />

      <S01Section04 />

      <Footer />
    </div>
  );
};

export default Page;
