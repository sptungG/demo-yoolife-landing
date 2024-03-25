import { motion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { useMouse } from 'react-use';
import { cn } from 'src/common/utils';
import { SwiperSlide } from 'swiper/react';
import {
  Circle01Svg,
  Circle02Svg,
  Section04FrameInSvg,
  Section04FrameSvg,
} from '../icons';
import FollowingPointer from '../items/FollowingPointer';
import { NImage } from '../next/Image';
import { PostersSlider01 } from '../swiper/PostersSlider';

type TSection04Props = {};

const Section04 = ({}: TSection04Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '88px'],
  });

  return (
    <section
      className="relative mx-auto flex w-full max-w-[1920px] flex-col justify-center max-lg:py-[60px] max-lg:pt-[40px] lg:pb-0 xl:min-h-dvh"
      ref={ref}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <motion.div
        className="sticky left-0 top-0 z-40 w-full backdrop-blur max-lg:hidden"
        style={{ opacity: scrollYProgress }}
      >
        <div className="mx-auto flex h-[88px] max-w-[1280px] flex-nowrap items-center gap-1 px-12 text-white">
          <span className="w-[166px]"></span>
          <span className="h-[24px] w-1 border-l border-white"></span>
          <span className="uppercase text-green1">Chuyển đổi số toàn dân</span>
        </div>
      </motion.div>

      <FollowingPointer
        isInside={isInside}
        style={{ top: elY + 8, left: elX + 8 }}
      >
        <div className="pointer-events-none h-5 w-5 rounded-full bg-green1"></div>
      </FollowingPointer>

      <div className="relative mx-auto flex w-full flex-col justify-center text-gray-50 lg:pb-[88px]">
        <div className="mx-auto mb-10 flex w-full max-w-[1280px] flex-col items-center overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, translateX: '-100%' }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring' }}
            className="-mb-2 flex items-baseline xl:-mb-5"
          >
            <span className="text-[2rem] font-[700] uppercase text-green2 sm:text-[2.5rem] xl:text-[4rem] 2xl:text-[4.2rem]">
              YOOLIFE - Chuyển đổi số
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: '100%' }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring' }}
            className="text-[2.5rem] font-[700] uppercase text-white xl:text-[4rem] 2xl:text-[4.2rem]"
          >
            Toàn dân
          </motion.div>
        </div>

        <div className="relative mx-auto flex min-h-0 w-full max-w-[1280px] flex-[1_1_auto] flex-col xl:w-fit xl:flex-row xl:flex-nowrap">
          <div className="flex w-fit shrink-0 flex-col items-start xl:-ml-[150px] 2xl:-ml-[72px]">
            <div className="relative max-xl:absolute max-xl:left-1/2 max-xl:top-1/2 max-xl:-translate-x-1/2 max-xl:-translate-y-1/2 max-xl:opacity-20 xl:w-fit xl:opacity-100">
              <NImage
                src="/v2/section-04-01.png"
                alt=""
                width={480}
                height={0}
                className="z-10 h-fit max-w-[320px] sm:max-w-[480px] sm:object-cover 2xl:w-[34dvw]"
              />
              <NImage
                src="/v2/section-04-022.png"
                alt=""
                width={200}
                height={0}
                className="absolute left-0 top-0 -z-10 h-fit w-[160px] -translate-x-1/4 -translate-y-1/4 rounded object-contain"
              />
              <NImage
                src="/v2/section-04-03.png"
                alt=""
                fill
                className="-z-10 h-full w-full animate-pulse object-contain lg:scale-[1.2]"
              />
              <div className="absolute bottom-1/2 left-1/2 -z-30 h-[480px] w-[480px] -translate-x-[80%] translate-y-[60%] rounded-full bg-[radial-gradient(circle_at_center,#ACC981_1%,#ACC981_6%,transparent_60%)] opacity-70"></div>

              <div className="absolute bottom-0 right-10 -z-30 h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle_at_center,#ACC981,transparent_60%)] opacity-90"></div>

              <div className="absolute -right-10 top-0 -z-20 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,#50B58D,transparent_60%)]"></div>
            </div>
          </div>
          <div className="relative flex min-w-0 flex-[1_1_auto] flex-col items-start max-xl:pl-0 xl:pl-[98px] 2xl:pl-[108px]">
            <div className="relative xl:translate-x-0">
              <PostersSlider01
                items={[
                  { imageUrl: '/v2/section-04-04.png', title: 'Giao tiếp số' },
                  { imageUrl: '/v2/section-04-05.png', title: 'Tiện ích số' },
                  { imageUrl: '/v2/section-04-06.png', title: 'Dịch vụ số' },
                  { imageUrl: '/v2/section-04-07.png', title: 'Mua sắm số' },
                  { imageUrl: '/v2/section-04-08.png', title: 'Căn hộ số' },
                  { imageUrl: '/v2/section-04-09.png', title: 'Hành chính số' },
                ]}
                showArrows
                className="max-w-[100dvw] xl:max-w-[320px] 2xl:max-w-[340px]"
                classNamePrev="xl:-translate-x-[calc(100%+6px)]"
                classNameNext="xl:translate-x-[calc(100%+270px)]"
              >
                {(item, index) => (
                  <SwiperSlide
                    key={index + String(item)}
                    className="relative flex h-fit w-[240px] scale-90 flex-col justify-center sm:w-[264px] xl:w-[320px] 2xl:w-[340px] [&.swiper-slide-active_.Circle01Svg]:opacity-100"
                  >
                    <Section04FrameSvg className="swiper-carousel-animate-opacity w-[240px] rounded-[20px] bg-bg sm:w-[264px] xl:w-[320px] 2xl:w-[340px]" />

                    <div className="swiper-carousel-animate-opacity absolute inset-0 flex flex-col p-[24px] sm:p-[26px] xl:p-[30px]">
                      <div className="relative min-h-0 flex-[1_1_auto] px-2">
                        <Circle01Svg
                          className={cn(
                            'absolute left-1/2 top-1/2 w-[98%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all',
                            'Circle01Svg',
                          )}
                        />
                        <NImage
                          src={item?.imageUrl}
                          alt=""
                          fill
                          quality={50}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="relative mt-auto w-full">
                        <Section04FrameInSvg className="w-full" />
                        <Circle02Svg className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2" />

                        <div className="absolute inset-0 flex items-center justify-center text-center">
                          <span
                            className={cn(
                              '-mb-2 text-[2rem] font-[700] leading-[1.1]',
                              index === 5 && 'text-[1.8rem]',
                            )}
                          >
                            {item?.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )}
              </PostersSlider01>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04;
