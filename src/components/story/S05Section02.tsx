import { NImage } from '../next/Image';

type TS05Section02Props = {};

const S05Section02 = ({}: TS05Section02Props) => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col pt-[40px] text-gray-50 xl:min-h-[100dvh]">
      <NImage
        alt=""
        src={'/v2/story-05-02.png'}
        fill
        quality={1}
        className="-z-10 object-cover opacity-50"
      />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      <div className="z-10 mx-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 pb-[44px] xl:px-12">
        <div className="mb-6 mt-0 max-w-full overflow-x-auto px-4 scrollbar-thin">
          <div className="relative mx-auto w-[760px] flex-shrink-0 lg:w-[960px] xl:w-[1000px]">
            <NImage
              width={1680}
              height={0}
              src="/v2/story-05-04.png"
              alt="section-7-bottom"
              quality={100}
              priority
              className="-z-10 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="z-10 mx-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 pb-[44px] xl:px-12">
        <div className="mb-8 text-center text-[2rem] font-[600] uppercase">
          Trải nghiện đặt dịch vụ mọi lúc mọi nơi
        </div>

        <div className="mt-0 max-w-full overflow-x-auto px-4 scrollbar-thin">
          <div className="relative mx-auto w-[860px] flex-shrink-0 lg:w-[960px] xl:w-[1100px]">
            <NImage
              width={1680}
              height={0}
              src="/v2/story-05-03.png"
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

export default S05Section02;
