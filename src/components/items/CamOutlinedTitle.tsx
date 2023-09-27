import { ClassValue } from 'clsx';
import { cn } from 'src/common/utils';
import { CamOutlinedSvg } from '../icons';

type TCamOutlinedTitleProps = {
  sub?: string;
  title?: string;
  classNameWrapper?: ClassValue;
};

const CamOutlinedTitle = ({
  sub,
  title,
  classNameWrapper,
}: TCamOutlinedTitleProps) => {
  return (
    <div className={cn('relative', classNameWrapper)}>
      <CamOutlinedSvg className="h-[80px] w-[200px]" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="116"
        height="74"
        viewBox="0 0 116 74"
        fill="none"
        className="absolute left-0 top-0 -z-10"
      >
        <path
          d="M77 14L116 60.5H90.5L77.5 73.5H20L0 53.5V0.5H63.5L77 14Z"
          fill="#323232"
        />
      </svg>
      <div className="absolute left-[8px] top-[11px] text-sm text-gray-50">
        {sub}
      </div>
      <div className="absolute left-[64px] top-[29px] text-[1.25rem] font-[600] text-green1">
        {title}
      </div>
    </div>
  );
};

export default CamOutlinedTitle;
