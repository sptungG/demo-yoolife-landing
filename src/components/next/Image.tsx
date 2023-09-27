import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import { ForwardRefRenderFunction, forwardRef } from 'react';

const imageLoader = ({
  src,
  width,
  quality,
}: Pick<NextImageProps, 'src' | 'width' | 'quality'>) => {
  return `${src}?w=${width}&q=${1}`;
};

export const NImage = ({ src, alt, ...props }: NextImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
      loader={imageLoader}
      {...props}
    />
  );
};

type TImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {};

const Image: ForwardRefRenderFunction<HTMLImageElement, TImageProps> = (
  { src, alt, ...props },
  forwardedRef,
) => {
  return (
    <picture>
      <img ref={forwardedRef} src={src} alt={alt} {...props} />
    </picture>
  );
};

export default forwardRef(Image);
