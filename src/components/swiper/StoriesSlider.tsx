import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { useId, useRef, useState } from 'react';
import { useMouse } from 'react-use';
import { cn } from 'src/common/utils';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Pointer02Svg, Stories501Svg, Stories502Svg } from '../icons';
import FollowingPointer from '../items/FollowingPointer';
import { NImage } from '../next/Image';
import S01Section01 from '../story/S01Section01';
import S01Section02 from '../story/S01Section02';
import S01Section03 from '../story/S01Section03';
import S01Section04 from '../story/S01Section04';
import S02Section01 from '../story/S02Section01';
import S02Section02 from '../story/S02Section02';
import S03Section01 from '../story/S03Section01';
import S03Section02 from '../story/S03Section02';
import S04Section01 from '../story/S04Section01';
import S04Section02 from '../story/S04Section02';
import S05Section01 from '../story/S05Section01';
import S05Section02 from '../story/S05Section02';
import { EffectCarousel } from './EffectCarousel';

const _Montserrat = Montserrat({ subsets: ['latin'] });

type TStoriesSliderProps = {
  className?: string;
  onMouseEnterItem?: () => void;
  onMouseLeaveItem?: () => void;
};

const StoriesSlider = ({
  className,
  onMouseEnterItem,
  onMouseLeaveItem,
}: TStoriesSliderProps) => {
  const uid = useId();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const ref = useRef<SwiperRef>(null);

  const [planetEl, setPlanetEl] = useState<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      <Swiper
        ref={ref}
        modules={[Autoplay, Pagination, Navigation, EffectCarousel]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        effect={'carousel'}
        loop
        className={cn(
          'swiper-navigation-hide relative flex h-full w-[100dvw] flex-col justify-center py-[40px] [&_.swiper-wrapper]:h-fit',
          '[&_.swiper-pagination-bullets]:absolute [&_.swiper-pagination-bullets]:-top-7 [&_.swiper-pagination-bullets]:right-0',
          className,
        )}
        style={{ overflowY: 'visible', overflowX: 'hidden' }}
        speed={600}
        grabCursor={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={16}
        initialSlide={1}
        watchSlidesProgress
        watchOverflow
        mousewheel
        // parallax={true}
        // pagination={{ type: 'bullets' }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        onProgress={(s, progress) => {
          if (!planetEl) return;
          const selectedEl01 = planetEl.querySelector(
            '.Stories5Svg01',
          ) as HTMLElement;

          switch (progress) {
            case 0:
              selectedEl01.style.transform = `translate(5px,5px) rotate(100deg)`;
              break;
            case 0.25:
              selectedEl01.style.transform = `translate(4px,0px) rotate(50deg)`;
              break;
            case 0.5:
              selectedEl01.style.transform = `translate(0px,-2px) rotate(0deg)`;
              break;
            case 0.75:
              selectedEl01.style.transform = `translate(-1px,-1px) rotate(-52deg)`;
              break;
            case 1:
              selectedEl01.style.transform = `translate(-2px,4px) rotate(-100deg)`;
              break;
            default:
              break;
          }
        }}
        onSetTransition={(s, duration) => {
          if (!planetEl) return;
          const selectedEl01 = planetEl.querySelector(
            '.Stories5Svg01',
          ) as HTMLElement;
          selectedEl01.style.transitionDuration = `${duration}ms`;
        }}
      >
        <SwiperSlide className="w-[232px] rounded-2xl bg-white text-gray-50 sm:w-[264px]">
          <Story01
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[232px] rounded-2xl bg-white text-gray-50 sm:w-[264px]">
          <Story02
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[232px] rounded-2xl bg-white text-gray-50 sm:w-[264px]">
          <Story03
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[232px] rounded-2xl bg-white text-gray-50 sm:w-[264px]">
          <Story04
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[232px] rounded-2xl bg-white text-gray-50 sm:w-[264px]">
          <Story05
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
        </SwiperSlide>
      </Swiper>

      <div
        className="absolute bottom-[20px] left-1/2 -z-[100] -translate-x-1/2"
        ref={setPlanetEl}
      >
        <div className="relative h-[460px] blur-sm max-sm:scale-75 sm:scale-100">
          <div className="Stories5Svg01 h-[460px] w-[460px] origin-center">
            <Stories501Svg className="absolute left-0 right-0 top-0 w-[460px]" />
          </div>
          <Stories502Svg className="absolute left-1/2 top-1/2 w-[159.6px] -translate-x-1/2 -translate-y-[calc(50%-4px)]" />
        </div>
      </div>
    </div>
  );
};

