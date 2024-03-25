import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  useMedia,
  useMouse,
  useTimeout,
  useWindowScroll,
  useWindowSize,
} from 'react-use';
import { BANNER_PREVIEW_IMG } from 'src/common/constant';
import { cn } from 'src/common/utils';
import { LogoSvg, LogoTextSvg } from '../icons';
import FollowingPointer from '../items/FollowingPointer';
import Image from '../next/Image';

type THeaderProps = {};

const Header = ({}: THeaderProps) => {
  const { y } = useWindowScroll();
  const { width, height } = useWindowSize();
  const [isReady] = useTimeout(38000);

  const headerRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLVideoElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const [videoType, setVideoType] = useState<string>('LARGE');
  const isHeaderInView = useInView(headerRef);
  const isAbove1024 = useMedia('(min-width: 1024px)', true);

  useEffect(() => {
    if (isHeaderInView) setVideoType('LARGE');
  }, [y]);

  // const mappedVideoType = isHeaderInView ? 'SMALL' : 'LARGE';

  return (
    <header className="relative" ref={headerRef}>
      <div
        className={cn(
          'fixed left-0 top-0 z-50 w-dvw',
          // y > 0 && 'bg-gray-900/10 backdrop-blur-sm',
        )}
      >
        <nav className="mx-auto flex h-[64px] max-w-[1280px] flex-nowrap items-center justify-between px-3 lg:h-[88px] lg:px-12">
          <Link
            href="/"
            className="flex flex-nowrap items-center rounded pr-2 xl:flex-1"
          >
            <LogoSvg className="h-[20px] sm:h-[40px]" />
            <LogoTextSvg className="h-[16px] sm:h-[26px]" />
          </Link>

          {/* <a
            target="_blank"
            href="https://yootek.com.vn"
            className="text-[20px] font-[600] text-white hover:underline"
          >
            <span>Trở lại</span> <span className="text-green2">Yootek</span>
          </a> */}
        </nav>
      </div>

      <div className="relative left-0 top-0 w-dvw max-w-[1920px] xl:h-dvh">
        {isAbove1024 && !isHeaderInView && (
          <div className="relative max-w-[1920px]">
            <Image
              className="w-full object-contain xl:h-full xl:object-cover"
              src={BANNER_PREVIEW_IMG}
              alt="BANNER_PREVIEW_IMG"
            />
          </div>
        )}

        <div
          key={String(videoType)}
          className={cn(
            'relative max-w-[1920px]',
            isAbove1024
              ? videoType === 'LARGE' && !isHeaderInView
                ? 'fixed right-4 top-4 z-[100] w-[160px] cursor-pointer rounded'
                : 'z-0 w-full object-cover xl:h-full'
              : 'z-0 w-full object-cover xl:h-full',
          )}
          onClick={() => {
            if (!isHeaderInView) {
              setIsInside(false);
              setVideoType('LARGE2');
            }
          }}
        >
          <video
            src="/v1/header-banner-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster={
              process.env.NODE_ENV === 'production'
                ? BANNER_PREVIEW_IMG
                : '/images/Banner-Preview.png'
            }
            className="z-0 w-full object-contain xl:h-full xl:object-cover"
            preload="metadata"
            disablePictureInPicture
            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
            ref={ref}
            onMouseEnter={() => setIsInside(true)}
            onMouseLeave={() => setIsInside(false)}
          ></video>
          <FollowingPointer
            isInside={isInside}
            style={{ top: elY + 8, left: elX + 8 }}
          >
            {isHeaderInView ? (
              <div className="pointer-events-none h-5 w-5 rounded-full bg-green1"></div>
            ) : (
              <div className="pointer-events-none min-w-5 whitespace-nowrap rounded-full bg-green1 px-2 py-0.5">
                Thu gọn
              </div>
            )}
          </FollowingPointer>
        </div>

        {y > 0 && (
          <div className="absolute bottom-0 z-[1] w-full translate-y-[1px] max-[375px]:hidden">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="h-16 w-full"
            >
              <path
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                className="fill-bg"
              ></path>
            </svg>
          </div>
        )}
        {/* <div className="absolute -bottom-0 -left-1 -right-1 z-10 h-[20px] bg-gradient-to-t from-bg blur-sm"></div> */}

        {(y > 0 || isReady()) && (
          <a
            href="#"
            className="group/scrollDownBtn absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer rounded-full pt-14 xl:flex"
          >
            <span className="absolute left-1/2 top-1.5 -ml-4 h-14 w-8 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm"></span>
            <span className="absolute left-1/2 top-3 -ml-1 h-2 w-2 animate-[scrollDownBtn_2s_infinite] rounded-full bg-white"></span>

            {/* <span className="hidden text-base font-[600] text-white group-hover/scrollDownBtn:flex">
              Xem thêm
            </span> */}
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
