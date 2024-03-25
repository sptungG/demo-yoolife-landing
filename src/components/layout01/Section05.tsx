import { motion, useScroll } from 'framer-motion';
import { Montserrat_Alternates } from 'next/font/google';
import { useRef, useState } from 'react';
import { useMouse } from 'react-use';
import { AppleLogoSvg, ChPlayLogoSvg } from 'src/components/icons';
import { NImage as Image } from 'src/components/next/Image';
import FollowingPointer from '../items/FollowingPointer';
const MontserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['700', '800'],
});

function Section05() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '88px'],
  });
  return (
    <section
      className="relative mx-auto min-h-dvh"
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
          <span className="font-[600] uppercase text-green2">Download App</span>
        </div>
      </motion.div>

      <FollowingPointer
        isInside={isInside}
        style={{ top: elY + 8, left: elX + 8 }}
      >
        <div className="pointer-events-none h-5 w-5 rounded-full bg-green1"></div>
      </FollowingPointer>

      <div className="mx-auto mb-6 max-w-[1280px] overflow-hidden px-3 text-gray-50 lg:mb-[76px] lg:px-12">
        <h3
          className={`text-center text-[2.5rem] font-[700] leading-none xl:pl-[64px] xl:text-left xl:text-[4rem] ${MontserratAlternates.className}`}
        >
          Download
        </h3>
        <h3
          className={`text-center text-[3.32rem] font-[800] leading-none text-green1 xl:text-left xl:text-[5rem] ${MontserratAlternates.className}`}
        >
          The Yoolife App
        </h3>
      </div>
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-between px-3 lg:px-12 xl:flex-row">
        <div className="absolute opacity-20 xl:relative xl:-ml-[98%] xl:opacity-100">
          <Image
            src="/v2/section-05-app.png"
            alt=""
            width={856}
            height={0}
            className="-z-10 max-xl:scale-75 max-sm:scale-100 xl:translate-x-[105%]"
            quality={90}
            priority
          />
        </div>
        <div className="z-0 max-w-[580px] self-center">
          <div className="mb-2 text-center text-[2.4rem] font-[700] text-gray-50 sm:mb-4 xl:whitespace-nowrap xl:text-left">
            Tải ứng dụng Yoolife
          </div>
          <div className="mb-8 text-justify text-[1.22rem] font-[300] leading-[1.6] text-gray-50 sm:mb-3">
            Để tải ứng dụng, bạn truy cập vào một trong hai đường dẫn dưới đây
            tùy theo thiết bị di động của mình sử dụng hệ điều hành là Android
            hay iOS.
          </div>
          <div className="mb-6 flex flex-col items-center sm:flex-row">
            <div className="flex flex-col gap-6 sm:gap-12">
              <a
                href="https://apps.apple.com/vn/app/imaxtek-smartlife/id1672904034?l=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-lg border bg-gray-50 pb-3 pl-3 pr-4 pt-3 shadow-md shadow-green3/50"
              >
                <AppleLogoSvg className="-mt-1.5 h-[46.67px] w-[46.67px] flex-shrink-0" />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="mb-2 leading-none">Download on the</div>
                  <div className="text-[32px] font-[700] leading-none group-hover:underline">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.imax.smartlife&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-lg border bg-gray-50 pb-3 pl-3 pr-4 pt-3 shadow-md shadow-green3/50"
              >
                <ChPlayLogoSvg className="h-[46.67px] w-[46.67px] flex-shrink-0" />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="mb-2 leading-none">GET IT ON</div>
                  <div className="whitespace-nowrap text-[32px] font-[700] leading-none group-hover:underline">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-11 sm:ml-11 xl:ml-11 xl:mt-0">
              <Image
                src="/v1/section-8-qr.png"
                alt=""
                width={256}
                height={0}
                quality={100}
                priority
                className="rounded-[25px] shadow-md shadow-green3/50"
              />
            </div>
          </div>
          <div className="whitespace-nowrap text-center text-[1.8125rem] font-[700] uppercase text-gray-50 max-sm:text-[14.5px] xl:text-justify">
            Mở máy ảnh của bạn lên và quét
          </div>
          <div className="whitespace-nowrap text-center text-[2.0875rem] font-[700] uppercase text-green1 max-sm:text-[16.7px] xl:text-justify">
            Open your Camera and Scan
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 max-w-[1280px] px-3 text-justify md:px-12 md:text-center xl:-mt-6">
        <div className="text-[1.25rem] font-[300] leading-[1.8] text-gray-50">
          Hãy cài ngay ứng dụng Yoolife để trải nghiệm tương lai thông minh ngay
          trong căn nhà của bạn! Với Yoolife, bạn sẽ có cơ hội trải nghiệm một
          cuộc sống đa thông minh và tiện ích hơn bao giờ hết. Tự động hóa hệ
          thống trong nhà, kết nối với cộng đồng thông minh, và tận hưởng những
          tiện ích hiện đại mà ứng dụng mang lại. Khám phá ngay Yoolife và hòa
          mình vào không gian sống thông minh, tiện lợi và thú vị!
        </div>
      </div>
    </section>
  );
}

export default Section05;
