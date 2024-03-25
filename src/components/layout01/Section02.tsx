import { motion, useScroll } from 'framer-motion';
import { useId, useRef, useState } from 'react';
import { useMedia, useMouse } from 'react-use';
import { Stories5Svg } from '../icons';
import FollowingPointer from '../items/FollowingPointer';
import { NImage } from '../next/Image';
import StoriesSlider, {
  Story01,
  Story02,
  Story03,
  Story04,
  Story05,
} from '../swiper/StoriesSlider';

type TSection02Props = {};

const Section02 = ({}: TSection02Props) => {
  const uid = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '88px'],
  });
  const isAbove1023 = useMedia('(min-width: 1023px)', true);

  return (
    <section
      key={uid + String(isAbove1023)}
      className="relative mx-auto flex w-full max-w-[1920px] flex-col justify-end lg:min-h-dvh xl:pb-[88px]"
      ref={ref}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <motion.div
        className="sticky left-0 top-0 z-40 w-full backdrop-blur max-lg:invisible"
        style={{ opacity: scrollYProgress }}
      >
        <div className="mx-auto flex h-[88px] max-w-[1280px] flex-nowrap items-center gap-1 px-12 text-white">
          <span className="w-[166px]"></span>
          <span className="h-[24px] w-1 border-l border-white"></span>
          <span className="font-[600] uppercase text-green2">5 câu chuyện</span>
        </div>
      </motion.div>

      <FollowingPointer
        isInside={isInside}
        style={{ top: elY + 8, left: elX + 8 }}
      >
        <div className="pointer-events-none h-5 w-5 rounded-full bg-green1"></div>
      </FollowingPointer>

      <NImage
        src="/v2/section-02-bg.png"
        alt=""
        fill
        quality={1}
        className="object-cover max-[375px]:blur-[2px]"
      />

      <div className="mx-auto mb-8 flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 max-xl:items-center xl:px-12">
        <motion.div
          initial={{ opacity: 0, translateX: '-100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'spring' }}
          className="flex items-baseline"
        >
          <span className="text-[2rem] font-[700] text-white xl:text-[2.5rem] 2xl:text-[3rem]">
            KHÁM PHÁ
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: '100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'spring' }}
          className="flex items-baseline max-md:flex-col max-md:items-start"
        >
          <span className="whitespace-nowrap text-[3rem] font-[700] uppercase text-green2 max-md:leading-none md:text-[3.4rem] xl:text-[3.5rem] 2xl:text-[5rem]">
            5 câu chuyện
          </span>
          <span className="whitespace-nowrap text-[2rem] font-[700] text-white xl:text-[2.5rem] 2xl:text-[3rem]">
            CỦA CHÚNG TÔI
          </span>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] pb-[20px] text-gray-50 lg:pb-[88px] lg:pt-[44px] xl:pb-6">
        {isAbove1023 ? (
          <div className="relative flex flex-nowrap gap-6 pt-[100px] lg:flex-col lg:items-center lg:justify-center lg:pt-[280px] xl:pt-[310px]">
            <div className="absolute bottom-4 left-[8%] shrink-0 rounded-2xl bg-white lg:w-[224px] xl:left-[10%] xl:w-[254px] 2xl:left-[6.72%] 2xl:w-[260px]">
              <Story01
                index={1}
                onMouseEnter={() => setIsInside(false)}
                onMouseLeave={() => setIsInside(true)}
              />
            </div>

            <div className="absolute bottom-[51%] left-[15%] shrink-0 rounded-2xl bg-white lg:w-[224px] xl:bottom-[48.43%] xl:w-[254px] 2xl:left-[11%] 2xl:w-[260px]">
              <Story02
                index={2}
                onMouseEnter={() => setIsInside(false)}
                onMouseLeave={() => setIsInside(true)}
              />
            </div>

            <div className="absolute -top-7 left-1/2 shrink-0 rounded-2xl bg-white lg:w-[224px] lg:-translate-x-1/2 xl:top-0 xl:w-[254px] 2xl:w-[260px]">
              <Story03
                index={3}
                onMouseEnter={() => setIsInside(false)}
                onMouseLeave={() => setIsInside(true)}
              />
            </div>

            <div className="absolute bottom-[51%] left-[65.1%] shrink-0 rounded-2xl bg-white lg:w-[224px] xl:bottom-[48.43%] xl:w-[254px] 2xl:left-[68.1%] 2xl:w-[260px]">
              <Story04
                index={4}
                onMouseEnter={() => setIsInside(false)}
                onMouseLeave={() => setIsInside(true)}
              />
            </div>

            <div className="absolute bottom-4 left-[72%] shrink-0 rounded-2xl bg-white lg:w-[224px] xl:left-[70%] xl:w-[254px] 2xl:left-[72.5%] 2xl:w-[260px]">
              <Story05
                index={5}
                onMouseEnter={() => setIsInside(false)}
                onMouseLeave={() => setIsInside(true)}
              />
            </div>

            <Stories5Svg className="w-[400px] xl:w-[460px] 2xl:w-[520px]" />
          </div>
        ) : (
          <StoriesSlider
            onMouseEnterItem={() => setIsInside(false)}
            onMouseLeaveItem={() => setIsInside(true)}
          />
        )}
      </div>
    </section>
  );
};

export default Section02;
