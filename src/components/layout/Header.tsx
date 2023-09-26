import { MdMenu } from 'react-icons/md';
import { LogoSvg, LogoTextSvg } from '../icons';

function Header() {
  return (
    <header className="h-screen">
      <div className="absolute left-0 top-0 h-screen w-full">
        <video
          src="/header-banner-1.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="absolute left-0 top-0 z-0 h-screen w-screen object-cover"
        ></video>
        <div className="from-bg absolute -bottom-2 -left-1 -right-1 z-10 h-[10%] bg-gradient-to-t blur-sm"></div>
      </div>
      <div className="w-full bg-gray-800 bg-opacity-60 backdrop-blur-sm">
        <nav className="mx-auto flex h-[88px] max-w-[1280px] flex-nowrap items-center justify-between px-12">
          <div className="flex flex-nowrap items-center lg:flex-1">
            <LogoSvg height={40} />
            <LogoTextSvg height={26} />
          </div>

          <div className="hidden justify-between text-[20px] lg:flex lg:flex-1 lg:gap-x-[56px]">
            <div className="whitespace-nowrap font-[600] text-gray-50">
              Trang chủ
            </div>
            <div className="whitespace-nowrap font-[600] text-gray-50">
              Giải pháp
            </div>
            <div className="whitespace-nowrap font-[600] text-gray-50">
              Liên hệ
            </div>
          </div>

          <div className="hidden w-1 lg:flex lg:flex-1 lg:justify-end"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            >
              <span className="sr-only">Open main menu</span>
              <MdMenu className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
