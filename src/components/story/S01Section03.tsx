import { NImage } from '../next/Image';

type TS01Section03Props = {};

const S01Section03 = ({}: TS01Section03Props) => {
  return (
    <section className="relative mx-auto mt-[88px] flex w-full max-w-[1920px] flex-col pt-[80px] text-gray-50 xl:min-h-[100dvh]">
      <NImage
        alt=""
        src={'/v2/story-01-05.jpeg'}
        fill
        quality={1}
        className="-z-10 object-cover opacity-50"
      />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      <div className="z-10 mx-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 pb-[44px] xl:px-12">
        <div className="mb-8 text-center text-[2rem] font-[600] uppercase">
          BỘ ĐIỀU KHIỂN TRUNG TÂM YOOLIFE AIOT GATEWAY
        </div>

        <div className="mt-0 max-w-full overflow-x-auto px-4 scrollbar-thin">
          <div className="relative mx-auto w-[860px] flex-shrink-0 lg:w-[960px] xl:w-[1100px]">
            <NImage
              width={1680}
              height={0}
              src="/v2/story-01-06.png"
              alt="section-7-bottom"
              quality={100}
              priority
              className="-z-10 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default S01Section03;