export const Story01 = ({ ...props }: TStoryItemProps) => (
  <StoryItem
    href={'/ngoi-nha-tuong-lai'}
    classNameDialog="pt-[64px] lg:pt-[80px]"
    dialogContent={
      <>
        <S01Section01 />

        <S01Section02 />

        <S01Section03 />

        <S01Section04 />
      </>
    }
    {...props}
  >
    <NImage
      src="/v2/section-02-01.png"
      alt=""
      quality={100}
      height={200}
      width={240}
      className="h-[200px] w-full rounded-t-2xl border-4 border-green1 bg-white object-cover sm:h-[240px] xl:h-[200px]"
    />
    <div className="flex flex-col items-center pb-2 pt-1">
      <span className="mt-auto text-[12px] font-[600] uppercase">
        Câu chuyện 1
      </span>
      <span className="mb-1 text-[16px] font-[700] uppercase">
        Ngôi nhà tương lai
      </span>
      <button className="flex h-6 items-center justify-center rounded-full bg-white px-9 text-[12px] font-[700] uppercase text-green4">
        Xem chi tiết
      </button>
    </div>
  </StoryItem>
);

export const Story02 = ({ ...props }: TStoryItemProps) => (
  <StoryItem
    href={'/do-thi-tuong-lai'}
    classNameDialog="py-[64px] lg:py-[88px]"
    dialogContent={
      <>
        <S02Section01 />
        <S02Section02 />
      </>
    }
    {...props}
  >
    <NImage
      src="/v2/section-02-02.png"
      alt=""
      quality={100}
      height={200}
      width={240}
      className="h-[200px] w-full rounded-t-2xl border-4 border-green1 bg-white object-cover sm:h-[240px] xl:h-[200px]"
    />
    <div className="flex flex-col items-center pb-2 pt-1">
      <span className="mt-auto text-[12px] font-[600] uppercase">
        Câu chuyện 2
      </span>
      <span className="mb-1 text-[16px] font-[700] uppercase">
        Đô thị tương lai
      </span>
      <button className="flex h-6 items-center justify-center rounded-full bg-white px-9 text-[12px] font-[700] uppercase text-green4">
        Xem chi tiết
      </button>
    </div>
  </StoryItem>
);

export const Story03 = ({ ...props }: TStoryItemProps) => (
  <StoryItem
    href={'/cong-dong-tuong-lai'}
    classNameDialog="pt-[64px] lg:pt-[88px]"
    dialogContent={
      <>
        <S03Section01 />
        <S03Section02 />
      </>
    }
    {...props}
  >
    <NImage
      src="/v2/section-02-03.png"
      alt=""
      quality={100}
      height={200}
      width={240}
      className="h-[200px] w-full rounded-t-2xl border-4 border-green1 bg-white object-cover sm:h-[240px] xl:h-[200px]"
    />

    <div className="relative flex flex-col items-center pb-2 pt-1">
      <span className="mt-auto text-[12px] font-[600] uppercase">
        Câu chuyện 3
      </span>
      <span className="mb-1 text-[16px] font-[700] uppercase">
        Cộng đồng tương lai
      </span>
      <button className="flex h-6 items-center justify-center rounded-full bg-white px-9 text-[12px] font-[700] uppercase text-green4">
        Xem chi tiết
      </button>
    </div>
  </StoryItem>
);

export const Story04 = ({ ...props }: TStoryItemProps) => (
  <StoryItem
    href={'/nong-nghiep-tuong-lai'}
    classNameDialog="py-[64px] lg:py-[88px]"
    dialogContent={
      <>
        <S04Section01 />
        <S04Section02 />
      </>
    }
    {...props}
  >
    <NImage
      src="/v2/section-02-04.png"
      alt=""
      quality={100}
      height={200}
      width={240}
      className="h-[200px] w-full rounded-t-2xl border-4 border-green1 bg-white object-cover sm:h-[240px] xl:h-[200px]"
    />
    <div className="flex flex-col items-center pb-2 pt-1">
      <span className="mt-auto text-[12px] font-[600] uppercase">
        Câu chuyện 4
      </span>
      <span className="mb-1 text-[16px] font-[700] uppercase">
        Nông nghiệp tương lai
      </span>
      <button className="flex h-6 items-center justify-center rounded-full bg-white px-9 text-[12px] font-[700] uppercase text-green4">
        Xem chi tiết
      </button>
    </div>
  </StoryItem>
);

