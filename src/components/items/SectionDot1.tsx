import { ClassValue } from 'clsx';
import { cn } from 'src/common/utils';

type TSectionDot1Props = {
  image?: React.ReactNode;
  text?: React.ReactNode;
  classNameWrapper?: ClassValue;
  classNameDot?: ClassValue;
  classNameItem?: ClassValue;
  classNameOutline?: ClassValue;
};

function SectionDot1({
  image,
  text,
  classNameWrapper = 'h-[105px] w-[105px] hover:h-[160px] hover:w-[160px]',
  classNameDot = 'h-[40px] w-[40px]',
  classNameItem,
  classNameOutline,
}: TSectionDot1Props) {
  return (
    <div
      className={cn(
        'inset-center group absolute flex cursor-pointer flex-col items-center justify-center rounded-full border-[5px] border-gray-50 bg-transparent duration-200 ease-in hover:bg-gray-50/10',
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
          'inset-center absolute h-full w-full scale-[1.3] rounded-full border-[4px] border-gray-50/10 bg-transparent group-hover:scale-[1.2] group-hover:border-2 group-hover:border-gray-50/50',
          classNameOutline,
        )}
      ></div>
      <div
        className={cn(
          'flex flex-col items-center justify-center p-2.5 pb-4 opacity-0 duration-200 ease-in group-hover:opacity-100',
          classNameItem,
        )}
      >
        {image}
        {text}
      </div>
    </div>
  );
}

export default SectionDot1;
