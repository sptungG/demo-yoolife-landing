import { animate, motion, useMotionValue, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMeasure, useMouse } from 'react-use';
import {
  Section0301Svg,
  Section0302Svg,
  Section0303Svg,
  Section0304Svg,
} from '../icons';
import Counter from '../items/Counter';
import FollowingPointer from '../items/FollowingPointer';
import { NImage } from '../next/Image';

type TSection03Props = {};

const Section03 = ({}: TSection03Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '2px'],
  });

  return (
    <section
      className="relative mx-auto flex w-full max-w-[1920px] flex-col bg-grid-gray-500/[0.2] lg:min-h-[700px] xl:min-h-dvh"
      ref={ref}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <motion.div
        className="sticky left-0 top-0 z-40 w-full max-lg:hidden"
        style={{
          opacity: scrollYProgress,
        }}
      >
        <div className="mx-auto flex h-[88px] max-w-[1280px] flex-nowrap items-center gap-1 px-12 text-white">
          <span className="w-[166px]"></span>
          <span className="h-[24px] w-1 border-l border-white"></span>
          <span className="uppercase text-green1">Thống kê</span>
        </div>
      </motion.div>

      <FollowingPointer
        isInside={isInside}
        style={{ top: elY + 8, left: elX + 8 }}
      >
        <div className="pointer-events-none h-5 w-5 rounded-full bg-green1"></div>
      </FollowingPointer>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      <div className="relative mx-auto flex min-h-0 w-full flex-[1_1_auto] flex-col justify-center justify-self-center overflow-hidden px-2 py-[60px] text-gray-50 sm:py-[160px] lg:-mt-[88px] xl:px-0">
        <div className="absolute left-0 right-0 top-1/2 z-0 max-w-[1920px] -translate-y-1/2 -scale-x-100 xl:scale-x-100 xl:overflow-x-hidden">
          <ParallaxBg>
            {Array(2).fill(
              <div className="flex w-[100dvw] flex-col gap-3">
                <div className="flex flex-nowrap gap-3 bg-green2 px-3 py-1.5 opacity-80">
                  {Array(60).fill(
                    <div className="h-4 w-6 shrink-0 rounded-xl bg-bg"></div>,
                  )}
                </div>
                <div className="relative h-[240px] w-full">
                  <NImage
                    src="/v2/section-03-01.png"
                    alt=""
                    fill
                    quality={100}
                    className="object-cover xl:object-cover"
                  />
                </div>
                <div className="flex flex-nowrap gap-3 bg-green2 px-3 py-1.5 opacity-80">
                  {Array(60).fill(
                    <div className="h-4 w-6 shrink-0 rounded-xl bg-bg"></div>,
                  )}
                </div>
              </div>,
            )}
          </ParallaxBg>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-center rounded-3xl border border-gray-100 bg-bg px-4 py-4 xl:w-full xl:px-12 xl:py-6">
          <div className="bg-[url('/v2/section-03-01.png')] bg-contain bg-clip-text bg-center bg-repeat text-[8rem] font-[800] leading-none text-transparent max-sm:text-[18dvw] xl:text-[10rem]">
            <Counter
              className="tracking-[4px]"
              overflow={10000}
              value={10001}
              from={9900}
            />
          </div>
          <div className="mb-4 text-center text-[1.6rem] font-[700] uppercase text-green1 lg:text-[2.5rem] xl:text-[3rem]">
            Tin dùng ứng dụng Yoolife
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:justify-between xl:flex-nowrap">
            <div className="flex flex-col items-center text-center max-[375px]:w-[calc(50%-12px)] sm:max-w-[25%]">
              <Section0301Svg className="mb-1.5 w-[40px] xl:w-[50px]" />
              <Counter
                className="mb-1 font-[700] tracking-[2px] text-green2"
                overflow={10000}
                value={10001}
                from={9900}
              />
              <span className="leading-[1.2]">Khách hàng đã và</span>
              <span className="whitespace-nowrap leading-[1.2]">
                đang tin dùng
              </span>
            </div>

            <div className="flex flex-col items-center text-center max-[375px]:w-[calc(50%-12px)] sm:max-w-[25%]">
              <Section0302Svg className="mb-1.5 w-[40px] xl:w-[50px]" />
              <Counter
                className="mb-1 font-[700] tracking-[2px] text-green2"
                overflow={1000}
                value={1001}
                from={990}
              />
              <span className="leading-[1.2]">Tòa nhà,</span>
              <span className="whitespace-nowrap leading-[1.2]">
                Khu đô thị triển khai
              </span>
            </div>

            <div className="flex flex-col items-center text-center max-[375px]:w-[calc(50%-12px)] sm:max-w-[25%]">
              <Section0303Svg className="mb-1.5 w-[40px] xl:w-[50px]" />
              <Counter
                className="mb-1 font-[700] tracking-[2px] text-green2"
                overflow={679}
                value={680}
                from={600}
              />
              <span className="leading-[1.2]">Đối tác,</span>
              <span className="whitespace-nowrap leading-[1.2]">
                Quý khách hàng
              </span>
            </div>

            <div className="flex flex-col items-center text-center max-[375px]:w-[calc(50%-12px)] sm:max-w-[25%]">
              <Section0304Svg className="mb-1.5 w-[40px] xl:w-[50px]" />
              <div className="mb-1 font-[700] tracking-[2px] text-green2">
                2023
              </div>
              <span className="leading-[1.2]">Chuyển đổi số</span>
              <span className="whitespace-nowrap leading-[1.2]">
                Xanh - Thông minh - ESG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type TParallaxBg = {
  baseVelocity?: number;
  className?: string;
  children?: React.ReactNode;
};
const ParallaxBg = ({
  children,
  baseVelocity = 100,
  className,
}: TParallaxBg) => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure<HTMLDivElement>();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <motion.div
      className="relative flex flex-nowrap"
      style={{ x: xTranslation }}
      ref={ref}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
    >
      {children}
    </motion.div>
  );
};

export default Section03;
