import { Montserrat } from 'next/font/google';
import { useId } from 'react';
import SimpleBar from 'simplebar-react';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import Section1 from 'src/components/layout/Section1';
import Section2 from 'src/components/layout/Section2';
import Section3 from 'src/components/layout/Section3';
import Section4 from 'src/components/layout/Section4';
import Section5 from 'src/components/layout/Section5';
import Section6 from 'src/components/layout/Section6';
import Section7 from 'src/components/layout/Section7';
import Section8 from 'src/components/layout/Section8';
import SEO from 'src/components/seo/SEO';
const _Montserrat = Montserrat({ subsets: ['latin'] });

function Page() {
  const uid = useId();

  return (
    <SimpleBar
      className={`${_Montserrat.className} relative mx-auto h-[100dvh] max-w-[1920px] overflow-x-hidden`}
    >
      <SEO title="Yoolife" description="Yoolife AIoT Platform" />

      <Header />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />

      <Section6 />

      <Section7 />

      <Section8 />

      <Footer />
    </SimpleBar>
  );
}

export default Page;
