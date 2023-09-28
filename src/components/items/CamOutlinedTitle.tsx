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
      <CamOutlinedSvg className="h-[5rem] w-[12.5rem]" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7.25rem"
        height="4.625rem"
        viewBox="0 0 116 74"
        fill="none"
        className="absolute left-0 top-0 -z-10"
      >
        <path
          d="M77 14L116 60.5H90.5L77.5 73.5H20L0 53.5V0.5H63.5L77 14Z"
          fill="#323232"
        />
      </svg>
      <div className="absolute left-[0.5rem] top-[0.6875rem] text-sm text-gray-50">
        {sub}
      </div>
      <div className="absolute left-[4rem] top-[1.8125rem] text-[1.25rem] font-[600] text-green1">
        {title}
      </div>
    </div>
  );
};

export default CamOutlinedTitle;
