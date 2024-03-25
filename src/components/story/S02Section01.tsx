import { SmartCitySvg } from '../icons';
import { NImage } from '../next/Image';

type TS02Section01Props = {};

const S02Section01 = ({}: TS02Section01Props) => {
  return (
    <section className="relative mx-auto -mb-[40px] flex w-full max-w-[1920px] flex-col">
      <NImage
        width={1920}
        height={0}
        src="/v1/section-6-top.png"
        alt="section-6-top"
        quality={50}
        priority
        className="-z-10 -mt-[33%] w-auto object-cover opacity-80 max-sm:h-[420px] lg:object-contain"
      />

      <div className="absolute bottom-20 left-0 z-10 mx-auto flex h-fit w-full max-w-[1280px] flex-col overflow-x-hidden pt-2">
        <div className="px-3 text-[1.5rem] font-[700] uppercase leading-none text-gray-300 md:text-[2.5rem] xl:px-12 xl:text-[3rem] 2xl:text-[3rem]">
          Câu chuyện 2
        </div>
        <div className="px-3 text-[2.4rem] font-[700] uppercase text-white md:text-[3.2rem] xl:px-12 xl:text-[3.5rem] 2xl:text-[4rem]">
          Đô thị tương lai
        </div>
        <div className="lg:-mt-[20px] xl:px-12">
          <SmartCitySvg className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default S02Section01;
