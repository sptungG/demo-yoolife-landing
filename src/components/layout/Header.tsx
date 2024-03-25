import Link from 'next/link';
import { BANNER_PREVIEW_IMG } from 'src/common/constant';
import { LogoSvg, LogoTextSvg } from '../icons';

function Header() {
  const handleScrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <header className="">
      <div className="relative left-0 top-0 h-fit max-h-[1080px] w-full pt-[88px] xl:pt-0">
        <video
          src="/v1/header-banner-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={BANNER_PREVIEW_IMG}
          className="z-0 h-full w-full object-contain"
        ></video>
        {/* <div className="absolute -bottom-0 -left-1 -right-1 z-10 h-[20px] bg-gradient-to-t from-bg blur-sm"></div> */}
      </div>
      <div className="fixed left-0 top-0 z-20 w-full bg-bg/90 bg-opacity-60 backdrop-blur-sm">
        <nav className="mx-auto flex h-[88px] max-w-[1280px] flex-nowrap items-center justify-between px-12">
          <Link href="/" className="flex flex-nowrap items-center xl:flex-1">
            <LogoSvg height={40} />
            <LogoTextSvg height={26} />
          </Link>

          <a
            href="https://yootek.com.vn"
            className="text-[20px] font-[600] text-white hover:underline"
          >
            <span>Trở lại</span> <span className="text-green2">Yootek</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
