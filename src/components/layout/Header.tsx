import Link from 'next/link';
import { LogoSvg, LogoTextSvg, MenuBarSvg } from '../icons';

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
          src="/header-banner-1.mp4"
          autoPlay
          muted
          loop
          playsInline
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

          <div className="hidden justify-between text-[20px] xl:flex xl:flex-1 xl:gap-x-[56px]">
            <Link
              href="/"
              className="cursor-pointer select-none whitespace-nowrap font-[600] text-gray-50 hover:underline"
            >
              Trang chủ
            </Link>
            <Link
              href="/#solutions"
              className="cursor-pointer select-none whitespace-nowrap font-[600] text-gray-50 hover:underline"
            >
              Giải pháp
            </Link>
            <Link
              href="/#contact-us"
              className="cursor-pointer select-none whitespace-nowrap font-[600] text-gray-50 hover:underline"
            >
              Liên hệ
            </Link>
          </div>

          <div className="w-1 xl:flex xl:flex-1 xl:justify-end">
            {/* <button className="flex h-12 items-center justify-center rounded-full border border-gray-300/50 px-12 text-gray-50">
              Ngôn ngữ
            </button> */}
          </div>
          <div className="flex xl:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            >
              <span className="sr-only">Open main menu</span>
              <MenuBarSvg className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
