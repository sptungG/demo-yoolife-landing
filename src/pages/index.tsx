import { Montserrat } from 'next/font/google';
import { useId } from 'react';
import Footer from 'src/components/layout01/Footer';
import Header from 'src/components/layout01/Header';
import Section01 from 'src/components/layout01/Section01';
import Section02 from 'src/components/layout01/Section02';
import Section03 from 'src/components/layout01/Section03';
import Section04 from 'src/components/layout01/Section04';
import Section05 from 'src/components/layout01/Section05';
import SEO from 'src/components/seo/SEO';
const _Montserrat = Montserrat({ subsets: ['latin'] });

function Page() {
  const uid = useId();

  return (
    <div
      className={`${_Montserrat.className} relative mx-auto min-h-[100dvh] max-w-[1920px] antialiased`}
    >
      <SEO title="Yoolife" description="Yoolife AIoT Platform" />

      <Header />

      <Section01 />

      <Section02 />

      <Section03 />

      <Section04 />

      <Section05 />

      <Footer />
    </div>
  );
}

export default Page;
