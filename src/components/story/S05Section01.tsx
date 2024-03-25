import { NImage } from '../next/Image';

type TS05Section01Props = {};

const S05Section01 = ({}: TS05Section01Props) => {
  return (
    <section className="relative mx-auto -mt-[64px] flex w-full max-w-[1920px] flex-col lg:-mt-[88px]">
      <NImage
        width={1920}
        height={0}
        src="/v2/story-05-01.png"
        alt="section-6-top"
        quality={50}
        priority
        className="-z-10 w-auto object-cover opacity-80 max-sm:h-[320px] lg:object-contain"
      />
      <div className="absolute inset-0 z-10 flex flex-col pb-6 ">
        <div className="mx-auto mt-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden rounded-lg pb-2 max-lg:text-center xl:pb-10 xl:backdrop-blur-sm">
          <div className="px-3 text-[1.6rem] font-[700] uppercase text-white md:text-[1.8rem] xl:px-12 xl:text-[2.4rem] 2xl:text-[3rem]">
            Câu chuyện 5
          </div>
          <div className="bg-gradient-to-r from-[#F6D365] via-orange-400 to-[#FDA085] bg-clip-text px-3 text-[2.4rem] font-[700] uppercase text-transparent md:text-[3.2rem] xl:px-12 xl:text-[3.5rem] 2xl:text-[5rem]">
            Xã hội tương lai
          </div>
        </div>
      </div>
    </section>
  );
};

export default S05Section01;
