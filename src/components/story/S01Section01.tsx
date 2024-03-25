import { NImage } from '../next/Image';

type TS01Section01Props = {};

const S01Section01 = ({}: TS01Section01Props) => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col bg-grid-gray-500/[0.5] ">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      <div className="z-10 mx-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden pt-2">
        <div className="px-3 text-[2.4rem] font-[700] uppercase text-green1 md:text-[3.2rem] xl:px-12 xl:text-[3.5rem] 2xl:text-[4rem]">
          Câu chuyện 1
        </div>
        <div className="px-0 xl:px-9">
          <NImage
            height={160}
            width={1180}
            alt="HOMEIOT"
            src={'/v2/story-01-homeiot.png'}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="logo-text-gradient-green px-3 text-right text-[2.4rem] font-[700] uppercase text-green4 md:text-[3.2rem] xl:px-12 xl:text-[3.5rem] 2xl:text-[4rem]">
          NGÔI NHÀ TƯƠNG LAI
        </div>
      </div>
    </section>
  );
};

export default S01Section01;
