import { ClassValue } from 'clsx';
import { cn } from 'src/common/utils';

type TSectionDot2Props = {
  image?: React.ReactNode;
  text?: React.ReactNode;
  classNameWrapper?: ClassValue;
  classNameDot?: ClassValue;
  classNameItem?: ClassValue;
  classNameOutline?: ClassValue;
};

function SectionDot2({
  image,
  text,
  classNameWrapper = 'h-[105px] w-[105px] hover:h-[160px] hover:w-[160px]',
  classNameDot = 'h-[40px] w-[40px]',
  classNameItem,
  classNameOutline,
}: TSectionDot2Props) {
  return (
    <div
      className={cn(
        'inset-center group absolute flex cursor-pointer flex-col items-center justify-center rounded-full border-[2px] border-gray-50 bg-transparent duration-200 ease-in hover:border-[6px] hover:border-gray-50/30',
        classNameWrapper,
      )}
    >
      <div
        className={cn(
          'inset-center absolute rounded-full bg-gray-50 group-hover:hidden',
          classNameDot,
        )}
      ></div>
      <div
        className={cn(
          'inset-center absolute scale-[1.6] rounded-full bg-gray-50/10 group-hover:hidden',
          classNameDot,
        )}
      ></div>
      <div
        className={cn(
          'inset-center group-hover:border-1 absolute h-full w-full scale-[1.3] rounded-full border-[1.5px] border-gray-50/10 bg-transparent group-hover:scale-[1.2] group-hover:border-gray-50',
          classNameOutline,
        )}
      ></div>
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center rounded-full opacity-0 duration-200 ease-in group-hover:bg-gray-50 group-hover:opacity-100',
          classNameItem,
        )}
      >
        {image}
        {text}
      </div>
    </div>
  );
}

export default SectionDot2;
