import { AnimatePresence, motion } from 'framer-motion';
import { TClassValue, cn } from 'src/common/utils';

type TFollowingPointerProps = {
  isInside?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: TClassValue;
};

const FollowingPointer = ({
  isInside,
  style,
  children,
  className,
}: TFollowingPointerProps) => {
  return (
    <AnimatePresence mode="wait">
      {isInside && (
        <motion.div
          style={{
            pointerEvents: 'none',
            ...style,
          }}
          initial={{
            scale: 1,
            opacity: 1,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}
          className={cn('absolute z-[100]', className, 'max-lg:hidden')}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FollowingPointer;
