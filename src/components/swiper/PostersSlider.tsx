import { useId, useRef, useState } from 'react';
import { useMedia } from 'react-use';
import { cn } from 'src/common/utils';
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
  Parallax,
} from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Section04ArrowLSvg } from '../icons';
import { EffectCarousel } from './EffectCarousel';

type TPostersSliderProps = {
  items: any[];
  showArrows?: boolean;
  children?: (item: any, index?: number) => React.ReactNode;
  className?: string;
  classNamePrev?: string;
  classNameNext?: string;
};

export const PostersSlider01 = ({
  items = [],
  showArrows,
  children,
  className,
  classNamePrev,
  classNameNext,
}: TPostersSliderProps) => {
  const uid = useId();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const ref = useRef<SwiperRef>(null);
  const isAbove1280 = useMedia('(min-width: 1280px)', true);

  return (
    <>
      <Swiper
        key={uid + String(isAbove1280)}
        ref={ref}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className={cn(
          'swiper-navigation-hide relative flex h-full w-full flex-col justify-center xl:overflow-visible [&_.swiper-wrapper]:h-fit',
          '[&_.swiper-pagination-bullets]:absolute [&_.swiper-pagination-bullets]:-top-7 [&_.swiper-pagination-bullets]:right-0',
          className,
        )}
        speed={1000}
        resistanceRatio={0}
        grabCursor={true}
        parallax={true}
        pagination={{ type: 'bullets' }}
        autoplay={
          items.length > 1
            ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
            : false
        }
        watchSlidesProgress
        navigation={true}
        {...(isAbove1280
          ? {
              modules: [
                Autoplay,
                Parallax,
                EffectCreative,
                Pagination,
                Navigation,
              ],
              loop: false,
              effect: 'creative',
              slidesPerView: 1,
              creativeEffect: {
                limitProgress: 1,
                perspective: false,
                shadowPerProgress: true,
                prev: {
                  translate: ['95%', 0, -100],
                  scale: 0.75,
                },
                next: {
                  translate: ['95%', 0, 10],
                  scale: 0.75,
                },
              },
            }
          : {
              modules: [Autoplay, Pagination, Navigation, EffectCarousel],
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 16,
              initialSlide: 1,
              effect: 'carousel',
              loop: true,
            })}
      >
        {items.length > 0 ? (
          items.map((item, index) => children?.(item, index))
        ) : (
          <SwiperSlide></SwiperSlide>
        )}
      </Swiper>

      {!!showArrows && (
        <button
          className={cn(
            'absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg 2xl:h-14 2xl:w-14',
            // isDisabled && 'bg-gray-900/50 text-gray-50 opacity-50',
            classNamePrev,
          )}
          onClick={() => swiperInstance?.slidePrev()}
        >
          <Section04ArrowLSvg className="w-10 shrink-0 2xl:w-14" />
        </button>
      )}
      {!!showArrows && (
        <button
          className={cn(
            'absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg 2xl:h-14 2xl:w-14',
            // isDisabled && 'bg-gray-900/50 text-gray-50 opacity-50',
            classNameNext,
          )}
          onClick={() => swiperInstance?.slideNext()}
        >
          <Section04ArrowLSvg className="w-10 shrink-0 -scale-x-100 2xl:w-14" />
        </button>
      )}
    </>
  );
};