export const Story05 = ({ ...props }: TStoryItemProps) => (
  <StoryItem
    href={'/xa-hoi-tuong-lai'}
    classNameDialog="py-[64px] lg:py-[88px]"
    dialogContent={
      <>
        <S05Section01 />
        <S05Section02 />
      </>
    }
    {...props}
  >
    <NImage
      src="/v2/section-02-05.png"
      alt=""
      quality={100}
      height={200}
      width={240}
      className="h-[200px] w-full rounded-t-2xl border-4 border-green1 bg-white object-cover sm:h-[240px] xl:h-[200px]"
    />
    <div className="flex flex-col items-center pb-2 pt-1">
      <span className="mt-auto text-[12px] font-[600] uppercase">
        Câu chuyện 5
      </span>
      <span className="mb-1 text-[16px] font-[700] uppercase">
        Xã hội tương lai
      </span>
      <button className="flex h-6 items-center justify-center rounded-full bg-white px-9 text-[12px] font-[700] uppercase text-green4">
        Xem chi tiết
      </button>
    </div>
  </StoryItem>
);

type TStoryItemProps = {
  children?: React.ReactNode;
  dialogContent?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  index?: number;
  href?: string;
  classNameDialog?: string;
};
export const StoryItem = ({
  children,
  dialogContent,
  onMouseEnter,
  onMouseLeave,
  onClick,
  index,
  classNameDialog,
}: TStoryItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="swiper-carousel-animate-opacity cu group relative m-0 w-full p-0 lg:cursor-none"
        onClick={(e) => {
          dialogRef.current?.showModal();
          document.body.classList.add('overflow-hidden');
          dialogRef.current?.classList.remove('hidden');
        }}
      >
        <div
          ref={ref}
          onMouseEnter={() => {
            setIsInside(true);
            onMouseEnter?.();
          }}
          onMouseLeave={() => {
            setIsInside(false);
            onMouseLeave?.();
          }}
          className={cn(
            'flex cursor-none flex-col items-center rounded-2xl bg-green1 transition-all',
            'group-hover:-translate-x-2 group-hover:-translate-y-2',
          )}
        >
          {children}
        </div>

        <AnimatePresence mode="wait">
          {isInside || (
            <div className="absolute left-0 translate-y-full max-lg:-bottom-2 lg:top-0 lg:-translate-y-full">
              <div className="flex animate-bounce flex-nowrap items-center gap-2">
                <span className="relative flex min-h-3 min-w-3 self-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green1 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green1"></span>
                </span>
                <div className="whitespace-nowrap text-[16px] text-green1">
                  Click để xem chi tiết
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isInside && (
            <FollowingPointer
              isInside={isInside}
              className="flex h-4 w-4"
              style={{ top: elY, left: elX }}
            >
              <Pointer02Svg className="absolute -left-5 -top-5 flex h-8 w-8 self-center fill-green2" />
              <div className="pointer-events-none flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-green2 px-2 text-white shadow shadow-green2">
                Click để xem chi tiết
              </div>
            </FollowingPointer>
          )}
        </AnimatePresence>
      </button>
      <dialog
        ref={dialogRef}
        className={cn(
          _Montserrat.className,
          'mx-auto hidden min-h-[100dvh] w-dvw max-w-[1280px] bg-bg antialiased backdrop-blur-sm backdrop:backdrop-blur-sm',
        )}
        onClose={() => {
          document.body.classList.remove('overflow-hidden');
          dialogRef.current?.classList.add('hidden');
        }}
      >
        <div
          className={cn(
            'relative mx-auto h-[100dvh] max-w-[1920px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-bg scrollbar-thumb-green2 scrollbar-thumb-rounded-full max-md:w-dvw',
            classNameDialog,
          )}
        >
          {dialogContent}
        </div>
        <button
          className="fixed right-2 top-2 z-50 rounded bg-gray-50 px-4 py-2"
          onClick={(e) => {
            dialogRef.current?.close();
            document.body.classList.remove('overflow-hidden');
            dialogRef.current?.classList.add('hidden');
          }}
        >
          Đóng
        </button>
      </dialog>
    </>
  );
};

export default StoriesSlider;
