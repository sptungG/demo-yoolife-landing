import Link from 'next/link';
import { cn } from 'src/common/utils';
import { LogoSvg, LogoTextSvg } from '../icons';

type THeaderProps = {};

const Header = ({}: THeaderProps) => {
  return (
    <header className="flex h-[64px] items-center lg:h-[88px]">
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
    </header>
  );
};

export default Header;
