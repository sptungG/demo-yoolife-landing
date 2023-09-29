import { ClassValue } from 'clsx';
import { Link, LinkProps } from 'react-scroll';
import { cn } from 'src/common/utils';

type TProps = {
  children?: React.ReactNode;
  className?: ClassValue;
  classNameActive?: ClassValue;
} & Omit<LinkProps, 'ref' | 'activeClass'>;

function HLink({ className, children, classNameActive, ...props }: TProps) {
  return (
    <Link
      activeClass={cn(classNameActive)}
      className={cn(className)}
      spy={true}
      smooth={true}
      offset={-88}
      duration={800}
      {...props}
    >
      {children}
    </Link>
  );
}

export default HLink;
