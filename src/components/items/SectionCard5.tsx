import { useId } from 'react';
import { NImage as Image } from '../next/Image';

type TSectionCard5Props = {
  imageUrl?: string;
  title?: string;
  sub?: string;
};

const SectionCard5 = ({ imageUrl = '', sub, title }: TSectionCard5Props) => {
  const uid = useId();
  return (
    <div className="flex w-[180px] flex-col">
      <div className="relative mb-2.5 h-[114px] w-full">
        <Image
          fill
          src={imageUrl}
          alt={''}
          className="object-contain"
          quality={1}
        />
      </div>
      <div className="text-green1 mb-2.5 flex h-[30px] items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-[1.5px] px-2 text-base font-[600]">
        {title}
      </div>
      <div className="text-center text-[15px] font-[600] text-gray-50">
        {sub}
      </div>
    </div>
  );
};

export default SectionCard5;
