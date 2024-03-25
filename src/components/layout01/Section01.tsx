import { motion, useScroll } from 'framer-motion';
import { useId, useRef, useState } from 'react';
import { useMouse } from 'react-use';
import { cn } from 'src/common/utils';
import { CircleSvg, Yoolife01Svg } from '../icons';
import FollowingPointer from '../items/FollowingPointer';
import { NImage } from '../next/Image';
import ScrollBar from '../scrollbar/scroll-bar';

type TSection01Props = {};

const Section01 = ({}: TSection01Props) => {
  const uid = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '200px'],
  });

  return (
    <section
      className="relative mx-auto flex w-full max-w-[1920px] flex-col justify-center xl:min-h-dvh"
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
          <span className="uppercase">SỨ MỆNH</span>
          <span className="uppercase">TỚI TỪ SỰ TIÊN PHONG</span>
        </div>
      </motion.div>

      <FollowingPointer
        isInside={isInside}
        style={{ top: elY + 8, left: elX + 8 }}
      >
        <div className="pointer-events-none h-5 w-5 rounded-full bg-green1"></div>
      </FollowingPointer>

      <NImage
        src="/v2/section-01-01.png"
        alt=""
        fill
        quality={1}
        className="object-cover max-[375px]:blur-[2px]"
      />

      <div className="relative mx-auto flex flex-col justify-center text-gray-50 xl:pb-[88px]">
        <div className="mx-auto mb-8 flex w-full max-w-[1280px] flex-col items-center overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, translateX: '-100%' }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring' }}
            className="-mb-2 flex items-baseline xl:-mb-5"
          >
            <span className="whitespace-nowrap text-[2.4rem] font-[300] text-green2 md:text-[3.2rem] xl:text-[3.5rem] 2xl:text-[5rem]">
              SỨ MỆNH
            </span>
            <Yoolife01Svg className="min-w-[153px] shrink-0 max-md:w-[34dvw] md:w-[23dvw] xl:w-[22dvw] xl:max-w-[420px] 2xl:w-[33dvw]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: '100%' }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring' }}
            className="whitespace-nowrap text-center text-[2.4rem] font-[700] text-green4 md:text-[3.2rem] xl:text-[3.5rem] 2xl:text-[5rem]"
          >
            TỚI TỪ SỰ TIÊN PHONG
          </motion.div>
        </div>

        <ScrollBar
          suppressScrollY
          className="max-w-[100dvw] scroll-smooth scrollbar-none xl:snap-x xl:snap-mandatory [&_.ms-thumb]:bg-gray-300"
        >
          <div className="flex min-w-fit flex-nowrap gap-3 px-3 pb-3 lg:gap-6 lg:px-6 lg:pb-6">
            {[
              {
                imageUrl: '/v2/section-01-02.svg',
                title1: 'DIGITALIZE',
                title2: 'Số hóa',
                desc: [
                  'Số hóa nhằm đưa mọi thứ lên internet',
                  'Kết nối con người – dịch vụ - thiết bị - con người',
                  'Khép kín quy trình tương tác trên môi trường số',
                  'Xây dựng các cộng đồng số Yoolife',
                  'Ứng dụng AI + Big Data phân tích dữ liệu',
                ],
              },
              {
                imageUrl: '/v2/section-01-03.svg',
                title1: 'VISUALIZE',
                title2: 'ẢO HÓA',
                desc: [
                  'Sử dụng công nghệ VR, AR xây dựng các gian hàng ảo, nông trại ảo',
                  '3D+ ảo hóa sản phẩm Smart home, Smart city  để CĐT tiếp thị sản phẩm',
                  'Gia tăng trải nghiệm người dùng trên không gian số ảo',
                  'Kết nối từ xa - trải nghiệm tại chỗ',
                  'Liên kết môi trường số với không gian ảo và ngược lại, sử dụng số hóa là nền tảng kết nối với con người hướng tới vũ trụ ảo Metaverse.',
                ],
              },
              {
                imageUrl: '/v2/section-01-04.svg',
                title1: 'DECARBONIZE',
                title2: 'Xanh Hóa',
                desc: [
                  'Xây roadmap hướng tới neutral-zero, net-zero',
                  'Mô phỏng đánh giá theo Digital Twin',
                  'Thực thi quá trình đo lường, phân tích & tối ưu bởi AI',
                  'Giảm thiểu năng lượng tiêu thụ',
                  'Sử dụng nguồn năng lượng sạch',
                  'Chuẩn hóa theo quy trình chứng chỉ ESG',
                ],
              },
            ].map((item, index) => (
              <div
                key={uid + index}
                className="relative flex max-w-[880px] shrink-0 snap-center snap-always flex-nowrap overflow-hidden rounded-3xl border border-gray-400 bg-bg/10 shadow-lg shadow-bg backdrop-blur-sm lg:min-w-[32vw] 2xl:min-w-[40vw]"
              >
                <div
                  className={cn(
                    'relative shrink-0 self-center max-md:absolute max-md:left-2 max-md:top-1/2 max-md:-z-10 max-md:-translate-y-1/2 max-md:opacity-50 max-md:blur-[1px]',
                    index === 0 &&
                      '-mb-6 -mr-6 ml-4 w-[160px] sm:ml-6 sm:w-[220px] lg:mr-6 lg:w-[270px] xl:w-[300px] 2xl:mt-6 2xl:h-[340px] 2xl:w-[360px]',
                    index === 1 &&
                      'ml-2 mr-2 w-[160px] sm:w-[220px] lg:w-[270px] xl:w-[300px] 2xl:mb-4 2xl:mt-6 2xl:h-[320px] 2xl:w-[360px]',
                    index === 2 &&
                      '-ml-2 w-[160px] -scale-x-100 sm:w-[200px] lg:w-[270px] xl:w-[300px] 2xl:-ml-2 2xl:mt-3 2xl:h-[330px] 2xl:w-[360px]',
                  )}
                >
                  <NImage
                    src={item.imageUrl}
                    alt=""
                    width={200}
                    height={0}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div
                  className={cn(
                    'flex flex-col pr-4 pt-4 max-lg:pl-6 xl:pr-6 xl:pt-6 2xl:py-6 2xl:pr-8',
                    index === 0 && 'lg:-ml-8',
                    index === 2 && 'max-lg:pb-2',
                  )}
                >
                  <div className="mb-1 flex flex-nowrap gap-2 whitespace-nowrap text-[1.5rem] lg:mb-2 xl:mb-4 2xl:text-[1.8rem]">
                    <span className="font-[700] uppercase text-green4">
                      {item.title1}
                    </span>
                    <span className="font-[700] uppercase text-green2">-</span>
                    <span className="font-[700] uppercase text-green2">
                      {item.title2}
                    </span>
                  </div>

                  <div
                    className={cn(
                      'flex flex-col ',
                      index === 0 && 'gap-3 lg:gap-5 xl:gap-6',
                      index === 1 && 'gap-2 pb-2 xl:gap-4 xl:pb-4 2xl:pb-0',
                      index === 2 && 'gap-2 pb-2 lg:gap-4 xl:gap-6',
                    )}
                  >
                    {item.desc.map((d, dindex) => (
                      <div
                        key={uid + index + 'desc' + dindex}
                        className="flex items-start gap-2"
                      >
                        <CircleSvg className="mt-1 w-4 shrink-0" />
                        <div
                          className={cn(
                            'm-0 w-fit text-justify lg:max-w-[50dvw] xl:max-w-[33dvw]',
                            index === 1 && 'max-w-[440px] md:max-w-[550px]',
                          )}
                        >
                          {d}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollBar>
      </div>
    </section>
  );
};

export default Section01;
